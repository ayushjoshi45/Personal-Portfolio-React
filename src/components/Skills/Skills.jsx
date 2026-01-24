/**
 * Skills Component - Modern Redesign
 */

import React, { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = [
    {
      category: 'Frontend',
      icon: '🎨',
      skills: [
        {
          name: 'React',
          level: '90%',
          color: '#61DAFB',
          logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
        },
        {
          name: 'JavaScript',
          level: '85%',
          color: '#F7DF1E',
          logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
        },
        {
          name: 'HTML5',
          level: '95%',
          color: '#E44D26',
          logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
        },
        {
          name: 'CSS3',
          level: '90%',
          color: '#2965F1',
          logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
        },
        {
          name: 'Redux',
          level: '80%',
          color: '#764ABC',
          logo: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
        },
      ],
    },
    {
      category: 'Backend',
      icon: '⚙️',
      skills: [
        {
          name: 'Node.js',
          level: '85%',
          color: '#339933',
          logo: 'https://www.svgrepo.com/show/376337/node-js.svg',
        },
        {
          name: 'Express',
          level: '85%',
          color: '#404040',
          logo: 'https://www.svgrepo.com/show/330398/express.svg',
        },
        {
          name: 'MongoDB',
          level: '80%',
          color: '#47A248',
          logo: 'https://www.svgrepo.com/show/331488/mongodb.svg',
        },
        {
          name: 'SQL',
          level: '75%',
          color: '#00758F',
          logo: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
        },
      ],
    },
    {
      category: 'Tools & Others',
      icon: '🛠️',
      skills: [
        {
          name: 'Git',
          level: '90%',
          color: '#F05032',
          logo: 'https://www.svgrepo.com/show/452210/git.svg',
        },
        {
          name: 'GitHub',
          level: '90%',
          color: '#181717',
          logo: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
        },
        {
          name: 'Postman',
          level: '85%',
          color: '#FF6C37',
          logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
        },
        {
          name: 'Docker',
          level: '70%',
          color: '#2496ED',
          logo: 'https://www.svgrepo.com/show/452192/docker.svg',
        },
      ],
    },
  ];

  return (
    <div className="w-full mx-auto py-20">
      {/* Section Header */}
      <div className="flex flex-col mb-16 gap-4 animate-fade-in-up">
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-12 bg-gradient-to-r from-transparent to-purple-500 rounded"></div>
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Technologies</span>
          <div className="h-1 w-12 bg-gradient-to-l from-transparent to-purple-500 rounded"></div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white text-center">
          Tech <span className="gradient-text">Stack</span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto text-lg">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      {/* Skills Categories */}
      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => (
          <div
            key={catIndex}
            className="animate-fade-in-up"
            style={{ animationDelay: `${catIndex * 0.1}s` }}
          >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">{category.icon}</span>
              <h2 className="text-2xl font-bold text-white">{category.category}</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredSkill(`${catIndex}-${index}`)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Skill Card */}
                  <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
                    {/* Glow Effect */}
                    <div 
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
                      style={{ backgroundColor: skill.color }}
                    ></div>

                    {/* Icon Container */}
                    <div className="relative flex flex-col items-center space-y-4">
                      <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gray-900/50 group-hover:scale-110 transition-transform duration-500 relative overflow-hidden">
                        {/* Animated Background */}
                        <div 
                          className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                          style={{ backgroundColor: skill.color }}
                        ></div>
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-12 h-12 relative z-10 object-contain"
                        />
                      </div>

                      {/* Skill Name */}
                      <h3 className="text-white text-lg font-semibold text-center group-hover:text-purple-400 transition-colors duration-300">
                        {skill.name}
                      </h3>

                      {/* Progress Bar */}
                      <div className="w-full">
                        <div className="flex justify-between text-xs text-gray-400 mb-1">
                          <span>Proficiency</span>
                          <span className="font-semibold text-purple-400">{skill.level}</span>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: hoveredSkill === `${catIndex}-${index}` ? skill.level : '0%',
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Stats */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up">
        <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-purple-500/30">
          <div className="text-4xl font-bold gradient-text">13+</div>
          <div className="text-gray-400 mt-2">Technologies</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-blue-500/30">
          <div className="text-4xl font-bold gradient-text">3</div>
          <div className="text-gray-400 mt-2">Categories</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-purple-500/30">
          <div className="text-4xl font-bold gradient-text">2+</div>
          <div className="text-gray-400 mt-2">Years Learning</div>
        </div>
        <div className="text-center p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl border border-blue-500/30">
          <div className="text-4xl font-bold gradient-text">100%</div>
          <div className="text-gray-400 mt-2">Dedication</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
