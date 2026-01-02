import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  MainHeading,
  MainHeading2,
  Muted,
  Hr,
  BackLink,
  InvertStyledButton,
  BodyImage,
} from "../styles/styledComponents";

import im1 from "../assets/Parkpilot1.png";
import im2 from "../assets/Parkpilot2.png";
import im3 from "../assets/Parkpilot3.png";

export default function ParkPilot() {
  const GITHUB_URL = "https://github.com/unsw-cse-comp99-3900/capstone-project-25t3-3900-f11a-date";

  return (
    <Container>
      <div className="pageWrap">
        <MainHeading>Park Pilot Mobile App</MainHeading>
        <Muted style={{ textAlign: "center", marginTop: 10 }}>
          Smart parking + carbon tracking app with driver & parking-operator workflows.
          Built as a full-stack team project (React Native + backend API).
        </Muted>

        <Hr />

        <div className="topActions">
          <BackLink className="backBtn" to="/projects">← Back to Projects</BackLink>

          <div className="btnRow">
            {GITHUB_URL ? (
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btnLink">
                <InvertStyledButton type="button">View GitHub</InvertStyledButton>
              </a>
            ) : null}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.22 }}
        >
          <div className="lead">
            ParkPilot is a mobile-first application designed to help drivers find parking and
            quantify carbon savings, while giving parking operators tools to manage lots and
            monitor usage. The focus was a clean UX, reliable navigation flow, and a structured API
            backend.
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im1} alt="Robot main body" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>What it Does</MainHeading2>
              <div className="para">
                • Driver flow: search/select lot → navigate to a chosen spot → rerouting support
                <br />
                • Carbon tracking: route-based distance → estimated savings stored against user
                <br />
                • Operator flow: view lots, monitor occupancy/usage, manage parking inventory
              </div>
            </div>
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im2} alt="Transmitter" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Tech & Implementation</MainHeading2>
              <div className="para">
                • Frontend: React Native (Expo) with reusable components + testing hooks (testIDs)
                <br />
                • Backend: REST API (FastAPI/Flask-style architecture), structured endpoints for lots,
                routes, and carbon records
                <br />
                • Data flow: AsyncStorage-based session identity → API calls → UI state updates
              </div>
            </div>
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im3} alt="Gesture recognition example" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Highlights</MainHeading2>
              <div className="para">
                • End-to-end feature shipping: UI → API integration → persisted records
                <br />
                • Clear separation of driver vs operator experiences
                <br />
                • Real-world constraints: reliability, UX clarity, and iterative improvements from feedback
              </div>
            </div>
          </div>







          <div className="bottomActions">
          </div>
        </motion.div>

        <style>{`
          .pageWrap{ max-width: 1000px; margin: 0 auto; padding-top: 40px; }
          .topActions{ display:flex; justify-content:space-between; align-items:center; gap:12px; flex-wrap:wrap; margin-top:6px; }
          .bottomActions{ display:flex; justify-content:center; margin-top:18px; }
          .btnRow{ display:flex; gap:10px; flex-wrap:wrap; }
          .btnLink{ text-decoration:none; }

          .backBtn{
            display:inline-flex; align-items:center; justify-content:center;
            height: 40px; padding: 0 14px;
            border-radius: 12px;
            border: 1px solid rgba(15,23,42,0.12);
            background: white;
            color: rgba(15,23,42,0.90);
            font-weight: 900;
            text-decoration: none !important;
            transition: transform 0.15s ease, background 0.2s ease, box-shadow 0.15s ease;
          }
          .backBtn:hover{
            transform: translateY(-1px);
            background: rgba(247,248,251,0.85);
            box-shadow: 0 10px 24px rgba(2,8,23,0.08);
            text-decoration: none !important;
          }

          .lead{
            max-width:980px; margin:10px auto; text-align:center;
            color:rgba(15,23,42,0.72); font-weight:750; line-height:1.75;
          }

          .section{
            margin-top:18px;
            display:grid; grid-template-columns:320px 1fr;
            gap:16px; align-items:start;
            padding:14px; border-radius:16px;
            border:1px solid rgba(15,23,42,0.08);
            background:rgba(255,255,255,0.75);
          }

          .imgWrap{
            border-radius:14px;
            border:1px solid rgba(15,23,42,0.10);
            background:rgba(247,248,251,0.7);
            padding:10px; display:flex; align-items:center; justify-content:center; overflow:hidden;
          }

          .img{ width:100%; max-width:300px; height:auto; border-radius:12px; }

          .para{ color:rgba(15,23,42,0.72); font-weight:750; line-height:1.75; margin-top:8px; }

          @media (max-width: 900px){
            .pageWrap{ padding-top:24px; }
            .section{ grid-template-columns: 1fr; }
            .lead{ text-align:left; }
          }
        `}</style>
      </div>
    </Container>
  );
}
