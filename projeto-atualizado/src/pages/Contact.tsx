/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, HelpCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [subject, setSubject] = useState('Parceria ou Sugestões');
  const [msg, setMsg] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !msg.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      // Save feedback contact log locally
      const localContacts = JSON.parse(localStorage.getItem('portal_contacts') || '[]');
      localContacts.push({ name, email, whatsapp, subject, msg, date: new Date().toISOString() });
      localStorage.setItem('portal_contacts', JSON.stringify(localContacts));
    }, 1200);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setWhatsapp('');
    setSubject('Parceria ou Sugestões');
    setMsg('');
    setSent(false);
  };

  return (
    <main className="bg-[#FEFCFB] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Grid */}
        <div className="border-b border-stone-200 pb-6 mb-10 text-left">
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight">
            Contato e Fale Conosco
          </h1>
          <p className="text-stone-500 text-xs sm:text-sm mt-1">
            Dúvidas, sugestões de pautas, correções técnicas ou solicitações de parcerias com o Portal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Info panel */}
          <section className="col-span-1 lg:col-span-5 text-left space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="bg-[#FAF8F6] p-6 rounded-2xl border border-stone-150 space-y-4">
                <h3 className="text-sm font-sans font-extrabold text-stone-800 uppercase tracking-widest flex items-center space-x-1.5 text-[#C5A880]">
                  <HelpCircle size={15} />
                  <span>Dúvidas comuns</span>
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                  Se você é uma leitora assídua e possui alguma dúvida técnica sobre cortes, unhas ou design de sobrancelhas descritos em nossos artigos, por favor faça uso do campo de dúvidas logo no rodapé do artigo específico.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 text-stone-700">
                  <div className="p-2 bg-stone-100 rounded-lg text-[#C5A880] shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase text-stone-400">E-mail Corporativo</span>
                    <span className="text-xs sm:text-sm font-sans font-semibold text-stone-800">
                      portalescoladabelezza@gmail.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 text-stone-700">
                  <div className="p-2 bg-stone-100 rounded-lg text-[#C5A880] shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase text-stone-400">Endereço Administrativo</span>
                    <span className="text-xs sm:text-sm font-sans text-stone-600">
                      São Paulo - SP, Brasil. Atendimento 100% Digital.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social card */}
            <div className="p-5 border border-stone-150 rounded-2xl bg-[#FFFBF9]/80 text-xs text-stone-500 italic mt-6 lg:mt-0 leading-relaxed">
              O Portal Escola da Beleza responde contatos comerciais, propostas de parcerias e anotações técnicas em até 48 horas úteis após o envio deste formulário.
            </div>
          </section>

          {/* Form wrapper */}
          <section className="col-span-1 lg:col-span-7 bg-white border border-stone-200 p-6 sm:p-8 rounded-2xl shadow-sm text-left">
            {!sent ? (
              <form onSubmit={handleSend} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                      Seu Nome Completo
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Amanda Santos"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs p-3 bg-stone-50 border border-stone-200 focus:border-[#E6C5B3] focus:outline-none focus:bg-white rounded-lg text-stone-800 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                      Seu Endereço de E-mail
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: amanda@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-3 bg-stone-50 border border-stone-200 focus:border-[#E6C5B3] focus:outline-none focus:bg-white rounded-lg text-stone-800 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                      WhatsApp com DDD (Opcional)
                    </label>
                    <input
                      type="tel"
                      placeholder="Ex: (11) 99999-9999"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      className="w-full text-xs p-3 bg-stone-50 border border-stone-200 focus:border-[#E6C5B3] focus:outline-none focus:bg-white rounded-lg text-stone-800 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                      Motivo de Contato
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full text-xs p-3 bg-stone-50 border border-stone-200 focus:border-[#E6C5B3] focus:outline-none focus:bg-white rounded-lg text-stone-800 transition cursor-pointer"
                    >
                      <option value="Parceria ou Sugestões">Desejo fazer parceria comercial</option>
                      <option value="Dúvida Técnica">Dúvida sobre conteúdos/cursos</option>
                      <option value="Erro no site">Reportar erro ou problema visual no portal</option>
                      <option value="Anúncio Direto">Desejo comprar espaço publicitário (Banner)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-1">
                    Como podemos ajudar você?
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Escreva sua mensagem em detalhes aqui..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    className="w-full text-xs p-3 bg-stone-50 border border-stone-200 focus:border-[#E6C5B3] focus:outline-none focus:bg-white rounded-lg text-stone-800 transition"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center space-x-1.5 p-3 bg-stone-900 hover:bg-stone-800 text-white font-sans font-semibold text-xs tracking-wider uppercase rounded-lg transition duration-250 cursor-pointer shadow-sm disabled:bg-stone-400"
                  >
                    {loading ? (
                      <span>Enviando sua Mensagem...</span>
                    ) : (
                      <>
                        <Send size={13} />
                        <span>Enviar Mensagem ao Portal</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-6 sm:py-12 text-center space-y-4 max-w-md mx-auto">
                <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                  <CheckCircle size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Sua mensagem foi enviada!
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  Agradecemos seu contato prático, <strong>{name}</strong>! Uma resposta detalhada será enviada à caixa de e-mail identificada (<strong>{email}</strong>) o quanto antes.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="px-4 py-2 bg-[#FAF8F6] border border-stone-250 hover:bg-stone-50 rounded-lg text-xs font-semibold text-stone-700 cursor-pointer"
                  >
                    Escrever outro contato
                  </button>
                </div>
              </div>
            )}
          </section>

        </div>

        {/* Developer Sandbox - Simulador VIP Section */}
        <section className="mt-14 pt-8 border-t border-stone-200">
          <div className="bg-stone-50 border border-stone-200/80 rounded-2xl p-5 sm:p-6 text-left max-w-3xl">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#A67E6B] font-bold mb-2">
              Área de Teste & Auditoria (Simulador VIP)
            </h4>
            <p className="text-stone-600 text-xs leading-relaxed font-sans mb-4">
              Esta é uma seção interna para desenvolvedores e equipe de auditoria do Portal Escola da Beleza. Se desejar limpar o estado dos modais ou redefinir gatilhos de suporte para simular as experiências de novas leitoras do absoluto zero, utilize as ações rápidas abaixo.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  localStorage.removeItem('portal_modal_dismissed');
                  localStorage.removeItem('portal_leads');
                  alert('O estado do Modal VIP de Apostilas Gratuitas foi redefinido! Recarregue qualquer página e o modal aparecerá novamente ao rolar a página ou após alguns segundos.');
                  window.location.reload();
                }}
                className="inline-flex items-center space-x-1 bg-stone-900 hover:bg-stone-800 text-white text-[11px] font-sans font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition duration-150 cursor-pointer shadow-xs"
              >
                <span>Redefinir Modal VIP</span>
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('whatsapp_interacted');
                  alert('O estado do botão flutuante de WhatsApp foi redefinido! Recarregue a página para reativar o indicador e balão de atenção.');
                  window.location.reload();
                }}
                className="inline-flex items-center space-x-1 bg-white hover:bg-stone-50 text-stone-700 border border-stone-300 text-[11px] font-sans font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition duration-150 cursor-pointer shadow-xs"
              >
                <span>Redefinir Balão WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  localStorage.clear();
                  alert('Todo o armazenamento local (leads, contatos, interações e dismissals) foi completamente limpo!');
                  window.location.reload();
                }}
                className="inline-flex items-center space-x-1 bg-[#FDF2F2] hover:bg-[#FDE8E8] text-red-700 border border-red-200 text-[11px] font-sans font-bold uppercase tracking-wider px-4 py-2.5 rounded-lg transition duration-150 cursor-pointer shadow-xs"
              >
                <span>Limpar Todo o Cache</span>
              </button>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
};
