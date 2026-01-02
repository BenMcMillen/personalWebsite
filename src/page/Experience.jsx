import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Panel,
  MainHeading,
  MainHeading2,
  Muted,
  Hr,
  SmallMuted,
} from "../styles/styledComponents";

import im1 from "../assets/EAlogo.png";
import im2 from "../assets/UNSW-1-300x300.png";
import im3 from "../assets/images.png";

export default function Experience() {
  const items = [
    {
      title: "Embedded Systems Engineer (Intern)",
      company: "Endeavour Aerospace",
      start: "Nov 2024",
      end: "June 2025",
      image: im1,
      description:
        "Worked on the design and development of embedded systems for aerospace applications. Gained hands-on experience with low-level programming and real-time systems, contributing to key projects and collaborating with engineers to enhance system performance.",
    },
    {
      title: "Casual Academic",
      company: "UNSW",
      start: "June 2024",
      end: "Present",
      image: im2,
      description:
        "Led and presented in lab sessions and workshops, demonstrating mechatronics and computer science concepts through practical examples. Provided one-on-one support, and delivered content to groups ranging from small labs to larger workshop settings. Demonstrated for MTRN3500, MMAN2300, and DESN2000.",
    },
    {
      title: "High School Mathematics Tutor",
      company: "Private",
      start: "Jan 2021",
      end: "Present",
      image: im3,
      description:
        "Helped students build a deep understanding of mathematics and improve grades. Tailored lessons to individual needs across topics from algebra to calculus, and taught structured problem-solving approaches.",
    },
  ];

  return (
    <Container>
      <Panel>
        <MainHeading>Experience</MainHeading>
        <Muted style={{ textAlign: "center", marginTop: 10 }}>
          A quick snapshot of my work experience.
        </Muted>

        <Hr />

        <div className="timeline">
          {items.map((it, idx) => (
            <motion.div
              key={`${it.company}-${it.title}`}
              className="card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.22, delay: Math.min(idx * 0.05, 0.2) }}
            >
              <div className="grid">
                {/* Left: consistent logo box */}
                <div className="logoBox">
                  <img className="logoImg" src={it.image} alt={`${it.company} logo`} />
                </div>

                {/* Right: content */}
                <div className="content">
                  <div className="headerRow">
                    <div className="titles">
                      {/* Job title first */}
                      <MainHeading2 style={{ margin: 0 }}>{it.title}</MainHeading2>
                      {/* Company second */}
                      <div className="company">{it.company}</div>
                    </div>

                    {/* Dates on the right */}
                    <div className="dates">
                      <SmallMuted style={{ margin: 0 }}>
                        {it.start} — {it.end}
                      </SmallMuted>
                    </div>
                  </div>

                  <p className="desc">{it.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <style>{`
          .timeline{
            display: grid;
            gap: 14px;
            margin-top: 6px;
          }

          .card{
            background: white;
            border: 1px solid rgba(15,23,42,0.10);
            border-radius: 16px;
            padding: 16px;
            box-shadow: 0 10px 24px rgba(2,8,23,0.06);
          }

          .grid{
            display: grid;
            grid-template-columns: 220px 1fr;
            gap: 16px;
            align-items: start;
          }

          /* Logo container is always the same size */
          .logoBox{
            width: 220px;
            height: 160px;
            border-radius: 16px;
            border: 1px solid rgba(15,23,42,0.10);
            background: rgba(247,248,251,0.75);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 14px;
          }

          /* Logos scale consistently but keep aspect ratio */
          .logoImg{
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
            filter: saturate(0.98);
          }

          .content{
            min-width: 0;
          }

          .headerRow{
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 16px;
            align-items: start;
          }


          .titles{
            display: grid;
            gap: 4px;
          }

          .company{
            font-weight: 800;
            color: rgba(15,23,42,0.72);
            letter-spacing: -0.01em;
          }

          .dates{
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid rgba(15,23,42,0.10);
            background: rgba(247,248,251,0.8);
            height: fit-content;
          }

          .desc{
            margin: 10px 0 0 0;
            color: var(--muted);
            line-height: 1.75;
          }

          @media (max-width: 820px){
            .grid{
              grid-template-columns: 1fr;
            }
            .logoBox{
              width: 100%;
              height: 140px;
            }
          }
        `}</style>
      </Panel>
    </Container>
  );
}
