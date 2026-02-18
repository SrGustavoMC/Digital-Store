import React from 'react';
import Logo from '../Logo/Logo';
import Information from '../Information/Information';

const Footer = () => {
  const infoLinks = [
    { text: "Sobre Drip Store", link: "/about" },
    { text: "Segurança", link: "/security" },
    { text: "Wishlist", link: "/wishlist" },
    { text: "Blog", link: "/blog" },
    { text: "Trabalhe conosco", link: "/work" },
    { text: "Meus Pedidos", link: "/meus-pedidos" }
  ];

  const categoryLinks = [
    { text: "Camisetas", link: "/produtos?filter=camisetas" },
    { text: "Calças", link: "/produtos?filter=calcas" },
    { text: "Bonés", link: "/produtos?filter=bones" },
    { text: "Headphones", link: "/produtos?filter=headphones" },
    { text: "Tênis", link: "/produtos?filter=tenis" }
  ];

  return (
    <footer className="bg-dark-gray text-white pt-16 pb-10 mt-20">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Coluna 1: Sobre */}
        <div className="col-span-1 md:col-span-1">
          <div className="mb-6 w-fit rounded text-white">
             {/* Renderize a Logo aqui. Se a sua Logo padrão é rosa, idealmente ela deveria aceitar uma prop "color" para ficar branca aqui */}
             <Logo />
          </div>
          <p className="text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-4">
             <span className="cursor-pointer">FB</span>
             <span className="cursor-pointer">IG</span>
             <span className="cursor-pointer">TW</span>
          </div>
        </div>

        {/* Coluna 2: Informação */}
        <Information title="Informação" informations={infoLinks} />

        {/* Coluna 3: Categorias */}
        <Information title="Categorias" informations={categoryLinks} />

        {/* Coluna 4: Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contato</h3>
          <p className="text-sm mb-4">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          </p>
          <p className="text-sm">(85) 3051-3411</p>
        </div>
      </div>
      
      <hr className="border-dark-gray-2 mt-10 mb-6" />
      <div className="container mx-auto px-10 text-center text-xs">
        <p>© 2024 Digital Store</p>
      </div>
    </footer>
  );
};

export default Footer;