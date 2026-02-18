import React, { useState } from 'react';

// Imagens de seta (SVGs simples para não depender de assets externos agora)
const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18L9 12L15 6" stroke="#474747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 18L15 12L9 6" stroke="#474747" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Gallery = ({ images, width, height, radius, showThumbs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative group" style={{ width: width || '100%' }}>
      {/* Imagem Principal */}
      <div 
        className="relative overflow-hidden bg-light-gray-3"
        style={{ height: height || 'auto', borderRadius: radius || '0px' }}
      >
        <img 
          src={images[currentIndex].src} 
          alt={`Slide ${currentIndex}`} 
          className="w-full h-full object-cover transition-transform duration-500"
        />
        
        {/* Botões de Navegação (Setas) */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full cursor-pointer z-10"
        >
          <ArrowLeft />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white p-2 rounded-full cursor-pointer z-10"
        >
          <ArrowRight />
        </button>
      </div>

      {/* Thumbnails (Miniaturas) - Só aparece se showThumbs for true */}
      {showThumbs && (
        <div className="flex gap-4 mt-4 overflow-x-auto justify-center">
          {images.map((img, index) => (
            <div 
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`cursor-pointer rounded overflow-hidden w-[100px] h-[100px] border-2 transition ${
                currentIndex === index ? 'border-primary' : 'border-transparent'
              }`}
            >
              <img src={img.src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;