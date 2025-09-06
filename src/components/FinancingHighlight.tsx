import React from 'react';
import { CreditCard, Calculator, TrendingUp } from 'lucide-react';

export const FinancingHighlight: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Finanzierung</h3>
      
      {/* Highlight Boxes */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <CreditCard className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <div className="text-sm font-semibold text-blue-800">Finanzierung</div>
          <div className="text-xs text-blue-600">Ohne Anzahlung möglich</div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <Calculator className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <div className="text-sm font-semibold text-green-800">Ab 3,9% eff.</div>
          <div className="text-xs text-green-600">Jahreszins bei guter Bonität</div>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
          <TrendingUp className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <div className="text-sm font-semibold text-purple-800">Flexible Laufzeit</div>
          <div className="text-xs text-purple-600">24-84 Monate möglich</div>
        </div>
      </div>
    </div>
  );
};