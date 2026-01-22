/**
 * Hero Component - refactored from original
 */

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import heroimg from '../../utils/hero.jpg';

const Hero = ({ isMenuOpen }) => {
  return (
    <section 
      id="home" 
      className={`text-white transition-all duration-300 ${isMenuOpen ? 'mt-80 md:mt-8' : 'mt-8'}`}
    >
      <div className="w-full h-screen flex flex-col lg:flex-row justify-between items-center py-[50%] md:py-4 lg:py-16">
        {/* Left Section */}
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl mb-4">Hello 👋</h1>
          <h1 className="text-4xl lg:text-6xl mb-4">
            I'm <span className="text-[#6200EE]">Ayush</span>
          </h1>

          <TypeAnimation
            sequence={[
              'Software Engineer',
              1000,
              'FullStack Developer',
              1000,
              'Freelancer',
              1000,
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
            className="text-[#6200EE] mb-4"
          />

          <p className="text-lg lg:text-xl w-full lg:w-[45%] h-full mt-4">
            Based in INDIA, I'm a Full Stack Developer passionate about building
            accessible web Product that users love.
          </p>
        </div>

        {/* Right Section (Image) */}
        <div className="w-[80%] lg:w-[50%]">
          <img
            src={heroimg}
            alt="Profile"
            className="rounded-full mx-auto lg:mx-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
