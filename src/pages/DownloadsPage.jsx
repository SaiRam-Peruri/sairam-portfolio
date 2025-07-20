import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Award, Eye, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const DownloadsPage = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sairam_resume_tf.pdf';
    link.download = 'Sairam_resume_tf.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadRecommendation = () => {
    const link = document.createElement('a');
    link.href = '/LetterofRecommendation_Professor_Weis.pdf';
    link.download = 'LetterofRecommendation_Professor_Weis.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const previewResume = () => {
    window.open('/Sairam_resume_tf.pdf', '_blank');
  };

  const previewRecommendation = () => {
    window.open('/LetterofRecommendation_Professor_Weis.pdf', '_blank');
  };

  const documents = [
    {
      id: 'resume',
      title: 'Resume',
      description: 'My latest resume showcasing my experience in DevOps, Systems Engineering, and Full-Stack Development.',
      icon: FileText,
      gradient: 'from-blue-600 to-sky-600',
      bgGradient: 'from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700',
      hoverBg: 'hover:from-blue-100 hover:to-sky-100 dark:hover:from-blue-900/30 dark:hover:to-sky-900/30',
      downloadAction: downloadResume,
      previewAction: previewResume,
      fileSize: '~180 KB',
      lastUpdated: 'December 2024'
    },
    {
      id: 'recommendation',
      title: 'Letter of Recommendation',
      description: 'Professional recommendation letter from Professor Weis highlighting my academic and technical achievements.',
      icon: Award,
      gradient: 'from-purple-600 to-pink-600',
      bgGradient: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700',
      hoverBg: 'hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30',
      downloadAction: downloadRecommendation,
      previewAction: previewRecommendation,
      fileSize: '~220 KB',
      lastUpdated: 'November 2024'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <SEO 
        title="Downloads - Sai Ram's Portfolio"
        description="Download my resume, letters of recommendation, and other professional documents. Available in PDF format."
        keywords={["resume download", "CV", "letter of recommendation", "professional documents", "DevOps engineer", "Systems engineer"]}
      />
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="gradient-text">Downloads</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8">
                Access my professional documents, resume, and recommendations
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span className="flex items-center">
                  <FileText className="w-4 h-4 mr-1" />
                  PDF Format
                </span>
                <span className="flex items-center">
                  <Download className="w-4 h-4 mr-1" />
                  Instant Download
                </span>
                <span className="flex items-center">
                  <Eye className="w-4 h-4 mr-1" />
                  Preview Available
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Documents Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {documents.map((doc, index) => {
                const Icon = doc.icon;
                return (
                  <motion.div
                    key={doc.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`bg-gradient-to-br ${doc.bgGradient} border ${doc.borderColor} rounded-2xl p-8 ${doc.hoverBg} transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${doc.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{doc.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <span>{doc.fileSize}</span>
                          <span>•</span>
                          <span>{doc.lastUpdated}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                      {doc.description}
                    </p>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <motion.button
                        onClick={doc.downloadAction}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r ${doc.gradient} text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex-1`}
                      >
                        <Download className="w-5 h-5" />
                        <span>Download</span>
                      </motion.button>
                      
                      <motion.button
                        onClick={doc.previewAction}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center justify-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 flex-1"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Preview</span>
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 text-center max-w-3xl mx-auto"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                  Need Something Else?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Looking for project portfolios, code samples, or have specific questions? 
                  I'm always happy to provide additional information.
                </p>
                <motion.a
                  href="/#contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Get In Touch</span>
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DownloadsPage;
