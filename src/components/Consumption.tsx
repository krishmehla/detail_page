import React from 'react';
import { Fuel, MapPin, Building, TreePine, SignalHigh as Highway } from 'lucide-react';

export const Consumption: React.FC = () => {
  const consumptionData = [
    {
      id: 'combined',
      label: 'Kraftstoffverbrauch kombiniert',
      value: '7,5 l/100 km',
      icon: Fuel
    },
    {
      id: 'city',
      label: 'Kraftstoffverbrauch Innenstadt',
      value: '8,9 l/100 km',
      icon: Building
    },
    {
      id: 'country',
      label: 'Kraftstoffverbrauch Landstraße',
      value: '6,4 l/100 km',
      icon: TreePine
    },
    {
      id: 'highway',
      label: 'Kraftstoffverbrauch Autobahn',
      value: '6,8 l/100 km',
      icon: Highway
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Verbrauch</h3>
      
      {/* Desktop: 4 Boxen in einer Reihe */}
      <div className="hidden md:grid md:grid-cols-4 gap-4">
        {consumptionData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <IconComponent className="w-6 h-6 text-blue-600 mx-auto mb-3" />
              <div className="text-xs text-gray-600 mb-2 leading-tight">{item.label}</div>
              <div className="text-lg font-bold text-gray-900">{item.value}</div>
            </div>
          );
        })}
      </div>

      {/* Mobile: 2x2 Raster */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        {consumptionData.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className="bg-gray-50 rounded-xl p-4 text-center border border-gray-200">
              <IconComponent className="w-5 h-5 text-blue-600 mx-auto mb-2" />
              <div className="text-xs text-gray-600 mb-2 leading-tight">{item.label}</div>
              <div className="text-sm font-bold text-gray-900">{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};