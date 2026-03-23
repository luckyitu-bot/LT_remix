import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Como funciona a contratação da Agência 360º?",
    answer: "Atuamos como seu departamento de marketing terceirizado. Após o diagnóstico, definimos um escopo mensal que inclui estratégia, gestão de tráfego, design e copywriting, com reuniões de acompanhamento quinzenais ou mensais."
  },
  {
    question: "Vocês trabalham com contratos de fidelidade?",
    answer: "Prezamos pela parceria de longo prazo baseada em resultados. Nossos contratos geralmente possuem um período mínimo de 3 a 6 meses para maturação das estratégias, mas somos flexíveis dependendo do escopo do projeto."
  },
  {
    question: "Já tenho uma equipe, posso contratar apenas a Mentoria?",
    answer: "Sim! A Mentoria/Consultoria é ideal para empresas que já possuem braço operacional (designers/gestores) mas precisam de direção estratégica, processos e visão sênior para escalar os resultados."
  },
  {
    question: "Como é feito o report de resultados?",
    answer: "Acreditamos em transparência total. Você terá acesso a Dashboards interativos (Inteligência de Dados) e faremos reuniões periódicas para apresentar os números, insights e próximos passos."
  },
  {
    question: "Qual o investimento mínimo para tráfego pago?",
    answer: "Não existe um 'mínimo' fixo, mas recomendamos verbas que permitam testes e escala. Durante nossa reunião de diagnóstico, analisaremos seu mercado e recomendaremos um budget competitivo para seus objetivos."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white rounded-full shadow-sm mb-4">
            <HelpCircle className="text-yellow-500 w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-slate-600">
            Entenda como podemos ajudar seu negócio.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${openIndex === index ? 'border-yellow-400 shadow-md' : 'border-slate-200 hover:border-yellow-200'}`}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-slate-900' : 'text-slate-700'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="text-yellow-500 shrink-0 ml-4" />
                ) : (
                  <Plus className="text-slate-400 shrink-0 ml-4" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;