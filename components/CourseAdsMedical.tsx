import React from 'react';
import { 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  Target, 
  BarChart3, 
  ShieldCheck, 
  Users, 
  Award, 
  HelpCircle, 
  ArrowRight, 
  Star,
  Lock,
  MonitorPlay
} from 'lucide-react';

const CourseAdsMedical: React.FC = () => {
  return (
    <div className="pt-0">
      {/* 1. Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-neutral-900 text-white">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neutral-800/50 rounded-full blur-[100px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 border border-neutral-700 mb-8 shadow-sm">
              <MonitorPlay className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-xs font-bold tracking-wide uppercase">Curso de tráfego para médicos e clínicas</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Sua clínica com 20 novos pacientes por dia usando <span className="text-yellow-400">Google e Meta Ads</span>
            </h1>

            <p className="text-lg text-neutral-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Você é profissional da saúde ou estética e está cansado de campanhas que não trazem resultados? Ou de gestores de tráfego que somem quando você mais precisa? Aprenda a criar campanhas do zero no Google e Instagram e tenha total controle sobre sua estratégia para atrair pacientes e encher sua agenda.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => window.open('https://pay.hotmart.com/P94473352O?off=cl8se0bc&bid=1773232602186', '_blank')}
                className="w-full sm:w-auto px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                QUERO LOTAR MINHA AGENDA AGORA
                <ArrowRight size={20} />
              </button>
              <p className="text-xs text-neutral-500 font-medium sm:hidden">
                * Acesso imediato após inscrição
              </p>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-neutral-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500 w-4 h-4" />
                <span>100% Online</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500 w-4 h-4" />
                <span>Certificado Incluso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="text-green-500 w-4 h-4" />
                <span>Acesso por 1 ano</span>
              </div>
            </div>
          </div>

          {/* Right Content (Video Placeholder) */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl bg-neutral-800 aspect-video group">
              <iframe 
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/yOrKMerp9Xw" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* 2. The Problem (Agencies vs Autonomy) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              Você está cansado de investir em tráfego e não ver o telefone tocar?
            </h2>
            <p className="text-lg text-neutral-600">
              Ou pior, de contratar agências que não entendem a ética e as particularidades do nicho médico? Coloque sua clínica no topo do Google e no feed do Instagram de quem realmente precisa de você hoje. Sem perda de tempo, sem desperdício de verba.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-red-200 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <AlertTriangle size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Agências Genéricas</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Elas usam a mesma estratégia para vender pizza e cirurgia plástica. Não entendem a jornada do paciente e o código de ética médica.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-red-200 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Métricas de Vaidade</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Likes e seguidores não pagam as contas da clínica. Você precisa de agendamentos qualificados, não de fama vazia.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:border-red-200 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-6 text-red-600">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">Risco com o CRM</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">
                Anúncios sensacionalistas ou com promessas de resultado podem colocar sua carreira em risco. A segurança jurídica é inegociável.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Solution (What you will learn) */}
      <section className="py-24 bg-neutral-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-yellow-400 font-bold tracking-widest uppercase text-xs mb-2 block">O Método</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Assuma o controle do seu crescimento.
              </h2>
              <p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                Neste treinamento, eu abro a &quot;caixa preta&quot; da minha agência. Você vai aprender exatamente o mesmo processo que usamos para gerar milhões em faturamento para nossos clientes médicos.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Google Ads Dominado</strong>
                    <span className="text-neutral-400 text-sm">Apareça exatamente quando o paciente busca por sua especialidade.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Remarketing no Instagram</strong>
                    <span className="text-neutral-400 text-sm">Não seja esquecido. Apareça para quem já visitou seu perfil ou site.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Gestão de Verba Inteligente</strong>
                    <span className="text-neutral-400 text-sm">Como ter resultados reais mesmo começando com pouco investimento.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-400 w-6 h-6 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Otimização de Conversão</strong>
                    <span className="text-neutral-400 text-sm">Aprenda a atrair leads qualificados, não apenas &quot;curtidas&quot;.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-neutral-800 rounded-3xl p-8 border border-neutral-700 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Target className="text-yellow-400" />
                Para quem é este curso?
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-700/50">
                  <p className="text-neutral-300 text-sm">🩺 <strong>Médico(a)</strong> com agenda oscilante e pouco tempo para marketing.</p>
                </div>
                <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-700/50">
                  <p className="text-neutral-300 text-sm">🏥 <strong>Profissional da saúde</strong> que deseja escala e autoridade digital.</p>
                </div>
                <div className="p-4 bg-neutral-900/50 rounded-xl border border-neutral-700/50">
                  <p className="text-neutral-300 text-sm">🎓 <strong>Clínicas</strong> que querem internalizar o tráfego para reduzir custos fixos.</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-700 text-center">
                <p className="text-neutral-400 text-sm mb-4">Não precisa de conhecimento prévio em marketing.</p>
                <button 
                  onClick={() => window.open('https://pay.hotmart.com/P94473352O?off=cl8se0bc&bid=1773232602186', '_blank')}
                  className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold rounded-lg transition-colors"
                >
                  GARANTIR MINHA VAGA
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 Prova Social */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">Veja o que médicos como você dizem sobre nosso trabalho.</h2>
            <p className="text-neutral-600">Resultados reais de quem já aplicou o que ensinamos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Henrique Noronha",
                role: "Médico Empreendedor",
                image: "https://www.leandrotelles.com.br/wp-content/uploads/2025/06/depoimento-dr-henrique-noronha.jpg",
              },
              {
                name: "Dra. Adriana Corpa",
                role: "Clínica de Olhos Modelo",
                image: "https://www.leandrotelles.com.br/wp-content/uploads/2024/09/Depoimento-dra-adriana-corpa-clinica-modelo.webp",
              },
              {
                name: "Dra. Rafaela Roschel",
                role: "Ginecologia e Obstetrícia",
                image: "https://www.leandrotelles.com.br/wp-content/uploads/2024/05/Rafaela-Rochel-FIV.jpg",
              }
            ].map((t, index) => (
              <div key={index} className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-neutral-900">
                {/* Background Image */}
                <img 
                  src={t.image} 
                  alt={`Depoimento ${t.name}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                />
                
                {/* Overlays */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/50 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300 shadow-xl">
                    <Play className="w-5 h-5 md:w-6 md:h-6 text-white fill-white ml-1" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-5 md:p-6 w-full text-left">
                  <span className="inline-block bg-yellow-400 text-slate-900 text-[10px] font-extrabold px-2 py-0.5 rounded mb-2 uppercase tracking-wide shadow-sm">
                    Depoimento
                  </span>
                  <h3 className="text-white font-bold text-base md:text-lg leading-tight">{t.name}</h3>
                  <p className="text-slate-300 text-xs mt-1 font-medium">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Modules (Curriculum) */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">Conteúdo Programático</h2>
            <p className="text-neutral-600">Do zero ao avançado, passo a passo na tela do computador.</p>
          </div>

          <div className="space-y-4">
            {[
              { title: "Aprenda o que realmente funciona para atrair pacientes e encher sua agenda" },
              { title: "Crie campanhas de alta performance no Google Ads e destaque sua clínica nas primeiras posições das pesquisas." },
              { title: "Gerencie seu orçamento com inteligência, aprendendo a maximizar resultados mesmo com verbas reduzidas." },
              { title: "Use estratégias de remarketing no Instagram para manter sua clínica na mente dos pacientes em potencial." },
              { title: "Seja encontrado primeiro no Google, ocupando a posição que garante mais cliques e agendamentos." },
              { title: "Analise e otimize suas campanhas para atrair leads qualificados, reduzir custos e aumentar conversões." }
            ].map((mod, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-center">
                <div className="w-8 h-8 bg-neutral-900 text-white rounded-lg flex items-center justify-center font-bold shrink-0 text-sm">
                  <CheckCircle2 size={16} className="text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900 text-lg">{mod.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.5 Como você vai aprender */}
      <section className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Como você vai aprender</h2>
            <p className="text-neutral-400">Um formato pensado para quem não tem tempo a perder.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-400/10 rounded-full flex items-center justify-center mb-6 text-yellow-400">
                <MonitorPlay size={32} />
              </div>
              <h3 className="font-bold text-white mb-2 text-xl">Aulas Práticas</h3>
              <p className="text-neutral-400 text-sm">Direto ao ponto, com gravação de tela &quot;clique a clique&quot;. Você vê o que eu faço e repete na sua conta.</p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-400/10 rounded-full flex items-center justify-center mb-6 text-yellow-400">
                <Target size={32} />
              </div>
              <h3 className="font-bold text-white mb-2 text-xl">Foco em Resultados</h3>
              <p className="text-neutral-400 text-sm">Sem &quot;economês&quot; ou termos técnicos desnecessários. O objetivo é fazer o telefone da clínica tocar.</p>
            </div>
            <div className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-400/10 rounded-full flex items-center justify-center mb-6 text-yellow-400">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="font-bold text-white mb-2 text-xl">Acesso Anual</h3>
              <p className="text-neutral-400 text-sm">Consulte o conteúdo sempre que precisar ajustar uma campanha ou relembrar uma estratégia durante 1 ano.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bonus Section */}
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-2 block">Bônus Exclusivos</span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">Leve mais por menos</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                <Users size={32} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Comunidade de Alunos</h3>
              <p className="text-neutral-600 text-sm">Networking com outros médicos e troca de experiências sobre o mercado.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                <Award size={32} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Script de Vendas</h3>
              <p className="text-neutral-600 text-sm">Manual completo de atendimento para sua secretária fechar mais consultas.</p>
            </div>
            <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-200 text-center">
              <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                <ShieldCheck size={32} />
              </div>
              <h3 className="font-bold text-neutral-900 mb-2">Checklist Anti-Processo</h3>
              <p className="text-neutral-600 text-sm">Guia rápido do que NUNCA postar para evitar problemas com o CRM.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA / Pricing */}
      <section className="py-24 bg-neutral-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Comece agora mesmo.</h2>
          <p className="text-xl text-neutral-400 mb-10">
            O investimento para dominar o marketing da sua clínica é menor que o valor de uma única consulta.
          </p>
          
          <div className="bg-neutral-800 p-8 rounded-3xl border border-neutral-700 inline-block w-full max-w-md relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-neutral-900 text-xs font-bold px-3 py-1 rounded-bl-lg">
              OFERTA LIMITADA
            </div>
            <p className="text-neutral-400 text-sm line-through mb-2">De R$ 497,00</p>
            <div className="text-5xl font-black text-white mb-2">
              <span className="text-2xl align-top text-neutral-400 font-medium">12x</span> R$ 39<span className="text-2xl align-top text-neutral-400 font-medium">,62</span>
            </div>
            <p className="text-neutral-400 text-sm mb-8">ou R$ 397,00 à vista</p>
            
            <button 
              onClick={() => window.open('https://pay.hotmart.com/P94473352O?off=cl8se0bc&bid=1773232602186', '_blank')}
              className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2 mb-4"
            >
              QUERO ME INSCREVER COM DESCONTO
              <ArrowRight size={20} />
            </button>
            
            <div className="flex items-center justify-center gap-2 text-xs text-neutral-500">
              <Lock size={12} />
              Pagamento 100% Seguro
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center gap-2">
            <div className="flex gap-1 text-yellow-400">
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
              <Star fill="currentColor" size={20} />
            </div>
            <p className="text-neutral-400 text-sm">&quot;O melhor investimento que fiz para minha carreira este ano.&quot; - Dr. Ricardo M.</p>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-black text-neutral-900 mb-12 text-center">Perguntas Frequentes</h2>
          <div className="space-y-6">
            {[
              { q: "O curso serve para qualquer especialidade?", a: "Sim. Os princípios de tráfego e ética ensinados se aplicam a todas as áreas da medicina, desde cirurgia plástica até psiquiatria." },
              { q: "Preciso ter conhecimento prévio?", a: "Não. O curso começa do absoluto zero, ensinando como criar as contas até as estratégias avançadas." },
              { q: "Por quanto tempo terei acesso?", a: "O acesso é por 1 ano. Você pode assistir no seu ritmo e rever as aulas sempre que precisar durante esse período." },
              { q: "Tem suporte para dúvidas?", a: "Sim, todas as aulas possuem área de comentários onde nossa equipe responde suas dúvidas em até 24h úteis." }
            ].map((item, idx) => (
              <div key={idx} className="border-b border-neutral-200 pb-6">
                <h3 className="font-bold text-neutral-900 text-lg mb-2 flex items-center gap-2">
                  <HelpCircle className="text-neutral-400 w-5 h-5" />
                  {item.q}
                </h3>
                <p className="text-neutral-600 pl-7">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseAdsMedical;
