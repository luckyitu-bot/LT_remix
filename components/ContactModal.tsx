import React, { useState } from 'react';
import { X, Send, User, Mail, Phone, Building, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const text = `*Nova Solicitação de Proposta (Site)*%0A%0A*Nome:* ${formData.name}%0A*Empresa:* ${formData.company}%0A*Email:* ${formData.email}%0A*Telefone:* ${formData.phone}%0A*Mensagem:* ${formData.message}`;
    
    // Redirect to WhatsApp with data
    window.open(`https://wa.me/5511999999999?text=${text}`, '_blank');
    
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-lg border border-slate-100">
          
          {/* Header */}
          <div className="bg-slate-50 px-6 py-4 flex items-center justify-between border-b border-slate-100">
            <div>
              <h3 className="text-lg font-black text-slate-900" id="modal-title">Solicitar Proposta</h3>
              <p className="text-sm text-slate-500">Preencha para falar com um especialista.</p>
            </div>
            <button 
              onClick={onClose}
              className="rounded-full p-2 bg-white text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all"
            >
              <X size={20} />
            </button>
          </div>

          {/* Form */}
          <div className="px-6 py-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Seu Nome"
                  className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-slate-900 sm:text-sm py-3 transition-colors outline-none"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Seu E-mail Corporativo"
                  className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-slate-900 sm:text-sm py-3 transition-colors outline-none"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="WhatsApp"
                    className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-slate-900 sm:text-sm py-3 transition-colors outline-none"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Building className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Nome da Empresa"
                    className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-slate-900 sm:text-sm py-3 transition-colors outline-none"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-slate-400" />
                </div>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Descreva brevemente seu objetivo..."
                  className="pl-10 block w-full rounded-xl border-slate-200 bg-slate-50 border focus:border-yellow-400 focus:bg-white focus:ring-0 text-slate-900 sm:text-sm py-3 transition-colors outline-none resize-none"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-bold rounded-xl text-slate-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <Send className="h-5 w-5 text-slate-900 group-hover:text-black" />
                  </span>
                  Receber Proposta Estratégica
                </button>
                <p className="text-xs text-center text-slate-400 mt-4">
                  Seus dados estão seguros. Entraremos em contato em até 24h.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;