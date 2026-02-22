/**
 * Hero Component - Professional Design
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
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl top-0 -left-64"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl bottom-0 -right-64"></div>
      </div>

      <div className="relative w-full min-h-screen flex flex-col lg:flex-row justify-between items-center py-[50%] md:py-8 lg:py-20 gap-12 px-4">
        {/* Left Section */}
        <div className="text-center lg:text-left mb-8 lg:mb-0 z-10 max-w-2xl">
          <p className="text-gray-400 text-sm tracking-widest uppercase mb-4">
            Full Stack Developer
          </p>
          
          <h1 className="text-5xl lg:text-6xl xl:text-7xl mb-6 font-bold leading-tight">
            Hi, I'm{' '}
            <span className="text-white">Ayush Joshi</span>
          </h1>

          <div className="text-xl lg:text-2xl mb-8 h-12 flex items-center justify-center lg:justify-start">
            <span className="text-gray-400">I build </span>
            <TypeAnimation
              sequence={[
                'web applications',
                2000,
                'user experiences',
                2000,
                'scalable solutions',
                2000,
                'digital products',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-purple-400 ml-2"
            />
          </div>

          <p className="text-base lg:text-lg leading-relaxed text-gray-400 mb-10 max-w-xl">
            A passionate developer based in India, specializing in creating 
            exceptional digital experiences with modern technologies. 
            I focus on writing clean, efficient code that solves real problems.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="group px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 flex items-center gap-2"
            >
              Get in Touch
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="#project" 
              className="px-6 py-3 border border-gray-700 text-white rounded-lg font-medium hover:border-gray-500 hover:bg-white/5 transition-all duration-200"
            >
              View Work
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-16 justify-center lg:justify-start">
            <div>
              <div className="text-3xl font-bold text-white">6+</div>
              <div className="text-sm text-gray-500 mt-1">Months Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-sm text-gray-500 mt-1">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">12+</div>
              <div className="text-sm text-gray-500 mt-1">Technologies</div>
            </div>
          </div>
        </div>

        {/* Right Section (Image) */}
        <div className="relative w-[70%] lg:w-[40%] max-w-md z-10">
          <div className="relative">
            {/* Image Container */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-800">
              <img
                src={heroimg}
                alt="Ayush Joshi - Full Stack Developer"
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-[#1a1a1a] border border-gray-800 rounded-xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-300">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
