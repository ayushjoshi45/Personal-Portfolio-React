/**
 * Navigation Component
 */

import React from 'react';

const Navigation = ({ items, isMenuOpen, onMenuToggle, onNavClick }) => {
  return (
    <nav className="bg-[#222222] rounded-full p-1 flex items-center justify-center">
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden cursor-pointer p-2"
        onClick={onMenuToggle}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <i className={`ri-menu-${isMenuOpen ? 'unfold' : 'fold'}-line text-3xl`}></i>
      </button>

      {/* Navigation Items */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full bg-[#222222] md:bg-transparent md:static md:flex md:items-center md:justify-center z-40`}
      >
        <ul className="flex flex-col md:flex-row items-center text-2xl gap-5 p-4 md:p-0">
          {items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => onNavClick(item.id)}
                className="px-5 py-2 hover:bg-[#6200EE] rounded-full cursor-pointer transition-all duration-300 w-full md:w-auto text-left"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
