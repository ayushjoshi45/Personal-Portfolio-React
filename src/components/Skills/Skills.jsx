/**
 * Skills Component - Professional Design
 */

import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png' },
        { name: 'JavaScript', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png' },
        { name: 'HTML5', logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png' },
        { name: 'CSS3', logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png' },
        { name: 'Redux', logo: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', logo: 'https://www.svgrepo.com/show/376337/node-js.svg' },
        { name: 'Express', logo: 'https://www.svgrepo.com/show/330398/express.svg' },
        { name: 'MongoDB', logo: 'https://www.svgrepo.com/show/331488/mongodb.svg' },
        { name: 'SQL', logo: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
      ],
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Git', logo: 'https://www.svgrepo.com/show/452210/git.svg' },
        { name: 'GitHub', logo: 'https://cdn-icons-png.flaticon.com/512/733/733553.png' },
        { name: 'Postman', logo: 'https://www.svgrepo.com/show/354202/postman-icon.svg' },
        { name: 'Docker', logo: 'https://www.svgrepo.com/show/452192/docker.svg' },
      ],
    },
  ];

  return (
    <div className="w-full mx-auto py-24">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">Technologies</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Skills & Tools
        </h2>
        <p className="text-gray-400 max-w-xl text-base">
          Technologies I work with to build modern web applications
        </p>
      </div>

      {/* Skills Categories */}
      <div className="space-y-12">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex}>
            {/* Category Header */}
            <h3 className="text-lg font-medium text-gray-400 mb-6">{category.category}</h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.skills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-[#111111] rounded-xl p-5 border border-gray-800/50 hover:border-gray-700 transition-all duration-200"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-10 h-10 object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
