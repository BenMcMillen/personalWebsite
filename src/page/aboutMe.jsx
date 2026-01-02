import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Container,
  Panel,
  MainHeading,
  Muted,
  StyledButton,
  InvertStyledButton,
  Hr,
  SmallMuted,
} from "../styles/styledComponents";

import profile from "../assets/ProfilePicture.jpg";
import linkedin from "../assets/icons8-linkedin.svg";

const GitHubIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.41.21 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.18.59.69.48A10.3 10.3 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
    />
  </svg>
);

export default function AboutMe() {
  const navigate = useNavigate();

  return (
    <Container>
      <Panel>
        {/* ===== TOP SECTION ===== */}
        <div className="heroTop">
          {/* Text */}
          <div className="heroText">
            <MainHeading style={{ textAlign: "left" }}>About Me</MainHeading>

            <Muted style={{ marginTop: 12, maxWidth: 620 }}>
              I’m Ben, a final-year Mechatronics Engineering + Computer Science student at UNSW.
              I’m focused on embedded systems, robotics, and building practical projects end-to-end.
            </Muted>
          </div>

          {/* Image */}
          <div className="heroImgWrap">
            <div className="ring" />
            <motion.img
              src={profile}
              alt="Profile"
              className="heroImg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotate: -1.5, scale: 1.02 }}
            />
          </div>
        </div>

        <Hr />

        {/* ===== ACTION STRIP ===== */}
        <div className="heroBottom">
          <div className="actions">
            <StyledButton onClick={() => navigate("/experience")}>
              Experience
            </StyledButton>

            <InvertStyledButton onClick={() => navigate("/projects")}>
              Projects
            </InvertStyledButton>

            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="iconPill"
            >
              <img src={linkedin} alt="LinkedIn" style={{ width: 22 }} />
            </a>

            <a
              href="https://github.com/YOUR_GITHUB"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="iconPill"
            >
              <GitHubIcon />
            </a>
          </div>

          <SmallMuted className="oneLiner">
            Actively seeking graduate roles in embedded systems, robotics, and software fields.
          </SmallMuted>
        </div>

        {/* ===== STYLES ===== */}
        <style>{`
          .heroTop{
            display: grid;
            grid-template-columns: 1.25fr 0.75fr;
            gap: 34px;
            align-items: center;
            padding: 10px 0 20px;
          }

          .heroText{
            padding: 10px 2px;
          }

          .heroImgWrap{
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 18px 0;
          }

          .ring{
            position: absolute;
            width: 230px;
            height: 230px;
            border-radius: 999px;
            background:
              radial-gradient(circle at 30% 30%, rgba(29,78,216,0.16), transparent 60%),
              radial-gradient(circle at 70% 70%, rgba(14,165,233,0.12), transparent 60%);
          }

          .heroImg{
            width: 160px;
            height: 160px;
            object-fit: cover;
            border-radius: 999px;
            border: 1px solid rgba(15,23,42,0.12);
            box-shadow: 0 14px 30px rgba(2,8,23,0.10);
            position: relative;
            z-index: 1;
          }

          .heroBottom{
            display: grid;
            gap: 14px;
            justify-items: center;
            text-align: center;
            padding: 16px 0 6px;
          }

          .actions{
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
          }

          .iconPill{
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 42px;
            height: 42px;
            border-radius: 999px;
            border: 1px solid rgba(15,23,42,0.10);
            background: #f7f8fb;
            transition: transform 0.15s ease, background 0.2s ease;
          }

          .iconPill:hover{
            transform: translateY(-1px);
            background: white;
          }

          .oneLiner{
            max-width: 820px;
          }

          @media (max-width: 860px){
            .heroTop{
              grid-template-columns: 1fr;
              text-align: center;
            }
            .heroText > h2{
              text-align: center !important;
            }
          }
        `}</style>
      </Panel>
    </Container>
  );
}
