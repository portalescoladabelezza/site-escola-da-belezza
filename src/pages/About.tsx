/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, BookOpen, Users, Sparkles, Building, Briefcase } from 'lucide-react';
import { PageRoute } from '../types';

interface AboutProps {
  onNavigate: (route: PageRoute) => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <main className="bg-[#FEFCFB] py-10 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-12">
        
        {/* Banner with Title */}
        <section className="space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#E6C5B3]/20 border border-[#E6C5B3]/40 rounded-full px-3 py-1">
            <Sparkles size={14} className="text-[#A67E6B]" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold">
              E-E-A-T Certificado Oficial
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 tracking-tight leading-tight">
            Nossa Missão: Democratizar o Sucesso no Mercado da Beleza
          </h1>
          <p className="text-stone-600 text-sm sm:text-lg leading-relaxed max-w-3xl">
            Bem-vindo ao <strong>Portal Escola da Beleza</strong> (portalescoladabelezza.com.br), o maior polo de fomento de conteúdo prático, carreira e empreendedorismo para quem deseja transformar paixão por beleza em renda sólida.
          </p>
        </section>

        {/* Feature grid */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
          <div className="bg-white border border-stone-150 p-6 rounded-2xl space-y-2">
            <div className="w-10 h-10 bg-[#E6C5B3]/25 rounded-xl flex items-center justify-center text-stone-900 mb-4">
              <Award size={20} />
            </div>
            <h3 className="text-sm font-sans font-bold text-stone-800 uppercase tracking-wide">
              Prática Verificada
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Todos os nossos artigos e tutoriais são minuciosamente revisados por especialistas atuantes com ampla experiência de mercado em salões brasileiros.
            </p>
          </div>

          <div className="bg-white border border-stone-150 p-6 rounded-2xl space-y-2">
            <div className="w-10 h-10 bg-[#E6C5B3]/25 rounded-xl flex items-center justify-center text-stone-900 mb-4">
              <BookOpen size={20} />
            </div>
            <h3 className="text-sm font-sans font-bold text-stone-800 uppercase tracking-wide">
              Capacitação Dinâmica
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Fomentamos guias educativos que explicam desde como pregar o primeiro cílio até planilhas de precificação e marketing digital para lotar agendas.
            </p>
          </div>

          <div className="bg-white border border-stone-150 p-6 rounded-2xl space-y-2">
            <div className="w-10 h-10 bg-[#E6C5B3]/25 rounded-xl flex items-center justify-center text-stone-900 mb-4">
              <Users size={20} />
            </div>
            <h3 className="text-sm font-sans font-bold text-stone-800 uppercase tracking-wide">
              Independência Financeira
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Apoiamos o empreendedorismo feminino doméstico. Acreditamos que um studio montado na sala de casa pode faturar salários incríveis.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-4 items-center">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Como tudo começou
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              O Portal Escola da Beleza nasceu ao identificar um abismo entre as formações teóricas caras do mercado tradicional de estética e a necessidade de faturamento de novos profissionais. Muitos cursos de beleza focam excessivamente em técnicas antigas mas deixam a aluna sem saber como divulgar serviços ou calcular seus lucros com higiene.
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Criamos este portal informativo para preencher esse espaço vazil. Aqui você encontra as últimas tendências mundiais de Nail Art, loiros elegantes e micropigmentação de cílios, detalhadas de forma simples, direta e 100% gratuita para impulsionar sua caminhada rumo ao seu próprio negócio.
            </p>
          </div>
          <div className="bg-stone-55 relative rounded-2xl overflow-hidden h-64 sm:h-80 border border-stone-200">
            <img
              src="https://images.unsplash.com/photo-1521590832167-7bcbfea63332?auto=format&fit=crop&q=80&w=600"
              alt="Sobre o Portal"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-stone-950/20" />
          </div>
        </section>

        {/* Dynamic CTA */}
        <section className="bg-gradient-to-br from-[#FFF5F0] to-[#FAF2EE] p-8 sm:p-12 rounded-3xl border border-[#F3E5DE] text-center space-y-4">
          <h2 className="text-xl sm:text-3xl font-serif font-black text-stone-900 tracking-tight">
            Quer começar a lucrar com estética hoje?
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
            Consulte a nossa seleção de artigos voltados sob medida para profissionais iniciantes e baixe gratuitamente nossas cartilhas completas de estudo.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate({ type: 'blog' })}
              className="px-6 py-3 bg-[#2D2522] hover:bg-[#4A3F3B] text-white text-xs font-semibold rounded-lg shadow uppercase tracking-wider transition"
            >
              Navegar pelos artigos do Blog
            </button>
          </div>
        </section>

      </div>
    </main>
  );
};
