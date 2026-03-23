import React, { useState } from 'react';
import { CheckCircle2, Award, Play } from 'lucide-react';

const About: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Video Side - Representing Leadership */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-500 aspect-video bg-neutral-900 group">
              {!isPlaying ? (
                <div 
                  className="w-full h-full cursor-pointer relative"
                  onClick={() => setIsPlaying(true)}
                >
                  <img 
                    src="https://www.leandrotelles.com.br/wp-content/uploads/2025/09/Agencia-de-Marketing-Digital-360o.jpg" 
                    alt="Agência de Marketing Digital" 
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-slate-900 ml-1 fill-slate-900" />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/IpzaORXN7UM?autoplay=1" 
                  title="LT Marketing Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              )}
            </div>
            
            {/* Floating Stats - Preserved Yellow Box */}
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 p-6 rounded-2xl shadow-xl hidden md:block animate-bounce-slow z-20">
              <p className="text-4xl font-black text-slate-900 mb-1">18</p>
              <p className="text-sm font-bold text-slate-800 leading-tight">Anos de<br/>Experiência</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 mb-6">
              <Award className="w-4 h-4 text-slate-600" />
              <span className="text-slate-600 text-xs font-bold uppercase tracking-wide">Posicionamento</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              Transformamos Marketing em um <br/>
              <span className="text-yellow-500 relative">
                Ativo Estratégico.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Acreditamos que o marketing deve ser o motor de crescimento do negócio. Por isso, a LT atua como um núcleo estratégico que integra atração, conversão e tecnologia.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Nossa missão é clara: entregar <strong>clareza, método e resultado financeiro</strong>. Fazemos isso através de uma gestão sênior, onde a Inteligência Artificial entra como uma ferramenta de precisão para amplificar nossa capacidade analítica.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Liderança Sênior (CEO & COO)",
                "Foco em Resultado Financeiro",
                "Gestão de Tráfego Avançada",
                "Inteligência Artificial Aplicada"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 shrink-0" />
                  <span className="text-slate-700 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 border-t border-slate-100 pt-8">
              <div>
                <p className="text-2xl md:text-3xl font-black text-slate-900">+270 Mi</p>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-tight">Faturamento Gerado</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-slate-900">+1.000</p>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-tight">Projetos Entregues</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-2xl md:text-3xl font-black text-slate-900">R$ 2.5 Mi</p>
                <p className="text-xs md:text-sm text-slate-500 font-medium leading-tight">Gestão Anual Mídia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;