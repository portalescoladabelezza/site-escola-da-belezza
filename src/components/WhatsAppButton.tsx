/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Sparkles, MessageSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAttentionBubble, setShowAttentionBubble] = useState(false);
  const [message, setMessage] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);

  // Setup options for user enquiries
  const quickOptions = [
    'Quero tirar dúvidas sobre um artigo o/ ',
    'Quero saber mais sobre os cursos',
    'Gostaria de anunciar no portal! 📈',
  ];

  // Show a polite attention bubble shortly after the page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show bubble if user hasn't interacted or chat is closed
      if (!isOpen && !localStorage.getItem('whatsapp_interacted')) {
        setShowAttentionBubble(true);
      }
    }, 7000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Handle click outside to close the chat safely
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleOpenChat = () => {
    setIsOpen(!isOpen);
    setShowAttentionBubble(false);
    localStorage.setItem('whatsapp_interacted', 'true');
  };

  const handleOptionClick = (optionText: string) => {
    setMessage(optionText);
  };

  const handleSendMessage = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    // Default WhatsApp API number for Escola da Beleza (using placeholder Brazilian format, highly realistic)
    // The link uses a real, format-compliant URL structure
    const phone = '5551999999999'; // Replace with the portal's real number when available
    const greetingText = message.trim() || 'Olá! Gostaria de tirar algumas dúvidas sobre o Portal Escola da Beleza.';
    const encodedMessage = encodeURIComponent(greetingText);
    const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end font-sans">
      
      {/* Attention Bubble Tooltip */}
      <AnimatePresence>
        {showAttentionBubble && !isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10, x: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3.5 bg-white dark:bg-[#1C1816]/95 border border-[#E5D1B8] dark:border-[#332C28] text-stone-800 dark:text-[#EDE6E2] shadow-xl rounded-2xl px-4 py-3 text-xs w-64 relative font-medium cursor-pointer"
            onClick={handleOpenChat}
            id="wa-attention-bubble"
          >
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setShowAttentionBubble(false);
                localStorage.setItem('whatsapp_interacted', 'true');
              }}
              className="absolute top-2 right-2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-300 transform active:scale-90 transition-transform"
              aria-label="Fechar mensagem"
            >
              <X size={12} />
            </button>
            <div className="flex items-center space-x-2 text-[#C49B66] font-bold mb-1.5 uppercase tracking-wider text-[10px]">
              <Sparkles size={11} className="fill-[#C49B66]" />
              <span>Suporte Escola da Beleza</span>
            </div>
            <p className="leading-relaxed">
              Olá! Tem alguma dúvida sobre estética, cursos ou quer falar conosco? Toque aqui para conversar! 💬
            </p>
            {/* Tiny pure CSS indicator arrow */}
            <div className="absolute right-6 bottom-[-6px] w-3 h-3 bg-white dark:bg-[#1C1816]/95 border-r border-b border-[#E5D1B8] dark:border-[#332C28] rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expandable Chat Box Widget */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 sm:w-85 bg-white dark:bg-[#1C1816] rounded-2xl shadow-2xl border border-stone-200/80 dark:border-[#332C28] overflow-hidden"
            id="wa-chat-widget"
          >
            {/* Header styled with brand-themed green gradient */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border border-white/20 bg-emerald-600/50 flex items-center justify-center font-bold text-white shadow-inner">
                    EB
                  </div>
                  {/* Real-time online status dot */}
                  <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-400 ring-2 ring-white" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm tracking-tight text-white flex items-center gap-1">
                    Portal Escola da Beleza
                  </h4>
                  <span className="text-[10px] text-emerald-100 font-sans block">
                    Normalmente responde em instantes
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 px-1.5 hover:bg-white/10 rounded-full transition text-white/95"
                aria-label="Minimizar chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body Message Stream */}
            <div className="p-4 space-y-4 max-h-64 overflow-y-auto bg-[#F7F2EE] dark:bg-[#15110F]">
              
              {/* Agent Bubble */}
              <div className="flex items-start space-x-2.5">
                <div className="bg-white dark:bg-[#221D1A] border border-stone-100 dark:border-[#332C28] p-3 rounded-2xl rounded-tl-none shadow-xs text-xs text-stone-700 dark:text-[#EDE6E2] max-w-[85%] leading-relaxed">
                  <p className="font-bold text-[#C49B66] mb-1">Suporte Escola da Beleza</p>
                  Olá! Bem-vinda(o) ao nosso suporte oficial! 🌸 ✨
                  <br /><br />
                  Se você deseja tirar dúvidas sobre os artigos, sugerir novos tutoriais, ou saber como fazer parcerias de anúncios conosco, escolha uma opção abaixo ou envie sua dúvida:
                </div>
              </div>

              {/* Dynamic Option Pills */}
              <div className="space-y-1.5 pl-2.5">
                <p className="text-[9px] text-stone-500 dark:text-stone-400 font-bold uppercase tracking-wider">Perguntas Frequentes:</p>
                <div className="flex flex-col gap-1.5 items-start">
                  {quickOptions.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option)}
                      className="text-[11px] text-left py-1.5 px-3 bg-white hover:bg-emerald-50 dark:bg-[#221D1A] dark:hover:bg-emerald-950/20 text-stone-700 dark:text-[#EDE6E2] hover:text-emerald-700 dark:hover:text-emerald-400 rounded-lg border border-stone-200/60 dark:border-[#332C28] transition duration-150 cursor-pointer w-full text-balance shadow-xs"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Form Input Footer */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-[#1C1816] border-t border-stone-100 dark:border-[#332C28] flex items-center space-x-2">
              <input
                type="text"
                placeholder="Escreva sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-grow text-xs px-3 py-2.5 bg-stone-50 dark:bg-[#221D1A] border border-stone-200 dark:border-[#332C28] rounded-xl focus:outline-none focus:border-emerald-500 text-stone-800 dark:text-[#EDE6E2] placeholder-stone-400 dark:placeholder-stone-500 font-sans"
              />
              <button
                type="submit"
                className="p-2.5 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white rounded-xl transition shadow-md hover:shadow-lg flex items-center justify-center cursor-pointer"
                title="Conversar no WhatsApp"
                id="btn-send-wa"
              >
                <Send size={15} />
              </button>
            </form>

          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Pulse Floating Bubble Toggle button */}
      <button
        onClick={handleOpenChat}
        className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-500/20 active:scale-95 transition-all duration-300 focus:outline-none cursor-pointer relative group"
        aria-label="Abrir suporte no WhatsApp"
        title="Fale Conosco no WhatsApp"
        id="btn-whatsapp-bubble"
      >
        {/* Pulsing ring animation around the button */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-35 animate-ping pointer-events-none group-hover:scale-105" />
        
        {/* Unread message indicator badge */}
        {!isOpen && !localStorage.getItem('whatsapp_interacted') && (
          <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border border-white"></span>
          </span>
        )}

        <MessageCircle size={26} className="text-white fill-white/10 group-hover:scale-110 transition-transform duration-300" />
      </button>

    </div>
  );
};
