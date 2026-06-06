/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Mail, MapPin, Phone, Instagram, Facebook, ShieldAlert, ChevronUp } from 'lucide-react';
import { PageRoute, BookingCategory } from '../types';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryNav = (cat: BookingCategory) => {
    onNavigate({ type: 'blog', categoryFilter: cat });
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      
      {/* Top micro engagement rail */}
      <div className="border-b border-stone-800 bg-stone-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 text-stone-400 text-xs font-sans">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Conteúdo informativo produzido com foco em qualidade, utilidade e boa experiência para o leitor.</span>
          </div>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-1 text-xs text-stone-400 hover:text-white transition group font-semibold uppercase tracking-wider"
          >
            <span>Voltar ao topo</span>
            <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8sm:gap-10">
          
          {/* Brand block */}
          <div className="space-y-4">
            <div 
              className="flex items-center space-x-2.5 cursor-pointer"
              onClick={() => onNavigate({ type: 'home' })}
            >
              <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#E6C5B3] to-[#F5EBE6] flex items-center justify-center text-stone-900 shadow-sm">
                <Sparkles size={18} />
              </div>
              <span className="text-base sm:text-lg font-serif font-bold text-white tracking-tight">
                Portal Escola <span className="text-[#E6C5B3]">da Beleza</span>
              </span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-sans mt-3">
              O maior portal brasileiro sobre capacitação, carreiras práticas, técnicas inovadoras e dicas de empreendedorismo de beleza. Transforme amor em lucro real.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-600 hover:to-pink-600 transition duration-150">
                <Instagram size={15} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-blue-600 transition duration-150">
                <Facebook size={15} />
              </a>
              <a href="mailto:portalescoladabelezza@gmail.com" className="w-8 h-8 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-stone-700 transition duration-150">
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Quick links block */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6C5B3] mb-4 font-bold border-l-2 border-[#E6C5B3] pl-2">
              Acesso Rápido
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button onClick={() => onNavigate({ type: 'home' })} className="hover:text-white transition">
                  Início
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'blog' })} className="hover:text-white transition">
                  Blog & Artigos
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryNav('Cursos de Beleza')} className="hover:text-white transition">
                  Cursos Recomendados
                </button>
              </li>
              <li>
                <button onClick={() => handleCategoryNav('Carreira')} className="hover:text-white transition">
                  Carreiras de Sucesso
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'advertise' })} className="hover:text-white transition">
                  Anuncie no Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate({ type: 'contact' })} className="hover:text-white transition">
                  Contato Fale Conosco
                </button>
              </li>
            </ul>
          </div>

          {/* Categories block */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6C5B3] mb-4 font-bold border-l-2 border-[#E6C5B3] pl-2">
              Categorias Populares
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 text-xs text-stone-400">
              <button onClick={() => handleCategoryNav('Cabelos')} className="text-left hover:text-white transition">
                • Cabelos
              </button>
              <button onClick={() => handleCategoryNav('Unhas')} className="text-left hover:text-white transition">
                • Unhas
              </button>
              <button onClick={() => handleCategoryNav('Maquiagem')} className="text-left hover:text-white transition">
                • Maquiagem
              </button>
              <button onClick={() => handleCategoryNav('Sobrancelhas e Cílios')} className="text-left hover:text-white transition">
                • Sobrancelhas
              </button>
              <button onClick={() => handleCategoryNav('Estética Facial')} className="text-left hover:text-white transition">
                • Estética Facial
              </button>
              <button onClick={() => handleCategoryNav('Estética Corporal')} className="text-left hover:text-white transition">
                • Estética Corporal
              </button>
              <button onClick={() => handleCategoryNav('Empreendedorismo')} className="text-left hover:text-white transition font-semibold text-[#E6C5B3]">
                • Empreender
              </button>
              <button onClick={() => handleCategoryNav('Tendências')} className="text-left hover:text-white transition">
                • Tendências
              </button>
            </div>
          </div>

          {/* Legal / Contact block */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6C5B3] mb-4 font-bold border-l-2 border-[#E6C5B3] pl-2">
              Fale Direto
            </h4>
            <ul className="space-y-3 text-xs text-stone-400">
              <li className="flex items-center space-x-2">
                <Mail size={13} className="text-[#E6C5B3]" />
                <span className="truncate">portalescoladabelezza@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={13} className="text-[#E6C5B3]" />
                <span>Atendimento Online Br</span>
              </li>
              <li className="pt-3">
                <p className="text-[10px] font-mono text-stone-500 uppercase tracking-wider mb-2">Institucional & Legal</p>
                <div className="flex flex-col gap-2 text-xs">
                  <button 
                    onClick={() => onNavigate({ type: 'privacy' })} 
                    className="text-[#C5A880] hover:text-white transition text-left cursor-pointer"
                  >
                    Política de Privacidade
                  </button>
                  <button 
                    onClick={() => onNavigate({ type: 'terms' })} 
                    className="text-[#C5A880] hover:text-white transition text-left cursor-pointer"
                  >
                    Termos de Uso
                  </button>
                  <button 
                    onClick={() => onNavigate({ type: 'cookies' })} 
                    className="text-[#C5A880] hover:text-white transition text-left cursor-pointer"
                  >
                    Política de Cookies
                  </button>
                  <button 
                    onClick={() => onNavigate({ type: 'contact' })} 
                    className="text-[#C5A880] hover:text-white transition text-left cursor-pointer"
                  >
                    Contato
                  </button>
                  <button 
                    onClick={() => onNavigate({ type: 'advertise' })} 
                    className="text-[#C5A880] hover:text-white transition text-left cursor-pointer"
                  >
                    Anuncie Conosco
                  </button>
                  <button 
                    onClick={() => window.dispatchEvent(new Event('open_cookie_banner'))} 
                    className="text-[#C5A880] font-semibold hover:text-white transition text-left cursor-pointer flex items-center gap-1 mt-1"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>Preferências de Cookies</span>
                  </button>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Affiliate disclaimer required by Brazilian standards and AdSense program */}
        <div className="mt-12 pt-8 border-t border-stone-800">
          <div className="bg-stone-950/60 rounded-xl p-4 sm:p-5 flex items-start space-x-3 border border-stone-800/80">
            <ShieldAlert size={18} className="text-[#E6C5B3] shrink-0 mt-0.5" />
            <p className="text-[11px] sm:text-xs text-stone-400 leading-relaxed font-sans">
              <strong>Isenção de Responsabilidade de Afiliados:</strong> O Portal Escola da Beleza publica conteúdos estritamente informativos voltados à capacitação, orientação de carreira e empreendedorismo na área da beleza. Esforçamo-nos para manter as informações corretas e atualizadas. Alguns links apontados ao longo dos artigos podem direcionar a cursos, livros ou produtos afiliados ou patrocinados. Ao adquirir através destas indicações, podemos receber uma comissão que financia os servidores e a continuação das pesquisas gratuitas deste portal, sem nenhum acréscimo no valor de sua compra.
            </p>
          </div>
        </div>

        {/* Brand signature and copyrights */}
        <div className="mt-8 text-center text-xs text-stone-500 font-sans flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} portalescoladabelezza.com.br. Todos os direitos reservados.</p>
          <p className="text-[10px] tracking-wider font-sans">
            Portal Escola da Beleza — Conteúdo informativo sobre beleza, carreira e empreendedorismo.
          </p>
        </div>
      </div>
    </footer>
  );
};
