import React, { useState, useEffect } from 'react';
import { Calculator, CreditCard, Banknote, Info, X } from 'lucide-react';

export const PricingBox: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('barkauf');
  const [showTooltip, setShowTooltip] = useState(false);
  const [showFinancingModal, setShowFinancingModal] = useState(false);
  const [displayAnzahlung, setDisplayAnzahlung] = useState('4.990');
  
  // Prevent background scrolling when financing modal is open
  useEffect(() => {
    if (showFinancingModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showFinancingModal]);

  // Financing calculation states
  const [hasSchlussrate, setHasSchlussrate] = useState(false);
  const [anzahlung, setAnzahlung] = useState(4990);
  const [laufzeit, setLaufzeit] = useState(84);
  const [monthlyPayment, setMonthlyPayment] = useState(289);

  // Update display value when anzahlung changes
  useEffect(() => {
    setDisplayAnzahlung(formatCurrency(anzahlung));
  }, [anzahlung]);
  
  // Modal-specific states
  const [modalAnzahlung, setModalAnzahlung] = useState(4990);
  const [modalSchlussrate, setModalSchlussrate] = useState(0);
  const [modalLaufzeit, setModalLaufzeit] = useState(84);
  const [modalMonthlyPayment, setModalMonthlyPayment] = useState(289);

  const vehiclePrice = 24990;
  const interestRate = 3.9;
  const effectiveRate = 4.2;

  // Calculate monthly payment
  useEffect(() => {
    if (selectedTab === 'finanzierung') {
      const calculateMonthlyPayment = () => {
        const loanAmount = vehiclePrice - anzahlung;
        
        if (loanAmount <= 0) {
          setMonthlyPayment(0);
          return;
        }

        const monthlyRate = interestRate / 100 / 12;
        const numPayments = laufzeit;

        if (monthlyRate === 0) {
          setMonthlyPayment(loanAmount / numPayments);
        } else {
          const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                         (Math.pow(1 + monthlyRate, numPayments) - 1);
          setMonthlyPayment(payment);
        }
      };

      calculateMonthlyPayment();
    }
  }, [selectedTab, anzahlung, laufzeit, hasSchlussrate]);

  // Calculate modal values
  useEffect(() => {
    const calculateModalPayment = () => {
      const netLoanAmount = vehiclePrice - modalAnzahlung - modalSchlussrate;
      
      if (netLoanAmount <= 0) {
        setModalMonthlyPayment(0);
        return;
      }

      const monthlyRate = interestRate / 100 / 12;
      const numPayments = modalLaufzeit;

      if (monthlyRate === 0) {
        setModalMonthlyPayment(netLoanAmount / numPayments);
      } else {
        const payment = (netLoanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                       (Math.pow(1 + monthlyRate, numPayments) - 1);
        setModalMonthlyPayment(payment);
      }
    };

    calculateModalPayment();
  }, [modalAnzahlung, modalSchlussrate, modalLaufzeit]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true
    }).format(value);
  };

  const handleAnzahlungChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\./g, ''); // Remove periods (thousand separators)
    const numericValue = parseInt(value) || 0;
    
    if (numericValue <= vehiclePrice) {
      setAnzahlung(numericValue);
    }
  };

  const pricingOptions = {
    barkauf: {
      price: '24.990',
      subtitle: 'Kaufpreis',
      icon: Banknote,
      details: [
        { label: 'Gewährleistung', value: '12 Monate', isWarranty: true }
      ]
    },
    finanzierung: {
      price: formatCurrency(monthlyPayment),
      subtitle: 'monatlich ab',
      icon: Calculator,
      details: [
        { 
          label: 'Anzahlung', 
          value: `${formatCurrency(anzahlung)} €`,
          isInteractive: true,
          type: 'input'
        },
        { 
          label: 'Laufzeit', 
          value: `${laufzeit} Monate`,
          isInteractive: true,
          type: 'dropdown'
        }
      ]
    },
    leasing: {
      price: '199',
      subtitle: 'monatlich ab',
      icon: CreditCard,
      details: [
        { label: 'Laufzeit', value: '48 Monate' },
        { label: 'Kilometer/Jahr', value: '15.000 km' },
        { label: 'Sonderzahlung', value: '0 €' }
      ]
    }
  };

  const tabs = [
    { id: 'barkauf', label: 'Barkauf' },
    { id: 'finanzierung', label: 'Finanzierung' },
    { id: 'leasing', label: 'Leasing' }
  ];

  const currentOption = pricingOptions[selectedTab as keyof typeof pricingOptions];
  const IconComponent = currentOption.icon;

  const renderInteractiveField = (detail: any) => {
    if (detail.type === 'toggle') {
      return (
        <div className="flex items-center space-x-2">
          <span className={`text-sm md:text-xs ${!hasSchlussrate ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Nein</span>
          <button
            type="button"
            onClick={() => setHasSchlussrate(!hasSchlussrate)}
            className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-200 ${
              hasSchlussrate ? 'bg-blue-600' : 'bg-gray-300'
            }`}
          >
            <span
              className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform duration-200 ${
                hasSchlussrate ? 'translate-x-5' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm md:text-xs ${hasSchlussrate ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>Ja</span>
        </div>
      );
    }

    if (detail.type === 'input') {
      return (
        <div className="relative w-32">
          <input
            type="text"
            value={displayAnzahlung}
            onChange={handleAnzahlungChange}
            className="w-32 px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-xs text-center"
          />
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-xs font-normal">€</span>
        </div>
      );
    }

    if (detail.type === 'dropdown') {
      return (
        <select
          value={laufzeit}
          onChange={(e) => setLaufzeit(Number(e.target.value))}
          className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-xs text-gray-900 text-center"
        >
          {Array.from({ length: 10 }, (_, i) => (i + 1) * 12).map(months => (
            <option key={months} value={months}>{months} Monate</option>
          ))}
        </select>
      );
    }

    return <span className="font-medium text-sm md:text-xs text-gray-900">{detail.value}</span>;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-4">
      {/* Vehicle Title Section */}
      <div className="mb-6 pb-4 md:pb-3 border-b border-gray-200 md:mb-4">
        <h1 id="main-vehicle-title" className="text-2xl font-bold text-gray-900 mb-2">
          Chevrolet Camaro Coupe SS 6.2 V8 Klappe-Recaro
        </h1>
        <p className="text-gray-600 text-lg">Limousine, Gebrauchtwagen</p>
      </div>

      {/* Tabs */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-4 md:mb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex-1 py-2 px-2 md:py-1.5 md:px-2 rounded-lg text-sm md:text-xs font-medium transition-all duration-200 ${
              selectedTab === tab.id
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Price Display */}
      <div className="text-center mb-4 md:mb-3">
        <div className="flex items-center justify-center mb-2">
          <IconComponent className="w-4 h-4 md:w-4 md:h-4 text-gray-500 mr-2 font-normal" />
          <span className="text-gray-600 font-medium text-sm md:text-xs">{currentOption.subtitle}</span>
        </div>
        <div className="text-4xl md:text-3xl font-bold text-gray-900 mb-1">
          {currentOption.price}
          {selectedTab === 'barkauf' ? (
            <span className="text-xl md:text-lg text-gray-600 ml-1">€</span>
          ) : (
            <span className="text-xl md:text-lg text-gray-600 ml-1 inline-flex items-center">
              €
              <div className="relative ml-1">
                <button
                  onClick={() => setShowFinancingModal(true)}
                  className="w-4 h-4 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-200"
                >
                  <Info className="w-2.5 h-2.5 text-blue-600" />
                </button>
              </div>
            </span>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 md:space-y-1 mb-6 md:mb-4">
        {/* Net Price - only for Barkauf */}
        {selectedTab === 'barkauf' && (
          <div className="flex justify-between items-center py-1.5 md:py-1 px-3 border-b border-gray-100">
            <span className="text-gray-600 text-sm md:text-xs">Netto: 20.990 €</span>
            <span className="text-sm md:text-xs text-gray-900">MwSt. ausweisbar</span>
          </div>
        )}
        {currentOption.details.map((detail, index) => (
          <div key={index} className={`flex justify-between items-center py-1.5 md:py-1 border-b border-gray-100 last:border-b-0 ${
            detail.isWarranty ? 'bg-green-50 px-3 rounded-lg border-green-200' : ''
          }`}>
            <span className="text-gray-600 text-sm md:text-xs">{detail.label}</span>
            {detail.isInteractive ? (
              renderInteractiveField(detail)
            ) : (
              <span className={`font-medium text-sm md:text-xs ${
                detail.isWarranty ? 'text-green-700' : 'text-gray-900'
              }`}>{detail.value}</span>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="pricing-box-cta w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 md:py-2.5 px-6 md:px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center text-sm md:text-sm">
        <span>Jetzt anfragen</span>
      </button>

      {/* Disclaimer */}
      {selectedTab !== 'barkauf' && (
        <p className="text-xs md:text-xs text-gray-500 mt-3 md:mt-2 text-center">
          * Beispielrechnung, unverbindlich. Bonitätsprüfung erforderlich.
        </p>
      )}

      {/* Financing Info Modal */}
      {showFinancingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Finanzierungsbeispiel</h3>
              <button
                onClick={() => setShowFinancingModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {/* Fahrzeugpreis - Static */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Fahrzeugpreis</span>
                <span className="font-semibold text-gray-900">{formatCurrency(vehiclePrice)} €</span>
              </div>

              {/* Anzahlung */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Anzahlung</span>
                <span className="font-semibold text-gray-900">-{formatCurrency(anzahlung)} €</span>
              </div>

              {/* Schlussrate */}
              {hasSchlussrate && (
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600 text-sm">Schlussrate</span>
                  <span className="font-semibold text-gray-900">{formatCurrency(0)} €</span>
                </div>
              )}

              {/* Nettodarlehensbetrag */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Nettodarlehensbetrag</span>
                <span className="font-semibold text-blue-600">
                  {formatCurrency(vehiclePrice - anzahlung)} €
                </span>
              </div>

              {/* Fester Sollzins */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Fester Sollzins p.a.</span>
                <span className="font-semibold text-gray-900">{interestRate}%</span>
              </div>

              {/* Effektiver Jahreszins */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Effektiver Jahreszins</span>
                <span className="font-semibold text-gray-900">{effectiveRate}%</span>
              </div>

              {/* Laufzeit */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Laufzeit</span>
                <span className="font-semibold text-gray-900">{laufzeit} Monate</span>
              </div>

              {/* Monatsrate - prominent */}
              <div className="flex justify-between items-center py-4 bg-blue-50 rounded-lg px-4 mt-6">
                <span className="text-blue-800 font-semibold text-lg">Monatsrate</span>
                <span className="font-bold text-blue-900 text-2xl">
                  {formatCurrency(monthlyPayment)} €
                </span>
              </div>

              {/* Disclaimer */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mt-4">
                <div className="text-sm text-yellow-800">
                  <strong>Hinweis:</strong> Beispielrechnung, unverbindlich. Bonitätsprüfung erforderlich.
                  Die tatsächlichen Konditionen können abweichen.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};