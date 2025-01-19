import React from "react";
import heroimg from "../utils/hero.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero({ slide, height }) {
  
  return (
    <div
    style={{
      marginTop: slide ? `calc(${height}px + 50px)` : "0", 
    }}
      className={`w-full h-screen text-white flex flex-col lg:flex-row justify-between items-center py-[50%] md:py-4 lg:py-16`}
      
    >
      {/* Left Section */}
      <div className="text-center lg:text-left mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-6xl mb-4">Hello 👋</h1>
        <h1 className="text-4xl lg:text-6xl mb-4">
          I'm <span className="text-[#6200EE]">Ayush</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Software Engineer",
            "FullStack Developer",
            1000,
            "Freelancer",
            1000,
          ]}
          wrapper="span"
          speed={10}
          style={{ fontSize: "1.5em", display: "inline-block" }}
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
          src={heroimg}
          alt="Profile"
          className="rounded-full mx-auto lg:mx-0"
        />
      </div>
    </div>
  );
}

export default Hero;
