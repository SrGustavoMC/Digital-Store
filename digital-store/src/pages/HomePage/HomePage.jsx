import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';

const HomePage = () => {
  const heroImages = [
    { src: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-1.jpeg' },
    { src: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-2.jpeg' },
    { src: 'https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/home-slide-3.jpeg' },
  ];

  // Lista FAKE de produtos para preencher a tela
  const products = [
    { id: 1, name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-1.jpeg", price: 200, priceDiscount: 100 },
    { id: 2, name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-2.jpeg", price: 200, priceDiscount: 100 },
    { id: 3, name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-3.jpeg", price: 200, priceDiscount: 100 },
    { id: 4, name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-4.jpeg", price: 200, priceDiscount: 100 },
    { id: 5, name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-5.jpeg", price: 200, priceDiscount: 100 },
    { id: 6, name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-1.jpeg", price: 200, priceDiscount: 100 },
    { id: 7, name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-2.jpeg", price: 200, priceDiscount: 100 },
    { id: 8, name: "K-Swiss V8 - Masculino", image: "https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/produc-image-3.jpeg", price: 200, priceDiscount: 100 },
  ];

  return (
    <div className="">
      {/* Banner Principal */}
      <div className="relative">
        <Gallery images={heroImages} width="100%" height="680px" />
        <div className="absolute top-1/2 left-10 md:left-24 -translate-y-1/2 max-w-[450px] z-20">
            <span className="text-warning font-bold mb-4 block text-base">Melhores ofertas personalizadas</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-dark-gray mb-6 leading-tight">Queima de estoque Nike 🔥</h1>
            <p className="text-dark-gray-2 mb-8 text-lg">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
            <button className="bg-primary text-white font-bold px-10 py-4 rounded hover:bg-tertiary transition shadow-lg">
                Ver Ofertas
            </button>
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-10 py-16">
        
        {/* Coleções em Destaque (Cards) */}
        <Section title="Coleções em destaque">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-[#D8E3F2] rounded-lg p-6 relative h-[250px] overflow-hidden">
                   <div className="relative z-10 w-1/2">
                      <span className="bg-[#E7FF86] text-dark-gray-2 font-bold px-3 py-1 rounded-full text-xs">30% OFF</span>
                      <h3 className="text-2xl font-bold text-dark-gray mt-3">Novo drop Supreme</h3>
                      <button className="bg-white text-primary font-bold px-4 py-2 rounded mt-4 text-sm hover:bg-gray-100">Comprar</button>
                   </div>
                   {/* Imagem ilustrativa de fundo */}
                   <img src="https://raw.githubusercontent.com/digitalcollegebr/projeto-digital-store/main/public/collection-1.png" className="absolute bottom-0 right-0 h-[80%] object-contain" />
                </div>
              ))}
           </div>
        </Section>

        {/* Coleções em Destaque (Ícones) */}
        <Section title="Coleções em destaque" titleAlign="center">
           <div className="flex justify-center gap-10 flex-wrap">
              {['Camisetas', 'Calças', 'Bonés', 'Headphones', 'Tênis'].map((cat, index) => (
                 <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer">
                    <div className="w-[104px] h-[104px] bg-white rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition">
                       {/* Ícone placeholder (T) */}
                       <span className="text-4xl text-light-gray">👕</span> 
                    </div>
                    <span className="font-bold text-dark-gray-2 group-hover:text-primary">{cat}</span>
                 </div>
              ))}
           </div>
        </Section>

        {/* Produtos em Alta */}
        <Section 
          title="Produtos em alta" 
          link={{ text: "Ver todos", href: "/produtos" }}
        >
          <ProductListing products={products} />
        </Section>
        
      </div>
    </div>
  );
};

export default HomePage;