import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiMinusCircle } from "react-icons/fi";

const ProjectDetail = ({ isMonochrome, isDarkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, title, type, imageUrl, year, role, services, url, gitHub } =
    location.state || {};

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div
      className={`w-screen min-h-screen flex flex-col lg:flex-row items-stretch font-poppins p-5 mt-20`}
    >
      <div className="lg:w-3/5 w-full flex items-start justify-start">
        <img
          src={imageUrl}
          alt={title}
          className={`object-cover w-full h-auto lg:h-full ${
            isMonochrome ? "filter grayscale" : ""
          }`}
        />
      </div>

      <div
        className={`lg:w-2/5 w-full p-6 lg:p-8 flex flex-col justify-start items-start relative ${
          isDarkMode ? "bg-[#141414]" : "bg-gray-100"
        }`}
      >
        <div className="flex justify-between w-full items-center mb-4">
          <h1 className="text-2xl lg:text-3xl font-semibold">{title}</h1>
          <button
            onClick={handleBack}
            className="text-2xl lg:text-3xl bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 lg:w-12 h-10 lg:h-12 flex items-center justify-center"
          >
            <FiMinusCircle />
          </button>
        </div>

        <h2 className="text-lg lg:text-xl mb-8">{type}</h2>

        <div className="space-y-4 w-full">
          <hr
            className={`${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
          />

          <div className="flex justify-between w-full">
            <p className="font-medium">ID</p>
            <p>{id}</p>
          </div>

          <hr
            className={`${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
          />

          <div className="flex justify-between w-full">
            <p className="font-medium">Year</p>
            <p>{year}</p>
          </div>

          <hr
            className={`${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
          />

          <div className="flex justify-between w-full">
            <p className="font-medium">Role</p>
            <p>{role}</p>
          </div>

          <hr
            className={`${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
          />

          <div className="flex flex-col lg:flex-row justify-between w-full">
            <p className="font-medium">Services</p>
            <ul className="list-none text-left lg:text-right lg:pl-10 space-y-2">
              {services &&
                services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
            </ul>
          </div>

          <hr
            className={`${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
          />

          <div className="flex justify-between w-full">
            <p className="font-medium">Platform</p>
            <p>{type === "Coming Soon" ? "-" : type}</p>
          </div>

          <hr
            className={`${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
          />

          <div className="flex justify-between w-full">
            <p className="font-medium">URL</p>
            <a
              href={url}
              className="text-black hover:underline break-words max-w-[60%] lg:max-w-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              {url === "-" ? "Not available" : url}
            </a>
          </div>

          <hr
            className={`${isDarkMode ? "border-gray-700" : "border-gray-300"}`}
          />

          <div className="flex justify-between w-full">
            <p className="font-medium">GitHub</p>
            <a
              href={gitHub}
              className="text-black hover:underline break-words max-w-[60%] lg:max-w-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              {gitHub === "-" ? "Not available" : gitHub}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
