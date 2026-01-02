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
  InvertStyledButton,
  StyledButton,
  BodyImage,
} from "../styles/styledComponents";

// Swap these to your real images if you want
import im1 from "../assets/Thesis1.png"; // placeholder
// import im2 from "../assets/your_thesis_image_2.png";
// import im3 from "../assets/your_thesis_image_3.png";

export default function Thesis() {
  const PDF_URL = ""; // optional: link to thesis PDF hosted somewhere
  const GITHUB_URL = "https://github.com/BenMcMillen/Undergraduate-Thesis"; 

  return (
    <Container>
      <Panel>
        <MainHeading>VIV Piezoelectric Energy Harvester (Thesis)</MainHeading>
        <Muted style={{ textAlign: "center", marginTop: 10 }}>
          Mechatronics Engineering Undergraduate Thesis: Vortex-induced vibration energy harvesting for underwater ROVs using ANSYS simulation + design iteration.
        </Muted>

        <Hr />

        <div className="topActions">
          <BackLink className="backPill" to="/projects">
            ← Back to Projects
          </BackLink>

          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {PDF_URL ? (
              <a href={PDF_URL} target="_blank" rel="noreferrer" className="btnLink">
                <StyledButton type="button">Read Thesis</StyledButton>
              </a>
            ) : null}

            {GITHUB_URL ? (
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="btnLink">
                <InvertStyledButton type="button">View GitHub</InvertStyledButton>
              </a>
            ) : (
              <div className="privatePill" title="No public repo">
                No public repo
              </div>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.22 }}
        >
          <div className="lead">
            Designed an underwater piezoelectric energy harvesting concept for an ROV using vortex-induced vibrations (VIV).
            The work focused on lightweight bluff-body/cantilever configurations, modal alignment with shedding frequency,
            and practical packaging constraints inside the vehicle.
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im1} alt="Thesis simulation / concept" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>What I Designed / Simulated</MainHeading2>
              <div className="para">
                • Multi-harvester concept with independent piezo sources<br />
                • Material + geometry trade-offs (lightweight bluff body, cantilever selection)<br />
                • Designed to minimise interference with ROV motion while extracting usable energy
              </div>
            </div>
          </div>

          <div className="section">
            <div className="text" style={{ gridColumn: "1 / -1" }}>
              <MainHeading2 style={{ marginTop: 0 }}>Simulation Focus</MainHeading2>
              <div className="para">
                • ANSYS-based structural workflow to identify natural frequencies and deformation modes<br />
                • Targeting resonance alignment with VIV shedding frequency for stronger response<br />
                • Voltage/power estimation from strain/deflection and piezo properties (AlN d31-mode)
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

          .privatePill{
            padding: 10px 14px;
            border-radius: 999px;
            border: 1px solid rgba(15,23,42,0.12);
            background: rgba(247,248,251,0.8);
            color: rgba(15,23,42,0.72);
            font-weight: 900;
            font-size: 12px;
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
