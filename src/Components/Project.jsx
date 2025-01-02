import React from 'react';

const Project = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-gray-800 text-white px-10 py-16">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      {/* Project Cards */}
      <div className="w-full flex flex-wrap gap-8 justify-center">
        {/* Project 1 */}
        <div className="w-full md:w-1/3 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            src=""
            alt="preview"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">Project Title</h2>
            <p className="text-gray-300 mb-4">
              Brief description of the project, its features, and technologies used.
            </p>
            <div className="flex justify-between mt-4">
              <a
                href="#"
                className="text-teal-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-teal-500 hover:underline"
              >
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Repeat Project Card for more projects */}
        <div className="w-full md:w-1/3 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            src=""
            alt="preview"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">Project Title</h2>
            <p className="text-gray-300 mb-4">
              Brief description of the project, its features, and technologies used.
            </p>
            <div className="flex justify-between mt-4">
              <a
                href="#"
                className="text-teal-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-teal-500 hover:underline"
              >
                Live
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            src=""
            alt="preview"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">Project Title</h2>
            <p className="text-gray-300 mb-4">
              Brief description of the project, its features, and technologies used.
            </p>
            <div className="flex justify-between mt-4">
              <a
                href="#"
                className="text-teal-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-teal-500 hover:underline"
              >
                Live
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-gray-700 rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
          <img
            src=""
            alt="preview"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold mb-2">Project Title</h2>
            <p className="text-gray-300 mb-4">
              Brief description of the project, its features, and technologies used.
            </p>
            <div className="flex justify-between mt-4">
              <a
                href="#"
                className="text-teal-500 hover:underline"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-teal-500 hover:underline"
              >
                Live
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
