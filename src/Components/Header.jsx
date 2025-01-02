const Header = () => {
  return (
    <div className="w-full p-5 border-b border-gray-300 bg-white shadow-md flex justify-between items-center">
      {/* Logo Section */}
      <div className="bg-black px-4 py-1 rounded-full">
        <h1 className="text-white text-lg font-bold tracking-wide">Mitali.</h1>
      </div>

      {/* Navigation Menu */}
      <div>
        <ul className="flex justify-end gap-6 text-gray-700 text-sm md:text-base font-medium">
          <li className="hover:text-teal-500 cursor-pointer transition duration-300">
            About
          </li>
          <li className="hover:text-teal-500 cursor-pointer transition duration-300">
            Skills
          </li>
          <li className="hover:text-teal-500 cursor-pointer transition duration-300">
            Project
          </li>
          <li className="hover:text-teal-500 cursor-pointer transition duration-300">
            Experience
          </li>
          <li className="hover:text-teal-500 cursor-pointer transition duration-300">
            Education
          </li>
          <li className="hover:text-teal-500 cursor-pointer transition duration-300">
            Contact
          </li>
          <li className="hover:text-teal-500 cursor-pointer transition duration-300">
            Blog
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
