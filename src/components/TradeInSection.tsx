import React, { useState } from 'react';
import { Car, X } from 'lucide-react';

const TradeInSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    marke: '',
    modell: '',
    baujahr: '',
    kilometerstand: '',
    zustand: '',
    wunschpreis: '',
    name: '',
    telefon: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hallo! Ich möchte mein Auto in Zahlung geben:

🚗 Fahrzeugdaten:
• Marke: ${formData.marke}
• Modell: ${formData.modell}
• Baujahr: ${formData.baujahr}
• Kilometerstand: ${formData.kilometerstand} km
• Zustand: ${formData.zustand}
• Wunschpreis: ${formData.wunschpreis}€

👤 Kontaktdaten:
• Name: ${formData.name}
• Telefon: ${formData.telefon}

Bitte senden Sie mir ein unverbindliches Angebot für die Inzahlungnahme.`;

    const whatsappUrl = `https://wa.me/4917612345678?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsModalOpen(false);
    setFormData({
      marke: '',
      modell: '',
      baujahr: '',
      kilometerstand: '',
      zustand: '',
      wunschpreis: '',
      name: '',
      telefon: ''
    });
  };

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:bg-green-100 hover:border-green-300 transition-all duration-200 group cursor-pointer"
      >
        <div className="flex items-center justify-center space-x-3 mb-3">
          <Car className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
          <div className="text-lg font-bold text-green-800">Inzahlungnahme</div>
        </div>
        <div className="text-sm text-green-600">Hier klicken und Ihr Auto in Anzahlung geben.</div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Car className="w-6 h-6 text-green-600" />
                  Inzahlungnahme-Anfrage
                </h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Marke *
                    </label>
                    <input
                      type="text"
                      name="marke"
                      value={formData.marke}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Modell *
                    </label>
                    <input
                      type="text"
                      name="modell"
                      value={formData.modell}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Baujahr *
                    </label>
                    <input
                      type="number"
                      name="baujahr"
                      value={formData.baujahr}
                      onChange={handleInputChange}
                      min="1990"
                      max="2024"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      KM-Stand *
                    </label>
                    <input
                      type="number"
                      name="kilometerstand"
                      value={formData.kilometerstand}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Zustand *
                  </label>
                  <select
                    name="zustand"
                    value={formData.zustand}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  >
                    <option value="">Bitte wählen</option>
                    <option value="Sehr gut">Sehr gut</option>
                    <option value="Gut">Gut</option>
                    <option value="Befriedigend">Befriedigend</option>
                    <option value="Ausreichend">Ausreichend</option>
                    <option value="Reparaturbedürftig">Reparaturbedürftig</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Wunschpreis (€)
                  </label>
                  <input
                    type="number"
                    name="wunschpreis"
                    value={formData.wunschpreis}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-medium text-gray-800 mb-3">Kontaktdaten</h3>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        name="telefon"
                        value={formData.telefon}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Abbrechen
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Angebot per WhatsApp
                  </button>
                </div>
              </form>

              <p className="text-xs text-gray-500 text-center mt-4">
                Kostenlos & unverbindlich
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TradeInSection;

export { TradeInSection }