import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Panel,
  MainHeading,
  Muted,
  Hr,
  MainHeading2,
  BackLink,
  StyledButton,
  InvertStyledButton,
} from "../styles/styledComponents";

const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.58 2 12.25c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.1-1.5-1.1-1.5-.9-.64.07-.63.07-.63 1 .07 1.53 1.07 1.53 1.07.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.32 2.74-1.05 2.74-1.05.56 1.41.21 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.95.68 1.92 0 1.38-.01 2.5-.01 2.84 0 .26.18.59.69.48A10.3 10.3 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"
    />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fill="currentColor"
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.33V9h3.41v1.56h.05c.47-.9 1.63-1.86 3.36-1.86 3.59 0 4.25 2.36 4.25 5.43v6.32ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
    />
  </svg>
);

export default function ContactMe() {
  //  your Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdakeqen";

  //  fill these in
  const EMAIL = "benmcmillen12@gmail.com";
  const LINKEDIN_URL = "https://www.linkedin.com/in/ben-mcmillen-b587b7227/";
  const GITHUB_URL = "https://github.com/BenMcMillen";

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      // optional small feedback: reuse status without clobbering success/error
      // (keeping it simple: no extra state)
    } catch (e) {
      // ignore
    }
  };

  return (
    <Container>
      <Panel>
        <MainHeading>Contact</MainHeading>
        <Muted style={{ textAlign: "center", marginTop: 10 }}>
          Send me a message and it’ll go straight to my inbox.
        </Muted>

        <Hr />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.22 }}
          className="grid"
        >
          {/* LEFT: FORM */}
          <div className="card">
            <MainHeading2 style={{ marginTop: 0 }}>Send a message</MainHeading2>

            <form onSubmit={onSubmit} className="form">
              <label className="label">
                Your name
                <input
                  className="input"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="e.g. Nathan Morgan"
                  required
                />
              </label>

              <label className="label">
                Your email
                <input
                  className="input"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="e.g. Nathan@email.com"
                  required
                />
              </label>

              <label className="label">
                Message
                <textarea
                  className="textarea"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="What would you like to chat about?"
                  required
                />
              </label>

              <div className="actions">
                <StyledButton type="submit" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Send Message"}
                </StyledButton>

                <InvertStyledButton
                  type="button"
                  onClick={() => setForm({ name: "", email: "", message: "" })}
                  disabled={status === "sending"}
                >
                  Clear
                </InvertStyledButton>
              </div>

              {status === "success" && (
                <div className="success">Sent! I’ll reply as soon as I can.</div>
              )}
              {status === "error" && (
                <div className="error">
                  Something went wrong. Please try again, or message me on LinkedIn.
                </div>
              )}

              {/* Optional honeypot */}
              <input type="text" name="_gotcha" style={{ display: "none" }} />
            </form>
          </div>

          {/* RIGHT: COMPACT DETAILS */}
          <div className="card compact">
            <MainHeading2 style={{ marginTop: 0 }}>Details</MainHeading2>

            {/* Email */}
            <div className="detailRow">
                <div className="detailLabel">Email</div>
                <div className="detailRight">
                <a
                    className="detailLink"
                    href={`mailto:${EMAIL}`}
                    title="Send email"
                >
                    
                </a>

                <button
                    className="pillBtn"
                    type="button"
                    onClick={copyEmail}
                    title="Copy email"
                    aria-label="Copy email"
                >
                    Copy
                </button>
                </div>
            </div>

            {/* LinkedIn */}
            <div className="detailRow">
                <div className="detailLabel">LinkedIn</div>
                <div className="detailRight">
                <a
                    className="pillBtn iconBtn"
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open LinkedIn profile"
                    title="Open LinkedIn"
                >
                    <LinkedInIcon size={18} />
                </a>
                </div>
            </div>

            {/* GitHub */}
            <div className="detailRow">
                <div className="detailLabel">GitHub</div>
                <div className="detailRight">
                <a
                    className="pillBtn iconBtn"
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open GitHub profile"
                    title="Open GitHub"
                >
                    <GitHubIcon size={18} />
                </a>
                </div>
            </div>

            <Muted style={{ marginTop: 10, lineHeight: 1.5 }}>
                I usually respond within a couple of days.
            </Muted>
            </div>

        </motion.div>

        <style>{`
            /* Layout */
            .grid{
                display: grid;
                grid-template-columns: 1.2fr 0.9fr;
                gap: 16px;
                margin-top: 8px;

                width: 100%;
                max-width: 100%;
            }

            .card{
                background: white;
                border: 1px solid rgba(15,23,42,0.10);
                border-radius: 16px;
                padding: 16px;
                box-shadow: 0 10px 24px rgba(2,8,23,0.06);

                width: 100%;
                max-width: 100%;
                min-width: 0;        /* important for grid overflow */
                overflow: hidden;    /* prevents sideways scroll */
            }

            /* Form */
            .form{
                display: grid;
                gap: 12px;
                margin-top: 12px;
                min-width: 0;
            }

            .label{
                display: grid;
                gap: 6px;
                font-weight: 800;
                color: rgba(15,23,42,0.75);
                min-width: 0;
            }

            .input, .textarea{
                width: 100%;
                max-width: 100%;
                box-sizing: border-box;

                border-radius: 12px;
                border: 1px solid rgba(15,23,42,0.12);
                padding: 10px 12px;
                font-weight: 700;
                color: rgba(15,23,42,0.85);
                background: rgba(247,248,251,0.6);
                outline: none;
            }

            .input:focus, .textarea:focus{
                border-color: #2563eb;
                box-shadow: 0 0 0 3px rgba(37,99,235,0.12);
                background: white;
            }

            .textarea{
                min-height: 140px;
                resize: vertical;
            }

            .actions{
                display: flex;
                gap: 10px;
                flex-wrap: wrap;
                width: 100%;
                min-width: 0;
                margin-top: 4px;
            }

            /* Status banners */
            .success{
                margin-top: 6px;
                padding: 10px 12px;
                border-radius: 12px;
                background: rgba(34,197,94,0.10);
                border: 1px solid rgba(34,197,94,0.22);
                color: rgba(22,101,52,1);
                font-weight: 800;
                overflow-wrap: anywhere;
            }

            .error{
                margin-top: 6px;
                padding: 10px 12px;
                border-radius: 12px;
                background: rgba(239,68,68,0.08);
                border: 1px solid rgba(239,68,68,0.18);
                color: rgba(127,29,29,1);
                font-weight: 800;
                overflow-wrap: anywhere;
            }

            /* -------------------------
                DETAILS PANEL (right side)
                ------------------------- */
            .details{
                display: grid;
                gap: 12px;
                margin-top: 12px;
                min-width: 0;
            }

            .detailRow{
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 10px;

                padding: 12px 12px;
                border-radius: 14px;
                border: 1px solid rgba(15,23,42,0.10);
                background: rgba(247,248,251,0.65);
                min-width: 0;
                margin: 10px 0px;
            }

            .detailLabel{
                font-weight: 900;
                color: rgba(15,23,42,0.70);
                min-width: 92px;
            }

            .detailValue{
                flex: 1;
                min-width: 0;
                font-weight: 900;
                color: rgba(15,23,42,0.82);
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap; /* keeps it clean */
            }

            .pillBtn{
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 10px 12px;
                border-radius: 999px;
                border: 1px solid rgba(15,23,42,0.12);
                background: white;
                color: rgba(15,23,42,0.85);
                font-weight: 900;
                text-decoration: none;
                cursor: pointer;
                white-space: nowrap;
                transition: box-shadow 0.15s ease, transform 0.15s ease;
            }

            .pillBtn:hover{
                box-shadow: 0 10px 24px rgba(2,8,23,0.08);
                transform: translateY(-1px);
            }

            .note{
                margin-top: 4px;
                color: rgba(15,23,42,0.60);
                font-weight: 700;
                line-height: 1.6;
            }

            /* Mobile */
            @media (max-width: 850px){
                .grid{
                grid-template-columns: 1fr;
                }
            }

            @media (max-width: 480px){
                .detailLabel{
                min-width: 78px;
                }
                .pillBtn{
                padding: 9px 10px;
                font-size: 13px;
                }
            }
            `}</style>


      </Panel>
    </Container>
  );
}
