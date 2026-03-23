import React, { useState } from 'react';
import { ArrowRight, Stethoscope, ShieldCheck, Activity, Users, Star, CheckCircle2, AlertTriangle, Scale, MousePointerClick, MessageSquare, Repeat, Sparkles, Brain, Baby, Heart, Dumbbell, Smile, Eye, Building2, ChevronRight } from 'lucide-react';
import AIStrategy from './AIStrategy';

interface ServiceProps {
  onOpenContact: () => void;
  externalFormData?: any;
  externalStrategy?: string | null;
}

const specialties = [
  {
    id: 'plastica',
    name: "Cirurgia Plástica",
    icon: Sparkles,
    services: {
      trafego: "Campanhas High Ticket para público classe A/B.",
      lp: "Foco em desejo, autoestima e quebra de objeções sobre segurança.",
      social: "Estética refinada, antes e depois (conforme CFM) e bastidores.",
      autoridade: "Destaque para formação, congressos e tecnologias utilizadas."
    }
  },
  {
    id: 'dermatologia',
    name: "Dermatologia",
    icon: Star,
    services: {
      trafego: "Anúncios para procedimentos de entrada (Botox/Laser) e tratamentos avançados.",
      lp: "Páginas específicas para tecnologias (ex: Lavieen, Ultraformer).",
      social: "Educação sobre skincare e explicação de procedimentos.",
      autoridade: "Explicação técnica que diferencia o dermatologista de esteticistas."
    }
  },
  {
    id: 'reproducao',
    name: "Reprodução Humana",
    icon: Baby,
    services: {
      trafego: "Fundo de funil para termos como 'FIV', 'Congelamento de Óvulos'.",
      lp: "Acolhimento, taxas de sucesso e explicação clara das etapas.",
      social: "Humanização, histórias de sucesso e tira-dúvidas.",
      autoridade: "Transmissão de segurança e expertise em casos complexos."
    }
  },
  {
    id: 'ginecologia',
    name: "Ginecologia",
    icon: Heart,
    services: {
      trafego: "Foco em procedimentos (DIU, Ninfoplastia, Implantes) e não apenas consulta.",
      lp: "Foco na dor e na solução (ex: endometriose, menopausa).",
      social: "Saúde da mulher, empoderamento e informação sem tabus.",
      autoridade: "Médica parceira da mulher em todas as fases da vida."
    }
  },
  {
    id: 'ortopedia',
    name: "Ortopedia",
    icon: Activity,
    services: {
      trafego: "Captura de demanda de urgência (dor no joelho, coluna) e cirurgias.",
      lp: "Foco em alívio da dor e recuperação rápida.",
      social: "Explicação de lesões comuns e tratamentos não cirúrgicos vs cirúrgicos.",
      autoridade: "Especialista em resolver a dor e devolver qualidade de vida."
    }
  },
  {
    id: 'esportiva',
    name: "Medicina Esportiva",
    icon: Dumbbell,
    services: {
      trafego: "Público de academias, corredores e atletas amadores.",
      lp: "Foco em performance, emagrecimento e hipertrofia.",
      social: "Lifestyle saudável, dicas de treino e suplementação.",
      autoridade: "O médico que vive o que prega (health style)."
    }
  },
  {
    id: 'odonto',
    name: "Odontologia (Implantes)",
    icon: Smile,
    services: {
      trafego: "Campanhas para público 40+ buscando reabilitação oral.",
      lp: "Foco na transformação do sorriso e facilidade de pagamento/tratamento.",
      social: "Prova social, depoimentos e sorrisos transformados.",
      autoridade: "Tecnologia de ponta e conforto no tratamento."
    }
  },
  {
    id: 'lentes',
    name: "Lentes de Contato",
    icon: Eye,
    services: {
      trafego: "Público interessado em estética e beleza (semelhante a plástica).",
      lp: "Visual impactante, foco no 'sorriso perfeito'.",
      social: "Muito visual, foco em detalhes e harmonia facial.",
      autoridade: "O 'arquiteto' de sorrisos."
    }
  },
  {
    id: 'clinicas',
    name: "Clínicas Multi",
    icon: Building2,
    services: {
      trafego: "Campanhas segmentadas por especialidade e geolocalização.",
      lp: "Páginas individuais por especialidade ou 'hub' de agendamento fácil.",
      social: "Apresentação do corpo clínico e facilidade de exames/consultas.",
      autoridade: "A solução completa para a saúde da família em um só lugar."
    }
  },
  {
    id: 'psiquiatria',
    name: "Psiquiatria",
    icon: Brain,
    services: {
      trafego: "Foco em transtornos específicos (Ansiedade, TDAH, Depressão).",
      lp: "Acolhimento, privacidade e desmistificação do tratamento.",
      social: "Conteúdo educativo que gera identificação e quebra preconceitos.",
      autoridade: "Medicina baseada em evidências com olhar humano."
    }
  }
];

