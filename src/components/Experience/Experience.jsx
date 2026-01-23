/**
 * Experience Component - Modern Redesign
 */

import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Fitmedik',
      role: 'SDE Intern',
      location: 'Virtual',
      duration: 'Jan 2026 - Present',
      period: '1 month',
      type: 'Current',
      description: 'Full Stack Development',
      responsibilities: [
        'Building scalable web applications using modern technologies',
        'Collaborating with cross-functional teams to deliver high-quality features',
      ],
      gradient: 'from-green-500 to-emerald-500',
      icon: '🚀',
    },
    {
      company: 'Mark My Ad',
      role: 'Full Stack Engineer',
      location: 'Virtual',
      duration: 'Oct 2025 - Jan 2026',
      period: '3 months',
      type: 'Completed',
      description: 'Full Stack Development',
      responsibilities: [
        'Implemented Debouncing on search inputs in Next.js, reducing unnecessary API requests by ~60%',
        'Integrated REST APIs with Next.js to fetch data from the backend and show it in the application UI',
        'Built responsive layouts using Tailwind CSS, ensuring components worked cleanly across mobile, tablet, and desktop screens',
        'Fixed UI bugs (overlapping elements, broken layouts, inconsistent colors) to create a more polished interface',
      ],
      gradient: 'from-purple-500 to-blue-500',
      icon: '💼',
    },
  ];

  return (
    <div className="w-full mx-auto py-20 px-1 lg:px-0">
      {/* Section Header */}
      <div className="flex flex-col mb-16 gap-4 animate-fade-in-up">
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-purple-500 rounded"></div>
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Journey</span>
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-purple-500 rounded"></div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
          Work <span className="gradient-text">Experience</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg">
          My professional journey and contributions to innovative projects
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Timeline Line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-purple-500 rounded-full"></div>

        {/* Experience Cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative animate-fade-in-up ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
              } md:w-1/2`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline Dot */}
              <div className="hidden md:block absolute top-8 left-1/2 md:left-auto md:right-auto transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-4 border-[#0B0B0B] z-10 animate-pulse"
                style={{
                  [index % 2 === 0 ? 'right' : 'left']: '-3rem',
                }}
              ></div>

              {/* Card */}
              <div className="group relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>

                {/* Content */}
                <div className="relative space-y-4">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl">{exp.icon}</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {exp.role}
                        </h3>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <p className={`text-lg font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                          {exp.company}
                        </p>
                        <span className="hidden sm:inline text-gray-600">•</span>
                        <div className="flex items-center gap-1 text-gray-400">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${exp.gradient} text-white shadow-lg`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center gap-2 text-gray-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-semibold">{exp.duration}</span>
                    <span className="text-gray-600">•</span>
                    <span className="text-purple-400">{exp.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 font-medium">{exp.description}</p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                  {/* Responsibilities */}
                  {exp.responsibilities.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Key Achievements
                      </h4>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-300 group/item hover:text-white transition-colors duration-300"
                          >
                            <div className="mt-1.5 w-2 h-2 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 group-hover/item:scale-150 transition-transform duration-300 flex-shrink-0"></div>
                            <span className="leading-relaxed">{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Corner Accent */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-tl-full`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <div className="inline-block p-8 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-purple-500/30">
          <p className="text-gray-300 mb-4 text-lg">Interested in working together?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Get In Touch
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
