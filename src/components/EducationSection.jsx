import React from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { GraduationCap, MapPin, Calendar, Award, BookOpen, Star } from 'lucide-react';

const EducationSection = () => {
  const { education } = portfolio;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  const cardHoverVariants = {
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section id="education" className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/30 dark:border-purple-400/30 rounded-full px-6 py-3 mb-6">
            <GraduationCap className="w-5 h-5 text-blue-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-purple-300">Academic Journey</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Academic foundation and continuous learning journey that shapes my technical expertise.
          </p>
        </motion.div>

        {/* Education Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    edu.status === 'In Progress' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                  }`}>
                    {edu.status === 'In Progress' && <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>}
                    {edu.status}
                  </span>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 items-start">
                  {/* Institution Logo/Icon */}
                  <div className="lg:col-span-1 flex flex-col items-center lg:items-start space-y-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="w-10 h-10 text-white" />
                    </div>
                    
                    {/* GPA */}
                    <div className="text-center lg:text-left">
                      <div className="flex items-center space-x-2 text-amber-600 dark:text-amber-400">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-lg font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  {/* Education Details */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                        {edu.degree} in {edu.field}
                      </h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
                          <BookOpen className="w-4 h-4" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-500">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {edu.description}
                    </p>

                    {/* Coursework */}
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3 flex items-center space-x-2">
                        <Award className="w-4 h-4" />
                        <span>Key Coursework</span>
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <motion.span
                            key={courseIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: courseIndex * 0.1 }}
                            className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium border border-slate-300/50 dark:border-slate-600/50 hover:scale-105 transition-transform cursor-default"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Education Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-sm border border-blue-200/30 dark:border-purple-400/30 rounded-full px-6 py-3">
            <BookOpen className="w-4 h-4 text-blue-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-purple-300">
              Committed to continuous learning and professional development
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
