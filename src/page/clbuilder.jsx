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

import im1 from "../assets/clbuilder.png";

export default function CLbuilder() {
  const GITHUB_URL = "https://github.com/nathansivalingam/cover-letter-builder";
  const WEBSITE_URL = "https://cover-letter-builder-2pc6.vercel.app";

  return (
    <Container>
      <div className="pageWrap">
        <MainHeading>Cover Letter Generator Website</MainHeading>
        <Muted style={{ textAlign: "center", marginTop: 10 }}>
          React + Vite portfolio site.
        </Muted>

        <Hr />

        <div className="topActions">
          <BackLink className="backBtn" to="/projects">← Back to Projects</BackLink>

          <div className="btnRow">
            <a href={WEBSITE_URL} target="_blank" rel="noreferrer" className="btnLink">
                <InvertStyledButton type="button">Visit Page</InvertStyledButton>
            </a>
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
            Built a lightweight portfolio website with clean UI, responsive layouts, and reusable
            styled-components.
          </div>

          <div className="section">
            <div className="imgWrap">
              <BodyImage className="img" src={im1} alt="Personal Website" />
            </div>

            <div className="text">
              <MainHeading2 style={{ marginTop: 0 }}>What it Includes</MainHeading2>
              <div className="para">
                <br />
                • <b>Full-stack cover letter generation pipeline:</b> React + Vite frontend integrated with a serverless FastAPI backend deployed on AWS, enabling users to upload resumes and generate tailored cover letters on demand.
                <br />
                • <b>Serverless backend architecture (AWS):</b> Backend deployed using AWS SAM with API Gateway and Lambda, providing a scalable, cost-efficient API for PDF generation without persistent servers or storage.
                <br />
                • <b>Multipart file upload & API integration:</b> Secure handling of PDF resume uploads and job descriptions via FormData, with asynchronous API calls and robust error handling.
                <br />
                • <b>Dynamic PDF generation & client-side preview:</b> Generated PDFs are returned from the backend and rendered client-side using pdfjs-dist, converting pages to images for an in-browser preview before download.
                <br />
                • <b>Modern frontend architecture (React + Vite):</b> Component-based UI built with React hooks (useState, useEffect) and Vite for fast development, optimized builds, and clean state management.
                <br />
                • <b>Responsive UI & UX feedback states:</b> Clean, responsive layout with loading indicators, disabled states, and real-time feedback during generation and preview rendering.
                <br />
                • <b>Production-ready deployment workflow:</b> Frontend deployed on Vercel with environment-based configuration, preview deployments, and CORS-safe integration with the AWS backend.
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
