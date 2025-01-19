import React from "react";

function About() {
  return (
    <div className="w-full mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-6">About Me</h1>
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
            I specialize in creating dynamic and user-friendly applications,
            with a strong focus on the MERN Stack and modern web technologies. I
            enjoy exploring new technologies and turning ideas into reality, such
            as my recent projects:
            <span className="text-[#6200EE] font-bold"> MarketPlace Website</span>, 
            where users can list their properties, and 
            <span className="text-[#6200EE] font-bold"> MoviesFlick</span>, a
            movie platform powered by the TMDB API.
            <br />
            When I'm not coding, I love playing cricket and staying updated with
            the latest tech trends.
          </p>
        </details>
      </div>
    </div>
  );
}

export default About;
