import React, { useState, useEffect } from 'react';
import { Calculator, Info, X } from 'lucide-react';

export const FinancingCalculator: React.FC = () => {
  const [vehiclePrice] = useState(24990); // Fixed vehicle price
  const [downPayment, setDownPayment] = useState(0);
  const [termMonths, setTermMonths] = useState(48);
  const [interestRate] = useState(3.9); // Fixed interest rate
  const [effectiveRate] = useState(4.2); // Fixed effective rate
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [showInfoModal, setShowInfoModal] = useState(false);

  // Prevent background scrolling when info modal is open
  useEffect(() => {
    if (showInfoModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showInfoModal]);

  // Berechnung der monatlichen Rate
  useEffect(() => {
    const calculateMonthlyPayment = () => {
      const loanAmount = vehiclePrice - downPayment;
      
      if (loanAmount <= 0) {
        setMonthlyPayment(0);
        return;
      }

      const monthlyRate = interestRate / 100 / 12;
      const numPayments = termMonths;

      if (monthlyRate === 0) {
        // Ohne Zinsen
        setMonthlyPayment(loanAmount / numPayments);
      } else {
        // Mit Zinsen (Annuitätenformel)
        const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                       (Math.pow(1 + monthlyRate, numPayments) - 1);
        setMonthlyPayment(payment);
      }
    };

    calculateMonthlyPayment();
  }, [vehiclePrice, downPayment, termMonths, interestRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Calculator className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold text-gray-900">Finanzierungsrechner</h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Eingabefelder */}
          <div className="space-y-6">
            {/* Anzahlung */}
            <div>
              <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Anzahlung</span>
                <div className="relative w-32">
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-semibold text-right"
                    min="0"
                    max={vehiclePrice}
                    step="100"
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">€</span>
                </div>
              </label>
            </div>

            {/* Laufzeit Dropdown */}
            <div>
              <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
                <span>Laufzeit</span>
                <select
                  value={termMonths}
                  onChange={(e) => setTermMonths(Number(e.target.value))}
                  className="w-32 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm font-semibold"
                >
                  {Array.from({ length: 7 }, (_, i) => (i + 1) * 12).map(months => (
                    <option key={months} value={months}>{months} Monate</option>
                  ))}
                </select>
              </label>
            </div>
          </div>

          {/* Ergebnis */}
          <div className="space-y-6">
            {/* Hauptergebnis */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <div className="text-center">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  Ihre voraussichtliche monatliche Rate
                </div>
                <div className="flex items-center justify-center mb-2">
                  <span className="text-4xl font-bold text-blue-900">
                    {formatCurrency(monthlyPayment)}
                  </span>
                  <div className="relative ml-2">
                    <button
                      onClick={() => setShowInfoModal(true)}
                      className="w-5 h-5 bg-blue-100 hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <Info className="w-3 h-3 text-blue-600" />
                    </button>
                  </div>
                </div>
                <div className="text-sm text-blue-700">
                  bei {termMonths} Monaten Laufzeit
                </div>
              </div>
            </div>

            {/* Finanzierungsanfrage Button */}
            <button
              onClick={() => {
                const contactForm = document.querySelector('[data-contact-form]');
                contactForm?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              <span>Finanzierung anfragen</span>
            </button>
          </div>
        </div>
      </div>

      {/* Info Modal */}
      {showInfoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900">Finanzierungsbeispiel</h3>
              <button
                onClick={() => setShowInfoModal(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-4">
              {/* Fahrzeugpreis */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Fahrzeugpreis</span>
                <span className="font-semibold text-gray-900">{formatCurrency(vehiclePrice)}</span>
              </div>

              {/* Anzahlung */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Anzahlung</span>
                <span className="font-semibold text-gray-900">-{formatCurrency(downPayment)}</span>
              </div>

              {/* Nettodarlehensbetrag */}
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600 text-sm">Nettodarlehensbetrag</span>
                <span className="font-semibold text-blue-600">
                  {formatCurrency(vehiclePrice - downPayment)}
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
                <span className="font-semibold text-gray-900">{termMonths} Monate</span>
              </div>

              {/* Monatsrate - prominent */}
              <div className="flex justify-between items-center py-4 bg-blue-50 rounded-lg px-4 mt-6">
                <span className="text-blue-800 font-semibold text-lg">Monatsrate</span>
                <span className="font-bold text-blue-900 text-2xl">
                  {formatCurrency(monthlyPayment)}
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
    </>
  );
};