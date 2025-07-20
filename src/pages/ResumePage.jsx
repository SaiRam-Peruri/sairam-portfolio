import React from 'react';
import { motion } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { Download, Award, Briefcase, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';

const ResumePage = () => {
  const { personalInfo, experience, certifications } = portfolio;
  const { name, title, email, social } = personalInfo;

  const handleDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/Sairam_resume_tf.pdf'; // Path to your resume file in public folder
    link.download = 'Sairam_resume_tf.pdf'; // Name for the downloaded file
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <SEO title="Resume" description={`Download the resume of ${name}, a ${title}.`} />
      <Navigation />
      <main className="container mx-auto px-4 py-24 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 lg:p-12 border border-slate-200 dark:border-slate-700"
        >
          <header className="flex flex-col md:flex-row items-center justify-between mb-10 pb-8 border-b border-slate-200 dark:border-slate-700">
            <div>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800 dark:text-white">{name}</h1>
              <p className="text-xl text-sky-600 dark:text-sky-400 font-semibold mt-1">{title}</p>
            </div>
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 bg-sky-600 text-white font-bold rounded-lg hover:bg-sky-700 transition-colors duration-300 shadow-lg"
            >
              <Download className="h-5 w-5 mr-3" />
              Download PDF
            </motion.button>
          </header>

          <section className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
              <Briefcase className="mr-3 text-sky-500" /> Professional Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200">{job.role}</h3>
                  <p className="text-md text-slate-600 dark:text-slate-400 font-medium">{job.company} | {job.period}</p>
                  <ul className="list-disc list-inside mt-3 text-slate-600 dark:text-slate-300 space-y-1">
                    {job.responsibilities.map((resp, i) => <li key={i}>{resp}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
              <Award className="mr-3 text-sky-500" /> Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-slate-100 dark:bg-slate-700/50 p-4 rounded-lg">
                  <p className="font-semibold text-slate-700 dark:text-slate-200">{cert.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{cert.issuingOrganization}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="flex items-center text-2xl font-bold text-slate-800 dark:text-white mb-6">
              <Mail className="mr-3 text-sky-500" /> Contact
            </h2>
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-slate-600 dark:text-slate-300">
              <a href={`mailto:${email}`} className="hover:text-sky-500">{email}</a>
              {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">LinkedIn</a>}
              {social.github && <a href={social.github} target="_blank" rel="noopener noreferrer" className="hover:text-sky-500">GitHub</a>}
            </div>
          </section>

        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default ResumePage;
