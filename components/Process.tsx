import React from 'react';
import { Target, BarChart2, MousePointerClick, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Target,
    title: "1. Estratégia & Planejamento",
    description: "Desenvolvemos o plano de ação alinhado ao modelo de receita da sua empresa. Entendemos o negócio antes de criar a campanha."
  },
  {
    icon: BarChart2,
    title: "2. Tráfego & Performance",
    description: "Gestão avançada de mídia (Meta, Google, LinkedIn) focada em atrair o público certo e maximizar o retorno (ROAS)."
  },
  {
    icon: MousePointerClick,
    title: "3. Conversão & Tecnologia",
    description: "Criação de ecossistemas de vendas (Sites, LPs, Funis) e implementação de CRM para garantir que o lead se torne cliente."
  },
  {
    icon: LineChart,
    title: "4. Inteligência de Dados",
    description: "Monitoramento constante e relatórios claros. Transformamos números em insights para otimizar a rota e escalar."
  }
];

const Process: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-yellow-600 tracking-wider uppercase mb-2">Workflow Estruturado</h2>
          <p className="text-3xl md:text-4xl font-black text-slate-900">
            Metodologia LT: Crescimento com Processo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="group relative p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-yellow-200 hover:shadow-xl hover:shadow-yellow-100/50 transition-all duration-300">
              <div className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <step.icon size={26} className="text-slate-900 group-hover:text-yellow-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;