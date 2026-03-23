import React, { useEffect, useState } from 'react';
import { ArrowRight, TrendingUp, Target, Users, BarChart3, ChevronDown, ChevronUp, Lightbulb, CheckCircle2, Play } from 'lucide-react';

interface CasesProps {
  onOpenContact: () => void;
}

const mainCasesData = [
  {
    client: "Clínica de Olhos Modelo",
    niche: "Oftalmologia",
    title: "Aumento de 315% em cirurgias particulares",
    description: "A clínica dependia fortemente de convênios e indicações boca a boca. Implementamos um funil de captação no Google Ads focado exclusivamente em cirurgias refrativas e de catarata, atraindo pacientes com alta intenção de agendamento.",
    metrics: [
      { label: "Aumento em Cirurgias", value: "+315%" },
      { label: "Redução no Custo por Lead", value: "-42%" },
      { label: "ROI das Campanhas", value: "8.5x" }
    ],
    image: "https://www.leandrotelles.com.br/wp-content/uploads/2024/09/Depoimento-dra-adriana-corpa-clinica-modelo.webp",
    youtubeId: "IpzaORXN7UM", // Placeholder
    color: "bg-blue-50 text-blue-700 border-blue-200"
  },
  {
    client: "Dra. Rafaela Roschel",
    niche: "Ginecologia e Reprodução Humana",
    title: "Captação previsível para tratamentos de alto ticket",
    description: "Estratégia focada em Meta Ads e Google Ads para atrair casais buscando tratamentos de fertilidade (FIV). Criamos uma jornada de conscientização e conversão que educou os pacientes e construiu autoridade antes mesmo da primeira consulta.",
    metrics: [
      { label: "Novos Pacientes/Mês", value: "+45" },
      { label: "Aumento de Faturamento", value: "+280%" },
      { label: "Custo por Agendamento", value: "R$ 85" }
    ],
    image: "https://www.leandrotelles.com.br/wp-content/uploads/2024/05/Rafaela-Rochel-FIV.jpg",
    youtubeId: "IpzaORXN7UM", // Placeholder
    color: "bg-rose-50 text-rose-700 border-rose-200"
  },
  {
    client: "Dr. Henrique Noronha",
    niche: "Médico Empreendedor",
    title: "Transição 100% para atendimentos particulares",
    description: "O objetivo era o descredenciamento total de planos de saúde. Através de um posicionamento de autoridade no Instagram e campanhas de fundo de funil no Google, lotamos a agenda com pacientes particulares em menos de 6 meses.",
    metrics: [
      { label: "Pacientes Particulares", value: "100%" },
      { label: "Aumento no Ticket Médio", value: "+150%" },
      { label: "Lista de Espera", value: "3 semanas" }
    ],
    image: "https://www.leandrotelles.com.br/wp-content/uploads/2025/06/depoimento-dr-henrique-noronha.jpg",
    youtubeId: "IpzaORXN7UM", // Placeholder
    color: "bg-emerald-50 text-emerald-700 border-emerald-200"
  },
  {
    client: "iFinc",
    niche: "Assessoria Financeira B2B",
    title: "Escala na captação de leads qualificados B2B",
    description: "Reestruturação completa das campanhas de pesquisa para atrair empresários e diretores financeiros buscando soluções de crédito e reestruturação. Foco total em qualificação de leads para otimizar o tempo do time comercial.",
    metrics: [
      { label: "Leads Qualificados", value: "+400%" },
      { label: "Taxa de Conversão Comercial", value: "18%" },
      { label: "Crescimento YoY", value: "2.5x" }
    ],
    image: "https://www.leandrotelles.com.br/wp-content/uploads/2025/05/case-de-sucesso-ifinc.jpg",
    youtubeId: "IpzaORXN7UM", // Placeholder
    color: "bg-slate-100 text-slate-700 border-slate-300"
  }
];

