import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { GlobalBodyStyle } from "./styles/styledComponents";

import SiteNav from "./components/SiteNav";
import FloatingDecor from "./components/FloatingDecor"; // optional: remove if you want ultra-simple

import AboutMe from "./page/aboutMe";
import Experience from "./page/Experience";
import Projects from "./page/projects";
import ContactMe from "./page/contactMe";

import HandGestureRobot from "./page/handgesture";
import RobotImp from "./page/robotImp";
import MergeSortVis from "./page/mergeSortVis";
import MazeSolver from "./page/mazesolver";
import WebPage from "./page/webpage";
import Thesis from "./page/thesis.jsx";
import Parkpilot from "./page/parkpilot.jsx";
import CLbuilder from "./page/clbuilder.jsx";

function PageMotion({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.22 }}
      style={{ position: "relative", zIndex: 1 }}
    >
      {children}
    </motion.div>
  );
}

export default function Router() {
  const location = useLocation();

  return (
    <>
      <GlobalBodyStyle />
      <FloatingDecor />
      <SiteNav />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageMotion><AboutMe /></PageMotion>} />
          <Route path="/experience" element={<PageMotion><Experience /></PageMotion>} />
          <Route path="/projects" element={<PageMotion><Projects /></PageMotion>} />
          <Route path="/contact" element={<PageMotion><ContactMe /></PageMotion>} />



          <Route path="/projects/parkpilot" element={<PageMotion><Parkpilot /></PageMotion>} />
          <Route path="/projects/thesis" element={<PageMotion><Thesis /></PageMotion>} />
          <Route path="/projects/clbuilder" element={<PageMotion><CLbuilder /></PageMotion>} />
          <Route path="/projects/handgesturerobot" element={<PageMotion><HandGestureRobot /></PageMotion>} />
          <Route path="/projects/robotimplementation" element={<PageMotion><RobotImp /></PageMotion>} />
          <Route path="/projects/mergesortvis" element={<PageMotion><MergeSortVis /></PageMotion>} />
          <Route path="/projects/mazesolver" element={<PageMotion><MazeSolver /></PageMotion>} />
          <Route path="/projects/webpage" element={<PageMotion><WebPage /></PageMotion>} />

        </Routes>
      </AnimatePresence>
    </>
  );
}
