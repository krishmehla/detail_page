import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Gauge, Zap, Fuel, Leaf, MapPin } from 'lucide-react';

export const SimilarVehicles: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const similarVehicles = [
    {
      id: 1,
      title: 'BMW 3er 318i Sport Line',
      price: 22990,
      year: 2021,
      mileage: 38500,
      fuel: 'Benzin',
      power: '100 kW / 136 PS',
      consumption: '5.8 l/100km',
      co2Emissions: 132,
      co2Class: 'C',
      condition: 'Gebraucht',
      location: 'Stuttgart',
      image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'BMW 3er 325i M Sport',
      price: 28990,
      year: 2022,
      mileage: 25800,
      fuel: 'Benzin',
      power: '150 kW / 204 PS',
      consumption: '6.2 l/100km',
      co2Emissions: 141,
      co2Class: 'D',
      condition: 'Gebraucht',
      location: 'München',
      image: 'https://images.pexels.com/photos/544542/pexels-photo-544542.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'BMW 3er 320d xDrive',
      price: 26490,
      year: 2021,
      mileage: 42100,
      fuel: 'Diesel',
      power: '140 kW / 190 PS',
      consumption: '4.8 l/100km',
      co2Emissions: 126,
      co2Class: 'B',
      condition: 'Gebraucht',
      location: 'Hamburg',
      image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 4,
      title: 'BMW 3er 330i Luxury Line',
      price: 31990,
      year: 2022,
      mileage: 18900,
      fuel: 'Benzin',
      power: '190 kW / 258 PS',
      consumption: '6.8 l/100km',
      co2Emissions: 155,
      co2Class: 'E',
      condition: 'Gebraucht',
      location: 'Berlin',
      image: 'https://images.pexels.com/photos/1127249/pexels-photo-1127249.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 5,
      title: 'BMW 3er 318d Sport Line',
      price: 24990,
      year: 2021,
      mileage: 35200,
      fuel: 'Diesel',
      power: '110 kW / 150 PS',
      consumption: '4.2 l/100km',
      co2Emissions: 110,
      co2Class: 'A',
      condition: 'Gebraucht',
      location: 'Frankfurt',
      image: 'https://images.pexels.com/photos/1552617/pexels-photo-1552617.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      id: 6,
      title: 'BMW 3er 320i xDrive',
      price: 27490,
      year: 2022,
      mileage: 28700,
      fuel: 'Benzin',
      power: '135 kW / 184 PS',
      consumption: '6.0 l/100km',
      co2Emissions: 137,
      co2Class: 'C',
      condition: 'Gebraucht',
      location: 'Köln',
      image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  // Desktop: 3 cards per slide, Mobile: 1 card per slide
  const cardsPerSlide = window.innerWidth >= 768 ? 3 : 1;
  const totalSlides = Math.ceil(similarVehicles.length / cardsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true
    }).format(value);
  };

  const formatMileage = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
      useGrouping: true
    }).format(value);
  };

  const getCO2ClassColor = (co2Class: string) => {
    const colors = {
      A: 'bg-green-500 text-white',
      B: 'bg-green-400 text-white',
      C: 'bg-yellow-400 text-gray-900',
      D: 'bg-yellow-500 text-gray-900',
      E: 'bg-orange-400 text-white',
      F: 'bg-red-400 text-white',
      G: 'bg-red-500 text-white'
    };
    return colors[co2Class as keyof typeof colors] || 'bg-gray-400 text-white';
  };

  const getVisibleVehicles = () => {
    const startIndex = currentSlide * cardsPerSlide;
    return similarVehicles.slice(startIndex, startIndex + cardsPerSlide);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      {/* Header with Navigation Arrows */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Ähnliche Fahrzeuge</h3>
        
        {/* Top Right Arrow Navigation */}
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-2 rounded-lg border transition-all duration-200 ${
              currentSlide === 0
                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className={`p-2 rounded-lg border transition-all duration-200 ${
              currentSlide === totalSlides - 1
                ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-800 hover:bg-gray-50'
            }`}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <div className="relative">
        {/* Vehicle Cards Container */}
        <div 
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div 
            className="flex transition-transform duration-300 ease-in-out md:gap-6"
            style={{ 
              transform: `translateX(-${currentSlide * 100}%)`,
              width: `${totalSlides * 100}%`
            }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex} 
                className="flex gap-6 w-full flex-shrink-0"
                style={{ width: `${100 / totalSlides}%` }}
              >
                {similarVehicles
                  .slice(slideIndex * cardsPerSlide, (slideIndex + 1) * cardsPerSlide)
                  .map((vehicle) => (
                    <div 
                      key={vehicle.id} 
                      className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer flex-1"
                    >
                      {/* Image with Badge */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={vehicle.image}
                          alt={vehicle.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                        />
                      </div>

                      <div className="p-4 space-y-3">
                        {/* Model Name */}
                        <div className="flex items-start justify-between">
                          <div className="flex-1 pr-2">
                            <div className="font-bold text-gray-900 text-sm leading-tight">
                              {vehicle.title.split(' ')[0]} {vehicle.title.split(' ')[1]}
                            </div>
                            <div className="font-medium text-gray-900 text-sm leading-tight -mt-0.5">
                              {vehicle.title.split(' ').slice(2).join(' ')}
                            </div>
                          </div>
                          <div className="flex items-center space-x-1 text-gray-600 flex-shrink-0">
                            <MapPin className="w-3 h-3" />
                            <span className="text-xs">{vehicle.location}</span>
                          </div>
                        </div>

                        {/* Price Section */}
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-baseline space-x-2">
                              <span className="text-lg font-bold text-blue-900">
                                {formatCurrency(vehicle.price)} €
                              </span>
                              <span className="text-xs text-blue-600">
                                inkl. 19% MwSt.
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Key Facts - Desktop: 3 columns, Mobile: Horizontal scroll chips */}
                        <div className="md:grid md:grid-cols-3 md:gap-2 md:text-center">
                          <div className="hidden md:block">
                            <div className="flex flex-col items-center mb-2">
                              <Zap className="w-5 h-5 mb-1 text-gray-900" />
                              <div className="text-sm font-semibold text-gray-900">{vehicle.power}</div>
                            </div>
                          </div>
                          
                          <div className="hidden md:block">
                            <div className="flex flex-col items-center mb-2">
                              <Gauge className="w-5 h-5 mb-1 text-gray-900" />
                              <div className="text-sm font-semibold text-gray-900">{formatMileage(vehicle.mileage)} km</div>
                            </div>
                          </div>
                          
                          <div className="hidden md:block">
                            <div className="flex flex-col items-center mb-2">
                              <Calendar className="w-5 h-5 mb-1 text-gray-900" />
                              <div className="text-sm font-semibold text-gray-900">{vehicle.year}</div>
                            </div>
                          </div>

                          {/* Mobile: Horizontal scrollable chips */}
                          <div className="md:hidden flex space-x-3 overflow-x-auto pb-2 scrollbar-hide">
                            <div className="flex flex-col items-center bg-white rounded-lg px-3 py-2 border border-gray-200 flex-shrink-0 min-w-0">
                              <Zap className="w-5 h-5 text-gray-900 mb-1" />
                              <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">{vehicle.power}</span>
                            </div>
                            <div className="flex flex-col items-center bg-white rounded-lg px-3 py-2 border border-gray-200 flex-shrink-0 min-w-0">
                              <Gauge className="w-5 h-5 text-gray-900 mb-1" />
                              <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">{formatMileage(vehicle.mileage)} km</span>
                            </div>
                            <div className="flex flex-col items-center bg-white rounded-lg px-3 py-2 border border-gray-200 flex-shrink-0 min-w-0">
                              <Calendar className="w-5 h-5 text-gray-900 mb-1" />
                              <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">{vehicle.year}</span>
                            </div>
                          </div>
                        </div>

                        {/* Fuel Consumption & CO2 Info Box */}
                        <div className="bg-gray-100 rounded-lg p-3 border border-gray-200">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-1">
                              <Fuel className="w-4 h-4 text-amber-600" />
                              <span className="text-xs text-gray-600">Verbrauch</span>
                            </div>
                            <span className="text-xs font-semibold text-gray-900">{vehicle.consumption}</span>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-1">
                              <Leaf className="w-4 h-4 text-emerald-600" />
                              <span className="text-xs text-gray-600">CO₂-Emissionen</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className="text-xs font-semibold text-gray-900">{vehicle.co2Emissions} g/km</span>
                              <span className={`text-xs font-bold px-1.5 py-0.5 rounded ${getCO2ClassColor(vehicle.co2Class)}`}>
                                {vehicle.co2Class}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};