import React from "react";
import ProjectCard from "./ProjectCard";
import { myProjects } from "../data/myProject";
import { useNavigate } from "react-router-dom";

const ProjectList = ({ isDarkMode, isMonochrome }) => {
  const navigate = useNavigate();

  const handleCardClick = (project) => {
    navigate(`/projects/${project.id}`, { state: project });
  };

  return (
    <div className="pt-8 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {myProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleCardClick(project)}
            className="cursor-pointer"
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              type={project.type}
              imageUrl={project.imageUrl}
              isDarkMode={isDarkMode}
              isMonochrome={isMonochrome}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
