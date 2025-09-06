import React, { useState, useEffect } from 'react';

export const StickyBottomBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Finde die VehicleSpecs Komponente (Fahrzeugdetails)
      const vehicleSpecs = document.querySelector('.grid.grid-cols-3.gap-3');
      
      if (vehicleSpecs) {
        const rect = vehicleSpecs.getBoundingClientRect();
        
        // Button erscheint wenn die Fahrzeugdetails komplett nach oben gescrollt sind
        // (User ist unter den 6 Bento-Boxen)
        const isAfterSpecs = rect.bottom < 400;
        
        setIsVisible(isAfterSpecs);
      }
    };

    // Event Listener hinzufügen
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    setTimeout(handleScroll, 100);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTAClick = () => {
    // Scrolle zum Kontaktformular
    const contactForm = document.querySelector('[data-contact-form]');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 transform transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      <div className="px-4 py-3">
        <button
          onClick={handleCTAClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <span>Jetzt anfragen</span>
        </button>
      </div>
    </div>
  );
};