import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/produtos?filter=${e.target.value}`);
    }
  };

  return (
    <header>
      {/* Top Bar (Busca, Logo, Login) */}
      <div className="container mx-auto px-10 py-5 flex items-center justify-between">
        <Logo />
        
        {/* Campo de Busca */}
        <div className="flex-1 mx-10 relative">
          <input 
            type="text" 
            placeholder="Pesquisar produto..." 
            className="w-full bg-light-gray-3 text-dark-gray-2 rounded-lg px-6 py-4 outline-none focus:ring-1 focus:ring-primary"
            onKeyDown={handleSearch}
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-gray-3">
             🔍
          </button>
        </div>

        {/* Ações de Usuário */}
        <div className="flex items-center gap-6">
          <a href="/cadastro" className="text-dark-gray-2 underline text-base">Cadastre-se</a>
          <button className="bg-primary text-white font-bold rounded px-8 py-3 text-sm hover:bg-tertiary transition">
            Entrar
          </button>
          <div className="text-primary cursor-pointer relative">
            🛒 <span className="absolute -top-2 -right-2 bg-error text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </div>
        </div>
      </div>

      {/* Navegação Principal */}
      <nav className="container mx-auto px-10 pb-5">
        <ul className="flex gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Produtos', path: '/produtos' },
            { name: 'Categorias', path: '/categorias' },
            { name: 'Meus Pedidos', path: '/meus-pedidos' },
          ].map((link) => (
            <li key={link.name}>
              <NavLink 
                to={link.path}
                className={({ isActive }) => 
                  isActive ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-dark-gray-2 hover:text-primary transition"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;