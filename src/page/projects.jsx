import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Container,
  MainHeading,
  MainHeading2,
  Muted,
  ProjectBox,
  SquareImage,
  IconButton,
  Hr,
} from "../styles/styledComponents";

import im1 from "../assets/handGestureRobot.png";
import im2 from "../assets/sim.png";
import im3 from "../assets/mergeSortVisHalf.png";
import im4 from "../assets/mazeGettingSolved.png";
import im5 from "../assets/webpage.png";
import im6 from "../assets/Thesis1.png";

const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.41.21 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.18.59.69.48A10.3 10.3 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
    />
  </svg>
);

const Pill = ({ children }) => (
  <span
    style={{
      display: "inline-flex",
      alignItems: "center",
      padding: "6px 10px",
      borderRadius: 999,
      border: "1px solid rgba(15,23,42,0.10)",
      background: "rgba(247,248,251,0.8)",
      color: "rgba(15,23,42,0.70)",
      fontWeight: 900,
      fontSize: 12,
      whiteSpace: "nowrap",
    }}
  >
    {children}
  </span>
);

export default function Projects() {
  const navigate = useNavigate();

  const items = [
    {
      title: "Harvester (Thesis)",
      desc: "Designed & simulated a vortex-induced vibration piezoelectric energy harvester for underwater ROVs (ANSYS + structural/CFD workflow).",
      image: im6,
      route: "/projects/thesis",
      github: "https://github.com/BenMcMillen/Undergraduate-Thesis",
      category: "Mechatronics",
    },
    {
      title: "Hand Gesture Robot",
      desc: "Arduino + OpenCV hand-gesture control system.",
      image: im1,
      route: "/projects/handgesturerobot",
      github: "https://github.com/BenMcMillen/HandGestureRobot",
      category: "Mechatronics",
    },
    {
      title: "Robot Implementation",
      desc: "C++ OOP + integration work on a robot project.",
      image: im2,
      route: "/projects/robotimplementation",
      github: "",
      category: "Mechatronics",
    },
    {
      title: "Merge Sort Visualizer",
      desc: "Interactive merge sort visualiser.",
      image: im3,
      route: "/projects/mergesortvis",
      github: "https://github.com/BenMcMillen/Merge-Sort-Visualizer",
      category: "Computer Science",
    },
    {
      title: "Maze Solver",
      desc: "Maze solver using search algorithms.",
      image: im4,
      route: "/projects/mazesolver",
      github: "https://github.com/BenMcMillen/Maze-Solver",
      category: "Computer Science",
    },
    {
      title: "This Website",
      desc: "React + Vite portfolio site.",
      image: im5,
      route: "/projects/webpage",
      github: "https://github.com/BenMcMillen/personalWebsite",
      category: "Computer Science",
    },
  ];

  const [filter, setFilter] = useState("All Projects");

  const filtered = useMemo(() => {
    if (filter === "All Projects") return items;
    return items.filter((p) => p.category === filter);
  }, [filter, items]);

  return (
    <Container>
      {/* No outer Panel – just a clean content wrapper */}
      <div className="pageWrap">
        <div className="headerBlock">
          <MainHeading>Projects</MainHeading>
          <Muted style={{ textAlign: "center", marginTop: 10 }}>
            Click a card for details. Use the GitHub icon to open the repo.
          </Muted>

          <div className="toolbar">
            <div className="toolbarLabel">Filter</div>
            <div className="seg">
              {["All Projects", "Mechatronics", "Computer Science"].map((k) => (
                <button
                  key={k}
                  className={`segBtn ${filter === k ? "active" : ""}`}
                  onClick={() => setFilter(k)}
                  type="button"
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <Hr />
        </div>

        <div className="cards">
          {filtered.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.22, delay: Math.min(idx * 0.04, 0.16) }}
            >
              <ProjectBox onClick={() => navigate(p.route)} className="projectBox">
                <div className="cardRow">
                  {/* Image */}
                  <div className="media">
                    <SquareImage className="mediaImg" src={p.image} alt={p.title} />
                  </div>

                  {/* Content */}
                  <div className="content">
                    <div className="titleRow">
                      <MainHeading2 className="title" style={{ marginBottom: 0 }}>
                        {p.title}
                      </MainHeading2>
                      <Pill>{p.category}</Pill>
                    </div>

                    <div className="desc">{p.desc}</div>

                    <div className="actionsRow" onClick={(e) => e.stopPropagation()}>
                      {p.github ? (
                        <IconButton
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          title="Open GitHub repo"
                        >
                          <GitHubIcon />
                        </IconButton>
                      ) : (
                        <div className="privatePill" title="Private repo">
                          Private
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ProjectBox>
            </motion.div>
          ))}
        </div>

        <style>{`
          /* =========================
            PAGE WRAPPER (replaces Panel)
          ========================= */
          .pageWrap{
            width: min(1080px, calc(100% - 48px));
            margin: 0 auto;
            padding: 34px 0 42px;
          }

          /* keep heading area visually grouped without boxing it in */
          .headerBlock{
            margin-bottom: 14px;
          }

          .cards{
            display: grid;
            gap: 14px;
          }

          /* =========================
            FILTER TOOLBAR
          ========================= */
          .toolbar{
            display:flex;
            justify-content: space-between;
            align-items:center;
            gap: 12px;
            flex-wrap: wrap;
            margin-top: 14px;
          }

          .toolbarLabel{
            font-weight: 900;
            color: rgba(15,23,42,0.75);
          }

          .seg{
            display:flex;
            gap: 8px;
            flex-wrap: wrap;
            background: rgba(247,248,251,0.85);
            border: 1px solid rgba(15,23,42,0.10);
            padding: 6px;
            border-radius: 16px;
          }

          .segBtn{
            border: 0;
            background: transparent;
            padding: 8px 14px;
            border-radius: 12px;
            font-weight: 900;
            font-size: 14px;
            color: rgba(15,23,42,0.70);
            cursor: pointer;
            white-space: nowrap;
            transition: background 0.12s ease, color 0.12s ease, box-shadow 0.12s ease;
          }

          .segBtn:hover{
            background: rgba(255,255,255,0.65);
          }

          .segBtn.active{
            background: white;
            color: rgba(15,23,42,0.92);
            box-shadow: 0 10px 24px rgba(2,8,23,0.06);
          }

          /* =========================
            PROJECT CARDS
          ========================= */
          .projectBox{
            max-height: none !important;
            min-height: 0 !important;
            padding: 14px !important;
          }

          .cardRow{
            display:grid;
            grid-template-columns: 220px 1fr;
            gap: 14px;
            align-items: center;
            width: 100%;
          }

          .media{
            width: 100%;
          }

          .mediaImg{
            width: 100% !important;
            height: 160px !important;
            display: block !important;
            border-radius: 16px !important;
            object-fit: cover !important;
            border: 1px solid rgba(15,23,42,0.10) !important;
            background: rgba(247,248,251,0.6);
          }

          .content{
            min-width: 0;
            display:flex;
            flex-direction: column;
            gap: 8px;
          }

          .titleRow{
            display:flex;
            align-items: center;
            justify-content: space-between;
            gap: 10px;
            flex-wrap: wrap;
          }

          .title{
            font-size: 1.45em;
            line-height: 1.15;
          }

          .desc{
            color: rgba(15,23,42,0.70);
            line-height: 1.6;
            font-weight: 700;
          }

          .actionsRow{
            display:flex;
            justify-content: flex-end;
            margin-top: 2px;
          }

          .privatePill{
            border-radius: 999px;
            border: 1px solid rgba(15,23,42,0.10);
            background: rgba(247,248,251,0.85);
            color: rgba(15,23,42,0.65);
            font-weight: 900;
            font-size: 12px;
            padding: 10px 12px;
          }

          /* =========================
            MOBILE FIXES
          ========================= */
          @media (max-width: 650px){
            .pageWrap{
              width: calc(100% - 32px);
              padding: 22px 0 34px;
            }

            .toolbar{
              align-items: flex-start;
            }

            .seg{
              width: 100%;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 8px;
              padding: 10px;
              border-radius: 16px;
            }

            .segBtn{
              width: 100%;
              text-align: center;
              padding: 10px;
              font-size: 13px;
              white-space: normal;
              line-height: 1.2;
            }

            .segBtn:first-child{
              grid-column: 1 / -1;
            }

            .cardRow{
              grid-template-columns: 1fr;
              align-items: stretch;
            }

            .mediaImg{
              height: 180px !important;
            }

            .actionsRow{
              justify-content: flex-start;
            }

            .title{
              font-size: 1.25em;
            }
          }
        `}</style>
      </div>
    </Container>
  );
}
