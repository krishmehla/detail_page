import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  altText: string;
  isMobileHero?: boolean;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, altText, isMobileHero = false }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

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

    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
    
    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Mobile Hero Layout
  if (isMobileHero) {
    return (
      <div className="relative">
        {/* Main Image - Full Width */}
        <div className="relative bg-gray-100 overflow-hidden aspect-[4/3]">
          <img
            src={images[currentImage]}
            alt={`${altText} - Bild ${currentImage + 1}`}
            className="w-full h-full object-cover"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
          
          {/* Image Counter */}
          <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentImage + 1}/{images.length}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                currentImage === index ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  // Desktop Layout (existing)
  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-gray-100 rounded-xl overflow-hidden aspect-[4/3]">
        <img
          src={images[currentImage]}
          alt={`${altText} - Bild ${currentImage + 1}`}
          className="w-full h-full object-cover"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        />
        
        {/* Navigation arrows - desktop only */}
        <button
          onClick={prevImage}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Vorheriges Bild"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        
        <button
          onClick={nextImage}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200"
          aria-label="Nächstes Bild"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Mobile swipe indicator */}
        <div className="md:hidden absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImage + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Gallery - hidden on mobile */}
      <div className="hidden md:grid grid-cols-6 gap-2">
        {images.slice(0, 6).map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative bg-gray-100 rounded-lg overflow-hidden aspect-[4/3] border-2 transition-all duration-200 ${
              currentImage === index 
                ? 'border-blue-500 ring-2 ring-blue-200' 
                : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img
              src={image}
              alt={`${altText} - Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Mobile dots indicator */}
      <div className="md:hidden flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              currentImage === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};