import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductListing = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard 
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          priceDiscount={product.priceDiscount}
        />
      ))}
    </div>
  );
};

export default ProductListing;