import React from "react";

function Skills() {
  const skills = [
    { name: "HTML5", color: "#E44D26", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
    { name: "CSS3", color: "#2965F1", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
    { name: "JavaScript", color: "#F7DF1E", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
    { name: "React", color: "#61DAFB", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
    { name: "Next.js", color: "#000000", logo: "https://cdn-icons-png.flaticon.com/512/888/888841.png" },
    { name: "Express", color: "#404040", logo: "https://cdn-icons-png.flaticon.com/512/873/873120.png" },
    { name: "MongoDB", color: "#47A248", logo: "https://cdn-icons-png.flaticon.com/512/919/919836.png" },
    { name: "SQL", color: "#00758F", logo: "https://cdn-icons-png.flaticon.com/512/1199/1199125.png" },
  ];

  return (
    <div className="w-full mx-auto py-12 px-4 lg:px-0">
      <h1 className="text-4xl font-bold text-white text-center mb-8">My Skills</h1>
      <div className="bg-[#222222] p-6 rounded-lg shadow-lg">
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
                <img src={skill.logo} alt={`${skill.name} logo`} className="w-10 h-10" />
              </div>
              <h3 className="text-white text-lg font-semibold mt-4">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
