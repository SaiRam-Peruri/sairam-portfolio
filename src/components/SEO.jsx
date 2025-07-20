import React, { useEffect } from 'react';
import { portfolio } from '../data/portfolio';

const SEO = ({ title, description, keywords, author, image, url }) => {
  const { name, bio, skills } = portfolio.personalInfo;
  const allSkills = [
    ...skills.devops, 
    ...skills.cloud,
    ...skills.monitoring,
    ...skills.databases,
    ...skills.tools,
    ...skills.languages
  ];

  const siteName = name + "'s Portfolio";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullDescription = description || bio;
  const fullKeywords = keywords ? keywords.join(', ') : allSkills.map(s => s.name).join(', ');
  const fullAuthor = author || name;
  const fullImage = image || `https://api.dicebear.com/8.x/avataaars/svg?seed=${name.split(' ').join('')}`;
  const fullUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, content, attribute = 'content') => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (selector.includes('property=')) {
          tag.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        } else if (selector.includes('name=')) {
          tag.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(tag);
      }
      tag.setAttribute(attribute, content);
    };

    // Update meta tags
    updateMetaTag('meta[name="description"]', fullDescription);
    updateMetaTag('meta[name="keywords"]', fullKeywords);
    updateMetaTag('meta[name="author"]', fullAuthor);
    
    // Open Graph / Facebook
    updateMetaTag('meta[property="og:type"]', 'website');
    updateMetaTag('meta[property="og:url"]', fullUrl);
    updateMetaTag('meta[property="og:title"]', fullTitle);
    updateMetaTag('meta[property="og:description"]', fullDescription);
    updateMetaTag('meta[property="og:image"]', fullImage);

    // Twitter
    updateMetaTag('meta[property="twitter:card"]', 'summary_large_image');
    updateMetaTag('meta[property="twitter:url"]', fullUrl);
    updateMetaTag('meta[property="twitter:title"]', fullTitle);
    updateMetaTag('meta[property="twitter:description"]', fullDescription);
    updateMetaTag('meta[property="twitter:image"]', fullImage);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);
  }, [fullTitle, fullDescription, fullKeywords, fullAuthor, fullImage, fullUrl]);

  return null; // This component doesn't render anything visible
};

const SEOProvider = ({ children }) => {
  return <>{children}</>;
}

export { SEO, SEOProvider };
export default SEO;
