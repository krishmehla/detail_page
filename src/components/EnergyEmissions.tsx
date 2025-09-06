import React, { useState } from 'react';
import { Fuel, ChevronDown, ChevronUp, Leaf, Info, X } from 'lucide-react';

export const EnergyEmissions: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showSchadstoffModal, setShowSchadstoffModal] = useState(false);
  const [showUmweltplaketteModal, setShowUmweltplaketteModal] = useState(false);

  // Prevent background scrolling when modals are open
  React.useEffect(() => {
    if (showSchadstoffModal || showUmweltplaketteModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showSchadstoffModal, showUmweltplaketteModal]);

  // Vehicle data
  const vehicleData = {
    fuelType: 'Benzin',
    combinedConsumption: '7,5 l/100 km',
    cityConsumption: '8,9 l/100 km',
    suburbanConsumption: '7,2 l/100 km',
    ruralConsumption: '6,4 l/100 km',
    highwayConsumption: '6,8 l/100 km',
    co2Class: 'D',
    co2Emissions: '171 g/km',
    emissionStandard: 'Euro6d-TEMP',
    environmentalBadge: 'Grün (4)',
    annualEnergyCosts: '1.687 €',
    vehicleTax: '284 €',
    pollutantClass: 'Euro6d-TEMP'
  };

  // CO2 class scale
  const co2Classes = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const co2Colors = {
    A: 'bg-green-500',
    B: 'bg-green-400', 
    C: 'bg-yellow-400',
    D: 'bg-yellow-500',
    E: 'bg-orange-400',
    F: 'bg-red-400',
    G: 'bg-red-500'
  };

  const renderCO2Scale = () => (
    <div className="flex items-center space-x-1">
      {co2Classes.map((classLetter) => (
        <div
          key={classLetter}
          className={`flex-1 h-6 rounded-sm flex items-center justify-center text-xs font-bold text-white transition-all duration-200 ${
            classLetter === vehicleData.co2Class
              ? `${co2Colors[classLetter as keyof typeof co2Colors]} ring-2 ring-gray-800 scale-110`
              : co2Colors[classLetter as keyof typeof co2Colors]
          }`}
        >
          {classLetter}
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mt-8">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Verbrauch & Emissionen</h3>

      {/* Default View - Combined Consumption & CO2 Class */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Combined Fuel Consumption */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <Fuel className="w-5 h-5 text-blue-600" />
            <span className="text-sm text-gray-600 font-medium">Kraftstoffverbrauch kombiniert</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">{vehicleData.combinedConsumption}</div>
        </div>

        {/* CO2 Class */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <div className="flex items-center space-x-3 mb-3">
            <Leaf className="w-5 h-5 text-green-600" />
            <span className="text-sm text-gray-600 font-medium">CO₂-Effizienzklasse</span>
          </div>
          <div className="mb-3">
            <span className="text-2xl font-bold text-gray-900 mr-2">{vehicleData.co2Class}</span>
            <span className="text-sm text-gray-600">({vehicleData.co2Emissions})</span>
          </div>
          {renderCO2Scale()}
        </div>
      </div>

      {/* Mehr anzeigen Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200 ${!isExpanded ? 'pb-0' : ''}`}
        >
          <span>{isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}</span>
          {isExpanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Expanded View */}
      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
        isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className={`space-y-6 ${isExpanded ? 'pt-6' : ''}`}>
          {/* Side-by-side Layout: Fuel Consumption & Vehicle Information */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Fuel Consumption Details */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Kraftstoffverbrauch</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Kraftstoffverbrauch Innenstadt</span>
                  <span className="font-semibold text-gray-900">{vehicleData.cityConsumption}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Kraftstoffverbrauch Vorort</span>
                  <span className="font-semibold text-gray-900">{vehicleData.suburbanConsumption}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Kraftstoffverbrauch Landstraße</span>
                  <span className="font-semibold text-gray-900">{vehicleData.ruralConsumption}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Kraftstoffverbrauch Autobahn</span>
                  <span className="font-semibold text-gray-900">{vehicleData.highwayConsumption}</span>
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Fahrzeuginformationen</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Kraftstoffart</span>
                  <span className="font-semibold text-gray-900">{vehicleData.fuelType}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm">Schadstoffklasse</span>
                    <button
                      onClick={() => setShowSchadstoffModal(true)}
                      className="w-4 h-4 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-200"
                      aria-label="Information zur Schadstoffklasse"
                    >
                      <Info className="w-2.5 h-2.5 text-blue-600" />
                    </button>
                  </div>
                  <span className="font-semibold text-gray-900">{vehicleData.pollutantClass}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-600 text-sm">Umweltplakette</span>
                    <button
                      onClick={() => setShowUmweltplaketteModal(true)}
                      className="w-4 h-4 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-200"
                      aria-label="Information zur Umweltplakette"
                    >
                      <Info className="w-2.5 h-2.5 text-blue-600" />
                    </button>
                  </div>
                  <span className="font-semibold text-gray-900">{vehicleData.environmentalBadge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Information */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Kostenübersicht</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Jährliche Energiekosten (bei 15.000 km/Jahr)</span>
                <span className="font-semibold text-gray-900">{vehicleData.annualEnergyCosts}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Kfz-Steuer (pro Jahr)</span>
                <span className="font-semibold text-gray-900">{vehicleData.vehicleTax}</span>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="text-xs text-gray-600 leading-relaxed">
              <sup>1</sup> Die Informationen erfolgen gemäß der Pkw-Energieverbrauchskennzeichnungsverordnung. 
              Die angegebenen Werte wurden nach dem vorgeschriebenen Messverfahren WLTP (Worldwide Harmonized 
              Light-Duty Vehicles Test Procedure) ermittelt. Der Kraftstoffverbrauch und der CO₂-Ausstoß eines 
              Pkw sind nicht nur von der effizienten Nutzung des Kraftstoffs durch den Pkw, sondern auch vom 
              Fahrstil und anderen nichttechnischen Faktoren abhängig. CO₂ ist das für die Erdwärme 
              hauptverantwortliche Treibhausgas. Ein Leitfaden über den Kraftstoffverbrauch und die CO₂-Emissionen 
              aller in Deutschland angebotenen Pkw-Modelle ist unentgeltlich einsehbar an jedem Verkaufsort in 
              Deutschland, an dem neue Pkw ausgestellt oder angeboten werden. Der Leitfaden ist auch hier abrufbar: 
              <a href="https://www.dat.de/co2/" className="text-blue-600 hover:text-blue-700 underline ml-1" target="_blank" rel="noopener noreferrer">
                www.dat.de/co2/
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Schadstoffklasse Info Modal */}
      {showSchadstoffModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Die Schadstoffklasse</h3>
              <button
                onClick={() => setShowSchadstoffModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                <p>
                  Die Schadstoffklasse (oder Abgasnorm) bewertet den Schadstoffausstoß eines Fahrzeugs 
                  (z. B. Euro 4, 5 oder 6; je höher die Zahl, desto weniger Schadstoffe).
                </p>
                <p>
                  Die Schadstoffklasse entscheidet auch über die Umweltplakette: Nur bei niedrigen 
                  Emissionen gibt es die grüne Plakette.
                </p>
                <p>
                  Eine gute Schadstoffklasse lohnt sich für den Halter, denn: Je weniger Schadstoffe 
                  ausgestoßen werden, desto niedriger die Kfz-Steuer!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Umweltplakette Info Modal */}
      {showUmweltplaketteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Die Umweltplakette</h3>
              <button
                onClick={() => setShowUmweltplaketteModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="text-sm text-gray-700 leading-relaxed space-y-4">
                <p>
                  Die Umweltplakette bewertet den Schadstoffausstoß von Fahrzeugen anhand einer Farbskala: grün (geringe Emissionen), gelb (mittlere) und rot (hohe).
                </p>
                <p>
                  Eine grüne Plakette ist erforderlich, um in innerstädtischen Umweltzonen zu fahren, bei Fahren ohne diese besteht die Gefahr, dass ein Bußgeld verhängt wird.
                </p>
                <p>
                  Ein niedriger Schadstoffausstoß lohnt sich auch finanziell: Je geringer die Emissionen, desto niedriger die Kfz-Steuer.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};