#!/usr/bin/env python3
"""
Universal Portfolio Generator - Test Demo
========================================

This script demonstrates how to use the extracted JSON data 
to create a universal portfolio for any person.
"""

import json
import os
from pathlib import Path

def load_portfolio_data():
    """Load the extracted portfolio data"""
    json_file = Path("extract_resume/ultimate_multi_pdf_portfolio_data.json")
    
    if not json_file.exists():
        print("❌ No portfolio data found. Run the PDF analyzer first!")
        return None
    
    with open(json_file, 'r', encoding='utf-8') as f:
        return json.load(f)

def display_portfolio_summary(data):
    """Display a summary of the extracted portfolio data"""
    print("🎯 UNIVERSAL PORTFOLIO GENERATOR - EXTRACTED DATA SUMMARY")
    print("=" * 65)
    
    # Personal Information
    personal = data.get('personalInfo', {})
    print("👤 PERSONAL INFORMATION:")
    print(f"   Name: {personal.get('name', 'Not extracted')}")
    print(f"   Email: {personal.get('email', 'Not extracted')}")
    print(f"   Location: {personal.get('location', 'Not extracted')}")
    print(f"   Phone: {personal.get('phone', 'Not extracted')}")
    
    # Experience
    experiences = data.get('experience', [])
    print(f"\n💼 WORK EXPERIENCE ({len(experiences)} entries):")
    for exp in experiences:
        print(f"   • {exp.get('company', 'Unknown Company')}")
        print(f"     Title: {exp.get('title', 'Not specified')}")
        print(f"     Achievements: {len(exp.get('achievements', []))}")
        print(f"     Technologies: {', '.join(exp.get('technologies', ['None']))}")
    
    # Skills
    skills = data.get('skills', {})
    total_skills = sum(len(skill_list) for skill_list in skills.values())
    print(f"\n⚡ TECHNICAL SKILLS ({total_skills} total):")
    for category, skill_list in skills.items():
        if skill_list:
            print(f"   {category.title()}: {len(skill_list)} skills")
            # Show first few skills
            skill_names = [skill['name'] for skill in skill_list[:3]]
            print(f"     Examples: {', '.join(skill_names)}")
    
    # Projects
    projects = data.get('projects', [])
    print(f"\n🚀 PROJECTS ({len(projects)} entries):")
    for project in projects:
        print(f"   • {project.get('title', 'Untitled Project')}")
        print(f"     Category: {project.get('category', 'General')}")
        print(f"     Technologies: {', '.join(project.get('technologies', ['None']))}")
    
    # Education
    education = data.get('education', [])
    print(f"\n🎓 EDUCATION ({len(education)} entries):")
    for edu in education:
        print(f"   • {edu.get('degree', 'Degree')} in {edu.get('field', 'Field')}")
        print(f"     Institution: {edu.get('institution', 'Institution')}")
        print(f"     Period: {edu.get('period', 'Not specified')}")
    
    # Certifications
    certifications = data.get('certifications', [])
    print(f"\n📜 CERTIFICATIONS ({len(certifications)} entries):")
    for cert in certifications:
        print(f"   • {cert.get('name', 'Certification')}")
        print(f"     Issuer: {cert.get('issuer', 'Unknown')}")
    
    # Achievements
    achievements = data.get('achievements', [])
    print(f"\n🏆 ACHIEVEMENTS ({len(achievements)} entries):")
    for achievement in achievements:
        print(f"   • {achievement.get('title', 'Achievement')}")
        print(f"     Organization: {achievement.get('organization', 'Unknown')}")
    
    # Metadata
    metadata = data.get('metadata', {})
    print(f"\n📊 EXTRACTION METADATA:")
    print(f"   PDF Library Used: {metadata.get('pdf_library_used', 'Unknown')}")
    print(f"   Text Extracted: {metadata.get('text_extracted_chars', 0)} characters")
    print(f"   Files Processed: {metadata.get('pdf_files_processed', 0)}")
    print(f"   Data Quality: {metadata.get('data_quality', 'Unknown')}")

