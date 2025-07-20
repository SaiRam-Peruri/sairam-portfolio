import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(event.clientX - centerX);
    mouseY.set(event.clientY - centerY);
  };

  const FloatingParticles = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          initial={{ 
            x: Math.random() * 300,
            y: Math.random() * 200,
            opacity: 0 
          }}
          animate={{
            x: Math.random() * 300,
            y: Math.random() * 200,
            opacity: isHovered ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: 2 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative group perspective-1000"
    >
      <div className="relative h-full bg-white/90 dark:bg-gradient-to-br dark:from-gray-900/80 dark:via-gray-800/90 dark:to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden transform-gpu shadow-lg">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
        
        <FloatingParticles />
        
        <div className="relative p-6 h-full flex flex-col transform-gpu" style={{ transform: "translateZ(20px)" }}>
          {/* Project image/icon */}
          <div className="mb-4 relative">
            <div className="w-full h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-4xl text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-white transition-colors duration-300 relative z-10">
                {project.icon || '🚀'}
              </div>
              
              {/* Floating tech badges */}
              <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                {project.technologies?.slice(0, 3).map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ scale: 0 }}
                    animate={{ scale: isHovered ? 1 : 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-cyan-700 dark:text-cyan-300 border border-cyan-500/30"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Project title */}
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>

          {/* Project description */}
          <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
            {project.description}
          </p>

          {/* Project metrics/achievements */}
          {project.metrics && (
            <div className="mb-4 p-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-500/20">
              <p className="text-sm text-cyan-700 dark:text-cyan-300 font-medium">
                📈 {project.metrics}
              </p>
            </div>
          )}

          {/* Technologies used */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-sm bg-slate-100 dark:bg-gray-800/50 text-slate-700 dark:text-gray-300 rounded-full border border-slate-300 dark:border-gray-700/50 group-hover:border-cyan-500/30 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-auto">
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-gray-700 dark:to-gray-600 text-slate-700 dark:text-white rounded-lg font-medium text-center transition-all duration-300 hover:from-slate-300 hover:to-slate-400 dark:hover:from-gray-600 dark:hover:to-gray-500 hover:shadow-lg hover:shadow-slate-500/25 dark:hover:shadow-gray-500/25"
              >
                View Code
              </motion.a>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium text-center transition-all duration-300 hover:from-cyan-400 hover:to-blue-400 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Live Demo
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleViewAllProjects = () => {
    window.open('https://github.com/SaiRam-Peruri', '_blank', 'noopener,noreferrer');
  };

  // Actual projects from portfolio data
  const projects = [
    {
      title: "Terraform Blueprints - Enterprise Infrastructure as Code",
      description: "Comprehensive Terraform blueprint library for enterprise-grade infrastructure provisioning across AWS, Azure, and GCP with modular, reusable components.",
      technologies: ["Terraform", "AWS", "Azure", "GCP", "HashiCorp Vault", "GitHub Actions", "Terratest", "Ansible", "Python"],
      icon: "🏗️",
      githubUrl: "https://github.com/SaiRam-Peruri",
      liveUrl: null,
      metrics: "60% Faster Provisioning, 40% Fewer Manual Errors"
    },
    {
      title: "Automated Deployment of OpenWebUI on GCP with Vault-secured Credentials",
      description: "Enterprise-grade infrastructure automation platform deploying OpenWebUI on Google Cloud Platform with HashiCorp Vault security integration.",
      technologies: ["GCP", "Terraform", "HashiCorp Vault", "Docker", "NGINX", "Linux", "Bash", "Systemd", "TLS/SSL"],
      icon: "☁️",
      githubUrl: "https://github.com/SaiRam-Peruri",
      liveUrl: null,
      metrics: "100% Automated Deployment, Zero-Touch Provisioning"
    },
    {
      title: "Food Ordering Platform – CI/CD Deployment on AWS using Terraform",
      description: "Scalable full-stack food ordering platform with automated CI/CD pipeline deployed on AWS infrastructure using Terraform for Infrastructure as Code.",
      technologies: ["AWS", "Terraform", "React", "Vite", "Node.js", "MongoDB", "CodePipeline", "CodeBuild", "S3", "IAM"],
      icon: "🍕",
      githubUrl: "https://github.com/SaiRam-Peruri",
      liveUrl: null,
      metrics: "Full-Stack MERN Application, Auto-scaling & Load Balancing"
    },
    {
      title: "Infrastructure Monitoring & Alerting System",
      description: "Comprehensive monitoring and alerting solution using Zabbix, Check-mk, and Nagios for enterprise infrastructure, reducing MTTR by 35%.",
      technologies: ["Zabbix", "Check-mk", "Nagios", "Prometheus", "Grafana", "Python", "Bash", "RHEL", "Ubuntu"],
      icon: "📊",
      githubUrl: "https://github.com/SaiRam-Peruri",
      liveUrl: null,
      metrics: "35% MTTR Reduction, 99.9% Infrastructure Uptime"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-900 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
            animate={isInView ? {
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Explore my portfolio of DevOps and cloud infrastructure projects, 
            showcasing modern deployment strategies and scalable solutions.
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: "100%" } : { width: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mt-8 max-w-md"
          />
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View more projects button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://github.com/SaiRam-Peruri"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleViewAllProjects}
              className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 relative overflow-hidden group cursor-pointer no-underline"
            >
              <span className="relative z-10">View All Projects on GitHub</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
