import React from 'react';
import project1 from '../utils/project1.png';
import project2 from '../utils/project2.png';

function Project() {
  const details = [
    {
      img: project1,
      projectname: 'Movies-flix',
      projectdes: 'MoviesFlick is a movie discovery platform that allows users to explore the latest films, view movie details, ratings, and trailers, all powered by the TMDB API. It offers an easy-to-use interface for searching movies by title, genre, or actor. Perfect for movie enthusiasts to stay up-to-date with trending films.',
      demo: 'https://movies-flick.netlify.app/',
      sourceCode: 'https://github.com/ayushjoshi45/MoviesFlick',
    },
    {
      img: project2,
      projectname: 'Bubble Game',
      projectdes: 'Bubble Hit Game is a fun and interactive game where you need to click on bubbles displaying numbers that match the hit numbers shown on the screen. With each correct hit, your score increases, and every second your timer decreases, adding an extra layer of excitement to the challenge.',
      demo: 'https://bubble-game-by-ayush.netlify.app/',
      sourceCode: 'https://github.com/ayushjoshi45/Bubble-Game',
    },
    {
      img: project1,
      projectname: 'Movies-gfsgjf; ghjs;',
      projectdes: 'moviesfilck flh hgf shgfjs hgfj sgjf g',
      demo: 'https://movies-flick.netlify.app/',
      sourceCode: 'https://movies-flick.netlify.app/',
    },
  ];

  return (
    <div className="text-white px-4 md:px-8 lg:px-16">
      <div>
        <h1 className="font-bold text-3xl text-center">Projects</h1>
      </div>

      <div className="card-holder grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {details.map((items, index) => (
          <div
            key={index}
            className="card bg-[#222222] p-4 rounded-md shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={items.img}
              alt="Project Img"
              className="rounded-md w-full h-40 object-cover"
            />

            <h1 className="font-bold text-2xl mt-4">{items.projectname}</h1>
            <p className="text-lg mt-2">{items.projectdes}</p>

            <div className="flex justify-between items-center mt-4">
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
}

export default Project;
