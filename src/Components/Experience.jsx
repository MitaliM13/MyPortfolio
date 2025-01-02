import React from "react";

function Experience() {
  const experiences = [
    {
      company: "Sankey Business Solutions Pvt. Ltd.",
      role: "Solution Analyst",
      duration: "September 2024 - November 2024",
      responsibilities: [
        "Developed and optimized multi-step forms using Angular and Angular Material.",
        "Implemented conditional rendering and data persistence using local storage.",
        "Collaborated with cross-functional teams to design and deliver scalable solutions.",
      ],
    }
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-5xl font-extrabold text-white text-center mb-12">
        Experience
      </h1>
      <div className="max-w-6xl mx-auto px-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg shadow-md p-6 mb-8 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-bold text-teal-400 mb-2">
              {exp.company}
            </h2>
            <h3 className="text-lg text-white mb-1">{exp.role}</h3>
            <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="hover:text-white transition duration-300">
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
