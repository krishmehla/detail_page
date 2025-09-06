import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Shield, 
  ArrowRight,
  User,
  Car,
  CreditCard,
  Route
} from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiryType: [] as string[],
    message: '',
    privacyAccepted: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleInquiryTypeChange = (type: string) => {
    setFormData(prev => ({
      ...prev,
      inquiryType: prev.inquiryType.includes(type)
        ? prev.inquiryType.filter(t => t !== type)
        : [...prev.inquiryType, type]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const inquiryTypes = [
    { id: 'financing', label: 'Finanzierungsanfrage', icon: CreditCard },
    { id: 'tradein', label: 'Inzahlungnahme', icon: Car },
    { id: 'testdrive', label: 'Probefahrt', icon: Route }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Fahrzeug Anfragen</h3>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Händler-Informationen */}
        <div className="space-y-6">
          {/* Standort */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Autohaus Beispiel GmbH</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                <div>
                  <p className="text-gray-900 font-medium">Musterstraße 123</p>
                  <p className="text-gray-600">70173 Stuttgart</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <a href="tel:+4971234567890" className="text-blue-600 hover:text-blue-700 font-medium">
                  +49 (0) 7123 456 78-90
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gray-500 mt-0.5" />
                <div className="text-sm text-gray-600">
                  <p><strong>Mo-Fr:</strong> 08:00 - 18:00 Uhr</p>
                  <p><strong>Sa:</strong> 09:00 - 16:00 Uhr</p>
                  <p><strong>So:</strong> Geschlossen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Ansprechpartner */}
          <div className="bg-gray-50 rounded-xl p-4">
            <h5 className="font-semibold text-gray-900 mb-3">Ihr Ansprechpartner</h5>
            <div className="flex items-start space-x-4">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                alt="Michael Weber"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Michael Weber</p>
                <p className="text-gray-600 text-sm mb-2">Verkaufsberater</p>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <a href="tel:+4971234567890" className="text-blue-600 hover:text-blue-700">
                    +49 (0) 7123 456 78-90
                  </a>
                </div>
                <div className="flex items-center space-x-2 text-sm mt-1">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a href="mailto:weber@autohaus-beispiel.de" className="text-blue-600 hover:text-blue-700">
                    weber@autohaus-beispiel.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Kontaktformular */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Anrede und Name */}
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Anrede <span className="text-red-500">*</span>
                </label>
                <select
                  name="salutation"
                  value={formData.salutation}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                >
                  <option value="">Wählen</option>
                  <option value="herr">Herr</option>
                  <option value="frau">Frau</option>
                  <option value="divers">Divers</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Vorname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nachname <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* E-Mail und Telefon */}
            <div className="grid md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefonnummer <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Anfrageart */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Art der Anfrage
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {inquiryTypes.map((type) => {
                  const IconComponent = type.icon;
                  const isSelected = formData.inquiryType.includes(type.id);
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => handleInquiryTypeChange(type.id)}
                      className={`flex items-center space-x-2 p-3 rounded-lg border-2 transition-all duration-200 text-sm ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Nachricht */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ihre Nachricht
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Ich interessiere mich für den BMW 3er 320i Sport Line und hätte gerne weitere Informationen..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
              />
            </div>

            {/* Datenschutz */}
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="privacyAccepted"
                checked={formData.privacyAccepted}
                onChange={handleInputChange}
                required
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">
                Ich stimme der <a href="#" className="text-blue-600 hover:text-blue-700 underline">Datenschutzerklärung</a> zu 
                und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden. <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              <span>Jetzt anfragen</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>

            {/* DSGVO Hinweis */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Wir schützen Deine Daten nach DSGVO-Standards.</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};