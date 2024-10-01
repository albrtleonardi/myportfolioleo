import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Information from "./pages/Information";
import Footer from "./components/Footer";
import ProjectDetail from "./pages/ProjectDetail";
import ErrorPage from "./pages/ErrorPage";
import { motion, AnimatePresence } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

const AnimatedRoutes = ({ isDarkMode, isMonochrome }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/information"
          element={
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition.transition}
            >
              <Information isDarkMode={isDarkMode} />
              <Footer isDarkMode={isDarkMode} />
            </motion.div>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition.transition}
            >
              <ProjectDetail
                isMonochrome={isMonochrome}
                isDarkMode={isDarkMode}
              />
              <Footer isDarkMode={isDarkMode} />
            </motion.div>
          }
        />
        <Route
          path="/"
          element={
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition.transition}
            >
              <Projects isDarkMode={isDarkMode} isMonochrome={isMonochrome} />
              <Footer isDarkMode={isDarkMode} />
            </motion.div>
          }
        />
        <Route
          path="*"
          element={
            <motion.div
              variants={pageTransition}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition.transition}
              className="flex-grow"
            >
              <ErrorPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMonochrome, setIsMonochrome] = useState(false);

  return (
    <Router>
      <div
        className={`min-h-screen flex flex-col justify-between transition-colors ${
          isDarkMode ? "bg-black text-gray-200" : "bg-white text-gray-900"
        }`}
      >
        <Header isDarkMode={isDarkMode} />
        <Navbar
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          isMonochrome={isMonochrome}
          setIsMonochrome={setIsMonochrome}
        />
        <motion.div
          initial={{ backgroundColor: isDarkMode ? "#000" : "#fff" }}
          animate={{ backgroundColor: isDarkMode ? "#000" : "#fff" }}
          transition={{ duration: 0.2 }}
          className="flex-grow"
        >
          <AnimatedRoutes
            isDarkMode={isDarkMode}
            isMonochrome={isMonochrome}
            setIsDarkMode={setIsDarkMode}
            setIsMonochrome={setIsMonochrome}
          />
        </motion.div>
      </div>
    </Router>
  );
};

export default App;
