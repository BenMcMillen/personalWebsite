import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        transformOrigin: "0% 50%",
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, rgba(109,40,217,1), rgba(34,197,94,1))",
        zIndex: 80,
      }}
    />
  );
}