const ServiceMedical: React.FC<ServiceProps> = ({ onOpenContact, externalFormData, externalStrategy }) => {
  const [activeSpecialty, setActiveSpecialty] = useState(specialties[0]);

  return (
    <div className="pt-0">
      {/* 1. Hero Section - Visual Style Matched */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-neutral-100/40 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-yellow-100/40 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 mb-8 shadow-sm">
              <Stethoscope className="w-4 h-4 text-neutral-600" />
              <span className="text-neutral-600 text-xs font-bold tracking-wide uppercase">Marketing Médico Especializado</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-neutral-900 tracking-tight leading-[1.1] mb-8">
              Construa sua Autoridade e lote <br/>
              sua agenda com <span className="text-yellow-500 relative inline-block">
                 Pacientes Particulares.
                 <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-200/40 -z-10 rotate-1"></span>
              </span>
            </h1>

            <p className="mt-2 max-w-4xl text-lg md:text-xl text-neutral-600 mb-10 leading-relaxed font-medium">
              Marketing Médico Ético, seguro e focado em atrair quem valoriza o seu conhecimento. Saia da guerra de preços e pare de depender exclusivamente dos convênios.
            </p>

            <div className="flex flex-col items-center gap-4">
                <button 
                  onClick={onOpenContact}
                  className="group inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-neutral-900 bg-yellow-400 hover:bg-yellow-500 transition-all shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-1"
                >
                  QUERO UMA ANÁLISE DE POSICIONAMENTO MÉDICO
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <p className="text-xs text-neutral-400 font-medium">
                    * Estratégias 100% alinhadas às normas do CFM/CODAME
                </p>
            </div>
        </div>
      </div>

      {/* 2. O Diagnóstico (Dores do Médico) */}
      <section className="py-24 bg-neutral-50 relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                   <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6 leading-tight">
                     Você estudou anos para se tornar referência. <br/>
                     <span className="text-neutral-500">Seu marketing reflete isso?</span>
                   </h2>
                   <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                     A maioria dos médicos enfrenta dois problemas graves no digital: agências genéricas que transformam a medicina em comércio barato (e arriscado) e o excesso de &quot;dancinhas&quot; para tentar ganhar atenção.
                   </p>
                   <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                     Na LT Marketing, <strong>nós seguimos o caminho da Autoridade.</strong> Entendemos que a reputação é o seu maior ativo. Nosso método atrai pacientes que buscam solução e confiança, não apenas &quot;preço de consulta&quot;.
                   </p>
                </div>
                
                <div className="relative">
                   <div className="absolute inset-0 bg-white rounded-3xl transform rotate-3 shadow-sm border border-neutral-100"></div>
                   <div className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-100 relative z-10">
                       <h3 className="font-bold text-neutral-900 mb-6 text-xl flex items-center gap-2">
                           <Activity className="text-yellow-500" />
                           Diagnóstico LT
                       </h3>
                       
                       <div className="space-y-6">
                           <div className="p-4 bg-red-50 rounded-xl border border-red-100">
                               <div className="flex items-center gap-2 mb-2">
                                   <AlertTriangle className="text-red-500 w-5 h-5"/>
                                   <span className="font-bold text-red-800 text-sm uppercase">O Jeito Errado (Comum)</span>
                               </div>
                               <ul className="text-sm text-neutral-600 space-y-2">
                                   <li className="flex gap-2">❌ Exposição desnecessária (&quot;Dancinhas&quot;).</li>
                                   <li className="flex gap-2">❌ Atrair pacientes por preço baixo.</li>
                                   <li className="flex gap-2">❌ Risco ético com o CRM.</li>
                               </ul>
                           </div>

                           <div className="p-4 bg-green-50 rounded-xl border border-green-100">
                               <div className="flex items-center gap-2 mb-2">
                                   <CheckCircle2 className="text-green-600 w-5 h-5"/>
                                   <span className="font-bold text-green-800 text-sm uppercase">O Jeito LT (Autoridade)</span>
                               </div>
                               <ul className="text-sm text-neutral-600 space-y-2">
                                   <li className="flex gap-2">✅ Conteúdo técnico e educativo.</li>
                                   <li className="flex gap-2">✅ Atração de pacientes particulares.</li>
                                   <li className="flex gap-2">✅ Segurança jurídica total.</li>
                               </ul>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
         </div>
      </section>

      {/* 3. Metodologia (O Protocolo LT) */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs mb-2 block">Nossa Metodologia</span>
                <h2 className="text-3xl md:text-4xl font-black text-white">O Protocolo de Crescimento LT</h2>
                <p className="text-neutral-400 mt-4 max-w-2xl mx-auto">Como transformamos seguidores em agendamentos de alto valor.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Step 1 */}
                <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400/50 transition-colors">
                    <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mb-6 border border-neutral-700 text-yellow-400">
                        <Star className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">1. Branding e Posicionamento</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                        Transformamos seu nome em uma marca forte. Definimos sua linha editorial para que você seja visto como a referência técnica na sua especialidade.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400/50 transition-colors">
                    <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mb-6 border border-neutral-700 text-yellow-400">
                        <MousePointerClick className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">2. Tráfego Qualificado</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                        Não buscamos &quot;cliques&quot;. Usamos segmentação avançada e IA no Google &amp; Meta Ads para colocar sua clínica na frente de pacientes com potencial financeiro e intenção.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400/50 transition-colors">
                    <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mb-6 border border-neutral-700 text-yellow-400">
                        <MessageSquare className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">3. Gestão de Contatos</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                        O lead chegou, e agora? Treinamos e orientamos sua secretária para converter dúvidas em consultas confirmadas, monitorando o &quot;Show Rate&quot; para reduzir faltas.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 hover:border-yellow-400/50 transition-colors">
                    <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center mb-6 border border-neutral-700 text-yellow-400">
                        <Repeat className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">4. Fidelização (LTV)</h3>
                    <p className="text-neutral-400 leading-relaxed text-sm">
                        Estratégias para que o paciente retorne para check-ups e procedimentos recorrentes, aumentando o faturamento sem precisar buscar novos pacientes o tempo todo.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 4. Case de Sucesso (FIV São Paulo) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex flex-col md:flex-row items-center gap-12 bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-200">
                 <div className="flex-1">
                     <span className="text-neutral-600 font-bold tracking-widest uppercase text-xs mb-2 block">Prova Real</span>
                     <h2 className="text-3xl font-black text-neutral-900 mb-6">Resultados reais em um mercado complexo.</h2>
                     <p className="text-lg text-neutral-600 mb-8">
                         A validação máxima no nicho de saúde: Reprodução Humana. Um mercado de alto ticket, alta complexidade e regras rígidas.
                     </p>
                     
                     <div className="space-y-4">
                         <div className="flex items-start gap-4">
                             <div className="p-2 bg-green-100 rounded-lg text-green-700 mt-1">
                                 <Users size={20} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-neutral-900 text-lg">+ 6.700 Leads Qualificados</h4>
                                 <p className="text-sm text-neutral-600">Gerados em 1 ano de operação.</p>
                             </div>
                         </div>
                         <div className="flex items-start gap-4">
                             <div className="p-2 bg-neutral-100 rounded-lg text-neutral-700 mt-1">
                                 <ShieldCheck size={20} />
                             </div>
                             <div>
                                 <h4 className="font-bold text-neutral-900 text-lg">Blindagem Ética</h4>
                                 <p className="text-sm text-neutral-600">Conformidade total com normas da medicina reprodutiva.</p>
                             </div>
                         </div>
                     </div>
                 </div>

                 {/* Card Visual */}
                 <div className="w-full md:w-[400px] flex-shrink-0">
                     <div className="bg-neutral-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden group">
                         <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                         
                         <div className="relative z-10 flex flex-col h-full items-center text-center">
                             <div className="h-20 bg-white/10 rounded-xl px-6 py-3 mb-6 flex items-center justify-center w-full">
                                <img 
                                    src="https://www.leandrotelles.com.br/wp-content/uploads/2023/10/fiv-sao-paulo-png.png" 
                                    alt="FIV São Paulo" 
                                    className="h-full w-auto object-contain brightness-0 invert"
                                />
                             </div>
                             <p className="text-neutral-300 text-sm mb-6">
                                 &quot;Uma das maiores referências em fertilidade do país, com estratégia completa de captação para tratamentos de alto valor.&quot;
                             </p>
                             <div className="w-full pt-6 border-t border-neutral-700">
                                 <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mb-1">Resultado Anual</p>
                                 <p className="text-4xl font-black text-yellow-400">+6.7K Leads</p>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </div>
      </section>

      {/* 5. Segurança Jurídica */}
      <section className="py-24 bg-white relative overflow-hidden border-t border-neutral-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-neutral-100 rounded-full mb-6">
                  <Scale className="text-neutral-600 w-6 h-6" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">Cresça sem colocar seu CRM em risco.</h2>
              <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
                  Nossa equipe é treinada nas diretrizes do <strong>CODAME</strong> e do <strong>Conselho Federal de Medicina</strong>. Sabemos o que pode e o que não pode ser feito. Com a LT, você dorme tranquilo sabendo que seu marketing é uma ferramenta de educação e negócios, não um risco jurídico.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto bg-neutral-50 p-8 rounded-2xl border border-neutral-200">
                  <div className="space-y-3">
                      <div className="flex items-center gap-2">
                          <CheckCircle2 className="text-green-600 w-5 h-5 shrink-0" />
                          <span className="text-neutral-700 font-medium">Informação técnica e educativa.</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <CheckCircle2 className="text-green-600 w-5 h-5 shrink-0" />
                          <span className="text-neutral-700 font-medium">Google Ads para sintomas.</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <CheckCircle2 className="text-green-600 w-5 h-5 shrink-0" />
                          <span className="text-neutral-700 font-medium">Antes e Depois (com cautela).</span>
                      </div>
                  </div>
                  <div className="space-y-3">
                      <div className="flex items-center gap-2">
                          <AlertTriangle className="text-red-500 w-5 h-5 shrink-0" />
                          <span className="text-neutral-700 font-medium decoration-neutral-400">Promessas de &quot;cura garantida&quot;.</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <AlertTriangle className="text-red-500 w-5 h-5 shrink-0" />
                          <span className="text-neutral-700 font-medium decoration-neutral-400">Sensacionalismo.</span>
                      </div>
                      <div className="flex items-center gap-2">
                          <AlertTriangle className="text-red-500 w-5 h-5 shrink-0" />
                          <span className="text-neutral-700 font-medium decoration-neutral-400">Exposição vexatória.</span>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* 6. Para Quem É (Especialidades) - Redesigned */}
      <section className="py-24 bg-neutral-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  {/* Left Column: Title + List */}
                  <div className="lg:col-span-5 flex flex-col">
                      <div className="mb-10">
                          <h2 className="text-3xl font-black text-white mb-4">Especialidades que aceleramos</h2>
                          <p className="text-neutral-400 mb-6">
                              Temos expertise comprovada em diversas áreas da medicina. Selecione sua especialidade para ver como podemos ajudar.
                          </p>
                          <button 
                            onClick={onOpenContact}
                            className="text-yellow-400 font-bold hover:text-yellow-300 transition-colors flex items-center gap-2"
                          >
                              Quero acelerar minha especialidade <ArrowRight size={16} />
                          </button>
                      </div>

                      <div className="space-y-2">
                          {specialties.map((spec) => (
                              <button
                                  key={spec.id}
                                  onClick={() => setActiveSpecialty(spec)}
                                  className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all duration-300 text-left group ${
                                      activeSpecialty.id === spec.id 
                                      ? 'bg-neutral-800 border-yellow-400 text-white' 
                                      : 'bg-transparent border-neutral-800 text-neutral-400 hover:bg-neutral-800 hover:text-white'
                                  }`}
                              >
                                  <div className="flex items-center gap-3">
                                      <div className={`p-2 rounded-lg ${activeSpecialty.id === spec.id ? 'bg-yellow-400 text-neutral-900' : 'bg-neutral-800 text-neutral-500 group-hover:text-white'}`}>
                                          <spec.icon size={18} />
                                      </div>
                                      <span className="font-bold">{spec.name}</span>
                                  </div>
                                  {activeSpecialty.id === spec.id && <ChevronRight size={18} className="text-yellow-400" />}
                              </button>
                          ))}
                      </div>
                  </div>

                  {/* Right Column: Detail View */}
                  <div className="lg:col-span-7">
                      <div className="bg-neutral-800 border border-neutral-700 rounded-3xl p-8 sticky top-8 relative overflow-hidden">
                          {/* Background Decoration */}
                          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                          
                          <div className="relative z-10">
                              <div className="flex items-center gap-4 mb-8">
                                <div className="w-16 h-16 bg-neutral-700 rounded-2xl flex items-center justify-center text-yellow-400 shadow-lg shrink-0">
                                    <activeSpecialty.icon size={32} />
                                </div>
                                <div>
                                  <h3 className="text-3xl font-black text-white">{activeSpecialty.name}</h3>
                                  <div className="w-20 h-1 bg-yellow-400 rounded-full mt-2"></div>
                                </div>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                  <div className="bg-neutral-900/50 p-5 rounded-xl border border-neutral-700/50 hover:border-yellow-400/30 transition-colors">
                                      <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                          <MousePointerClick size={14} />
                                          Tráfego Pago
                                      </h4>
                                      <p className="text-neutral-300 text-sm leading-relaxed">
                                          {activeSpecialty.services.trafego}
                                      </p>
                                  </div>

                                  <div className="bg-neutral-900/50 p-5 rounded-xl border border-neutral-700/50 hover:border-yellow-400/30 transition-colors">
                                      <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                          <MousePointerClick size={14} />
                                          Landing Page
                                      </h4>
                                      <p className="text-neutral-300 text-sm leading-relaxed">
                                          {activeSpecialty.services.lp}
                                      </p>
                                  </div>

                                  <div className="bg-neutral-900/50 p-5 rounded-xl border border-neutral-700/50 hover:border-yellow-400/30 transition-colors">
                                      <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                          <MessageSquare size={14} />
                                          Redes Sociais
                                      </h4>
                                      <p className="text-neutral-300 text-sm leading-relaxed">
                                          {activeSpecialty.services.social}
                                      </p>
                                  </div>

                                  <div className="bg-neutral-900/50 p-5 rounded-xl border border-neutral-700/50 hover:border-yellow-400/30 transition-colors">
                                      <h4 className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                                          <Star size={14} />
                                          Autoridade
                                      </h4>
                                      <p className="text-neutral-300 text-sm leading-relaxed">
                                          {activeSpecialty.services.autoridade}
                                      </p>
                                  </div>
                              </div>

                              <div className="pt-6 border-t border-neutral-700">
                                  <button 
                                    onClick={onOpenContact}
                                    className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2"
                                  >
                                      Solicitar Plano para {activeSpecialty.name}
                                      <ArrowRight size={20} />
                                  </button>
                              </div>
                          </div>
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
              <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 tracking-tight">Sua agenda particular começa aqui.</h2>
              <p className="text-xl text-neutral-800 mb-10 max-w-2xl mx-auto font-medium">
                  Não deixe sua carreira na mão de amadores. Tenha um braço estratégico cuidando da sua imagem e do seu faturamento.
              </p>
              <button 
                onClick={onOpenContact}
                className="bg-neutral-900 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-neutral-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3 mx-auto"
              >
                  FALAR COM UM ESPECIALISTA EM MARKETING MÉDICO
                  <ArrowRight size={20} />
              </button>
          </div>
      </section>
    </div>
  );
};

export default ServiceMedical;