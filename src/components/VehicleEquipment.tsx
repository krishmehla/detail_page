import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, X } from 'lucide-react';

export const VehicleEquipment: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [showMobileOverlay, setShowMobileOverlay] = useState(false);

  const equipment = [
    'Zentralverriegelung',
    'Elektr. Wegfahrsperre',
    'Servolenkung',
    'ABS',
    'ESP',
    'Navigationssystem',
    'Partikelfilter',
    'Elektr. Seitenspiegel',
    'Bluetooth',
    'Bordcomputer',
    'Freisprecheinrichtung',
    'Start/Stopp-Automatik',
    'Berganfahrassistent',
    'Lederlenkrad',
    'Sprachsteuerung',
    'Touchscreen',
    'USB',
    'Sommerreifen',
    'Allwetterreifen',
    'Stahlfelgen',
    'Apple CarPlay',
    'Android Auto',
    'Musikstreaming integriert',
    'Elektr. Seitenspiegel anklappbar',
    'Sonderausstattung (Rückfahrkamera, Sitzpolsterungen, etc.)'
  ];

  // Mobile: Nur begrenzte Anzahl anzeigen
  const mobileVisibleEquipment = equipment.slice(0, 6);
  const hasMobileMoreEquipment = equipment.length > 6;

  // Desktop: 4 Reihen à 3 Spalten = 12 Items initial
  const desktopInitialCount = 16; // 4 Reihen à 4 Spalten = 16 Items
  const desktopVisibleEquipment = showMore ? equipment : equipment.slice(0, desktopInitialCount);
  const hasDesktopMoreEquipment = equipment.length > desktopInitialCount;

  const handleMobileMoreClick = () => {
    setShowMobileOverlay(true);
  };

  const handleDesktopMoreClick = () => {
    setShowMore(!showMore);
  };

  const closeMobileOverlay = () => {
    setShowMobileOverlay(false);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Ausstattung</h3>
        
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="relative">
            <div className="grid grid-cols-1 gap-3">
              {mobileVisibleEquipment.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 py-2">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Gradient Fade Effect für Mobile */}
            {hasMobileMoreEquipment && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
            )}
          </div>

          {hasMobileMoreEquipment && (
            <div className="flex justify-center mt-6">
              <button
                onClick={handleMobileMoreClick}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors duration-200"
              >
                <span>Mehr anzeigen</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="relative">
            <div className="grid grid-cols-4 gap-3">
              {desktopVisibleEquipment.map((item, index) => (
                <div key={index} className="flex items-center space-x-3 py-2">
                  <div className="flex-shrink-0">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-blue-600" />
                    </div>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
            
            {/* Gradient Fade Effect - nur wenn mehr Items vorhanden sind */}
            {hasDesktopMoreEquipment && !showMore && (
              <div 
                className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"
              />
            )}
            
            {/* Clickable overlay für "Mehr anzeigen" */}
            {hasDesktopMoreEquipment && !showMore && (
              <div 
                onClick={handleDesktopMoreClick}
                className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center pb-2 cursor-pointer hover:bg-gray-50/50 transition-colors duration-200 rounded-b-xl"
              >
                <div className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1">
                  <span>Mehr anzeigen</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            )}
            
            {/* "Weniger anzeigen" wenn expanded */}
            {hasDesktopMoreEquipment && showMore && (
              <div className="flex justify-center mt-30">
                <button
                  onClick={handleDesktopMoreClick}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors duration-200"
                >
                  <span>Weniger anzeigen</span>
                  <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      {showMobileOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 md:hidden">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden">
            {/* Overlay Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Komplette Ausstattung</h3>
              <button
                onClick={closeMobileOverlay}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto max-h-[60vh]">
              <div className="space-y-3">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 py-2">
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-blue-600" />
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};