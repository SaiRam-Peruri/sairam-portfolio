import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Home, 
  User, 
  Code, 
  Briefcase, 
  BookOpen, 
  Mail,
  Download,
  FileText,
  Award,
  ChevronDown
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDownloads, setShowDownloads] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const downloadsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (downloadsRef.current && !downloadsRef.current.contains(event.target)) {
        setShowDownloads(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/#about', icon: User },
    { name: 'Education', path: '/#education', icon: Award },
    { name: 'Skills', path: '/#skills', icon: Code },
    { name: 'Projects', path: '/projects', icon: Briefcase },
    { name: 'Downloads', path: '/downloads', icon: Download },
    { name: 'Blog', path: '/blog', icon: BookOpen },
    { name: 'Contact', path: '/#contact', icon: Mail },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    
    // Handle hash navigation for same page
    if (path.startsWith('/#')) {
      const elementId = path.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sairam_resume_tf.pdf'; // Path to your resume file in public folder
    link.download = 'Sairam_resume_tf.pdf'; // Name for the downloaded file
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDownloads(false);
  };

  const downloadRecommendation = () => {
    const link = document.createElement('a');
    link.href = '/LetterofRecommendation_Professor_Weis.pdf'; // Path to your recommendation letter in public folder
    link.download = 'LetterofRecommendation_Professor_Weis.pdf'; // Name for the downloaded file
    link.target = '_blank'; // Open in new tab as fallback
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowDownloads(false);
  };

  const downloadItems = [
    {
      name: 'Resume',
      icon: FileText,
      action: downloadResume,
      description: 'My latest resume'
    },
    {
      name: 'Letter of Recommendation',
      icon: Award,
      action: downloadRecommendation,
      description: 'Professor recommendation'
    }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-2 sm:px-4 lg:px-6 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center h-12 sm:h-14 lg:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link
              to="/"
              className="text-lg sm:text-xl lg:text-2xl font-bold gradient-text font-raleway whitespace-nowrap"
            >
              Sai Ram
            </Link>
          </motion.div>

          {/* Desktop Navigation - Adaptive Layout */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-2 lg:mx-4">
            <div className="flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = 
                  item.path === '/' 
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path.split('#')[0]);

                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                  >
                    {item.path.startsWith('/#') ? (
                      <button
                        onClick={() => handleNavClick(item.path)}
                        className={`flex items-center space-x-1 px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm lg:text-base ${
                          isActive
                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-800'
                        }`}
                      >
                        <Icon size={16} className="lg:w-[18px] lg:h-[18px] flex-shrink-0" />
                        <span className="font-medium hidden lg:inline xl:inline whitespace-nowrap">{item.name}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-1 px-2 py-1.5 lg:px-3 lg:py-2 rounded-lg transition-all duration-200 text-xs sm:text-sm lg:text-base ${
                          isActive
                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-800'
                        }`}
                      >
                        <Icon size={16} className="lg:w-[18px] lg:h-[18px] flex-shrink-0" />
                        <span className="font-medium hidden lg:inline xl:inline whitespace-nowrap">{item.name}</span>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-shrink-0">
            {/* Downloads Dropdown */}
            <div className="relative" ref={downloadsRef}>
              <motion.button
                onClick={() => setShowDownloads(!showDownloads)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-1 btn-primary text-xs lg:text-sm px-2 lg:px-3 py-1.5 lg:py-2 whitespace-nowrap"
              >
                <Download size={14} className="lg:w-4 lg:h-4" />
                <span className="hidden lg:inline">Downloads</span>
                <ChevronDown size={12} className={`lg:w-3 lg:h-3 transition-transform ${showDownloads ? 'rotate-180' : ''}`} />
              </motion.button>

              <AnimatePresence>
                {showDownloads && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 z-50"
                  >
                    <div className="py-2">
                      {downloadItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.button
                            key={item.name}
                            onClick={item.action}
                            whileHover={{ backgroundColor: isDark ? '#374151' : '#f3f4f6' }}
                            className="flex items-center space-x-3 w-full px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                          >
                            <Icon size={16} className="text-primary-600 dark:text-primary-400" />
                            <div>
                              <div className="font-medium text-sm">{item.name}</div>
                              <div className="text-xs text-gray-500 dark:text-gray-400">{item.description}</div>
                            </div>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-1.5 lg:p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
            >
              {isDark ? <Sun size={16} className="lg:w-[18px] lg:h-[18px]" /> : <Moon size={16} className="lg:w-[18px] lg:h-[18px]" />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </motion.button>

            {/* Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-dark-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-dark-700"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = 
                  item.path === '/' 
                    ? location.pathname === '/'
                    : location.pathname.startsWith(item.path.split('#')[0]);

                return (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.path.startsWith('/#') ? (
                      <button
                        onClick={() => handleNavClick(item.path)}
                        className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                          isActive
                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-800'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.name}</span>
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-colors duration-200 ${
                          isActive
                            ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20'
                            : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-dark-800'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    )}
                  </motion.div>
                );
              })}
              
              {/* Mobile Download Buttons */}
              <div className="border-t border-gray-200 dark:border-dark-700 pt-2 mt-2">
                {downloadItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => {
                        item.action();
                        setIsOpen(false);
                      }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg btn-primary text-left mb-2"
                    >
                      <Icon size={20} />
                      <div>
                        <div className="font-medium">{item.name}</div>
                        <div className="text-xs opacity-75">{item.description}</div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
