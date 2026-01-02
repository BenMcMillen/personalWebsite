import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  MainHeading,
  MainHeading2,
  Muted,
  Hr,
  BackLink,
  BodyImage,
} from "../styles/styledComponents";


import im1 from "../assets/threads.png";
import im2 from "../assets/sim.png";

export default function RobotImplementation() {
  const GITHUB_URL = ""; // private

  return (
    <Container>
      <div className="pageWrap">
        <MainHeading>Robot Implementation</MainHeading>
        <Muted style={{ textAlign: "center", marginTop: 10 }}>
          C++ OOP + integration work on a robot project.
        </Muted>

        <Hr />

        <div className="topActions">
          <BackLink className="backBtn" to="/projects">← Back to Projects</BackLink>

          {GITHUB_URL ? (
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btnLink">
              <div className="ghostBtn">View GitHub</div>
            </a>
          ) : (
            <div className="privatePill" title="Private repo">Private repo</div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.22 }}
        >
          <div className="lead">
            A robotic car system built for university coursework, demonstrating modular C++ design,
            embedded integration, and concurrency. The project includes threading/heartbeat monitoring,
            multiple subsystems (control, GNSS, sensors), and a clean multi-file architecture.
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im1} alt="Threading architecture" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Multi-module + Threaded System</MainHeading2>
              <div className="para">
                Implemented core robot functionality across multiple modules (vehicle control, laser,
                GNSS, controller logic, thread management). Thread heartbeat monitoring helped ensure
                robustness and responsiveness.
              </div>
            </div>
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im2} alt="Simulator and physical robot" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Simulator + Physical Robot</MainHeading2>
              <div className="para">
                Verified behaviour in both the provided simulator and on the physical robot platform.
                The implementation was strong enough that it helped support tutoring the course in a
                later trimester.
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

          .privatePill{
            height: 40px;
            display:inline-flex;
            align-items:center;
            padding: 0 14px;
            border-radius: 12px;
            border: 1px solid rgba(15,23,42,0.12);
            background: rgba(247,248,251,0.8);
            color: rgba(15,23,42,0.72);
            font-weight: 900;
            font-size: 12px;
          }

          .ghostBtn{
            height: 40px;
            display:inline-flex;
            align-items:center;
            padding: 0 14px;
            border-radius: 12px;
            border: 1px solid rgba(15,23,42,0.12);
            background: white;
            color: rgba(15,23,42,0.85);
            font-weight: 900;
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





          