import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = ({
  isDarkMode,
  setIsDarkMode,
  isMonochrome,
  setIsMonochrome,
}) => {
  const [time, setTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isActive = (path) => location.pathname === path;

  const isProjectsActive = () => {
    return (
      location.pathname === "/" || location.pathname.startsWith("/projects")
    );
  };

  return (
    <div className="w-[97%] mx-auto flex justify-between items-center mt-4 font-poppins font-light text-xs transition-colors duration-200">
      <div
        className={`transition-colors duration-200 ${
          isDarkMode ? "text-gray-200" : "text-gray-400"
        }`}
      >
        Full-Stack <br /> Developer
      </div>

      <div className="flex flex-col">
        <Link
          to="/information"
          className={`transition-colors duration-200 ${
            isActive("/information")
              ? isDarkMode
                ? "text-gray-200"
                : "text-black"
              : isDarkMode
              ? "text-gray-400"
              : "text-gray-400"
          } ${isDarkMode ? "hover:text-gray-200" : "hover:text-gray-900"}`}
        >
          Information
        </Link>
        <Link
          to="/"
          className={`transition-colors duration-200 ${
            isProjectsActive()
              ? isDarkMode
                ? "text-gray-200"
                : "text-black"
              : isDarkMode
              ? "text-gray-400"
              : "text-gray-400"
          } ${isDarkMode ? "hover:text-gray-200" : "hover:text-gray-900"}`}
        >
          Projects
        </Link>
      </div>

      <div className="flex flex-col">
        <span
          onClick={() => setIsDarkMode(!isDarkMode)}
          className={`cursor-pointer transition-colors duration-200 flex justify-between w-[150px] ${
            isDarkMode
              ? "text-gray-200 hover:text-gray-300"
              : "text-gray-400 hover:text-black"
          }`}
        >
          <span>Dark Mode</span>
          <span>[{isDarkMode ? "Y" : "N"}]</span>
        </span>

        <span
          onClick={() => setIsMonochrome(!isMonochrome)}
          className={`cursor-pointer transition-colors duration-200 flex justify-between w-[150px] ${
            isDarkMode
              ? "text-gray-200 hover:text-gray-300"
              : "text-gray-400 hover:text-black"
          }`}
        >
          <span>Monochrome</span>
          <span>[{isMonochrome ? "Y" : "N"}]</span>
        </span>
      </div>

      <div
        className={`transition-colors duration-200 text-right ${
          isDarkMode ? "text-gray-200" : "text-gray-400"
        }`}
      >
        Global Time <br />
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
};

export default Navbar;
