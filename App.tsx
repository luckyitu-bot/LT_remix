import React, { useState, useEffect } from 'react';
import { doc } from 'firebase/firestore';
import { getDocFromServer } from 'firebase/firestore';
import { db } from './services/firebase';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import AIStrategy from './components/AIStrategy';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ServiceAgency360 from './components/ServiceAgency360';
import ServiceTraffic from './components/ServiceTraffic';
import ServiceMedical from './components/ServiceMedical';
import CourseAdsMedical from './components/CourseAdsMedical';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';
import AboutUs from './components/AboutUs';
import Cases from './components/Cases';
import AIStrategyModal from './components/AIStrategyModal';
import AdminPanel from './components/AdminPanel';
import { Check, ArrowRight, Bot } from 'lucide-react';

interface OpenContactProps {
  onOpenContact: () => void;
}
// Dark CTA Section for contrast against white page
const CtaSection: React.FC<OpenContactProps> = ({ onOpenContact }) => (
  <section id="contato" className="py-24 bg-neutral-900 relative overflow-hidden">
    {/* Abstract Shapes */}
    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-neutral-600/10 rounded-full blur-3xl"></div>

    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 mb-6">
        <span className="text-yellow-400 text-xs font-bold uppercase tracking-wide">Agenda Aberta</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
        Vamos construir o próximo nível <br />
        <span className="text-yellow-400">da sua empresa?</span>
      </h2>
      <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto">
        Estamos prontos para entender seu momento e desenhar o plano ideal para seus objetivos de crescimento.
      </p>
      
      <div className="bg-neutral-800/50 backdrop-blur-sm rounded-3xl p-8 border border-neutral-700 text-left max-w-xl mx-auto mb-12 hover:border-yellow-400/30 transition-colors">
        <h3 className="text-white font-bold text-lg mb-6 border-b border-neutral-700 pb-4">O que entregamos:</h3>
        <ul className="space-y-4">
          {[
            'Estratégia de Crescimento Validada',
            'Gestão de Tráfego e Performance',
            'Ecossistema de Vendas (Funis/Sites)',
            'Relatórios e Inteligência de Dados',
            'Acompanhamento de Liderança Sênior'
          ].map((item, i) => (
            <li key={i} className="flex items-start text-neutral-300 font-medium">
              <Check className="w-5 h-5 text-yellow-400 mr-3 shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <button 
        onClick={onOpenContact}
        className="group inline-flex items-center justify-center px-8 py-5 text-lg font-bold rounded-xl text-neutral-900 bg-yellow-400 hover:bg-yellow-500 transition-all shadow-xl hover:shadow-yellow-400/20 transform hover:-translate-y-1"
      >
        Falar com um Especialista
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
      <p className="mt-6 text-sm text-neutral-500">
        Converse diretamente com nosso time comercial.
      </p>
    </div>
  </section>
);
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [currentPostId, setCurrentPostId] = useState<string | number | null>(null);
  const [aiData, setAIData] = useState<{
    formData?: { name: string; email: string; phone: string; website: string; objective: string };
    strategy?: string | null;
  }>({});

  useEffect(() => {
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if (error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Firebase connection failed. Please check your configuration and security rules.");
        }
        // Other errors can be ignored for this simple connection test.
      }
    };
    testConnection();
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleReadPost = (id: string | number) => {
    setCurrentPostId(id);
    setCurrentPage('blog-post');
  };

  const handleAIModalSuccess = (formData: any, strategy: string) => {
    setAIData({ formData, strategy });
    setIsAIModalOpen(false);
    setCurrentPage('home');
    
    // Wait for render then scroll
    setTimeout(() => {
      const element = document.getElementById('ai-consult');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'admin':
        return <AdminPanel />;
      case 'agency':
        return <ServiceAgency360 onOpenContact={openModal} externalFormData={aiData.formData} externalStrategy={aiData.strategy} />;
      case 'traffic':
        return <ServiceTraffic onOpenContact={openModal} externalFormData={aiData.formData} externalStrategy={aiData.strategy} />;
      case 'medical':
        return <ServiceMedical onOpenContact={openModal} externalFormData={aiData.formData} externalStrategy={aiData.strategy} />;
      case 'course-ads-medical':
        return <CourseAdsMedical />;
      case 'blog':
        return <Blog onOpenContact={openModal} onReadPost={handleReadPost} />;
      case 'blog-post':
        return currentPostId ? (
          <BlogPost 
            postId={currentPostId} 
            onBack={() => setCurrentPage('blog')} 
            onOpenContact={openModal} 
          />
        ) : (
          <Blog onOpenContact={openModal} onReadPost={handleReadPost} />
        );
      case 'about':
        return <AboutUs onOpenContact={openModal} />;
      case 'cases':
        return <Cases onOpenContact={openModal} />;
      case 'home':
      default:
        return (
          <>
            <Hero onOpenContact={openModal} />
            <About />
            <Portfolio onOpenContact={openModal} />
            <Testimonials />
            <Process />
            <AIStrategy 
              onOpenContact={openModal} 
              externalFormData={aiData.formData}
              externalStrategy={aiData.strategy}
            />
            <FAQ />
            <CtaSection onOpenContact={openModal} />
          </>
        );
    }
  };

  // If we are on the admin page, we don't want the regular navbar and footer
  if (currentPage === 'admin') {
    return (
      <div className="min-h-screen bg-white text-neutral-900 overflow-x-hidden selection:bg-yellow-200 selection:text-neutral-900">
        <div className="absolute top-4 right-4 z-50">
          <button onClick={() => setCurrentPage('home')} className="text-sm font-bold text-slate-500 hover:text-slate-900 bg-white px-4 py-2 rounded-lg shadow-sm">
            Voltar ao Site
          </button>
        </div>
        <main>
          {renderPage()}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 overflow-x-hidden selection:bg-yellow-200 selection:text-neutral-900">
      <Navbar onOpenContact={openModal} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
      
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
      <AIStrategyModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
        onSuccess={handleAIModalSuccess} 
      />

      {/* Floating AI Button */}
      <button
        onClick={() => setIsAIModalOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-yellow-400 hover:bg-yellow-500 text-neutral-900 p-4 rounded-full shadow-2xl hover:shadow-yellow-400/40 transition-all transform hover:scale-110 group"
        aria-label="Consultoria IA Express"
      >
        <Bot className="w-8 h-8" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-neutral-900 text-white text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Consultoria IA Grátis
        </span>
      </button>
    </div>
  );
}

export default App;