/**
 * Experience Component - Professional Design
 */

import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: 'Fitmedik',
      role: 'SDE Intern',
      location: 'Remote',
      duration: 'Jan 2025 - Present',
      type: 'Current',
      responsibilities: [
        'Building scalable web applications using modern technologies',
        'Collaborating with cross-functional teams to deliver high-quality features',
      ],
    },
    {
      company: 'Mark My Ad',
      role: 'Full Stack Developer Intern',
      location: 'Remote',
      duration: 'Oct 2024 - Jan 2025',
      type: 'Completed',
      responsibilities: [
        'Implemented Debouncing on search inputs in Next.js, reducing API requests by ~60%',
        'Integrated REST APIs with Next.js for seamless data flow',
        'Built responsive layouts using Tailwind CSS across all device sizes',
        'Fixed UI bugs to create a more polished interface',
      ],
    },
  ];

  return (
    <div className="w-full mx-auto py-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">Experience</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Work History
        </h2>
        <p className="text-gray-400 max-w-xl text-base">
          My professional journey in software development
        </p>
      </div>

      {/* Experience List */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-[#111111] rounded-xl p-6 md:p-8 border border-gray-800/50 hover:border-gray-700 transition-all duration-200"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  {exp.type === 'Current' && (
                    <span className="px-2.5 py-0.5 bg-green-500/10 text-green-400 rounded text-xs font-medium">
                      Current
                    </span>
                  )}
                </div>
                <p className="text-gray-400">
                  {exp.company} <span className="text-gray-600">•</span> {exp.location}
                </p>
              </div>
              <span className="text-sm text-gray-500">{exp.duration}</span>
            </div>

            {/* Responsibilities */}
            <ul className="space-y-3">
              {exp.responsibilities.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-400">
                  <span className="text-gray-600 mt-1.5">—</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
