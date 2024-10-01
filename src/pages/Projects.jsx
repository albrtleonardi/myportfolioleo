import React from "react";
import ProjectList from "../components/ProjectList";

const Projects = ({ isDarkMode, isMonochrome }) => {
  return <ProjectList isDarkMode={isDarkMode} isMonochrome={isMonochrome} />;
};

export default Projects;
