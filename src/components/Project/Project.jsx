/**
 * Projects Component - Professional Design
 */

import React from 'react';
import RentalMarketplace from '../../utils/RentalMarketplace.png';
import Image from '../../utils/jobPortel.png';
import PrepzyImg from '../../utils/prepzy.png';

const Project = () => {
  const details = [
    {
      img: PrepzyImg,
      projectname: 'Live Interview Platform',
      projectdes: 'A real-time collaborative interview platform enabling live coding sessions with video calls, chat, and screen sharing. Create or join sessions, collaborate on coding problems, and track interview history.',
      tech: ['React', 'Node.js', 'WebRTC', 'Socket.io'],
      demo: 'https://prepzy.ayushjoshi.tech/',
      sourceCode: 'https://github.com/ayushjoshi45/Live-Interview-Platform',
    },
    {
      img: Image,
      projectname: 'JobPortel',
      projectdes: 'A comprehensive job-seeking platform connecting candidates with opportunities. Features role-based browsing, company profiles, and application tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      demo: 'https://github.com/ayushjoshi45/Job-Portal',
      sourceCode: 'https://github.com/ayushjoshi45/Job-Portal',
    },
    {
      img: RentalMarketplace,
      projectname: 'StayEase',
      projectdes: 'Property rental and review platform enabling users to list accommodations and share feedback with an intuitive interface for hosts and travelers.',
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      demo: 'https://airbnb-full-stack-project-by9j.onrender.com/',
      sourceCode: 'https://github.com/ayushjoshi45/Airbnb-Full-Stack-Project',
    },
  ];

  return (
    <div className="text-white py-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Selected Work
        </h2>
        <p className="text-gray-400 max-w-xl text-base">
          A collection of projects showcasing my expertise in full-stack development
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {details.map((project, index) => (
          <div
            key={index}
            className="group"
          >
            {/* Card Container */}
            <div className="h-full bg-[#111111] rounded-xl overflow-hidden border border-gray-800/50 hover:border-gray-700 transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.img}
                  alt={`${project.projectname} Preview`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-xl text-white mb-3">
                  {project.projectname}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.projectdes}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/5 rounded text-xs text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2.5 bg-white text-black rounded-lg text-sm font-medium text-center hover:bg-gray-100 transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 border border-gray-700 rounded-lg text-sm font-medium hover:border-gray-600 hover:bg-white/5 transition-all duration-200 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
