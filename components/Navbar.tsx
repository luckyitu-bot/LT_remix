import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Rocket, ChevronDown } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigate: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
        if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target as Node)) {
            setIsAboutDropdownOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (page: string, hash?: string) => {
    onNavigate(page);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
        window.scrollTo(0,0);
    }
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <img 
              src="https://www.leandrotelles.com.br/wp-content/uploads/2026/01/cropped-LT-MARKETING-AMARELO-DESCRITIVO-1-300x52.png" 
              alt="LT Marketing Agência" 
              className="h-10 w-auto object-contain"
            />
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => handleNavClick('home')} className="text-slate-600 hover:text-black hover:bg-slate-50 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                Home
              </button>
              
              {/* Dropdown for Sobre Nós */}
              <div className="relative inline-block text-left" ref={aboutDropdownRef}>
                <button 
                    onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                    className="group inline-flex items-center text-slate-600 hover:text-black hover:bg-slate-50 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                    Sobre Nós
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isAboutDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isAboutDropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden animate-fade-in-up">
                        <div className="py-1">
                            <button onClick={() => handleNavClick('about')} className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                                A Agência
                            </button>
                            <button onClick={() => handleNavClick('cases')} className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                                Cases de Sucesso
                            </button>
                        </div>
                    </div>
                )}
              </div>
              
              {/* Dropdown for Contrate */}
              <div className="relative inline-block text-left" ref={dropdownRef}>
                <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="group inline-flex items-center text-slate-600 hover:text-black hover:bg-slate-50 px-3 py-2 rounded-md text-sm font-semibold transition-colors"
                >
                    Contrate
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden animate-fade-in-up">
                        <div className="py-1">
                            <button onClick={() => handleNavClick('agency')} className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                                Agência 360º
                            </button>
                            <button onClick={() => handleNavClick('traffic')} className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                                Gestão de Tráfego
                            </button>
                            <button onClick={() => handleNavClick('medical')} className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors">
                                Marketing Médico
                            </button>
                            <button onClick={() => handleNavClick('course-ads-medical')} className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-yellow-50 hover:text-yellow-700 transition-colors border-t border-slate-100">
                                Curso Ads Médico
                            </button>
                        </div>
                    </div>
                )}
              </div>

              <button onClick={() => handleNavClick('blog')} className="text-slate-600 hover:text-black hover:bg-slate-50 px-3 py-2 rounded-md text-sm font-semibold transition-colors">
                Blog
              </button>
              
              <button 
                onClick={onOpenContact}
                className="bg-black text-white hover:bg-slate-800 px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Rocket size={16} className="text-yellow-400" />
                Solicitar Proposta
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-black hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-xl h-screen overflow-y-auto">
          <div className="px-4 pt-4 pb-20 space-y-2">
            <button onClick={() => handleNavClick('home')} className="w-full text-left text-slate-600 hover:text-black hover:bg-slate-50 block px-3 py-3 rounded-md text-base font-semibold">
              Home
            </button>
            
            <div className="pl-4 border-l-2 border-slate-100 ml-3 space-y-1 my-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-3 mb-2 block">Sobre Nós</span>
                <button onClick={() => handleNavClick('about')} className="w-full text-left text-slate-600 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium">
                    A Agência
                </button>
                <button onClick={() => handleNavClick('cases')} className="w-full text-left text-slate-600 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium">
                    Cases de Sucesso
                </button>
            </div>
            
            <div className="pl-4 border-l-2 border-slate-100 ml-3 space-y-1 my-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-3 mb-2 block">Contrate</span>
                <button onClick={() => handleNavClick('agency')} className="w-full text-left text-slate-600 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium">
                    Agência 360º
                </button>
                <button onClick={() => handleNavClick('traffic')} className="w-full text-left text-slate-600 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium">
                    Gestão de Tráfego
                </button>
                <button onClick={() => handleNavClick('medical')} className="w-full text-left text-slate-600 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium">
                    Marketing Médico
                </button>
                <button onClick={() => handleNavClick('course-ads-medical')} className="w-full text-left text-slate-600 hover:text-yellow-600 block px-3 py-2 rounded-md text-base font-medium">
                    Curso Ads Médico
                </button>
            </div>

            <button onClick={() => handleNavClick('blog')} className="w-full text-left text-slate-600 hover:text-black hover:bg-slate-50 block px-3 py-3 rounded-md text-base font-semibold">
              Blog
            </button>

            <button 
              onClick={() => {
                setIsOpen(false);
                onOpenContact();
              }}
              className="w-full text-center mt-6 bg-yellow-400 text-black block px-3 py-4 rounded-lg text-base font-bold shadow-md"
            >
              Solicitar Proposta
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;