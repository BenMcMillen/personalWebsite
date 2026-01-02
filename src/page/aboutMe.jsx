import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  MainHeading,
  Muted,
  Hr,
  SmallMuted,
} from "../styles/styledComponents";

import profile from "../assets/ProfilePicture.jpg";

const resumeURL = "/Ben_McMillen_Resume.pdf";

/* ===== ICONS ===== */

const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.41.21 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.18.59.69.48A10.3 10.3 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>
  </svg>
);

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM.22 8.02h4.52V24H.22V8.02zM8.98 8.02h4.34v2.18h.06c.6-1.14 2.06-2.34 4.24-2.34 4.54 0 5.38 2.98 5.38 6.86V24h-4.52v-7.44c0-1.78-.03-4.08-2.48-4.08-2.48 0-2.86 1.94-2.86 3.95V24H8.98V8.02z"/>
  </svg>
);

/* ===== COMPONENT ===== */

export default function AboutMe() {
  return (
    <Container>

      <div className="aboutWrap">

        {/* ===== HERO SECTION ===== */}
        <div className="heroTop">
          <div className="heroText">
            <MainHeading style={{ textAlign: "left" }}>
              About Me
            </MainHeading>

            <Muted style={{ marginTop: 14, maxWidth: 620 }}>
              I’m Ben, a final-year Mechatronics Engineering + Computer Science student at UNSW.
              I’m focused on embedded systems, robotics, and building practical projects end-to-end.
            </Muted>
          </div>

          <div className="heroImgWrap">
            <div className="ring" />
            <motion.img
              src={profile}
              alt="Ben McMillen"
              className="heroImg"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotate: -1.5, scale: 1.02 }}
            />
          </div>
        </div>

        <Hr />

        {/* ===== ACTIONS ===== */}
        <div className="heroBottom">
          <div className="actions">
            <a href={resumeURL} download className="pillBtn">
              Download CV
            </a>

            <a
              href="https://www.linkedin.com/in/ben-mcmillen-b587b7227/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="pillBtn"
            >
              <LinkedInIcon />
            </a>

            <a
              href="https://github.com/BenMcMillen"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="pillBtn"
            >
              <GitHubIcon />
            </a>
          </div>

          <SmallMuted className="oneLiner">
            Actively seeking graduate roles in embedded systems, robotics, and software.
          </SmallMuted>
        </div>

      </div>

      {/* ===== STYLES ===== */}
      <style>{`
        .aboutWrap{
          max-width: 980px;
          margin: 0 auto;
          padding-top: 20%; /* 👈 key change: top-biased placement */
        }

        .heroTop{
          display: grid;
          grid-template-columns: 1.25fr 0.75fr;
          gap: 34px;
          align-items: center;
          padding-bottom:5%;
        }

        .heroImgWrap{
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
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
          padding: 20px 0 0;
        }

        .actions{
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .pillBtn{
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 16px;
          min-width: 44px;
          border-radius: 12px;
          border: 1px solid rgba(15,23,42,0.12);
          background: white;
          color: rgba(15,23,42,0.9);
          font-weight: 900;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .pillBtn:hover{
          background: #0f172a;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 10px 24px rgba(2,8,23,0.08);
        }

        .oneLiner{
          max-width: 780px;
        }

        /* Mobile */
        @media (max-width: 860px){
          .aboutWrap{
            padding-top: 40px;
          }

          .heroTop{
            grid-template-columns: 1fr;
            text-align: center;
          }

          .heroText h2{
            text-align: center !important;
          }
        }
      `}</style>

    </Container>
  );
}
