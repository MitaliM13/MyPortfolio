import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full py-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold">Your Name</h2>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-6 text-2xl">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:yourname@example.com"
              className="text-gray-400 hover:text-teal-400 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-500">
          Designed & Built with <span className="text-teal-400">❤</span> by Your Name
        </div>
      </div>
    </footer>
  );
}

export default Footer;
