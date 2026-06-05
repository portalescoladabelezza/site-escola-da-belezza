/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { PageRoute, Article } from './types';
import { INITIAL_ARTICLES } from './data/articles';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { NewsletterSignupModal } from './components/NewsletterSignupModal';
import { BackToTop } from './components/BackToTop';
import { WhatsAppButton } from './components/WhatsAppButton';

// Pages
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { ArticleDetail } from './pages/ArticleDetail';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { Advertise } from './pages/Advertise';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<PageRoute>({ type: 'home' });
  const [articles] = useState<Article[]>(INITIAL_ARTICLES);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Track theme changes at document level
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Auto-scroll to top when route changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentRoute]);

  const handleNavigate = (route: PageRoute) => {
    setCurrentRoute(route);
  };

  const handleSearchSubmit = (keyword: string) => {
    setCurrentRoute({
      type: 'blog',
      searchKeyword: keyword,
    });
  };

  // Render correct page view based on route state
  const renderPageContent = () => {
    switch (currentRoute.type) {
      case 'home':
        return <Home articles={articles} onNavigate={handleNavigate} />;
      case 'blog':
        return (
          <Blog
            articles={articles}
            initialCategoryFilter={currentRoute.categoryFilter}
            initialSearchKeyword={currentRoute.searchKeyword}
            onNavigate={handleNavigate}
          />
        );
      case 'article': {
        const foundArticle = articles.find((a) => a.slug === currentRoute.slug);
        if (!foundArticle) {
          return (
            <div className="max-w-md mx-auto py-24 text-center space-y-4">
              <span className="text-5xl block">⚠️</span>
              <h2 className="text-2xl font-serif font-bold text-stone-900">Artigo não encontrado</h2>
              <p className="text-stone-500 text-sm">O link consultado não existe mais ou foi arquivado pelo portal.</p>
              <button
                onClick={() => handleNavigate({ type: 'home' })}
                className="px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition"
              >
                Voltar à Página Inicial
              </button>
            </div>
          );
        }
        return (
          <ArticleDetail
            article={foundArticle}
            allArticles={articles}
            onNavigate={handleNavigate}
          />
        );
      }
      case 'about':
        return <About onNavigate={handleNavigate} />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <Legal initialTab="privacy" />;
      case 'terms':
        return <Legal initialTab="terms" />;
      case 'cookies':
        return <Legal initialTab="cookies" />;
      case 'advertise':
        return <Advertise />;
      default:
        return <Home articles={articles} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className={`min-h-screen bg-[#FDF8F5] text-[#2D2D2D] dark:bg-[#181412] dark:text-[#EDE6E2] font-sans flex flex-col justify-between selection:bg-[#E5D1B8]/40 transition-colors duration-250 ${isDarkMode ? 'dark' : ''}`}>
      
      {/* TOP BAR - Extracting styling and elements from Professional Polish */}
      <div className="bg-[#2D2D2D] text-white text-[10px] px-4 sm:px-8 py-2 flex flex-col sm:flex-row justify-between items-center uppercase tracking-widest font-semibold gap-1.5 sm:gap-0 z-50">
        <span>O seu portal definitivo de carreira e beleza</span>
        <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap">
          <button
            onClick={() => handleNavigate({ type: 'about' })}
            className="hover:text-[#E6C9A8] transition cursor-pointer"
          >
            Sobre
          </button>
          <button
            onClick={() => handleNavigate({ type: 'privacy' })}
            className="hover:text-[#E6C9A8] transition cursor-pointer"
          >
            Política de Privacidade
          </button>
          <button
            onClick={() => handleNavigate({ type: 'advertise' })}
            className="hover:text-[#E6C9A8] transition cursor-pointer"
          >
            Anuncie Conosco
          </button>
          <span className="text-[#332C28] hidden sm:inline">|</span>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="inline-flex items-center gap-1.5 hover:text-white text-[#E6C9A8] transition cursor-pointer font-bold focus:outline-none"
            aria-label="Alternar tema de leitura"
            title={isDarkMode ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
          >
            {isDarkMode ? (
              <>
                <Sun size={12} className="text-amber-400 fill-amber-400" />
                <span>Modo Claro</span>
              </>
            ) : (
              <>
                <Moon size={12} className="text-[#E6C9A8]" />
                <span>Modo Escuro</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* RENDER STYLED NAVIGATION */}
      <Navigation
        currentRoute={currentRoute}
        onNavigate={handleNavigate}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* CORE PAGES OUTLET ROUTER CONTAINER */}
      <div className="flex-grow">
        {renderPageContent()}
      </div>

      {/* FOOTER METRIC & SIGNATURE BLOCK */}
      <Footer onNavigate={handleNavigate} />

      {/* CORE HIGH-CONVERTING LEAD GENERATION MODAL */}
      <NewsletterSignupModal scrollThreshold={30} timeDelay={6000} />

      {/* SMOOTH BACK TO TOP FLOATING BUTTON */}
      <BackToTop />

      {/* FLOATING ACTION WHATSAPP CHAT SUPPORT BUTTON */}
      <WhatsAppButton />

    </div>
  );
}
