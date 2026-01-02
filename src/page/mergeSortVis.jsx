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

import im1 from "../assets/UnsolvedmergeSort.png";
import im2 from "../assets/mergeSortVisHalf.png";
import im3 from "../assets/solvedMergeSort.png";

export default function MergeSortVis() {
  const GITHUB_URL = "https://github.com/BenMcMillen/Merge-Sort-Visualizer";

  return (
    <Container>
      <Panel>
        <MainHeading>Merge Sort Visualizer</MainHeading>
        <Muted style={{ textAlign: "center", marginTop: 10 }}>
          Python visualiser showing merge sort step-by-step on randomly generated data.
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
            Generates 100 random values and animates merge sort as it partitions and merges subarrays.
            Active elements are highlighted during the process, then the final sorted result is shown.
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im1} alt="Unsorted generation" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Generation</MainHeading2>
              <div className="para">
                Users can generate a fresh dataset (1–100) and see the bars appear immediately in an
                unsorted state. This makes it easy to rerun and observe different sorting behaviours.
              </div>
            </div>
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im2} alt="Sorting in progress" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Solving</MainHeading2>
              <div className="para">
                When sorting begins, the algorithm highlights the currently active region as it works
                through the merge steps. This gives a clean visual intuition of divide-and-conquer.
              </div>
            </div>
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im3} alt="Sorted result" />
            </div>
            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>Completed</MainHeading2>
              <div className="para">
                Once complete, the bars switch to the finished colour state, indicating the dataset
                is fully sorted. Users can then regenerate a new dataset and repeat.
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
