import React from 'react';
import { StaticNavBar } from './components/StaticNavBar';
import { StickyVehicleBar } from './components/StickyVehicleBar';
import { ImageGallery } from './components/ImageGallery';
import { PricingBox } from './components/PricingBox';
import { VehicleSpecs } from './components/VehicleSpecs';
import { ContactInfo } from './components/ContactInfo';
import { SecondaryActions } from './components/SecondaryActions';
import { ContactForm } from './components/ContactForm';
import { StickyBottomBar } from './components/StickyBottomBar';
import { TechnicalData } from './components/TechnicalData';
import { EnergyEmissions } from './components/EnergyEmissions';
import { VehicleEquipment } from './components/VehicleEquipment';
import { TradeInOptions } from './components/TradeInOptions';
import { TradeInHighlight } from './components/TradeInHighlight';
import { TradeInSection } from './components/TradeInSection';
import { FinancingCalculator } from './components/FinancingCalculator';
import { VehicleDescriptionNew } from './components/VehicleDescriptionNew';
import { SimilarVehicles } from './components/SimilarVehicles';
import { CompactContactCard } from './components/CompactContactCard';
import { Calendar, Gauge, Fuel, Settings, Power, Users, Zap } from 'lucide-react';

function App() {
  const vehicleImages = [
    'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1127249/pexels-photo-1127249.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Static Navigation Bar */}
      <StaticNavBar />
      
      {/* Sticky Vehicle Bar */}
      <StickyVehicleBar />
      
      {/* Mobile Hero Image - Full Width */}
      <div className="md:hidden">
        <ImageGallery 
          images={vehicleImages} 
          altText="BMW 3er 320i Sport Line"
          isMobileHero={true}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Mobile: Pricing Box after Hero Image */}
        <div className="md:hidden mb-8">
          <PricingBox />
        </div>

        {/* Tablet & Desktop: Gallery left (2/3), Pricing right (1/3) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-8">
          {/* Image Gallery - 2/3 width */}
          <div className="md:col-span-2">
            <ImageGallery 
              images={vehicleImages} 
              altText="BMW 3er 320i Sport Line" 
            />
          </div>
          
          {/* Right Column - Pricing + Specs - 1/3 width */}
          <div className="md:col-span-1">
            <div className="space-y-4">
              {/* Compact Pricing Box */}
              <PricingBox />
              
              {/* Technical Specs in 2x3 Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* Row 1 */}
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                  <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-gray-500 text-xs font-normal mb-1">Erstzulassung</div>
                  <div className="text-gray-900 font-semibold text-sm">02/2022</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                  <Gauge className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-gray-500 text-xs font-normal mb-1">KM-Stand</div>
                  <div className="text-gray-900 font-semibold text-sm">45.215 KM</div>
                </div>
                
                {/* Row 2 */}
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                  <Fuel className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-gray-500 text-xs font-normal mb-1">Kraftstoff</div>
                  <div className="text-gray-900 font-semibold text-sm">Benzin</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                  <Settings className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-gray-500 text-xs font-normal mb-1">Getriebe</div>
                  <div className="text-gray-900 font-semibold text-sm">Automatik</div>
                </div>
                
                {/* Row 3 */}
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                  <Zap className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-gray-500 text-xs font-normal mb-1">Leistung</div>
                  <div className="text-gray-900 font-semibold text-sm">225 kW / 306 PS</div>
                </div>
                <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-200">
                  <Users className="w-5 h-5 text-blue-600 mb-2" />
                  <div className="text-gray-500 text-xs font-normal mb-1">Vorbesitzer</div>
                  <div className="text-gray-900 font-semibold text-sm">2</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Vehicle Specifications */}
        <div className="mb-8">
          <VehicleSpecs />
        </div>

        {/* Technical Data */}
        <div className="mb-8">
          <TechnicalData />
        </div>

        {/* Consumption */}
        <div className="mb-8">
          <EnergyEmissions />
        </div>

        {/* Vehicle Equipment */}
        <div className="mb-8">
          <VehicleEquipment />
        </div>

        {/* Vehicle Description */}
        <div className="mb-8">
          <VehicleDescriptionNew />
        </div>

        {/* Trade-In Sections - Desktop: Side by Side, Mobile: Swapped Order */}
        <div className="mb-8">
          {/* Mobile: TradeInSection first, then TradeInHighlight */}
          <div className="md:hidden space-y-8">
            <TradeInSection />
            <TradeInHighlight />
          </div>
          
          {/* Desktop: Side by Side */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            <TradeInSection />
            <TradeInHighlight />
          </div>
        </div>

        {/* Financing Highlight */}
        <div className="mb-8">
          <FinancingCalculator />
        </div>

        {/* Contact Form */}
        <div className="mb-8">
          <CompactContactCard />
        </div>

        {/* Similar Vehicles */}
        <div className="mb-8">
          <SimilarVehicles />
        </div>

      </div>
      
      {/* Sticky Bottom Bar */}
      <StickyBottomBar />
    </div>
  );
}

export default App;