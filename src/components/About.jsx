import React from "react";
import { FaDownload } from "react-icons/fa";
import cvFile from "../assets/file/Albert Leonardi - CV.pdf";

const About = ({ isDarkMode }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Albert_Leonardi_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`w-[95%] sm:w-[97%] mx-auto mt-16 sm:mt-32 font-satoshi${
        isDarkMode ? "text-gray-200" : "text-gray-900"
      }`}
    >
      <hr className="w-full mb-4 sm:mb-6" />

      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-row justify-between sm:flex-row sm:justify-between lg:space-x-8 mb-6 lg:mb-0">
          <div className="mb-4 sm:mb-0">
            <p
              className={`text-xs sm:text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Location
            </p>
            <p className="text-sm sm:text-base">
              Tangerang, <br />
              Indonesia
            </p>
          </div>
          <div>
            <p
              className={`text-xs sm:text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Contact
            </p>
            <p className="text-sm sm:text-base">albertleooonardi@gmail.com</p>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="flex flex-col gap-6 sm:gap-8">
            <h2 className="text-xl sm:text-2xl font-switzer leading-snug sm:leading-normal">
              I specialize in full-stack development and am capable of working
              both independently and as part of a team. I have experience
              handling projects of varying sizes, from small to large-scale, and
              I bring creativity and out-of-the-box thinking to my designs.
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              With over a year of focused experience, I've been immersed in
              creating digital experiences that captivate and engage users. My
              work emphasizes interactive design, combining meticulous attention
              to detail with a passion for development. I find great fulfillment
              in turning ideas into custom, user-friendly, and visually
              appealing websites.
              <br /> <br />
              However, what I value most is building strong collaborations and
              meaningful connections with other creative, like-minded
              individuals.
            </p>

            <button
              onClick={handleDownload}
              className={`flex items-center justify-center px-4 py-2 rounded-lg border-2 transition-colors duration-200 text-sm sm:text-base ${
                isDarkMode
                  ? "bg-transparent text-white border-white hover:bg-[#141414]"
                  : "bg-transparent text-black border-black hover:bg-gray-200"
              }`}
            >
              <FaDownload className="mr-2" /> Download CV
            </button>
          </div>
        </div>

        <div className="lg:w-1/20"></div>
      </div>
    </div>
  );
};

export default About;
