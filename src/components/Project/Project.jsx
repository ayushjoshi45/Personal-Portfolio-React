/**
 * Projects Component
 */

import React from 'react';
import RentalMarketplace from '../../utils/RentalMarketplace.png';
import project2 from '../../utils/project2.png';
import Image from '../../utils/jobPortel.png';

const Project = () => {
  const details = [
    {
      img: Image,
      projectname: 'JobPortel',
      projectdes: 'JobPortel is a job-seeking platform that helps candidates discover and apply to the latest job opportunities. Users can browse openings by role, location, and skills, view detailed company profiles, and track application status. It features a simple, intuitive interface for both job seekers and recruiters, making the hiring and application process seamless and efficient.',
      demo: 'https://github.com/ayushjoshi45/Job-Portal',
      sourceCode: 'https://github.com/ayushjoshi45/Job-Portal',
    },
    {
      img: RentalMarketplace,
      projectname: 'StayEase',
      projectdes: 'StayEase is a property rental and review platform that allows users to list accommodations, explore available stays, and share feedback. Users can browse listings with photos, amenities, and pricing details, while guests can leave reviews and ratings. It provides an intuitive interface for hosts to manage their properties and travelers to find the perfect stay.',
      demo: 'https://airbnb-full-stack-project-by9j.onrender.com/',
      sourceCode: 'https://github.com/ayushjoshi45/Airbnb-Full-Stack-Project',
    },
    {
      img: project2,
      projectname: 'Bubble Game',
      projectdes: 'Bubble Hit Game is a fun and interactive game where you need to click on bubbles displaying numbers that match the hit numbers shown on the screen. With each correct hit, your score increases, and every second your timer decreases, adding an extra layer of excitement to the challenge.',
      demo: 'https://bubble-game-by-ayush.netlify.app/',
      sourceCode: 'https://github.com/ayushjoshi45/Bubble-Game',
    },
  ];

  return (
    <div className="text-white px-1 md:px-8 lg:px-0 py-12">
      <div className="flex flex-col mb-6 gap-1">
        <h1 className="font-bold text-4xl text-center text-white">Projects</h1>
        <div className="w-32 h-[5px] bg-[#6200EE] rounded mx-auto"></div>
      </div>

      <div className="card-holder grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 height-full mb-10">
        {details.map((items, index) => (
          <div
            key={index}
            className="card bg-[#222222] p-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300 relative flex flex-col"
          >
            <img
              src={items.img}
              alt={`${items.projectname} Preview`}
              className="rounded-md w-full h-40 object-cover"
            />

            <h1 className="font-bold text-2xl mt-4">{items.projectname}</h1>
            <p className="text-lg mt-2 flex-grow">{items.projectdes}</p>

            <div className="flex justify-between mt-4">
              <a
                href={items.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#6200EE] text-white rounded-full hover:bg-[#7B1EFF] hover:scale-105 transition-transform duration-300"
              >
                Demo
              </a>
              <a
                href={items.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#6200EE] text-white rounded-full hover:bg-[#7B1EFF] hover:scale-105 transition-transform duration-300"
              >
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
