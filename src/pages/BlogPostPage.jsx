import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogData } from '../data/blog';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

const BlogPostPage = () => {
  const { slug } = useParams();
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 text-center py-20">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-sky-500 hover:underline">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <SEO 
        title={post.title}
        description={post.excerpt}
        keywords={post.tags}
        url={`/blog/${post.slug}`}
      />
      <Navigation />
      <main className="container mx-auto px-4 py-24 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/blog" className="inline-flex items-center text-sky-600 dark:text-sky-400 hover:underline mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back to all articles
          </Link>
          
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center text-slate-500 dark:text-slate-400 mb-8 text-sm">
            <div className="flex items-center mr-6 mb-2">
              <Calendar size={14} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Clock size={14} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center mb-2">
              <Tag size={14} className="mr-2" />
              <span>{post.tags.join(', ')}</span>
            </div>
          </div>

          <div 
            className="prose prose-lg lg:prose-xl dark:prose-invert max-w-none prose-sky 
                       prose-headings:font-bold prose-headings:text-slate-800 dark:prose-headings:text-white
                       prose-a:text-sky-600 hover:prose-a:text-sky-700 dark:prose-a:text-sky-400 dark:hover:prose-a:text-sky-300
                       prose-strong:text-slate-700 dark:prose-strong:text-slate-300
                       prose-blockquote:border-l-sky-500 prose-blockquote:text-slate-600 dark:prose-blockquote:text-slate-400"
          >
            {post.content.split('\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return <h3 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.substring(4)}</h3>;
              }
              if (paragraph.startsWith('## ')) {
                return <h2 key={index} className="text-3xl font-bold mt-10 mb-6">{paragraph.substring(3)}</h2>;
              }
              return <p key={index} className="mb-6 leading-relaxed">{paragraph}</p>;
            })}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
