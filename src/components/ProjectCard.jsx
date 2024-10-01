import React from "react";

const ProjectCard = ({
  id,
  title,
  type,
  imageUrl,
  isDarkMode,
  isMonochrome,
}) => {
  return (
    <div className="font-poppins">
      <hr
        className={`mb-3 ${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
      />
      <div>
        <h1 className={`${isDarkMode ? "text-gray-200" : "text-gray-900"}`}>
          {title}
        </h1>
        <div className="flex justify-between text-sm">
          <p className={`${isDarkMode ? "text-gray-200" : "text-gray-400"}`}>
            {type}
          </p>
          <p className={`${isDarkMode ? "text-gray-200" : "text-gray-400"}`}>
            {id}
          </p>
        </div>
        <div
          className={`mt-8 ${
            isDarkMode
              ? "bg-[#3b3b3b] hover:bg-[#636363]"
              : "bg-gray-200 hover:bg-gray-300"
          } w-full aspect-w-1 aspect-h-1 flex items-center justify-center relative rounded-md border-none transition-colors duration-200`}
        >
          {imageUrl ? (
            <img
              className={`w-[72%] h-[36vh] mt-16 object-cover ${
                isMonochrome ? "filter grayscale" : ""
              }`}
              src={imageUrl}
              alt={title}
            />
          ) : (
            <div
              className={`w-[72%] h-[36vh] mt-16 ${
                isDarkMode ? "bg-gray-700" : "bg-gray-300"
              }`}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
