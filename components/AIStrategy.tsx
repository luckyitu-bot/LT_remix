import React, { useState } from 'react';
import { Sparkles, Loader2, Send, User, Mail, Phone, Globe, MessageSquare, Lock, Download } from 'lucide-react';
import { generateMarketingStrategy } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { jsPDF } from 'jspdf';
import PublishToBlogModal from './PublishToBlogModal';
import { Edit3 } from 'lucide-react';

interface AIStrategyProps {
  onOpenContact?: () => void;
  externalFormData?: {
    name: string;
    email: string;
    phone: string;
    website: string;
    objective: string;
  };
  externalStrategy?: string | null;
}

const AIStrategy: React.FC<AIStrategyProps> = ({ externalFormData, externalStrategy }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    objective: ''
  });
  
  const [strategy, setStrategy] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPublishModalOpen, setIsPublishModalOpen] = useState(false);

  // Effect to handle external data updates (from floating button modal)
  React.useEffect(() => {
    if (externalFormData && externalStrategy) {
      setFormData(externalFormData);
      setStrategy(externalStrategy);
      setIsSubmitted(true);
    }
  }, [externalFormData, externalStrategy]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.objective.trim()) return;
    
    setLoading(true);
    setStrategy(null);
    
    try {
      const result = await generateMarketingStrategy(formData.objective);
      setStrategy(result);
      setIsSubmitted(true);

      // Send email notification with strategy
      try {
        await fetch('/api/send-strategy', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            strategy: result
          }),
        });
      } catch (emailError) {
        console.error("Erro ao enviar email:", emailError);
      }

    } catch (err) {
      console.error(err);
      setStrategy("Erro ao gerar estratégia. Por favor, verifique sua conexão e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = `Olá, gerei uma estratégia na Consultoria Express com IA e gostaria de agendar a implementação. Meu nome é ${formData.name}.`;
    window.open(`https://wa.me/5511996802716?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleDownloadPDF = async () => {
    if (!strategy) return;

    const doc = new jsPDF();
    
    // Add Header - Dark Gray (Neutral-900 equivalent approx 23, 23, 23)
    doc.setFillColor(23, 23, 23); 
    doc.rect(0, 0, 210, 40, 'F');
    
    try {
        // Fetch logo from our proxy to avoid CORS
        const response = await fetch('/api/logo');
        const blob = await response.blob();
        const base64 = await new Promise<string>((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(blob);
        });
        
        // Add logo image
        // Original size: 300x52. Aspect ratio ~5.77
        // Target width: 60mm. Height = 60 / 5.77 ~= 10.4mm
        doc.addImage(base64, 'PNG', 20, 15, 60, 10.4);
        
    } catch (e) {
        console.error("Error loading logo for PDF:", e);
        // Fallback to text if image fails
        doc.setTextColor(250, 204, 21); // yellow-400
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.text('LT Marketing', 20, 20);
    }
    
    doc.setTextColor(163, 163, 163); // neutral-400
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Consultoria Express com IA', 20, 32); // Adjusted Y position

    // Add Content
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    
    const splitText = doc.splitTextToSize(strategy.replace(/\*\*/g, ''), 170);
    let y = 60;
    
    // Add client info
    doc.setFontSize(10);
    doc.setTextColor(82, 82, 82); // neutral-600
    doc.text(`Cliente: ${formData.name}`, 20, 50);
    doc.text(`Data: ${new Date().toLocaleDateString()}`, 150, 50);
    
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);

    // Page loop for long text
    for (let i = 0; i < splitText.length; i++) {
        if (y > 280) {
            doc.addPage();
            y = 20;
        }
        doc.text(splitText[i], 20, y);
        y += 7;
    }
    
    // Add Footer CTA
    // Ensure enough space for the button (approx 30 units needed)
    if (y > 250) {
        doc.addPage();
        y = 20;
    }
    y += 10;
    
    // Button Background
    doc.setFillColor(250, 204, 21); // Yellow
    doc.rect(20, y, 170, 15, 'F');
    
    // Button Text
    doc.setTextColor(23, 23, 23); // Dark Gray
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    const footerText = 'Agendar implementação';
    doc.text(footerText, 105, y + 10, { align: 'center' });

    // Make it clickable
    const message = `Olá, gerei uma estratégia na Consultoria Express com IA e gostaria de agendar a implementação. Meu nome é ${formData.name}.`;
    const whatsappUrl = `https://wa.me/5511996802716?text=${encodeURIComponent(message)}`;
    
    // Add link over the button area
    doc.link(20, y, 170, 15, { url: whatsappUrl });

    doc.save('Estrategia-LT-Marketing.pdf');
  };

  return (
    <section id="ai-consult" className="py-24 bg-white border-t border-slate-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-100 via-white to-white opacity-60 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-2xl mb-5 shadow-sm">
            <Sparkles className="text-yellow-600 w-6 h-6" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Consultoria Express com IA
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Preencha seus dados abaixo e nossa Inteligência Artificial criará, em segundos, um <strong>plano tático inicial</strong> para alavancar seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form Side */}
          <div className={`lg:col-span-2 ${isSubmitted ? 'hidden lg:block lg:opacity-50 pointer-events-none' : ''}`}>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xl shadow-slate-200/50">
                <div className="mb-6 pb-4 border-b border-slate-100">
                    <h3 className="font-bold text-slate-900 text-lg">Seus Dados</h3>
                    <p className="text-xs text-slate-500">Para receber a análise completa.</p>
                </div>
                
                <form onSubmit={handleGenerate} className="space-y-4">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                            type="text"
                            name="name"
                            required
                            placeholder="Seu Nome"
                            className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-slate-900 text-sm py-3 outline-none transition-all"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-4 w-4 text-slate-400" />
                        </div>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="E-mail Corporativo"
                            className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-slate-900 text-sm py-3 outline-none transition-all"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                         <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Phone className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                type="tel"
                                name="phone"
                                required
                                placeholder="WhatsApp"
                                className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-slate-900 text-sm py-3 outline-none transition-all"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Globe className="h-4 w-4 text-slate-400" />
                            </div>
                            <input
                                type="text"
                                name="website"
                                placeholder="Site/Insta"
                                className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-slate-900 text-sm py-3 outline-none transition-all"
                                value={formData.website}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                            <MessageSquare className="h-4 w-4 text-slate-400" />
                        </div>
                        <textarea
                            name="objective"
                            required
                            rows={4}
                            placeholder="Descreva seu negócio e qual o maior desafio atual..."
                            className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-slate-900 text-sm py-3 outline-none transition-all resize-none"
                            value={formData.objective}
                            onChange={handleChange}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading || !formData.objective.trim() || !formData.name.trim()}
                        className="w-full flex justify-center items-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-slate-900 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-yellow-400/20"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                                Analisando Dados...
                            </>
                        ) : (
                            <>
                                <Lock className="w-4 h-4 mr-2" />
                                Desbloquear Estratégia
                            </>
                        )}
                    </button>
                    <p className="text-[10px] text-center text-slate-400 mt-2">
                        Ao clicar, você concorda em receber o contato da nossa equipe.
                    </p>
                </form>
            </div>
          </div>

          {/* Result Side */}
          <div className="lg:col-span-3">
             {!strategy ? (
                 <div className="h-full bg-slate-50 border-2 border-dashed border-slate-200 rounded-3xl flex flex-col items-center justify-center p-8 text-center min-h-[400px]">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                        <Sparkles className="text-slate-300 w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-400 mb-2">Aguardando Dados</h3>
                    <p className="text-slate-400 max-w-xs text-sm">
                        Preencha o formulário ao lado para que nossa IA possa gerar um diagnóstico personalizado para sua empresa.
                    </p>
                 </div>
             ) : (
                <div className="bg-neutral-900 rounded-3xl p-8 shadow-2xl relative overflow-hidden h-full border border-neutral-800 animate-fade-in flex flex-col">
                    {/* Abstract bg for result */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-800">
                             <div className="p-2 bg-yellow-400 rounded-lg">
                                <Sparkles className="text-neutral-900 w-5 h-5" />
                             </div>
                             <div>
                                 <h3 className="text-white font-bold text-lg">Estratégia Gerada</h3>
                                 <p className="text-neutral-400 text-xs">Baseada no perfil: {formData.name} - {formData.website || 'Empresa'}</p>
                             </div>
                        </div>

                        {/* Truncated Content with Fade Out */}
                        <div className="prose prose-invert prose-sm max-w-none relative overflow-hidden mb-6" style={{ maxHeight: '400px' }}>
                             <ReactMarkdown 
                                 remarkPlugins={[remarkBreaks]}
                                 components={{
                                 h1: ({...props}) => <h3 className="text-yellow-400 font-black text-xl mb-4 mt-2" {...props} />,
                                 h2: ({...props}) => <h4 className="text-white font-bold text-lg mb-3 mt-6 border-l-4 border-yellow-500 pl-3" {...props} />,
                                 strong: ({...props}) => <strong className="text-white font-bold" {...props} />,
                                 li: ({...props}) => <li className="text-neutral-300 mb-1" {...props} />,
                                 p: ({...props}) => <p className="text-neutral-300 mb-4 leading-relaxed" {...props} />
                             }}>
                                {strategy}
                             </ReactMarkdown>
                             
                             {/* Fade Out Gradient */}
                             <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-neutral-900 to-transparent pointer-events-none"></div>
                        </div>

                        <div className="mt-auto space-y-4 pt-6 border-t border-neutral-800">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <button 
                                    onClick={handleDownloadPDF}
                                    className="flex-1 bg-yellow-400 text-neutral-900 font-bold py-4 rounded-xl hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-yellow-400/20"
                                >
                                    <Download className="w-4 h-4" />
                                    Baixar PDF Completo
                                </button>
                                <button 
                                    onClick={handleWhatsAppClick}
                                    className="flex-1 bg-white text-neutral-900 font-bold py-4 rounded-xl hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2 group"
                                >
                                    Agendar Implementação
                                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button 
                                    onClick={() => setIsPublishModalOpen(true)}
                                    className="flex-1 bg-purple-600 text-white font-bold py-4 rounded-xl hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 group"
                                >
                                    <Edit3 className="w-4 h-4" />
                                    Editar e Publicar no Blog
                                </button>
                            </div>
                            <p className="text-center text-xs text-neutral-500">
                                A estratégia completa também foi enviada para seu e-mail.
                            </p>
                        </div>
                    </div>
                </div>
             )}
          </div>
        </div>
      </div>
      
      {isPublishModalOpen && strategy && (
        <PublishToBlogModal 
          isOpen={isPublishModalOpen}
          onClose={() => setIsPublishModalOpen(false)}
          initialContent={strategy}
        />
      )}
    </section>
  );
};

export default AIStrategy;