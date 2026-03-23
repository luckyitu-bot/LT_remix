import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../services/firebase';
import { blogPosts as staticBlogPosts } from '../data/blogPosts';

interface BlogProps {
  onReadPost: (id: string | number) => void;
}

const Blog: React.FC<BlogProps> = ({ onReadPost }) => {
  const [posts, setPosts] = useState<any[]>([...staticBlogPosts]);

  useEffect(() => {
    const q = query(collection(db, 'blog_posts'), where('status', '==', 'published'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const dynamicPosts = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          title: data.title,
          excerpt: data.excerpt,
          category: data.category || 'Geral',
          author: data.author || 'Equipe LT',
          date: data.createdAt ? new Date(data.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Recente',
          image: data.coverImage || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          readTime: data.readTime || '5 min',
          content: data.content
        };
      });
      
      setPosts([...dynamicPosts, ...staticBlogPosts]);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="pt-20 bg-neutral-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Blog <span className="text-yellow-400">LT Marketing</span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
            Insights, estratégias e tendências sobre marketing médico, tráfego pago e crescimento de clínicas.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-400 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag size={12} />
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-neutral-600 text-sm mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <button 
                    onClick={() => onReadPost(post.id)}
                    className="inline-flex items-center text-sm font-bold text-neutral-900 hover:text-yellow-600 transition-colors mt-auto"
                  >
                    Ler artigo completo
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          {/* Pagination / Load More (Placeholder) */}
          <div className="mt-16 text-center">
            <button className="px-8 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl transition-colors">
              Carregar mais artigos
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-20 bg-yellow-400 text-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Quer receber nossas melhores estratégias?</h2>
          <p className="text-lg text-neutral-800 mb-8">
            Assine nossa newsletter e receba conteúdos exclusivos sobre marketing médico diretamente no seu e-mail.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-grow px-4 py-3 rounded-xl border-none focus:ring-2 focus:ring-neutral-900 outline-none"
              required
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-xl transition-colors whitespace-nowrap"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
