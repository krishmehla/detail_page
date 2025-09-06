import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CreditCard, Star } from 'lucide-react';

export const VehicleDescription: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Fahrzeugbeschreibung</h3>
      
      {/* Finanzierung Highlight */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6 border border-blue-100">
        <div className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <CreditCard className="w-5 h-5 text-blue-600 mt-0.5" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">Sonderfinanzierung verfügbar</h4>
            <p className="text-sm text-gray-700 mb-2">
              Profitieren Sie von unseren attraktiven Finanzierungskonditionen bereits ab 3,9% eff. Jahreszins.
            </p>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Beispielrechnung:</span> Bei 84 Monaten Laufzeit und 4.990€ Anzahlung nur 289€ monatlich*
            </div>
          </div>
        </div>
      </div>

      {/* Fahrzeugbeschreibung */}
      <div className="prose prose-sm max-w-none">
        <p className="text-gray-700 leading-relaxed mb-4">
          Dieser BMW 3er 320i Sport Line überzeugt durch seine perfekte Balance aus Sportlichkeit und Komfort. 
          Der 2.0-Liter TwinPower Turbo Motor mit 150 PS bietet eine beeindruckende Leistung bei gleichzeitig 
          efizientem Verbrauch.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-4">
          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Ausstattung Highlights</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>Sport Line Paket</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>8-Gang Steptronic Automatik</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>BMW Live Cockpit Professional</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>Klimaautomatik 2-Zonen</span>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-gray-900 mb-3">Sicherheit & Komfort</h5>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>BMW Driving Assistant</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>LED Scheinwerfer</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>Parksensoren vorn/hinten</span>
              </li>
              <li className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>Rückfahrkamera</span>
              </li>
            </ul>
          </div>
        </div>

        {showMore && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h5 className="font-semibold text-gray-900 mb-3">Weitere Ausstattung</h5>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <ul className="space-y-1">
                <li>• Sportlenkrad</li>
                <li>• Sportsitze</li>
                <li>• Ambientebeleuchtung</li>
                <li>• Keyless Go</li>
              </ul>
              <ul className="space-y-1">
                <li>• Harman Kardon Soundsystem</li>
                <li>• Wireless Charging</li>
                <li>• Apple CarPlay</li>
                <li>• Android Auto</li>
              </ul>
              <ul className="space-y-1">
                <li>• Adaptives Fahrwerk</li>
                <li>• M Sportbremse</li>
                <li>• 18" M Leichtmetallräder</li>
                <li>• Panorama Glasdach</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
      >
        <span>{showMore ? 'Weniger anzeigen' : 'Mehr Informationen anzeigen'}</span>
        {showMore ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
    </div>
  );
};