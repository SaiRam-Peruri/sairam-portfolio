import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { portfolio } from '../data/portfolio';

const Footer = () => {
  const { name, social } = portfolio.personalInfo;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-600 dark:text-slate-400 text-center md:text-left text-sm sm:text-base">
            &copy; {year} {name}. All Rights Reserved.
          </p>
          <div className="flex space-x-4 sm:space-x-6">
            {social?.github && (
              <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors p-2" title="GitHub">
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
            )}
            {social?.linkedin && (
              <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors p-2" title="LinkedIn">
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
            )}
            {social?.twitter && (
              <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-sky-500 dark:hover:text-sky-400 transition-colors p-2" title="Twitter">
                <Twitter size={20} className="sm:w-6 sm:h-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
