/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  BookOpen, 
  Clock, 
  Award, 
  Star, 
  Zap, 
  User,
  Scissors,
  Eye,
  Briefcase,
  TrendingUp,
  Flame,
  Palette,
  Smile
} from 'lucide-react';
import { Article, BookingCategory, PageRoute } from '../types';
import { AdBannerTop, AdBetweenPosts, SponsoredBox } from '../components/AdBanner';
import { Newsletter } from '../components/Newsletter';

interface HomeProps {
  articles: Article[];
  onNavigate: (route: PageRoute) => void;
}

export const Home: React.FC<HomeProps> = ({ articles, onNavigate }) => {
  // Filter appropriate lists
  const featuredArticle = articles.find((a) => a.isFeatured) || articles[0];
  const popularArticles = articles.filter((a) => a.isPopular).slice(0, 4);
  const beginnerGuides = articles.filter((a) => a.isBeginnerGuide).slice(0, 4);

  const categories = [
    { 
      name: 'Cabelos', 
      headline: 'Técnicas, cuidados e tendências capilares', 
      icon: <Scissors size={18} strokeWidth={1.5} />, 
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=400',
      color: 'from-amber-50/20 to-orange-50/10' 
    },
    { 
      name: 'Unhas', 
      headline: 'Inspirações, técnicas e carreira em manicure', 
      icon: <Sparkles size={18} strokeWidth={1.5} />, 
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=400',
      color: 'from-pink-50/20 to-rose-50/10' 
    },
    { 
      name: 'Maquiagem', 
      headline: 'Dicas para aprender, praticar e atender melhor', 
      icon: <Palette size={18} strokeWidth={1.5} />, 
      image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=400',
      color: 'from-rose-50/20 to-purple-50/10' 
    },
    { 
      name: 'Sobrancelhas e Cílios', 
      headline: 'Design do olhar, técnicas e oportunidades', 
      icon: <Eye size={18} strokeWidth={1.5} />, 
      image: 'https://images.unsplash.com/photo-1522337094846-8a81113522f0?auto=format&fit=crop&q=80&w=400',
      color: 'from-amber-50/20 to-yellow-50/10' 
    },
    { 
      name: 'Estética Facial', 
      headline: 'Cuidados, tratamentos e beleza da pele', 
      icon: <Smile size={18} strokeWidth={1.5} />, 
      image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400',
      color: 'from-blue-50/20 to-cyan-50/10' 
    },
    { 
      name: 'Carreira', 
      headline: 'Comece, evolua e ganhe mais na beleza', 
      icon: <Briefcase size={18} strokeWidth={1.5} />, 
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=400',
      color: 'from-stone-50/40 to-stone-100/20' 
    },
    { 
      name: 'Empreendedorismo', 
      headline: 'Estratégias para transformar beleza em negócio', 
      icon: <TrendingUp size={18} strokeWidth={1.5} />, 
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400',
      color: 'from-[#FFF5F0]/30 to-[#FAF2EE]/10' 
    },
    { 
      name: 'Tendências', 
      headline: 'Novidades, estilos e inspirações do momento', 
      icon: <Flame size={18} strokeWidth={1.5} />, 
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=400',
      color: 'from-[#FDF2F8]/30 to-[#FFF5F5]/10' 
    },
  ];

  return (
    <div className="bg-[#FDF8F5] dark:bg-[#181412] text-[#2D2D2D] dark:text-[#EDE6E2] transition-colors duration-250">
      
      {/* Super Header Ad space */}
      <AdBannerTop />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F7ECE6]/30 via-white to-[#FDF8F5] dark:from-[#221D1A]/30 dark:via-[#181412]/50 dark:to-[#181412] border-b border-[#F2E8DF] dark:border-[#332C28]">
        <div className="absolute top-0 right-0 w-[45%] h-[90%] bg-gradient-to-l from-[#F5EBE6]/30 to-transparent rounded-bl-[100px] pointer-events-none hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="col-span-1 lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 bg-white dark:bg-[#221D1A] border border-[#E5D1B8]/60 dark:border-[#332C28] rounded-full px-3.5 py-1.5 shadow-xs">
                <Sparkles size={14} className="text-[#C49B66]" />
                <span className="text-[10px] sm:text-xs font-mono tracking-widest text-[#C49B66] uppercase font-bold">
                  O Portal nº 1 em Conhecimento de Estética
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-[#1A1A1A] dark:text-[#EDE6E2] tracking-tight leading-[1.1] text-wrap">
                Aprenda, cresça e <span className="text-[#C49B66] italic underline decoration-[#E5D1B8] decoration-wavy">empreenda</span> no mundo da beleza
              </h1>

              <p className="text-stone-600 dark:text-[#A89D96] text-sm sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Conteúdos, dicas, cursos e tendências para quem ama beleza e quer transformar conhecimento em renda. Prepare-se profissionalmente com quem já domina as técnicas na prática.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => onNavigate({ type: 'blog' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#C49B66] hover:bg-[#B38A55] text-white font-sans font-bold text-xs tracking-wider uppercase py-3.5 px-7 rounded shadow-md transition duration-200 cursor-pointer"
                >
                  <span>Ver artigos</span>
                  <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => onNavigate({ type: 'blog', categoryFilter: 'Guias para Iniciantes' as BookingCategory })}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-white dark:bg-[#221D1A] hover:bg-[#F9F6F2] dark:hover:bg-[#332C28] text-[#2D2D2D] dark:text-[#EDE6E2] border border-[#E5D1B8] dark:border-[#332C28] font-sans font-bold text-xs tracking-wider uppercase py-3.5 px-7 rounded shadow-xs transition duration-200 cursor-pointer"
                >
                  <span>Começar na Beleza</span>
                </button>
              </div>

              {/* Core Features list instead of fictional metrics */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-6 border-t border-stone-200/80 dark:border-[#332C28] max-w-sm sm:max-w-md mx-auto lg:mx-0 text-left">
                <div className="flex items-center space-x-2 text-stone-600 dark:text-[#A89D96] text-xs sm:text-sm font-sans font-medium">
                  <span className="text-[#C49B66] text-sm">✦</span>
                  <span>Guias completos</span>
                </div>
                <div className="flex items-center space-x-2 text-stone-600 dark:text-[#A89D96] text-xs sm:text-sm font-sans font-medium">
                  <span className="text-[#C49B66] text-sm">✦</span>
                  <span>Conteúdo gratuito</span>
                </div>
                <div className="flex items-center space-x-2 text-stone-600 dark:text-[#A89D96] text-xs sm:text-sm font-sans font-medium">
                  <span className="text-[#C49B66] text-sm">✦</span>
                  <span>Dicas práticas</span>
                </div>
                <div className="flex items-center space-x-2 text-stone-600 dark:text-[#A89D96] text-xs sm:text-sm font-sans font-medium">
                  <span className="text-[#C49B66] text-sm">✦</span>
                  <span>Novos artigos semanais</span>
                </div>
              </div>
            </div>

            {/* Right decorative visual item or featured guide shortcut */}
            <div className="col-span-1 lg:col-span-5 relative">
              <div className="bg-white/80 dark:bg-[#1C1816]/90 backdrop-blur border border-stone-150 dark:border-[#332C28] rounded-2xl p-5 shadow-lg max-w-md mx-auto relative z-10">
                <div className="relative h-48 sm:h-56 overflow-hidden rounded-xl bg-stone-100 dark:bg-[#221D1A]">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-stone-900/90 backdrop-blur-xs text-white text-[10px] font-mono uppercase px-2 py-1 rounded font-semibold tracking-wider">
                    {featuredArticle.category}
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center space-x-1 text-xs text-stone-500 dark:text-[#A89D96] font-sans">
                    <Clock size={12} />
                    <span>{featuredArticle.readTime}</span>
                    <span>•</span>
                    <span>Modo prático</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 dark:text-[#EDE6E2] line-clamp-2">
                    {featuredArticle.title}
                  </h3>
                  <p className="text-stone-500 dark:text-[#A89D96] text-xs sm:text-sm line-clamp-2 leading-relaxed">
                    {featuredArticle.summary}
                  </p>
                  <button
                    onClick={() => onNavigate({ type: 'article', slug: featuredArticle.slug })}
                    className="inline-flex items-center space-x-1.5 text-xs text-stone-700 dark:text-[#E6C9A8] font-bold hover:text-stone-900 dark:hover:text-white underline pt-1"
                  >
                    <span>Ler Artigo Completo</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>

              {/* Background solid decorations */}
              <div className="absolute bottom-[-15px] left-[-15px] w-full h-full border-2 border-dashed border-[#E6C5B3] dark:border-[#C49B66]/30 rounded-2xl pointer-events-none hidden sm:block max-w-md mx-auto" />
            </div>

          </div>
        </div>
      </section>

      {/* Categories block */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2">
          <h2 className="text-xl sm:text-3xl font-serif font-black text-stone-900 dark:text-[#EDE6E2] tracking-tight">
            Navegue por Categoria
          </h2>
          <p className="text-stone-500 dark:text-[#A89D96] text-xs sm:text-sm max-w-lg mx-auto">
            Escolha o nicho correto para se capacitar e descubra estratégias de faturamento direto.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              onClick={() => onNavigate({ type: 'blog', categoryFilter: cat.name as BookingCategory })}
              className="group flex flex-col bg-white dark:bg-[#1C1816]/95 rounded-2xl border border-stone-250/60 dark:border-[#332C28]/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1"
            >
              <div className="h-28 sm:h-32 overflow-hidden relative w-full bg-stone-100 dark:bg-[#221D1A]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/95 dark:bg-[#181412]/95 backdrop-blur-xs shadow-xs flex items-center justify-center text-[#C49B66] dark:text-[#E6C9A8]">
                  {cat.icon}
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between text-left">
                <div>
                  <h3 className="text-xs sm:text-sm font-sans font-bold text-stone-800 dark:text-[#EDE6E2] uppercase tracking-wide group-hover:text-[#C49B66] transition-colors leading-tight line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-stone-500 dark:text-[#A89D96] mt-1 font-normal leading-normal line-clamp-2 min-h-[2rem] sm:min-h-[2.5rem]">
                    {cat.headline}
                  </p>
                </div>
                <div className="flex items-center space-x-1 text-[10px] sm:text-xs text-[#C49B66] font-bold mt-4 group-hover:translate-x-1 transition-all duration-300">
                  <span>Saiba mais</span>
                  <ArrowRight size={11} className="shrink-0" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Big Post & Carousel */}
      <section className="py-10 bg-gradient-to-b from-[#FFFDFB] to-white dark:from-[#181412] dark:to-[#181412]/60 border-t border-stone-100 dark:border-[#332C28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-baseline border-b border-stone-200/80 dark:border-[#332C28] pb-3 mb-8">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-stone-900 dark:text-[#EDE6E2] tracking-tight flex items-center space-x-2">
              <Zap size={18} className="text-[#C5A880]" />
              <span>Espaço em Destaque</span>
            </h2>
            <button
              onClick={() => onNavigate({ type: 'blog' })}
              className="text-xs font-semibold text-[#C5A880] hover:text-stone-900 dark:hover:text-white hover:underline inline-flex items-center space-x-1"
            >
              <span>Ver todos</span>
              <ArrowRight size={12} />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Big featured left panel */}
            <div className="col-span-1 lg:col-span-7 bg-white dark:bg-[#221D1A] border border-stone-200/80 dark:border-[#332C28] rounded-2xl overflow-hidden shadow-sm hover:shadow transition duration-200">
              <div className="h-60 sm:h-80 overflow-hidden relative">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition duration-300 hover:scale-101"
                />
                <span className="absolute top-4 left-4 bg-stone-900 text-white text-[10px] font-mono uppercase px-2.5 py-1 rounded font-bold tracking-wider shadow-sm">
                  Destaque Principal
                </span>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-stone-950/80 to-transparent p-5 sm:p-6 text-white text-left">
                  <p className="text-[10px] sm:text-xs text-[#E6C5B3] font-mono uppercase tracking-widest font-semibold flex items-center space-x-1">
                    <span>{featuredArticle.category}</span>
                    <span>•</span>
                    <span>Por {featuredArticle.author}</span>
                  </p>
                  <h3 className="text-lg sm:text-2xl font-serif font-bold mt-1.5 line-clamp-2">
                    {featuredArticle.title}
                  </h3>
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-3">
                <p className="text-stone-600 dark:text-[#A89D96] text-xs sm:text-sm leading-relaxed">
                  {featuredArticle.summary}
                </p>
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-full bg-stone-100 overflow-hidden">
                      <img src={featuredArticle.authorAvatar} alt={featuredArticle.author} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="block text-xs font-sans font-bold text-stone-800">{featuredArticle.author}</span>
                      <span className="text-[10px] text-stone-400 font-sans block">{featuredArticle.date}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate({ type: 'article', slug: featuredArticle.slug })}
                    className="inline-flex items-center space-x-1 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold px-3 py-2 rounded-lg transition"
                  >
                    <span>Ler Artigo</span>
                    <ArrowRight size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Popular and Most read Right lists */}
            <div className="col-span-1 lg:col-span-5 space-y-6">
              <div className="bg-white border border-stone-200/80 rounded-2xl p-5 shadow-xs">
                <h3 className="text-sm font-sans font-bold text-stone-800 uppercase tracking-wider border-b border-stone-100 pb-2 mb-4 flex items-center space-x-1.5 text-[#C5A880]">
                  <Star size={14} />
                  <span>Artigos mais Lidos</span>
                </h3>

                <div className="space-y-4">
                  {popularArticles.map((art, idx) => (
                    <div 
                      key={art.id}
                      onClick={() => onNavigate({ type: 'article', slug: art.slug })}
                      className="group flex space-x-3 cursor-pointer items-start pb-4 border-b border-stone-100 last:border-0 last:pb-0"
                    >
                      <span className="text-xl sm:text-2xl font-serif font-black text-stone-300 group-hover:text-[#C5A880] transition-colors leading-none shrink-0 w-8">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1 space-y-1 text-left">
                        <span className="text-[10px] font-mono tracking-wider text-[#C5A880] uppercase block">
                          {art.category}
                        </span>
                        <h4 className="text-xs sm:text-sm font-sans font-bold text-stone-800 group-hover:text-stone-950 transition-colors line-clamp-2">
                          {art.title}
                        </h4>
                        <div className="flex items-center space-x-1.5 text-[10px] text-stone-400 font-sans">
                          <span>{art.readTime}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Promotion Block */}
              <SponsoredBox />
            </div>

          </div>
        </div>
      </section>

      {/* Native Ads banner */}
      <AdBetweenPosts />

      {/* Guides for Beginners Section */}
      <section className="py-14 bg-stone-50/70 border-t border-b border-stone-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-2 mb-10">
            <div className="inline-block px-2.5 py-1 bg-[#E6C5B3]/20 text-[#A67E6B] text-[10px] font-sans rounded-full font-bold uppercase tracking-wider">
              Qualificação em Foco
            </div>
            <h2 className="text-xl sm:text-3xl font-serif font-black text-stone-900 tracking-tight">
              Guias de Beleza para Iniciantes
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm max-w-lg mx-auto">
              Aprenda as principais bases teóricas de modelagem, manicure e maquiagem do absoluto zero.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {beginnerGuides.map((guide) => (
              <div
                key={guide.id}
                onClick={() => onNavigate({ type: 'article', slug: guide.slug })}
                className="bg-white border border-stone-200 rounded-2xl overflow-hidden cursor-pointer group hover:shadow-md hover:border-[#E6C5B3]/50 transition duration-200"
              >
                <div className="h-40 overflow-hidden relative">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-[1.01]"
                  />
                  <span className="absolute top-2 left-2 bg-[#FAF8F6] text-[#A67E6B] text-[9px] font-mono uppercase px-2 py-0.5 rounded font-bold tracking-wider">
                    Iniciante
                  </span>
                </div>
                <div className="p-4 space-y-2 text-left">
                  <span className="text-[9px] font-mono text-[#C5A880] uppercase block">
                    {guide.category} • {guide.readTime}
                  </span>
                  <h3 className="text-xs sm:text-sm font-sans font-bold text-stone-800 line-clamp-2 group-hover:text-stone-950">
                    {guide.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-stone-500 leading-relaxed line-clamp-2">
                    {guide.summary}
                  </p>
                  <div className="pt-2 flex items-center space-x-1 text-[11px] font-sans font-semibold text-stone-800 group-hover:underline">
                    <span>Ler Guia Prático</span>
                    <ArrowRight size={10} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead capture component */}
      <Newsletter />
    </div>
  );
};
