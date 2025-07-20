# 🎯 Universal PDF Portfolio Analyzer

> Transform ANY PDF resume into a complete portfolio website with real data extraction and intelligent parsing.

![Portfolio Generator](https://img.shields.io/badge/Portfolio-Generator-blue)
![PDF Extraction](https://img.shields.io/badge/PDF-Extraction-green)
![Universal](https://img.shields.io/badge/Universal-Template-orange)
![React](https://img.shields.io/badge/React-19.1.0-61dafb)
![Python](https://img.shields.io/badge/Python-3.12+-3776ab)

## ✨ What This Does

This project combines **real PDF extraction** with **intelligent data parsing** to automatically generate portfolio websites from resume PDFs. Perfect for:

- 🚀 **Freelancers** building client portfolios
- 💼 **Recruiters** creating candidate profiles  
- 👨‍💻 **Developers** automating portfolio updates
- 🏢 **Companies** generating team member pages

## 🎥 Demo

```bash
# 1. Drop any PDF resume in 'resume/' folder
# 2. Run the analyzer
python ultimate_pdf_portfolio_analyzer.py

# 3. Get complete portfolio JSON data
# 4. Use with any frontend framework
```

**Result**: From PDF → Complete portfolio website in minutes!

## 🔥 Key Features

### 📄 Real PDF Extraction
- ✅ Extracts actual text from PDFs (no hardcoded data)
- ✅ Supports PyPDF2, pdfplumber, PyMuPDF
- ✅ Handles various resume formats
- ✅ Process multiple PDFs simultaneously

### 🧠 Intelligent Parsing
- ✅ Personal info (name, email, phone, location)
- ✅ Work experience with achievements
- ✅ Technical skills with proficiency levels
- ✅ Education details and certifications
- ✅ Projects and accomplishments
- ✅ Professional achievements

### 🌐 Universal Integration
- ✅ JSON output works with any framework
- ✅ React/Vue/Angular compatible
- ✅ SEO-ready metadata generation
- ✅ Responsive design configuration

## 🚀 Quick Start

### 1. Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd sairam-portfolio

# Install Python dependencies
python install_pdf_dependencies.py

# Install Node.js dependencies (for React frontend)
npm install
```

### 2. Extract Portfolio Data

```bash
# Place PDF resume in 'resume/' folder
cp your_resume.pdf resume/

# Run the analyzer
python ultimate_pdf_portfolio_analyzer.py

# View extracted data
python universal_portfolio_demo.py
```

### 3. Use with Frontend

```bash
# Start development server
npm run dev

# Your portfolio is ready at http://localhost:5173
```

## 📁 Project Structure

```
📦 Universal Portfolio Analyzer
├── 📁 resume/                          # Place PDF resumes here
│   └── 📄 your_resume.pdf             # Any PDF resume
├── 📁 extract_resume/                 # Generated JSON data
│   └── 📄 ultimate_multi_pdf_portfolio_data.json
├── 📁 src/                            # React frontend
│   ├── 📁 components/                 # Portfolio components
│   ├── 📁 data/                       # Data management
│   └── 📄 App.jsx                     # Main application
├── 🐍 ultimate_pdf_portfolio_analyzer.py    # Core extraction engine
├── 🐍 universal_portfolio_demo.py           # Data visualization
├── 🐍 install_pdf_dependencies.py           # Setup helper
├── 📄 package.json                          # Node.js dependencies
└── 📄 README.md                             # This file
```

## 🔧 How It Works

### Step 1: PDF Processing
```python
# Real text extraction from PDF
text = extract_text_from_pdf_real(pdf_path)
# Result: "John Doe\nSoftware Engineer\n..."
```

### Step 2: Intelligent Parsing
```python
# Extract structured data
personal_info = extract_personal_info_from_text(text)
experience = extract_experience_from_text(text)
skills = extract_skills_from_text(text)
```

### Step 3: JSON Generation
```json
{
  "personalInfo": {
    "name": "John Doe",
    "email": "john@example.com",
    "location": "New York, NY"
  },
  "experience": [
    {
      "company": "Tech Corp",
      "title": "Senior Developer",
      "achievements": ["Built scalable systems", "Led team of 5"]
    }
  ],
  "skills": {
    "languages": [{"name": "Python", "level": 90}],
    "cloud": [{"name": "AWS", "level": 85}]
  }
}
```

### Step 4: Frontend Integration
```jsx
import portfolioData from './data/ultimate_multi_pdf_portfolio_data.json';

function Portfolio() {
  return (
    <div>
      <Header name={portfolioData.personalInfo.name} />
      <Skills data={portfolioData.skills} />
      <Experience data={portfolioData.experience} />
    </div>
  );
}
```

## 🛠️ Technology Stack

### Backend (PDF Processing)
- **Python 3.12+** - Core processing
- **pdfplumber** - Accurate text extraction
- **PyPDF2** - Lightweight PDF handling
- **regex** - Pattern matching
- **JSON** - Universal data format

### Frontend (Portfolio Display)
- **React 19** - Modern UI framework
- **Vite** - Fast development server
- **Tailwind CSS** - Utility-first styling
- **JavaScript** - Interactive features

## 📊 Extraction Results

From a real resume PDF:
- ✅ **4,156 characters** extracted
- ✅ **24 technical skills** identified
- ✅ **Work experience** with companies and dates
- ✅ **Personal information** parsed
- ✅ **Education details** extracted
- ✅ **Certifications** detected

## 🎨 Framework Integration

### React/Next.js
```jsx
import data from './portfolio_data.json';
<PersonalInfo data={data.personalInfo} />
```

### Vue.js
```vue
<template>
  <SkillsChart :skills="portfolioData.skills" />
</template>
```

### Angular
```typescript
import * as portfolioData from './portfolio_data.json';
```

### Python/Django
```python
with open('portfolio_data.json') as f:
    data = json.load(f)
```

## 🔄 Universal Workflow

### For Any New Person:
1. **Replace PDF**: `cp new_resume.pdf resume/`
2. **Extract Data**: `python ultimate_pdf_portfolio_analyzer.py`
3. **Get Fresh JSON**: Automatically generated
4. **Same Template**: Use identical design
5. **Deploy**: Instant personalized portfolio

### Multiple Profiles:
```bash
# Process Person A
cp person_a_resume.pdf resume/
python ultimate_pdf_portfolio_analyzer.py
mv ultimate_multi_pdf_portfolio_data.json person_a_data.json

# Process Person B  
cp person_b_resume.pdf resume/
python ultimate_pdf_portfolio_analyzer.py
mv ultimate_multi_pdf_portfolio_data.json person_b_data.json
```

## 📈 Use Cases

### 🎯 Freelance Portfolio Builder
- Client provides PDF resume
- Generate portfolio in 5 minutes
- Use same template for all clients
- Customizable styling per client

### 🏢 Recruitment Platform
- Candidates upload resumes
- Auto-generate portfolio pages
- Standardized presentation
- Easy recruiter browsing

### 👤 Personal Branding
- Update resume PDF
- Regenerate portfolio automatically
- Keep website synchronized
- No manual data entry

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
vercel --prod
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your server
```

## 🆘 Support

- 📚 [Documentation](./README_UNIVERSAL_PORTFOLIO.md)
- 🐛 [Issue Tracker](https://github.com/yourusername/repo/issues)
- 💬 [Discussions](https://github.com/yourusername/repo/discussions)

---

**Made with ❤️ for the developer community**

Transform resumes into portfolios, automatically. 🎯
