/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Search, Sparkles, BookOpen, ThumbsUp } from 'lucide-react';
import { BookingCategory, PageRoute } from '../types';

interface NavigationProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  onSearchSubmit: (keyword: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentRoute,
  onNavigate,
  onSearchSubmit,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchState, setSearchState] = useState('');

  const menuItems = [
    { label: 'Início', route: { type: 'home' } as PageRoute },
    { label: 'Blog', route: { type: 'blog' } as PageRoute },
    { label: 'Cabelos', route: { type: 'blog', categoryFilter: 'Cabelos' as BookingCategory } as PageRoute },
    { label: 'Unhas', route: { type: 'blog', categoryFilter: 'Unhas' as BookingCategory } as PageRoute },
    { label: 'Maquiagem', route: { type: 'blog', categoryFilter: 'Maquiagem' as BookingCategory } as PageRoute },
    { label: 'Cursos', route: { type: 'blog', categoryFilter: 'Cursos de Beleza' as BookingCategory } as PageRoute },
    { label: 'Carreira', route: { type: 'blog', categoryFilter: 'Carreira' as BookingCategory } as PageRoute },
    { label: 'Anuncie Conosco', route: { type: 'advertise' } as PageRoute },
    { label: 'Contato', route: { type: 'contact' } as PageRoute },
  ];

  const handleSearchKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchSubmit(searchState);
      setSearchOpen(false);
      setMobileMenuOpen(false);
    }
  };

  const handleSearchClick = () => {
    if (searchState.trim()) {
      onSearchSubmit(searchState);
      setSearchOpen(false);
      setMobileMenuOpen(false);
    } else {
      setSearchOpen(!searchOpen);
    }
  };

  const isRouteActive = (itemRoute: PageRoute) => {
    if (currentRoute.type === itemRoute.type) {
      if (currentRoute.type === 'blog' && itemRoute.type === 'blog') {
        return currentRoute.categoryFilter === itemRoute.categoryFilter;
      }
      return true;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#F2E8DF] dark:bg-[#1C1816]/95 dark:border-[#332C28] transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo Brand */}
          <div 
            className="flex items-center space-x-2.5 cursor-pointer group"
            onClick={() => onNavigate({ type: 'home' })}
          >
            <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-gradient-to-tr from-[#E5D1B8]/40 to-[#F9F6F2] dark:from-[#C49B66]/20 dark:to-[#332C28] flex items-center justify-center text-[#1A1A1A] dark:text-[#EDE6E2] shadow-xs group-hover:scale-105 transition-transform duration-200">
              <Sparkles size={18} className="text-[#C49B66]" />
            </div>
            <div className="text-left">
              <h1 className="text-lg sm:text-2xl font-serif font-bold italic tracking-tighter text-[#1A1A1A] dark:text-[#EDE6E2]">
                Portal <span className="text-[#C49B66]">Escola da Beleza</span>
              </h1>
              <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#C49B66] uppercase block -mt-0.5 font-bold">
                portalescoladabelezza.com.br
              </span>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex space-x-1 items-center h-full">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  onNavigate(item.route);
                  setSearchState('');
                }}
                className={`py-2 px-3 rounded-none text-[11px] font-sans font-extrabold uppercase tracking-wider transition-all duration-150 h-12 flex items-center justify-center border-b-2 ${
                  isRouteActive(item.route)
                    ? 'border-[#C49B66] text-[#C49B66] dark:border-[#E6C9A8] dark:text-[#E6C9A8]'
                    : 'border-transparent text-[#555] hover:text-[#C49B66] hover:bg-[#F9F6F2]/40 dark:text-[#A89D96] dark:hover:text-[#E6C9A8] dark:hover:bg-[#332C28]/40'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Header Action Tools */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Search toggler desktop */}
            <div className="hidden sm:flex items-center relative">
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${searchOpen ? 'w-48 sm:w-60 opacity-100 mr-2' : 'w-0 opacity-0'}`}>
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchState}
                  onChange={(e) => setSearchState(e.target.value)}
                  onKeyDown={handleSearchKeyPress}
                  className="w-full text-xs py-2 px-3 bg-[#F9F6F2] border border-[#E5D1B8] focus:border-[#C49B66] focus:ring-1 focus:ring-[#C49B66] focus:outline-none rounded-full text-[#2D2D2D] dark:bg-[#181412] dark:border-[#332C28] dark:text-[#EDE6E2] dark:focus:border-[#E6C9A8]"
                />
              </div>
              <button
                onClick={handleSearchClick}
                className="p-2 text-[#555] hover:text-[#C49B66] hover:bg-[#F9F6F2] dark:text-[#A89D96] dark:hover:text-[#E6C9A8] dark:hover:bg-[#332C28] rounded-full transition"
                title="Pesquisar"
              >
                <Search size={18} />
              </button>
            </div>

            {/* Newsletter Shortcut Button */}
            <button
              onClick={() => onNavigate({ type: 'blog', categoryFilter: 'Guias para Iniciantes' as BookingCategory })}
              className="hidden md:inline-flex items-center space-x-1.5 px-4 py-2 bg-[#C49B66] hover:bg-[#B38A55] text-white rounded shadow-xs text-xs font-sans font-bold tracking-wider uppercase transition-colors cursor-pointer"
            >
              <BookOpen size={13} />
              <span>Guias Completos</span>
            </button>

            {/* Mobile search bar button */}
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                if (!searchOpen && mobileMenuOpen) setMobileMenuOpen(false);
              }}
              className="p-2 text-[#555] hover:text-[#C49B66] hover:bg-[#F9F6F2] dark:text-[#A89D96] dark:hover:text-[#E6C9A8] dark:hover:bg-[#332C28] rounded-full transition sm:hidden"
            >
              <Search size={18} />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                if (!mobileMenuOpen && searchOpen) setSearchOpen(false);
              }}
              className="p-2 text-[#555] hover:text-[#C49B66] hover:bg-[#F9F6F2] dark:text-[#A89D96] dark:hover:text-[#E6C9A8] dark:hover:bg-[#332C28] rounded-full transition lg:hidden"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Floating inline mobile search layout */}
      {searchOpen && (
        <div className="sm:hidden px-4 py-3 bg-[#F9F6F2] border-b border-[#F2E8DF] dark:bg-[#181412] dark:border-[#332C28]">
          <div className="flex space-x-2">
            <input
              type="text"
              autoFocus
              placeholder="Digite o que deseja buscar..."
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
              onKeyDown={handleSearchKeyPress}
              className="flex-1 text-xs py-2 px-3 bg-white border border-[#E5D1B8] rounded-lg focus:outline-none focus:border-[#C49B66] dark:bg-[#221D1A] dark:border-[#332C28] dark:text-[#EDE6E2] dark:focus:border-[#E6C9A8]"
            />
            <button
              onClick={() => {
                onSearchSubmit(searchState);
                setSearchOpen(false);
              }}
              className="px-4 py-2 bg-[#C49B66] text-white text-xs font-bold rounded-lg uppercase tracking-wide cursor-pointer"
            >
              Ir
            </button>
          </div>
        </div>
      )}

      {/* Mobile Nav Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#F2E8DF] dark:bg-[#1C1816] dark:border-[#332C28]">
          <nav className="px-4 pt-3 pb-6 space-y-1 sm:px-6">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#C49B66] mb-2 px-2 font-bold">Navegação Principal</p>
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  onNavigate(item.route);
                  setMobileMenuOpen(false);
                  setSearchState('');
                }}
                className={`w-full text-left block py-3 px-3 rounded-lg text-xs font-sans font-extrabold uppercase tracking-wide transition-colors ${
                  isRouteActive(item.route)
                    ? 'bg-[#C49B66]/10 text-[#C49B66] dark:bg-[#C49B66]/15 dark:text-[#E6C9A8]'
                    : 'text-[#555] hover:text-[#C49B66] hover:bg-[#F9F6F2] dark:text-[#A89D96] dark:hover:text-[#E6C9A8] dark:hover:bg-[#332C28]/40'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-stone-100 dark:border-[#332C28]/50 flex items-center justify-between">
              <span className="text-[11px] text-stone-500 dark:text-[#A89D96] font-sans italic">Transforme conhecimento em renda!</span>
              <button
                onClick={() => {
                  onNavigate({ type: 'advertise' });
                  setMobileMenuOpen(false);
                }}
                className="px-3 py-1.5 bg-[#F9F6F2] border border-[#E5D1B8] text-[#C49B66] hover:bg-[#C49B66]/5 dark:bg-[#221D1A] dark:border-[#332C28] dark:text-[#E6C9A8] text-xs rounded-lg font-bold uppercase tracking-wider"
              >
                Anunciar Conosco
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
