import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

/* =========================
   GLOBAL STYLES
   ========================= */
export const GlobalBodyStyle = createGlobalStyle`
  :root{
    --bg: #ffffff;
    --bg2: #f7f8fb;
    --text: #0f172a;
    --muted: #475569;
    --border: rgba(15,23,42,0.10);
    --shadow: 0 16px 40px rgba(2,8,23,0.08);

    --accent: #1d4ed8; /* blue */
    --accent2: #0ea5e9; /* sky */
  }

  *{ box-sizing: border-box; }
  html, body { height: 100%; }

  body{
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
    color: var(--text);

    /* IMPORTANT: remove page-tied radial backgrounds from body */
    background: var(--bg);

    overflow-x: hidden;
  }

  a{ color: inherit; text-decoration: none; }
`;

/* =========================
   FIXED BACKGROUND BLOBS
   (Render once in App.jsx)
   ========================= */
export const BackgroundBlobs = styled.div`
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  overflow: hidden;

  &::before,
  &::after{
    content: "";
    position: absolute;
    width: 900px;
    height: 500px;
    filter: blur(0px);
    opacity: 1;
  }

  /* Left blob */
  &::before{
    left: 0;
    top: 0;
    transform: translate(-25%, -10%);
    background: radial-gradient(
      900px 500px at 15% 10%,
      rgba(29,78,216,0.07),
      transparent 60%
    );
  }

  /* Right blob */
  &::after{
    right: 0;
    top: 0;
    transform: translate(20%, 10%);
    background: radial-gradient(
      900px 500px at 85% 25%,
      rgba(14,165,233,0.06),
      transparent 55%
    );
  }
`;

/* =========================
   LAYOUT
   ========================= */
export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  /* IMPORTANT: pushes content below fixed navbar */
  padding: 110px clamp(16px, 4vw, 44px) 72px;
`;

export const Panel = styled.div`
  background: rgba(255,255,255,0.85);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  border-radius: 20px;
  padding: clamp(16px, 3vw, 28px);
  backdrop-filter: blur(8px);
`;

export const Section = styled.div`
  margin-top: 16px;
`;

export const Hr = styled.hr`
  border: none;
  border-top: 1px solid var(--border);
  margin: 22px 0;
`;

/* =========================
   TYPOGRAPHY
   ========================= */
export const MainHeading = styled.h2`
  font-weight: 750;
  font-size: clamp(2rem, 3.2vw, 2.75rem);
  margin: 0;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  text-align: center;
`;

export const MainHeading2 = styled.h2`
  font-weight: 650;
  font-size: clamp(1.15rem, 2vw, 1.55rem);
  margin: 0 0 8px 0;
  letter-spacing: -0.01em;
  text-transform: none;
`;

export const Muted = styled.p`
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
  font-size: 16px;
`;

export const SmallMuted = styled.p`
  margin: 0;
  color: var(--muted);
  opacity: 0.85;
  line-height: 1.6;
  font-size: 14px;
`;

/* =========================
   BUTTONS
   ========================= */
export const PillRow = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled.button`
  height: 40px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid rgba(29,78,216,0.25);
  background: var(--accent);
  color: white;
  font-weight: 900;
  cursor: pointer;
  transition: transform 0.15s ease, filter 0.2s ease, background 0.2s ease;

  &:hover{ transform: translateY(-1px); filter: brightness(1.03); }
`;

export const InvertStyledButton = styled.button`
  height: 40px;
  padding: 0 14px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: white;
  color: var(--text);
  font-weight: 900;
  cursor: pointer;
  transition: transform 0.15s ease, background 0.2s ease;

  &:hover{ transform: translateY(-1px); background: var(--bg2); }
`;

/* =========================
   IMAGES / CARDS
   ========================= */
export const CircleImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 24px rgba(2,8,23,0.08);
`;

export const SquareImage = styled.img`
  border-radius: 16px;
  width: 140px;
  height: 140px;
  object-fit: cover;
  border: 1px solid var(--border);
  box-shadow: 0 10px 24px rgba(2,8,23,0.06);

  @media (max-width: 650px){
    width: 92px;
    height: 92px;
  }
`;

export const ProjectBox = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 14px auto;
  padding: 14px 16px;
  border-radius: 18px;
  background: white;
  border: 1px solid var(--border);
  box-shadow: 0 10px 26px rgba(2,8,23,0.06);
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.2s ease;

  &:hover{
    transform: translateY(-2px);
    box-shadow: 0 16px 40px rgba(2,8,23,0.09);
  }
`;

/* (You can square these off later if you want) */
export const IconButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 1px solid var(--border);
  background: var(--bg2);
  color: var(--text);
  transition: transform 0.15s ease, background 0.2s ease;

  &:hover{
    transform: translateY(-1px);
    background: white;
  }
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 22px;
  font-size: 1.05em;
  color: var(--accent);
  text-decoration: none;
  &:hover { text-decoration: underline; }
`;

export const BodyImage = styled.img`
  width: 100%;
  max-width: 420px;
  height: auto;
  border-radius: 18px;
  border: 1px solid var(--border);
  box-shadow: 0 10px 24px rgba(2,8,23,0.06);

  @media (max-width: 650px){
    max-width: 280px;
  }
`;

export const InnerText = styled.div`
  color: var(--muted);
  line-height: 1.65;
  font-size: 16px;
`;

export const InnerTitle = styled.div`
  font-weight: 900;
  letter-spacing: -0.01em;
  font-size: 18px;
  color: var(--text);
`;

/* ===== Legacy compatibility exports (for older pages) ===== */

export const NavBarBtn = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledHr = styled.hr`
  border: none;
  border-top: 1px solid var(--border);
  margin: 22px 0;
  width: 100%;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding: 6px 0;
`;

export const BackgroundMainDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  background: transparent;
`;

export const NavBar = styled.div`
  display: none;
`;

export const Logo = styled.h3`
  font-size: 1.05em;
  font-weight: 900;
  margin: 0;
  letter-spacing: -0.02em;
  padding: 6px 10px;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--bg2);
  color: var(--text);
`;

export const MainBody = styled.div`
  font-weight: 600;
  color: var(--muted);
  background: transparent;
  border-radius: 12px;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
