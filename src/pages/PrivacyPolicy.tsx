/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { ShieldCheck, Info } from 'lucide-react';
import { PageRoute } from '../types';

interface PrivacyPolicyProps {
  onNavigate: (route: PageRoute) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  // Set SEO metadata dynamically
  useEffect(() => {
    document.title = 'Política de Privacidade | Portal Escola da Beleza - Transparência e LGPD';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Leia a nossa Política de Privacidade. Conheça as diretrizes de tratamento de dados pessoais aplicadas pelo Portal Escola da Beleza conforme as regras da LGPD.'
      );
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <main className="bg-[#FEFCFB] dark:bg-[#120E0D] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        {/* Title and Header */}
        <section className="space-y-2 border-b border-stone-200 dark:border-[#332C28] pb-5">
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 dark:text-[#EDE6E2] tracking-tight flex items-center space-x-2">
            <ShieldCheck className="text-[#C5A880]" size={28} />
            <span>Política de Privacidade</span>
          </h1>
          <p className="text-stone-500 dark:text-[#A89D96] text-xs sm:text-sm font-sans">
            Transparência, conformidade com a LGPD e respeito total à segurança das suas informações.
          </p>
        </section>

        {/* Legal Pages Internal Link Navigation */}
        <div className="flex border-b border-stone-200 dark:border-[#332C28] gap-1 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => onNavigate({ type: 'privacy' })}
            className="px-4 py-2.5 rounded-t-lg text-xs font-sans font-bold uppercase tracking-wider transition shrink-0 cursor-pointer border-b-2 border-[#2D2522] dark:border-[#E6C9A8] text-[#2D2522] dark:text-[#E6C9A8] font-black"
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
            className="px-4 py-2.5 rounded-t-lg text-xs font-sans font-bold uppercase tracking-wider transition shrink-0 cursor-pointer text-stone-500 hover:text-stone-800 dark:hover:text-stone-300"
          >
            Política de Cookies
          </button>
        </div>

        {/* Document Content */}
        <div className="space-y-6 text-stone-700 dark:text-[#EDE6E2] text-xs sm:text-sm leading-relaxed font-sans mt-4">
          <div className="bg-amber-50/50 dark:bg-[#251E1A] rounded-xl p-4 flex items-start space-x-2.5 border border-amber-200/60 dark:border-amber-900/30">
            <Info size={16} className="text-amber-805 dark:text-[#E6C9A8] shrink-0 mt-0.5" />
            <p className="text-xs text-amber-900 dark:text-[#E6C9A8] leading-normal font-sans">
              <strong>Adequação à LGPD:</strong> Esta política foi projetada com base nos princípios de transparência e respeito à Lei Geral de Proteção de Dados (LGPD) e às melhores práticas da internet para portais editoriais independentes.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">1. Introdução</h2>
            <p>
              O <strong>Portal Escola da Beleza</strong> se compromete a proteger a privacidade e a segurança dos dados pessoais de todos os seus visitantes e leitores. Esta Política de Privacidade explica de forma clara e objetiva como lidamos com as informações de quem navega pelo nosso site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">2. Quem Somos</h2>
            <p>
              Somos o <strong>Portal Escola da Beleza</strong>, um canal web alternativo e gratuito, acessível através do domínio <code>portalescoladabelezza.com.br</code>. Atuamos como um portal de conteúdo focado em capacitação, beleza, carreira e empreendedorismo para profissionais e entusiastas de estética, cabelos, unhas e cuidados pessoais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">3. Quais Dados Podemos Coletar</h2>
            <p>
              Podemos coletar dois tipos de informações das pessoas que visitam nosso site:
            </p>
            <div className="pl-4 border-l-2 border-stone-200 dark:border-[#332C28] space-y-3 mt-2">
              <p>
                <strong>A) Dados fornecidos voluntariamente por você:</strong> Ao assinar nossa newsletter, fazer download de materiais didáticos gratuitos (como apostilas) ou preencher nosso formulário de contato, você pode nos fornecer voluntariamente informações de contato como seu nome completo, endereço de e-mail válido, preferências de aprendizado e mensagens de texto.
              </p>
              <p>
                <strong>B) Dados coletados automaticamente:</strong> Como na maioria dos portais modernos, quando você navega em nossas páginas, nosso servidor ou ferramentas integradas técnicas coletam informações técnicas genéricas não sensíveis de forma automática. Isso inclui dados como seu endereço de IP (mascarado ou geral), tipo de navegador de internet, dispositivo utilizado, sistema operacional, páginas visitadas, tempo gasto em cada artigo, termos de busca e dados coletados por meio de cookies.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">4. Como Usamos os Dados</h2>
            <p>
              Utilizamos os dados capturados estritamente com as seguintes finalidades úteis e transparentes:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600 dark:text-[#A89D96]">
              <li><strong>Envio de conteúdo útil:</strong> Enviar newsletters, guias gratuitos, novidades semanais e atualizações de artigos aos usuários cadastrados em nossa lista de e-mail.</li>
              <li><strong>Melhoria contínua da experiência:</strong> Analisar o desempenho técnico do site, velocidade de carregamento e usabilidade, a fim de garantir que nossos textos permaneçam bem formatados tanto em computadores quanto em celulares.</li>
              <li><strong>Monitoramento de tráfego e métricas gerais:</strong> Entender quais categorias de artigos (ex: carreira, unhas, cabelos) são de maior interesse para que possamos focar a geração de novos conteúdos de qualidade.</li>
              <li><strong>Links de afiliados e parcerias:</strong> Fornecer recomendações autênticas de produtos e cursos adequados aos interesses dos leitores, onde o portal pode, futuramente, receber comissões de venda sobre links de parceiros.</li>
              <li><strong>Exibição futura de anúncios de publicidade:</strong> Permitir a integração com sistemas de publicidade de terceiros (como Google AdSense) para exibir anúncios contextuais relevantes ao interesse do leitor, ajudando a financiar o portal.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">5. Compartilhamento de Dados com Terceiros</h2>
            <p>
              O Portal Escola da Beleza <strong>não vende, não aluga e não cede</strong> seus dados de e-mail ou dados de contato para nenhuma empresa de terceiros sob hipótese alguma. 
            </p>
            <p>
              Para prestar nossos serviços de forma adequada, podemos compartilhar dados operacionais anonimizados com ferramentas técnicas que atuam como fornecedoras de suporte ao site, tais como: serviços de hospedagem e servidores em nuvem, plataformas de envio de e-mail marketing (como Mailchimp ou similares para entrega de newsletters e apostilas), serviços estatísticos de monitoramento de tráfego (como ferramentas da família Google Analytics) e redes técnicas de publicidade automatizada.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">6. Cookies e Tecnologias Semelhantes</h2>
            <p>
              Utilizamos cookies para oferecer uma navegação otimizada aos leitores, salvando temporariamente pequenas informações de navegação no navegador. Para ver um descritivo completo de todos os tipos de cookies que podemos utilizar em nosso site e como você pode desativá-los, acesse diretamente a nossa <button onClick={() => onNavigate({ type: 'cookies' })} className="text-[#C49B66] dark:text-[#E6C9A8] hover:underline font-bold cursor-pointer">Política de Cookies</button>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">7. Direitos do Usuário Conforme a LGPD</h2>
            <p>
              Como titular dos dados de acordo com a Lei Geral de Proteção de Dados (LGPD), você é plenamente amparado por direitos específicos, incluindo:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-1 text-stone-605 dark:text-[#A89D96]">
              <li>Confirmar a existência do tratamento dos dados fornecidos por você.</li>
              <li>Acessar suas informações a qualquer momento.</li>
              <li>Solicitar a correção de dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a eliminação definitiva dos seus dados coletados em nossos formulários (como a newsletter).</li>
            </ul>
            <p className="mt-2">
              Caso você queira exercer seus direitos de remoção ou consulta de dados de contato, basta clicar no botão de desinscrição automática ("Cancelar inscrição") localizado no rodapé de todas as nossas newsletters semanais recebidas por e-mail ou solicitar através do e-mail oficial listado abaixo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">8. Segurança das Informações</h2>
            <p>
              Implementamos soluções de segurança padrão do mercado, incluindo o protocolo seguro de criptografia HTTPS (SSL), que protege as conexões e a transmissão de informações digitais contra acessos não autorizados. No entanto, é importante reforçar que nenhum método de armazenamento ou tráfego pela internet é plenamente imune a incidentes, exigindo que você também proteja sua navegação e login no seu dispositivo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">9. Links Externos</h2>
            <p>
              Nossos artigos contêm links para sites parceiros de terceiros, incluindo canais externos de formação profissional, cursos adicionais e e-books. Esta Política de Privacidade se aplica exclusivamente ao nosso portal. Não nos responsabilizamos pelo conteúdo, tratamento de dados ou práticas de privacidade adotadas por sites externos linkados. Recomendamos a consulta às políticas de privacidade de cada site visitado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">10. Privacidade de Menores de Idade</h2>
            <p>
              O Portal Escola da Beleza provê conteúdo puramente educativo e acadêmico para o público profissional e iniciantes de beleza no geral. Não coletamos intencionalmente informações identificáveis de crianças e adolescentes. Se tomarmos conhecimento de que dados de menores de idade foram coletados involuntariamente, providenciaremos a remoção imediata dos bancos de dados ativos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">11. Alterações Nesta Política de Privacidade</h2>
            <p>
              Esta política pode passar por atualizações periódicas a fim de refletir melhorias no site, novas integrações estruturais ou alterações legais de conformidade regulatória. Quando houver mudanças, atualizaremos a data de modificação indicada no final desta página. Recomendamos revisar esta seção periodicamente.
            </p>
          </section>

          <div className="bg-stone-50 dark:bg-[#1A1614] border border-stone-200 dark:border-[#332C28] p-5 rounded-2xl mt-8">
            <h3 className="font-sans font-bold text-[#1A1A1A] dark:text-[#EDE6E2] mb-1.5">Dúvidas e Contato</h3>
            <p className="text-stone-600 dark:text-[#A89D96] text-xs">
              Em caso de dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail: <a href="mailto:portalescoladabelezza@gmail.com" className="text-[#C49B66] font-bold hover:underline">portalescoladabelezza@gmail.com</a>
            </p>
            <p className="text-[10px] text-stone-400 mt-3 uppercase tracking-wider font-mono">Última atualização: 5 de junho de 2026</p>
          </div>
        </div>

      </div>
    </main>
  );
};
