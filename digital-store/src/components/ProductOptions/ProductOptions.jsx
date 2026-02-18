import React, { useState } from 'react';

const ProductOptions = ({ options, radius, shape, type }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="flex gap-3 mt-3">
      {options.map((option, index) => {
        const isSelected = selectedIndex === index;
        
        // Classes base dependendo do shape
        let shapeClasses = shape === 'circle' 
          ? 'w-[31px] h-[31px] rounded-full flex items-center justify-center cursor-pointer transition-all '
          : 'h-[46px] min-w-[46px] px-3 flex items-center justify-center cursor-pointer transition-all border border-light-gray-2 ';

        // Estilo inline para o radius (se for square) e para a cor de fundo (se for color)
        let customStyles = {};
        if (shape === 'square' && radius) {
          customStyles.borderRadius = radius;
        }
        if (type === 'color') {
          customStyles.backgroundColor = option;
        }

        // Borda de seleção (Requisito 7.2)
        const borderClasses = isSelected ? 'border-2 border-primary ' : 'border-transparent ';

        return (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`${shapeClasses} ${borderClasses}`}
            style={customStyles}
          >
            {/* Renderiza o texto apenas se o type for text */}
            {type === 'text' && (
              <span className="text-2xl text-dark-gray-2">{option}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductOptions;