/**
 * Hero Component - Modern Redesign
 */

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import heroimg from '../../utils/hero.jpg';

const Hero = ({ isMenuOpen }) => {
  return (
    <section 
      id="home" 
      className={`relative text-white transition-all duration-300 ${isMenuOpen ? 'mt-80 md:mt-8' : 'mt-8'}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-purple-600/10 rounded-full blur-3xl top-20 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-600/10 rounded-full blur-3xl bottom-20 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative w-full min-h-screen flex flex-col lg:flex-row justify-between items-center py-[50%] md:py-8 lg:py-20 gap-8 px-4">
        {/* Left Section */}
        <div className="text-center lg:text-left mb-8 lg:mb-0 z-10 animate-fade-in-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-full text-sm font-medium backdrop-blur-sm">
              👋 Welcome to my Portfolio
            </span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl mb-4 font-bold">
            Hi, I'm{' '}
            <span className="gradient-text inline-block">Ayush Joshi</span>
          </h1>

          <div className="text-2xl lg:text-4xl mb-6 h-20 flex items-center justify-center lg:justify-start">
            <TypeAnimation
              sequence={[
                'Software Engineer 💻',
                1500,
                'Full Stack Developer 🚀',
                1500,
                'Problem Solver 🧩',
                1500,
                'Tech Enthusiast 🌟',
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-purple-400 font-semibold"
            />
          </div>

          <p className="text-lg lg:text-xl w-full lg:w-[90%] leading-relaxed text-gray-300 mb-8">
            Based in <span className="text-purple-400 font-semibold">India 🇮🇳</span>, I'm a passionate Full Stack Developer 
            specializing in building exceptional digital experiences. 
            I craft scalable web applications that users love.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Let's Connect
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#project" 
              className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all duration-300 hover:scale-105"
            >
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-md mx-auto lg:mx-0">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">6+</div>
              <div className="text-sm text-gray-400 mt-1">Months Exp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-sm text-gray-400 mt-1">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">12+</div>
              <div className="text-sm text-gray-400 mt-1">Technologies</div>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative w-[80%] lg:w-[45%] z-10 animate-fade-in">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            
            {/* Image Container */}
            <div className="relative rounded-full overflow-hidden border-4 border-purple-500/30 animate-float group-hover:border-purple-500/60 transition-all duration-300">
              <img
                src={heroimg}
                alt="Ayush Joshi - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center text-2xl animate-bounce">
              💻
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>
              🚀
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
            <div className="absolute inset-0 border-2 border-purple-500/20 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
            <div className="absolute inset-8 border-2 border-blue-500/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
