import React from 'react';
import { Check, ArrowRight, Brain, Zap, Database, PenTool, BarChart3, BarChart2, DollarSign, Award, Target, Cpu, ShieldCheck } from 'lucide-react';
import Testimonials from './Testimonials';
import AIStrategy from './AIStrategy';

interface ServiceProps {
  onOpenContact: () => void;
  externalFormData?: any;
  externalStrategy?: string | null;
}

const ServiceAgency360: React.FC<ServiceProps> = ({ onOpenContact, externalFormData, externalStrategy }) => {
  return (
    <div className="pt-0">
      {/* 1. Hero Section - Visual Style Matched with Home */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Background Blobs - Light & Subtle */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-yellow-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-slate-100/80 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-8 shadow-sm">
                <Award className="w-4 h-4 text-yellow-500" />
                <span className="text-slate-600 text-xs font-bold tracking-wide uppercase">Modelo de Gestão Integrada</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Seu Departamento de <br className="hidden md:block"/> Marketing e Vendas, <br />
              <span className="relative inline-block text-slate-900">
                 <span className="relative z-10">Operando com Inteligência.</span>
                 {/* Removed rotate-1 to fix diagonal artifact */}
                 <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-300/60 -z-0"></span>
              </span>
            </h1>

            <p className="mt-2 max-w-4xl text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
                Tenha um time completo de estratégia, tráfego, tecnologia e copy liderado por especialistas com 19 anos de mercado. Substitua a gestão fragmentada por um núcleo de crescimento integrado.
            </p>

            <div className="flex flex-col items-center gap-4 w-full justify-center">
                <button 
                    onClick={onOpenContact}
                    className="group inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-slate-900 bg-yellow-400 hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-1"
                >
                    AGENDAR APRESENTAÇÃO DO MODELO 360º
                    <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-slate-400 font-medium">
                    * Ideal para empresas que faturam acima de R$ 50k/mês
                </p>
            </div>
        </div>
      </div>

      {/* 2. O Conceito (Posicionamento) */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight">
                A LT Marketing não é apenas uma agência. <br className="hidden md:block" />
                <span className="bg-yellow-100 px-2 text-slate-900">É o braço direito do seu comercial.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Muitas empresas sofrem com o <strong>&quot;Marketing Frankenstein&quot;</strong>: um gestor de tráfego ali, um designer aqui e uma estratégia que nunca se conecta com as vendas.
                </p>
                <p>
                  No modelo Agência 360º da LT, nós assumimos a responsabilidade ponta a ponta.
                </p>
                <p>
                  Atuamos como sua <strong>diretoria de marketing terceirizada</strong>. Centralizamos a inteligência, a operação e a tecnologia para garantir que cada real investido retorne em forma de clientes qualificados e receita previsível.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 relative z-10 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">❌</span>
                  </div>
                  <h3 className="font-bold text-slate-900">O Jeito Antigo</h3>
                </div>
                <ul className="space-y-3 mb-8 text-slate-500 text-sm">
                  <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>Gestão fragmentada</li>
                  <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>Cobrar freelancers</li>
                  <li className="flex gap-2 items-center"><span className="w-1.5 h-1.5 bg-red-400 rounded-full"></span>Métricas de vaidade</li>
                </ul>
                
                <div className="flex items-center gap-4 mb-6 pt-6 border-t border-slate-100">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✅</span>
                  </div>
                  <h3 className="font-bold text-slate-900">Modelo LT 360º</h3>
                </div>
                 <ul className="space-y-3 text-slate-900 font-medium text-sm">
                  <li className="flex gap-2 items-center"><Check size={16} className="text-green-500"/>Squad Multidisciplinar</li>
                  <li className="flex gap-2 items-center"><Check size={16} className="text-green-500"/>Foco em Receita (ROAS)</li>
                  <li className="flex gap-2 items-center"><Check size={16} className="text-green-500"/>Inteligência de Dados</li>
                </ul>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. O Escopo (5 Pilares) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
              O ecossistema completo para sua empresa escalar
            </h2>
            <p className="text-slate-600 text-lg">
              Nossa operação 360º integra os 5 pilares fundamentais do crescimento:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pilar 1 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-yellow-400 transition-colors group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors shadow-sm">
                <Brain className="w-7 h-7 text-slate-700 group-hover:text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">1. Estratégia & Direção</h3>
              <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-4">O Cérebro</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Planejamento comercial alinhado.</li>
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Definição de KPIs reais (CAC, LTV).</li>
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Reuniões de acompanhamento.</li>
              </ul>
            </div>

            {/* Pilar 2 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-yellow-400 transition-colors group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors shadow-sm">
                <Zap className="w-7 h-7 text-slate-700 group-hover:text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">2. Tráfego & Performance</h3>
              <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-4">O Motor</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Gestão avançada de mídia.</li>
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Remarketing inteligente.</li>
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Otimização diária de verba.</li>
              </ul>
            </div>

            {/* Pilar 3 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-yellow-400 transition-colors group">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors shadow-sm">
                <Database className="w-7 h-7 text-slate-700 group-hover:text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">3. Tecnologia & CRM</h3>
              <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-4">A Infraestrutura</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Gestão de CRM (RD Station).</li>
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Automação de e-mail marketing.</li>
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Landing Pages de alta conversão.</li>
              </ul>
            </div>

            {/* Pilar 4 */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-yellow-400 transition-colors group lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-2">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors shadow-sm">
                <PenTool className="w-7 h-7 text-slate-700 group-hover:text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">4. Conteúdo & Copy</h3>
              <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-4">A Voz</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Criação de ofertas irresistíveis.</li>
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Roteiros para vídeos e anúncios.</li>
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Design focado em autoridade.</li>
              </ul>
            </div>

            {/* Pilar 5 - Com visual do Dashboard */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-yellow-400 transition-colors group lg:col-start-2 lg:col-end-4 md:col-start-2 md:col-end-3 relative overflow-hidden">
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors shadow-sm">
                        <BarChart3 className="w-7 h-7 text-slate-700 group-hover:text-yellow-700" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">5. Inteligência de Dados</h3>
                    <p className="text-xs font-bold text-yellow-600 uppercase tracking-wide mb-4">A Bússola</p>
                    <ul className="space-y-3 text-sm text-slate-600 mb-4">
                        <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Dashboards em tempo real.</li>
                        <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Análise de jornada do cliente.</li>
                        <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0"/>Atribuição de canais.</li>
                    </ul>
                  </div>

                  {/* Visual do Dashboard */}
                  <div className="bg-neutral-900 rounded-2xl p-6 text-white shadow-xl transform group-hover:scale-105 transition-transform duration-500">
                     <div className="flex justify-between items-center mb-6 border-b border-neutral-700 pb-3">
                         <span className="font-bold text-slate-300 text-xs uppercase">Dashboard Mensal</span>
                         <BarChart2 className="text-yellow-400 w-4 h-4"/>
                     </div>
                     <div className="space-y-4">
                         <div>
                             <div className="flex justify-between text-[10px] mb-1">
                                 <span className="text-slate-400">Investimento</span>
                                 <span className="font-mono text-xs">R$ 15k</span>
                             </div>
                             <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                 <div className="bg-slate-500 w-full h-full"></div>
                             </div>
                         </div>
                         <div>
                             <div className="flex justify-between text-[10px] mb-1">
                                 <span className="text-slate-400">Vendas</span>
                                 <span className="font-mono text-green-400 text-xs">R$ 184k</span>
                             </div>
                             <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                 <div className="bg-green-500 w-[90%] h-full"></div>
                             </div>
                         </div>
                         <div className="pt-2 flex items-center gap-2">
                             <DollarSign className="text-yellow-400 w-4 h-4"/>
                             <span className="text-lg font-black text-white">ROAS: 12.2x</span>
                         </div>
                     </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Por que LT? */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Por que empresas maduras escolhem a LT Marketing?
              </h2>
              <p className="text-white mb-8 text-lg">
                Fugimos do padrão &quot;agência criativa&quot; e entregamos consultoria de negócio aplicada ao digital.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center shrink-0 border border-neutral-700">
                        <Award className="text-yellow-400 w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-1 text-white">Liderança Sênior</h4>
                        <p className="text-white text-sm">Conta acompanhada por estrategistas que já geraram mais de R$ 270 Milhões em vendas.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center shrink-0 border border-neutral-700">
                        <Target className="text-yellow-400 w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-1 text-white">Foco em Vendas</h4>
                        <p className="text-white text-sm">Não reportamos apenas &quot;leads&quot;. Reportamos oportunidades reais e receita gerada no caixa.</p>
                    </div>
                </div>
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center shrink-0 border border-neutral-700">
                        <Cpu className="text-yellow-400 w-6 h-6" />
                    </div>
                    <div>
                        <h4 className="font-bold text-xl mb-1 text-white">Agilidade com IA</h4>
                        <p className="text-white text-sm">Utilizamos Inteligência Artificial para ganhar velocidade e precisão na análise de dados.</p>
                    </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 p-8 rounded-3xl border border-neutral-700">
                <h3 className="font-bold text-white mb-6 text-center">Parceiros Oficiais</h3>
                <div className="flex items-center justify-center bg-slate-100 rounded-2xl p-8">
                    <img 
                      src="https://www.leandrotelles.com.br/wp-content/uploads/2023/12/marketing-partners.png.webp" 
                      alt="Parceiros: Google, Meta, RD Station" 
                      className="w-full h-auto max-w-xs object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Prova Social (Testimonials) */}
      <section>
          <Testimonials />
      </section>

      {/* 6. Qualificação */}
      <section className="py-20 bg-slate-50 text-slate-900">
          <div className="max-w-4xl mx-auto px-4">
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100">
                  <h2 className="text-3xl font-black text-center mb-8">O Modelo 360º é para a sua empresa?</h2>
                  <p className="text-center text-slate-600 mb-8 text-lg">Este formato de assessoria é exclusivo para negócios que:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                          <ShieldCheck className="text-green-600 w-6 h-6 shrink-0 mt-0.5" />
                          <span className="font-bold text-slate-800">Já possuem validação de produto/serviço no mercado.</span>
                      </div>
                      <div className="flex items-start gap-3">
                          <ShieldCheck className="text-green-600 w-6 h-6 shrink-0 mt-0.5" />
                          <span className="font-bold text-slate-800">Faturam consistentemente e buscam escala.</span>
                      </div>
                      <div className="flex items-start gap-3">
                          <ShieldCheck className="text-green-600 w-6 h-6 shrink-0 mt-0.5" />
                          <span className="font-bold text-slate-800">Entendem que marketing é investimento, não custo.</span>
                      </div>
                      <div className="flex items-start gap-3">
                          <ShieldCheck className="text-green-600 w-6 h-6 shrink-0 mt-0.5" />
                          <span className="font-bold text-slate-800">Buscam profissionalização total da operação digital.</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 7. AI Strategy Section */}
      <AIStrategy onOpenContact={onOpenContact} externalFormData={externalFormData} externalStrategy={externalStrategy} />

      {/* 8. CTA Final */}
      <section className="py-24 bg-white text-center">
          <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">
                Pare de gerenciar problemas e comece a gerenciar crescimento.
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                Nossa equipe tem um limite de contas 360º para garantir a qualidade da entrega sênior. Verifique a disponibilidade e agende uma conversa estratégica com nossos consultores.
              </p>
              
              <button 
                  onClick={onOpenContact}
                  className="inline-flex items-center px-10 py-5 text-lg font-bold rounded-xl text-white bg-neutral-900 hover:bg-neutral-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  QUERO UMA PROPOSTA PARA MINHA EMPRESA
                  <ArrowRight className="ml-2 w-6 h-6" />
                </button>
          </div>
      </section>
    </div>
  );
};

export default ServiceAgency360;