/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ShieldAlert, X, Cookie, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface CookieBannerProps {
  onNavigate: (route: PageRoute) => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    // Check if consent has already been given
    const savedConsent = localStorage.getItem('portal_cookies_consent');
    if (!savedConsent) {
      // Small duration delay so that it slides in beautifully after load
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    } else {
      setConsent(savedConsent);
    }
  }, []);

  useEffect(() => {
    // Listen for custom event to reopen preferences from the footer
    const handleReopen = () => {
      setIsVisible(true);
    };

    window.addEventListener('open_cookie_banner', handleReopen);
    return () => {
      window.removeEventListener('open_cookie_banner', handleReopen);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem('portal_cookies_consent', 'accepted');
    setConsent('accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('portal_cookies_consent', 'declined');
    setConsent('declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="cookie-consent-banner"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-white dark:bg-[#1C1816] border border-stone-200 dark:border-[#332C28] rounded-2xl shadow-xl z-50 overflow-hidden"
        >
          <div className="p-5 flex flex-col gap-4 text-left">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-700 dark:text-amber-400">
                  <Cookie size={18} strokeWidth={2} />
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-[#EDE6E2]">
                  Consentimento de Cookies
                </h4>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 transition p-1 rounded-full hover:bg-stone-50 dark:hover:bg-[#251E1B] cursor-pointer"
                aria-label="Minimizar aviso"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-xs text-stone-600 dark:text-[#A89D96] leading-relaxed font-sans">
              Utilizamos cookies para melhorar sua experiência, analisar o desempenho do site e, futuramente, personalizar conteúdos e anúncios de forma segura. Você pode aceitar, recusar ou ler em detalhes na nossa{' '}
              <button
                onClick={() => {
                  onNavigate({ type: 'cookies' });
                  setIsVisible(false);
                }}
                className="text-[#C49B66] dark:text-[#E6C9A8] font-bold underline hover:text-[#b08754] transition cursor-pointer"
              >
                Política de Cookies
              </button>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mt-1 sm:justify-end">
              <button
                onClick={handleDecline}
                className="px-4 py-2 bg-stone-100 dark:bg-[#251E1B] text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-[#332924] rounded-lg text-xs font-semibold cursor-pointer transition duration-150 order-2 sm:order-1"
              >
                Recusar
              </button>
              <button
                onClick={handleAccept}
                className="px-5 py-2 bg-[#C49B66] text-white hover:bg-[#b08754] rounded-lg text-xs font-semibold cursor-pointer shadow-xs transition duration-150 order-1 sm:order-2 flex items-center justify-center gap-1.5"
              >
                <span>Aceitar cookies</span>
                <ArrowRight size={12} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
