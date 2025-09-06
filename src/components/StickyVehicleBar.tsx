import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

export const StickyVehicleBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) {
      // Mobile behavior: show when title scrolls out of view
      const handleScroll = () => {
        const mainTitle = document.getElementById('main-vehicle-title');
        
        if (mainTitle) {
          const rect = mainTitle.getBoundingClientRect();
          const titleOutOfView = rect.bottom < 100;
          setIsVisible(titleOutOfView);
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();

      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkMobile);
      };
    } else {
      // Desktop behavior: show when vehicle details section enters viewport
      const vehicleDetailsSection = document.querySelector('.grid.grid-cols-3.gap-3');
      
      if (vehicleDetailsSection) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              setIsVisible(entry.isIntersecting);
            });
          },
          {
            threshold: 0.1, // Trigger when 10% of the section is visible
            rootMargin: '0px 0px -10% 0px' // Trigger slightly before the section is fully visible
          }
        );

        observer.observe(vehicleDetailsSection);

        return () => {
          observer.disconnect();
          window.removeEventListener('resize', checkMobile);
        };
      }
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const handleCall = () => {
    window.location.href = 'tel:+4971234567890';
  };

  const handleFinancing = () => {
    const financingSection = document.querySelector('[data-financing]');
    financingSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTradeIn = () => {
    const tradeInSection = document.querySelector('[data-trade-in]');
    tradeInSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTAClick = () => {
    const contactForm = document.querySelector('[data-contact-form]');
    contactForm?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200 transform transition-all duration-300 ease-in-out ${
        isMobile 
          ? `top-0 ${isVisible ? 'translate-y-0' : '-translate-y-full'}` 
          : `bottom-0 border-t border-b-0 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`
      }`}
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Fahrzeug Info */}
          <div className={`flex items-start flex-1 min-w-0 ${!isMobile ? 'mr-4' : ''}`}>
            {/* Vorschaubild */}
            <div className="flex-shrink-0 mr-3 overflow-hidden rounded-lg">
              <img
                src="https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop"
                alt="Chevrolet Camaro Vorschau"
                className="w-14 h-11 object-cover"
              />
            </div>

            {/* Fahrzeug Details */}
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 text-sm truncate mb-1">
                Chevrolet Camaro Coupe SS 6.2 V8 Klappe-Recaro
              </h3>
              <div className="flex items-center space-x-3 text-sm">
                <span className="font-bold text-gray-900">24.990 €</span>
                <span className="text-gray-600">Finanz: ab 289 €</span>
              </div>
            </div>
          </div>

          {/* Mobile: Anruf Button */}
          {isMobile && (
            <div className="flex-shrink-0 ml-3">
              <button
                onClick={handleCall}
                className="bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 text-blue-600 p-3 rounded-lg transition-all duration-200 flex items-center justify-center"
                aria-label="Anrufen"
              >
                <Phone className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Desktop/Tablet: Three Buttons */}
          {!isMobile && (
            <div className="flex items-center space-x-3">
              <button
                onClick={handleFinancing}
                className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 text-sm font-medium"
              >
                Finanzierung
              </button>
              <button
                onClick={handleTradeIn}
                className="px-4 py-2 border border-gray-300 text-gray-700 bg-white rounded-lg hover:bg-gray-50 transition-all duration-200 text-sm font-medium"
              >
                Inzahlungnahme
              </button>
              <button
                onClick={handleCTAClick}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg"
              >
                Jetzt anfragen
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};