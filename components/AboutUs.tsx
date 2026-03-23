import React, { useEffect } from 'react';
import { Target, Building, Rocket, ArrowRight, Award, TrendingUp } from 'lucide-react';

interface AboutUsProps {
  onOpenContact: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ onOpenContact }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative py-24 md:py-32 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80" 
            alt="Escritório LT Marketing" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/90 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-800 border border-neutral-700 mb-8 shadow-sm">
              <Building className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-400 text-xs font-bold tracking-wide uppercase">Nossa História</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-tight">
              Muito mais que uma agência. <br />
              <span className="text-yellow-400">Seu parceiro de crescimento.</span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-10 max-w-2xl">
              Nascemos com um propósito claro: eliminar o &quot;achismo&quot; do marketing e focar 100% em dados, performance e faturamento real para nossos clientes.
            </p>
            <button 
              onClick={onOpenContact}
              className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-1 flex items-center gap-2"
            >
              Fale com nossa equipe
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Posicionamento Estratégico */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
                Métricas de vaidade não pagam as contas.
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                Na LT Marketing, nós não comemoramos curtidas ou seguidores. Nosso sucesso é medido pelo volume de vendas, agendamentos e pelo Retorno sobre Investimento (ROI) que geramos para o seu negócio.
              </p>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Somos especialistas em tráfego pago, funis de conversão e estratégias digitais para negócios de alto valor, com forte atuação no nicho médico e de serviços. Nossa equipe atua como uma extensão da sua empresa.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0 text-yellow-600">
                    <Target size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Foco em Conversão</h4>
                    <p className="text-sm text-neutral-500 mt-1">Estratégias desenhadas para gerar leads qualificados.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center shrink-0 text-yellow-600">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900">Decisões por Dados</h4>
                    <p className="text-sm text-neutral-500 mt-1">Análise constante para otimização de verba.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-3xl transform translate-x-4 translate-y-4 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
                alt="Reunião Estratégica" 
                className="relative rounded-3xl shadow-2xl z-10 object-cover aspect-square md:aspect-[4/3]"
              />
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-neutral-100 flex items-center gap-4">
                <div className="w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center text-yellow-400">
                  <Award size={24} />
                </div>
                <div>
                  <p className="text-3xl font-black text-neutral-900">R$ 50M+</p>
                  <p className="text-sm text-neutral-500 font-medium">Gerados para clientes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. O Novo Local (Nosso Espaço) */}
      <section className="py-24 bg-neutral-50 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-2 block">Nossa Sede</span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              Um ambiente projetado para a alta performance
            </h2>
            <p className="text-lg text-neutral-600">
              Recentemente inauguramos nosso novo escritório. Um espaço moderno, inspirador e estruturado para que nossa equipe criativa e analítica possa entregar os melhores resultados para o seu projeto.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-md group">
              <img 
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80" 
                alt="Novo Escritório LT Marketing - Recepção" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-md group">
              <img 
                src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&w=800&q=80" 
                alt="Sala de Reuniões" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-md group">
              <img 
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80" 
                alt="Estúdio de Gravação" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="md:col-span-2 h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-md group">
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=1200&q=80" 
                alt="Área de Trabalho da Equipe" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. A Equipe */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-yellow-500 font-bold tracking-widest uppercase text-xs mb-2 block">Quem faz acontecer</span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6">
              Conheça nossa equipe
            </h2>
            <p className="text-lg text-neutral-600">
              Profissionais obcecados por conversão, design estratégico e análise de dados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" 
                  alt="Leandro Telles" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Leandro Telles</h3>
              <p className="text-yellow-600 font-medium text-sm mb-3">CEO & Fundador</p>
              <p className="text-neutral-500 text-sm px-4">Especialista em tráfego pago e estratégias de escala para negócios locais e infoprodutos.</p>
            </div>

            {/* Team Member 2 */}
            <div className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" 
                  alt="Diretora de Operações" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Vanessa</h3>
              <p className="text-yellow-600 font-medium text-sm mb-3">COO</p>
              <p className="text-neutral-500 text-sm px-4">Garante a excelência na entrega dos projetos e o sucesso do cliente em cada etapa.</p>
            </div>

            {/* Team Member 3 */}
            <div className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" 
                  alt="Head de Tráfego" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Equipe de Tráfego</h3>
              <p className="text-yellow-600 font-medium text-sm mb-3">Gestores de Performance</p>
              <p className="text-neutral-500 text-sm px-4">Especialistas certificados em Google Ads e Meta Ads, focados em otimização de ROI.</p>
            </div>

            {/* Team Member 4 */}
            <div className="group text-center">
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white">
                <div className="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" 
                  alt="Head de Criação" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-900">Equipe Criativa</h3>
              <p className="text-yellow-600 font-medium text-sm mb-3">Designers & Copywriters</p>
              <p className="text-neutral-500 text-sm px-4">Responsáveis por criar anúncios persuasivos, landing pages de alta conversão e identidade visual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA Final */}
      <section className="py-24 bg-neutral-900 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <Rocket className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Pronto para escalar seu negócio?</h2>
          <p className="text-xl text-neutral-400 mb-10">
            Junte-se às empresas que já transformaram seus resultados com a metodologia da LT Marketing.
          </p>
          <button 
            onClick={onOpenContact}
            className="px-10 py-5 bg-yellow-400 hover:bg-yellow-500 text-neutral-900 font-bold rounded-xl transition-all shadow-lg hover:shadow-yellow-400/50 transform hover:-translate-y-1 inline-flex items-center gap-2 text-lg"
          >
            Solicitar Proposta Estratégica
            <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
