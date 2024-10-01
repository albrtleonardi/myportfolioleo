import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ isDarkMode }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/"); // Navigate back to the homepage
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        isDarkMode ? "bg-black text-gray-200" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-6xl font-bold mb-4">404: Page Not Found</h1>
      <p className="text-xl mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={handleGoBack}
        className={`px-6 py-3 ${
          isDarkMode ? "bg-gray-700 text-gray-200" : "bg-blue-500 text-white"
        } rounded-lg hover:bg-opacity-80 transition-colors`}
      >
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