const secondaryCasesData = [
  {
    id: 1,
    client: "FIV São Paulo",
    niche: "Clínica de Fertilidade",
    metric: "+6.700 Leads",
    brief: "Captação massiva de pacientes particulares em apenas 12 meses. Estruturação de campanhas de alta conversão para preencher a agenda médica com previsibilidade.",
    tags: ["Google Ads", "Meta Ads", "Saúde"],
    logo: "https://www.leandrotelles.com.br/wp-content/uploads/2023/10/fiv-sao-paulo-png.png",
    logoClass: "scale-[1.3]",
    whatWeDo: "Criamos campanhas de alta intenção no Google Ads direcionadas para uma Landing Page específica de tratamentos de fertilidade, focada em acolhimento e autoridade.",
    why: "Tratamentos de fertilidade exigem extrema confiança. O paciente pesquisa ativamente, mas precisa sentir segurança na estrutura e no corpo clínico antes de agendar.",
    results: "Geração de mais de 6.700 leads qualificados em 12 meses, lotando a agenda de consultas particulares."
  },
  {
    id: 2,
    client: "Taurus",
    niche: "Indústria e Varejo",
    metric: "ROAS 58x",
    brief: "Organização completa do setor de marketing e posicionamento digital. Otimização extrema de verba que gerou um retorno de 5.824% sobre o investimento.",
    tags: ["E-commerce", "Branding", "Performance"],
    logo: "https://www.leandrotelles.com.br/wp-content/uploads/2023/10/taurus-png.png",
    logoClass: "",
    whatWeDo: "Reestruturação completa do e-commerce e campanhas de performance focadas no público-alvo de alta intenção de compra.",
    why: "A marca já tinha reconhecimento, mas o tráfego não estava sendo convertido eficientemente em vendas no ambiente digital.",
    results: "Retorno sobre investimento publicitário (ROAS) de 58x, multiplicando o faturamento online."
  },
  {
    id: 3,
    client: "Motory",
    niche: "Locadora de Veículos",
    metric: "0 a 400 Carros",
    brief: "Case de hipercrescimento (Growth). A locadora saiu do zero absoluto para uma frota de 400 veículos locados em menos de 1 ano de operação.",
    tags: ["Growth", "Google Ads", "Escala"],
    logo: "https://www.leandrotelles.com.br/wp-content/uploads/2023/10/motory-png.png",
    logoClass: "",
    whatWeDo: "Implementamos uma máquina de aquisição agressiva no Google Ads focada em motoristas de aplicativo e locação mensal.",
    why: "O mercado de locação é altamente competitivo. Precisávamos de uma oferta clara e um funil de vendas rápido para garantir a locação imediata dos veículos adquiridos.",
    results: "Crescimento exponencial, atingindo 400 carros locados em tempo recorde de menos de 1 ano."
  },
  {
    id: 4,
    client: "Construtora Rio Branco",
    niche: "Incorporadora",
    metric: "1.050 Vendas",
    brief: "Transformação digital completa. Migramos a verba de jornal para estratégias online, resultando na venda de mais de mil apartamentos.",
    tags: ["Imobiliário", "Lançamento", "Estratégia"],
    logo: "https://www.leandrotelles.com.br/wp-content/uploads/2023/10/construtora-rio-branco-png.png",
    logoClass: "scale-[1.35]",
    whatWeDo: "Digitalização do processo de captação de leads imobiliários, substituindo mídias tradicionais por campanhas segmentadas no Meta e Google Ads.",
    why: "O custo de aquisição no offline estava insustentável e sem rastreabilidade. O digital permitiu focar no público com real potencial de financiamento.",
    results: "Mais de 1.050 unidades vendidas exclusivamente através de leads gerados pelas campanhas digitais."
  }
];

