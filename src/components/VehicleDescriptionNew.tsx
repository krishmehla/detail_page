import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const VehicleDescriptionNew: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:min-h-0 min-h-[400px]">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Fahrzeugbeschreibung</h3>
      
      {/* Desktop: Full Content */}
      <div className="hidden md:block">
        <div className="prose prose-sm max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed mb-4">
            Dieser BMW 3er 320i Sport Line überzeugt durch seine perfekte Balance aus Sportlichkeit und Komfort. 
            Der 2.0-Liter TwinPower Turbo Motor mit 150 PS bietet eine beeindruckende Leistung bei gleichzeitig 
            effizientem Verbrauch. Das Fahrzeug wurde regelmäßig gewartet und alle Wartungsintervalle wurden 
            eingehalten.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Als deutsches Fahrzeug ohne EU-Import bietet es höchste Qualitätsstandards. Der Turbolader wurde 
            neu eingebaut und alle Services wurden bei einem autorisierten Händler durchgeführt. Das Fahrzeug 
            ist unfallfrei laut Vorbesitzer und verfügt über eine vollständige Fahrzeughistorie.
          </p>

          {showMore && (
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Die umfangreiche Sonderausstattung umfasst ein Navigationssystem, Einparkhilfe und 
                Doppeltonfanfare. Als Nichtraucherfahrzeug befindet es sich in einem ausgezeichneten 
                Zustand. Der TÜV ist neu bis 06/2026, sodass keine zusätzlichen Kosten anfallen.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Wir bieten flexible Finanzierungsmöglichkeiten ohne Anzahlung und nehmen gerne Ihr 
                aktuelles Fahrzeug jeder Marke in Zahlung. Alle rechtlichen Hinweise bezüglich 
                möglicher Datenfehler und Zwischenverkauf bleiben vorbehalten.
              </p>
            </div>
          )}
        </div>

        {/* Desktop Toggle Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
        >
          <span>{showMore ? 'Weniger anzeigen' : 'Mehr Informationen anzeigen'}</span>
          {showMore ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Mobile: Truncated Content with Gradient */}
      <div className="md:hidden">
        <div className="relative">
          <div className={`prose prose-sm max-w-none ${!showMore ? 'line-clamp-12' : ''}`}>
            <p className="text-gray-700 leading-relaxed mb-4">
              Dieser BMW 3er 320i Sport Line überzeugt durch seine perfekte Balance aus Sportlichkeit und Komfort. 
              Der 2.0-Liter TwinPower Turbo Motor mit 150 PS bietet eine beeindruckende Leistung bei gleichzeitig 
              effizientem Verbrauch. Das Fahrzeug wurde regelmäßig gewartet und alle Wartungsintervalle wurden 
              eingehalten.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              Als deutsches Fahrzeug ohne EU-Import bietet es höchste Qualitätsstandards. Der Turbolader wurde 
              neu eingebaut und alle Services wurden bei einem autorisierten Händler durchgeführt. Das Fahrzeug 
              ist unfallfrei laut Vorbesitzer und verfügt über eine vollständige Fahrzeughistorie.
            </p>

            {showMore && (
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Die umfangreiche Sonderausstattung umfasst ein Navigationssystem, Einparkhilfe und 
                  Doppeltonfanfare. Als Nichtraucherfahrzeug befindet es sich in einem ausgezeichneten 
                  Zustand. Der TÜV ist neu bis 06/2026, sodass keine zusätzlichen Kosten anfallen.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  Wir bieten flexible Finanzierungsmöglichkeiten ohne Anzahlung und nehmen gerne Ihr 
                  aktuelles Fahrzeug jeder Marke in Zahlung. Alle rechtlichen Hinweise bezüglich 
                  möglicher Datenfehler und Zwischenverkauf bleiben vorbehalten.
                </p>
              </div>
            )}
          </div>
          
          {/* Gradient Fade Effect für Mobile */}
          {!showMore && (
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
          )}
        </div>
        {/* Mobile Toggle Button */}
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
      </div>
    </div>
  );
};