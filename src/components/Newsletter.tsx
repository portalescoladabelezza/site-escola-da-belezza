/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle, Award, Users } from 'lucide-react';

export const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('Geral');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Simulate local storage of leads
      const localLeads = JSON.parse(localStorage.getItem('portal_leads') || '[]');
      localLeads.push({ name, email, interest, date: new Date().toISOString() });
      localStorage.setItem('portal_leads', JSON.stringify(localLeads));
    }, 1200);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setInterest('Geral');
    setSubmitted(false);
  };

  return (
    <section className="bg-gradient-to-br from-[#FDF8F5] to-[#F7ECE6] border-y border-[#F2E8DF] py-14 sm:py-20 relative overflow-hidden">
      {/* Decorative vector effects */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#C49B66]/10 rounded-full translate-x-[-20%] translate-y-[-20%] blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#C49B66]/10 rounded-full translate-x-[20%] translate-y-[20%] blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Lead Social Proof badges */}
        <div className="inline-flex items-center space-x-2 bg-[#C49B66]/10 border border-[#C49B66]/35 rounded-full px-3.5 py-1 mb-4">
          <Users size={13} className="text-[#C49B66]" />
          <span className="text-[10px] sm:text-xs font-mono tracking-wide text-[#C49B66] font-bold uppercase">
            Mais de 14.800 iniciantes já cadastrados
          </span>
        </div>

        {!submitted ? (
          <div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold italic tracking-tighter text-[#1A1A1A]">
              Acelere sua Jornada no Mercado de Beleza
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed">
              Junte-se à nossa lista VIP e receba apostilas gratuitas, resenhas de produtos exclusivos, cupons de cursos parceiros e relatórios semanais de tendências direto no seu e-mail.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 bg-white p-5 sm:p-7 rounded-xl shadow-xs border border-[#F2E8DF] max-w-2xl mx-auto text-left space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#C49B66] uppercase tracking-wider mb-1">
                    Seu nome completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Maria Carolina"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs font-sans p-3 bg-[#F9F6F2] border border-[#E5D1B8] focus:border-[#C49B66] focus:ring-1 focus:ring-[#C49B66] focus:outline-none rounded-lg text-stone-800 transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-[#C49B66] uppercase tracking-wider mb-1">
                    Seu melhor E-mail
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Ex: maria.silva@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs font-sans p-3 bg-[#F9F6F2] border border-[#E5D1B8] focus:border-[#C49B66] focus:ring-1 focus:ring-[#C49B66] focus:outline-none rounded-lg text-stone-800 transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#C49B66] uppercase tracking-wider mb-1">
                  Qual área você mais quer aprender e faturar?
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full text-xs font-sans p-3 bg-[#F9F6F2] border border-[#E5D1B8] focus:border-[#C49B66] focus:ring-1 focus:ring-[#C49B66] focus:outline-none rounded-lg text-stone-800 transition cursor-pointer"
                >
                  <option value="Geral">Todas as Áreas da Beleza (Geral)</option>
                  <option value="Unhas">Nail Art & Manicure Profissional</option>
                  <option value="Cabelos">Cabeleireiro, Cortes & Coloração</option>
                  <option value="Maquiagem">Maquiagem Profissional & Noivas</option>
                  <option value="Sobrancelhas e Estética">Design de Sobrancelhas, Cílios & Estética</option>
                  <option value="Marketing e Empreendedorismo">Como Conquistar Clientes & Redes Sociais</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center space-x-2 p-3 bg-[#C49B66] hover:bg-[#B38A55] text-white text-xs font-sans font-bold tracking-wider uppercase rounded-lg transition duration-200 cursor-pointer disabled:bg-stone-500 shadow-sm"
                >
                  {loading ? (
                    <span>Registrando seu e-mail...</span>
                  ) : (
                    <>
                      <Mail size={15} />
                      <span>Quero Entrar na Lista VIP & Receber Apostilas</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-[10px] text-stone-400 font-sans leading-none pt-1">
                  Respeitamos sua privacidade. Nenhum spam será enviado. Cancele sua inscrição quando desejar.
                </p>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white p-8 sm:p-12 rounded-3xl shadow-sm border border-stone-100 max-w-xl mx-auto space-y-4">
            <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
              <CheckCircle size={28} />
            </div>
            <h3 className="text-2xl font-serif font-bold text-stone-900">
              Inscrição Confirmada, {name.split(' ')[0]}!
            </h3>
            <p className="text-stone-600 text-sm leading-relaxed">
              Enviamos um e-mail de boas-vindas com o seu link de download para a nossa <strong>Apostila Geral de Empreendedorismo na Beleza</strong>. Verifique também sua pasta de promoções ou spam.
            </p>
            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-col justify-center space-y-2">
              <div className="inline-flex items-center space-x-1.5 bg-[#FAF8F6] rounded-lg p-2 px-4 mx-auto text-xs text-stone-600">
                <Award size={14} className="text-[#C5A880]" />
                <span>Interesse selecionado: <strong>{interest}</strong></span>
              </div>
              <button
                onClick={handleReset}
                className="text-xs text-stone-400 hover:text-stone-600 underline cursor-pointer hover:font-medium transition-colors"
              >
                Cadastrar outro e-mail
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
