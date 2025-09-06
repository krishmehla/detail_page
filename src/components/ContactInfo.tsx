import React from 'react';
import { Phone, Mail, MapPin, Star } from 'lucide-react';

export const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
            alt="Ansprechpartner"
            className="w-16 h-16 rounded-full object-cover"
          />
        </div>

        {/* Contact Details */}
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-semibold text-gray-900 mb-1">Michael Weber</h4>
          <p className="text-gray-600 text-sm mb-3">Verkaufsberater</p>
          
          {/* Contact Methods */}
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="w-4 h-4 text-gray-500" />
              <a href="tel:+4971234567890" className="text-blue-600 hover:text-blue-700">
                +49 (0) 7123 456 78-90
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4 text-gray-500" />
              <a href="mailto:weber@autohaus-beispiel.de" className="text-blue-600 hover:text-blue-700">
                weber@autohaus-beispiel.de
              </a>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 text-gray-500" />
              <span>Stuttgart, Baden-Württemberg</span>
            </div>
          </div>
        </div>
      </div>

      {/* Dealer Info */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div>
            <h5 className="font-semibold text-gray-900 text-sm">Autohaus Beispiel GmbH</h5>
            <div className="flex items-center space-x-2 mt-1">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">4.8 (124 Bewertungen)</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
              MwSt. ausweisbar
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};