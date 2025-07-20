import React from 'react';
import { motion } from 'framer-motion';
import { blogData } from '../data/blog';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';

const BlogPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <SEO title="Blog" description="A collection of articles on software development, DevOps, infrastructure, and technology trends." />
      <Navigation />
      <main className="container mx-auto px-4 py-24 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white">The Engineer's Log</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">A collection of articles on software development, DevOps, infrastructure, and technology trends.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogData.posts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link to={`/blog/${post.slug}`} className="block group bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full border border-slate-200 dark:border-slate-700">
                <div className="p-6 flex flex-col h-full">
                  <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">{post.title}</h2>
                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar size={14} className="mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">&bull;</span>
                    <Clock size={14} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow">{post.excerpt}</p>
                  <div className="mt-auto flex items-center font-semibold text-sky-600 dark:text-sky-400">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
