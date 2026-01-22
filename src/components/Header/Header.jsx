/**
 * Header Component
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAVIGATION_ITEMS, SOCIAL_LINKS } from '../../config/constants';
import { useScrollToSection } from '../../hooks/useScrollToSection';
import Hero from '../Hero/Hero';
import Navigation from './Navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="text-white flex items-center justify-between mt-4">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <span className="inline md:hidden">A</span>
          <span className="inline text-[#6200EE] md:hidden">J</span>
          <span className="hidden md:inline">Ayush</span>
          <span className="text-[#6200EE] hidden md:inline">Joshi</span>
        </div>

        {/* Navigation */}
        <Navigation 
          items={NAVIGATION_ITEMS}
          isMenuOpen={isMenuOpen}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          onNavClick={handleNavClick}
        />

        {/* Actions */}
        <div className="flex items-center justify-center text-2xl gap-5">
          <Link 
            to={SOCIAL_LINKS.GITHUB} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="ri-github-line rounded-full bg-black px-2 py-2 hover:bg-[#6200EE] transition-colors"></i>
          </Link>
          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 bg-[#6200EE] rounded-full hover:bg-[#7B1EFF] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
          >
            Hire Me
          </button>
        </div>
      </header>
      <Hero isMenuOpen={isMenuOpen} />
    </>
  );
};

export default Header;
