import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { portfolio } from '../data/portfolio';
import { Send, Loader, CheckCircle, AlertTriangle, Download, FileText, Award, Mail, Phone, MessageCircle, Zap, Sparkles, Star, Bot, Wand2, RefreshCw, ThumbsUp, Lightbulb } from 'lucide-react';

// Optimized floating elements with fewer particles and pre-calculated values
const FloatingElements = React.memo(() => {
  const particles = React.useMemo(() => {
    return [...Array(8)].map((_, i) => ({
      id: i,
      initialX: (i * 200) % window.innerWidth,
      initialY: (i * 150) % window.innerHeight,
      endX: ((i + 1) * 180) % window.innerWidth,
      endY: ((i + 1) * 130) % window.innerHeight,
      duration: 6 + (i % 3),
      delay: i * 0.8
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          initial={{ 
            x: particle.initialX,
            y: particle.initialY,
            opacity: 0 
          }}
          animate={{
            x: particle.endX,
            y: particle.endY,
            opacity: [0, 0.6, 0],
            scale: [0, 1.2, 0]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay
          }}
        />
      ))}
    </div>
  );
});

const MagneticButton = React.memo(({ children, onClick, className, ...props }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]); // Reduced rotation
  const rotateY = useTransform(x, [-100, 100], [-15, 15]); // Reduced rotation

  const handleMouse = React.useCallback((event) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((event.clientX - centerX) * 0.7); // Reduced intensity
    y.set((event.clientY - centerY) * 0.7); // Reduced intensity
  }, [x, y]);

  const handleMouseLeave = React.useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.button
      ref={ref}
      style={{ x, y, rotateX, rotateY, z: 100 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }} // Reduced scale
      whileTap={{ scale: 0.98 }} // Reduced scale
      onClick={onClick}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
});

