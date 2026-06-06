/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { ShieldCheck, HeartHandshake } from 'lucide-react';
import { PageRoute } from '../types';

interface TermsOfUseProps {
  onNavigate: (route: PageRoute) => void;
}

export const TermsOfUse: React.FC<TermsOfUseProps> = ({ onNavigate }) => {
  // Set SEO metadata dynamically
  useEffect(() => {
    document.title = 'Termos de Uso | Portal Escola da Beleza - Informações e Regras';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Leia os Termos de Uso do Portal Escola da Beleza. Saiba mais sobre nossas responsabilidades, o uso permitido de conteúdo e isenção de resultados recomendados.'
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
            <span>Termos de Uso</span>
          </h1>
          <p className="text-stone-500 dark:text-[#A89D96] text-xs sm:text-sm font-sans">
            Regras de utilização, responsabilidades do usuário e isenções informativas profissionais do nosso portal.
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
            className="px-4 py-2.5 rounded-t-lg text-xs font-sans font-bold uppercase tracking-wider transition shrink-0 cursor-pointer border-b-2 border-[#2D2522] dark:border-[#E6C9A8] text-[#2D2522] dark:text-[#E6C9A8] font-black"
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
          
          <div className="bg-[#FFF9F6] dark:bg-[#251E1A] rounded-xl p-4 flex items-start space-x-2.5 border border-[#F3E5DE]/80 dark:border-amber-900/20">
            <HeartHandshake size={16} className="text-[#C49B66] shrink-0 mt-0.5" />
            <p className="text-xs text-stone-900 dark:text-[#E6C9A8] leading-normal font-sans">
              <strong>Aviso de Isenção de Resultados:</strong> Todo o conteúdo editorial do portal possui foco educacional e demonstrativo. É de responsabilidade individual do leitor aplicar as técnicas de forma prudente após certificar-se da segurança dos procedimentos.
            </p>
          </div>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar, navegar ou descarregar conteúdos informativos do <strong>Portal Escola da Beleza</strong> (através do endereço <code>portalescoladabelezza.com.br</code>), você declara que leu, compreendeu e concorda expressamente com os presentes Termos de Uso. Caso discorde de quaisquer termos especificados aqui, solicitamos que suspenda o acesso ou uso deste portal imediatamente.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">2. Sobre o Portal Escola da Beleza</h2>
            <p>
              O Portal Escola da Beleza provê guias e artigos sobre tendências, técnicas de embelezamento, dicas mercadológicas, ideias de negócios e resenhas críticas gratuitas. O portal funciona como um canal de divulgação informativa independente, sem cobrança obrigatória de qualquer taxa para visualização pública de nossos posts informativos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">3. Uso Permitido do Conteúdo</h2>
            <p>
              Você possui permissão pessoal e temporária não exclusiva de navegar no portal e ler nossos textos para fins educacionais ou de aprendizado próprio e profissional. É estritamente proibido utilizar o conteúdo do site para copiar dados de artigos em lote, revender os guias de material didático gratuitos ou desrespeitar os créditos autorais do portal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">4. Ausência de Garantia de Ganhos ou Resultados</h2>
            <p>
              Tratamos de assuntos de carreira, abertura de negócios e técnicas de embelezamento. No entanto, é fundamental deixar claro aos nossos leitores que:
            </p>
            <div className="pl-4 border-l-2 border-[#C49B66] space-y-2 mt-2">
              <p className="font-semibold text-stone-900 dark:text-[#EDE6E2]">
                O Portal Escola da Beleza NÃO garante de forma alguma lucros financeiros, obtenção de vagas profissionais, faturamento garantido de empresas ou sucesso absoluto na prestação de procedimentos.
              </p>
              <p>
                O sucesso em qualquer área do setor da estética e beleza depende única e exclusivamente do empenho do indivíduo, qualidade de execução técnica do profissional, conformidade sanitária local da clínica, cursos presenciais ou online realizados individualmente, portfólio de serviços prestados e dinâmicas regionais de mercado.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">5. Responsabilidade do Usuário</h2>
            <p>
              O leitor reconhece que a aplicação prática de técnicas que envolvem calor (secadores, modeladores), lâminas de corte, produtos químicos cosméticos, procedimentos em unhas, cílios ou pele é de sua integral responsabilidade. Recomendamos amplamente ter a certificação apropriada, entender alergias cutâneas específicas de seus modelos e seguir as orientações dos fabricantes de cosméticos e órgãos de vigilância sanitária antes de prestar procedimentos em terceiros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">6. Links de Terceiros e Afiliados</h2>
            <p>
              Podemos destacar links apontando para sites parceiros, canais externos ou páginas de vendas de cursos de beleza e estética desenvolvidos por especialistas externos. Algumas destas recomendações contêm identificação de <strong>links de afiliados</strong>, onde o Portal Escola da Beleza é remunerado financeiramente de forma parcial se a compra de determinado serviço ou infoproduto for efetivada no destino final.
            </p>
            <p>
              O usuário deve exercer inteligência própria, pesquisar a reputação jurídica, ementas de aulas e termos de compra dos respectivos portais provedores antes de efetivar contratações ou compras e reconhecer que todos os canais externos possuem políticas de uso e suporte exclusivas e próprias.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">7. Direitos Autorais e Propriedade Intelectual</h2>
            <p>
              O design, textos autorais dos artigos, estrutura visual dos cards de categorias, logomarca do Portal Escola da Beleza e os materiais didáticos virtuais são obras protegidas pelas leis e tratados internacionais de copyright e propriedade intelectual. Não é concedida nenhuma licença de redistribuição comercial dos artigos a terceiros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">8. Publicidade e Anúncios Patrocinados</h2>
            <p>
              Para cobrir custos de hospedagem e servidores de internet, exibimos espaços informativos de anúncios de forma demarcada. O portal atua exibindo estes anúncios através de terceiros parceiros técnicos. Não nos responsabilizamos pelo teor final de propagandas genéricas entregues dinamicamente de forma automatizada de acordo com seu interesse pessoal de pesquisa prévia pelas redes de anúncios.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">9. Limitação de Responsabilidade</h2>
            <p>
              Dentro dos limites da legislação aplicável, o Portal Escola da Beleza se exime de responsabilidades por danos indiretos, lucros cessantes, perdas profissionais decorrentes do uso do site, falhas no carregamento de rede ou links que eventualmente estejam inoperantes no ar.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-base sm:text-lg font-serif font-bold text-[#1A1A1A] dark:text-[#EDE6E2]">10. Contato e Esclarecimentos</h2>
            <p>
              Qualquer esclarecimento técnico ou requisições de revisão poderão ser expedidos para o canal de e-mail: <a href="mailto:portalescoladabelezza@gmail.com" className="text-[#C49B66] font-bold hover:underline">portalescoladabelezza@gmail.com</a>.
            </p>
          </section>

          <div className="bg-stone-50 dark:bg-[#1A1614] border border-stone-200 dark:border-[#332C28] p-5 rounded-2xl mt-8">
            <h3 className="font-sans font-bold text-[#1A1A1A] dark:text-[#EDE6E2] mb-1.5">Dúvidas e Contato</h3>
            <p className="text-stone-600 dark:text-[#A89D96] text-xs">
              Em caso de dúvidas gerais sobre nossos Termos de Uso, entre em contato pelo e-mail: <a href="mailto:portalescoladabelezza@gmail.com" className="text-[#C49B66] font-bold hover:underline">portalescoladabelezza@gmail.com</a>
            </p>
            <p className="text-[10px] text-stone-400 mt-3 uppercase tracking-wider font-mono">Última atualização: 5 de junho de 2026</p>
          </div>
        </div>

      </div>
    </main>
  );
};
