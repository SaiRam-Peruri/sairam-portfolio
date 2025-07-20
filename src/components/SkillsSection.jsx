import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { CheckSquare, Star, Zap, Code2, Cloud, Database, Terminal, Server } from 'lucide-react';

const SkillsSection = () => {
  const { skills } = portfolio.personalInfo;
  
  const skillCategories = [
    { 
      name: 'Programming Languages', 
      skills: skills.languages,
      icon: Terminal,
      gradient: 'from-indigo-500 to-blue-500'
    },
    { 
      name: 'DevOps & Automation', 
      skills: skills.devops,
      icon: Cloud,
      gradient: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Cloud Platforms', 
      skills: skills.cloud,
      icon: Server,
      gradient: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Monitoring & Ticketing', 
      skills: skills.monitoring,
      icon: Zap,
      gradient: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Databases & Tools', 
      skills: [...skills.databases, ...skills.tools],
      icon: Database,
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { 
      y: 60, 
      opacity: 0, 
      rotateX: -15,
      scale: 0.9 
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const slideFromSides = (index) => ({
    hidden: { 
      x: index % 2 === 0 ? -100 : 100, 
      opacity: 0, 
      rotate: index % 2 === 0 ? -10 : 10,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 120,
        damping: 20,
        duration: 1,
        delay: index * 0.1,
      },
    },
  });

  return (
    <section id="skills" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-blue-900/20 dark:to-purple-900/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300/10 dark:bg-blue-600/10 rounded-full morphing-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300/10 dark:bg-purple-600/10 rounded-full morphing-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6"
          >
            <Code2 className="w-8 h-8 text-white" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text-animated">Technical Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that power exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: categoryIndex * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              {/* Category Header - Fixed Height */}
              <motion.div 
                className="mb-4 p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover-lift flex-shrink-0"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white leading-tight">
                    {category.name}
                  </h3>
                </div>
              </motion.div>

              {/* Skills Grid - Equal Heights */}
              <div className="flex-1 grid gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-lg p-3 border border-gray-200/30 dark:border-gray-700/30 hover:border-blue-300/50 dark:hover:border-purple-400/50 transition-all duration-300 group hover:shadow-lg flex flex-col justify-between min-h-[120px]"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <div className={`w-8 h-8 bg-gradient-to-r ${category.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <category.icon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-sm font-semibold text-gray-800 dark:text-white leading-tight">{skill.name}</h4>
                    </div>
                    
                    <div className="space-y-2 flex-1 flex flex-col justify-end">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-600 dark:text-gray-400">Level</span>
                        <span className="text-xs font-medium text-blue-600 dark:text-purple-400">{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full relative`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/30 rounded-full"
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className="flex justify-center mt-1">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              whileInView={i < Math.floor(skill.level / 20) ? { scale: 1 } : { scale: 0 }}
                              transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 + i * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <Star 
                                className={`w-3 h-3 ${
                                  i < Math.floor(skill.level / 20) 
                                    ? 'text-yellow-400 fill-current' 
                                    : 'text-gray-300 dark:text-gray-600'
                                }`} 
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Technologies", value: "25+", icon: Code2 },
            { label: "Years Experience", value: "3+", icon: Star },
            { label: "Cloud Platforms", value: "4+", icon: Server },
            { label: "Certifications", value: "3+", icon: CheckSquare }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-200/30 dark:border-gray-700/30 hover-lift"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </motion.div>
              <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
