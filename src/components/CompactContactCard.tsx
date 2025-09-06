import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  ChevronDown,
  ChevronUp,
  Shield,
  ArrowRight,
  CreditCard,
  Car,
  Route
} from 'lucide-react';

export const CompactContactCard: React.FC = () => {
  const [showHours, setShowHours] = useState(false);
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+49',
    phone: '',
    interests: [] as string[],
    message: 'Hallo, ich interessiere mich für das Fahrzeug von Ihrer Website',
    privacyAccepted: false
  });

  const handleCall = () => {
    window.location.href = 'tel:+4971234567890';
  };

  const handleEmail = () => {
    window.location.href = 'mailto:weber@autohaus-beispiel.de';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const interests = [
    { id: 'financing', label: 'Finanzierung', icon: CreditCard },
    { id: 'tradein', label: 'Inzahlungnahme', icon: Car },
    { id: 'testdrive', label: 'Probefahrt', icon: Route }
  ];

  const countryCodes = [
    { code: '+49', country: 'DE' },
    { code: '+43', country: 'AT' },
    { code: '+41', country: 'CH' },
    { code: '+33', country: 'FR' },
    { code: '+31', country: 'NL' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6" data-contact-form>
      {/* Header */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Kontakt & Anfrage</h3>
      
      {/* Desktop: Two Column Layout */}
      <div className="hidden md:flex gap-6">
        {/* Left Column: Modern Full-Height Design */}
        <div className="w-1/4 flex-shrink-0 bg-gradient-to-b from-gray-50 to-gray-100 rounded-xl p-6 flex flex-col justify-between min-h-full">
          {/* Top Section: Company & Location */}
          <div className="space-y-6">
            {/* Company Name */}
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">Autohaus Beispiel GmbH</h4>
              <div className="w-12 h-0.5 bg-blue-600 rounded-full"></div>
            </div>
            
            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <div className="text-sm font-medium text-gray-900">Musterstraße 123</div>
                <div className="text-sm text-gray-600">70173 Stuttgart</div>
              </div>
            </div>
            
            {/* Opening Hours - Collapsible */}
            <div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-gray-900 mb-1">Öffnungszeiten</div>
                  <div className="text-sm font-semibold text-green-600 mb-2">Jetzt geöffnet</div>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div>Mo–Fr: 08:00 – 18:00 Uhr</div>
                    <div>Sa: 09:00 – 16:00 Uhr</div>
                    <div>So: Geschlossen</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Contact Person */}
          <div className="mt-8">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              {/* Contact Person Header */}
              <div className="text-center mb-4">
                <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">Ihr Ansprechpartner</div>
                <div className="w-8 h-0.5 bg-blue-600 rounded-full mx-auto"></div>
              </div>
              
              {/* Contact Person Info */}
              <div className="text-center">
                {/* Larger Profile Image */}
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Michael Weber"
                  className="w-20 h-20 rounded-lg object-cover mx-auto mb-3 ring-2 ring-blue-100"
                />
                
                {/* Name & Position */}
                <div className="mb-3">
                  <div className="text-base font-bold text-gray-900">Michael Weber</div>
                  <div className="text-sm text-gray-600">Verkaufsberater</div>
                </div>
                
                {/* Phone Number */}
                <button
                  onClick={handleCall}
                  className="flex items-center justify-center space-x-2 w-full p-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200 font-medium text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>+49 (0) 7123 456 78-90</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Anrede */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anrede <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="salutation"
                    value="herr"
                    checked={formData.salutation === 'herr'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700">Herr</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="salutation"
                    value="frau"
                    checked={formData.salutation === 'frau'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700">Frau</span>
                </label>
              </div>
            </div>

            {/* Name */}
            <div className="grid grid-cols-2 gap-3">
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

            {/* E-Mail und Telefon - Desktop: nebeneinander, Mobile: untereinander */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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
                <div className="flex">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-gray-50"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.country} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="171 1234567"
                    className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Interesse */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interesse
              </label>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => {
                  const IconComponent = interest.icon;
                  const isSelected = formData.interests.includes(interest.id);
                  return (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => handleInterestToggle(interest.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg border-2 transition-all duration-200 text-sm ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{interest.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Nachricht */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nachricht
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
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
                und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              <span>Jetzt anfragen</span>
            </button>

            {/* DSGVO Hinweis */}
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
              <Shield className="w-4 h-4 text-green-600" />
              <span>Wir schützen Deine Daten nach DSGVO-Standards.</span>
            </div>
          </form>
        </div>
      </div>

      {/* Mobile: Stacked Layout */}
      <div className="md:hidden space-y-6">
        {/* Company & Location */}
        <div className="space-y-4">
          {/* Company Name */}
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-1">Autohaus Beispiel GmbH</h4>
            <div className="w-12 h-0.5 bg-blue-600 rounded-full"></div>
          </div>
          
          {/* Address */}
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div>
              <div className="text-sm font-medium text-gray-900">Musterstraße 123</div>
              <div className="text-sm text-gray-600">70173 Stuttgart</div>
            </div>
          </div>
          
          {/* Phone */}
          {/* Opening Hours */}
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900 mb-1">Öffnungszeiten</div>
              <div className="text-sm font-semibold text-green-600 mb-2">Jetzt geöffnet</div>
              <div className="space-y-1 text-sm text-gray-600">
                <div>Mo–Fr: 08:00 – 18:00 Uhr</div>
                <div>Sa: 09:00 – 16:00 Uhr</div>
                <div>So: Geschlossen</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Person */}
        <div className="border-t border-gray-200 pt-6">
          {/* Contact Person Header */}
          <div className="mb-4">
            <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">Ihr Ansprechpartner</div>
            <div className="w-8 h-0.5 bg-blue-600 rounded-full"></div>
          </div>
          
          <div className="flex items-start space-x-4">
            <img
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
              alt="Michael Weber"
              className="w-16 h-16 rounded-lg object-cover flex-shrink-0 ring-2 ring-blue-100"
            />
            
            <div className="flex-1 min-w-0">
              <div className="text-base font-bold text-gray-900 mb-1">Michael Weber</div>
              <div className="text-sm text-gray-600 mb-3">Verkaufsberater</div>
              
              <button
                onClick={handleCall}
                className="w-full flex items-center justify-center space-x-2 p-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors duration-200 font-medium text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>+49 (0) 7123 456 78-90</span>
              </button>
            </div>
          </div>
        </div>


        {/* Contact Form */}
        <div className="border-t border-gray-200 pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Anrede */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Anrede <span className="text-red-500">*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="salutation"
                    value="herr"
                    checked={formData.salutation === 'herr'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700">Herr</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="salutation"
                    value="frau"
                    checked={formData.salutation === 'frau'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                    required
                  />
                  <span className="ml-2 text-sm text-gray-700">Frau</span>
                </label>
              </div>
            </div>

            {/* Name */}
            <div className="grid grid-cols-2 gap-3">
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

            {/* E-Mail */}
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

            {/* Telefon */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefonnummer <span className="text-red-500">*</span>
              </label>
              <div className="flex">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-gray-50"
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.country} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="171 1234567"
                  className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </div>
            </div>

            {/* Interesse */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Interesse
              </label>
              <div className="grid grid-cols-1 gap-2">
                {interests.map((interest) => {
                  const IconComponent = interest.icon;
                  const isSelected = formData.interests.includes(interest.id);
                  return (
                    <button
                      key={interest.id}
                      type="button"
                      onClick={() => handleInterestToggle(interest.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg border-2 transition-all duration-200 text-sm ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span>{interest.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Nachricht */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nachricht
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={3}
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
                und bin damit einverstanden, dass meine Daten zur Bearbeitung meiner Anfrage verwendet werden.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
            >
              <span>Jetzt anfragen</span>
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