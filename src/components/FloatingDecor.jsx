import React from "react";
import { motion } from "framer-motion";

export default function FloatingDecor() {
  return (
    <div aria-hidden="true" style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0 }}>
      <motion.div
        animate={{ y: [0, -14, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={blob({ top: "14%", left: "10%", size: 260, color: "rgba(29,78,216,0.10)" })}
      />
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={blob({ top: "22%", right: "12%", size: 220, color: "rgba(14,165,233,0.10)" })}
      />
    </div>
  );
}

function blob({ top, left, right, size, color }) {
  return {
    position: "absolute",
    top,
    left,
    right,
    width: size,
    height: size,
    borderRadius: 999,
    background: `radial-gradient(circle at 30% 30%, ${color}, transparent 60%)`,
  };
}
