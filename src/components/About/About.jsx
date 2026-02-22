/**
 * About Component - Professional Design
 */

import React from 'react';

const About = () => {
  return (
    <div className="w-full mx-auto py-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">About</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          A bit about me
        </h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column - Story */}
        <div className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a Full Stack Developer based in Pithoragarh, Uttarakhand, India. 
            I enjoy building web applications that are both functional and elegant.
          </p>
          <p className="text-gray-400 leading-relaxed">
            My journey in web development started with curiosity about how websites work. 
            Today, I specialize in the MERN stack and love creating seamless user experiences 
            with clean, maintainable code.
          </p>
          <p className="text-gray-400 leading-relaxed">
            When I'm not coding, you'll find me playing cricket or exploring new technologies. 
            I believe in continuous learning and pushing myself to become better every day.
          </p>

          {/* Quick Info */}
          <div className="pt-6 space-y-4">
            <div className="flex gap-4">
              <span className="text-gray-500 w-24">Location</span>
              <span className="text-white">Uttarakhand, India</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 w-24">Experience</span>
              <span className="text-white">6+ Months</span>
            </div>
            <div className="flex gap-4">
              <span className="text-gray-500 w-24">Focus</span>
              <span className="text-white">Full Stack Development</span>
            </div>
          </div>
        </div>

        {/* Right Column - Values */}
        <div className="space-y-6">
          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800/50">
            <h3 className="text-white font-medium text-lg mb-3">Clean Code</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              I prioritize writing readable, maintainable code that follows best practices 
              and can be easily understood by other developers.
            </p>
          </div>

          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800/50">
            <h3 className="text-white font-medium text-lg mb-3">User-Focused</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every feature I build starts with the user in mind. I aim to create 
              intuitive interfaces that solve real problems.
            </p>
          </div>

          <div className="bg-[#111111] rounded-xl p-6 border border-gray-800/50">
            <h3 className="text-white font-medium text-lg mb-3">Always Learning</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Technology evolves rapidly, and I embrace that. I'm constantly exploring 
              new tools and techniques to improve my craft.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
