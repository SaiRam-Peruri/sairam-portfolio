import React, { Suspense, useMemo, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { motion, useScroll, useTransform } from 'framer-motion';
import { portfolio } from '../data/portfolio';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, Code, Zap } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const AnimatedSphere = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    };

    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  const sphereColor = isDark ? "#8A2BE2" : "#667eea"; // Purple for dark, Blue for light

  return (
    <Sphere visible args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color={sphereColor}
        attach="material"
        distort={0.7}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
};

const FloatingIcon = ({ Icon, delay = 0, position }) => (
  <motion.div
    className="absolute text-blue-400 dark:text-purple-400 opacity-30"
    style={position}
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      opacity: [0.3, 0.7, 0.3]
    }}
    transition={{
      duration: 4,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Icon size={24} />
  </motion.div>
);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sairam_resume_tf.pdf';
    link.download = 'Sai_Ram_Resume.pdf';
    link.click();
  };

  return (
    <AnimatedBackground variant="particles">
      <motion.section 
        ref={sectionRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden py-4 sm:py-8 md:py-12"
        style={{ y, opacity }}
      >
        {/* Floating background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <FloatingIcon 
            Icon={Code} 
            delay={0} 
            position={{ top: '20%', left: '10%' }} 
          />
          <FloatingIcon 
            Icon={Sparkles} 
            delay={1} 
            position={{ top: '30%', right: '15%' }} 
          />
          <FloatingIcon 
            Icon={Zap} 
            delay={2} 
            position={{ bottom: '30%', left: '20%' }} 
          />
          <FloatingIcon 
            Icon={Code} 
            delay={1.5} 
            position={{ bottom: '20%', right: '25%' }} 
          />
        </div>

        {/* Morphing blob background */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 morphing-blob opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-600/20 morphing-blob opacity-50"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="text-center lg:text-left space-y-4 sm:space-y-6 lg:space-y-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Animated greeting */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-200/20 dark:border-purple-400/20 rounded-full px-3 sm:px-6 py-2 sm:py-3"
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-purple-400 animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
                  Welcome to my digital universe
                </span>
              </motion.div>

              {/* Main heading with advanced gradient */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="block text-gray-800 dark:text-white mb-1 sm:mb-2">
                    Hi, I'm
                  </span>
                  <span className="block gradient-text-animated text-glow text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                    {portfolio.personalInfo.name}
                  </span>
                </h1>
              </motion.div>

              {/* Dynamic role text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-2 sm:space-y-4"
              >
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-200">
                  <span className="text-shimmer">
                    DevOps Engineer & Systems Architect
                  </span>
                </h2>
                
                {/* Availability Status */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-sm border border-green-200/30 dark:border-green-400/30 rounded-full px-4 py-2"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    {portfolio.personalInfo.availability.status} • {portfolio.personalInfo.availability.relocation}
                  </span>
                </motion.div>
                
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
                  Transforming ideas into scalable digital solutions with cutting-edge technology, 
                  cloud infrastructure, and innovative automation.
                </p>
              </motion.div>

              {/* Enhanced action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/#projects"
                    className="btn-neon inline-flex items-center space-x-2 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4"
                  >
                    <span>Explore My Work</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>

                <motion.button
                  onClick={downloadResume}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass-card hover-lift inline-flex items-center space-x-2 text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-purple-400 transition-colors"
                >
                  <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Download Resume</span>
                </motion.button>
              </motion.div>

              {/* Animated stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="grid grid-cols-3 gap-3 sm:gap-6 pt-4 sm:pt-8"
              >
                {[
                  { number: "3+", label: "Years Experience" },
                  { number: "10+", label: "Projects Completed" },
                  { number: "10+", label: "Technologies Mastered" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold gradient-text">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right side - 3D Animation */}
            <motion.div 
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mt-8 lg:mt-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              {/* Glowing ring effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>
              
              <Suspense fallback={
                <div className="flex items-center justify-center h-full">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
              }>
                <Canvas camera={{ position: [0, 0, 5] }}>
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[10, 10, 5]} intensity={1} />
                  <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8A2BE2" />
                  <AnimatedSphere />
                  <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
                </Canvas>
              </Suspense>
            </motion.div>
          </div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.section>
    </AnimatedBackground>
  );
};

export default HeroSection;
