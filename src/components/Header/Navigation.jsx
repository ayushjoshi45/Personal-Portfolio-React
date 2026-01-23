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
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-14 right-0 w-64 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] backdrop-blur-xl border border-gray-800 rounded-2xl shadow-2xl shadow-purple-500/20 md:bg-transparent md:backdrop-blur-none md:border-0 md:shadow-none md:static md:flex md:items-center md:justify-center z-50 p-2 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-2">
          {items.map((item) => (
            <li key={item.id} className="relative group">
              <button
                onClick={() => onNavClick(item.id)}
                className="relative px-6 py-3 text-gray-300 hover:text-white rounded-xl hover:bg-gray-800/50 transition-all duration-300 w-full md:w-auto text-left md:text-center font-medium group-hover:scale-105"
              >
                <span className="relative z-10">{item.label}</span>
                {/* Active indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Overlay */}
      {isMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={onMenuToggle}
        ></div>
      )}
    </nav>
  );
};

export default Navigation;
