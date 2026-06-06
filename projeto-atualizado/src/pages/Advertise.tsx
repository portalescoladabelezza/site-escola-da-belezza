/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Sparkles, MessageSquare, Mail, Layers, PhoneCall, TrendingUp, CheckCircle, BarChart3, Users, Target, Image, FileText, GraduationCap } from 'lucide-react';

export const Advertise: React.FC = () => {
  const [brand, setBrand] = useState('');
  const [email, setEmail] = useState('');
  const [adType, setAdType] = useState('Artigo Patrocinado');
  const [brief, setBrief] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!brand.trim() || !email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      const localAdLeads = JSON.parse(localStorage.getItem('portal_ad_leads') || '[]');
      localAdLeads.push({ brand, email, adType, brief, date: new Date().toISOString() });
      localStorage.setItem('portal_ad_leads', JSON.stringify(localAdLeads));
    }, 1100);
  };

  const adOptions = [
    {
      title: 'Banners Diretos',
      desc: 'Inserção de banners publicitários de marcas ou cursos específicos nas áreas de maior destaque do portal (Ex: Cabeçalho do Super Banner, Interno do Artigo e Barra Lateral).',
      metrics: 'Formatos suportados: 728x90, 300x250 e 300x600.',
      icon: <Image size={24} strokeWidth={1.5} className="text-[#A67E6B]" />
    },
    {
      title: 'Artigos Patrocinados (Publieditoriais)',
      desc: 'Criação de artigos específicos bem redigidos do zero voltados a explicar os diferenciais de seu produto, serviço de beleza, software ou curso online, com links apontados à sua marca.',
      metrics: 'Conteúdo permanente indexável no Google (SEO líquido).',
      icon: <FileText size={24} strokeWidth={1.5} className="text-[#A67E6B]" />
    },
    {
      title: 'Divulgação de Cursos & Escolas',
      desc: 'Espaço nobre reservado na nossa caixa de "Cursos Recomendados" ou nas barras laterais fixas que acompanham os leitores ao longo de todos os posts de alta busca.',
      metrics: 'Foco exclusivo em conversão e captação de alunas.',
      icon: <GraduationCap size={24} strokeWidth={1.5} className="text-[#A67E6B]" />
    },
    {
      title: 'Resenhas de Produtos',
      desc: 'Nossa equipe técnica testa seus produtos de beleza, maquiagens, secadores ou esmaltes para criar uma avaliação rica com fotos e conclusões reais do público.',
      metrics: 'Autoridade de recomendação de nicho.',
      icon: <Sparkles size={24} strokeWidth={1.5} className="text-[#A67E6B]" />
    },
    {
      title: 'Newsletter Recomendada',
      desc: 'Inclusão de chamada direcionada patrocinada em nossa newsletter semanal que dispara relatórios para nossa comunidade de iniciantes e profissionais de estética.',
      metrics: 'Público 100% ativo e qualificado no seu e-mail.',
      icon: <Mail size={24} strokeWidth={1.5} className="text-[#A67E6B]" />
    },
    {
      title: 'Parcerias Comerciais',
      desc: 'Customização de grandes campanhas envolvendo sorteios, divulgação nacional, cupons de treinamento personalizados e assessoria de posicionamento sustentável.',
      metrics: 'Ideal para distribuidoras de cosmética.',
      icon: <Users size={24} strokeWidth={1.5} className="text-[#A67E6B]" />
    }
  ];

  return (
    <main className="bg-[#FEFCFB] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        {/* Portal Demographics intro Header */}
        <section className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-[#E6C5B3]/20 border border-[#E6C5B3]/40 rounded-full px-31.5 py-1">
            <BarChart3 size={14} className="text-[#A67E6B]" />
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-stone-700 font-semibold">
              Mídia Kit • 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif font-black text-stone-900 tracking-tight leading-tight">
            Anuncie no Portal Escola da Beleza
          </h1>
          <p className="text-stone-600 text-sm sm:text-lg leading-relaxed max-w-3xl font-sans">
            Coloque sua escola de qualificação, marca de cosméticos, produtos de cabelo ou estúdio de forma direta sob os olhos de milhares de mulheres, designers de sobrancelhas, cabeleireiras e manicures interessadas diariamente.
          </p>
        </section>

        {/* Portal value cards */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          <div className="bg-stone-50 border border-stone-200/80 p-6 rounded-2xl flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-3">
              <Users size={24} strokeWidth={1.5} className="text-[#A67E6B]" />
            </div>
            <span className="block text-lg font-serif font-bold text-stone-900">Comunidade Ativa</span>
            <span className="text-xs text-stone-500 block font-sans uppercase tracking-wider mt-1">Milhares de leitoras e alunas</span>
          </div>
          <div className="bg-stone-50 border border-stone-200/80 p-6 rounded-2xl flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-3">
              <Target size={24} strokeWidth={1.5} className="text-[#A67E6B]" />
            </div>
            <span className="block text-lg font-serif font-bold text-stone-900">Público Qualificado</span>
            <span className="text-xs text-stone-500 block font-sans uppercase tracking-wider mt-1">Mulheres e Empreendedoras de Estética</span>
          </div>
          <div className="bg-[#FFF9F6] border border-[#F3E5DE] p-6 rounded-2xl flex flex-col items-start text-left">
            <div className="w-12 h-12 rounded-full bg-[#FAF0EB] flex items-center justify-center mb-3">
              <TrendingUp size={24} strokeWidth={1.5} className="text-[#A67E6B]" />
            </div>
            <span className="block text-lg font-serif font-bold text-stone-900">Excelente Engajamento</span>
            <span className="text-xs text-stone-500 block font-sans uppercase tracking-wider mt-1">Busca orgânica por novos cursos</span>
          </div>
        </section>

        {/* Advertising Format descriptions */}
        <section className="space-y-6 pt-6">
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-stone-900 tracking-tight">
            Formatos de Anúncio Disponíveis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adOptions.map((opt, index) => (
              <div
                key={index}
                className="bg-white border border-stone-150 p-6 rounded-2xl shadow-xs text-left flex flex-col justify-between hover:border-[#E6C5B3]/50 transition duration-150"
              >
                <div className="space-y-2.5">
                  <div className="w-11 h-11 rounded-full bg-stone-50 flex items-center justify-center mb-1">
                    {opt.icon}
                  </div>
                  <h3 className="text-sm sm:text-base font-sans font-bold text-stone-900">
                    {opt.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed font-sans">
                    {opt.desc}
                  </p>
                </div>
                <div className="border-t border-stone-100 pt-3 mt-4 text-[11px] font-mono font-semibold text-[#A67E6B]">
                  {opt.metrics}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Commercial Lead Intake Form */}
        <section className="bg-gradient-to-br from-[#FFFDFC] to-[#FAF5F2] border border-[#F5EBE6] p-6 sm:p-10 lg:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          
          <div className="lg:col-span-5 space-y-4 text-left">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
              Solicite um Orçamento Comercial Fone/Email
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Está pronto para alavancar sua divulgação? Indique quais formatos você tem maior interesse em conhecer e envie os contatos de sua marca. Nossa assessoria de monetização irá responder com o Mídia Kit de Preços e termos contratuais em pouquíssimo tempo.
            </p>
            <div className="pt-2 text-xs text-stone-500 space-y-1">
              <p>• Atendimento customizado por marcas.</p>
              <p>• Faturamento oficial via Nota Fiscal (CNPJ).</p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-stone-150 p-6 rounded-2xl shadow-xs text-left">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                      Sua Marca ou Nome Empresarial
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Cosméticos Estrela Ltda"
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                      className="w-full text-xs p-3 bg-stone-50 border border-stone-200 focus:border-[#E6C5B3] focus:outline-none focus:bg-white rounded-lg text-stone-800 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                      E-Mail Comercial para Propostas
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: comercial@marca.com.br"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-3 bg-stone-50 border border-stone-200 focus:border-[#E6C5B3] focus:outline-none focus:bg-white rounded-lg text-stone-800 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    Qual o seu principal foco de divulgação?
                  </label>
                  <select
                    value={adType}
                    onChange={(e) => setAdType(e.target.value)}
                    className="w-full text-xs p-3 bg-stone-50 border border-stone-200 focus:border-[#E6C5B3] focus:outline-none focus:bg-white rounded-lg text-stone-800 transition cursor-pointer"
                  >
                    <option value="Artigo Patrocinado">Artigo Patrocinado (Publieditorial)</option>
                    <option value="Banners no Portal">Anúncio de Banners Diretos no Site</option>
                    <option value="Destaque de Curso">Cadastrar meu Curso de Beleza no Portal</option>
                    <option value="Review de Produto">Enviar Produto para Teste & Resenha</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    Nos dê um breve resumo de suas metas / produtos (Opcional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Ex: Fabricamos esmaltes veganos e desejamos fazer artigos patrocinados e banners..."
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    className="w-full text-xs p-3 bg-stone-50 border border-stone-200 focus:border-[#E6C5B3] focus:outline-none focus:bg-white rounded-lg text-stone-800 transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center space-x-1 p-3 bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-lg transition duration-200 cursor-pointer shadow-sm disabled:bg-stone-400"
                  >
                    {loading ? (
                      <span>Enviando solicitação mercadológica...</span>
                    ) : (
                      <>
                        <PhoneCall size={14} />
                        <span>Solicitar Mídia Kit & Atendimento Comercial</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4 max-w-sm mx-auto">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Proposta Recebida com Sucesso!
                </h3>
                <p className="text-stone-600 text-xs leading-relaxed font-sans">
                  Nossa assessoria de publicidade agradece o interesse pelo <strong>Portal Escola da Beleza</strong>. Um e-mail com as opções comerciais, estatísticas de tráfego, e taxas contratuais básicas será emitido a <strong>{email}</strong> logo nas próximas horas.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-stone-400 hover:text-stone-600 underline"
                  >
                    Enviar outra proposta
                  </button>
                </div>
              </div>
            )}
          </div>

        </section>

      </div>
    </main>
  );
};
