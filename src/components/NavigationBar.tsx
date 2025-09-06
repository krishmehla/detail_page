import React from 'react';
import { ArrowLeft, Phone, Download, Share2 } from 'lucide-react';

export const NavigationBar: React.FC = () => {
  const handleBackToVehicles = () => {
    // Navigation zur Fahrzeugübersicht
    console.log('Navigate back to vehicle list');
  };

  const handleCall = () => {
    window.location.href = 'tel:+4971234567890';
  };

  const handleDownloadPDF = () => {
    // PDF Download Funktionalität
    console.log('Download vehicle PDF');
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'BMW 3er 320i Sport Line',
          text: 'Schauen Sie sich dieses Fahrzeug an',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback für Browser ohne Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link wurde in die Zwischenablage kopiert');
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Zurück Button */}
          <button
            onClick={handleBackToVehicles}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Zurück zu den Fahrzeugen</span>
          </button>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={handleCall}
              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              aria-label="Anrufen"
            >
              <Phone className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleDownloadPDF}
              className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
              aria-label="Exposé als PDF herunterladen"
            >
              <Download className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleShare}
              className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              aria-label="Teilen"
            >
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};