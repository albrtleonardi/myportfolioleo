import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = ({ isDarkMode }) => {
  const [hovered, setHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ color: isDarkMode ? "#ffffff" : "#191717" }}
      animate={{ color: isDarkMode ? "#ffffff" : "#191717" }}
      transition={{ duration: 0.5 }}
      className="relative w-full"
    >
      <div className="top-0 left-0 w-full flex flex-col justify-center items-center">
        <motion.div
          className="font-satoshi font-medium text-[11.4vw] text-center cursor-pointer whitespace-nowrap"
          onHoverStart={() => !isSmallScreen && setHovered(true)}
          onHoverEnd={() => !isSmallScreen && setHovered(false)}
        >
          <motion.span>A</motion.span>

          <motion.span
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{
              clipPath:
                hovered || isSmallScreen
                  ? "inset(0 0 0 0)"
                  : "inset(0 100% 0 0)",
              opacity: hovered || isSmallScreen ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            className="inline-block"
          >
            lbert
          </motion.span>

          <motion.span>
            {" "}
            <span></span> L
          </motion.span>

          <motion.span
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{
              clipPath:
                hovered || isSmallScreen
                  ? "inset(0 0 0 0)"
                  : "inset(0 100% 0 0)",
              opacity: hovered || isSmallScreen ? 1 : 0,
            }}
            transition={{ duration: 0.2, delay: 0.1 }}
            className="inline-block"
          >
            eonardi
          </motion.span>
        </motion.div>

        <hr className="w-[97%] border-t border-gray-500" />
      </div>
    </motion.div>
  );
};

export default Header;
