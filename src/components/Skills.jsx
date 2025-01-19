import React from "react";

function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Express",
    "MongoDB",
    "SQL",
  ];

  return (
    <div className="w-full mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-white text-center mb-6">My Skills</h1>
      <div className="bg-[#222222] p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-4 bg-[#333333] rounded-md shadow-md flex items-center justify-center text-white font-semibold text-lg hover:bg-[#6200EE] transition-all duration-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
