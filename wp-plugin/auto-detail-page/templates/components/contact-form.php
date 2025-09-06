<div class="adp-contact-form" data-contact-form>
    <h3 class="adp-section-title">Kontakt & Anfrage</h3>
    
    <div class="adp-contact-layout">
        <!-- Company Information -->
        <div class="adp-company-info">
            <div class="adp-company-header">
                <h4>Autohaus Beispiel GmbH</h4>
                <div class="adp-company-line"></div>
            </div>
            
            <div class="adp-company-details">
                <div class="adp-detail-item">
                    <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <div>
                        <div class="adp-detail-primary">Musterstraße 123</div>
                        <div class="adp-detail-secondary">70173 Stuttgart</div>
                    </div>
                </div>
                
                <div class="adp-detail-item">
                    <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12,6 12,12 16,14"/>
                    </svg>
                    <div>
                        <div class="adp-detail-primary">Öffnungszeiten</div>
                        <div class="adp-opening-status">Jetzt geöffnet</div>
                        <div class="adp-opening-hours">
                            <div>Mo–Fr: 08:00 – 18:00 Uhr</div>
                            <div>Sa: 09:00 – 16:00 Uhr</div>
                            <div>So: Geschlossen</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Contact Person -->
            <div class="adp-contact-person">
                <div class="adp-person-header">
                    <div class="adp-person-label">Ihr Ansprechpartner</div>
                    <div class="adp-person-line"></div>
                </div>
                
                <div class="adp-person-card">
                    <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                         alt="Michael Weber" class="adp-person-image">
                    
                    <div class="adp-person-info">
                        <div class="adp-person-name">Michael Weber</div>
                        <div class="adp-person-title">Verkaufsberater</div>
                        
                        <button class="adp-person-phone" data-action="call">
                            <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                            </svg>
                            <span>+49 (0) 7123 456 78-90</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Contact Form -->
        <div class="adp-form-section">
            <form class="adp-form" id="adp-contact-form">
                <!-- Salutation -->
                <div class="adp-form-group">
                    <label class="adp-form-label">
                        Anrede <span class="adp-required">*</span>
                    </label>
                    <div class="adp-radio-group">
                        <label class="adp-radio-label">
                            <input type="radio" name="salutation" value="herr" required>
                            <span>Herr</span>
                        </label>
                        <label class="adp-radio-label">
                            <input type="radio" name="salutation" value="frau" required>
                            <span>Frau</span>
                        </label>
                    </div>
                </div>
                
                <!-- Name -->
                <div class="adp-form-row">
                    <div class="adp-form-group">
                        <label class="adp-form-label">
                            Vorname <span class="adp-required">*</span>
                        </label>
                        <input type="text" name="firstName" class="adp-form-input" required>
                    </div>
                    
                    <div class="adp-form-group">
                        <label class="adp-form-label">
                            Nachname <span class="adp-required">*</span>
                        </label>
                        <input type="text" name="lastName" class="adp-form-input" required>
                    </div>
                </div>
                
                <!-- Email and Phone -->
                <div class="adp-form-row">
                    <div class="adp-form-group">
                        <label class="adp-form-label">
                            E-Mail <span class="adp-required">*</span>
                        </label>
                        <input type="email" name="email" class="adp-form-input" required>
                    </div>
                    
                    <div class="adp-form-group">
                        <label class="adp-form-label">
                            Telefonnummer <span class="adp-required">*</span>
                        </label>
                        <div class="adp-phone-input">
                            <select name="countryCode" class="adp-country-select">
                                <option value="+49">DE +49</option>
                                <option value="+43">AT +43</option>
                                <option value="+41">CH +41</option>
                                <option value="+33">FR +33</option>
                                <option value="+31">NL +31</option>
                            </select>
                            <input type="tel" name="phone" class="adp-form-input" placeholder="171 1234567" required>
                        </div>
                    </div>
                </div>
                
                <!-- Interests -->
                <div class="adp-form-group">
                    <label class="adp-form-label">Interesse</label>
                    <div class="adp-interest-buttons">
                        <button type="button" class="adp-interest-btn" data-interest="financing">
                            <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <rect width="20" height="14" x="2" y="5" rx="2"/>
                                <line x1="2" x2="22" y1="10" y2="10"/>
                            </svg>
                            <span>Finanzierung</span>
                        </button>
                        <button type="button" class="adp-interest-btn" data-interest="tradein">
                            <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M14 16H9m10 0h3m-3-3.5a3.5 3.5 0 0 1-7 0V9a3.5 3.5 0 0 1 7 0v3.5Z"/>
                                <path d="M4.5 4.5h15s0 0 0 0v15s0 0 0 0h-15s0 0 0 0v-15s0 0 0 0Z"/>
                            </svg>
                            <span>Inzahlungnahme</span>
                        </button>
                        <button type="button" class="adp-interest-btn" data-interest="testdrive">
                            <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
                            </svg>
                            <span>Probefahrt</span>
                        </button>
                    </div>
                </div>
                
                <!-- Message -->
                <div class="adp-form-group">
                    <label class="adp-form-label">Nachricht</label>
                    <textarea name="message" class="adp-form-textarea" rows="3">Hallo, ich interessiere mich für das Fahrzeug von Ihrer Website</textarea>
                </div>
                
                <!-- Privacy -->
                <div class="adp-form-group">
                    <label class="adp-checkbox-label">
                        <input type="checkbox" name="privacyAccepted" required>
                        <span class="adp-checkbox-text">
                            Ich stimme der <a href="#" class="adp-link">Datenschutzerklärung</a> zu 
                            und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden.
                        </span>
                    </label>
                </div>
                
                <!-- Submit Button -->
                <button type="submit" class="adp-btn adp-btn-primary adp-btn-full">
                    Jetzt anfragen
                </button>
                
                <!-- GDPR Notice -->
                <div class="adp-gdpr-notice">
                    <svg class="adp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="m9 12 2 2 4-4"/>
                    </svg>
                    <span>Wir schützen Deine Daten nach DSGVO-Standards.</span>
                </div>
            </form>
        </div>
    </div>
</div>