def generate_portfolio_template(data):
    """Generate a sample portfolio template structure"""
    template = {
        "portfolio_structure": {
            "components": [
                "Header with personal info",
                "Hero section with bio",
                "Skills visualization",
                "Experience timeline",
                "Projects showcase",
                "Education section",
                "Certifications display",
                "Achievements highlights",
                "Contact footer"
            ],
            "data_mapping": {
                "header": "personalInfo",
                "hero": "personalInfo.bio",
                "skills": "skills",
                "experience": "experience",
                "projects": "projects",
                "education": "education",
                "certifications": "certifications",
                "achievements": "achievements"
            }
        },
        "technology_stack_suggestions": {
            "frontend": ["React", "Vue.js", "Angular", "Next.js"],
            "styling": ["Tailwind CSS", "Bootstrap", "Material-UI", "Styled Components"],
            "backend": ["Node.js", "Python Flask", "Django", "Express.js"],
            "database": ["MongoDB", "PostgreSQL", "Firebase", "Supabase"],
            "deployment": ["Vercel", "Netlify", "AWS", "Digital Ocean"]
        },
        "customization_tips": [
            "Use the extracted name for page title and metadata",
            "Apply personal color scheme based on industry/preferences",
            "Highlight the most relevant skills for target audience",
            "Prioritize recent experience and significant achievements",
            "Include links to GitHub, LinkedIn from extracted social data",
            "Add resume download link using the PDF file path"
        ]
    }
    
    return template

def create_sample_config(data):
    """Create a sample configuration file for portfolio generation"""
    config = {
        "portfolio_config": {
            "person_name": data.get('personalInfo', {}).get('name', 'John Doe'),
            "primary_color": "#3B82F6",
            "secondary_color": "#1E40AF",
            "font_family": "Inter",
            "layout": "modern",
            "sections_enabled": {
                "hero": True,
                "about": True,
                "skills": True,
                "experience": True,
                "projects": True,
                "education": True,
                "certifications": len(data.get('certifications', [])) > 0,
                "achievements": len(data.get('achievements', [])) > 0,
                "contact": True
            },
            "skills_display": "chart",  # or "grid", "list"
            "project_layout": "cards",   # or "timeline", "grid"
            "theme": "light",           # or "dark", "auto"
            "animations": True,
            "responsive": True
        },
        "seo_config": {
            "title": f"{data.get('personalInfo', {}).get('name', 'Portfolio')} - Professional Portfolio",
            "description": f"Professional portfolio of {data.get('personalInfo', {}).get('name', 'developer')} showcasing skills, experience, and projects",
            "keywords": _extract_seo_keywords(data),
            "og_image": "/api/placeholder/1200/630"
        }
    }
    
    return config

def _extract_seo_keywords(data):
    """Extract SEO keywords from the portfolio data"""
    keywords = []
    
    # Add skills as keywords
    skills = data.get('skills', {})
    for skill_category in skills.values():
        for skill in skill_category:
            keywords.append(skill.get('name', '').lower())
    
    # Add technologies from projects
    projects = data.get('projects', [])
    for project in projects:
        technologies = project.get('technologies', [])
        keywords.extend([tech.lower() for tech in technologies])
    
    # Add general terms
    keywords.extend(['developer', 'engineer', 'portfolio', 'professional'])
    
    # Remove duplicates and return first 10
    return list(set(keywords))[:10]

def main():
    """Main function to demonstrate universal portfolio generation"""
    print("🎯 Universal Portfolio Generator - Demo")
    print("=" * 45)
    
    # Load extracted data
    portfolio_data = load_portfolio_data()
    
    if not portfolio_data:
        return
    
    # Display summary
    display_portfolio_summary(portfolio_data)
    
    # Generate template structure
    template = generate_portfolio_template(portfolio_data)
    
    print("\n" + "=" * 65)
    print("🏗️  PORTFOLIO TEMPLATE GENERATED")
    print("=" * 65)
    print("📋 Components to build:")
    for component in template["portfolio_structure"]["components"]:
        print(f"   ✓ {component}")
    
    print(f"\n🛠️  Suggested Tech Stack:")
    for category, options in template["technology_stack_suggestions"].items():
        print(f"   {category.title()}: {', '.join(options[:2])}")
    
    # Generate config
    config = create_sample_config(portfolio_data)
    
    # Save configuration
    with open("portfolio_config.json", 'w', encoding='utf-8') as f:
        json.dump(config, f, indent=2, ensure_ascii=False)
    
    print(f"\n📁 Files generated:")
    print(f"   ✓ portfolio_config.json - Configuration for portfolio builder")
    print(f"   ✓ ultimate_multi_pdf_portfolio_data.json - Complete extracted data")
    
    print(f"\n🚀 Next Steps:")
    print(f"   1. Choose your preferred tech stack")
    print(f"   2. Use the extracted JSON data in your portfolio application")
    print(f"   3. Customize the design based on the configuration")
    print(f"   4. Deploy your personalized portfolio!")
    
    print(f"\n💡 Universal Usage:")
    print(f"   • Replace any PDF in 'resume' folder")
    print(f"   • Run the analyzer again")
    print(f"   • Get new portfolio data for any person")
    print(f"   • Use the same template with different data")

if __name__ == "__main__":
    main()
