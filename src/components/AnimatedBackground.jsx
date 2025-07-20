import React, { useEffect, useRef } from 'react';

const AnimatedBackground = ({ children, variant = 'particles' }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (variant === 'particles') {
      createParticles();
    }
  }, [variant]);

  const createParticles = () => {
    const container = containerRef.current;
    if (!container) return;

    // Clear existing particles
    container.innerHTML = '';

    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle-neon';
      
      // Random size
      const size = Math.random() * 6 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random position
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      
      // Random color
      const colors = [
        'rgba(102, 126, 234, 0.6)',
        'rgba(118, 75, 162, 0.6)',
        'rgba(240, 147, 251, 0.6)',
        'rgba(98, 126, 234, 0.6)',
        'rgba(139, 69, 19, 0.4)'
      ];
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      
      // Random animation delay
      particle.style.animationDelay = `${Math.random() * 4}s`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      
      container.appendChild(particle);
    }
  };

  const backgroundVariants = {
    particles: 'relative overflow-hidden',
    mesh: 'mesh-gradient',
    animated: 'animated-background',
    glass: 'relative'
  };

  return (
    <div className={`${backgroundVariants[variant]} min-h-screen`}>
      {variant === 'particles' && (
        <div 
          ref={containerRef}
          className="absolute inset-0 pointer-events-none z-0"
        />
      )}
      
      {variant === 'glass' && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 backdrop-blur-sm" />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AnimatedBackground;
