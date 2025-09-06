import React, { useState } from 'react';
import { Shield, CreditCard, Star, X, Car, Euro, User, Phone, MessageCircle } from 'lucide-react';

export const TradeInHighlight: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    condition: '',
    price: '',
    name: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // WhatsApp Message erstellen
    const message = `Hallo! Ich möchte mein Fahrzeug verkaufen:

🚗 Fahrzeug:
- Marke: ${formData.brand}
- Modell: ${formData.model}
- Baujahr: ${formData.year}
- Kilometerstand: ${formData.mileage} km
- Zustand: ${formData.condition}
- Gewünschter Preis: ${formData.price}€

👤 Kontakt:
- Name: ${formData.name}
- Telefon: ${formData.phone}

Bitte senden Sie mir ein unverbindliches Angebot zu!`;

    // WhatsApp öffnen
    const whatsappUrl = `https://wa.me/4971234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Modal schließen
    setIsModalOpen(false);
    
    // Form zurücksetzen
    setFormData({
      brand: '',
      model: '',
      year: '',
      mileage: '',
      condition: '',
      price: '',
      name: '',
      phone: ''
    });
  };

  return (
    <>
      {/* Klickbare Ankauf-Box */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-blue-50 border border-blue-200 rounded-xl p-6 text-left hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 group cursor-pointer"
      >
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Car className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform duration-200" />
            <div className="text-lg font-bold text-blue-800">Ihr Auto verkaufen?</div>
          </div>
          <div className="text-sm text-blue-600 mb-1">Jetzt kostenlos bewerten lassen.</div>
          <div className="text-xs text-blue-500">Klicken Sie, um sofort ein Angebot zu erhalten.</div>
        </div>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Car className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Auto verkaufen</h3>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="text-center mb-6">
                <div className="bg-green-100 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Sofort-Angebot per WhatsApp
                </h4>
                <p className="text-sm text-gray-600">
                  Füllen Sie das Formular aus und erhalten Sie binnen Minuten ein unverbindliches Angebot
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Fahrzeugdaten */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Car className="w-4 h-4 mr-2 text-blue-600" />
                    Fahrzeugdaten
                  </h5>
                  
                  <div className="grid grid-cols-2 gap-3">
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
                        <option value="">Wählen</option>
                        <option value="Audi">Audi</option>
                        <option value="BMW">BMW</option>
                        <option value="Mercedes-Benz">Mercedes-Benz</option>
                        <option value="Volkswagen">Volkswagen</option>
                        <option value="Opel">Opel</option>
                        <option value="Ford">Ford</option>
                        <option value="Renault">Renault</option>
                        <option value="Peugeot">Peugeot</option>
                        <option value="Andere">Andere</option>
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
                        placeholder="z.B. 3er, A4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Baujahr <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="year"
                        value={formData.year}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      >
                        <option value="">Jahr</option>
                        {Array.from({ length: 25 }, (_, i) => 2024 - i).map(year => (
                          <option key={year} value={year}>{year}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        KM-Stand <span className="text-red-500">*</span>
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

                  <div className="grid grid-cols-2 gap-3 mt-3">
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
                        <option value="">Zustand</option>
                        <option value="Sehr gut">Sehr gut</option>
                        <option value="Gut">Gut</option>
                        <option value="Befriedigend">Befriedigend</option>
                        <option value="Ausreichend">Ausreichend</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Wunschpreis <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="number"
                          name="price"
                          value={formData.price}
                          onChange={handleInputChange}
                          required
                          placeholder="z.B. 15000"
                          className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                        <Euro className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Kontaktdaten */}
                <div className="bg-gray-50 rounded-xl p-4">
                  <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <User className="w-4 h-4 mr-2 text-green-600" />
                    Ihre Kontaktdaten
                  </h5>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Ihr Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Vor- und Nachname"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefonnummer <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="z.B. 0171 1234567"
                          className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                        />
                        <Phone className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                  <span>Angebot per WhatsApp erhalten</span>
                </button>

                {/* Hinweis */}
                <div className="text-center">
                  <p className="text-xs text-gray-500">
                    Kostenlos & unverbindlich • Antwort binnen weniger Minuten
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};