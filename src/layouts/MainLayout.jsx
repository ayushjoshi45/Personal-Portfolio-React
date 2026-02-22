/**
 * Main Layout Component - Professional Design
 */

import React from 'react';
import Header from '../components/Header/Header';

const MainLayout = ({ children }) => {
  return (
    <div className="relative bg-[#0a0a0a] min-h-screen overflow-x-hidden">
      {/* Content */}
      <Header />
      <main className="w-[90%] md:w-[85%] max-w-6xl mx-auto">{children}</main>
      
      {/* Footer */}
      <footer className="w-full border-t border-gray-800/50 mt-24">
        <div className="w-[90%] md:w-[85%] max-w-6xl mx-auto py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-white font-medium">Ayush Joshi</span>
              <span className="text-gray-600 ml-2">— Full Stack Developer</span>
            </div>
            
            <div className="flex gap-6">
              <a
                href="https://github.com/ayushjoshi45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ayushjoshi45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/ayushjoshi45"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
              >
                Twitter
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Ayush Joshi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
