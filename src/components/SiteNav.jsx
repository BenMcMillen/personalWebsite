import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle = ({ isActive }) => ({
    padding: "10px 10px",
    fontWeight: 900,
    color: isActive ? "var(--text)" : "rgba(15,23,42,0.78)",
    borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
    transition: "border-color 0.2s ease, color 0.2s ease",
  });

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 60,
        background: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.78)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(15,23,42,0.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "12px clamp(16px, 4vw, 44px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
        }}
      >
        <div style={{ fontWeight: 950, letterSpacing: "-0.02em" }}>
          Ben McMillen
        </div>

        {/* Desktop links */}
        <div className="navDesktop" style={{ display: "flex", gap: 18, alignItems: "center" }}>
          <NavLink to="/" end style={linkStyle} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/experience" style={linkStyle} onClick={() => setOpen(false)}>Experience</NavLink>
          <NavLink to="/projects" style={linkStyle} onClick={() => setOpen(false)}>Projects</NavLink>
          <NavLink to="/contact" style={linkStyle} onClick={() => setOpen(false)}>Contact</NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="navMobileBtn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
          style={{
            display: "none",
            width: 44,
            height: 44,
            borderRadius: 12,
            border: "1px solid rgba(15,23,42,0.10)",
            background: "white",
            cursor: "pointer",
            fontSize: 18,
          }}
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                maxWidth: 1100,
                margin: "0 auto",
                padding: "0 clamp(16px, 4vw, 44px) 12px",
                display: "grid",
                gap: 8,
              }}
            >
              <NavLink to="/" end style={linkStyle} onClick={() => setOpen(false)}>About</NavLink>
              <NavLink to="/experience" style={linkStyle} onClick={() => setOpen(false)}>Experience</NavLink>
              <NavLink to="/projects" style={linkStyle} onClick={() => setOpen(false)}>Projects</NavLink>
              <NavLink to="/contact" style={linkStyle} onClick={() => setOpen(false)}>Contact</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 760px){
          .navDesktop{ display: none !important; }
          .navMobileBtn{ display: inline-flex !important; align-items:center; justify-content:center; }
        }
      `}</style>
    </div>
  );
}
