// import React from 'react'
// import { TypeAnimation } from 'react-type-animation';
// function Hero() {
//   return (
//     <div className='w-full h-screen text-white flex justify-between items-center'>
//         <div>
//             <h1 className='text-4xl mb-4'>Hello 👋</h1>
//             <h1 className='text-4xl mb-4'>I'm <span className='text-[#6200EE]'>Ayush</span></h1>

//         <TypeAnimation
//       sequence={[
//         'Software Engineer',
//         'Front-end Developer',
//         1000,
//         'Freelancer',
//         1000
//       ]}
//       wrapper="span"
//       speed={10}
//       style={{ fontSize: '2em', display: 'inline-block' }}
//       repeat={Infinity}
//        className="text-[#6200EE] mb-4"
//     />

//     <p className='w-[45%] h-full text-xl'>Based in the INDIA, I'm a front-end developer passionate about building accessible web apps that users love.</p>
//     </div>
//     <div>
//         image
//     </div>
//     </div>
//   )
// }

// export default Hero


import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <div className="w-full h-screen text-white flex flex-col lg:flex-row justify-between items-center px-4 lg:px-16">
      {/* Left Section */}
      <div className="text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-3xl lg:text-4xl mb-4">Hello 👋</h1>
        <h1 className="text-3xl lg:text-4xl mb-4">
          I'm <span className="text-[#6200EE]">Ayush</span>
        </h1>

        <TypeAnimation
          sequence={[
            'Software Engineer',
            'Front-end Developer',
            1000,
            'Freelancer',
            1000,
          ]}
          wrapper="span"
          speed={10}
          style={{ fontSize: '1.5em', display: 'inline-block' }}
          repeat={Infinity}
          className="text-[#6200EE] mb-4"
        />

        <p className="text-lg lg:text-xl w-full lg:w-[45%] h-full">
          Based in INDIA, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
      </div>

      {/* Right Section (Image) */}
      <div className="w-[80%] lg:w-[50%]">
        <img
          src="https://via.placeholder.com/300"
          alt="Profile"
          className="rounded-full mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
}

export default Hero;
