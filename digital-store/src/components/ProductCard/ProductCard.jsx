import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, name, price, priceDiscount, id }) => {
  return (
    <Link to={`/product/${id}`} className="group block w-full">
      <div className="bg-white rounded overflow-hidden shadow-sm group-hover:shadow-lg transition relative h-[321px] flex items-center justify-center">
        {/* Tag de Desconto (Só aparece se tiver desconto) */}
        {priceDiscount && (
            <span className="absolute top-4 left-4 bg-[#E7FF86] text-dark-gray-2 font-bold text-xs px-3 py-1 rounded-full">
                30% OFF
            </span>
        )}
        
        {/* Imagem do Produto */}
        <img src={image} alt={name} className="max-h-[70%] object-contain group-hover:scale-105 transition-transform duration-300" />
      </div>
      
      {/* Informações */}
      <div className="mt-4">
        <p className="text-xs text-light-gray font-bold mb-1">Tênis</p>
        <h3 className="text-dark-gray-2 text-2xl font-normal mb-2 truncate" title={name}>{name}</h3>
        
        <div className="flex items-center gap-2">
            {/* Preço Original (Riscado se tiver desconto) */}
            <span className={`block ${priceDiscount ? 'text-light-gray line-through decoration-light-gray text-xl' : 'text-dark-gray font-bold text-2xl'}`}>
                ${price}
            </span>
            
            {/* Preço com Desconto */}
            {priceDiscount && (
                <span className="text-dark-gray-2 text-2xl font-bold">
                    ${priceDiscount}
                </span>
            )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;