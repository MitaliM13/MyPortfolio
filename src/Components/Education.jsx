import React from "react";

function Education() {
  const educationDetails = [
    {
      institution: "University of XYZ",
      degree: "Bachelor of Engineering in Information Technology",
      duration: "2019 - 2023",
      highlights: [
        "Graduated with distinction.",
        "Completed a capstone project on a dynamic role management system.",
        "Active member of the coding club and organized several hackathons.",
      ],
    }
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-5xl font-extrabold text-white text-center mb-12">
        Education
      </h1>
      <div className="max-w-6xl mx-auto px-6">
        {educationDetails.map((edu, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-lg shadow-md p-6 mb-8 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-bold text-teal-400 mb-2">
              {edu.institution}
            </h2>
            <h3 className="text-lg text-white mb-1">{edu.degree}</h3>
            <p className="text-sm text-gray-400 mb-4">{edu.duration}</p>
            <ul className="list-disc pl-5 text-gray-300 space-y-2">
              {edu.highlights.map((highlight, i) => (
                <li key={i} className="hover:text-white transition duration-300">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
