import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 240px;
`;

const Button = styled.button`
  width: 100%;
  height: 44px;
  padding: 0 16px;
  border-radius: 12px;
  border: 1px solid rgba(15,23,42,0.14);
  background: linear-gradient(180deg, #ffffff, #f8fafc);
  font-weight: 800;
  color: rgba(15,23,42,0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37,99,235,0.15);
  }
`;

const Menu = styled(motion.div)`
  position: absolute;
  top: 52px;
  left: 0;
  width: 100%;
  background: white;
  border-radius: 14px;
  border: 1px solid rgba(15,23,42,0.12);
  box-shadow: 0 12px 30px rgba(15,23,42,0.12);
  overflow: hidden;
  z-index: 10;
`;

const Item = styled.div`
  padding: 12px 16px;
  font-weight: 700;
  cursor: pointer;
  color: ${({ active }) => (active ? "#2563eb" : "#0f172a")};
  background: ${({ active }) => (active ? "#eff6ff" : "white")};

  &:hover {
    background: #f1f5f9;
  }
`;

const Chevron = styled(motion.span)`
  display: inline-block;
`;

export default function ProjectFilter({ value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const options = [
    "All Projects",
    "Mechatronics",
    "Computer Science",
  ];

  return (
    <Wrapper ref={ref}>
      <Button onClick={() => setOpen((o) => !o)}>
        {value}
        <Chevron animate={{ rotate: open ? 180 : 0 }}>⌄</Chevron>
      </Button>

      <AnimatePresence>
        {open && (
          <Menu
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
          >
            {options.map((opt) => (
              <Item
                key={opt}
                active={opt === value}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </Item>
            ))}
          </Menu>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}
