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

import im1 from "../assets/mazeGeneration.png";
import im2 from "../assets/mazeGettingSolved.png";
import im3 from "../assets/mazeSolved.png";

export default function MazeSolver() {
  const GITHUB_URL = "https://github.com/BenMcMillen/Maze-Solver";

  return (
    <Container>
      <Panel>
        <MainHeading>Maze Solver</MainHeading>
        <Muted style={{ textAlign: "center", marginTop: 10 }}>
          C program that loads user-defined mazes and solves them using BFS or DFS with visual output.
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
            Users create their own maze by writing a text file (walls as <b>#</b>, open spaces as blanks)
            and placing it in the maze folder. The program then solves it using BFS or DFS and shows the
            step-by-step search and final path.
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im1} alt="Maze creation" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Maze Creation</MainHeading2>
              <div className="para">
                Mazes are defined by a simple text format, so you can rapidly create new layouts and
                test different levels of complexity without changing any code.
              </div>
            </div>
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im2} alt="Maze being solved" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Maze Being Solved</MainHeading2>
              <div className="para">
                The solver demonstrates either BFS or DFS as it explores nodes and searches for a path.
                This provides an intuitive view into how the algorithms differ in exploration strategy.
              </div>
            </div>
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im3} alt="Solved maze" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Solved Output</MainHeading2>
              <div className="para">
                Once a valid path is found, the program backtracks from the goal to the start and
                highlights the final path (e.g., gold colouring) so the result is obvious.
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
