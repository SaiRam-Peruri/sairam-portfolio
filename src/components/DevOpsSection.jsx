import React from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { GitMerge, Layers, TerminalSquare } from 'lucide-react';

const DevOpsSection = () => {
  const { devops } = portfolio;
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

  const iconMap = {
    "CI/CD Pipelines": <GitMerge className="h-8 w-8 mb-4 text-sky-500" />,
    "Infrastructure as Code (IaC)": <Layers className="h-8 w-8 mb-4 text-sky-500" />,
    "Containerization & Orchestration": <TerminalSquare className="h-8 w-8 mb-4 text-sky-500" />,
  };

  return (
    <section id="devops" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">DevOps & Automation</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Streamlining development and operations for efficiency and reliability.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {devops.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-8 text-center"
            >
              {iconMap[item.title] || <Layers className="h-8 w-8 mb-4 text-sky-500" />}
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {item.tools.map(tool => (
                  <span key={tool} className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full">{tool}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DevOpsSection;
