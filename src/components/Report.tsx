import React from 'react';

const Page = ({ children, className = "bg-white", style, noBreak = false }: { children: React.ReactNode, className?: string, style?: React.CSSProperties, noBreak?: boolean }) => (
  <div className={`page-wrapper w-full max-w-[794px] h-[1123px] shadow-xl flex-shrink-0 relative overflow-hidden print:shadow-none print:-m-[1px] ${noBreak ? '' : 'page-break-after'} ${className}`} style={style}>
    {children}
  </div>
);

export default function Report() {
  return (
    <div id="report-wrapper" className="flex flex-col items-center gap-8 print:block print:gap-0 font-sans text-[15px] leading-relaxed text-gray-900 w-full transition-all duration-300">
      
      {/* PAGE 1 */}
      <Page>
        <div className="bg-[#111827] text-white pt-16 pb-12 px-12">
          <div className="mb-8">
            <img 
              src="https://leydux.com.br/wp-content/uploads/2026/05/leydux.png" 
              alt="Leydux Logo" 
              className="h-10 object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4 uppercase tracking-tight max-w-2xl leading-tight">
            Diagnóstico Técnico de Segurança Jurídica e Patrimônio de Marca
          </h1>
          <p className="text-sm text-gray-300 tracking-widest leading-relaxed max-w-2xl">
            Análise de Risco Estratégico e Vulnerabilidade de Identidade Visual
          </p>
        </div>

        <div className="h-2 w-full bg-[#C5A059]"></div>

        <div className="px-12 py-8">
          {/* Info Box */}
          <div className="bg-slate-50 border-l-4 border-slate-300 p-5 mb-8 text-sm space-y-2.5">
            <p><span className="font-semibold text-slate-800">Documento:</span> Relatório de Auditoria de Propriedade Intelectual</p>
            <p><span className="font-semibold text-slate-800">Destinatário:</span> Direção Executiva | Nexdrones (NEXUAV Soluções Aéreas)</p>
            <p><span className="font-semibold text-slate-800">Elaborado por:</span> Leydux Agência e Consultoria</p>
            <p><span className="font-semibold text-slate-800">Status:</span> <span className="text-slate-500">Confidencial / Urgente</span></p>
          </div>

          {/* Section 1 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center border-l-4 border-cyan-500 pl-3">
              1. Sumário Executivo
            </h2>
            <div className="space-y-3 text-slate-700">
              <p>
                O objetivo deste documento é apresentar uma análise técnica e jurídica a respeito da atual identidade visual da <strong>Nexdrones (NEXUAV)</strong>. Embora a empresa possua um certificado de registro de marca mista concedido e em vigor junto ao Instituto Nacional da Propriedade Industrial (INPI), uma auditoria de mercado identificou uma vulnerabilidade estrutural crítica no ativo mais importante da empresa: o seu símbolo visual.
              </p>
              <p>
                Foi constatado que o ícone que compõe a marca é oriundo da biblioteca pública de elementos do Canva. Esse fato remove o caráter de exclusividade do design e expõe a empresa a riscos severos de imagem, litígios judiciais e fragilidade jurídica irremediável face a concorrentes nacionais e internacionais.
              </p>
            </div>
          </div>

          {/* Image proof */}
          <div className="mt-2">
            <a 
              href="https://leydux.com.br/wp-content/uploads/2026/05/Captura-de-Tela-2026-05-26-as-11.47.27.png" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block cursor-zoom-in transition-opacity hover:opacity-90"
              title="Clique para ampliar a imagem"
            >
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 shadow-sm flex justify-center items-center h-[189px]">
                <img 
                  src="https://leydux.com.br/wp-content/uploads/2026/05/Captura-de-Tela-2026-05-26-as-11.47.27.png" 
                  alt="Comprovação do Símbolo - Canva" 
                  className="max-w-full h-full object-contain rounded"
                />
              </div>
            </a>
            <p className="text-xs text-center text-slate-500 mt-2 font-medium">Fig 1. Captura de tela comprovando a presença do elemento na biblioteca do Canva. Clique para ampliar.</p>
          </div>
        </div>
      </Page>

      {/* PAGE 2 */}
      <Page>
        <div className="px-12 py-12">
          {/* Section 2 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center border-l-4 border-cyan-500 pl-3">
              2. O Ponto Cego do INPI: Por que a marca foi aprovada?
            </h2>
            <div className="space-y-4 text-slate-700">
              <p className="italic text-slate-600 border-l-2 border-slate-200 pl-4">
                "Se o símbolo é público, por que o INPI aprovou e concedeu o registro da marca?"
              </p>
              <p>
                O processo de avaliação do INPI baseia-se estritamente nos ditames da Lei da Propriedade Industrial (LPI - Lei nº 9.279/96). O exame de mérito realizado pelo órgão possui limitações operacionais claras:
              </p>
              <ul className="list-disc pl-5 space-y-2 marker:text-cyan-600">
                <li><strong>Isolamento de Base de Dados:</strong> O examinador do INPI realiza buscas de anterioridade exclusivamente dentro do próprio banco de dados do Instituto, focando em marcas já registradas ou depositadas dentro das classes de atividade pretendidas (no caso, Classes 12 e 35).</li>
                <li><strong>Ausência de Varredura Externa:</strong> O INPI não realiza pesquisas no Google, em bancos de imagens internacionais ou em plataformas de design como o Canva para checar a autoria ou originalidade de símbolos.</li>
                <li><strong>Princípio da Inércia e Oposição:</strong> O sistema do INPI depende da manifestação de terceiros. Como nenhum concorrente ou interessado apresentou oposição no prazo legal de 60 dias após a publicação do pedido para denunciar que o símbolo era um template público, o órgão avaliou apenas a combinação do nome "NEXUAV" com a imagem e concedeu o registro de forma mista.</li>
              </ul>
              <p>
                Portanto, a concessão do registro pelo INPI atesta apenas que não há outra empresa registrada <em>com o mesmo nome e visual combinado</em> no mesmo segmento, mas não purifica a origem ilegal do uso do símbolo segundo os termos de direitos autorais da própria plataforma criadora.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center border-l-4 border-cyan-500 pl-3">
              3. A Fragilidade Jurídica e a Licença Não-Exclusiva
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Os termos de uso globais do Canva são categóricos: <strong>é expressamente proibido registrar como marca comercial própria qualquer logotipo que utilize elementos gráficos, ícones ou vetores de sua biblioteca de conteúdos.</strong>
              </p>
              <p>
                Ao utilizar um elemento do Canva, o usuário não adquire a propriedade do desenho, mas sim uma <strong>licença de uso não-exclusiva</strong>. Isso significa que a plataforma mantém o direito de licenciar o exato mesmo símbolo para qualquer outra pessoa ou empresa no mundo, inclusive para concorrentes diretos da Nexdrones.
              </p>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-5 mt-6 rounded-r-md">
                <h3 className="text-red-800 font-bold mb-2 tracking-wide text-sm uppercase">Risco de Anulação do Registro (PAN)</h3>
                <p className="text-sm text-[#7f1d1de6] leading-relaxed">
                  O certificado emitido pelo INPI não é absoluto. Qualquer terceiro interessado ou concorrente que se sinta prejudicado pode, a qualquer momento dentro do prazo de 180 dias após a concessão, protocolar um <strong>Processo Administrativo de Nulidade (PAN)</strong>, ou posteriormente uma Ação Judicial de Nulidade. O argumento legal para derrubar o registro da Nexdrones é cristalino: apropriação indevida de obra de terceiros sob licença pública e falta de distintividade intrínseca (Art. 124, incisos VIII e XIV da LPI). Em termos jurídicos, a marca está construída sobre solo instável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 3 */}
      <Page>
        <div className="px-12 py-12">
          {/* Section 4 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center border-l-4 border-cyan-500 pl-3">
              4. Risco de Imagem e Contaminação Reputacional
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Para além do ecossistema jurídico, o risco mais devastador para a operação da Nexdrones é o de ordem <strong>reputacional e pragmática</strong>. Como o símbolo é de domínio público de fato, a empresa perde o controle total sobre onde e por quem a sua identidade visual é utilizada.
              </p>
              <p>Caso uma empresa terceira que utilize o mesmo símbolo se envolva em:</p>
              <ul className="list-disc pl-5 space-y-1 marker:text-slate-400">
                <li>Escândalos financeiros, fraudes ou esquemas de corrupção;</li>
                <li>Acidentes operacionais graves com repercussão midiática;</li>
                <li>Práticas criminosas ou condutas que firam frontalmente os valores éticos e os princípios da Nexdrones;</li>
              </ul>
              <p>
                O público consumidor, por associação visual imediata, ligará o símbolo à sua marca. Como o desenho é de livre acesso, <strong>a Nexdrones estará legalmente de mãos atadas</strong>. Não será possível enviar uma notificação extrajudicial (Cease and Desist) ou mover um processo de abstenção de uso, pois os infratores ou envolvidos possuem o mesmo direito de uso do layout que a Nexdrones. A marca fica refém da idoneidade de estranhos.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center border-l-4 border-cyan-500 pl-3">
              5. Evidências Práticas de Desproteção Global
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Para comprovar que o mercado já pulverizou o uso desta exata identidade visual, listamos abaixo organizações, marcas e canais ao redor do mundo que utilizam o mesmo elemento gráfico do Canva atualmente:
              </p>
              
              <div className="overflow-hidden mt-3 border border-slate-200 rounded-md">
                <table className="w-full text-sm text-left">
                  <tbody>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-4 font-semibold text-slate-800 w-1/2">Aplicativo Setara (Apple Store)</td>
                      <td className="py-2.5 px-4 text-cyan-700 truncate max-w-[200px]"><a href="https://apps.apple.com/id/app/setara/id6449661469">apps.apple.com/id/app/setara/id6449661469</a></td>
                    </tr>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-4 font-semibold text-slate-800 w-1/2">Almond Insurance</td>
                      <td className="py-2.5 px-4 text-cyan-700 truncate max-w-[200px]"><a href="https://facebook.com/almondinsurance">facebook.com/almondinsurance</a></td>
                    </tr>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-4 font-semibold text-slate-800 w-1/2">GrowthAsist Corporate</td>
                      <td className="py-2.5 px-4 text-cyan-700 truncate max-w-[200px]"><a href="https://linkedin.com/showcase/growthasist/">linkedin.com/showcase/growthasist/</a></td>
                    </tr>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-4 font-semibold text-slate-800 w-1/2">Canta Esthetic</td>
                      <td className="py-2.5 px-4 text-cyan-700 truncate max-w-[200px]"><a href="https://youtube.com/@canta.esthetic">youtube.com/@canta.esthetic</a></td>
                    </tr>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-4 font-semibold text-slate-800 w-1/2">Middlefork Law Firm</td>
                      <td className="py-2.5 px-4 text-cyan-700 truncate max-w-[200px]"><a href="https://middleforklaw.com/">middleforklaw.com/</a></td>
                    </tr>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-4 font-semibold text-slate-800 w-1/2">Ambops Global</td>
                      <td className="py-2.5 px-4 text-cyan-700 truncate max-w-[200px]"><a href="https://ambops.com/contact-7">ambops.com/contact-7</a></td>
                    </tr>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-4 font-semibold text-slate-800 w-1/2">Dixon Consulting II</td>
                      <td className="py-2.5 px-4 text-cyan-700 truncate max-w-[200px]"><a href="https://dixonconsultingii.com/">dixonconsultingii.com/</a></td>
                    </tr>
                    <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="py-2.5 px-4 font-semibold text-slate-800 w-1/2">Grupo Ascendi (Glassdoor)</td>
                      <td className="py-2.5 px-4 text-cyan-700 truncate max-w-[200px]"><a href="https://glassdoor.com.br/Ascendi">glassdoor.com.br/Ascendi</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-slate-500 mt-2">
                A presença do símbolo em setores diversos demonstra o desgaste estético e a total perda de diferenciação da marca Nexdrones no mercado digital global.
              </p>
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 4 */}
      <Page>
        <div className="px-12 py-12 h-full flex flex-col">
          {/* Section 6 */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center border-l-4 border-cyan-500 pl-3">
              6. A Regra Tipográfica (Fontes)
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                No que tange às fontes utilizadas na criação do logotipo dentro do Canva, o cenário regulatório é distinto. O Canva permite que as fontes disponíveis na plataforma sejam utilizadas em composições comerciais de logotipos e registradas. O INPI, ao conceder a marca mista, protege a palavra escrita naquela disposição, e não o desenho isolado da letra.
              </p>
              <p>
                Contudo, a restrição técnica permanece ativa: a Nexdrones possui o direito de usar a fonte <em>como imagem final exportada</em>. Se a empresa necessitar extrair o arquivo original da fonte para utilizá-lo como sistema de digitação em softwares externos (como Adobe, Figma) ou incorporá-lo na programação do site institucional (Elementor/WordPress), precisará adquirir uma licença comercial independente (Desktop/Webfont) direto com a distribuidora da fonte.
              </p>
            </div>
          </div>

          {/* Section 7 */}
          <div className="mb-auto">
            <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center border-l-4 border-cyan-500 pl-3">
              7. Direcionamento Estratégico e Solução
            </h2>
            <div className="space-y-4 text-slate-700">
              <p>
                Permanecer com a atual identidade visual coloca o crescimento e a segurança da Nexdrones sob constante ameaça. Para mitigar integralmente esses riscos e alinhar a marca a um posicionamento premium, seguro e exclusivo, o plano de ação recomendado consiste em:
              </p>
              
              <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mt-6 rounded-r-md">
                <h3 className="text-emerald-800 font-bold mb-4 tracking-wide text-sm uppercase">Rebranding e Redesign da Identidade Visual</h3>
                <ul className="space-y-3 text-sm text-[#064e3be6] leading-relaxed">
                  <li><strong className="text-emerald-900">1. Descarte do Símbolo Atual:</strong> Substituir o ícone genérico por um símbolo proprietário, desenvolvido de forma autoral e exclusiva pela nossa agência, traduzindo a real essência e tecnologia da Nexdrones.</li>
                  <li><strong className="text-emerald-900">2. Manutenção da Base Nominal:</strong> Preservar o nome de mercado que já foi validado pelo INPI, mantendo o histórico de marca.</li>
                  <li><strong className="text-emerald-900">3. Nova Proteção no INPI:</strong> Efetuar o depósito de um novo pedido de Marca Mista com o design inédito e exclusivo, garantindo proteção jurídica real de 100% contra cópias ou usos indevidos.</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm font-medium text-slate-500 pb-8 pt-8 border-t border-dashed border-slate-200 mt-8">
            <p>Este relatório visa resguardar o patrimônio intangível da Nexdrones.</p>
            <p className="mt-1 font-bold text-slate-700 uppercase tracking-widest text-[11px]">Leydux Agência e Consultoria</p>
          </div>
        </div>
      </Page>

      {/* PAGE 5 (Marcos Fonseca) */}
      <Page className="text-white" style={{ backgroundColor: '#0f1115' }}>
        {/* Subtle background glow effect */}
        <div data-html2canvas-ignore="true" className="hide-in-pdf absolute top-0 right-0 w-96 h-96 bg-[#C5A059] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div data-html2canvas-ignore="true" className="hide-in-pdf absolute bottom-10 right-10 w-64 h-64 bg-[#C5A059] rounded-full blur-[100px] opacity-10 pointer-events-none z-0"></div>

        <div className="flex flex-col h-full w-full relative z-10">
          {/* Photo on top for A4 Portrait layout */}
          <div className="w-full h-[50%] relative">
             <img 
               src="https://leydux.com.br/wp-content/uploads/2026/05/MARCOS-FONSECA.jpg" 
               alt="Marcos Fonseca" 
               className="absolute inset-0 w-full h-full object-cover object-[center_0%]"
             />
             {/* Gradient removed to prevent html2canvas error. A solid block could be used if needed but simpler is better for PDF generation. */}
             <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0f1115] to-transparent" data-html2canvas-ignore="true"></div>
          </div>
          
          {/* Text underneath */}
          <div className="w-full h-[50%] flex flex-col justify-center px-12 pb-12 pt-0">
            <div className="mb-4">
                <img 
                  src="https://leydux.com.br/wp-content/uploads/2026/05/leydux.png" 
                  alt="Leydux Logo" 
                  className="h-7 object-contain opacity-60 mb-6"
                />
            </div>
            
            <h2 className="text-4xl font-bold tracking-tight mb-2 text-slate-100">
              Marcos Fonseca
            </h2>
            <p className="text-[#C5A059] font-medium tracking-wide uppercase text-xs mb-6 border-b border-[rgba(255,255,255,0.1)] pb-3 inline-block w-full">
              Estrategista em Posicionamento, Imagem Digital e Construção de Marcas
            </p>
            
            <div className="space-y-4 text-slate-300 font-light leading-relaxed text-[15px]">
              <p>
                Ao longo de uma trajetória construída nos bastidores, estratégias de comunicação visual foram desenvolvidas e executadas para os maiores players do mercado digital. O foco absoluto do trabalho está na intersecção entre o design estético rigoroso e o domínio da percepção humana.
              </p>
              <p>
                Uma comunicação clara e intencional é estruturada para garantir que a sua presença exale confiança. É através de um reposicionamento metódico, alinhado ao mais alto nível de autoridade, que o espaço de reconhecimento, verdade e propósito é ocupado.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] mb-3 font-semibold">
                Clientes & Projetos Relevantes
              </h3>
              <div className="flex flex-wrap gap-2">
                {['João Menna', 'Keila Neves', 'Shirleyson Kaisser', 'Grupo Primo', 'Thiago Nigro', 'Mari Perzi', 'Elisiane Moreira'].map(client => (
                  <span key={client} className="px-3 py-1.5 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.05)] text-slate-200 text-xs rounded-full shadow-sm">
                    {client}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-[rgba(255,255,255,0.05)]">
              <a 
                href="https://www.omarcosfonseca.com.br/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center text-sm font-medium text-white hover:text-[#C5A059] transition-colors group"
              >
                <svg className="w-4 h-4 mr-3 text-[#C5A059] group-hover:text-[#E8C377] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Conheça o trabalho: omarcosfonseca.com.br
              </a>
            </div>
          </div>
        </div>
      </Page>

      {/* PAGE 6 (Rebranding Proposal) */}
      <Page className="text-white" style={{ backgroundColor: '#0f1115' }} noBreak>
        <div data-html2canvas-ignore="true" className="hide-in-pdf absolute top-0 right-0 w-96 h-96 bg-[#C5A059] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
        <div data-html2canvas-ignore="true" className="hide-in-pdf absolute bottom-10 left-10 w-64 h-64 bg-[#C5A059] rounded-full blur-[100px] opacity-10 pointer-events-none"></div>

        <div className="h-full flex flex-col justify-center px-16 py-16 relative z-10 w-[794px]">
          <div className="mb-12">
            <img 
              src="https://leydux.com.br/wp-content/uploads/2026/05/leydux.png" 
              alt="Leydux Logo" 
              className="h-9 object-contain opacity-70"
            />
          </div>
          
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-slate-100">
            Proposta de Rebranding
          </h2>
          <div className="h-1 w-24 bg-[#C5A059] mb-10"></div>
          
          <div className="space-y-6 text-slate-300 font-light leading-relaxed text-[15px] mb-10 pr-4">
            <p>
              A <strong>Leydux</strong> preza pela máxima segurança, exclusividade e integridade na construção de marcas. Nosso processo de rebranding é fundamentado no rigor técnico, assegurando que cada elemento visual criado seja autoral e totalmente proprietário.
            </p>
            <p>
              Garantimos a estruturação correta de <strong>licenciamento e exclusividade</strong>, alinhada a todas as normas do <strong>INPI</strong> (Instituto Nacional da Propriedade Industrial). Com o nosso direcionamento, a empresa terá a certeza de operar com um ativo de marca blindado juridicamente, exclusivo de fato e de direito, eliminando os riscos de imagem e processos por uso indevido de elementos de terceiros.
            </p>
          </div>
          
          <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-xl p-8 mb-8 backdrop-blur-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-[#C5A059]"></div>
             <h3 className="text-[#C5A059] font-bold tracking-widest uppercase text-[11px] mb-4">
                Investimento
             </h3>
             <div className="flex items-baseline gap-3 mb-2">
               <span className="text-5xl font-bold text-white tracking-tight">12x R$ 799,97</span>
               <span className="text-[#C5A059] font-medium tracking-wide uppercase text-[11px]">no cartão</span>
             </div>
             <p className="text-slate-400 mb-6 text-sm">ou <strong className="text-white font-medium">R$ 8.000,00</strong> à vista</p>
             
             <div className="pt-5 border-t border-[rgba(255,255,255,0.1)]">
                <p className="text-[13px] text-slate-300 flex items-start">
                  <svg className="w-4 h-4 mr-3 text-[#C5A059] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><strong>Condição de Pagamento:</strong> 50% para iniciar o projeto, e o restante (50%) na entrega.</span>
                </p>
             </div>
          </div>
        </div>
      </Page>

    </div>
  );
}
