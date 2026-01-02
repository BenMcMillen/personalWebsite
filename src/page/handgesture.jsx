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

import im1 from "../assets/handGestureRobot.png";
import im2 from "../assets/handGesturerobotTransmitter.png";
import im3 from "../assets/ExamplehandMovement.png";

export default function HandGestureRobot() {
  const GITHUB_URL = "https://github.com/BenMcMillen/HandGestureRobot";

  return (
    <Container>
      <Panel>
        <MainHeading>Hand Gesture Robot</MainHeading>
        <Muted style={{ textAlign: "center", marginTop: 10 }}>
          Arduino + Python + OpenCV gesture recognition to control a robot in real time.
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
            This project involves a hand gesture-controlled robot, using Arduino for the hardware
            interface (motors, receiver, motor controller) and Python/OpenCV for real-time gesture
            recognition. Gestures are translated into commands (Forward/Back/Left/Right/Stop) and
            transmitted wirelessly to drive the robot.
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im1} alt="Robot main body" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Main Body</MainHeading2>
              <div className="para">
                The main body uses an Arduino UNO, motor controller, receiver, and motors. It receives
                wireless commands from the transmitter and drives the motors to execute movements
                reliably in real time.
              </div>
            </div>
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im2} alt="Transmitter" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Transmitter</MainHeading2>
              <div className="para">
                A second Arduino UNO acts as the transmitter control unit. It converts the gesture
                recognition output into discrete robot commands and sends them wirelessly to the
                receiver on the robot.
              </div>
            </div>
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im3} alt="Gesture recognition example" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Hand Gesture AI</MainHeading2>
              <div className="para">
                Python + OpenCV interprets hand gestures captured by a camera. The pipeline detects
                the gesture in real time and maps it to a control message sent to the transmitter,
                creating an intuitive hands-free interface for robot control.
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
