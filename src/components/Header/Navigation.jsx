/**
 * Navigation Component - Modern Redesign
 */

import React from 'react';

const Navigation = ({ items, isMenuOpen, onMenuToggle, onNavClick }) => {
  return (
    <nav className="relative">
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden w-11 h-11 rounded-xl bg-gray-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <i className={`ri-menu-${isMenuOpen ? 'unfold' : 'fold'}-line text-2xl`}></i>
      </button>

      {/* Navigation Items */}
      <div
        className={`${
          isMenuOpen ? 'block animate-fade-in' : 'hidden'
        } fixed top-20 left-1/2 -translate-x-1/2 w-[85vw] max-w-sm bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-2xl border border-purple-500/20 rounded-2xl shadow-2xl shadow-purple-500/20 md:bg-transparent md:backdrop-blur-none md:border-0 md:shadow-none md:static md:flex md:items-center md:justify-center md:translate-x-0 z-50 md:w-auto overflow-hidden`}
      >
        {/* Mobile Menu Header */}
        <div className="md:hidden px-6 py-4 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border-b border-purple-500/20">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-bold text-lg flex items-center gap-2">
              <div className="relative">
                <span className="w-2.5 h-2.5 bg-purple-500 rounded-full block"></span>
                <span className="absolute inset-0 w-2.5 h-2.5 bg-purple-500 rounded-full animate-ping"></span>
              </div>
              Menu
            </h3>
            <button 
              onClick={onMenuToggle}
              className="w-8 h-8 rounded-lg bg-gray-800/50 hover:bg-red-500/20 text-gray-400 hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <ul className="flex flex-col md:flex-row items-stretch md:items-center gap-1 p-3 md:p-0 md:gap-2">
          {items.map((item, index) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => onNavClick(item.id)}
                className="relative w-full md:w-auto px-5 py-3 text-white text-base md:text-gray-300 hover:text-white rounded-xl bg-gradient-to-r from-gray-800/40 to-gray-900/40 hover:from-purple-600/30 hover:to-blue-600/30 md:bg-transparent md:hover:bg-gray-800/50 transition-all duration-300 text-left md:text-center font-medium group-hover:scale-[1.02] md:group-hover:scale-105 shadow-lg shadow-black/20 md:shadow-none"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="relative z-10 flex items-center gap-3 md:gap-0">
                  {/* Icon for mobile */}
                  <svg className="w-4 h-4 text-purple-400 md:hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="font-medium">{item.label}</span>
                </span>
                {/* Active indicator for desktop */}
                <div className="hidden md:block absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-xl"></div>
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile Footer */}
        <div className="md:hidden px-6 py-3 border-t border-purple-500/10 bg-gradient-to-r from-purple-600/5 to-blue-600/5">
          <p className="text-xs text-gray-500 text-center">Tap anywhere outside to close</p>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
          onClick={onMenuToggle}
        ></div>
      )}
    </nav>
  );
};

export default Navigation;
