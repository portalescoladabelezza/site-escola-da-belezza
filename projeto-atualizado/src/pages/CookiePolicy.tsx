/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { PageRoute } from '../types';

interface CookiePolicyProps {
  onNavigate: (route: PageRoute) => void;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ onNavigate }) => {
  // Set SEO metadata dynamically
  useEffect(() => {
    document.title = 'Política de Cookies | Portal Escola da Beleza - Uso de Tecnologias';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Consulte a nossa Política de Cookies. Saiba como o Portal Escola da Beleza armazena e utiliza dados para customizar sua experiência e prover publicidade relevante de forma segura.'
      );
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleClearConsent = () => {
    localStorage.removeItem('portal_cookies_consent');
    alert('O seu consentimento de cookies foi removido do armazenamento local! O banner para escolha reaparecerá no rodapé da página.');
    window.location.reload();
  };

  return (
    <main className="bg-[#FEFCFB] dark:bg-[#120E0D] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        {/* Title and Header */}
        <section className="space-y-2 border-b border-stone-200 dark:border-[#332C28] pb-5">
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-[#EDE6E2] tracking-tight flex items-center space-x-2">
            <ShieldCheck className="text-[#C5A880]" size={28} />
            <span>Política de Cookies</span>
          </h1>
          <p className="text-stone-500 dark:text-[#A89D96] text-xs sm:text-sm font-sans">
            Saiba o que são cookies, como os utilizamos para personalizar recursos e como você pode gerenciá-los em seu navegador.
          </p>
        </section>

        {/* Legal Pages Internal Link Navigation */}
        <div className="flex border-b border-stone-200 dark:border-[#332C28] gap-1 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => onNavigate({ type: 'privacy' })}
            className="px-4 py-2.5 rounded-t-lg text-xs font-sans font-bold uppercase tracking-wider transition shrink-0 cursor-pointer text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
          >
            Política de Privacidade
          </button>
          <button
            onClick={() => onNavigate({ type: 'terms' })}
            className="px-4 py-2.5 rounded-t-lg text-xs font-sans font-bold uppercase tracking-wider transition shrink-0 cursor-pointer text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
          >
            Termos de Uso
          </button>
          <button
            onClick={() => onNavigate({ type: 'cookies' })}
            className="px-4 py-2.5 rounded-t-lg text-xs font-sans font-bold uppercase tracking-wider transition shrink-0 cursor-pointer border-b-2 border-[#2D2522] dark:border-[#E6C9A8] text-[#2D2522] dark:text-[#E6C9A8] font-black"
          >
            Política de Cookies
          </button>
        </div>

        {/* Document Content */}
        <div className="space-y-6 text-stone-700 dark:text-[#EDE6E2] text-xs sm:text-sm leading-relaxed font-sans mt-4">
          
          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">1. O que são Cookies?</h2>
            <p>
              Os cookies são pequenos arquivos de texto criados no seu computador ou dispositivo móvel pelo navegador de internet quando você acessa este site de conteúdo. Os cookies ajudam a armazenar escolhas de preferências e otimizar velocidade de carregamento, fornecendo métricas para o portal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">2. Como Usamos Cookies</h2>
            <p>
              Utilizamos cookies técnicos de forma segura para permitir a usabilidade básica do site, oferecer respostas aos cliques do usuário, memorizar se você fechou ou não determinados modais explicativos e possibilitar a coleta de interações anonimizadas estritamente estatísticas.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">3. Tipos de Cookies que Podemos Utilizar</h2>
            <p>
              As seguintes classes de cookies podem ser aproveitadas futuramente de forma regular no site para manter nossa integridade, monitorar desempenho técnico e ativar a futura monetização:
            </p>
            <div className="space-y-4 pl-4 border-l-2 border-stone-200 dark:border-[#332C28] mt-2">
              <div>
                <p className="font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">A) Cookies Estritamente Necessários</p>
                <p className="text-xs text-stone-500 dark:text-[#A89D96]">
                  Esses cookies são indispensáveis para o funcionamento técnico básico do portal, como manter sessões seguras e memorizar em qual rota você está navegando no momento. Sem eles, recursos fundamentais de interface podem se desestabilizar.
                </p>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">B) Cookies de Preferências</p>
                <p className="text-xs text-stone-500 dark:text-[#A89D96]">
                  Servem para lembrar configurações escolhidas por você anteriormente, tais como a opção de contraste no Modo Claro ou Escuro (Dark Mode) ou se você fechou ou aceitou o banner de consentimento de privacidade.
                </p>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">C) Cookies de Análise e Desempenho (Analytics)</p>
                <p className="text-xs text-stone-500 dark:text-[#A89D96]">
                  Podemos carregar cookies estatísticos de rastreamento geral que ajudam a entender de maneira puramente agrupada quantas leitoras navegam pelo portal diariamente, qual o navegador mais popular e quais artigos geram maior tempo de estudo técnico. Essas análises não são usadas para expor sua identidade privada.
                </p>
              </div>
              <div>
                <p className="font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">D) Cookies de Publicidade e Redes de Afiliados</p>
                <p className="text-xs text-stone-500 dark:text-[#A89D96]">
                  Para viabilizar nossa futura monetização programada, utilizaremos canais de publicidade nativa (como o Google AdSense) e plataformas parceiras que usam cookies para rastrear compras via links de afiliados. Esses cookies ajudam a indicar a originação de vendas recomendadas de cursos parceiros ou exibir anúncios que correspondam estritamente ao interesse prévio de navegação dos usuários em geral.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">4. Como Gerenciar Cookies no Seu Navegador</h2>
            <p>
              Você é o único detentor do controle sobre se deseja permitir ou negar os cookies no seu dispositivo. Caso prefira desativar ou apagar cookies salvos anteriormente, você pode fazer isso de forma individual acessando as configurações avançadas e de segurança do seu próprio navegador (Opera, Safari, Google Chrome, Mozilla Firefox, Microsoft Edge). 
            </p>
            <p className="text-xs text-stone-500 dark:text-[#A89D96]">
              Observação importante: Ao navegar sem cookies ou aplicar filtros estritos, recursos como a manutenção de suas configurações de preferência do portal, download direto de determinados e-books ou certas caixas de recomendação dinâmica de conteúdo poderão ter seu desempenho técnico afetado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">5. Como Alterar Suas Preferências de Cookies no Portal</h2>
            <p>
              Se você já tomou uma decisão em nosso site utilizando nosso banner inferior de consentimento (aceitou ou recusou), você pode tranquilamente redefinir essa escolha a qualquer momento. Para limpar o consentimento atual e fazer com que o portal exiba novamente a barra de consentimento inicial de cookies, você pode clicar no link abaixo:
            </p>
            <button
              onClick={handleClearConsent}
              className="mt-2 px-5 py-2.5 bg-[#C49B66] text-white hover:bg-[#b08754] text-xs font-semibold rounded-lg shadow-xs transition duration-150 cursor-pointer border-none"
            >
              Resetar Escolha & Reabrir Banner de Cookies
            </button>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">6. Contato por E-mail</h2>
            <p>
              Para emitir solicitações de apoio ou consultas técnicas sobre como o site opera com estes cookies, você dispõe do e-mail oficial: <a href="mailto:portalescoladabelezza@gmail.com" className="text-[#C49B66] font-bold hover:underline">portalescoladabelezza@gmail.com</a>.
            </p>
          </section>

          <div className="bg-stone-50 dark:bg-[#1A1614] border border-stone-200 dark:border-[#332C28] p-5 rounded-2xl mt-8">
            <h3 className="font-sans font-bold text-[#1A1A1A] dark:text-[#EDE6E2] mb-1.5">Dúvidas e Contato</h3>
            <p className="text-stone-600 dark:text-[#A89D96] text-xs">
              Em caso de dúvidas sobre esta Política de Cookies, entre em contato pelo e-mail: <a href="mailto:portalescoladabelezza@gmail.com" className="text-[#C49B66] font-bold hover:underline">portalescoladabelezza@gmail.com</a>
            </p>
            <p className="text-[10px] text-stone-400 mt-3 uppercase tracking-wider font-mono">Última atualização: 5 de junho de 2026</p>
          </div>
        </div>

      </div>
    </main>
  );
};
