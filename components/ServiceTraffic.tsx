import React from 'react';
import { ArrowRight, TrendingUp, Target, BarChart2, DollarSign, Filter, MousePointerClick, ShieldCheck, BarChart, ArrowUpRight, Search, Instagram, Linkedin } from 'lucide-react';
import AIStrategy from './AIStrategy';

interface ServiceProps {
  onOpenContact: () => void;
  externalFormData?: any;
  externalStrategy?: string | null;
}

const results = [
  {
    category: "Clínica de Fertilidade",
    metric: "+6.700 Leads",
    description: "Captação massiva de pacientes particulares em apenas 12 meses. Estruturação de campanhas de alta conversão para preencher a agenda médica com previsibilidade.",
    tags: ["Google Ads", "Meta Ads", "Saúde"],
    logo: "https://www.leandrotelles.com.br/wp-content/uploads/2023/10/fiv-sao-paulo-png.png",
    logoClass: "scale-[1.3]"
  },
  {
    category: "Indústria e Varejo",
    metric: "ROAS 58x",
    description: "Organização completa do setor de marketing e posicionamento digital. Otimização extrema de verba que gerou um retorno de 5.824% sobre o investimento.",
    tags: ["E-commerce", "Branding", "Performance"],
    logo: "https://www.leandrotelles.com.br/wp-content/uploads/2023/10/taurus-png.png",
    logoClass: ""
  },
  {
    category: "Locadora de Veículos",
    metric: "0 a 400 Carros",
    description: "Case de hipercrescimento (Growth). A locadora saiu do zero absoluto para uma frota de 400 veículos locados em menos de 1 ano de operação.",
    tags: ["Growth", "Google Ads", "Escala"],
    logo: "https://www.leandrotelles.com.br/wp-content/uploads/2023/10/motory-png.png",
    logoClass: ""
  },
   {
    category: "Incorporadora",
    metric: "1.050 Vendas",
    description: "Transformação digital completa. Migramos a verba de jornal para estratégias online, resultando na venda de mais de mil apartamentos.",
    tags: ["Imobiliário", "Lançamento", "Estratégia"],
    logo: "https://www.leandrotelles.com.br/wp-content/uploads/2023/10/construtora-rio-branco-png.png",
    logoClass: "scale-[1.35]"
  }
];

