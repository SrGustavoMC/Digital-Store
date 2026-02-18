import React from 'react';

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const BuyBox = ({ name, reference, stars, rating, price, priceDiscount, description, children }) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Nome e Referência */}
      <div>
        <h1 className="text-[32px] font-normal text-dark-gray leading-tight mb-1">{name}</h1>
        <p className="text-xs text-dark-gray-3">Casual | Nike | REF:{reference}</p>
      </div>

      {/* Avaliações */}
      <div className="flex items-center gap-2 mt-2">
        <div className="bg-warning text-white flex items-center gap-1 px-3 py-1 rounded text-sm font-bold">
          {stars} <StarIcon />
        </div>
        <span className="text-sm text-light-gray">({rating} avaliações)</span>
      </div>

      {/* Preços */}
      <div className="flex items-end gap-2 mt-4">
        {priceDiscount ? (
          <>
            <span className="text-dark-gray-2 text-[32px] font-bold">R$ {priceDiscount.toFixed(2)}</span>
            <span className="text-light-gray-2 text-base line-through mb-2">R$ {price.toFixed(2)}</span>
          </>
        ) : (
          <span className="text-dark-gray text-[32px] font-bold">R$ {price.toFixed(2)}</span>
        )}
      </div>

      {/* Descrição */}
      <div className="mt-4">
        <h3 className="text-sm text-light-gray font-bold mb-2">Descrição do produto</h3>
        <p className="text-sm text-dark-gray-2 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Opções (Tamanho/Cor) injetadas via children */}
      <div className="mt-6 flex flex-col gap-4">
        {children}
      </div>

      {/* Botão de Compra */}
      <button className="bg-warning text-white font-bold text-base w-full md:w-fit px-12 py-4 rounded mt-8 hover:opacity-90 transition">
        COMPRAR
      </button>
    </div>
  );
};

export default BuyBox;