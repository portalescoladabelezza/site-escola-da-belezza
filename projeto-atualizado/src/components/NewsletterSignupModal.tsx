/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Mail, X, Sparkles, CheckCircle, Gift, BookOpen, Clock, ArrowDown, RefreshCw } from 'lucide-react';

interface NewsletterSignupModalProps {
  scrollThreshold?: number; // percentage of scroll (e.g. 30 for 30%)
  timeDelay?: number;       // time delay in milliseconds (e.g. 5000 for 5 seconds)
}

export const NewsletterSignupModal: React.FC<NewsletterSignupModalProps> = ({
  scrollThreshold = 30,
  timeDelay = 6000,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Geral');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wasClosed, setWasClosed] = useState(false);

  // Simulation/Debugger statistics tracking
  const [currentScrollPercent, setCurrentScrollPercent] = useState(0);
  const [secondsRemaining, setSecondsRemaining] = useState(Math.round(timeDelay / 1000));
  const [triggerReason, setTriggerReason] = useState<'scroll' | 'delay' | 'manual' | null>(null);
  const [showConfigPanel, setShowConfigPanel] = useState(false);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const scrollTriggeredRef = useRef(false);
  const delayTriggeredRef = useRef(false);

  // Check initial state from LocalStorage on mount
  useEffect(() => {
    const isDismissed = localStorage.getItem('portal_modal_dismissed') === 'true';
    const isSubscriber = localStorage.getItem('portal_leads') !== null;
    
    if (isDismissed || isSubscriber) {
      setWasClosed(true);
    }
  }, []);

  // Timer Trigger Setup
  useEffect(() => {
    if (wasClosed || submitted || delayTriggeredRef.current) return;

    // Countdown state for interactive debugging info
    const countdownInterval = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    timerRef.current = setTimeout(() => {
      if (!scrollTriggeredRef.current && !wasClosed) {
        delayTriggeredRef.current = true;
        setTriggerReason('delay');
        setIsOpen(true);
      }
    }, timeDelay);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      clearInterval(countdownInterval);
    };
  }, [wasClosed, submitted, timeDelay]);

  // Scroll Trigger Setup
  useEffect(() => {
    if (wasClosed || submitted || scrollTriggeredRef.current) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const scrollPercent = Math.min((scrollTop / docHeight) * 100, 100);
      setCurrentScrollPercent(Math.round(scrollPercent));

      if (scrollPercent >= scrollThreshold && !delayTriggeredRef.current && !wasClosed) {
        scrollTriggeredRef.current = true;
        setTriggerReason('scroll');
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger on mount just in case page is already scrolled downward
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [wasClosed, submitted, scrollThreshold]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Save into portal leads
      const localLeads = JSON.parse(localStorage.getItem('portal_leads') || '[]');
      localLeads.push({
        name,
        email,
        interest,
        source: `modal_${triggerReason || 'unknown'}`,
        date: new Date().toISOString()
      });
      localStorage.setItem('portal_leads', JSON.stringify(localLeads));
      
      // Auto dismiss modal a few seconds after success
      setTimeout(() => {
        setIsOpen(false);
        // Save permanently that they interacted
        localStorage.setItem('portal_modal_dismissed', 'true');
        setWasClosed(true);
      }, 4000);
    }, 1500);
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('portal_modal_dismissed', 'true');
    setWasClosed(true);
  };

  // Allow resetting simulation/debugger state for review
  const handleResetSimulation = () => {
    localStorage.removeItem('portal_modal_dismissed');
    scrollTriggeredRef.current = false;
    delayTriggeredRef.current = false;
    setWasClosed(false);
    setSubmitted(false);
    setIsOpen(false);
    setName('');
    setEmail('');
    setSecondsRemaining(Math.round(timeDelay / 1000));
    setTriggerReason(null);
    setCurrentScrollPercent(0);
    alert('Simulação reiniciada! Role a página ou aguarde o tempo configurado para disparar o modal.');
  };

  const handleForceOpen = () => {
    setTriggerReason('manual');
    setIsOpen(true);
  };

  return (
    <>
      {/* PERSISTENT FLOATING RECOVERY BUTTON / BADGE (Boosts lead generation after closing) */}
      <div className="fixed bottom-[88px] right-6 z-40 flex flex-col items-end space-y-2 select-none">
        {/* Quick Gift Trigger */}
        <button
          onClick={handleForceOpen}
          className="bg-gradient-to-r from-[#C49B66] to-[#B38A55] text-white py-3 px-5 rounded-full shadow-xl hover:scale-105 transition-all duration-300 font-sans font-bold text-xs uppercase tracking-wider flex items-center gap-2 border-2 border-white cursor-pointer group"
        >
          <Gift size={16} className="animate-bounce group-hover:rotate-12 transition-transform" />
          <span>Apostilas Gratuitas 📚</span>
        </button>
      </div>

      {/* POPUP MODAL DIALOG PORTAL */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Dark Overlay Background with smooth fade */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-[#1A1A1A]/75 backdrop-blur-xs cursor-pointer"
            />

            {/* Modal Body container with pop spring animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-[#FDF8F5] relative max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl border border-[#F2E8DF] z-10 text-left flex flex-col md:flex-row"
            >
              
              {/* Top/Side Decorative Accent Banner */}
              <div className="bg-[#2D2D2D] text-white p-6 md:w-5/12 flex flex-col justify-between relative overflow-hidden">
                {/* Graphics background elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C49B66]/15 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-x-[-20%] translate-y-[20%]" />
                
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center space-x-1.5 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                    <Sparkles size={11} className="text-[#E6C9A8]" />
                    <span className="text-[9px] font-mono tracking-widest font-bold uppercase text-[#E6C9A8]">
                      Oportunidade Grátis
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl font-serif font-bold italic text-white leading-tight">
                      Ganhe Nossas Apostilas!
                    </h3>
                    <p className="text-[11px] text-stone-300 leading-relaxed font-sans">
                      Aprenda técnicas de mechas, nail art, depilação e design de sobrancelhas passo a passo.
                    </p>
                  </div>
                </div>

                {/* Left indicators (Social Proof list) */}
                <div className="relative z-10 space-y-2.5 pt-6 border-t border-white/10 mt-6 hidden md:block">
                  <div className="flex items-start space-x-2">
                    <div className="text-[#C49B66] text-xs mt-0.5">✔</div>
                    <span className="text-[10px] text-stone-200">Apostilas Didáticas em PDF</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="text-[#C49B66] text-xs mt-0.5">✔</div>
                    <span className="text-[10px] text-stone-200">Alertas de Cupons de Cursos</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="text-[#C49B66] text-xs mt-0.5">✔</div>
                    <span className="text-[10px] text-stone-200">14.800+ Alunas Ativas</span>
                  </div>
                </div>

                {/* Metadata detail of Trigger for developer verification */}
                <div className="text-[8px] font-mono text-stone-500 uppercase tracking-widest mt-4">
                  Disparado via: {triggerReason}
                </div>
              </div>

              {/* Main signup content on the right side */}
              <div className="p-6 md:w-7/12 flex flex-col justify-center relative">
                
                {/* Close Button top-right */}
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 text-stone-400 hover:text-stone-900 transition-colors p-1 hover:bg-stone-100 rounded-full cursor-pointer"
                  title="Fechar"
                >
                  <X size={18} />
                </button>

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-[10px] font-mono text-[#C49B66] font-bold uppercase tracking-wider">
                        <span>VIP Club</span>
                        <span className="w-1.5 h-1.5 bg-[#C49B66] rounded-full animate-pulse"></span>
                      </div>
                      <h4 className="text-base sm:text-lg font-serif font-black text-[#1A1A1A] leading-tight">
                        Acesso Completo e Sem Custos
                      </h4>
                      <p className="text-[11px] text-stone-500 leading-relaxed font-sans">
                        Cadastre-se abaixo e comece a estudar no maior portal educativo de estética hoje mesmo.
                      </p>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      <div>
                        <label className="block text-[10px] font-bold text-[#C49B66] uppercase tracking-wider mb-1">
                          Nome Completo
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ex: Clara Mendes"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full text-xs font-sans p-2.5 bg-[#F9F6F2] border border-[#E5D1B8] focus:border-[#C49B66] focus:ring-1 focus:ring-[#C49B66] focus:outline-none rounded-lg text-stone-800 transition"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-[10px] font-bold text-[#C49B66] uppercase tracking-wider mb-1">
                          Seu Email Principal
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="Ex: clara.mendes@exemplo.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full text-xs font-sans p-2.5 bg-[#F9F6F2] border border-[#E5D1B8] focus:border-[#C49B66] focus:ring-1 focus:ring-[#C49B66] focus:outline-none rounded-lg text-stone-800 transition"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-bold text-[#C49B66] uppercase tracking-wider mb-1">
                          A apostila de qual área deseja primeiro?
                        </label>
                        <select
                          value={interest}
                          onChange={(e) => setInterest(e.target.value)}
                          className="w-full text-xs font-sans p-2.5 bg-[#F9F6F2] border border-[#E5D1B8] focus:border-[#C49B66] focus:ring-1 focus:ring-[#C49B66] focus:outline-none rounded-lg text-stone-800 transition cursor-pointer"
                        >
                          <option value="Unhas">📚 Apostila de Unhas & Manicure</option>
                          <option value="Cabelos">📚 Apostila de Transições & Cortes</option>
                          <option value="Maquiagem">📚 Apostila de Maquiagem & Pele</option>
                          <option value="Estética">📚 Apostila de Sobrancelhas & Estética</option>
                          <option value="Marketing">📚 Apostila de Empreendedorismo de Beleza</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full inline-flex items-center justify-center space-x-1.5 p-3 bg-[#C49B66] hover:bg-[#B38A55] text-white text-xs font-sans font-bold tracking-wider uppercase rounded-lg transition duration-150 disabled:bg-stone-400 cursor-pointer shadow-xs"
                      >
                        {loading ? (
                          <span className="flex items-center gap-1.5 justify-center">
                            <span className="w-3 h-3 rounded-full border-2 border-white/50 border-t-white animate-spin"></span>
                            Liberando material...
                          </span>
                        ) : (
                          <>
                            <BookOpen size={13} />
                            <span>Garantir Minhas Apostilas</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[9px] text-center text-stone-400 font-sans">
                      Sem spam. Respeitamos a LGPD e você pode cancelar quando quiser.
                    </p>
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-4"
                  >
                    <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                      <CheckCircle size={24} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-serif font-bold text-stone-900 leading-tight">
                        Excelente Escolha!
                      </h4>
                      <p className="text-xs text-stone-600 leading-relaxed font-sans px-2">
                        Seu material de <strong>{interest}</strong> foi enviado para <strong>{email}</strong> de forma inteiramente gratuita.
                      </p>
                    </div>
                    
                    <div className="bg-[#FAF8F6] rounded-xl p-3 border border-stone-100 max-w-xs mx-auto text-left text-[10px] text-stone-500 space-y-1">
                      <p className="font-bold text-stone-700 flex items-center gap-1">
                        ⭐ Próximos Passos:
                      </p>
                      <p>1. Verifique sua caixa de entrada (e spam/promoções).</p>
                      <p>2. Adicione portalescoladabelezza@gmail.com como remetente confiável.</p>
                    </div>
                  </motion.div>
                )}

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
