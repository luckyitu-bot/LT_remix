import React, { useState } from 'react';
import { X, Loader2, Lock, User, Mail, Phone, Globe, MessageSquare, Sparkles } from 'lucide-react';
import { generateMarketingStrategy } from '../services/geminiService';

interface AIStrategyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: any, strategy: string) => void;
}

const AIStrategyModal: React.FC<AIStrategyModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    objective: ''
  });
  
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.objective.trim()) return;
    
    setLoading(true);
    
    try {
      const result = await generateMarketingStrategy(formData.objective);
      
      // Send email notification (fire and forget)
      try {
        fetch('/api/send-strategy', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...formData, strategy: result }),
        });
      } catch (err) {
        console.error("Email error", err);
      }

      onSuccess(formData, result);
      onClose();

    } catch (error) {
      console.error(error);
      alert("Erro ao gerar estratégia. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-neutral-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Header */}
        <div className="bg-neutral-900 p-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-yellow-400 rounded-lg">
                <Sparkles className="text-neutral-900 w-5 h-5" />
            </div>
            <div>
                <h3 className="text-white font-bold text-lg">Consultoria Express IA</h3>
                <p className="text-neutral-400 text-xs">Desbloqueie sua estratégia agora</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
            <form onSubmit={handleGenerate} className="space-y-4">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-4 w-4 text-neutral-400" />
                    </div>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Seu Nome"
                        className="pl-10 block w-full rounded-xl border-neutral-200 bg-neutral-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-neutral-900 text-sm py-3 outline-none transition-all"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-neutral-400" />
                    </div>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="E-mail Corporativo"
                        className="pl-10 block w-full rounded-xl border-neutral-200 bg-neutral-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-neutral-900 text-sm py-3 outline-none transition-all"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-2 gap-3">
                        <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-4 w-4 text-neutral-400" />
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="WhatsApp"
                            className="pl-10 block w-full rounded-xl border-neutral-200 bg-neutral-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-neutral-900 text-sm py-3 outline-none transition-all"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Globe className="h-4 w-4 text-neutral-400" />
                        </div>
                        <input
                            type="text"
                            name="website"
                            placeholder="Site/Insta"
                            className="pl-10 block w-full rounded-xl border-neutral-200 bg-neutral-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-neutral-900 text-sm py-3 outline-none transition-all"
                            value={formData.website}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute top-3 left-3 pointer-events-none">
                        <MessageSquare className="h-4 w-4 text-neutral-400" />
                    </div>
                    <textarea
                        name="objective"
                        required
                        rows={4}
                        placeholder="Descreva seu negócio e qual o maior desafio atual..."
                        className="pl-10 block w-full rounded-xl border-neutral-200 bg-neutral-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-neutral-900 text-sm py-3 outline-none transition-all resize-none"
                        value={formData.objective}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    disabled={loading || !formData.objective.trim() || !formData.name.trim()}
                    className="w-full flex justify-center items-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-neutral-900 bg-yellow-400 hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-yellow-400/20"
                >
                    {loading ? (
                        <>
                            <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                            Analisando...
                        </>
                    ) : (
                        <>
                            <Lock className="w-4 h-4 mr-2" />
                            Desbloquear Estratégia
                        </>
                    )}
                </button>
                <p className="text-[10px] text-center text-neutral-400 mt-2">
                    Ao clicar, você concorda em receber o contato da nossa equipe.
                </p>
            </form>
        </div>
      </div>
    </div>
  );
};

export default AIStrategyModal;
