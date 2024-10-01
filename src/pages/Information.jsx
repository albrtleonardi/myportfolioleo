import React from "react";
import About from "../components/About";

const Information = ({ isDarkMode }) => {
  return (
    <div className="mb-24">
      <About isDarkMode={isDarkMode} />
    </div>
  );
};

export default Information;
