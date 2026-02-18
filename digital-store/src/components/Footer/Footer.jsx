import React from 'react';
import Logo from '../Logo/Logo';

const Footer = () => {
  return (
    <footer className="bg-dark-gray text-white pt-16 pb-10 mt-20">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Coluna 1: Sobre */}
        <div className="col-span-1">
          <div className="mb-6 bg-white p-2 w-fit rounded"><Logo /></div>
          <p className="text-sm leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="flex gap-4">
             {/* Icones sociais placeholder */}
             <span>Facebook</span>
             <span>Instagram</span>
             <span>Twitter</span>
          </div>
        </div>

        {/* Coluna 2: Informação */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Informação</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="/about" className="hover:text-primary">Sobre Drip Store</a></li>
            <li><a href="/security" className="hover:text-primary">Segurança</a></li>
            <li><a href="/wishlist" className="hover:text-primary">Wishlist</a></li>
            <li><a href="/blog" className="hover:text-primary">Blog</a></li>
            <li><a href="/work" className="hover:text-primary">Trabalhe conosco</a></li>
            <li><a href="/orders" className="hover:text-primary">Meus Pedidos</a></li>
          </ul>
        </div>

        {/* Coluna 3: Categorias */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Categorias</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-primary">Camisetas</a></li>
            <li><a href="#" className="hover:text-primary">Calças</a></li>
            <li><a href="#" className="hover:text-primary">Bonés</a></li>
            <li><a href="#" className="hover:text-primary">Headphones</a></li>
            <li><a href="#" className="hover:text-primary">Tênis</a></li>
          </ul>
        </div>

        {/* Coluna 4: Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Contato</h3>
          <p className="text-sm mb-4">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
          </p>
          <p className="text-sm">(85) 3051-3411</p>
        </div>
      </div>
      
      <div className="container mx-auto px-10 mt-10 pt-6 border-t border-dark-gray-2 text-center text-xs">
        © 2026 Digital Store
      </div>
    </footer>
  );
};

export default Footer;