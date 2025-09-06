/**
 * Auto Detail Page JavaScript
 * WordPress Plugin Scripts
 */

(function($) {
    'use strict';

    // Global variables
    let currentImageIndex = 0;
    let vehiclePrice = 24990;
    let currentTab = 'barkauf';
    let anzahlung = 4990;
    let laufzeit = 84;
    let interestRate = 3.9;
    let effectiveRate = 4.2;

    // Initialize when document is ready
    $(document).ready(function() {
        initializeImageGallery();
        initializePricingBox();
        initializeStickyBars();
        initializeContactForm();
        initializeModals();
        initializeNavigation();
        initializeTouchGestures();
    });

    /**
     * Image Gallery Functions
     */
    function initializeImageGallery() {
        // Navigation arrows
        $('.adp-nav-prev').on('click', function() {
            navigateImage(-1);
        });

        $('.adp-nav-next').on('click', function() {
            navigateImage(1);
        });

        // Thumbnail clicks
        $('.adp-thumbnail').on('click', function() {
            const index = parseInt($(this).data('index'));
            setCurrentImage(index);
        });

        // Mobile dots
        $('.adp-dot').on('click', function() {
            const index = parseInt($(this).data('index'));
            setCurrentImage(index);
        });

        // Keyboard navigation
        $(document).on('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                navigateImage(-1);
            } else if (e.key === 'ArrowRight') {
                navigateImage(1);
            }
        });
    }

    function navigateImage(direction) {
        const totalImages = window.adpImageData ? window.adpImageData.length : 6;
        currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
        setCurrentImage(currentImageIndex);
    }

    function setCurrentImage(index) {
        currentImageIndex = index;
        
        // Update main image
        if (window.adpImageData && window.adpImageData[index]) {
            $('.adp-current-image').attr('src', window.adpImageData[index].full);
        }
        
        // Update thumbnails
        $('.adp-thumbnail').removeClass('adp-thumbnail-active');
        $('.adp-thumbnail[data-index="' + index + '"]').addClass('adp-thumbnail-active');
        
        // Update mobile dots
        $('.adp-dot').removeClass('adp-dot-active');
        $('.adp-dot[data-index="' + index + '"]').addClass('adp-dot-active');
        
        // Update mobile counter
        $('.adp-current-index').text(index + 1);
    }

    /**
     * Pricing Box Functions
     */
    function initializePricingBox() {
        // Tab switching
        $('.adp-tab').on('click', function() {
            const tab = $(this).data('tab');
            switchPricingTab(tab);
        });

        // Anzahlung input
        $('.adp-anzahlung-input').on('input', function() {
            const value = $(this).val().replace(/\./g, '');
            const numericValue = parseInt(value) || 0;
            
            if (numericValue <= vehiclePrice) {
                anzahlung = numericValue;
                updateFinancingCalculation();
                $(this).val(formatCurrency(numericValue, false));
            }
        });

        // Laufzeit select
        $('.adp-laufzeit-select').on('change', function() {
            laufzeit = parseInt($(this).val());
            updateFinancingCalculation();
        });

        // Info button
        $('.adp-info-btn').on('click', function() {
            showFinancingModal();
        });

        // Initial calculation
        updateFinancingCalculation();
    }

    function switchPricingTab(tab) {
        currentTab = tab;
        
        // Update active tab
        $('.adp-tab').removeClass('adp-tab-active');
        $('.adp-tab[data-tab="' + tab + '"]').addClass('adp-tab-active');
        
        // Update price display and details
        updatePriceDisplay();
        updatePricingDetails();
    }

    function updatePriceDisplay() {
        const priceData = {
            barkauf: {
                price: '24.990',
                subtitle: 'Kaufpreis',
                icon: 'banknote'
            },
            finanzierung: {
                price: formatCurrency(calculateMonthlyPayment(), false),
                subtitle: 'monatlich ab',
                icon: 'calculator'
            },
            leasing: {
                price: '199',
                subtitle: 'monatlich ab',
                icon: 'credit-card'
            }
        };

        const data = priceData[currentTab];
        $('.adp-price-value').text(data.price);
        $('.adp-price-subtitle').text(data.subtitle);
        
        // Show/hide info button
        if (currentTab === 'finanzierung') {
            $('.adp-info-btn').show();
        } else {
            $('.adp-info-btn').hide();
        }
    }

    function updatePricingDetails() {
        // Hide all detail sections
        $('.adp-net-price, .adp-warranty, .adp-financing-details, .adp-leasing-details').hide();
        $('.adp-disclaimer').hide();
        
        // Show relevant sections
        if (currentTab === 'barkauf') {
            $('.adp-net-price, .adp-warranty').show();
        } else if (currentTab === 'finanzierung') {
            $('.adp-financing-details, .adp-disclaimer').show();
        } else if (currentTab === 'leasing') {
            $('.adp-leasing-details, .adp-disclaimer').show();
        }
    }

    function calculateMonthlyPayment() {
        const loanAmount = vehiclePrice - anzahlung;
        
        if (loanAmount <= 0) {
            return 0;
        }

        const monthlyRate = interestRate / 100 / 12;
        const numPayments = laufzeit;

        if (monthlyRate === 0) {
            return loanAmount / numPayments;
        } else {
            const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                           (Math.pow(1 + monthlyRate, numPayments) - 1);
            return payment;
        }
    }

    function updateFinancingCalculation() {
        if (currentTab === 'finanzierung') {
            updatePriceDisplay();
            updateFinancingModal();
        }
    }

    function updateFinancingModal() {
        const monthlyPayment = calculateMonthlyPayment();
        const loanAmount = vehiclePrice - anzahlung;
        
        $('.adp-vehicle-price').text(formatCurrency(vehiclePrice));
        $('.adp-down-payment').text('-' + formatCurrency(anzahlung));
        $('.adp-loan-amount').text(formatCurrency(loanAmount));
        $('.adp-term').text(laufzeit + ' Monate');
        $('.adp-monthly-rate').text(formatCurrency(monthlyPayment));
    }

    /**
     * Sticky Bars Functions
     */
    function initializeStickyBars() {
        let titleObserver;
        let specsObserver;

        // Mobile: Show sticky bar when title scrolls out of view
        if (window.innerWidth < 769) {
            const mainTitle = document.getElementById('adp-main-vehicle-title');
            if (mainTitle) {
                titleObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.boundingClientRect.bottom < 100) {
                            $('.adp-sticky-vehicle-bar').addClass('adp-visible');
                        } else {
                            $('.adp-sticky-vehicle-bar').removeClass('adp-visible');
                        }
                    });
                });
                titleObserver.observe(mainTitle);
            }
        } else {
            // Desktop: Show when vehicle specs are visible
            const vehicleSpecs = document.querySelector('.adp-vehicle-specs');
            if (vehicleSpecs) {
                specsObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            $('.adp-sticky-vehicle-bar').addClass('adp-visible');
                        } else {
                            $('.adp-sticky-vehicle-bar').removeClass('adp-visible');
                        }
                    });
                }, {
                    threshold: 0.1,
                    rootMargin: '0px 0px -10% 0px'
                });
                specsObserver.observe(vehicleSpecs);
            }
        }

        // Bottom sticky bar for mobile
        if (window.innerWidth < 769) {
            $(window).on('scroll', function() {
                const vehicleSpecs = $('.adp-vehicle-specs');
                if (vehicleSpecs.length) {
                    const rect = vehicleSpecs[0].getBoundingClientRect();
                    if (rect.bottom < 400) {
                        $('.adp-sticky-bottom-bar').addClass('adp-visible');
                    } else {
                        $('.adp-sticky-bottom-bar').removeClass('adp-visible');
                    }
                }
            });
        }

        // Handle window resize
        $(window).on('resize', function() {
            if (titleObserver) titleObserver.disconnect();
            if (specsObserver) specsObserver.disconnect();
            initializeStickyBars();
        });
    }

    /**
     * Contact Form Functions
     */
    function initializeContactForm() {
        // Interest buttons
        $('.adp-interest-btn').on('click', function() {
            $(this).toggleClass('adp-active');
        });

        // Form submission
        $('#adp-contact-form').on('submit', function(e) {
            e.preventDefault();
            submitContactForm();
        });
    }

    function submitContactForm() {
        const formData = {
            action: 'submit_contact_form',
            nonce: adp_ajax.nonce,
            salutation: $('input[name="salutation"]:checked').val(),
            firstName: $('input[name="firstName"]').val(),
            lastName: $('input[name="lastName"]').val(),
            email: $('input[name="email"]').val(),
            countryCode: $('select[name="countryCode"]').val(),
            phone: $('input[name="phone"]').val(),
            interests: $('.adp-interest-btn.adp-active').map(function() {
                return $(this).data('interest');
            }).get(),
            message: $('textarea[name="message"]').val(),
            privacyAccepted: $('input[name="privacyAccepted"]').is(':checked')
        };

        $.ajax({
            url: adp_ajax.ajax_url,
            type: 'POST',
            data: formData,
            success: function(response) {
                if (response.success) {
                    alert('Vielen Dank für Ihre Anfrage! Wir melden uns bald bei Ihnen.');
                    $('#adp-contact-form')[0].reset();
                    $('.adp-interest-btn').removeClass('adp-active');
                } else {
                    alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
                }
            },
            error: function() {
                alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
            }
        });
    }

    /**
     * Modal Functions
     */
    function initializeModals() {
        // Modal close buttons
        $('.adp-modal-close').on('click', function() {
            closeModal();
        });

        // Close modal on backdrop click
        $('.adp-modal').on('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal on escape key
        $(document).on('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }

    function showFinancingModal() {
        updateFinancingModal();
        $('#adp-financing-modal').addClass('adp-visible');
        $('body').css('overflow', 'hidden');
    }

    function closeModal() {
        $('.adp-modal').removeClass('adp-visible');
        $('body').css('overflow', '');
    }

    /**
     * Navigation Functions
     */
    function initializeNavigation() {
        // Action buttons
        $('[data-action]').on('click', function() {
            const action = $(this).data('action');
            handleAction(action);
        });
    }

    function handleAction(action) {
        switch (action) {
            case 'call':
                window.location.href = 'tel:+4971234567890';
                break;
            case 'share':
                if (navigator.share) {
                    navigator.share({
                        title: 'Chevrolet Camaro Coupe SS 6.2 V8',
                        text: 'Schauen Sie sich dieses Fahrzeug an',
                        url: window.location.href
                    });
                } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link wurde in die Zwischenablage kopiert');
                }
                break;
            case 'download':
                console.log('Download PDF');
                break;
            case 'financing':
                scrollToElement('[data-financing]');
                break;
            case 'tradein':
                scrollToElement('[data-trade-in]');
                break;
            case 'contact':
                scrollToElement('[data-contact-form]');
                break;
        }
    }

    function scrollToElement(selector) {
        const element = $(selector);
        if (element.length) {
            $('html, body').animate({
                scrollTop: element.offset().top - 100
            }, 500);
        }
    }

    /**
     * Touch Gesture Functions
     */
    function initializeTouchGestures() {
        let touchStartX = 0;
        let touchEndX = 0;

        $('.adp-main-image').on('touchstart', function(e) {
            touchStartX = e.originalEvent.touches[0].clientX;
        });

        $('.adp-main-image').on('touchmove', function(e) {
            touchEndX = e.originalEvent.touches[0].clientX;
        });

        $('.adp-main-image').on('touchend', function() {
            if (!touchStartX || !touchEndX) return;
            
            const distance = touchStartX - touchEndX;
            const isLeftSwipe = distance > 50;
            const isRightSwipe = distance < -50;

            if (isLeftSwipe) {
                navigateImage(1);
            } else if (isRightSwipe) {
                navigateImage(-1);
            }
            
            touchStartX = 0;
            touchEndX = 0;
        });
    }

    /**
     * Utility Functions
     */
    function formatCurrency(value, includeSymbol = true) {
        const formatted = new Intl.NumberFormat('de-DE', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
            useGrouping: true
        }).format(value);
        
        return includeSymbol ? formatted + ' €' : formatted;
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = function() {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Expose functions globally if needed
    window.adpFunctions = {
        setCurrentImage: setCurrentImage,
        switchPricingTab: switchPricingTab,
        showFinancingModal: showFinancingModal,
        closeModal: closeModal,
        formatCurrency: formatCurrency
    };

})(jQuery);