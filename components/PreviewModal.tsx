import React from 'react';
import { X } from 'lucide-react';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  content: string;
  coverImage?: string;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose, title, content, coverImage }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden animate-fade-in-down">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
          <h2 className="text-xl font-bold text-slate-900">Prévia do Artigo</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 overflow-y-auto flex-1">
          <article className="max-w-3xl mx-auto">
            {coverImage && (
              <img 
                src={coverImage} 
                alt={title} 
                className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
                referrerPolicy="no-referrer"
              />
            )}
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              {title || 'Título do Artigo'}
            </h1>
            
            <div className="prose prose-slate md:prose-lg max-w-none">
              <Markdown remarkPlugins={[remarkBreaks]}>{content || '*O conteúdo do artigo aparecerá aqui...*'}</Markdown>
            </div>
          </article>
        </div>
        
        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-300 transition-colors"
          >
            Fechar Prévia
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewModal;
