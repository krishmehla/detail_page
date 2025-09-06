import React from 'react';
import { Calendar, Gauge, Zap, Settings, Power, Users } from 'lucide-react';

export const VehicleSpecs: React.FC = () => {
  return (
    <div className="md:hidden grid grid-cols-3 gap-4">
      {/* Reihe 1 - normale Höhe */}
      <div className="bg-white rounded-xl p-4 md:px-3 md:py-4 shadow-sm border border-gray-200 aspect-[3/2] md:max-h-24">
        <Calendar className="w-6 h-6 text-blue-600 mb-2" />
        <div className="text-gray-500 text-sm md:text-xs md:font-normal mb-1">Erstzulassung</div>
        <div className="text-gray-900 font-bold text-sm md:text-sm md:font-semibold">02/2022</div>
      </div>
      <div className="bg-white rounded-xl p-4 md:px-3 md:py-4 shadow-sm border border-gray-200 aspect-[3/2] md:max-h-24">
        <Gauge className="w-6 h-6 text-blue-600 mb-2" />
        <div className="text-gray-500 text-sm md:text-xs md:font-normal mb-1">KM-Stand</div>
        <div className="text-gray-900 font-bold text-sm md:text-sm md:font-semibold">45.215 KM</div>
      </div>
      <div className="bg-white rounded-xl p-4 md:px-3 md:py-4 shadow-sm border border-gray-200 aspect-[3/2] md:max-h-24">
        <Zap className="w-6 h-6 text-blue-600 mb-2" />
        <div className="text-gray-500 text-sm md:text-xs md:font-normal mb-1">Kraftstoff</div>
        <div className="text-gray-900 font-bold text-sm md:text-sm md:font-semibold">Benzin</div>
      </div>
      
      {/* Reihe 2 - etwas höher */}
      <div className="bg-white rounded-xl p-4 md:px-3 md:py-4 shadow-sm border border-gray-200 aspect-[4/3] md:max-h-24">
        <Settings className="w-6 h-6 text-blue-600 mb-2" />
        <div className="text-gray-500 text-sm md:text-xs md:font-normal mb-1">Getriebe</div>
        <div className="text-gray-900 font-bold text-sm md:text-sm md:font-semibold">Automatik</div>
      </div>
      <div className="bg-white rounded-xl p-4 md:px-3 md:py-4 shadow-sm border border-gray-200 aspect-[4/3] md:max-h-24">
        <Power className="w-6 h-6 text-blue-600 mb-2" />
        <div className="text-gray-500 text-sm md:text-xs md:font-normal mb-1">Leistung</div>
        <div className="text-gray-900 font-bold text-sm md:text-sm md:font-semibold">225 kW / 306 PS</div>
      </div>
      <div className="bg-white rounded-xl p-4 md:px-3 md:py-4 shadow-sm border border-gray-200 aspect-[4/3] md:max-h-24">
        <Users className="w-6 h-6 text-blue-600 mb-2" />
        <div className="text-gray-500 text-sm md:text-xs md:font-normal mb-1">Vorbesitzer</div>
        <div className="text-gray-900 font-bold text-sm md:text-sm md:font-semibold">2</div>
      </div>
    </div>
  );
};