import React, { useState, useEffect } from 'react';
import { ArrowLeft, User, Tag, Clock } from 'lucide-react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebase';
import { blogPosts as staticBlogPosts } from '../data/blogPosts';
import Markdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';

interface BlogPostProps {
  postId: string | number;
  onBack: () => void;
  onOpenContact: () => void;
}

const BlogPost: React.FC<BlogPostProps> = ({ postId, onBack, onOpenContact }) => {
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const fetchPost = async () => {
      setLoading(true);
      // Check static posts first
      const staticPost = staticBlogPosts.find(p => p.id === postId);
      if (staticPost) {
        setPost(staticPost);
        setLoading(false);
        return;
      }

      // If not static, fetch from Firestore
      try {
        const docRef = doc(db, 'blog_posts', String(postId));
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          const data = docSnap.data();
          setPost({
            id: docSnap.id,
            title: data.title,
            excerpt: data.excerpt,
            category: data.category || 'Geral',
            author: data.author || 'Equipe LT',
            date: data.createdAt ? new Date(data.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }) : 'Recente',
            image: data.coverImage || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            readTime: data.readTime || '5 min',
            content: data.content,
            isMarkdown: true
          });
        } else {
          setPost(null);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 pt-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-50 pt-20">
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">Artigo não encontrado</h1>
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-yellow-600 hover:text-yellow-700 font-semibold"
        >
          <ArrowLeft size={20} />
          Voltar para o Blog
        </button>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-white min-h-screen">
      {/* Article Header */}
      <div className="bg-neutral-50 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar para o Blog
          </button>
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-yellow-400 text-neutral-900 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Tag size={12} />
              {post.category}
            </span>
            <span className="text-neutral-500 text-sm flex items-center gap-1">
              <Clock size={14} />
              {post.readTime} de leitura
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black text-neutral-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-neutral-600 border-t border-neutral-200 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-neutral-200 rounded-full flex items-center justify-center">
                <User size={20} className="text-neutral-500" />
              </div>
              <div>
                <p className="font-bold text-neutral-900">{post.author}</p>
                <p className="text-xs">{post.date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 md:-mt-12 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="prose prose-neutral md:prose-lg max-w-none">
          <p className="text-xl text-neutral-600 leading-relaxed mb-8 font-medium">
            {post.excerpt}
          </p>
          
          {post.isMarkdown ? (
            <Markdown remarkPlugins={[remarkBreaks]}>{post.content}</Markdown>
          ) : (
            Array.isArray(post.content) ? post.content.map((paragraph: string, index: number) => (
              <p key={index} className="mb-6 text-neutral-800 leading-relaxed">
                {paragraph}
              </p>
            )) : (
              <p className="mb-6 text-neutral-800 leading-relaxed">
                {post.content}
              </p>
            )
          )}
        </div>

        {/* CTA Section within Article */}
        <div className="mt-16 bg-neutral-900 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Quer aplicar essas estratégias na sua clínica?
          </h3>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
            Fale com nossos especialistas e descubra como a LT Marketing pode acelerar o crescimento do seu consultório de forma ética e previsível.
          </p>
          <button 
            onClick={onOpenContact}
            className="bg-yellow-400 hover:bg-yellow-500 text-neutral-900 px-8 py-4 rounded-full font-bold text-lg transition-colors shadow-lg hover:shadow-yellow-400/20"
          >
            Falar com um Especialista
          </button>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
