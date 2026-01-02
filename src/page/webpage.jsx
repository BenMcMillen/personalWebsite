import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Panel,
  MainHeading,
  MainHeading2,
  Muted,
  Hr,
  BackLink,
  StyledButton,
  InvertStyledButton,
  BodyImage,
} from "../styles/styledComponents";

import im1 from "../assets/webpage.png";

export default function WebPage() {
  const GITHUB_URL = "https://github.com/BenMcMillen/personalWebsite";

  return (
    <Container>
      <Panel>
        <MainHeading>This Website</MainHeading>
        <Muted style={{ textAlign: "center", marginTop: 10 }}>
          React + Vite portfolio site showcasing projects, experience, and contact.
        </Muted>

        <Hr />

        <div className="topActions">
          <BackLink className="backPill" to="/projects">
            ← Back to Projects
          </BackLink>

          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btnLink">
            <StyledButton type="button">View GitHub</StyledButton>
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.22 }}
        >
          <div className="lead">
            I built this site as a clean portfolio to present my work in a consistent and professional
            format. The component-based structure makes it easy to add projects, polish the UI, and
            keep everything responsive across devices.
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im1} alt="Portfolio preview" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Design + Structure</MainHeading2>
              <div className="para">
                Built with reusable UI primitives (Container/Panel/Headings) and consistent spacing so
                every page feels cohesive. This makes future updates faster and keeps the whole site
                feeling “one brand”.
              </div>
            </div>
          </div>

          <div className="bottomActions">
            <BackLink className="backPill" to="/projects">
              ← Back to Projects
            </BackLink>
          </div>
        </motion.div>

        <style>{`
          .topActions{
            display:flex;
            justify-content: space-between;
            align-items:center;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 6px;
          }
          .bottomActions{
            display:flex;
            justify-content: center;
            align-items:center;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 18px;
          }
          .btnLink{ text-decoration:none; }
          .backPill{
            display:inline-flex;
            align-items:center;
            gap:8px;
            padding: 10px 14px;
            border-radius: 999px;
            border: 1px solid rgba(15,23,42,0.12);
            background: rgba(247,248,251,0.8);
            color: rgba(15,23,42,0.85);
            font-weight: 900;
            text-decoration:none;
          }
          .backPill:hover{
            background: white;
            box-shadow: 0 10px 24px rgba(2,8,23,0.06);
          }
          .lead{
            max-width: 980px;
            margin: 10px auto;
            text-align: center;
            color: rgba(15,23,42,0.72);
            font-weight: 750;
            line-height: 1.75;
          }
          .section{
            margin-top: 18px;
            display:grid;
            grid-template-columns: 320px 1fr;
            gap: 16px;
            align-items: start;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid rgba(15,23,42,0.08);
            background: rgba(255,255,255,0.75);
          }
          .imgWrap{
            border-radius: 14px;
            border: 1px solid rgba(15,23,42,0.10);
            background: rgba(247,248,251,0.7);
            padding: 10px;
            display:flex;
            align-items:center;
            justify-content:center;
            overflow:hidden;
          }
          .img{
            width: 100%;
            max-width: 300px;
            height: auto;
            border-radius: 12px;
          }
          .para{
            color: rgba(15,23,42,0.72);
            font-weight: 750;
            line-height: 1.75;
            margin-top: 8px;
          }
          @media (max-width: 900px){
            .section{ grid-template-columns: 1fr; }
            .lead{ text-align: left; }
          }
        `}</style>
      </Panel>
    </Container>
  );
}
