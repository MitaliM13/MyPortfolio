import React from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { CgFramer } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";

const Skills = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-slate-800 via-gray-900 to-slate-800">
      <h1 className="text-5xl font-extrabold text-white text-center mb-12">
        Skills
      </h1>
      <div className="max-w-6xl mx-auto px-6">
        <ul className="flex flex-wrap justify-center gap-6 text-center">
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <FaHtml5 className="text-5xl text-orange-500 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                HTML5
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <RiTailwindCssFill className="text-5xl text-blue-400 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                Tailwind CSS
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <IoLogoJavascript className="text-5xl text-yellow-400 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                JavaScript
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <FaReact className="text-5xl text-cyan-400 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                React.js
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <DiNodejs className="text-5xl text-green-500 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                Node.js
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <SiMysql className="text-5xl text-blue-600 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                MySQL
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <CgFramer className="text-5xl text-pink-500 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                Framer Motion
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <FaGitAlt className="text-5xl text-red-500 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                Git
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <FaGithub className="text-5xl text-gray-400 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                GitHub
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <SiPostman className="text-5xl text-orange-400 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                Postman
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <IoLogoFigma className="text-5xl text-purple-400 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                Figma
              </span>
            </div>
          </li>
          <li className="group">
            <div className="flex flex-col items-center bg-slate-700 px-8 py-6 rounded-xl shadow-lg hover:bg-teal-600 transition duration-300">
              <SiAngular className="text-5xl text-red-600 group-hover:text-white mb-4" />
              <span className="text-white text-lg font-medium group-hover:text-slate-900">
                Angular
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
