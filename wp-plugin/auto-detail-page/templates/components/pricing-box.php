<div class="adp-pricing-box">
    <!-- Vehicle Title Section -->
    <div class="adp-vehicle-title">
        <h1 id="adp-main-vehicle-title">Chevrolet Camaro Coupe SS 6.2 V8 Klappe-Recaro</h1>
        <p class="adp-vehicle-subtitle">Limousine, Gebrauchtwagen</p>
    </div>
    
    <!-- Tabs -->
    <div class="adp-pricing-tabs">
        <button class="adp-tab adp-tab-active" data-tab="barkauf">Barkauf</button>
        <button class="adp-tab" data-tab="finanzierung">Finanzierung</button>
        <button class="adp-tab" data-tab="leasing">Leasing</button>
    </div>
    
    <!-- Price Display -->
    <div class="adp-price-display">
        <div class="adp-price-header">
            <svg class="adp-price-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect width="20" height="14" x="2" y="5" rx="2"/>
                <line x1="2" x2="22" y1="10" y2="10"/>
            </svg>
            <span class="adp-price-subtitle">Kaufpreis</span>
        </div>
        <div class="adp-price-amount">
            <span class="adp-price-value">24.990</span>
            <span class="adp-price-currency">€</span>
            <button class="adp-info-btn" data-modal="financing-info" style="display: none;">
                <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m9,9 0,0a3,3 0 0,1 6,0c0,2 -3,3 -3,3"/>
                    <path d="m9,17 0.01,0"/>
                </svg>
            </button>
        </div>
    </div>
    
    <!-- Details -->
    <div class="adp-pricing-details">
        <!-- Net Price - only for Barkauf -->
        <div class="adp-detail-row adp-net-price">
            <span class="adp-detail-label">Netto: 20.990 €</span>
            <span class="adp-detail-value">MwSt. ausweisbar</span>
        </div>
        
        <!-- Warranty - only for Barkauf -->
        <div class="adp-detail-row adp-warranty">
            <span class="adp-detail-label">Gewährleistung</span>
            <span class="adp-detail-value">12 Monate</span>
        </div>
        
        <!-- Financing Details - hidden by default -->
        <div class="adp-financing-details" style="display: none;">
            <div class="adp-detail-row">
                <span class="adp-detail-label">Anzahlung</span>
                <div class="adp-input-wrapper">
                    <input type="text" class="adp-anzahlung-input" value="4.990">
                    <span class="adp-input-suffix">€</span>
                </div>
            </div>
            <div class="adp-detail-row">
                <span class="adp-detail-label">Laufzeit</span>
                <select class="adp-laufzeit-select">
                    <option value="12">12 Monate</option>
                    <option value="24">24 Monate</option>
                    <option value="36">36 Monate</option>
                    <option value="48">48 Monate</option>
                    <option value="60">60 Monate</option>
                    <option value="72">72 Monate</option>
                    <option value="84" selected>84 Monate</option>
                    <option value="96">96 Monate</option>
                    <option value="108">108 Monate</option>
                    <option value="120">120 Monate</option>
                </select>
            </div>
        </div>
        
        <!-- Leasing Details - hidden by default -->
        <div class="adp-leasing-details" style="display: none;">
            <div class="adp-detail-row">
                <span class="adp-detail-label">Laufzeit</span>
                <span class="adp-detail-value">48 Monate</span>
            </div>
            <div class="adp-detail-row">
                <span class="adp-detail-label">Kilometer/Jahr</span>
                <span class="adp-detail-value">15.000 km</span>
            </div>
            <div class="adp-detail-row">
                <span class="adp-detail-label">Sonderzahlung</span>
                <span class="adp-detail-value">0 €</span>
            </div>
        </div>
    </div>
    
    <!-- CTA Button -->
    <button class="adp-btn adp-btn-primary adp-btn-full adp-pricing-cta">
        Jetzt anfragen
    </button>
    
    <!-- Disclaimer -->
    <p class="adp-disclaimer" style="display: none;">
        * Beispielrechnung, unverbindlich. Bonitätsprüfung erforderlich.
    </p>
</div>

<!-- Financing Info Modal -->
<div class="adp-modal" id="adp-financing-modal">
    <div class="adp-modal-content">
        <div class="adp-modal-header">
            <h3>Finanzierungsbeispiel</h3>
            <button class="adp-modal-close">
                <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="m18 6-12 12"/>
                    <path d="m6 6 12 12"/>
                </svg>
            </button>
        </div>
        
        <div class="adp-modal-body">
            <div class="adp-financing-breakdown">
                <div class="adp-breakdown-row">
                    <span>Fahrzeugpreis</span>
                    <span class="adp-vehicle-price">24.990 €</span>
                </div>
                <div class="adp-breakdown-row">
                    <span>Anzahlung</span>
                    <span class="adp-down-payment">-4.990 €</span>
                </div>
                <div class="adp-breakdown-row">
                    <span>Nettodarlehensbetrag</span>
                    <span class="adp-loan-amount">20.000 €</span>
                </div>
                <div class="adp-breakdown-row">
                    <span>Fester Sollzins p.a.</span>
                    <span>3.9%</span>
                </div>
                <div class="adp-breakdown-row">
                    <span>Effektiver Jahreszins</span>
                    <span>4.2%</span>
                </div>
                <div class="adp-breakdown-row">
                    <span>Laufzeit</span>
                    <span class="adp-term">84 Monate</span>
                </div>
                <div class="adp-breakdown-result">
                    <span>Monatsrate</span>
                    <span class="adp-monthly-rate">289 €</span>
                </div>
            </div>
            
            <div class="adp-disclaimer-box">
                <strong>Hinweis:</strong> Beispielrechnung, unverbindlich. Bonitätsprüfung erforderlich.
                Die tatsächlichen Konditionen können abweichen.
            </div>
        </div>
    </div>
</div>