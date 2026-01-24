/**
 * Header Component - Modern Redesign
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
      <header className={`sticky top-0 z-50 text-white transition-all duration-300 ${
        isScrolled 
          ? 'py-3 backdrop-blur-md bg-[#0B0B0B]/80 border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
          : 'py-4 bg-transparent'
      }`}>
        <div className="w-[90%] md:w-[85%] max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="relative group">
            <div className="text-3xl font-bold flex items-center gap-2 cursor-pointer">
              <div className="relative">
                <span className="inline md:hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl">A</span>
                <span className="hidden md:inline gradient-text text-4xl">Ayush</span>
                <span className="hidden md:inline text-white text-4xl ml-1">Joshi</span>
                {/* Animated underline */}
                <div className="hidden md:block absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <Navigation 
            items={NAVIGATION_ITEMS}
            isMenuOpen={isMenuOpen}
            onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
            onNavClick={handleNavClick}
          />

          {/* Actions */}
          <div className="flex items-center justify-center gap-3">
            <Link 
              to={SOCIAL_LINKS.GITHUB} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50"
            >
              <i className="ri-github-line text-2xl"></i>
            </Link>
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
            >
              <span>Hire Me</span>
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
