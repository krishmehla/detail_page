import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const TechnicalData: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const technicalData = [
    { label: 'Farbe', value: 'Weiß' },
    { label: 'Farbe (Hersteller)', value: 'Candy-Weiß' },
    { label: 'Anzahl der Türen', value: '4/5' },
    { label: 'Getriebe', value: 'Schaltgetriebe' },
    { label: 'Anzahl Sitzplätze', value: '3' },
    { label: 'Hubraum', value: '1.968 cm³' },
    { label: 'Zustand', value: 'Gebrauchtfahrzeug' },
    { label: 'Innenfarbe', value: 'Schwarz' },
    { label: 'Airbag', value: 'Front-Airbags' },
    { label: 'Ausstattungslinie', value: 'Kasten 35 mittellang Hochdach FWD' },
    { label: 'Landesversion', value: 'Deutschland' },
    { label: 'HU-Termin', value: '06/2026' }
  ];

  const visibleData = showMore ? technicalData : technicalData.slice(0, 6);
  const hasMoreData = technicalData.length > 6;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 pt-6 px-6 pb-5">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Technische Daten</h3>
      
      {/* Desktop: 3 Spalten Layout */}
      <div className="hidden md:grid md:grid-cols-4 gap-6 -mb-4">
        {technicalData.map((item, index) => (
          <React.Fragment key={index}>
            <div className="py-4">
              <div className="text-sm text-gray-600 mb-1">{item.label}</div>
              <div className="text-gray-900 font-semibold">
                {item.label === 'Ausstattungslinie' ? (
                  <>
                    Kasten 35 mittellang<br />
                    Hochdach FWD
                  </>
                ) : (
                  item.value
                )}
              </div>
            </div>
            {item.label === 'HU-Termin' && (
              <div className="mt-4 w-full"></div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile/Tablet: Original Layout mit Mehr-Anzeigen */}
      <div className="md:hidden">
        <div className="relative">
          <div className="space-y-4 -mb-3">
            {visibleData.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                <span className="text-gray-600 font-medium">{item.label}</span>
                <span className="text-gray-900 font-semibold text-right">{item.value}</span>
              </div>
            ))}
          </div>
          
          {/* Gradient Fade Effect für Mobile */}
          {hasMoreData && !showMore && (
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
          )}
        </div>

        {hasMoreData && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowMore(!showMore)}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-1 transition-colors duration-200"
            >
              <span>{showMore ? 'Weniger anzeigen' : 'Mehr anzeigen'}</span>
              {showMore ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};