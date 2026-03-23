import React from 'react';
import { Play } from 'lucide-react';

const testimonials = [
  {
    name: "Vanessa de Paula",
    role: "Sócia e COO - iFinc",
    image: "https://www.leandrotelles.com.br/wp-content/uploads/2025/05/case-de-sucesso-ifinc.jpg",
  },
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
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-yellow-400 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">
            Confiança, clareza e parceria de verdade
          </h2>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto text-slate-800">
            Confira abaixo alguns depoimentos de clientes da LT Marketing de diferentes segmentos e objetivos de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, index) => (
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
  );
};

export default Testimonials;