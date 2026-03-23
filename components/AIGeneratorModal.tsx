import React, { useState } from 'react';
import { X, Bot, Loader2 } from 'lucide-react';
import { generateBlogPost, BlogPostGenerationResult } from '../services/geminiService';

interface AIGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (data: BlogPostGenerationResult) => void;
}

const AIGeneratorModal: React.FC<AIGeneratorModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const result = await generateBlogPost(topic);
      onSuccess(result);
      setTopic('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao gerar o artigo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-down">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
              <Bot size={24} />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Gerador de Artigo com IA</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleGenerate} className="p-6">
          <p className="text-slate-600 mb-6 text-sm">
            Descreva o tema do artigo que você deseja criar. A Inteligência Artificial irá gerar o título, slug, resumo e o conteúdo completo formatado para você.
          </p>

          <div className="mb-6">
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Tema do Artigo
            </label>
            <textarea
              required
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder='Ex: "Eu quero escrever um artigo sobre as tendências de marketing digital para 2026, focando em inteligência artificial e automação."'
              className="w-full p-4 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all resize-none"
              rows={4}
              disabled={loading}
            />
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
              {error}
            </div>
          )}

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={loading}
              className="px-6 py-3 text-slate-600 font-medium hover:bg-slate-100 rounded-xl transition-colors disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading || !topic.trim()}
              className="px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Gerando Artigo...
                </>
              ) : (
                <>
                  <Bot size={18} />
                  Gerar Artigo Completo
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AIGeneratorModal;
