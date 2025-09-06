/**
 * Auto Detail Page JavaScript
 * jQuery Implementation
 */

$(document).ready(function() {
    'use strict';

    // Global variables
    let currentImageIndex = 0;
    let vehiclePrice = 24990;
    let currentTab = 'barkauf';
    let anzahlung = 4990;
    let laufzeit = 84;
    let interestRate = 3.9;
    let effectiveRate = 4.2;

    // Image data
    const imageData = [
        {
            full: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            thumb: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop'
        },
        {
            full: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            thumb: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop'
        },
        {
            full: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            thumb: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop'
        },
        {
            full: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            thumb: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop'
        },
        {
            full: 'https://images.pexels.com/photos/1127249/pexels-photo-1127249.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            thumb: 'https://images.pexels.com/photos/1127249/pexels-photo-1127249.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop'
        },
        {
            full: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
            thumb: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop'
        }
    ];

    // Initialize all components
    initializeImageGallery();
    initializePricingBox();
    initializeStickyBars();
    initializeContactForm();
    initializeModals();
    initializeNavigation();
    initializeTouchGestures();

    /**
     * Image Gallery Functions
     */
    function initializeImageGallery() {
        // Navigation arrows
        $('.nav-prev').on('click', function() {
            navigateImage(-1);
        });

        $('.nav-next').on('click', function() {
            navigateImage(1);
        });

        // Thumbnail clicks
        $('.thumbnail').on('click', function() {
            const index = parseInt($(this).data('index'));
            setCurrentImage(index);
        });

        // Mobile dots
        $('.dot').on('click', function() {
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
        const totalImages = imageData.length;
        currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
        setCurrentImage(currentImageIndex);
    }

    function setCurrentImage(index) {
        currentImageIndex = index;
        
        // Update main image
        if (imageData[index]) {
            $('.current-image').attr('src', imageData[index].full);
        }
        
        // Update thumbnails
        $('.thumbnail').removeClass('active');
        $('.thumbnail[data-index="' + index + '"]').addClass('active');
        
        // Update mobile dots
        $('.dot').removeClass('active');
        $('.dot[data-index="' + index + '"]').addClass('active');
        
        // Update mobile counter
        $('.current-index').text(index + 1);
    }

    /**
     * Pricing Box Functions
     */
    function initializePricingBox() {
        // Tab switching
        $('.tab').on('click', function() {
            const tab = $(this).data('tab');
            switchPricingTab(tab);
        });

        // Anzahlung input
        $('.anzahlung-input').on('input', function() {
            const value = $(this).val().replace(/\./g, '');
            const numericValue = parseInt(value) || 0;
            
            if (numericValue <= vehiclePrice) {
                anzahlung = numericValue;
                updateFinancingCalculation();
                $(this).val(formatCurrency(numericValue, false));
            }
        });

        // Laufzeit select
        $('.laufzeit-select').on('change', function() {
            laufzeit = parseInt($(this).val());
            updateFinancingCalculation();
        });

        // Info button
        $('.info-btn').on('click', function() {
            showFinancingModal();
        });

        // Initial calculation
        updateFinancingCalculation();
    }

    function switchPricingTab(tab) {
        currentTab = tab;
        
        // Update active tab
        $('.tab').removeClass('active');
        $('.tab[data-tab="' + tab + '"]').addClass('active');
        
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
        $('.price-value').text(data.price);
        $('.price-subtitle').text(data.subtitle);
        
        // Show/hide info button
        if (currentTab === 'finanzierung') {
            $('.info-btn').show();
        } else {
            $('.info-btn').hide();
        }
    }

    function updatePricingDetails() {
        // Hide all detail sections
        $('.net-price, .warranty, .financing-details, .leasing-details').hide();
        $('.disclaimer').hide();
        
        // Show relevant sections
        if (currentTab === 'barkauf') {
            $('.net-price, .warranty').show();
        } else if (currentTab === 'finanzierung') {
            $('.financing-details, .disclaimer').show();
        } else if (currentTab === 'leasing') {
            $('.leasing-details, .disclaimer').show();
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
        
        $('.vehicle-price').text(formatCurrency(vehiclePrice) + ' €');
        $('.down-payment').text('-' + formatCurrency(anzahlung) + ' €');
        $('.loan-amount').text(formatCurrency(loanAmount) + ' €');
        $('.term').text(laufzeit + ' Monate');
        $('.monthly-rate').text(formatCurrency(monthlyPayment) + ' €');
    }

    /**
     * Sticky Bars Functions
     */
    function initializeStickyBars() {
        let titleObserver;
        let specsObserver;

        // Mobile: Show sticky bar when title scrolls out of view
        if (window.innerWidth < 769) {
            const mainTitle = document.getElementById('main-vehicle-title');
            if (mainTitle) {
                titleObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.boundingClientRect.bottom < 100) {
                            $('.sticky-vehicle-bar').addClass('visible');
                        } else {
                            $('.sticky-vehicle-bar').removeClass('visible');
                        }
                    });
                });
                titleObserver.observe(mainTitle);
            }
        } else {
            // Desktop: Show when vehicle specs are visible
            const vehicleSpecs = document.querySelector('.vehicle-specs');
            if (vehicleSpecs) {
                specsObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            $('.sticky-vehicle-bar').addClass('visible');
                        } else {
                            $('.sticky-vehicle-bar').removeClass('visible');
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
                const vehicleSpecs = $('.vehicle-specs');
                if (vehicleSpecs.length) {
                    const rect = vehicleSpecs[0].getBoundingClientRect();
                    if (rect.bottom < 400) {
                        $('.sticky-bottom-bar').addClass('visible');
                    } else {
                        $('.sticky-bottom-bar').removeClass('visible');
                    }
                }
            });
        }

        // Handle window resize
        $(window).on('resize', debounce(function() {
            if (titleObserver) titleObserver.disconnect();
            if (specsObserver) specsObserver.disconnect();
            initializeStickyBars();
        }, 250));
    }

    /**
     * Contact Form Functions
     */
    function initializeContactForm() {
        // Interest buttons
        $('.interest-btn').on('click', function() {
            $(this).toggleClass('active');
        });

        // Form submission
        $('#contact-form').on('submit', function(e) {
            e.preventDefault();
            submitContactForm();
        });
    }

    function submitContactForm() {
        const formData = {
            salutation: $('input[name="salutation"]:checked').val(),
            firstName: $('input[name="firstName"]').val(),
            lastName: $('input[name="lastName"]').val(),
            email: $('input[name="email"]').val(),
            countryCode: $('select[name="countryCode"]').val(),
            phone: $('input[name="phone"]').val(),
            interests: $('.interest-btn.active').map(function() {
                return $(this).data('interest');
            }).get(),
            message: $('textarea[name="message"]').val(),
            privacyAccepted: $('input[name="privacyAccepted"]').is(':checked')
        };

        // Simulate form submission
        alert('Vielen Dank für Ihre Anfrage! Wir melden uns bald bei Ihnen.');
        $('#contact-form')[0].reset();
        $('.interest-btn').removeClass('active');
    }

    /**
     * Modal Functions
     */
    function initializeModals() {
        // Modal close buttons
        $('.modal-close').on('click', function() {
            closeModal();
        });

        // Close modal on backdrop click
        $('.modal').on('click', function(e) {
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
        $('#financing-modal').addClass('visible');
        $('body').css('overflow', 'hidden');
    }

    function closeModal() {
        $('.modal').removeClass('visible');
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

        $('.main-image').on('touchstart', function(e) {
            touchStartX = e.originalEvent.touches[0].clientX;
        });

        $('.main-image').on('touchmove', function(e) {
            touchEndX = e.originalEvent.touches[0].clientX;
        });

        $('.main-image').on('touchend', function() {
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
    window.autoDetailPage = {
        setCurrentImage: setCurrentImage,
        switchPricingTab: switchPricingTab,
        showFinancingModal: showFinancingModal,
        closeModal: closeModal,
        formatCurrency: formatCurrency
    };
});