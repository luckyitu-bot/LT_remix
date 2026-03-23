import React from 'react';
import { ArrowRight, Briefcase, TrendingUp, Users, Heart, ArrowUpRight, BarChart } from 'lucide-react';

interface PortfolioProps {
  onOpenContact: () => void;
}

const products = [
  {
    title: "Agência 360º (Full Service)",
    category: "Terceirização Completa",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    desc: "Terceirize seu departamento de marketing com uma equipe completa de estratégia, tráfego, design e copy. Solução ideal para quem busca growth acelerado.",
    icon: Briefcase
  },
  {
    title: "Gestão de Tráfego Pago",
    category: "Aquisição & Escala",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    desc: "Campanhas de alta performance para aquisição de leads e vendas diretas. Foco total em reduzir o CAC e aumentar o ROI do seu investimento.",
    icon: TrendingUp
  },
  {
    title: "Mentoria e Consultoria",
    category: "Direção Estratégica",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    desc: "Orientação estratégica direta com nossos sócios para estruturar processos internos, qualificar o time comercial e destravar o crescimento.",
    icon: Users
  },
  {
    title: "Marketing Médico",
    category: "Saúde & Autoridade",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    desc: "Especialização em atrair pacientes particulares com ética e posicionamento de autoridade. Estratégias validadas para clínicas e consultórios.",
    icon: Heart
  },
];

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

const Portfolio: React.FC<PortfolioProps> = ({ onOpenContact }) => {
  return (
    <section id="solucoes" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              Soluções Dedicadas
            </h2>
            <p className="text-lg text-slate-600">
              Como podemos impulsionar o seu negócio hoje. Escolha o formato ideal para o seu momento.
            </p>
          </div>
        </div>

        {/* Featured Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {products.map((item, index) => (
            <div key={index} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-900 border border-slate-100">
                  {item.category}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-yellow-100 rounded-lg text-slate-900">
                        <item.icon size={20} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-yellow-600 transition-colors">{item.title}</h3>
                </div>
                <p className="text-slate-600 mb-8 leading-relaxed flex-grow">{item.desc}</p>
                
                <button 
                  onClick={onOpenContact}
                  className="inline-flex items-center text-sm font-bold text-slate-900 border-b-2 border-yellow-400 pb-0.5 hover:text-yellow-600 hover:border-yellow-500 transition-colors w-fit"
                >
                  Falar com um Especialista <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Results Section (Replaced Carousel) */}
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
                            <ArrowUpRight className="text-slate-400 group-hover:text-yellow-400 transition-colors" size={24} />
                        </div>
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wide block mb-2">
                            {item.category}
                        </span>
                        <p className="text-3xl xl:text-4xl font-black text-white mb-3 group-hover:text-yellow-400 transition-colors tracking-tight">
                            {item.metric}
                        </p>
                        <p className="text-slate-300 text-sm leading-relaxed mb-6">
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

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
           Esses números não são sorte. <span className="text-yellow-500 relative inline-block">
             São Método.
             <svg className="absolute w-full h-2 bottom-1 left-0 text-yellow-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
             </svg>
           </span>
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
           Você já viu o potencial. Agora, imagine aplicar essa mesma inteligência de dados e estratégia agressiva no seu negócio. Parar de rasgar dinheiro com anúncios ruins é uma decisão sua.
        </p>
        <button 
         onClick={onOpenContact}
         className="inline-flex items-center px-10 py-5 rounded-xl border-2 border-slate-900 text-slate-900 font-bold hover:bg-slate-900 hover:text-white transition-all shadow-lg hover:shadow-xl"
        >
         Quero Agendar uma Reunião <ArrowRight size={20} className="ml-3" />
       </button>
      </div>
    </section>
  );
};

export default Portfolio;