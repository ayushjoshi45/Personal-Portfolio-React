/**
 * Skills Component
 */

import React from 'react';

const Skills = () => {
  const skills = [
    {
      name: 'HTML5',
      color: '#E44D26',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732212.png',
    },
    {
      name: 'CSS3',
      color: '#2965F1',
      logo: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
    },
    {
      name: 'JavaScript',
      color: '#F7DF1E',
      logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    },
    {
      name: 'React',
      color: '#61DAFB',
      logo: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png',
    },
    {
      name: 'Node.js',
      color: '#000000',
      logo: 'https://www.svgrepo.com/show/376337/node-js.svg',
    },
    {
      name: 'Express',
      color: '#404040',
      logo: 'https://www.svgrepo.com/show/330398/express.svg',
    },
    {
      name: 'MongoDB',
      color: '#47A248',
      logo: 'https://www.svgrepo.com/show/331488/mongodb.svg',
    },
    {
      name: 'SQL',
      color: '#00758F',
      logo: 'https://cdn-icons-png.flaticon.com/512/919/919836.png',
    },
    {
      name: 'Redux',
      color: '#ffffffff',
      logo: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png',
    },
    {
      name: 'Git',
      color: '#F05032',
      logo: 'https://www.svgrepo.com/show/452210/git.svg',
    },
    {
      name: 'GitHub',
      color: '#181717',
      logo: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
    },
    {
      name: 'Docker',
      color: '#2496ED',
      logo: 'https://www.svgrepo.com/show/452192/docker.svg',
    },
  ];

  return (
    <div className="w-full mx-auto py-12 px-1 lg:px-0">
      <div className="flex flex-col mb-8 gap-1">
        <h1 className="text-4xl font-bold text-white text-center">My Skills</h1>
        <div className="w-32 h-[5px] bg-[#6200EE] rounded mx-auto"></div>
      </div>
      <div className="bg-[#222222] p-6 rounded-lg shadow-lg overflow-y-auto max-h-[515px] md:max-h-[350px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 bg-[#333333] rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            >
              <div
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: skill.color }}
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-12 h-12"
                />
              </div>
              <h3 className="text-white text-lg font-semibold mt-4">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
