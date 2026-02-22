/**
 * Header Component - Professional Design
 */

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '../../config/constants';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import Hero from '../Hero/Hero';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 text-white transition-all duration-200 ${
        isScrolled 
          ? 'py-3 backdrop-blur-xl bg-[#0a0a0a]/90 border-b border-gray-800/50' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="w-[90%] md:w-[85%] max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-xl font-semibold tracking-tight">
            <span className="text-white">Ayush</span>
            <span className="text-gray-500">Joshi</span>
          </a>

          {/* Navigation */}
          <Navigation 
            items={NAVIGATION_ITEMS}
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            onNavClick={handleNavClick}
          />

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link 
              to={SOCIAL_LINKS.GITHUB} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              <span>Contact</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <Hero isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Header;
