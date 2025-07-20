import React from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { User, Briefcase, Code, Cloud, Server } from 'lucide-react';

const AboutSection = () => {
  const { personalInfo } = portfolio;

  const about = {
    summary: personalInfo.bio,
    roles: [
      {
        title: "Software Developer",
        description: "Building scalable and efficient software solutions, specializing in full-stack development."
      },
      {
        title: "DevOps Engineer",
        description: "Automating infrastructure, streamlining CI/CD pipelines, and enabling rapid, reliable deployments."
      },
      {
        title: "Infrastructure & Systems Engineer",
        description: "Designing and maintaining robust, resilient, and scalable cloud and on-premise systems."
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 100, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const slideFromLeft = {
    hidden: { x: -100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        duration: 1,
      },
    },
  };

  const slideFromRight = {
    hidden: { x: 100, opacity: 0, scale: 0.8 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        duration: 1,
      },
    },
  };

  const rotateIn = {
    hidden: { opacity: 0, rotate: -180, scale: 0.5 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 1.2,
      },
    },
  };

  const iconMap = {
    "Software Developer": <Code className="w-6 h-6 text-cyan-400" />,
    "DevOps Engineer": <Cloud className="w-6 h-6 text-orange-400" />,
    "Infrastructure & Systems Engineer": <Server className="w-6 h-6 text-green-400" />,
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            A brief introduction to my professional journey and capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="bg-white/90 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-2xl p-8 lg:p-12 shadow-2xl shadow-slate-900/20 dark:shadow-slate-900/50"
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <motion.div 
              variants={slideFromLeft} 
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="md:col-span-1 flex justify-center"
            >
              <div className="relative">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full opacity-75 blur-lg"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-800 to-slate-900 dark:from-cyan-400 dark:to-purple-600 rounded-full opacity-60"></div>
                <img
                  src="/pp.jpg"
                  alt={personalInfo.name}
                  className="relative w-48 h-48 rounded-full border-4 border-slate-800 dark:border-slate-700 object-cover object-right shadow-xl"
                  style={{ 
                    objectPosition: '75% center',
                    filter: 'contrast(1.1) brightness(1.05) saturate(1.1)'
                  }}
                />
              </div>
            </motion.div>
            <motion.div variants={slideFromRight} className="md:col-span-2">
              <p className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed mb-6">
                {about.summary}
              </p>
              
              {/* Availability Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200/50 dark:border-green-700/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                      {personalInfo.availability.status}
                    </span>
                  </div>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    {personalInfo.availability.startDate}
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-4 rounded-lg border border-blue-200/50 dark:border-blue-700/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                      {personalInfo.availability.relocation}
                    </span>
                  </div>
                  <p className="text-xs text-blue-600 dark:text-blue-400">
                    {personalInfo.availability.workType}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          <motion.div 
            variants={containerVariants}
            className="mt-12 pt-8 border-t border-slate-300 dark:border-slate-700"
          >
            <motion.h3 
              variants={rotateIn}
              className="text-2xl font-bold text-slate-800 dark:text-slate-200 text-center mb-8"
            >
              My Roles
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {about.roles.map((role, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 10,
                    z: 50,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-slate-100/80 dark:bg-slate-900/60 p-6 rounded-xl border border-slate-300/50 dark:border-slate-700/50 cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="flex justify-center mb-4">
                    {iconMap[role.title] || <Briefcase className="w-6 h-6 text-purple-400" />}
                  </div>
                  <h4 className="font-semibold text-lg text-slate-800 dark:text-slate-100 mb-2">{role.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{role.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
