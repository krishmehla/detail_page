import React, { useState } from 'react';
import { Car, Calculator, ArrowRight, Star } from 'lucide-react';

export const TradeInOptions: React.FC = () => {
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    condition: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Trade-in evaluation request:', formData);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Inzahlungnahme</h3>
      
      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center">
          <Car className="w-6 h-6 text-blue-600 mx-auto mb-2" />
          <div className="text-sm font-semibold text-blue-800">Jede Marke</div>
          <div className="text-xs text-blue-600">Wir nehmen alle Fahrzeuge</div>
        </div>
        
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <Calculator className="w-6 h-6 text-green-600 mx-auto mb-2" />
          <div className="text-sm font-semibold text-green-800">Faire Bewertung</div>
          <div className="text-xs text-green-600">Marktgerechte Preise</div>
        </div>
        
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center">
          <Star className="w-6 h-6 text-purple-600 mx-auto mb-2" />
          <div className="text-sm font-semibold text-purple-800">Schnell & Einfach</div>
          <div className="text-xs text-purple-600">Unkomplizierte Abwicklung</div>
        </div>
      </div>

      {/* Evaluation Form */}
      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Fahrzeug bewerten lassen</h4>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Marke <span className="text-red-500">*</span>
              </label>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option value="">Marke wählen</option>
                <option value="audi">Audi</option>
                <option value="bmw">BMW</option>
                <option value="mercedes">Mercedes-Benz</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="opel">Opel</option>
                <option value="ford">Ford</option>
                <option value="other">Andere</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Modell <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleInputChange}
                required
                placeholder="z.B. 3er, A4, C-Klasse"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Erstzulassung <span className="text-red-500">*</span>
              </label>
              <select
                name="year"
                value={formData.year}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              >
                <option value="">Jahr wählen</option>
                {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kilometerstand <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="mileage"
                value={formData.mileage}
                onChange={handleInputChange}
                required
                placeholder="z.B. 45000"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zustand <span className="text-red-500">*</span>
            </label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            >
              <option value="">Zustand wählen</option>
              <option value="sehr-gut">Sehr gut</option>
              <option value="gut">Gut</option>
              <option value="befriedigend">Befriedigend</option>
              <option value="ausreichend">Ausreichend</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
          >
            <span>Kostenlose Bewertung anfordern</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </form>
      </div>

      {/* Additional Info */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-xl border border-yellow-200">
        <div className="text-sm text-yellow-800">
          <strong>Hinweis:</strong> Die Bewertung erfolgt kostenlos und unverbindlich. 
          Sie erhalten innerhalb von 24 Stunden eine realistische Einschätzung des Fahrzeugwerts.
        </div>
      </div>
    </div>
  );
};