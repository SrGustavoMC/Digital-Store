import React, { useState } from 'react';

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Gallery = ({ images, width, height, radius, showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="relative group" style={{ width: width || '100%' }}>
      {/* Imagem Principal */}
      <div 
        className="relative overflow-hidden bg-light-gray-3 flex items-center justify-center"
        style={{ height: height || 'auto', borderRadius: radius || '0px' }}
      >
        <img 
          src={images[currentIndex].src} 
          alt={`Slide ${currentIndex}`} 
          className="w-full h-full object-cover transition-transform duration-500"
        />
        
        {/* Setas */}
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className={`absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-10 transition ${
            currentIndex === 0 
              ? 'text-light-gray cursor-not-allowed opacity-50' 
              : 'text-dark-gray bg-white/50 hover:bg-white cursor-pointer'
          }`}
        >
          <ArrowLeft />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentIndex === images.length - 1}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full z-10 transition ${
            currentIndex === images.length - 1 
              ? 'text-light-gray cursor-not-allowed opacity-50' 
              : 'text-dark-gray bg-white/50 hover:bg-white cursor-pointer'
          }`}
        >
          <ArrowRight />
        </button>
      </div>

      {/* Miniaturas (Requisito 4.4 - 117px x 95px) */}
      {showThumbs && (
        <div className="flex gap-4 mt-4 overflow-x-auto justify-start">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{ borderRadius: radius || '0px' }}
              className={`cursor-pointer overflow-hidden flex-shrink-0 w-[117px] h-[95px] border-2 transition ${
                currentIndex === index ? 'border-primary' : 'border-transparent'
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover bg-light-gray-3" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;