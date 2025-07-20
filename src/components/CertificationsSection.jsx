import React from 'react';
import { motion } from 'framer-motion';
import { FaAws, FaMicrosoft, FaExternalLinkAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { portfolio } from '../data/portfolio';

const CertificationsSection = () => {
  const { certifications } = portfolio;

  const getCertificationIcon = (name) => {
    if (name.toLowerCase().includes('aws')) {
      return <FaAws className="text-orange-500" size={32} />;
    } else if (name.toLowerCase().includes('azure') || name.toLowerCase().includes('microsoft')) {
      return <FaMicrosoft className="text-blue-500" size={32} />;
    } else if (name.toLowerCase().includes('hashicorp') || name.toLowerCase().includes('terraform')) {
      return <FaAward className="text-purple-500" size={32} />;
    }
    return <FaAward className="text-yellow-500" size={32} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardHoverVariants = {
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-4">
            <FaAward className="text-primary-600 dark:text-primary-400" size={24} />
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
              Professional Certifications
            </span>
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
          >
            Industry Certifications
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Validated expertise in cloud computing and infrastructure management through leading industry certifications.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover="hover"
              className="group"
            >
              <motion.div
                variants={cardHoverVariants}
                className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-600 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {getCertificationIcon(cert.name)}
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h3>
                      {cert.code && (
                        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
                          {cert.code}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {cert.verificationUrl && (
                    <motion.a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 transition-colors"
                    >
                      <FaExternalLinkAlt size={16} />
                    </motion.a>
                  )}
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                    <FaCalendarAlt size={14} />
                    <span className="text-sm">Issued {cert.date}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    {cert.issuer}
                  </p>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6">
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary-50 dark:bg-primary-900/20 rounded-full">
            <FaAward className="text-primary-600 dark:text-primary-400" size={20} />
            <span className="text-primary-800 dark:text-primary-200 font-medium">
              3 Industry-Leading Certifications • AWS • Azure • Terraform
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;
