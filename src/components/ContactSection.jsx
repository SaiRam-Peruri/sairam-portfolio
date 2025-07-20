import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { portfolio } from '../data/portfolio';
import { Send, Loader, CheckCircle, AlertTriangle, Download, FileText, Award } from 'lucide-react';

const ContactSection = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendSuccess(false);
    setSendError(false);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
          console.log(result.text);
          setSendSuccess(true);
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setSendError(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

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

  return (
    <section id="contact" className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-white">Get In Touch</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mt-2">Have a project in mind or just want to say hi? Let's connect.</p>
          
          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6 inline-flex items-center space-x-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 backdrop-blur-sm border border-green-200/50 dark:border-green-400/30 rounded-full px-6 py-3"
          >
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-700 dark:text-green-300">
                {portfolio.personalInfo.availability.status}
              </span>
            </div>
            <div className="w-px h-4 bg-green-300 dark:bg-green-600"></div>
            <span className="text-sm font-medium text-green-600 dark:text-green-400">
              {portfolio.personalInfo.availability.relocation}
            </span>
          </motion.div>
        </motion.div>

        {/* Downloads Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white mb-4 text-center">
              Download Documents
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {/* Resume Download */}
              <motion.button
                onClick={downloadResume}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 border border-blue-200 dark:border-blue-700 rounded-xl hover:from-blue-100 hover:to-sky-100 dark:hover:from-blue-900/30 dark:hover:to-sky-900/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800 dark:text-white">Resume</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Download my latest resume</p>
                </div>
                <Download className="w-5 h-5 text-blue-600 dark:text-blue-400 ml-auto" />
              </motion.button>

              {/* Letter of Recommendation Download */}
              <motion.button
                onClick={downloadRecommendation}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-900/30 dark:hover:to-pink-900/30 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800 dark:text-white">Letter of Recommendation</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Professor recommendation letter</p>
                </div>
                <Download className="w-5 h-5 text-purple-600 dark:text-purple-400 ml-auto" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Contact Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 lg:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl lg:text-2xl font-bold text-slate-800 dark:text-white mb-6 text-center">
              Let's Connect
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Email for Job Opportunities */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-700 rounded-xl"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800 dark:text-white">Email for Job Opportunities</h4>
                  <a 
                    href="mailto:sairam.peruri.work@gmail.com" 
                    className="text-sm text-green-600 dark:text-green-400 hover:underline"
                  >
                    sairam.peruri.work@gmail.com
                  </a>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Open to work - Full-time, Contract, Remote</p>
                </div>
              </motion.div>

              {/* Phone for Projects & Opportunities */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 border border-blue-200 dark:border-blue-700 rounded-xl"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-slate-800 dark:text-white">Phone for Projects & Jobs</h4>
                  <a 
                    href="tel:+19787266536" 
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    +1 (978) 726-6536
                  </a>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Available for project discussions</p>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                For general inquiries or to connect, feel free to use the message form below
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700 rounded-xl shadow-lg p-8 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input type="text" name="user_name" id="user_name" required className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-sky-500 focus:border-sky-500 transition" />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input type="email" name="user_email" id="user_email" required className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-sky-500 focus:border-sky-500 transition" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
              <textarea name="message" id="message" required rows="5" className="w-full px-4 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-sky-500 focus:border-sky-500 transition"></textarea>
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSending}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition-colors duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <><Loader className="animate-spin h-5 w-5 mr-3" /> Sending...</>
                ) : (
                  <><Send className="h-5 w-5 mr-3" /> Send Message</>
                )}
              </motion.button>
            </div>
          </motion.form>
          
          {sendSuccess && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/50 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 rounded-lg"
            >
              <CheckCircle className="h-5 w-5 mr-3" />
              <p>Message sent successfully! I'll get back to you soon.</p>
            </motion.div>
          )}

          {sendError && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex items-center justify-center p-4 bg-red-100 dark:bg-red-900/50 border border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 rounded-lg"
            >
              <AlertTriangle className="h-5 w-5 mr-3" />
              <p>Something went wrong. Please try again later.</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
