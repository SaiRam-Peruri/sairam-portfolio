import React, { useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import DevOpsSection from '../components/DevOpsSection';
import SystemsSection from '../components/SystemsSection';
import CertificationsSection from '../components/CertificationsSection';
import AchievementsSection from '../components/AchievementsSection';
import BlogSection from '../components/BlogSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import { SEO } from '../components/SEO';

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen bg-white dark:bg-dark-900">
      <SEO title="Home" description="The portfolio of Sai Ram, a Software Developer, DevOps Engineer, and Infrastructure Specialist." />
      {/* Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-600 to-purple-600 transform-gpu z-50"
      />

      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Education Section */}
      <EducationSection />
      
      {/* Skills Section */}
      <SkillsSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* DevOps Section */}
      <DevOpsSection />
      
      {/* Systems Engineering Section */}
      <SystemsSection />
      
      {/* Certifications Section */}
      <CertificationsSection />
      
      {/* Achievements Section */}
      <AchievementsSection />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default Home;
