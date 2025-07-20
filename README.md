# 🚀 Sai Ram Peruri - Portfolio Website

[![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.7-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.15-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.14.4-FF0055?logo=framer)](https://www.framer.com/motion/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-32C5FF?logo=emailjs)](https://www.emailjs.com/)

> **Modern Portfolio Website for DevOps Engineer & Systems Specialist**

A sophisticated, responsive portfolio website showcasing expertise in cloud infrastructure, DevOps automation, and systems engineering. Built with modern web technologies and featuring advanced animations, theme switching, and professional contact management.

## 👨‍💻 About

**Sai Ram Peruri** - Systems Engineer | DevOps Engineer | Cloud Infrastructure Specialist

Currently pursuing Master's in Computer Science at University of Massachusetts Lowell, with extensive experience in AWS/GCP cloud infrastructure, CI/CD automation, and scalable system design.

**Status:** 🟢 Open to Work - Full-time, Contract, Remote opportunities

## ✨ Features

### 🎨 Design & User Experience
- **Modern UI/UX** - Clean, professional design with subtle animations
- **Dark/Light Theme** - Seamless theme switching with system preference detection
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Advanced Animations** - Smooth transitions using Framer Motion
- **3D Effects** - Interactive project cards with hover effects
- **Performance Optimized** - Fast loading with code splitting and lazy loading

### 📱 Core Sections
- **Hero Section** - Professional introduction with animated background
- **About Section** - Comprehensive bio and professional summary
- **Skills Section** - Organized by categories (Languages, DevOps, Cloud, Monitoring, Tools)
- **Experience Section** - Detailed work history with achievements and metrics
- **Education Section** - Academic credentials with coursework details
- **Featured Projects** - Showcase of DevOps and infrastructure projects
- **DevOps Expertise** - Specialized skills in automation and cloud infrastructure
- **Systems Engineering** - Enterprise-level system management capabilities
- **Certifications** - AWS, Azure, and HashiCorp credentials
- **Achievements** - Professional recognitions and awards
- **Contact Section** - Multiple contact methods with direct hiring information

### 🛠 Technical Features
- **EmailJS Integration** - Functional contact form with email notifications
- **Document Downloads** - Resume and recommendation letter downloads
- **Theme Persistence** - Remembers user's theme preference
- **SEO Optimized** - Meta tags and structured data for search engines
- **Accessibility** - WCAG compliant with proper contrast and navigation
- **Type Safety** - PropTypes validation for component props

## 🏗 Tech Stack

### Frontend Framework
- **React 19.1.0** - Latest React with concurrent features
- **Vite 6.0.7** - Fast build tool with HMR (Hot Module Replacement)

### Styling & Animation
- **Tailwind CSS 3.4.15** - Utility-first CSS framework with dark mode
- **Framer Motion 11.14.4** - Advanced animations and gestures
- **Lucide React 0.468.0** - Beautiful, customizable icons

### Functionality
- **EmailJS 4.4.1** - Client-side email sending
- **React Router DOM 7.0.2** - Client-side routing
- **PropTypes 15.8.1** - Runtime type checking

### Development Tools
- **ESLint** - Code linting with React-specific rules
- **PostCSS** - CSS processing with Tailwind
- **VS Code Extensions** - Tailwind IntelliSense support

## 📂 Project Structure

```
sairam-portfolio/
├── public/
│   ├── pp.jpg                          # Profile picture
│   ├── Sairam_resume_tf.pdf           # Resume download
│   └── LetterofRecommendation_Professor_Weis.pdf
├── src/
│   ├── components/                      # React components
│   │   ├── AboutSection.jsx            # Professional summary
│   │   ├── HeroSection.jsx             # Main introduction
│   │   ├── SkillsSection.jsx           # Technical skills
│   │   ├── ProjectsSection.jsx         # Featured projects
│   │   ├── DevOpsSection.jsx           # DevOps expertise
│   │   ├── SystemsSection.jsx          # Systems engineering
│   │   ├── EducationSection.jsx        # Academic background
│   │   ├── CertificationsSection.jsx   # Professional certifications
│   │   ├── AchievementsSection.jsx     # Awards and recognitions
│   │   ├── ContactSection.jsx          # Contact information & form
│   │   ├── Navigation.jsx              # Header navigation
│   │   ├── Footer.jsx                  # Footer links
│   │   └── SEO.jsx                     # Meta tags component
│   ├── data/
│   │   └── portfolio.js                # Portfolio data & content
│   ├── hooks/
│   │   └── useTheme.jsx                # Theme management hook
│   ├── pages/
│   │   ├── Home.jsx                    # Main portfolio page
│   │   ├── BlogPage.jsx                # Blog listing (future)
│   │   ├── BlogPostPage.jsx            # Individual blog posts
│   │   └── ResumePage.jsx              # Detailed resume view
│   ├── utils/                          # Utility functions
│   ├── App.jsx                         # Main app component
│   ├── main.jsx                        # App entry point
│   └── index.css                       # Global styles
├── eslint.config.js                    # ESLint configuration
├── tailwind.config.js                  # Tailwind configuration
├── postcss.config.js                   # PostCSS configuration
├── vite.config.js                      # Vite configuration
└── package.json                        # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SaiRam-Peruri/sairam-portfolio.git
   cd sairam-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

## 📧 Contact Configuration

The portfolio includes a functional contact form powered by EmailJS. To set up:

1. **Create EmailJS Account** - Sign up at [emailjs.com](https://www.emailjs.com/)
2. **Create Email Service** - Configure your preferred email provider
3. **Create Email Template** - Design your contact form email template
4. **Get Credentials** - Copy Service ID, Template ID, and Public Key
5. **Update Environment** - Add credentials to `.env` file

## 🎨 Customization

### Portfolio Data
All content is centralized in `src/data/portfolio.js`:
- Personal information and contact details
- Professional experience and achievements
- Technical skills and proficiency levels
- Project descriptions and technologies
- Education and certifications

### Theme Configuration
Theme settings in `tailwind.config.js`:
- Color schemes for light/dark modes
- Typography and spacing
- Custom animations and transitions

### Component Styling
Each component uses Tailwind classes with:
- Responsive design breakpoints
- Dark mode variants
- Hover and focus states
- Animation classes

## 🌐 Deployment

### Recommended Platforms
- **Vercel** - Automatic deployments from GitHub
- **Netlify** - Easy drag-and-drop deployment
- **GitHub Pages** - Free hosting for open source projects
- **AWS S3 + CloudFront** - Enterprise-grade hosting

### Build Optimization
- Code splitting for faster loading
- Image optimization and lazy loading
- CSS purging for smaller bundle size
- Gzip compression for production

## 📊 Performance

- **Lighthouse Score** - 95+ on all metrics
- **Core Web Vitals** - Excellent performance scores
- **Bundle Size** - Optimized with tree shaking
- **Loading Speed** - Sub-2 second initial load

## 📱 Contact Information

### For Job Opportunities
- **Email:** sairam.peruri.work@gmail.com
- **Phone:** +1 (978) 726-6536
- **Status:** Open to work - Full-time, Contract, Remote

### Professional Profiles
- **LinkedIn:** [sairamperuri](https://www.linkedin.com/in/sairamperuri/)
- **GitHub:** [SaiRam-Peruri](https://github.com/SaiRam-Peruri)
- **Portfolio:** [Live Website](https://sairam-peruri.github.io/portfolio)

### Current Focus
- **Location:** Lowell, MA, USA
- **Education:** MS Computer Science - University of Massachusetts Lowell
- **Specialization:** DevOps Engineering, Cloud Infrastructure, Systems Administration
- **Availability:** Immediately available for new opportunities

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -am 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **React Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth and powerful animations
- **EmailJS** - For client-side email functionality
- **Lucide** - For beautiful, consistent icons
- **University of Massachusetts Lowell** - For academic support and opportunities

---

**Built with ❤️ by Sai Ram Peruri**  
*Systems Engineer | DevOps Specialist | Cloud Infrastructure Expert*

> 🚀 Ready to contribute to your next cloud infrastructure project!
