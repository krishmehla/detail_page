<div class="adp-container">
    <!-- Static Navigation Bar -->
    <div class="adp-static-nav">
        <div class="adp-nav-content">
            <button class="adp-back-btn">
                <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m15 18-6-6 6-6"/>
                </svg>
                <span>Zurück zu den Fahrzeugen</span>
            </button>
            
            <div class="adp-nav-actions">
                <button class="adp-nav-action" data-action="call">
                    <span class="adp-nav-action-text">Anrufen</span>
                    <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                </button>
                
                <button class="adp-nav-action" data-action="share">
                    <span class="adp-nav-action-text">Teilen</span>
                    <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="18" cy="5" r="3"/>
                        <circle cx="6" cy="12" r="3"/>
                        <circle cx="18" cy="19" r="3"/>
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
                    </svg>
                </button>
                
                <button class="adp-nav-action" data-action="download">
                    <span class="adp-nav-action-text">PDF</span>
                    <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                        <polyline points="7,10 12,15 17,10"/>
                        <line x1="12" x2="12" y1="15" y2="3"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Sticky Vehicle Bar -->
    <div class="adp-sticky-vehicle-bar">
        <div class="adp-sticky-content">
            <div class="adp-vehicle-info">
                <div class="adp-vehicle-image">
                    <img src="https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop" alt="Vehicle Preview">
                </div>
                <div class="adp-vehicle-details">
                    <h3>Chevrolet Camaro Coupe SS 6.2 V8 Klappe-Recaro</h3>
                    <div class="adp-price-info">
                        <span class="adp-price">24.990 €</span>
                        <span class="adp-financing">Finanz: ab 289 €</span>
                    </div>
                </div>
            </div>
            
            <div class="adp-sticky-actions">
                <button class="adp-btn adp-btn-secondary" data-action="financing">Finanzierung</button>
                <button class="adp-btn adp-btn-secondary" data-action="tradein">Inzahlungnahme</button>
                <button class="adp-btn adp-btn-primary" data-action="contact">Jetzt anfragen</button>
            </div>
            
            <!-- Mobile call button -->
            <div class="adp-mobile-call">
                <button class="adp-call-btn" data-action="call">
                    <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    
    <!-- Mobile Hero Image -->
    <div class="adp-mobile-hero">
        <?php include 'components/image-gallery.php'; ?>
    </div>
    
    <div class="adp-main-content">
        <!-- Mobile Pricing Box -->
        <div class="adp-mobile-pricing">
            <?php include 'components/pricing-box.php'; ?>
        </div>
        
        <!-- Desktop Layout: Gallery + Pricing -->
        <div class="adp-desktop-layout">
            <div class="adp-gallery-section">
                <?php include 'components/image-gallery.php'; ?>
            </div>
            
            <div class="adp-sidebar">
                <?php include 'components/pricing-box.php'; ?>
                <?php include 'components/vehicle-specs.php'; ?>
            </div>
        </div>
        
        <!-- Mobile Vehicle Specifications -->
        <div class="adp-mobile-specs">
            <?php include 'components/vehicle-specs.php'; ?>
        </div>
        
        <!-- Technical Data -->
        <?php include 'components/technical-data.php'; ?>
        
        <!-- Energy & Emissions -->
        <?php include 'components/energy-emissions.php'; ?>
        
        <!-- Vehicle Equipment -->
        <?php include 'components/vehicle-equipment.php'; ?>
        
        <!-- Vehicle Description -->
        <?php include 'components/vehicle-description.php'; ?>
        
        <!-- Trade-In Sections -->
        <div class="adp-tradein-sections">
            <?php include 'components/tradein-section.php'; ?>
            <?php include 'components/tradein-highlight.php'; ?>
        </div>
        
        <!-- Financing Calculator -->
        <?php include 'components/financing-calculator.php'; ?>
        
        <!-- Contact Form -->
        <?php include 'components/contact-form.php'; ?>
        
        <!-- Similar Vehicles -->
        <?php include 'components/similar-vehicles.php'; ?>
    </div>
    
    <!-- Sticky Bottom Bar -->
    <div class="adp-sticky-bottom-bar">
        <div class="adp-bottom-content">
            <button class="adp-btn adp-btn-primary adp-btn-full" data-action="contact">
                Jetzt anfragen
            </button>
        </div>
    </div>
</div>