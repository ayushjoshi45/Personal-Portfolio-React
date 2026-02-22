/**
 * Navigation Component - Professional Design
 */

import React from 'react';

const Navigation = ({ items, isMenuOpen, onMenuToggle, onNavClick }) => {
  return (
    <nav className="relative">
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden w-10 h-10 rounded-lg border border-gray-700 hover:border-gray-600 flex items-center justify-center transition-all duration-200"
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Navigation Items */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } fixed top-20 left-1/2 -translate-x-1/2 w-[90vw] max-w-sm bg-[#111111] border border-gray-800 rounded-xl shadow-2xl md:static md:flex md:items-center md:translate-x-0 z-50 md:w-auto md:max-w-none md:bg-transparent md:border-0 md:shadow-none`}
      >
        <ul className="flex flex-col md:flex-row items-stretch md:items-center p-2 md:p-0 md:gap-1">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavClick(item.id)}
                className="w-full md:w-auto px-4 py-3 md:py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 md:hover:bg-transparent transition-all duration-200 text-left md:text-center"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 z-40"
          onClick={onMenuToggle}
        ></div>
      )}
    </nav>
  );
};

export default Navigation;
