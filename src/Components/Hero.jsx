/* eslint-disable react/no-unescaped-entities */

const Hero = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-green-300 via-teal-400 to-green-300 flex flex-col md:flex-row justify-center items-center">
      {/* Left Section */}
      <div className="w-full md:w-2/3 border border-black bg-white shadow-lg h-full p-8 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-light text-gray-800">
          Hello, I'm <br />
          <span className="font-bold text-teal-600">Mitali Maurya</span>
        </h2>
        <h5 className="mt-5 text-2xl md:text-3xl font-medium text-gray-700">
          WEB DEVELOPER
        </h5>
        <p className="mt-3 text-lg md:text-xl text-gray-600 max-w-xl">
          Your next web developer, ready to bring designs to life.
        </p>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/3 border border-black bg-white shadow-lg h-full flex justify-center items-center">
        <img
          src="https://via.placeholder.com/300"
          alt="Mitali Maurya"
          className="h-2/3 w-auto rounded-full border-4 border-teal-500 object-cover shadow-md"
        />
      </div>
    </div>
  );
};

export default Hero;
