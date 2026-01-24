/**
 * 
 * Application Constants
 */

export const APP_CONFIG = {
  NAME: import.meta.env.VITE_APP_NAME || 'Portfolio',
  VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
};

export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://personal-portfolio-react-backend.onrender.com',
  TIMEOUT: 60000, // 60 seconds for Render free tier cold starts
};

export const ROUTES = {
  HOME: '/',
  PROJECTS: '#project',
  SKILLS: '#skills',
  EXPERIENCE: '#experience',
  ABOUT: '#about',
  CONTACT: '#contact',
};

export const SOCIAL_LINKS = {
  GITHUB: 'https://github.com/ayushjoshi45',
  LINKEDIN: 'https://www.linkedin.com/in/ayushjoshi45',
  TWITTER: 'https://x.com/ayushjoshi45',
};

export const THEME_COLORS = {
  PRIMARY: '#6200EE',
  PRIMARY_HOVER: '#7B1EFF',
  BACKGROUND: '#0B0B0B',
  CARD_BG: '#222222',
  CARD_BG_LIGHT: '#333333',
};

export const NAVIGATION_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'project', label: 'Work', href: '#project' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];
