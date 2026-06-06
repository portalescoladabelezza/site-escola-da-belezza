/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Eye, Award } from 'lucide-react';

interface AdProps {
  idAttribute?: string;
  className?: string;
}

export const AdBannerTop: React.FC<AdProps> = ({ idAttribute = 'ad-top', className = '' }) => {
  return (
    <div
      id={idAttribute}
      className={`w-full max-w-7xl mx-auto px-4 my-6 ${className}`}
    >
      <div className="bg-amber-50/50 border border-dashed border-stone-300 rounded-lg p-3 text-center transition hover:border-stone-400">
        <span className="inline-block px-1.5 py-0.5 bg-stone-100 text-[9px] font-mono tracking-tight uppercase text-stone-500 rounded mr-2">
          Anúncio AdSense
        </span>
        <span className="text-xs font-sans text-stone-500 font-medium">
          Espaço reservado para anúncio principal (Super Banner 728x90)
        </span>
      </div>
    </div>
  );
};

export const AdBannerInline: React.FC<AdProps & { title?: string }> = ({
  idAttribute = 'ad-inline',
  className = '',
  title = 'Anúncio AdSense'
}) => {
  return (
    <div
      id={idAttribute}
      className={`my-8 border border-dashed border-stone-200 bg-stone-50/80 rounded-xl p-6 text-center ${className}`}
    >
      <div className="flex flex-col items-center justify-center space-y-2">
        <span className="px-2 py-0.5 bg-stone-200 text-[10px] font-mono tracking-widest uppercase text-stone-500 rounded-full font-semibold">
          {title}
        </span>
        <p className="text-sm text-stone-500 font-sans font-medium">
          Espaço reservado para anúncio responsivo no conteúdo (Banner 336x280 / Recomendo)
        </p>
        <span className="text-xs text-stone-400 font-sans">
          portalescoladabelezza.com.br
        </span>
      </div>
    </div>
  );
};

export const AdSidebar: React.FC<AdProps> = ({ idAttribute = 'ad-sidebar', className = '' }) => {
  return (
    <div
      id={idAttribute}
      className={`bg-stone-50 border border-dashed border-stone-300 rounded-2xl p-6 text-center shadow-sm hover:shadow transition-all ${className}`}
    >
      <div className="flex flex-col items-center space-y-3">
        <span className="px-2 py-0.5 bg-stone-150 text-[9px] font-mono tracking-wider uppercase text-stone-500 rounded-full">
          Patrocinado
        </span>
        <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-700">
          <Eye size={20} />
        </div>
        <div>
          <h4 className="text-xs font-semibold text-stone-700 uppercase tracking-widest font-sans">
            Espaço de Anúncio
          </h4>
          <p className="text-xs text-stone-500 mt-1 font-sans">
            Banner Superior Lateral (300x600)
          </p>
        </div>
        <div className="w-full h-40 bg-stone-100 rounded-lg flex items-center justify-center border border-dashed border-stone-300">
          <span className="text-[10px] font-mono text-stone-400">Placeholder de Banner Direto</span>
        </div>
        <span className="text-[10px] text-stone-400 font-sans underline">
          Seu curso ou marca em evidência aqui!
        </span>
      </div>
    </div>
  );
};

export const AdBetweenPosts: React.FC<AdProps> = ({ idAttribute = 'ad-between', className = '' }) => {
  return (
    <div
      id={idAttribute}
      className={`w-full max-w-7xl mx-auto py-8 ${className}`}
    >
      <div className="bg-stone-50/50 border border-dashed border-stone-300 rounded-xl p-4 text-center transition hover:border-stone-400 flex items-center justify-between px-6 flex-wrap gap-2">
        <span className="text-xs font-mono tracking-tight uppercase text-stone-400">
          Anúncio Nativo
        </span>
        <span className="text-xs font-sans text-stone-500 font-medium">
          Espaço reservado para anúncio entre artigos (Native feed banner)
        </span>
        <button className="text-[11px] font-sans font-semibold text-stone-600 border border-stone-300 hover:bg-stone-100 transition rounded-lg px-2.5 py-1">
          Ocultar Anúncio
        </button>
      </div>
    </div>
  );
};

export const SponsoredBox: React.FC<AdProps & { title?: string; text?: string; linkText?: string }> = ({
  idAttribute = 'sponsored-box',
  className = '',
  title = 'Curso Recomendado pelo Portal',
  text = 'Aprenda tudo sobre nail design, blindagem capilar, alongamento de cílios com certificados profissionais aceitos em todo o Brasil. Inicie o curso hoje com 50% de desconto.',
  linkText = 'Inicie sua Carreira na Beleza Agora'
}) => {
  return (
    <div
      id={idAttribute}
      className={`border-2 border-[#E6C5B3] bg-gradient-to-br from-[#FDFBF9] to-[#F5EBE6] rounded-2xl p-6 shadow-sm relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#E6C5B3]/10 rounded-full translate-x-8 -translate-y-8" />
      <div className="flex items-start space-x-3.5 relative z-10">
        <div className="p-2.5 bg-[#E6C5B3] rounded-xl text-stone-900 mt-1">
          <Award size={20} />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-1.5 py-0.5 bg-[#E6C5B3] text-[9px] font-mono tracking-tight uppercase text-stone-900 rounded font-bold">
              Afiliado / Curso Recomendado
            </span>
            <span className="text-xs text-[#C5A880] font-sans font-bold">
              • portal destaque
            </span>
          </div>
          <h4 className="text-base font-sans font-bold text-stone-800 mt-1">
            {title}
          </h4>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            {text}
          </p>
          <div className="mt-4">
            <button className="inline-flex items-center justify-center px-4 py-2 bg-[#2D2522] hover:bg-[#4A3F3B] text-white text-xs font-semibold rounded-lg tracking-wide transition duration-150 cursor-pointer shadow-sm">
              {linkText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
