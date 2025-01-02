import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-5xl font-extrabold text-white text-center mb-12">
        Contact
      </h1>
      <div className="max-w-4xl mx-auto px-6 text-white text-center">
        <p className="text-lg mb-8">
          I’d love to hear from you! Whether you have a question, a project, or just want to connect, feel free to reach out.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-slate-800 rounded-lg shadow-md p-6 w-64 hover:shadow-xl transition duration-300">
            <FaPhoneAlt className="text-teal-400 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="text-gray-400 mt-2">+91 123-456-7890</p>
          </div>
          <div className="bg-slate-800 rounded-lg shadow-md p-6 w-64 hover:shadow-xl transition duration-300">
            <FaEnvelope className="text-teal-400 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-gray-400 mt-2">yourname@example.com</p>
          </div>
          <div className="bg-slate-800 rounded-lg shadow-md p-6 w-64 hover:shadow-xl transition duration-300">
            <FaLinkedin className="text-teal-400 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
          <div className="bg-slate-800 rounded-lg shadow-md p-6 w-64 hover:shadow-xl transition duration-300">
            <FaGithub className="text-teal-400 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-bold">GitHub</h3>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              github.com/yourusername
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
