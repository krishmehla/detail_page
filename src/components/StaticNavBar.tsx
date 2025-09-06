import React from 'react';
import { ArrowLeft, Phone, Share2, Download } from 'lucide-react';

export const StaticNavBar: React.FC = () => {
  const handleBackToVehicles = () => {
    console.log('Navigate back to vehicle list');
  };

  const handleCall = () => {
    window.location.href = 'tel:+4971234567890';
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
      navigator.clipboard.writeText(window.location.href);
      alert('Link wurde in die Zwischenablage kopiert');
    }
  };

  const handleDownloadPDF = () => {
    console.log('Download vehicle PDF');
  };

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zurück Button */}
          <button
            onClick={handleBackToVehicles}
            className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Zurück zu den Fahrzeugen</span>
          </button>

          {/* Action Icons */}
          <div className="flex items-center space-x-1 md:space-x-2">
            <button
              onClick={handleCall}
              className="flex items-center space-x-2 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
              aria-label="Anrufen"
            >
              <span className="hidden md:inline text-sm font-medium">Anrufen</span>
              <Phone className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleShare}
              className="flex items-center space-x-2 p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
              aria-label="Teilen"
            >
              <span className="hidden md:inline text-sm font-medium">Teilen</span>
              <Share2 className="w-5 h-5" />
            </button>
            
            <button
              onClick={handleDownloadPDF}
              className="flex items-center space-x-2 p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all duration-200"
              aria-label="PDF herunterladen"
            >
              <span className="hidden md:inline text-sm font-medium">PDF</span>
              <Download className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};