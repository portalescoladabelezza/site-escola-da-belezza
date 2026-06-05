/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Calendar, Clock, User, Share2, Copy, Check, MessageSquare, ArrowRight, CornerDownRight, ChevronDown, ChevronUp, ArrowLeft, Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import { Article, PageRoute } from '../types';
import { AdBannerInline, SponsoredBox } from '../components/AdBanner';

interface ArticleDetailProps {
  article: Article;
  allArticles: Article[];
  onNavigate: (route: PageRoute) => void;
}

export const ArticleDetail: React.FC<ArticleDetailProps> = ({
  article,
  allArticles,
  onNavigate,
}) => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [likesCount, setLikesCount] = useState(47);
  const [liked, setLiked] = useState(false);
  const [instagramCopied, setInstagramCopied] = useState(false);
  const [youtubeCopied, setYoutubeCopied] = useState(false);

  // Auto-inject SEO Schema on mounting and clean up on unmount
  useEffect(() => {
    // 1. Article Schema JSON-LD
    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      'headline': article.title,
      'description': article.metaDescription,
      'image': [article.image],
      'datePublished': '2026-06-05T08:00:00Z',
      'author': {
        '@type': 'Person',
        'name': article.author,
        'jobTitle': 'Especialista em Estética'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Portal Escola da Beleza',
        'logo': {
          '@type': 'ImageObject',
          'url': 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=200'
        }
      }
    };

    // 2. FAQ Schema JSON-LD
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': article.faqs.map((faq) => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    };

    const schemeScriptElement = document.createElement('script');
    schemeScriptElement.type = 'application/ld+json';
    schemeScriptElement.id = 'seo-article-jsonld';
    schemeScriptElement.innerHTML = JSON.stringify([articleSchema, faqSchema]);
    document.head.appendChild(schemeScriptElement);

    // Update browser title matching SEO standard
    const previousTitle = document.title;
    document.title = `${article.title} | Portal Escola da Beleza`;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      const existingScript = document.getElementById('seo-article-jsonld');
      if (existingScript) {
        existingScript.remove();
      }
      document.title = previousTitle;
    };
  }, [article]);

  // Jump index generator
  const headings = article.sections.filter(
    (sec) => sec.type === 'heading2' || sec.type === 'heading3'
  );

  const handleCopyLink = () => {
    const fullUrl = window.location.href;
    navigator.clipboard.writeText(fullUrl).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    });
  };

  const handleShareWhatsApp = () => {
    const textMsg = encodeURIComponent(`${article.title} - Leia no Portal Escola da Beleza: ${window.location.href}`);
    window.open(`https://api.whatsapp.com/send?text=${textMsg}`, '_blank');
  };

  const handleShareFacebook = () => {
    const fullUrl = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${fullUrl}`, '_blank');
  };

  const handleShareInstagram = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setInstagramCopied(true);
      setTimeout(() => setInstagramCopied(false), 2500);
      window.open('https://instagram.com', '_blank');
    });
  };

  const handleShareYoutube = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setYoutubeCopied(true);
      setTimeout(() => setYoutubeCopied(false), 2500);
      window.open('https://youtube.com', '_blank');
    });
  };

  const handleShareEmail = () => {
    const subject = encodeURIComponent(`Recomendo este artigo: ${article.title}`);
    const body = encodeURIComponent(`Olá!\n\nAchei esse artigo muito útil no Portal Escola da Beleza e lembrei de você:\n\n* ${article.title}\n* ${article.subtitle}\n\nLeia o artigo completo aqui: ${window.location.href}`);
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  const toggleFaq = (faqId: string) => {
    if (activeFaq === faqId) {
      setActiveFaq(null);
    } else {
      setActiveFaq(faqId);
    }
  };

  // Filter 3 related articles
  const relatedArticles = allArticles
    .filter((art) => art.id !== article.id && (art.category === article.category || art.tags.some(t => article.tags.includes(t))))
    .slice(0, 3);

  // Fallback to general articles if no matching tag found
  const finalRelated = relatedArticles.length > 0 
    ? relatedArticles 
    : allArticles.filter((art) => art.id !== article.id).slice(0, 3);

  return (
    <article className="bg-[#FEFCFB] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Path */}
        <nav className="flex items-center space-x-2 text-xs text-stone-500 font-sans mb-6">
          <button onClick={() => onNavigate({ type: 'home' })} className="hover:text-stone-800 underline">
            Início
          </button>
          <span>/</span>
          <button onClick={() => onNavigate({ type: 'blog', categoryFilter: article.category })} className="hover:text-stone-800 underline">
            {article.category}
          </button>
          <span>/</span>
          <span className="text-stone-400 truncate max-w-[200px] sm:max-w-xs">{article.title}</span>
        </nav>

        {/* Hero title container */}
        <section className="text-left space-y-4 max-w-4xl">
          <div className="inline-block px-3 py-1 bg-[#E6C5B3]/25 text-stone-800 rounded-full text-xs font-mono font-bold uppercase tracking-wider">
            {article.category}
          </div>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900 tracking-tight leading-tight">
            {article.title}
          </h1>
          <p className="text-stone-600 text-sm sm:text-base lg:text-lg leading-relaxed font-sans font-normal italic border-l-2 border-[#E6C5B3] pl-3">
            {article.subtitle}
          </p>

          {/* Writer Info banner */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-stone-150">
            <div className="flex items-center space-x-3 text-left">
              <div className="w-10 h-10 rounded-full bg-stone-100 overflow-hidden shrink-0 border border-stone-200">
                <img src={article.authorAvatar} alt={article.author} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="block text-xs font-sans font-bold text-stone-800">
                  Por {article.author}
                </span>
                <span className="text-[10px] text-stone-400 font-sans block">
                  Revisado tecnicamente por mentores de Estética em 2026
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-xs text-stone-500 font-sans">
              <span className="flex items-center space-x-1">
                <Calendar size={13} />
                <span>Original {article.date}</span>
              </span>
              <span className="flex items-center space-x-1">
                <Clock size={13} />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>
        </section>

        {/* Featured Large Article Image */}
        <section className="my-8 rounded-2xl overflow-hidden relative shadow-md">
          <img
            src={article.image}
            alt={article.title}
            referrerPolicy="no-referrer"
            className="w-full h-[250px] sm:h-[450px] object-cover"
          />
        </section>

        {/* Layout Grid with Content & Sidebar space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main detailed text block */}
          <section className="col-span-1 lg:col-span-8 space-y-6 text-left">
            
            {/* Index table (índice de conteúdo) */}
            {headings.length > 0 && (
              <div className="bg-[#FAF8F6] border border-stone-200 p-5 rounded-2xl">
                <p className="text-xs font-mono uppercase tracking-widest text-[#C5A880] mb-3 font-bold">
                  Índice do Conteúdo
                </p>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {headings.map((heading, index) => (
                    <li key={index} className="flex items-start">
                      <CornerDownRight size={12} className="text-[#C5A880] shrink-0 mr-1.5 mt-0.5" />
                      <a
                        href={`#section-${index}`}
                        className="hover:text-stone-900 hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          const target = document.getElementById(`section-${index}`);
                          if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                  <li className="flex items-start">
                    <CornerDownRight size={12} className="text-[#C5A880] shrink-0 mr-1.5 mt-0.5" />
                    <a
                      href="#section-faq"
                      className="hover:text-stone-900 hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        const target = document.getElementById('section-faq');
                        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }}
                    >
                      Dúvidas frequentes (FAQ)
                    </a>
                  </li>
                </ul>
              </div>
            )}

            {/* In-Content compilation */}
            <div className="prose prose-stone max-w-none text-stone-800 text-sm sm:text-base leading-relaxed space-y-6 font-sans">
              
              {/* Introduction - First Paragraph */}
              {article.sections.slice(0, 1).map((sec, idx) => (
                <p key={idx} className="text-stone-800 font-sans leading-relaxed text-sm sm:text-base antialiased first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-2">
                  {sec.text}
                </p>
              ))}

              {/* Advertisement After Introduction */}
              <AdBannerInline title="Publicação Patrocinada" className="my-6" />

              {/* Rest of sections with IDs mapped to headings */}
              {(() => {
                let headingCounter = 0;
                return article.sections.slice(1).map((sec, idx) => {
                  if (sec.type === 'heading2') {
                    const currentId = `section-${headingCounter}`;
                    headingCounter++;
                    return (
                      <h2
                        key={idx}
                        id={currentId}
                        className="text-lg sm:text-2xl font-serif font-bold text-stone-900 pt-4 border-b border-stone-150 pb-1.5"
                      >
                        {sec.text}
                      </h2>
                    );
                  }
                  if (sec.type === 'heading3') {
                    const currentId = `section-${headingCounter}`;
                    headingCounter++;
                    return (
                      <h3
                        key={idx}
                        id={currentId}
                        className="text-base sm:text-lg font-sans font-extrabold text-stone-800 pt-3"
                      >
                        {sec.text}
                      </h3>
                    );
                  }
                  if (sec.type === 'list' && sec.items) {
                    return (
                      <ul key={idx} className="space-y-2.5 pl-5 pt-1.5 list-disc text-stone-700 text-xs sm:text-sm">
                        {sec.items.map((item, idy) => {
                          const parts = item.split(':');
                          if (parts.length > 1) {
                            return (
                              <li key={idy}>
                                <strong>{parts[0]}:</strong>{parts.slice(1).join(':')}
                              </li>
                            );
                          }
                          return <li key={idy}>{item}</li>;
                        })}
                      </ul>
                    );
                  }
                  if (sec.type === 'highlight') {
                    return (
                      <div key={idx} className="p-5 bg-gradient-to-r from-stone-50 to-stone-100 rounded-xl border-l-4 border-stone-400 font-medium italic my-4 text-xs sm:text-sm">
                        {sec.text}
                      </div>
                    );
                  }
                  // Default to paragraph
                  return (
                    <p key={idx} className="text-stone-700 leading-relaxed text-xs sm:text-sm antialiased">
                      {sec.text}
                    </p>
                  );
                });
              })()}

              {/* Advertisement in the middle of content */}
              <AdBannerInline title="Oferta recomendada do Portal" className="my-8" />

              {/* Action Box or custom TIP */}
              <div className="bg-[#FFF9F6] border border-[#E6C5B3]/40 rounded-2xl p-5 sm:p-6 my-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#E6C5B3]/10 rounded-full translate-x-5 -translate-y-5" />
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#A67E6B] font-extrabold mb-1.5">
                  Dica de Mentor de Beleza
                </h4>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic relative z-10">
                  "{article.highlightTip}"
                </p>
              </div>

            </div>

            {/* Social Share toolbox & engagement */}
            <div className="border-t border-stone-200 pt-6 mt-10">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                
                {/* Simulated engagement thumbs up */}
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => {
                      if (!liked) {
                        setLikesCount(likesCount + 1);
                        setLiked(true);
                      }
                    }}
                    className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-semibold select-none cursor-pointer transition ${
                      liked 
                        ? 'bg-[#E6C5B3] text-stone-900 border border-transparent' 
                        : 'bg-stone-50 border border-stone-200 text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    <span>👍</span>
                    <span>{likesCount} Curtidas</span>
                  </button>
                  <span className="text-xs text-stone-400 font-sans">Achei este conteúdo útil</span>
                </div>

                {/* Social links wrappers */}
                <div className="flex flex-col md:flex-row items-center md:items-center gap-3">
                  <span className="text-xs text-stone-500 dark:text-[#A89D96] font-sans font-semibold flex items-center gap-1.5">
                    <Share2 size={13} className="text-[#C49B66]" /> Compartilhar:
                  </span>
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <button
                      onClick={handleShareWhatsApp}
                      className="p-2.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100 text-emerald-700 dark:bg-emerald-950/20 dark:hover:bg-emerald-900/30 dark:border-emerald-800/30 dark:text-emerald-400 rounded-full transition hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
                      title="WhatsApp"
                    >
                      <MessageSquare size={16} />
                    </button>
                    <button
                      onClick={handleShareFacebook}
                      className="p-2.5 bg-blue-50 hover:bg-blue-100 border border-blue-100 text-blue-700 dark:bg-blue-950/20 dark:hover:bg-blue-900/30 dark:border-blue-800/30 dark:text-blue-400 rounded-full transition hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
                      title="Facebook"
                    >
                      <Facebook size={16} />
                    </button>
                    <button
                      onClick={handleShareInstagram}
                      className="p-2.5 bg-rose-50 hover:bg-rose-100 border border-rose-150 text-rose-700 dark:bg-rose-950/20 dark:hover:bg-rose-900/30 dark:border-rose-800/30 dark:text-rose-400 rounded-full transition hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center relative"
                      title="Instagram"
                    >
                      <Instagram size={16} />
                      {instagramCopied && (
                        <span className="absolute bottom-12 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-stone-900 dark:bg-[#1C1816]/95 border border-stone-800 dark:border-[#332C28] text-white dark:text-[#EDE6E2] text-[10px] rounded shadow-md whitespace-nowrap z-50 font-sans font-bold">
                          Link Copiado! Compartilhe no Gram 📸
                        </span>
                      )}
                    </button>
                    <button
                      onClick={handleShareYoutube}
                      className="p-2.5 bg-red-50 hover:bg-red-100 border border-red-100 text-red-700 dark:bg-red-950/20 dark:hover:bg-red-900/30 dark:border-red-800/30 dark:text-red-400 rounded-full transition hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center relative"
                      title="YouTube"
                    >
                      <Youtube size={16} />
                      {youtubeCopied && (
                        <span className="absolute bottom-12 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-stone-900 dark:bg-[#1C1816]/95 border border-stone-800 dark:border-[#332C28] text-white dark:text-[#EDE6E2] text-[10px] rounded shadow-md whitespace-nowrap z-50 font-sans font-bold">
                          Link Copiado! Visite o Canal 🎥
                        </span>
                      )}
                    </button>
                    <button
                      onClick={handleShareEmail}
                      className="p-2.5 bg-stone-50 hover:bg-stone-150 border border-stone-200 text-stone-700 dark:bg-[#221D1A] dark:hover:bg-[#332C28] dark:border-[#332C28] dark:text-[#EDE6E2] rounded-full transition hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center"
                      title="E-mail"
                    >
                      <Mail size={16} />
                    </button>
                    <button
                      onClick={handleCopyLink}
                      className="py-1.5 px-3.5 bg-stone-50 hover:bg-stone-150 border border-stone-200 text-stone-700 dark:bg-[#221D1A] dark:hover:bg-[#332C28] dark:border-[#332C28] dark:text-[#EDE6E2] rounded-full transition hover:scale-105 active:scale-95 cursor-pointer flex items-center space-x-1.5 text-xs font-bold"
                      title="Copiar link"
                    >
                      {copiedLink ? <Check size={14} className="text-emerald-600 dark:text-emerald-400" /> : <Copy size={13} />}
                      <span>{copiedLink ? "Copiado!" : "Copiar Link"}</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Interactive FAQs Section */}
            <section id="section-faq" className="mt-12 bg-white border border-stone-200 p-6 sm:p-8 rounded-2xl shadow-xs">
              <h3 className="text-base sm:text-xl font-serif font-black text-stone-900 tracking-tight mb-1.5">
                Dúvidas Frequentes (FAQ)
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm mb-6">
                Veja as principais respostas recomendadas sobre o conteúdo tratado neste artigo.
              </p>

              <div className="space-y-3">
                {article.faqs.map((faq) => {
                  const isOpen = activeFaq === faq.id;
                  return (
                    <div
                      key={faq.id}
                      className="border border-stone-150 rounded-xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex justify-between items-center p-4 bg-stone-50/50 hover:bg-stone-50 text-left cursor-pointer"
                      >
                        <span className="text-xs sm:text-sm font-sans font-bold text-stone-800">
                          {faq.question}
                        </span>
                        {isOpen ? <ChevronUp size={16} className="text-stone-500 shrink-0ML-2" /> : <ChevronDown size={16} className="text-stone-500 shrink-0ML-2" />}
                      </button>

                      {isOpen && (
                        <div className="p-4 pt-3.5 bg-white border-t border-stone-150 text-xs sm:text-sm text-stone-600 leading-relaxed text-left">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>

          </section>

          {/* Right Column: Author Bio & Sponsors */}
          <aside className="col-span-1 lg:col-span-4 space-y-6">
            
            {/* Bio Card */}
            <div className="bg-white border border-stone-200 rounded-2xl p-5 text-left shadow-xs">
              <span className="text-[9px] font-mono tracking-widest text-[#C5A880] uppercase font-bold block mb-4">
                SOBRE A AUTORA
              </span>
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-100 shrink-0">
                  <img src={article.authorAvatar} alt={article.author} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-sans font-bold text-stone-900">{article.author}</h4>
                  <p className="text-[10px] text-stone-500 font-sans">Colunista Técnica Oficial</p>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                {article.authorBio} Desenvolve estudos focados em viabilizar novos espaços de beleza domésticos e aumentar a lucratividade de profissionais autônomas do segmento de estética prática.
              </p>
            </div>

            {/* Direct lead magnet box */}
            <div className="bg-stone-900 text-white rounded-2xl p-6 text-left relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-[#E6C5B3]/20 rounded-full translate-x-5 translate-y-5" />
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#E6C5B3] font-bold">
                Apostila de Estética
              </h4>
              <p className="text-stone-300 text-[11px] sm:text-xs mt-2 leading-relaxed">
                Interessada por capacitações? Receba apostilas de modelagem facial, visagismo e precificação gratuitas se cadastrando no portal.
              </p>
              <button
                onClick={() => {
                  const newsSec = document.getElementById('footer-news-section');
                  if (newsSec) newsSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="mt-4 w-full p-2.5 bg-gradient-to-r from-[#E6C5B3] to-[#F5EBE6] hover:scale-[1.01] transition-transform text-stone-900 font-bold text-xs rounded-xl tracking-wide font-sans text-center cursor-pointer"
              >
                Garantir Apostila Grátis
              </button>
            </div>

            {/* Premium Affiliate Sponsor Sidebar Placement */}
            <SponsoredBox />

          </aside>
        </div>

        {/* Adspace before related posts */}
        <div className="my-10 border-t border-stone-200 pt-8">
          <AdBannerInline title="Patrocinador Recomendado" className="max-w-2xl mx-auto" />
        </div>

        {/* Related Posts panel */}
        <section className="bg-[#FFFDFC] border border-[#F5EBE6] p-6 sm:p-8 rounded-2xl mt-8">
          <div className="flex justify-between items-baseline mb-6">
            <h3 className="text-base sm:text-xl font-serif font-black text-stone-900 tracking-tight text-left">
              Artigos Relacionados Recomendados
            </h3>
            <button
              onClick={() => onNavigate({ type: 'blog' })}
              className="text-xs text-stone-500 hover:text-stone-900 hover:underline"
            >
              Ver acervo do blog
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {finalRelated.map((rel) => (
              <div
                key={rel.id}
                onClick={() => onNavigate({ type: 'article', slug: rel.slug })}
                className="bg-white border border-stone-200 rounded-xl overflow-hidden cursor-pointer group hover:shadow-sm hover:border-[#E6C5B3]/40 transition text-left flex flex-col justify-between"
              >
                <div>
                  <div className="h-32 overflow-hidden relative">
                    <img src={rel.image} alt={rel.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4 space-y-1.5">
                    <span className="text-[9px] font-mono text-[#C5A880] uppercase block">
                      {rel.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-sans font-bold text-stone-800 line-clamp-2 group-hover:text-stone-950">
                      {rel.title}
                    </h4>
                    <p className="text-[11px] text-stone-500 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <div className="text-[11px] font-sans font-semibold text-stone-700 flex items-center space-x-1 group-hover:underline">
                    <span>Ler Artigo</span>
                    <ArrowRight size={10} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
};
