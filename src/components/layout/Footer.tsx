import { useEffect, useRef, useState } from "react";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className="relative bg-[#050A15] text-white overflow-hidden border-t border-white/5"
    >
      {/* Grid background overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* LAYER 1 — SYSTEM HEADER STRIP */}
        <div className="pt-10 pb-6">
          <div className="flex flex-col gap-1">
            <span
              className="text-[10px] tracking-[0.22em] uppercase text-[#2DD4BF]"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', 'Courier New', monospace" }}
            >
              AUTONOMEX AI — SYSTEM NODE
            </span>
            <span
              className="text-[10px] tracking-[0.18em] uppercase text-white/30"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', 'Courier New', monospace" }}
            >
              TERMINAL CLOSE SEQUENCE
            </span>
          </div>
          <div className="mt-5 h-px bg-[#2DD4BF]/20 w-full" />
        </div>

        {/* LAYER 2 — MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">

          {/* LEFT COLUMN — CONTACT MODULE */}
          <div className="flex flex-col gap-6">
            <span
              className="text-[10px] tracking-[0.22em] uppercase text-white/50"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', 'Courier New', monospace" }}
            >
              CONNECT
            </span>

            <div className="flex flex-col gap-5">
              {/* Email */}
              <div
                className="flex flex-col gap-1 border-l border-[#2DD4BF]/20 pl-4"
                style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', 'Courier New', monospace" }}
              >
                <span className="text-[10px] tracking-[0.16em] uppercase text-[#2DD4BF]/70">&gt; CHANNEL: EMAIL</span>
                <span className="text-[11px] text-white/60 tracking-wide">&gt; ADDRESS: autonomexai24@gmail.com</span>
              </div>

              {/* Phone */}
              <div
                className="flex flex-col gap-1 border-l border-[#2DD4BF]/20 pl-4"
                style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', 'Courier New', monospace" }}
              >
                <span className="text-[10px] tracking-[0.16em] uppercase text-[#2DD4BF]/70">&gt; CHANNEL: PHONE</span>
                <span className="text-[11px] text-white/60 tracking-wide">&gt; LINE: +91 7676808950</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN — SOCIAL SYSTEM PANEL */}
          <div className="flex flex-col gap-6">
            <span
              className="text-[10px] tracking-[0.22em] uppercase text-white/50"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', 'Courier New', monospace" }}
            >
              SOCIAL CHANNELS
            </span>

            <div className="flex gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/autonomex.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-module"
                style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(45,212,191,0.2)",
                  borderRadius: 8,
                  backgroundColor: "rgba(45,212,191,0.04)",
                  color: "rgba(45,212,191,0.6)",
                  cursor: "pointer",
                  transition: "border-color 0.25s cubic-bezier(0.25,1,0.5,1), background-color 0.25s cubic-bezier(0.25,1,0.5,1), color 0.25s cubic-bezier(0.25,1,0.5,1)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(45,212,191,0.7)";
                  el.style.backgroundColor = "rgba(45,212,191,0.10)";
                  el.style.color = "rgba(45,212,191,1)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(45,212,191,0.2)";
                  el.style.backgroundColor = "rgba(45,212,191,0.04)";
                  el.style.color = "rgba(45,212,191,0.6)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/autonomexai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(45,212,191,0.2)",
                  borderRadius: 8,
                  backgroundColor: "rgba(45,212,191,0.04)",
                  color: "rgba(45,212,191,0.6)",
                  cursor: "pointer",
                  transition: "border-color 0.25s cubic-bezier(0.25,1,0.5,1), background-color 0.25s cubic-bezier(0.25,1,0.5,1), color 0.25s cubic-bezier(0.25,1,0.5,1)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(45,212,191,0.7)";
                  el.style.backgroundColor = "rgba(45,212,191,0.10)";
                  el.style.color = "rgba(45,212,191,1)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(45,212,191,0.2)";
                  el.style.backgroundColor = "rgba(45,212,191,0.04)";
                  el.style.color = "rgba(45,212,191,0.6)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/autonomexai"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(45,212,191,0.2)",
                  borderRadius: 8,
                  backgroundColor: "rgba(45,212,191,0.04)",
                  color: "rgba(45,212,191,0.6)",
                  cursor: "pointer",
                  transition: "border-color 0.25s cubic-bezier(0.25,1,0.5,1), background-color 0.25s cubic-bezier(0.25,1,0.5,1), color 0.25s cubic-bezier(0.25,1,0.5,1)",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(45,212,191,0.7)";
                  el.style.backgroundColor = "rgba(45,212,191,0.10)";
                  el.style.color = "rgba(45,212,191,1)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(45,212,191,0.2)";
                  el.style.backgroundColor = "rgba(45,212,191,0.04)";
                  el.style.color = "rgba(45,212,191,0.6)";
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>

            {/* SYSTEM STATUS */}
            <div
              className="flex items-center gap-2 mt-2"
              style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', 'Courier New', monospace" }}
            >
              <div
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#22C55E",
                  animation: "status-pulse 2.4s ease-in-out infinite",
                }}
              />
              <span className="text-[10px] tracking-[0.18em] uppercase text-white/40">
                SYSTEM STATUS:{" "}
                <span className="text-[#22C55E]/80">OPERATIONAL</span>
              </span>
            </div>
          </div>
        </div>

        {/* LAYER 3 — LEGAL STRIP */}
        <div className="border-t border-white/5 py-6 flex justify-center">
          <span
            className="text-[10px] text-white/25 tracking-[0.12em]"
            style={{ fontFamily: "'JetBrains Mono', 'Fira Mono', 'Courier New', monospace" }}
          >
            © 2026 AutonomexAI. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        @keyframes status-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
