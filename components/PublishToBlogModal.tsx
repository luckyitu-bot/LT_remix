import React, { useState } from 'react';
import { X, Save, Eye, Image as ImageIcon } from 'lucide-react';
import MarkdownEditor from './MarkdownEditor';
import PreviewModal from './PreviewModal';
import { db, storage } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { handleFirestoreError, OperationType } from '../services/errorHandler';

const ImageUploader: React.FC<{ onUpload: (url: string) => void, currentUrl?: string }> = ({ onUpload, currentUrl }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const storageRef = ref(storage, `uploads/${Date.now()}_${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      }, 
      (error) => {
        console.error("Upload failed", error);
        setUploading(false);
        alert("Erro ao fazer upload da imagem.");
      }, 
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        onUpload(downloadURL);
        setUploading(false);
        setProgress(0);
      }
    );
  };

  return (
    <div className="border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:bg-slate-50 transition-colors">
      <input 
        type="file" 
        accept="image/*" 
        className="hidden" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
      />
      {currentUrl && !uploading && (
        <div className="mb-4 relative group inline-block">
          <img src={currentUrl} alt="Preview" className="max-h-32 rounded-lg mx-auto" />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
            <button type="button" onClick={() => fileInputRef.current?.click()} className="text-white font-bold text-sm bg-black/50 px-3 py-1 rounded-full">Trocar Imagem</button>
          </div>
        </div>
      )}
      {!currentUrl && !uploading && (
        <button type="button" onClick={() => fileInputRef.current?.click()} className="flex flex-col items-center justify-center w-full text-slate-500 hover:text-yellow-600">
          <ImageIcon className="w-8 h-8 mb-2 text-slate-400" />
          <span className="text-sm font-medium">Clique para fazer upload de uma imagem</span>
        </button>
      )}
      {uploading && (
        <div className="w-full">
          <div className="flex justify-between text-xs text-slate-500 mb-1">
            <span>Fazendo upload...</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
            <div className="bg-yellow-400 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

interface PublishToBlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialContent: string;
}

const PublishToBlogModal: React.FC<PublishToBlogModalProps> = ({ isOpen, onClose, initialContent }) => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState(initialContent);
  const [coverImage, setCoverImage] = useState('');
  const [status, setStatus] = useState('draft');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, 'blog_posts'), {
        title,
        slug,
        excerpt,
        content,
        coverImage,
        status,
        isMarkdown: true,
        createdAt: new Date().toISOString()
      });
      alert('Artigo publicado com sucesso!');
      onClose();
    } catch (error) {
      const friendlyError = handleFirestoreError(error, OperationType.CREATE, 'blog_posts/new');
      alert(friendlyError);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl my-8 flex flex-col animate-fade-in-down">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 shrink-0">
          <h2 className="text-2xl font-bold text-slate-900">Publicar no Blog</h2>
          <div className="flex items-center gap-3">
            <button 
              type="button" 
              onClick={() => setIsPreviewOpen(true)} 
              className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-slate-200 font-bold transition-colors text-sm"
            >
              <Eye size={16} /> Ver Prévia
            </button>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
              <X size={24} />
            </button>
          </div>
        </div>

        <div className="p-8 overflow-y-auto">
          <form id="publish-form" onSubmit={handleSave} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Título</label>
              <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full p-2 border border-slate-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Slug (URL)</label>
              <input required type="text" value={slug} onChange={e => setSlug(e.target.value)} className="w-full p-2 border border-slate-300 rounded-lg" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Resumo</label>
              <textarea required value={excerpt} onChange={e => setExcerpt(e.target.value)} className="w-full p-2 border border-slate-300 rounded-lg" rows={2}></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Conteúdo (Markdown)</label>
              <MarkdownEditor 
                value={content} 
                onChange={setContent} 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Imagem de Capa</label>
                <ImageUploader 
                  currentUrl={coverImage} 
                  onUpload={setCoverImage} 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
                <select value={status} onChange={e => setStatus(e.target.value)} className="w-full p-2 border border-slate-300 rounded-lg">
                  <option value="draft">Rascunho</option>
                  <option value="published">Publicado</option>
                </select>
              </div>
            </div>
          </form>
        </div>
        
        <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end shrink-0 gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 bg-slate-200 text-slate-700 font-medium rounded-lg hover:bg-slate-300 transition-colors"
          >
            Cancelar
          </button>
          <button
            type="submit"
            form="publish-form"
            disabled={loading}
            className="bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 flex items-center gap-2 disabled:opacity-50"
          >
            <Save size={18} /> {loading ? 'Salvando...' : 'Salvar no Blog'}
          </button>
        </div>
      </div>

      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        title={title}
        content={content}
        coverImage={coverImage}
      />
    </div>
  );
};

export default PublishToBlogModal;
