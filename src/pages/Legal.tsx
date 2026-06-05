/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Info, FileText, HeartHandshake } from 'lucide-react';

interface LegalProps {
  initialTab?: 'privacy' | 'terms' | 'cookies';
}

export const Legal: React.FC<LegalProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'cookies'>(initialTab);

  // Sync if navigation param triggers unmount/reload shifts
  useEffect(() => {
    setActiveTab(initialTab);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [initialTab]);

  return (
    <main className="bg-[#FEFCFB] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-8">
        
        {/* Main Title and Intro */}
        <section className="space-y-2 border-b border-stone-200 pb-5">
          <h1 className="text-2xl sm:text-4xl font-serif font-bold text-stone-900 tracking-tight flex items-center space-x-2">
            <ShieldCheck className="text-[#C5A880]" size={28} />
            <span>Documentações Legais & Transparência</span>
          </h1>
          <p className="text-stone-500 text-xs sm:text-sm">
            Nossos termos e políticas garantem total adequação jurídica à LGPD e às diretrizes dos principais programas de monetização.
          </p>
        </section>

        {/* Tab triggers */}
        <div className="flex border-b border-stone-200 gap-1 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2.5 rounded-t-lg text-xs font-sans font-bold uppercase tracking-wider transition shrink-0 ${
              activeTab === 'privacy'
                ? 'border-b-2 border-[#2D2522] text-[#2D2522] font-black'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Política de Privacidade
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2.5 rounded-t-lg text-xs font-sans font-bold uppercase tracking-wider transition shrink-0 ${
              activeTab === 'terms'
                ? 'border-b-2 border-[#2D2522] text-[#2D2522] font-black'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Termos de Uso
          </button>
          <button
            onClick={() => setActiveTab('cookies')}
            className={`px-4 py-2.5 rounded-t-lg text-xs font-sans font-bold uppercase tracking-wider transition shrink-0 ${
              activeTab === 'cookies'
                ? 'border-b-2 border-[#2D2522] text-[#2D2522] font-black'
                : 'text-stone-500 hover:text-stone-800'
            }`}
          >
            Política de Cookies
          </button>
        </div>

        {/* Tab Contents: Privacy */}
        {activeTab === 'privacy' && (
          <div className="space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed font-sans mt-4">
            <div className="bg-amber-50/50 rounded-xl p-4 flex items-start space-x-2.5 border border-amber-200">
              <Info size={16} className="text-amber-800 shrink-0 mt-0.5" />
              <p className="text-xs text-amber-900 leading-normal">
                <strong>Adequação à LGPD:</strong> Esta política foi desenhada especificamente de acordo com as exigências da Lei Geral de Proteção de Dados (Lei nº 13.709/2018) do ordenamento jurídico brasileiro.
              </p>
            </div>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">1. Coleta e Uso de Dados Pessoais</h2>
            <p>
              O <strong>Portal Escola da Beleza</strong> valoriza perfeitamente a privacidade de seus usuários. Quando você navega pelo site, interage com o formulário de contato ou opta por cadastrar seu e-mail para receber nossas apostilas e newsletter VIP, coletamos informações voluntárias tais como nome completo, endereço de e-mail válido, área de interesse preferencial e número de telefone celular.
            </p>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">2. Finalidade do Processamento das Informações</h2>
            <p>
              Todos os registros e dados fornecidos pelo usuário no domínio portalescoladabelezza.com.br são armazenados de maneira segura com as seguintes finalidades explícitas:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-stone-600">
              <li>Envio de materiais didáticos gratuitos (apostilas virtuais de estética, guias de unhas e sobrancelhas);</li>
              <li>Envio semanal de conteúdos educativos, resenhas de produtos e publicidades de marcas parceiras;</li>
              <li>Responder feedbacks ou solicitações de parcerias solicitadas de maneira autônoma no formulário de contato Fale Conosco;</li>
              <li>Melhoria e customização da experiência de carregamento e navegação do portal.</li>
            </ul>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">3. Segurança dos Seus Dados</h2>
            <p>
              Adotamos métodos e antivírus contra invasões digitais e criptografia padrão SSL para resguardar a transferência de qualquer dado confidencial. Jamais compartilharemos, venderemos, alugaremos ou disponibilizaremos suas informações a marcas de terceiros sem a sua aprovação explícita em nosso sistema.
            </p>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">4. Direitos do Titular (Usuário)</h2>
            <p>
              Conforme a LGPD, o titular poderá requerer a qualquer momento o acesso, correção, anonimização, bloqueio ou eliminação dos seus dados arquivados do nosso repositório. Para isso, basta clicar no botão de cancelamento visível no rodapé de nossos emails semanais ou emitir uma mensagem à nossa administração em <code>portalescoladabelezza@gmail.com</code>.
            </p>
          </div>
        )}

        {/* Tab Contents: Terms */}
        {activeTab === 'terms' && (
          <div className="space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed font-sans mt-4">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">1. Aceitação dos Termos</h2>
            <p>
              Ao navegar, compartilhar ou descarregar arquivos do domínio portalescoladabelezza.com.br, você concorda de maneira livre e integral com estes Termos de Uso. Caso não concorde com qualquer uma das disposições descritas abaixo, solicitamos que suspenda o uso do portal imediatamente.
            </p>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">2. Isenção de Responsabilidade Profissional</h2>
            <p>
              Todas as informações disponibilizadas nos artigos, tutoriais e FAQs do Portal Escola da Beleza possuem cunho exclusivamente educativo e informativo. Eles refletem visões teóricas e técnicas aplicadas de forma prática. O portal e seus colunistas não se responsabilizam por reações alérgicas, imperfeições estéticas, queimaduras ou cortes decorrentes do mau uso de técnicas químicas (decoloração, alisamento capilar, tinturas), uso de cosméticos, estufas ou pinçamentos executados por terceiros baseados neste portal. Recomenda-se acompanhamento e treinamento homologado oficial antes do uso clínico de qualquer intervenção de beleza em outrem.
            </p>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">3. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo textual autoral original, layout das páginas, infográficos, tipografias e dados catalogados no Portal Escola da Beleza são protegidos pelas leis federais brasileiras de propriedade industrial e copyright de software. Fica expressamente vedado copiar, republicar, retransmitir ou de qualquer maneira revender estes textos ou apostilas de beleza sem prévia expressa anuência por escrito da nossa gerência administrativa.
            </p>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">4. Monetização e Afiliados Exteriorizados</h2>
            <p>
              Como portal aberto e gratuito, veiculamos anúncios automáticos providenciados por plataformas parceiras (Google AdSense e parceiros de redes nativas de publicidade direta) e fornecemos links recomendados afiliados para a compra de cursos parceiros externos. A decisão de aquisição de qualquer produto ou infoproduto promovido é exclusivamente de decisão do usuário final, aplicando-se os termos de venda dos respectivos portais provedores.
            </p>
          </div>
        )}

        {/* Tab Contents: Cookies */}
        {activeTab === 'cookies' && (
          <div className="space-y-6 text-stone-700 text-xs sm:text-sm leading-relaxed font-sans mt-4">
            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">1. O que são Cookies?</h2>
            <p>
              Cookies são pequenos arquivos temporários salvos automaticamente no navegador do seu computador ou smartphone quando você acessa o Portal Escola da Beleza. Eles servem para lembrar suas preferências, customizar suas buscas e nos indicar estatísticas agregadas anonimizadas do nosso fluxo de tráfego.
            </p>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">2. Cookies que Utilizados neste Portal</h2>
            <p>
              Para manter o site otimizado, veloz e monetizado de forma segura, o domínio portalescoladabelezza.com.br opera com os seguintes cookies classificados:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-stone-200 rounded-lg">
                <thead className="bg-[#FAF8F6] text-stone-700 uppercase font-mono text-[10px]">
                  <tr>
                    <th className="p-3 border-b border-stone-200">Tipo de Cookie</th>
                    <th className="p-3 border-b border-stone-200">Finalidade Prática</th>
                    <th className="p-3 border-b border-stone-200">Exemplos Comuns</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-150 text-stone-600">
                  <tr>
                    <td className="p-3 font-semibold">Essenciais</td>
                    <td className="p-3">Carregamento ágil das páginas, assepsia das sessões, segurança geral e controle do estado da navegação.</td>
                    <td className="p-3">Sessão temporária do servidor.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Analíticos</td>
                    <td className="p-3">Análise estatística de cliques, termos de buscas inseridos e postagens que possuem maior tempo de leitura ativa.</td>
                    <td className="p-3">Google Analytics, relatórios internos do portal.</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Publicitários</td>
                    <td className="p-3">Exibição de banners AdSense contextualizados baseados no interesse de navegação prévia da leitora.</td>
                    <td className="p-3">Google AdSense, DoubleClick.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-lg sm:text-xl font-serif font-bold text-stone-900">3. Como controlar ou recusar o uso de Cookies</h2>
            <p>
              O usuário é totalmente livre para desativar cookies alterando as diretivas de privacidade exclusivas do seu próprio web browser (Opera, Google Chrome, Safari, Firefox, Edge). Contudo, alertamos que a recusa total deles pode limitar ligeiramente o carregamento dinâmico de alguns elementos interativos, formulários de contato e widgets de compartilhamento em mídias corporativas.
            </p>
          </div>
        )}

      </div>
    </main>
  );
};
