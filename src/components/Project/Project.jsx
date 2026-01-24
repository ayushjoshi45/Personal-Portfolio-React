/**
 * Projects Component - Modern Redesign
 */

import React, { useState } from 'react';
import RentalMarketplace from '../../utils/RentalMarketplace.png';
import project2 from '../../utils/project2.png';
import Image from '../../utils/jobPortel.png';

const Project = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const details = [
    {
      img: Image,
      projectname: 'JobPortel',
      projectdes: 'A comprehensive job-seeking platform connecting candidates with opportunities. Features role-based browsing, company profiles, and application tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      demo: 'https://github.com/ayushjoshi45/Job-Portal',
      sourceCode: 'https://github.com/ayushjoshi45/Job-Portal',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      img: RentalMarketplace,
      projectname: 'StayEase',
      projectdes: 'Property rental and review platform enabling users to list accommodations and share feedback with an intuitive interface for hosts and travelers.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      demo: 'https://airbnb-full-stack-project-by9j.onrender.com/',
      sourceCode: 'https://github.com/ayushjoshi45/Airbnb-Full-Stack-Project',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      img: project2,
      projectname: 'Bubble Game',
      projectdes: 'Interactive game where players match bubble numbers with hit targets. Features real-time scoring and countdown timer for an engaging experience.',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      demo: 'https://bubble-game-by-ayush.netlify.app/',
      sourceCode: 'https://github.com/ayushjoshi45/Bubble-Game',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <div className="text-white py-20">
      {/* Section Header */}
      <div className="flex flex-col mb-16 gap-4 animate-fade-in-up">
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-purple-500 rounded"></div>
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-purple-500 rounded"></div>
        </div>
        <h1 className="font-bold text-5xl md:text-6xl text-center">
          Featured <span className="gradient-text">Projects</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg">
          Explore my latest work showcasing full-stack development, UI/UX design, and problem-solving skills
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
        {details.map((project, index) => (
          <div
            key={index}
            className="group relative animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Card Container */}
            <div className="relative h-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img
                  src={project.img}
                  alt={`${project.projectname} Preview`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 z-20">
                  <div className={`px-3 py-1 bg-gradient-to-r ${project.gradient} rounded-full text-xs font-semibold backdrop-blur-sm`}>
                    Featured
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 space-y-4">
                <h2 className="font-bold text-2xl text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.projectname}
                </h2>
                
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.projectdes}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 group/btn px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-center hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Demo
                    <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-3 border-2 border-purple-500/50 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300 flex items-center justify-center gap-2"
                    title="View Source Code"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${project.gradient} transform origin-left transition-transform duration-500 ${hoveredIndex === index ? 'scale-x-100' : 'scale-x-0'}`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
