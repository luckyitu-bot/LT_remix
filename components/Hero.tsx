import React from 'react';
import { ArrowRight, Zap, TrendingUp, BarChart3 } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Blobs - Light & Subtle */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-yellow-100/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-slate-100/80 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-500"></span>
          </span>
          <span className="text-slate-600 text-xs font-bold tracking-wide uppercase">Agência de Marketing e Performance</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
          Transformamos Marketing <br className="hidden md:block" />
          em Vendas com Estratégia, <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="relative z-10">IA e Performance.</span>
            <span className="absolute bottom-2 left-0 w-full h-2 bg-yellow-300/60 -z-0 rotate-1"></span>
          </span>
        </h1>

        <p className="mt-2 max-w-4xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
          Unimos 19 anos de experiência de mercado à tecnologia de ponta para estruturar <br className="hidden md:block" />
          processos de vendas previsíveis e escaláveis. <strong>Marketing com visão de dono.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button 
            onClick={onOpenContact}
            className="group inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-slate-900 bg-yellow-400 hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-1"
          >
            Solicitar Proposta Estratégica
            <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <a href="#solucoes" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-slate-600 bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 transition-all">
            Conhecer Soluções
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-12 text-sm text-slate-700 font-semibold">
          <div className="flex items-center justify-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700">
              <Zap className="w-5 h-5" />
            </div>
            <span>Estratégia & <br />Planejamento</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span>Tráfego & <br />Performance</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700">
              <BarChart3 className="w-5 h-5" />
            </div>
            <span>Inteligência <br />de Dados</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;