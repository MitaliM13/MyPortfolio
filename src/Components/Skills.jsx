import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
const Skills = () => {
  return (
    <div className="w-full py-10 bg-gradient-to-r from-slate-700 via-gray-800 to-slate-700">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Skills</h1>
      <div>
        <ul className="text-white flex flex-wrap justify-center gap-8 text-center text-lg font-medium">
          <li className="bg-slate-600 px-6 py-2 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            <FaHtml5/>
          </li>
          <li className="bg-slate-600 px-6 py-2 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            <RiTailwindCssFill/>
          </li>
          <li className="bg-slate-600 px-6 py-2 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            <IoLogoJavascript/>
          </li>
          <li className="bg-slate-600 px-6 py-2 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            <FaReact/>
          </li>
          <li className="bg-slate-600 px-6 py-2 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            Node.js
          </li>
          <li className="bg-slate-600 px-6 py-2 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            Express
          </li>
          <li className="bg-slate-600 px-6 py-2 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            MongoDB
          </li>
          <li className="bg-slate-600 px-6 py-2 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            Git
          </li>
          <li className="bg-slate-600 px-6 py-2 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            GitHub
          </li>
          <li className="bg-slate-600 px-6 py-2 rounded-lg shadow-md hover:bg-teal-500 transition duration-300">
            VS Code
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
