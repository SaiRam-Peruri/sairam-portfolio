import React from 'react';
import { motion } from 'framer-motion';
import { blogData } from '../data/blog';
import { ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const featuredPosts = blogData.featured;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50 },
    },
  };

  return (
    <section id="blog" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">From the Blog</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Insights, tutorials, and thoughts on technology and development.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {featuredPosts.map((post) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
              className="group bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col border border-slate-200 dark:border-slate-700"
            >
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">{post.date} &bull; {post.readTime}</p>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 flex-grow">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">{post.excerpt}</p>
                <a href={`/blog/${post.slug}`} className="mt-auto inline-flex items-center font-semibold text-sky-600 dark:text-sky-400 group-hover:text-sky-700 dark:group-hover:text-sky-300">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="/blog" className="inline-block bg-sky-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-sky-700 transition-colors duration-300 text-lg">
            Explore All Articles
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
