/**
 * About Component
 */

import React from 'react';

const About = () => {
  return (
    <div className="w-full mx-auto py-12 px-1 lg:px-0">
      <div className="flex flex-col mb-6 gap-1">
        <h1 className="text-4xl font-bold text-white text-center">About Me</h1>
        <div className="w-32 h-[5px] bg-[#6200EE] rounded mx-auto"></div>
      </div>
      <div className="bg-[#222222] p-6 rounded-lg shadow-lg">
        <details className="group">
          <summary className="text-xl font-semibold text-white cursor-pointer flex justify-between items-center hover:text-gray-300 transition duration-300">
            Hi, I'm Ayush Joshi, a passionate web developer from Nainital,
            Uttarakhand.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-[#6200EE] group-open:rotate-180 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-4 text-gray-300 leading-7">
            I specialize in building dynamic and user-friendly applications,
            with a strong focus on the MERN Stack and modern web technologies.
            Over time, I've worked on several projects that reflect both my
            technical skills and creativity. Some of my favorites include:
            <br />
            - <span className="text-[#6200EE] font-bold">Job Portal</span> – a
            platform that connects job seekers and recruiters with smooth
            authentication and application management.
            <br />
            - <span className="text-[#6200EE] font-bold">Rental Marketplace</span> –
            where users can list and browse properties with an interactive,
            real-world experience.
            <br />
            - <span className="text-[#6200EE] font-bold">MoviesFlick</span> – a
            movie discovery platform powered by the TMDB API.
            <br />
            - <span className="text-[#6200EE] font-bold">Bubble Hit Game</span> –
            a fun JavaScript-based game where players score points by hitting
            bubbles with matching numbers.
            <br />
            When I'm not coding, you'll probably find me playing cricket or
            exploring the latest trends in technology. I enjoy learning,
            experimenting, and constantly pushing myself to build better
            projects.
          </p>
        </details>
      </div>
    </div>
  );
};

export default About;
