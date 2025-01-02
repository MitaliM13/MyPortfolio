import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-blue-300 via-teal-400 to-blue-300 flex flex-col px-8 md:px-20 justify-center items-center text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        About Me
      </h2>
      <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo velit
        molestias, blanditiis eveniet at eaque aliquam amet ratione expedita
        aspernatur. Explicabo ducimus accusantium, a numquam magnam nulla quis
        quaerat quisquam! Error nihil, accusamus adipisci aliquid facilis, non,
        pariatur repudiandae voluptatum doloremque ducimus dolor minus
        provident eveniet a in dicta placeat numquam temporibus incidunt sint
        voluptatibus. Fugiat provident et corporis non?
      </p>
      <button className="bg-teal-700 py-2 px-4 mt-4 rounded-full text-white font-semibold">View My Work!</button>
    </div>
  );
};

export default About;