const Cases: React.FC<CasesProps> = ({ onOpenContact }) => {
  const [expandedCase, setExpandedCase] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-neutral-50 min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-neutral-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 border border-neutral-700 mb-8 shadow-sm">
            <TrendingUp className="w-4 h-4 text-yellow-400" />
            <span className="text-yellow-400 text-xs font-bold tracking-wide uppercase">Cases de Sucesso</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Resultados que <span className="text-yellow-400">falam por si.</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
            Não vendemos promessas, entregamos previsibilidade. Conheça as histórias de clínicas e empresas que transformaram seus resultados com a metodologia da LT Marketing.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <p className="text-4xl font-black text-white">R$ 50M+</p>
              <p className="text-sm text-neutral-400 mt-1">Gerados para clientes</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-neutral-700 mt-2"></div>
            <div className="text-center">
              <p className="text-4xl font-black text-white">300+</p>
              <p className="text-sm text-neutral-400 mt-1">Projetos escalados</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-neutral-700 mt-2"></div>
            <div className="text-center">
              <p className="text-4xl font-black text-white">98%</p>
              <p className="text-sm text-neutral-400 mt-1">Taxa de retenção</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Cases Grid (With Videos) */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainCasesData.map((item, index) => (
              <div key={index} className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                
                {/* Video Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-neutral-900 aspect-video group border-4 border-white transform hover:-translate-y-1 transition-all duration-500">
                    {playingVideo !== index ? (
                      <div 
                        className="w-full h-full cursor-pointer relative"
                        onClick={() => setPlayingVideo(index)}
                      >
                        <img 
                          src={item.image} 
                          alt={`Case ${item.client}`} 
                          className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-slate-900 ml-1 fill-slate-900" />
                          </div>
                        </div>
                        <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
                          <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${item.color} backdrop-blur-md bg-white/90`}>
                            {item.niche}
                          </span>
                        </div>
                      </div>
                    ) : (
                      <iframe 
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1`} 
                        title={`Case ${item.client}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4 leading-tight">
                    {item.title}
                  </h2>
                  <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm mb-8">
                    <h4 className="text-sm font-bold text-neutral-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-yellow-500" />
                      Resultados Alcançados
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      {item.metrics.map((metric, mIdx) => (
                        <div key={mIdx}>
                          <p className="text-3xl font-black text-neutral-900 mb-1">{metric.value}</p>
                          <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400">
                      <Users size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{item.client}</p>
                      <p className="text-sm text-neutral-500">Cliente LT Marketing</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Secondary Cases (4 Columns) */}
      <section className="py-24 bg-white border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">Mais Histórias de Sucesso</h2>
            <p className="text-lg text-neutral-600">Conheça outros projetos onde nossa metodologia fez a diferença na captação de clientes.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {secondaryCasesData.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => setExpandedCase(expandedCase === item.id ? null : item.id)}
                  className={`bg-white border ${expandedCase === item.id ? 'border-yellow-400 shadow-md' : 'border-neutral-200 shadow-sm hover:border-yellow-400/50 hover:shadow-md'} p-6 rounded-2xl transition-all duration-300 group cursor-pointer flex flex-col`}
                >
                    <div>
                        <div className="flex justify-between items-start mb-6">
                            <div className="h-16 flex items-center bg-neutral-50 rounded-xl px-4 py-2 max-w-[85%] border border-neutral-100">
                                <img 
                                  src={item.logo} 
                                  alt={item.niche} 
                                  className={`h-full w-auto object-contain transition-all duration-300 ${item.logoClass || ''}`} 
                                />
                            </div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${expandedCase === item.id ? 'bg-yellow-400 text-neutral-900' : 'bg-neutral-50 text-neutral-400 group-hover:bg-yellow-100 group-hover:text-yellow-600'}`}>
                                {expandedCase === item.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </div>
                        </div>
                        <span className="text-xs font-bold text-neutral-500 uppercase tracking-wide block mb-2">
                            {item.niche}
                        </span>
                        <p className="text-3xl xl:text-4xl font-black text-neutral-900 mb-3 group-hover:text-yellow-500 transition-colors tracking-tight">
                            {item.metric}
                        </p>
                        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                            {item.brief}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {item.tags.map((tag, i) => (
                            <span key={i} className="text-[10px] font-semibold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Expanded Content */}
                    <div 
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        expandedCase === item.id ? 'max-h-[1000px] opacity-100 mt-6 pt-6 border-t border-neutral-100' : 'max-h-0 opacity-0 mt-0 pt-0 border-transparent'
                      }`}
                    >
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold text-neutral-900 mb-1 flex items-center gap-2 text-sm">
                              <Target size={14} className="text-yellow-500" /> 
                              O que fazemos
                            </h4>
                            <p className="text-xs text-neutral-600 leading-relaxed">
                              {item.whatWeDo}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900 mb-1 flex items-center gap-2 text-sm">
                              <Lightbulb size={14} className="text-yellow-500" /> 
                              Por que
                            </h4>
                            <p className="text-xs text-neutral-600 leading-relaxed">
                              {item.why}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold text-neutral-900 mb-1 flex items-center gap-2 text-sm">
                              <CheckCircle2 size={14} className="text-emerald-500" /> 
                              Resultados
                            </h4>
                            <p className="text-xs text-neutral-600 leading-relaxed">
                              {item.results}
                            </p>
                          </div>
                        </div>
                    </div>
                </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-24 bg-yellow-400 text-neutral-900 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Quer ser o nosso próximo case de sucesso?</h2>
          <p className="text-xl text-neutral-800 mb-10 font-medium">
            Pare de perder dinheiro com estratégias que não funcionam. Agende uma consultoria gratuita e descubra o plano de ação ideal para o seu negócio.
          </p>
          <button 
            onClick={onOpenContact}
            className="px-10 py-5 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 inline-flex items-center gap-2 text-lg"
          >
            Quero escalar meus resultados
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Cases;