const ServiceTraffic: React.FC<ServiceProps> = ({ onOpenContact, externalFormData, externalStrategy }) => {
  return (
    <div className="pt-0">
      {/* 1. Hero Section - Visual Style Matched */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-neutral-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 mb-8 shadow-sm">
              <TrendingUp className="w-4 h-4 text-neutral-600" />
              <span className="text-neutral-600 text-xs font-bold tracking-wide uppercase">Performance & Escala</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-8">
              Gestão de Anúncios com <br/>
              <span className="relative inline-block text-neutral-900">
                 <span className="relative z-10">Estratégia, IA e Performance</span>
                 <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-300/60 -z-0 rotate-1"></span>
              </span>
            </h1>

            <p className="mt-2 max-w-4xl text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed font-medium">
              Chega de queimar dinheiro impulsionando post. Nossa gestão de tráfego é baseada em dados, testes A/B e obsessão por reduzir seu custo de aquisição (CAC).
            </p>

            <button 
              onClick={onOpenContact}
              className="group inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-neutral-900 bg-yellow-400 hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-1"
            >
              Quero Escalar Minhas Vendas
              <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
        </div>
      </div>

      {/* 2. Intro Section (New Content) */}
      <section className="py-24 bg-neutral-50 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6 leading-tight">
                     A maioria das agências vende cliques. <br/>
                     <span className="text-yellow-500">A LT vende clientes.</span>
                   </h2>
                   <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                     O mercado está cheio de gestores que comemoram &quot;custo por clique barato&quot; ou &quot;alcance viral&quot;, mas não sabem responder quanto isso gerou em vendas.
                   </p>
                   <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                     Na LT Marketing, <strong>métrica de vaidade não entra no relatório</strong>. Nosso time, liderado por especialistas em performance e dados, utiliza inteligência artificial e táticas avançadas de segmentação para encontrar o seu cliente ideal no momento exato da compra.
                   </p>
                   
                   <div className="space-y-4">
                      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                              <DollarSign className="text-green-600 w-5 h-5"/>
                          </div>
                          <div>
                              <h4 className="font-bold text-neutral-900">Menor Custo por Aquisição (CPA)</h4>
                              <p className="text-sm text-neutral-500">Pagamos menos para trazer o cliente certo.</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                          <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center shrink-0">
                              <TrendingUp className="text-neutral-600 w-5 h-5"/>
                          </div>
                          <div>
                              <h4 className="font-bold text-neutral-900">Escala com Segurança</h4>
                              <p className="text-sm text-neutral-500">Aumentamos o investimento conforme o retorno se confirma.</p>
                          </div>
                      </div>
                      <div className="flex items-center gap-4 bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
                          <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center shrink-0">
                              <Target className="text-purple-600 w-5 h-5"/>
                          </div>
                          <div>
                              <h4 className="font-bold text-neutral-900">Rastreamento Total</h4>
                              <p className="text-sm text-neutral-500">Sabemos exatamente de onde veio cada real faturado.</p>
                          </div>
                      </div>
                   </div>
                </div>
                <div className="relative">
                   {/* Background updated: removed rotate-3 and added blur-xl for a cleaner look */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-neutral-600 to-neutral-800 rounded-3xl blur-xl opacity-20"></div>
                   <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-100 relative z-10">
                       <h3 className="font-bold text-neutral-900 mb-6 text-xl">Funil de Conversão LT</h3>
                       <div className="space-y-2">
                           <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200 text-center w-full">
                               <span className="font-bold text-neutral-700">Impressões (Alcance)</span>
                           </div>
                           <div className="bg-neutral-100 p-4 rounded-lg border border-neutral-200 text-center w-[90%] mx-auto">
                               <span className="font-bold text-neutral-700">Cliques Qualificados</span>
                           </div>
                           <div className="bg-neutral-200 p-4 rounded-lg border border-neutral-300 text-center w-[75%] mx-auto">
                               <span className="font-bold text-neutral-800">Leads / Checkout</span>
                           </div>
                           <div className="bg-yellow-400 p-4 rounded-lg border border-yellow-500 text-center w-[60%] mx-auto shadow-lg transform scale-105">
                               <span className="font-black text-neutral-900 text-lg">VENDAS (ROAS)</span>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* 3. Platforms (Nossas Armas) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-neutral-900">Dominamos o ecossistema completo de aquisição</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {/* Google Ads */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:border-yellow-400 transition-colors flex flex-col h-full group">
                    <div className="h-12 w-12 mb-6 flex items-center justify-center bg-yellow-100 rounded-full text-yellow-600">
                        <Search size={24} />
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-2 text-lg">Google Ads <span className="text-xs font-normal text-neutral-500 block">(Fundo de Funil)</span></h3>
                    <p className="text-sm text-neutral-600 leading-relaxed flex-grow">
                        Capturamos quem já está procurando pelo seu produto. Apareça no topo quando seu cliente estiver com o cartão na mão.
                    </p>
                    <div className="mt-4 pt-4 border-t border-neutral-50 text-xs font-bold text-neutral-400">
                        Search • Shopping • YouTube
                    </div>
                 </div>

                 {/* Meta Ads */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:border-yellow-400 transition-colors flex flex-col h-full group">
                    <div className="h-12 w-12 mb-6 flex items-center justify-center bg-yellow-100 rounded-full text-yellow-600">
                        <Instagram size={24} />
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-2 text-lg">Meta Ads <span className="text-xs font-normal text-neutral-500 block">(Geração de Demanda)</span></h3>
                    <p className="text-sm text-neutral-600 leading-relaxed flex-grow">
                        Facebook e Instagram. Usamos criativos persuasivos e IA para despertar o desejo em quem ainda não te conhece, mas tem o perfil ideal.
                    </p>
                    <div className="mt-4 pt-4 border-t border-neutral-50 text-xs font-bold text-neutral-400">
                        Feed • Stories • Reels
                    </div>
                 </div>

                 {/* LinkedIn Ads */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:border-yellow-400 transition-colors flex flex-col h-full group">
                    <div className="h-12 w-12 mb-6 flex items-center justify-center bg-yellow-100 rounded-full text-yellow-600">
                        <Linkedin size={24} />
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-2 text-lg">LinkedIn Ads <span className="text-xs font-normal text-neutral-500 block">(B2B & High Ticket)</span></h3>
                    <p className="text-sm text-neutral-600 leading-relaxed flex-grow">
                        Chegamos nos decisores das empresas. A estratégia perfeita para tickets altos e vendas complexas (B2B).
                    </p>
                    <div className="mt-4 pt-4 border-t border-neutral-50 text-xs font-bold text-neutral-400">
                        Decisores • C-Level • B2B
                    </div>
                 </div>

                 {/* Remarketing */}
                 <div className="bg-white p-8 rounded-2xl shadow-sm border border-neutral-100 hover:border-yellow-400 transition-colors flex flex-col h-full group">
                    <div className="h-12 w-12 mb-6 flex items-center justify-center bg-yellow-100 rounded-full text-yellow-600">
                        <MousePointerClick size={24} />
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-2 text-lg">Remarketing <span className="text-xs font-normal text-neutral-500 block">(Fechamento)</span></h3>
                    <p className="text-sm text-neutral-600 leading-relaxed flex-grow">
                        Ninguém compra na primeira visita. Criamos sistemas que &quot;perseguem&quot; o interessado de forma estratégica até a conversão.
                    </p>
                    <div className="mt-4 pt-4 border-t border-neutral-50 text-xs font-bold text-neutral-400">
                        Recuperação • LTV • Oferta
                    </div>
                 </div>
            </div>
        </div>
      </section>

      {/* 4. Methodology (Metodologia LT) */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 mb-6">
                        <Filter className="w-4 h-4 text-yellow-400" />
                        <span className="text-yellow-400 text-xs font-bold uppercase tracking-wide">O Diferencial LT</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                        O Método LT de Tráfego: <br/>
                        <span className="text-neutral-400">Dados + Criativo + Tecnologia.</span>
                    </h2>
                    <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
                        Não basta apertar botões. Nossa gestão segue um ciclo rigoroso de otimização contínua.
                    </p>
                    
                    <div className="space-y-8">
                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-yellow-400 text-xl shrink-0">1</div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Diagnóstico & Setup</h4>
                                <p className="text-sm text-neutral-400 leading-relaxed">Auditamos suas contas, instalamos pixels de rastreamento avançado e configuramos as metas de conversão. Sem dados, não há jogo.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-yellow-400 text-xl shrink-0">2</div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Criação de Oferta & Ads</h4>
                                <p className="text-sm text-neutral-400 leading-relaxed">Nossa equipe cria anúncios que convertem. Copywriting persuasivo e design que para o scroll.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-yellow-400 text-xl shrink-0">3</div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Gestão & Otimização Diária</h4>
                                <p className="text-sm text-neutral-400 leading-relaxed">Acompanhamos as campanhas todos os dias. Cortamos o que não funciona e escalamos o que dá lucro.</p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center font-bold text-yellow-400 text-xl shrink-0">4</div>
                            <div>
                                <h4 className="font-bold text-white text-lg mb-1">Relatórios de Inteligência</h4>
                                <p className="text-sm text-neutral-400 leading-relaxed">Você recebe dashboards claros. Sem &quot;internetês&quot;, apenas a visão do que importa para o seu negócio.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Dashboard Visual */}
                <div className="relative">
                     <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 border border-neutral-700 relative z-10 shadow-2xl">
                         <div className="flex justify-between items-center mb-8 border-b border-neutral-700 pb-4">
                             <div className="flex items-center gap-3">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="font-bold text-neutral-300 ml-2 text-sm">Dashboard Performance</span>
                             </div>
                             <BarChart2 className="text-yellow-400 opacity-80"/>
                         </div>
                         <div className="space-y-8">
                             <div>
                                 <div className="flex justify-between text-sm mb-2">
                                     <span className="text-neutral-400">Investimento Mensal</span>
                                     <span className="font-mono text-white">R$ 15.000,00</span>
                                 </div>
                                 <div className="w-full bg-neutral-700 h-2 rounded-full overflow-hidden">
                                     <div className="bg-neutral-500 w-[60%] h-full"></div>
                                 </div>
                             </div>
                             <div>
                                 <div className="flex justify-between text-sm mb-2">
                                     <span className="text-neutral-400">Vendas Confirmadas</span>
                                     <span className="font-mono text-green-400 font-bold">R$ 184.320,00</span>
                                 </div>
                                 <div className="w-full bg-neutral-700 h-2 rounded-full overflow-hidden">
                                     <div className="bg-green-500 w-[90%] h-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                                 </div>
                             </div>
                             
                             <div className="grid grid-cols-2 gap-4 mt-6">
                                 <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700">
                                     <p className="text-neutral-500 text-xs uppercase font-bold mb-1">ROAS (Retorno)</p>
                                     <p className="text-2xl font-black text-yellow-400">12.2x</p>
                                 </div>
                                 <div className="bg-neutral-800/50 p-4 rounded-xl border border-neutral-700">
                                     <p className="text-neutral-500 text-xs uppercase font-bold mb-1">Custo/Venda</p>
                                     <p className="text-2xl font-black text-white">R$ 12,40</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                     {/* Decorative Badge */}
                     <div className="absolute -bottom-6 -right-6 bg-green-500 text-white p-6 rounded-2xl shadow-xl z-20 hidden md:block animate-bounce-slow">
                         <div className="flex items-center gap-2 mb-1">
                            <TrendingUp size={20} className="text-white"/>
                            <span className="text-xs font-bold uppercase">Crescimento</span>
                         </div>
                         <p className="font-black text-3xl">+450%</p>
                     </div>
                </div>
            </div>
        </div>
      </section>

      {/* 5. Results (Copied from Home/Portfolio) */}
      <div className="w-full bg-neutral-900 py-20 border-y border-neutral-800 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
                <h3 className="text-sm font-bold text-yellow-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <BarChart size={16} />
                    Resultados Comprovados
                </h3>
                <p className="text-3xl font-black text-white">
                    Números que transformam negócios
                </p>
            </div>
            <button 
                onClick={onOpenContact}
                className="text-white border-b border-yellow-400 pb-1 hover:text-yellow-400 transition-colors flex items-center gap-2 text-sm font-bold"
            >
                Quero ter esses resultados <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((item, index) => (
                <div key={index} className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 p-6 rounded-2xl hover:border-yellow-400/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="h-16 flex items-center bg-white/10 rounded-xl px-4 py-2 max-w-[85%]">
                                <img 
                                  src={item.logo} 
                                  alt={item.category} 
                                  className={`h-full w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-all duration-300 ${item.logoClass || ''}`} 
                                />
                            </div>
                            <ArrowUpRight className="text-neutral-400 group-hover:text-yellow-400 transition-colors" size={24} />
                        </div>
                        <span className="text-xs font-bold text-neutral-300 uppercase tracking-wide block mb-2">
                            {item.category}
                        </span>
                        <p className="text-3xl xl:text-4xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors tracking-tight">
                            {item.metric}
                        </p>
                        <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                            {item.description}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-semibold text-white bg-neutral-700/50 px-2 py-0.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Authority (Gestão Sênior) */}
      <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-200">
                  <div className="flex flex-col md:flex-row gap-12 items-center">
                      <div className="flex-1">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-neutral-200 mb-6">
                            <ShieldCheck className="w-4 h-4 text-green-600" />
                            <span className="text-neutral-600 text-xs font-bold uppercase tracking-wide">Autoridade Técnica</span>
                           </div>
                          <h2 className="text-3xl font-black text-neutral-900 mb-6">Gestão Sênior. Nada de estagiários cuidando do seu dinheiro.</h2>
                          <p className="text-neutral-600 mb-6 text-lg">
                              Sua conta será supervisionada por nosso especialista em tráfego e conversão, e nossa equipe de alta performance.
                          </p>
                          <p className="text-neutral-600 mb-8">
                              Aqui, tratamos sua verba de mídia como se fosse nossa. Responsabilidade fiscal, transparência total e foco no ROI. Somos parceiros oficiais Google Partner e Meta Business Partner.
                          </p>
                      </div>
                      <div className="flex-shrink-0">
                          <img 
                            src="https://www.leandrotelles.com.br/wp-content/uploads/2023/12/marketing-partners.png.webp" 
                            alt="Google Partner & Meta Business Partner" 
                            className="w-64 h-auto opacity-90 mix-blend-multiply"
                          />
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. AI Strategy Section */}
      <AIStrategy onOpenContact={onOpenContact} externalFormData={externalFormData} externalStrategy={externalStrategy} />

      {/* 8. CTA Final */}
      <section className="bg-yellow-400 py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">Pare de deixar dinheiro na mesa.</h2>
              <p className="text-xl text-neutral-800 mb-10 max-w-2xl mx-auto font-medium">
                  Se você já investe em anúncios e sente que poderia vender mais, ou se quer começar do jeito certo (profissional), nós temos o plano ideal.
              </p>
              <button 
                onClick={onOpenContact}
                className="bg-neutral-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-neutral-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
              >
                  FALAR COM UM ESPECIALISTA EM TRÁFEGO
                  <ArrowRight size={20} />
              </button>
          </div>
      </section>
    </div>
  );
};

export default ServiceTraffic;