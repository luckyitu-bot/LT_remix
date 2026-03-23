import React, { useState, useEffect, useRef } from 'react';
import { auth, signInWithGoogle, logOut, db, storage } from '../services/firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { onAuthStateChanged, User } from 'firebase/auth';
import { Settings, FileText, LogOut, Plus, Edit2, Trash2, Save, X, Image as ImageIcon, Users, AlertCircle, Bot, Eye } from 'lucide-react';
import { handleFirestoreError, OperationType } from '../services/errorHandler';
import AIGeneratorModal from './AIGeneratorModal';
import MarkdownEditor from './MarkdownEditor';
import PreviewModal from './PreviewModal';
import { BlogPostGenerationResult } from '../services/geminiService';

const ImageUploader: React.FC<{ onUpload: (url: string) => void, currentUrl?: string }> = ({ onUpload, currentUrl }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

// A simple notification component to display feedback to the user.
const Notification: React.FC<{ message: string; type: 'success' | 'error'; onClose: () => void }> = ({ message, type, onClose }) => {
  if (!message) return null;

  useEffect(() => {
    const timer = setTimeout(onClose, 5000); // Auto-dismiss after 5 seconds
    return () => clearTimeout(timer);
  }, [message, onClose]);

  const isError = type === 'error';
  const bgColor = isError ? 'bg-red-500' : 'bg-emerald-500';

  return (
    <div className={`fixed top-24 right-8 z-50 text-white p-4 rounded-lg shadow-lg flex items-center gap-3 animate-fade-in-down ${bgColor}`}>
      {isError && <AlertCircle />}
      <span>{message}</span>
      <button onClick={onClose} className="text-white/80 hover:text-white">
        <X size={18} />
      </button>
    </div>
  );
};

const AdminPanel: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'blog' | 'users'>('blog');
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-50"><p>Carregando...</p></div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="bg-white p-8 rounded-2xl shadow-xl text-center max-w-md w-full">
          <Settings className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
          <h1 className="text-2xl font-black text-slate-900 mb-2">Painel de Controle</h1>
          <p className="text-slate-600 mb-8">Faça login para gerenciar o conteúdo do site.</p>
          <button
            onClick={signInWithGoogle}
            className="w-full bg-neutral-900 text-white font-bold py-3 px-4 rounded-xl hover:bg-neutral-800 transition-colors"
          >
            Entrar com Google
          </button>
        </div>
      </div>
    );
  }

  const showNotification = (message: string, type: 'success' | 'error') => {
    setNotification({ message, type });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <Notification 
        message={notification?.message || ''} 
        type={notification?.type || 'success'} 
        onClose={() => setNotification(null)} 
      />

      {/* Sidebar */}
      <div className="w-full md:w-64 bg-neutral-900 text-white p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-12">
          <Settings className="text-yellow-400" />
          <span className="font-black text-xl tracking-tight">LT Admin</span>
        </div>

        <nav className="flex-1 space-y-2">
          <button
            onClick={() => setActiveTab('blog')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'blog' ? 'bg-yellow-400 text-neutral-900 font-bold' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}
          >
            <FileText size={20} /> Blog
          </button>
          <button
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'users' ? 'bg-yellow-400 text-neutral-900 font-bold' : 'text-neutral-400 hover:bg-neutral-800 hover:text-white'}`}
          >
            <Users size={20} /> Usuários
          </button>
        </nav>

        <div className="mt-auto pt-6 border-t border-neutral-800">
          <div className="flex items-center gap-3 mb-4">
            <img src={user.photoURL || ''} alt="User" className="w-10 h-10 rounded-full" />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">{user.displayName}</p>
              <p className="text-xs text-neutral-400 truncate">{user.email}</p>
            </div>
          </div>
          <button
            onClick={logOut}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg hover:bg-neutral-700 transition-colors text-sm"
          >
            <LogOut size={16} /> Sair
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {activeTab === 'blog' && <BlogManager showNotification={showNotification} />}
          {activeTab === 'users' && <UsersManager showNotification={showNotification} />}
        </div>
      </div>
    </div>
  );
};

// --- Subcomponents for Managers ---

const BlogManager: React.FC<{ showNotification: (message: string, type: 'success' | 'error') => void }> = ({ showNotification }) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPost, setCurrentPost] = useState<any>(null);
  const [isAIGeneratorOpen, setIsAIGeneratorOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const q = collection(db, 'blog_posts');
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(data);
      },
      (error) => {
        const friendlyError = handleFirestoreError(error, OperationType.LIST, 'blog_posts');
        showNotification(friendlyError, 'error');
      }
    );
    return () => unsubscribe();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const isUpdating = !!currentPost.id;
      if (isUpdating) {
        const { id, ...data } = currentPost;
        await updateDoc(doc(db, 'blog_posts', id), data);
      } else {
        await addDoc(collection(db, 'blog_posts'), { ...currentPost, createdAt: new Date().toISOString() });
      }
      setIsEditing(false);
      setCurrentPost(null);
      showNotification(`Artigo salvo com sucesso!`, 'success');
    } catch (error) {
      const friendlyError = handleFirestoreError(error, currentPost.id ? OperationType.UPDATE : OperationType.CREATE, `blog_posts/${currentPost.id || 'new'}`);
      showNotification(friendlyError, 'error');
    }
  };

  const handleDelete = async (id: string) => {
    // In a real app, use a custom modal for confirmation instead of window.confirm
    try {
      await deleteDoc(doc(db, 'blog_posts', id));
      showNotification('Artigo excluído com sucesso.', 'success');
    } catch (error) {
      const friendlyError = handleFirestoreError(error, OperationType.DELETE, `blog_posts/${id}`);
      showNotification(friendlyError, 'error');
    }
  };

  const handleAIGenerationSuccess = (data: BlogPostGenerationResult) => {
    setCurrentPost({
      ...currentPost,
      title: data.title,
      slug: data.slug,
      excerpt: data.excerpt,
      content: data.content,
    });
    setIsAIGeneratorOpen(false);
    showNotification('Artigo gerado com sucesso pela IA!', 'success');
  };

  if (isEditing) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">{currentPost?.id ? 'Editar Artigo' : 'Novo Artigo'}</h2>
          <div className="flex items-center gap-3">
            <button 
              type="button" 
              onClick={() => setIsPreviewOpen(true)} 
              className="bg-slate-100 text-slate-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-slate-200 font-bold transition-colors text-sm"
            >
              <Eye size={16} /> Ver Prévia
            </button>
            <button 
              type="button" 
              onClick={() => setIsAIGeneratorOpen(true)} 
              className="bg-purple-100 text-purple-700 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-200 font-bold transition-colors text-sm"
            >
              <Bot size={16} /> Gerar com IA
            </button>
            <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-slate-600"><X /></button>
          </div>
        </div>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Título</label>
            <input required type="text" value={currentPost?.title || ''} onChange={e => setCurrentPost({...currentPost, title: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Slug (URL)</label>
            <input required type="text" value={currentPost?.slug || ''} onChange={e => setCurrentPost({...currentPost, slug: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Resumo</label>
            <textarea required value={currentPost?.excerpt || ''} onChange={e => setCurrentPost({...currentPost, excerpt: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg" rows={2}></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Conteúdo (Markdown)</label>
            <MarkdownEditor 
              value={currentPost?.content || ''} 
              onChange={value => setCurrentPost({...currentPost, content: value})} 
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Imagem de Capa</label>
              <ImageUploader 
                currentUrl={currentPost?.coverImage} 
                onUpload={(url) => setCurrentPost({...currentPost, coverImage: url})} 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
              <select value={currentPost?.status || 'draft'} onChange={e => setCurrentPost({...currentPost, status: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg">
                <option value="draft">Rascunho</option>
                <option value="published">Publicado</option>
              </select>
            </div>
          </div>
          <button type="submit" className="bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 flex items-center gap-2">
            <Save size={18} /> Salvar
          </button>
        </form>
        
        <AIGeneratorModal 
          isOpen={isAIGeneratorOpen} 
          onClose={() => setIsAIGeneratorOpen(false)} 
          onSuccess={handleAIGenerationSuccess} 
        />
        
        <PreviewModal
          isOpen={isPreviewOpen}
          onClose={() => setIsPreviewOpen(false)}
          title={currentPost?.title || ''}
          content={currentPost?.content || ''}
          coverImage={currentPost?.coverImage}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black text-slate-900">Artigos do Blog</h2>
        <button onClick={() => { setCurrentPost({ status: 'draft' }); setIsEditing(true); }} className="bg-neutral-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-neutral-800">
          <Plus size={18} /> Novo Artigo
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-slate-600">Título</th>
              <th className="p-4 font-semibold text-slate-600">Status</th>
              <th className="p-4 font-semibold text-slate-600 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {posts.length === 0 && <tr><td colSpan={3} className="p-4 text-center text-slate-500">Nenhum artigo encontrado.</td></tr>}
            {posts.map(post => (
              <tr key={post.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-900">{post.title}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${post.status === 'published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => { setCurrentPost(post); setIsEditing(true); }} className="p-2 text-slate-400 hover:text-blue-600 bg-white rounded-lg shadow-sm border border-slate-200"><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(post.id)} className="p-2 text-slate-400 hover:text-red-600 bg-white rounded-lg shadow-sm border border-slate-200"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const UsersManager: React.FC<{ showNotification: (message: string, type: 'success' | 'error') => void }> = ({ showNotification }) => {
  const [users, setUsers] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const q = collection(db, 'users');
    const unsubscribe = onSnapshot(q, 
      (snapshot) => {
        const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setUsers(data);
      },
      (error) => {
        const friendlyError = handleFirestoreError(error, OperationType.LIST, 'users');
        showNotification(friendlyError, 'error');
      }
    );
    return () => unsubscribe();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = currentUser.email.toLowerCase().trim();
    try {
      const userData = { 
        ...currentUser, 
        email, 
        createdAt: currentUser.createdAt || new Date().toISOString() 
      };
      
      // Use email as document ID
      await setDoc(doc(db, 'users', email), userData);

      setIsEditing(false);
      setCurrentUser(null);
      showNotification('Usuário salvo com sucesso!', 'success');
    } catch (error) {
      const friendlyError = handleFirestoreError(error, OperationType.WRITE, `users/${email}`);
      showNotification(friendlyError, 'error');
    }
  };

  const handleDelete = async (id: string) => {
    // In a real app, use a custom modal for confirmation
    try {
      await deleteDoc(doc(db, 'users', id));
      showNotification('Usuário excluído com sucesso.', 'success');
    } catch (error) {
      const friendlyError = handleFirestoreError(error, OperationType.DELETE, `users/${id}`);
      showNotification(friendlyError, 'error');
    }
  };

  if (isEditing) {
    const isNew = !currentUser?.createdAt;
    return (
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-slate-900">{isNew ? 'Novo Usuário' : 'Editar Usuário'}</h2>
          <button onClick={() => setIsEditing(false)} className="text-slate-400 hover:text-slate-600"><X /></button>
        </div>
        <form onSubmit={handleSave} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">E-mail (Conta Google)</label>
            <input required type="email" disabled={!isNew} value={currentUser?.email || ''} onChange={e => setCurrentUser({...currentUser, email: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg disabled:bg-slate-100 disabled:text-slate-500" placeholder="email@gmail.com" />
            {isNew && <p className="text-xs text-slate-500 mt-1">O usuário precisará fazer login com esta exata conta do Google.</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nome</label>
            <input required type="text" value={currentUser?.name || ''} onChange={e => setCurrentUser({...currentUser, name: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Nível de Acesso</label>
            <select value={currentUser?.role || 'editor'} onChange={e => setCurrentUser({...currentUser, role: e.target.value})} className="w-full p-2 border border-slate-300 rounded-lg">
              <option value="admin">Administrador (Acesso Total)</option>
              <option value="editor">Editor (Apenas Blog)</option>
            </select>
          </div>
          <button type="submit" className="bg-yellow-400 text-slate-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-500 flex items-center gap-2">
            <Save size={18} /> Salvar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-black text-slate-900">Usuários do Sistema</h2>
        <button onClick={() => { setCurrentUser({ role: 'admin' }); setIsEditing(true); }} className="bg-neutral-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-neutral-800">
          <Plus size={18} /> Novo Usuário
        </button>
      </div>
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-4 font-semibold text-slate-600">Nome</th>
              <th className="p-4 font-semibold text-slate-600">E-mail</th>
              <th className="p-4 font-semibold text-slate-600">Função</th>
              <th className="p-4 font-semibold text-slate-600 text-right">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && <tr><td colSpan={4} className="p-4 text-center text-slate-500">Nenhum usuário cadastrado além de você.</td></tr>}
            {users.map(u => (
              <tr key={u.id} className="border-b border-slate-100 hover:bg-slate-50">
                <td className="p-4 font-medium text-slate-900">{u.name}</td>
                <td className="p-4 text-slate-600">{u.email}</td>
                <td className="p-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${u.role === 'admin' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'}`}>
                    {u.role === 'admin' ? 'Administrador' : 'Editor'}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <button onClick={() => { setCurrentUser(u); setIsEditing(true); }} className="p-2 text-slate-400 hover:text-blue-600 bg-white rounded-lg shadow-sm border border-slate-200"><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(u.id)} className="p-2 text-slate-400 hover:text-red-600 bg-white rounded-lg shadow-sm border border-slate-200"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
