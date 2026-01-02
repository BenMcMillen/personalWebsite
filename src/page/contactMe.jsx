import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  MainHeading,
  MainHeading2,
  Muted,
  Hr,
  StyledButton,
  InvertStyledButton,
} from "../styles/styledComponents";

/* ========== Icons ========== */

const PhoneIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      fill="currentColor"
      d="M6.6 10.8c1.4 2.6 3.6 4.8 6.2 6.2l2.1-2.1c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.9.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.3 21 3 13.7 3 4c0-.6.4-1 1-1h3.6c.6 0 1 .4 1 1 0 1.4.2 2.7.6 3.9.1.4 0 .8-.3 1.1L6.6 10.8Z"
    />
  </svg>
);

const MailIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      fill="currentColor"
      d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-11Zm2.3-.5 5.3 4.1c.3.2.7.2 1 0L18 6H6.3Z"
    />
  </svg>
);

const PinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      fill="currentColor"
      d="M12 22s7-4.6 7-11a7 7 0 1 0-14 0c0 6.4 7 11 7 11Zm0-9.2a2.2 2.2 0 1 1 0-4.4 2.2 2.2 0 0 1 0 4.4Z"
    />
  </svg>
);

/* ========== Page ========== */

export default function ContactMe() {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xdakeqen";

  const EMAIL = "benmcmillen12@gmail.com";
  const PHONE = "+61 401 146 034";
  const LOCATION = "Baulkham Hills, Sydney, NSW, Australia";

  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {}
  };

  return (
    <Container>
      <MainHeading>Contact</MainHeading>
      <Muted style={{ textAlign: "center", marginTop: 10 }}>
        Send me a message and it’ll go straight to my inbox.
      </Muted>

      <Hr />

      <motion.div
        className="grid"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
      >
        {/* LEFT — FORM */}
        <div className="formWrap">
          <MainHeading2>Let’s work together</MainHeading2>
          <Muted>Feel free to drop me a message anytime.</Muted>

          <form onSubmit={onSubmit} className="form">
            <label>
              Your name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="e.g. Nathan Morgan"
                required
              />
            </label>

            <label>
              Your email
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                placeholder="e.g. nathan@email.com"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="What would you like to chat about?"
                required
              />
            </label>

            <div className="actions">
              <StyledButton type="submit">
                {status === "sending" ? "Sending..." : "Send Message"}
              </StyledButton>
              <InvertStyledButton
                type="button"
                onClick={() => setForm({ name: "", email: "", message: "" })}
              >
                Clear
              </InvertStyledButton>
            </div>

            {status === "success" && (
              <div className="success">Message sent — I’ll reply soon.</div>
            )}
            {status === "error" && (
              <div className="error">
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>

        {/* RIGHT — DETAILS */}
        <div className="details">
          <MainHeading2>Details</MainHeading2>

          <div className="info">
            <PhoneIcon />
            <div>
              <div className="label">Phone</div>
              <div>{PHONE}</div>
            </div>
          </div>

          <div className="info">
            <MailIcon />
            <div>
              <div className="label">Email</div>
              <div className="emailRow">
                <span>{EMAIL}</span>
                <button onClick={copyEmail}>Copy</button>
              </div>
            </div>
          </div>

          <div className="info">
            <PinIcon />
            <div>
              <div className="label">Location</div>
              <div>{LOCATION}</div>
            </div>
          </div>

          <Muted style={{ marginTop: 12 }}>
            I usually respond within a couple of days.
          </Muted>
        </div>
      </motion.div>

      <style>{`
        .grid{
          display:grid;
          grid-template-columns: 1.2fr 0.9fr;
          gap: 36px;
        }

        .formWrap{
          background: rgba(255,255,255,0.75);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 10px 24px rgba(2,8,23,0.06);
        }

        .form{
          display:grid;
          gap:12px;
          margin-top:12px;
        }

        label{
          display:grid;
          gap:6px;
          font-weight:700;
        }

        input, textarea{
          border-radius:12px;
          border:1px solid rgba(15,23,42,0.12);
          padding:10px 12px;
          background: rgba(247,248,251,0.7);
        }

        textarea{ min-height:140px; }

        .actions{
          display:flex;
          gap:10px;
          margin-top:4px;
        }

        .details{
          display:grid;
          gap:16px;
          align-content:start;
        }

        .info{
          display:grid;
          grid-template-columns: 22px 1fr;
          gap:12px;
          align-items:start;
        }

        .label{
          font-weight:800;
          color: rgba(15,23,42,0.75);
        }

        .emailRow{
          display:flex;
          gap:10px;
          align-items:center;
        }

        .emailRow button{
          border-radius:999px;
          border:1px solid rgba(15,23,42,0.12);
          padding:6px 12px;
          background:white;
          font-weight:800;
          cursor:pointer;
        }

        .success{
          margin-top:8px;
          padding:10px 12px;
          border-radius:12px;
          background: rgba(34,197,94,0.12);
        }

        .error{
          margin-top:8px;
          padding:10px 12px;
          border-radius:12px;
          background: rgba(239,68,68,0.12);
        }

        @media (max-width:900px){
          .grid{ grid-template-columns:1fr; }
        }
      `}</style>
    </Container>
  );
}
