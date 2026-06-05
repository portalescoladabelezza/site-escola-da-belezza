/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Search, X, Calendar, Clock, ArrowRight, CornerDownRight, Filter } from 'lucide-react';
import { Article, BookingCategory, PageRoute } from '../types';
import { AdBannerInline } from '../components/AdBanner';

interface BlogProps {
  articles: Article[];
  initialCategoryFilter?: BookingCategory;
  initialSearchKeyword?: string;
  onNavigate: (route: PageRoute) => void;
}

export const Blog: React.FC<BlogProps> = ({
  articles,
  initialCategoryFilter,
  initialSearchKeyword = '',
  onNavigate,
}) => {
  const [activeCategory, setActiveCategory] = useState<BookingCategory | 'Todas'>(
    initialCategoryFilter || 'Todas'
  );
  const [searchQuery, setSearchQuery] = useState(initialSearchKeyword);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Track initial parameter shifts from header searches
  useEffect(() => {
    if (initialCategoryFilter) {
      setActiveCategory(initialCategoryFilter);
      setCurrentPage(1);
    }
  }, [initialCategoryFilter]);

  useEffect(() => {
    setSearchQuery(initialSearchKeyword);
    setCurrentPage(1);
  }, [initialSearchKeyword]);

  const categoriesList: (BookingCategory | 'Todas')[] = [
    'Todas',
    'Cabelos',
    'Unhas',
    'Maquiagem',
    'Sobrancelhas e Cílios',
    'Estética Facial',
    'Estética Corporal',
    'Cursos de Beleza',
    'Carreira',
    'Empreendedorismo',
    'Produtos e Resenhas',
    'Tendências',
    'Guias para Iniciantes'
  ];

  // Filtering calculation logic
  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      activeCategory === 'Todas' ||
      art.category === activeCategory ||
      (activeCategory === 'Guias para Iniciantes' && art.isBeginnerGuide);

    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Calculate pages
  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + itemsPerPage);

  const handleCategorySelect = (cat: BookingCategory | 'Todas') => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setActiveCategory('Todas');
    setSearchQuery('');
    setCurrentPage(1);
    onNavigate({ type: 'blog' });
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Title Header */}
      <div className="border-b border-stone-200 pb-6 mb-8 text-left space-y-2">
        <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight flex items-center space-x-2">
          <span>Blog & Acervo de Conteúdo</span>
          <span className="text-xs font-mono uppercase bg-stone-100 text-[#C5A880] px-2.5 py-1 rounded-full font-semibold">
            {filteredArticles.length} {filteredArticles.length === 1 ? 'artigo' : 'artigos'}
          </span>
        </h1>
        <p className="text-stone-500 text-xs sm:text-sm">
          Educação profissionalizante, segredos de estúdio e técnicas realistas para alavancar sua renda financeira.
        </p>
      </div>

      {/* Grid with filters and listings */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Filter buttons (desktop) */}
        <aside className="col-span-1 lg:col-span-3 space-y-6">
          <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-xs sticky top-24">
            <h3 className="text-xs font-mono uppercase tracking-widest text-[#C5A880] font-bold flex items-center space-x-1.5 border-b border-stone-100 pb-2 mb-4">
              <Filter size={13} />
              <span>Filtrar por Nicho</span>
            </h3>

            {/* Clear Filters indicator if dirty */}
            {(activeCategory !== 'Todas' || searchQuery) && (
              <button
                onClick={clearFilters}
                className="w-full flex items-center justify-between text-[11px] bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-950 font-bold px-3 py-2 rounded-lg mb-4 text-left transition"
              >
                <span>Limpar filtros ativos</span>
                <X size={12} />
              </button>
            )}

            {/* Scrollable button array */}
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-1.5 pb-3 lg:pb-0 scrollbar-none">
              {categoriesList.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategorySelect(cat)}
                  className={`whitespace-nowrap text-left px-3 py-2 rounded-lg text-xs font-sans font-medium uppercase tracking-wider transition shrink-0 ${
                    activeCategory === cat
                      ? 'bg-[#2D2522] text-white shadow-xs font-semibold'
                      : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900 border border-stone-100 lg:border-0'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Side: Articles Listing with search bar */}
        <section className="col-span-1 lg:col-span-9 space-y-8">
          
          {/* Internal quick keyword search */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Pesquisar por palavras-chave ou etiquetas..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full text-xs font-sans p-3 pl-10 bg-white border border-stone-200 focus:border-[#E6C5B3] focus:outline-none focus:bg-white rounded-xl text-stone-800"
              />
              <Search className="absolute left-3.5 top-3.5 text-stone-400" size={16} />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-3 text-stone-400 hover:text-stone-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            {searchQuery && (
              <div className="inline-flex items-center text-xs text-stone-500 bg-stone-100 px-3 py-2 sm:py-0 rounded-lg shrink-0">
                <span>Resultados para: <strong>"{searchQuery}"</strong></span>
              </div>
            )}
          </div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-12 text-center max-w-xl mx-auto space-y-4">
              <span className="text-4xl block">🔍</span>
              <h3 className="text-lg font-serif font-bold text-stone-800">
                Nenhum artigo encontrado
              </h3>
              <p className="text-stone-500 text-xs">
                Infelizmente não encontramos resultados que correspondam à sua pesquisa de filtros ativa. Experimente utilizar outros termos ou filtre por uma categoria principal.
              </p>
              <button
                onClick={clearFilters}
                className="px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg hover:bg-stone-800 transition"
              >
                Ver todos os artigos do Portal
              </button>
            </div>
          )}

          {/* Articles list layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {paginatedArticles.map((art, idx) => (
              <article
                key={art.id}
                onClick={() => onNavigate({ type: 'article', slug: art.slug })}
                className="bg-white border border-stone-150 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition duration-200 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="h-44 overflow-hidden relative bg-stone-100">
                    <img
                      src={art.image}
                      alt={art.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-101"
                    />
                    <span className="absolute top-3 left-3 bg-white/95 text-stone-800 border border-stone-200/50 text-[9px] font-mono uppercase px-2 py-0.5 rounded-full font-bold tracking-wider">
                      {art.category}
                    </span>
                  </div>
                  <div className="p-5 space-y-2.5 text-left">
                    <div className="flex items-center space-x-3 text-[10px] text-stone-400 font-sans">
                      <span className="flex items-center space-x-1">
                        <Calendar size={11} />
                        <span>{art.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock size={11} />
                        <span>{art.readTime}</span>
                      </span>
                    </div>
                    <h3 className="text-sm sm:text-base font-sans font-bold text-stone-900 line-clamp-2 group-hover:text-[#A67E6B] transition-colors leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-stone-500 leading-relaxed line-clamp-3">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 text-left">
                  <div className="border-t border-stone-100 pt-3 flex items-center justify-between text-xs font-sans font-semibold text-stone-800">
                    <div className="flex items-center space-x-1.5">
                      <div className="w-5 h-5 rounded-full bg-stone-100 overflow-hidden shrink-0">
                        <img src={art.authorAvatar} alt={art.author} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-stone-600 font-medium">Por {art.author}</span>
                    </div>
                    <div className="inline-flex items-center space-x-1 text-[#A67E6B] group-hover:underline">
                      <span>Ler mais</span>
                      <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Ad banner place half-way inside blog elements */}
          {paginatedArticles.length > 2 && (
            <AdBannerInline title="Patrocínio do Portal Escola" className="rounded-2xl max-w-2xl mx-auto" />
          )}

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 pt-4">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3.5 py-1.5 bg-white border border-stone-200 text-xs font-semibold rounded-lg text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50 transition"
              >
                Anterior
              </button>
              <div className="flex items-center text-xs font-mono font-bold text-stone-700 space-x-1.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs transition ${
                      currentPage === i + 1
                        ? 'bg-stone-900 text-white'
                        : 'bg-white border border-stone-200 hover:bg-stone-50 text-stone-700'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3.5 py-1.5 bg-white border border-stone-200 text-xs font-semibold rounded-lg text-stone-700 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-stone-50 transition"
              >
                Próxima
              </button>
            </div>
          )}

        </section>
      </div>
    </main>
  );
};
