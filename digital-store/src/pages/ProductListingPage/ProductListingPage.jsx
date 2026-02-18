import React from 'react';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';

const ProductListingPage = () => {
  // Simulação de muitos produtos para encher a tela
  const products = Array(12).fill({
    id: 1, 
    name: "K-Swiss V8 - Masculino", 
    image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-1.jpeg", 
    price: 200, 
    priceDiscount: 100 
  });

  return (
    <div className="container mx-auto px-5 md:px-10 py-10">
      
      {/* Cabeçalho da Listagem (Ordenação) */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
         <p className="text-dark-gray-2 font-bold">
            Resultados para "Tênis" - <span className="font-normal">389 produtos</span>
         </p>
         
         <div className="flex items-center gap-4 border border-dark-gray text-dark-gray-2 px-4 py-3 rounded">
            <label className="font-bold text-sm">Ordenar por:</label>
            <select className="bg-transparent outline-none font-normal text-sm cursor-pointer">
               <option>Mais relevantes</option>
               <option>Menor preço</option>
               <option>Maior preço</option>
            </select>
         </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* BARRA LATERAL (FILTROS) */}
        <aside className="w-full md:w-[308px] bg-white p-6 rounded h-fit hidden md:block">
           <h2 className="font-bold text-dark-gray-2 mb-5">Filtrar por</h2>
           <hr className="border-light-gray-2 mb-6"/>

           <FilterGroup 
             title="Marca" 
             inputType="checkbox"
             options={[
               { text: "Adidas" },
               { text: "Nike" },
               { text: "Puma" },
               { text: "K-Swiss" },
             ]}
           />

           <FilterGroup 
             title="Categoria" 
             inputType="checkbox"
             options={[
               { text: "Esporte e lazer" },
               { text: "Casual" },
               { text: "Utilitário" },
               { text: "Corrida" },
             ]}
           />

           <FilterGroup 
             title="Gênero" 
             inputType="checkbox"
             options={[
               { text: "Masculino" },
               { text: "Feminino" },
               { text: "Unissex" },
             ]}
           />

           <FilterGroup 
             title="Estado" 
             inputType="radio"
             options={[
               { text: "Novo" },
               { text: "Usado" },
             ]}
           />
        </aside>

        {/* GRADE DE PRODUTOS */}
        <main className="flex-1">
           <ProductListing products={products} />
        </main>

      </div>
    </div>
  );
};

export default ProductListingPage;