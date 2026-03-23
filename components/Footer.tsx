import React from 'react';
import { Instagram, Linkedin, Mail, MapPin, Youtube, Settings } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-neutral-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-sm">
            <img 
              src="https://www.leandrotelles.com.br/wp-content/uploads/2026/01/cropped-LT-MARKETING-AMARELO-DESCRITIVO-1-300x52.png" 
              alt="Leandro Telles Marketing" 
              className="h-12 w-auto object-contain mb-6"
            />
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              Ajudamos empresas e profissionais a se destacarem no digital com sites de alta performance, design estratégico e foco total em conversão.
            </p>
            <div className="flex items-center gap-2 text-neutral-400 text-sm">
              <MapPin size={16} className="text-yellow-400" />
              <span className="text-white">São Paulo, Brasil</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-400 text-sm mt-2">
              <Mail size={16} className="text-yellow-400" />
              <a href="mailto:contato@leandrotelles.com.br" className="text-white hover:text-yellow-400 transition-colors">contato@leandrotelles.com.br</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Siga nas Redes</h4>
            <div className="flex gap-4">
              <a href="https://www.youtube.com/channel/UCERxp_D3qMWOkppD5ylYlgg" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-neutral-900 transition-all duration-300" title="YouTube">
                <span className="sr-only">YouTube</span>
                <Youtube size={20} />
              </a>
              <a href="https://www.linkedin.com/company/leandro-telles-marketing/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-neutral-900 transition-all duration-300" title="LinkedIn">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/mktcomleandrotelles/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-neutral-900 transition-all duration-300" title="Instagram @mktcomleandrotelles">
                <span className="sr-only">Instagram @mktcomleandrotelles</span>
                <Instagram size={20} />
              </a>
              <a href="https://www.instagram.com/ltmarketing.agencia/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-yellow-400 hover:bg-yellow-400 hover:text-neutral-900 transition-all duration-300" title="Instagram @ltmarketing.agencia">
                <span className="sr-only">Instagram @ltmarketing.agencia</span>
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-neutral-800 text-center md:flex md:justify-between items-center text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} Leandro Telles Marketing. Todos os direitos reservados.</p>
          <div className="mt-2 md:mt-0 flex items-center justify-center gap-4">
            <span>Desenvolvido com tecnologia de ponta</span>
            {onNavigate && (
              <button 
                onClick={() => onNavigate('admin')} 
                className="text-neutral-700 hover:text-yellow-400 transition-colors"
                title="Acesso Restrito"
              >
                <Settings size={14} />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;