const ContactSection = () => {
  const form = useRef();
  const containerRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [message, setMessage] = useState('');
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [showAIOptions, setShowAIOptions] = useState(false);
  const [originalMessage, setOriginalMessage] = useState('');
  const [aiError, setAiError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSendSuccess(false);
    setSendError(false);

    // Check if EmailJS environment variables are configured
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    console.log('EmailJS Config:', { serviceId, templateId, publicKey: publicKey ? 'Present' : 'Missing' });

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS configuration missing. Please set up environment variables.');
      setSendError(true);
      setIsSending(false);
      return;
    }

    // Initialize EmailJS properly
    emailjs.init(publicKey);

    // Try with form data object instead of form reference
    const formData = new FormData(form.current);
    const templateParams = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    console.log('Sending with params:', templateParams);

    // Try the sendForm method with proper initialization
    emailjs.sendForm(serviceId, templateId, form.current, {
      publicKey: publicKey
    })
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setSendSuccess(true);
          form.current.reset();
          setMessage(''); // Clear the message state as well
      })
      .catch((error) => {
          console.error('Email sending failed:', error);
          console.error('Error details:', {
            status: error.status,
            text: error.text,
            serviceId,
            templateId,
            publicKey: publicKey ? 'Present' : 'Missing'
          });
          
          // Show user-friendly error message
          if (error.status === 404) {
            console.error('EmailJS Account Error: Please verify your EmailJS service is properly set up and active.');
          }
          
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

  const enhanceMessage = React.useCallback(async (style = 'improve') => {
    if (!message.trim()) return;
    
    setIsEnhancing(true);
    setOriginalMessage(message);
    setAiError('');
    
    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      
      console.log('AI Enhancement attempt:', { 
        hasApiKey: !!apiKey, 
        style, 
        messageLength: message.length 
      });
      
      if (!apiKey) {
        throw new Error('OpenAI API key not configured');
      }

      const prompts = {
        improve: "Please rewrite this message to make it more professional, clear, and engaging while maintaining the original intent and meaning:",
        professional: "Please rewrite this message in a formal, professional business tone suitable for job inquiries or business proposals:",
        friendly: "Please rewrite this message in a warm, friendly, and approachable tone while keeping it professional:",
        concise: "Please rewrite this message to be more concise and to-the-point while keeping the key information:",
        detailed: "Please expand this message with more details, context, and professional structure suitable for business communication:"
      };

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a professional communication assistant. Help rewrite messages for job applications, business inquiries, and professional networking. Keep the tone appropriate for contacting a DevOps engineer about potential opportunities.'
            },
            {
              role: 'user',
              content: `${prompts[style]}\n\nOriginal message: "${message}"`
            }
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      });

      console.log('OpenAI API response status:', response.status);

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        console.error('OpenAI API error details:', errorData);
        
        // Use fallback templates for common errors
        if (response.status === 429 || response.status === 403 || response.status === 401) {
          console.log('Using fallback template due to API limitations');
          const fallbackMessage = generateFallbackMessage(message, style);
          setMessage(fallbackMessage);
          setShowAIOptions(true);
          return;
        }
        
        throw new Error(`API request failed: ${response.status} - ${errorData?.error?.message || 'Unknown error'}`);
      }

      const data = await response.json();
      console.log('OpenAI API success:', { hasChoices: !!data.choices?.length });
      
      if (!data.choices || data.choices.length === 0) {
        throw new Error('No response from AI service. Please try again.');
      }
      
      const enhancedMessage = data.choices[0].message.content.trim();
      
      if (!enhancedMessage) {
        throw new Error('Empty response from AI service. Please try again.');
      }
      
      setMessage(enhancedMessage);
      setShowAIOptions(true); // Keep options visible for retry
      
    } catch (error) {
      console.error('AI Enhancement Error:', error);
      
      // Use fallback templates for any error
      try {
        const fallbackMessage = generateFallbackMessage(message, style);
        setMessage(fallbackMessage);
        setShowAIOptions(true);
        setAiError('🤖 Using offline AI templates (OpenAI API temporarily unavailable)');
      } catch (fallbackError) {
        let errorMessage = 'Failed to enhance message. Please try again.';
        
        if (error.message.includes('API key')) {
          errorMessage = '🔑 OpenAI API key not configured. Please add your API key to continue.';
        } else if (error.message.includes('Rate limit') || error.message.includes('429')) {
          errorMessage = '⏳ AI service is busy. Using fallback templates or try again later.';
        } else if (error.message.includes('Invalid API key') || error.message.includes('401')) {
          errorMessage = '❌ Invalid API key. Using fallback templates.';
        } else if (error.message.includes('billing') || error.message.includes('403')) {
          errorMessage = '💳 API quota exceeded. Using fallback templates.';
        }
        
        setAiError(errorMessage);
      }
    } finally {
      setIsEnhancing(false);
    }
  }, [message]); // Dependencies for useCallback

  // Fallback template generator
  const generateFallbackMessage = (originalMessage, style) => {
    const messageContent = originalMessage.toLowerCase();
    
    const templates = {
      professional: {
        greeting: "Dear Hiring Manager,\n\n",
        intro: "I am writing to express my interest in potential opportunities within your organization. ",
        body: originalMessage,
        closing: "\n\nI would welcome the opportunity to discuss how my skills and experience can contribute to your team's success. Thank you for your time and consideration.\n\nBest regards"
      },
      friendly: {
        greeting: "Hello!\n\n",
        intro: "I hope this message finds you well. ",
        body: originalMessage,
        closing: "\n\nI'd love to connect and learn more about potential opportunities. Thanks for taking the time to read this!\n\nWarm regards"
      },
      concise: {
        greeting: "",
        intro: "",
        body: originalMessage.split('.')[0] + (originalMessage.includes('job') || messageContent.includes('opportunity') ? '. Interested in DevOps roles.' : '.'),
        closing: "\n\nThank you."
      },
      detailed: {
        greeting: "Dear Hiring Team,\n\n",
        intro: "I am reaching out to explore potential opportunities where my DevOps and cloud infrastructure expertise could add value to your organization. ",
        body: originalMessage,
        closing: "\n\nWith my background in Terraform, cloud platforms, and CI/CD pipelines, I am confident I can contribute effectively to your team's objectives. I would appreciate the opportunity to discuss how my skills align with your current needs.\n\nThank you for your consideration."
      },
      improve: {
        greeting: messageContent.includes('hello') || messageContent.includes('hi') ? "Hello,\n\n" : "",
        intro: "",
        body: originalMessage,
        closing: messageContent.includes('thank') ? "" : "\n\nThank you for your time."
      }
    };

    const template = templates[style] || templates.improve;
    return template.greeting + template.intro + template.body + template.closing;
  };

  const retryAI = () => {
    if (originalMessage) {
      setMessage(originalMessage);
      setAiError('');
    }
  };

  const revertMessage = () => {
    setMessage(originalMessage);
    setOriginalMessage('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setShowAIOptions(e.target.value.length > 10);
    setAiError(''); // Clear any AI errors when user types
  };

  const useSuggestion = (suggestion) => {
    setMessage(suggestion);
    setShowAIOptions(true);
  };

  const messageSuggestions = [
    "Hi! I'm interested in discussing a DevOps project opportunity with you.",
    "Hello! I'd love to connect about potential collaboration on cloud infrastructure.",
    "Hi Sai Ram! Your portfolio is impressive. Let's discuss a project opportunity.",
    "Hello! I'm reaching out regarding a potential job opportunity that matches your skills.",
    "Hi! I'd like to discuss a consulting opportunity for AWS/DevOps expertise."
  ];

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
    <section 
      ref={containerRef}
      id="contact" 
      className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <FloatingElements />

      <div className="container mx-auto px-4 relative z-10">
        {/* Epic Header */}
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 mb-6 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full"
          >
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-700 dark:text-cyan-300 font-semibold">Let's Create Something Amazing</span>
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" />
          </motion.div>
          
          <motion.h2 
            className="text-5xl lg:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            GET IN TOUCH
          </motion.h2>
          
          <motion.p 
            className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to revolutionize infrastructure? Let's build the future together! 🚀
          </motion.p>
          
          {/* Availability Status with Crazy Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.6 }}
            className="mt-8 inline-flex items-center space-x-4 bg-gradient-to-r from-green-400/20 via-emerald-400/20 to-cyan-400/20 backdrop-blur-sm border-2 border-green-400/50 rounded-2xl px-8 py-4 shadow-2xl"
          >
            <motion.div 
              className="w-4 h-4 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-lg font-bold text-green-700 dark:text-green-300">
              {portfolio.personalInfo.availability.status} 🔥
            </span>
            <Star className="w-5 h-5 text-yellow-500 animate-spin" />
            <span className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
              {portfolio.personalInfo.availability.relocation}
            </span>
          </motion.div>
        </motion.div>

        {/* Contact Methods - Crazy 3D Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -10, rotateY: 5, rotateX: 5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-green-200 dark:border-green-700 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full blur-2xl" />
              <Mail className="w-12 h-12 text-green-600 dark:text-green-400 mb-4 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Email for Jobs</h3>
              <a 
                href="mailto:sairam.peruri.work@gmail.com" 
                className="text-lg text-green-600 dark:text-green-400 hover:underline font-semibold"
              >
                sairam.peruri.work@gmail.com
              </a>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">💼 Open for full-time, contract & remote opportunities</p>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotateX: 90 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -10, rotateY: -5, rotateX: -5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-blue-200 dark:border-blue-700 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl" />
              <Phone className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Phone & Projects</h3>
              <a 
                href="tel:+19787266536" 
                className="text-lg text-blue-600 dark:text-blue-400 hover:underline font-semibold"
              >
                +1 (978) 726-6536
              </a>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">📞 Available for project discussions</p>
            </div>
          </motion.div>

          {/* Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: 90 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -10, rotateY: -5, rotateX: 5 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-2xl p-8 border border-purple-200 dark:border-purple-700 shadow-2xl overflow-hidden">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl" />
              <MessageCircle className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4 relative z-10" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Quick Message</h3>
              <p className="text-lg text-purple-600 dark:text-purple-400 font-semibold">Use form below</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">💬 For general inquiries & networking</p>
            </div>
          </motion.div>
        </div>

        {/* Downloads Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateX: -30 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-800/40 backdrop-blur-2xl rounded-3xl p-8 border border-white/50 dark:border-slate-700/50 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5" />
            
            <motion.h3 
              className="text-3xl lg:text-4xl font-black text-center mb-8 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              📄 DOWNLOAD DOCUMENTS
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <MagneticButton
                onClick={downloadResume}
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border-2 border-blue-500/30 hover:border-blue-500/50 rounded-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-black text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Resume</h4>
                  <p className="text-slate-600 dark:text-slate-400">Latest DevOps resume</p>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Download className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </MagneticButton>

              <MagneticButton
                onClick={downloadRecommendation}
                className="flex items-center space-x-4 p-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 hover:from-purple-500/20 hover:to-pink-500/20 border-2 border-purple-500/30 hover:border-purple-500/50 rounded-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-black text-slate-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Recommendation</h4>
                  <p className="text-slate-600 dark:text-slate-400">Professor letter</p>
                </div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Download className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </motion.div>
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Modern Contact Form - Three Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Form */}
            <div className="lg:col-span-2">
              <div className="relative">
                {/* Background Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-white/30 dark:from-slate-800/70 dark:to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-white/50 dark:border-slate-700/50" />
                
                <motion.form
                  ref={form}
                  onSubmit={sendEmail}
                  className="relative p-8 lg:p-12 space-y-8"
                >
                  <motion.h3 
                    className="text-3xl lg:text-4xl font-black text-center mb-8 bg-gradient-to-r from-cyan-600 via-purple-600 to-blue-600 bg-clip-text text-transparent"
                    animate={{ 
                      textShadow: [
                        '0 0 10px rgba(6, 182, 212, 0.5)',
                        '0 0 20px rgba(147, 51, 234, 0.5)',
                        '0 0 10px rgba(37, 99, 235, 0.5)',
                        '0 0 10px rgba(6, 182, 212, 0.5)'
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    SEND MESSAGE
                  </motion.h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-3">
                        <span className="flex items-center space-x-2">
                          <span>Name</span>
                          <Star className="w-4 h-4 text-cyan-500 animate-pulse" />
                        </span>
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-6 py-4 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-4 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all duration-300 text-lg font-medium placeholder-slate-400"
                        placeholder="Your awesome name..."
                      />
                      {focusedField === 'name' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center"
                        >
                          <Star className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-3">
                        <span className="flex items-center space-x-2">
                          <span>Email</span>
                          <Zap className="w-4 h-4 text-yellow-500 animate-pulse" />
                        </span>
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-6 py-4 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-4 focus:ring-purple-500/50 focus:border-purple-500 transition-all duration-300 text-lg font-medium placeholder-slate-400"
                        placeholder="your.email@company.com"
                      />
                      {focusedField === 'email' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
                        >
                          <Star className="w-3 h-3 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    whileFocus={{ scale: 1.01 }}
                    className="relative"
                  >
                    <label className="block text-lg font-bold text-slate-700 dark:text-slate-300 mb-3">
                      <span className="flex items-center space-x-2">
                        <span>Message</span>
                        <Sparkles className="w-4 h-4 text-cyan-500 animate-pulse" />
                        <motion.span 
                          className="text-sm bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          AI Enhanced
                        </motion.span>
                      </span>
                    </label>
                    
                    <div className="relative">
                      <textarea 
                        name="message" 
                        required 
                        rows="6"
                        value={message}
                        onChange={handleMessageChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField('')}
                        className="w-full px-6 py-4 bg-white/80 dark:bg-slate-700/80 backdrop-blur-sm border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:ring-4 focus:ring-blue-500/50 focus:border-blue-500 transition-all duration-300 text-lg font-medium placeholder-slate-400 resize-none"
                        placeholder="Tell me about your amazing project or opportunity! 🚀"
                      />
                      
                      {/* AI Enhancement Buttons */}
                      {showAIOptions && !isEnhancing && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          className="absolute top-4 right-4 flex flex-wrap gap-2"
                        >
                          <motion.button
                            type="button"
                            onClick={() => enhanceMessage('improve')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Bot className="w-3 h-3" />
                            <span>✨ Improve</span>
                          </motion.button>
                          
                          <motion.button
                            type="button"
                            onClick={() => enhanceMessage('professional')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Bot className="w-3 h-3" />
                            <span>Professional</span>
                          </motion.button>
                          
                          <motion.button
                            type="button"
                            onClick={() => enhanceMessage('friendly')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <ThumbsUp className="w-3 h-3" />
                            <span>Friendly</span>
                          </motion.button>
                          
                          <motion.button
                            type="button"
                            onClick={() => enhanceMessage('concise')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Zap className="w-3 h-3" />
                            <span>Concise</span>
                          </motion.button>
                          
                          <motion.button
                            type="button"
                            onClick={() => enhanceMessage('detailed')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center space-x-1 px-3 py-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            <Lightbulb className="w-3 h-3" />
                            <span>Detailed</span>
                          </motion.button>
                        </motion.div>
                      )}
                      
                      {/* AI Processing Indicator */}
                      {isEnhancing && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="absolute inset-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center"
                        >
                          <div className="flex items-center space-x-3 text-blue-600 dark:text-blue-400">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                              <Wand2 className="w-6 h-6" />
                            </motion.div>
                            <span className="text-lg font-bold">AI is enhancing your message...</span>
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 0.5, repeat: Infinity }}
                            >
                              <Sparkles className="w-5 h-5" />
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Revert & Retry Buttons */}
                      {(originalMessage || aiError) && !isEnhancing && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="absolute bottom-4 right-4 flex space-x-2"
                        >
                          {originalMessage && (
                            <motion.button
                              type="button"
                              onClick={revertMessage}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              <RefreshCw className="w-4 h-4" />
                              <span>Revert</span>
                            </motion.button>
                          )}
                          
                          {aiError && (
                            <motion.button
                              type="button"
                              onClick={retryAI}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                              <RefreshCw className="w-4 h-4" />
                              <span>Retry AI</span>
                            </motion.button>
                          )}
                        </motion.div>
                      )}
                    </div>
                    
                    {focusedField === 'message' && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                      >
                        <Star className="w-3 h-3 text-white" />
                      </motion.div>
                    )}
                    
                    {/* AI Enhancement Info */}
                    {showAIOptions && !aiError && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-700 rounded-lg"
                      >
                        <div className="flex items-center space-x-2 text-sm text-blue-700 dark:text-blue-300">
                          <Bot className="w-4 h-4 animate-pulse" />
                          <span className="font-semibold">Real AI Assistant Active</span>
                          <span>- Powered by ChatGPT! Click any style above to enhance your message!</span>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* AI Error Display */}
                    {aiError && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3 p-4 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border border-red-200 dark:border-red-700 rounded-lg"
                      >
                        <div className="flex items-start space-x-3 text-sm text-red-700 dark:text-red-300">
                          <AlertTriangle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold mb-1">AI Enhancement Failed:</div>
                            <div>{aiError}</div>
                            {aiError.includes('quota') && (
                              <div className="mt-2 text-xs">
                                💡 You can still send messages without AI enhancement, or add billing to your OpenAI account.
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                    
                    {/* AI Message Suggestions */}
                    {message.length === 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4"
                      >
                        <div className="flex items-center space-x-2 mb-3">
                          <Lightbulb className="w-5 h-5 text-yellow-500 animate-pulse" />
                          <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Quick Start Suggestions:</span>
                        </div>
                        
                        <div className="grid gap-2">
                          {messageSuggestions.map((suggestion, index) => (
                            <motion.button
                              key={index}
                              type="button"
                              onClick={() => useSuggestion(suggestion)}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              whileHover={{ scale: 1.02, x: 5 }}
                              whileTap={{ scale: 0.98 }}
                              className="text-left p-3 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 border border-slate-200 dark:border-slate-600 rounded-lg hover:from-blue-50 hover:to-purple-50 dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 group"
                            >
                              <div className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                                <span className="text-sm text-slate-700 dark:text-slate-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                                  {suggestion}
                                </span>
                                <motion.div
                                  initial={{ opacity: 0 }}
                                  whileHover={{ opacity: 1 }}
                                  className="ml-auto"
                                >
                                  <Zap className="w-4 h-4 text-blue-500" />
                                </motion.div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                        
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.5 }}
                          className="mt-3 text-center"
                        >
                          <span className="text-xs text-slate-500 dark:text-slate-400 italic">
                            💡 Click any suggestion to start, then use AI enhancement buttons to refine your message!
                          </span>
                        </motion.div>
                      </motion.div>
                    )}
                  </motion.div>

                  <div className="text-center">
                    <MagneticButton
                      type="submit"
                      disabled={isSending}
                      className="inline-flex items-center justify-center px-12 py-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 text-white font-black text-xl rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 flex items-center space-x-3">
                        {isSending ? (
                          <>
                            <Loader className="animate-spin h-6 w-6" />
                            <span>SENDING MAGIC...</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-6 w-6" />
                            <span>SEND MESSAGE</span>
                            <Sparkles className="h-6 w-6 animate-pulse" />
                          </>
                        )}
                      </span>
                    </MagneticButton>
                  </div>
                </motion.form>
                
                {/* Success/Error Messages */}
                {sendSuccess && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    className="mt-8 flex items-center justify-center p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 border-2 border-green-300 dark:border-green-700 text-green-800 dark:text-green-200 rounded-2xl backdrop-blur-sm shadow-2xl"
                  >
                    <CheckCircle className="h-8 w-8 mr-4 animate-bounce" />
                    <p className="text-lg font-bold">🎉 MESSAGE SENT SUCCESSFULLY! I'll get back to you ASAP!</p>
                  </motion.div>
                )}

                {sendError && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.5, x: -100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    className="mt-8 flex items-center justify-center p-6 bg-gradient-to-r from-red-100 to-pink-100 dark:from-red-900/50 dark:to-pink-900/50 border-2 border-red-300 dark:border-red-700 text-red-800 dark:text-red-200 rounded-2xl backdrop-blur-sm shadow-2xl"
                  >
                    <AlertTriangle className="h-8 w-8 mr-4 animate-pulse" />
                    <div className="text-left">
                      <p className="text-lg font-bold">😅 Something went wrong!</p>
                      <p className="text-sm mt-1">Please contact me directly at <a href="mailto:sairam.peruri.work@gmail.com" className="underline font-semibold">sairam.peruri.work@gmail.com</a></p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right Column - AI Panel */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="sticky top-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                  <div className="relative bg-gradient-to-br from-white/70 to-white/30 dark:from-slate-800/70 dark:to-slate-800/30 backdrop-blur-2xl rounded-3xl border border-white/50 dark:border-slate-700/50 p-8 space-y-6">
                    
                    {/* AI Status */}
                    <motion.div
                      animate={{ 
                        background: [
                          'linear-gradient(45deg, rgba(34, 197, 94, 0.1), rgba(59, 130, 246, 0.1))',
                          'linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
                          'linear-gradient(45deg, rgba(147, 51, 234, 0.1), rgba(34, 197, 94, 0.1))'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="p-6 rounded-2xl border border-cyan-200 dark:border-cyan-700 text-center"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <Bot className="w-5 h-5 text-cyan-400 animate-pulse" />
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                          Real AI Assistant Active
                        </span>
                      </div>
                      <p className="text-xs text-center text-slate-600 dark:text-slate-400 mt-2">
                        Powered by ChatGPT! Click any style above to enhance your message!
                      </p>
                    </motion.div>

                    {/* Quick Message Suggestions */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gradient-to-br from-white/60 to-white/30 dark:from-slate-800/60 dark:to-slate-800/30 backdrop-blur-xl rounded-2xl p-6 border border-white/50 dark:border-slate-700/50"
                    >
                      <h4 className="text-lg font-black text-slate-700 dark:text-slate-300 mb-4 text-center">
                        💡 Quick Starters
                      </h4>
                      <div className="space-y-3">
                        {messageSuggestions.slice(0, 3).map((suggestion, index) => (
                          <motion.button
                            key={index}
                            onClick={() => useSuggestion(suggestion)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full p-3 text-left bg-gradient-to-r from-slate-100/80 to-slate-200/80 dark:from-slate-700/80 dark:to-slate-600/80 hover:from-cyan-100/80 hover:to-purple-100/80 dark:hover:from-cyan-900/50 dark:hover:to-purple-900/50 rounded-xl border border-slate-300/50 dark:border-slate-600/50 transition-all duration-300"
                          >
                            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                              "{suggestion}"
                            </p>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
