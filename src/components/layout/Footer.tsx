import { useEffect, useRef, useState } from "react";
import { SocialLinks } from "@/components/ui/SocialLinks";

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
      { threshold: 0.05 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const navColumns = [
    {
      title: "PLATFORM",
      links: ["AI Agents", "Workflow Studio", "Integrations", "Security", "Roadmap"],
    },
    {
      title: "COMPANY",
      links: ["About", "Blog", "Careers", "Press", "Contact"],
    },
  ];

  return (
    <footer
      ref={footerRef}
      aria-label="Site footer"
      className="footer-root"
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 600ms cubic-bezier(0.25,1,0.5,1)",
      }}
    >
      {/* Dark grid background */}
      <div className="footer-grid-bg" aria-hidden="true" />

      {/* Background watermark */}
      <div className="footer-watermark" aria-hidden="true">
        AUTONOMEX
      </div>

      <div className="footer-container">

        {/* ── BRAND BLOCK ── */}
        <div className="footer-brand-block">
          <img
            src="/logo-wordmark.png"
            alt="Autonomex AI"
            className="footer-logo"
          />
          <p className="footer-brand-subtitle">
            Engineering Autonomous Intelligence Systems.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="footer-main-grid">

          {/* Columns: Platform + Company */}
          {navColumns.map((col) => (
            <nav
              key={col.title}
              aria-label={`${col.title} navigation`}
              className="footer-nav-col"
            >
              <span className="footer-col-title">{col.title}</span>
              <ul className="footer-nav-list">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="footer-nav-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Column: Connect */}
          <div className="footer-connect-col">
            <span className="footer-col-title">SYSTEM CHANNELS</span>

            <div className="footer-connect-list">
              {/* Email */}
              <div className="footer-channel-item">
                <span className="footer-channel-label">EMAIL</span>
                <a
                  href="mailto:autonomexai24@gmail.com"
                  className="footer-channel-link"
                >
                  autonomexai24@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="footer-channel-item">
                <span className="footer-channel-label">PHONE</span>
                <a href="tel:+917676808950" className="footer-channel-link">
                  +91 7676808950
                </a>
              </div>

              {/* WhatsApp */}
              <div className="footer-channel-item">
                <span className="footer-channel-label">WHATSAPP</span>
                <a
                  href="https://wa.me/917676808950"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-channel-link"
                >
                  wa.me/917676808950
                </a>
              </div>
            </div>

            {/* Social icons */}
            <SocialLinks />
          </div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom-bar">
          <span className="footer-copyright">
            © 2026 AutonomexAI. All rights reserved.
          </span>
          <div className="footer-status" aria-label="System status: Operational">
            <span className="footer-status-dot" aria-hidden="true" />
            <span className="footer-status-text">
              SYSTEM STATUS:&nbsp;
              <span className="footer-status-value">OPERATIONAL</span>
            </span>
          </div>
        </div>
      </div>

      <style>{`
        /* ── ROOT ── */
        .footer-root {
          position: relative;
          background-color: #050A15;
          color: #fff;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        /* ── GRID BG ── */
        .footer-grid-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image:
            linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }

        /* ── WATERMARK ── */
        .footer-watermark {
          position: absolute;
          bottom: -0.05em;
          left: 50%;
          transform: translateX(-50%);
          font-size: clamp(80px, 16vw, 220px);
          font-weight: 900;
          letter-spacing: 0.06em;
          color: #fff;
          opacity: 0.045;
          pointer-events: none;
          user-select: none;
          white-space: nowrap;
          line-height: 1;
          font-family: 'Inter', system-ui, sans-serif;
        }

        /* ── CONTAINER ── */
        .footer-container {
          position: relative;
          z-index: 10;
          max-width: 1280px;
          margin: 0 auto;
          padding: 64px 24px 0;
        }

        /* ── BRAND BLOCK ── */
        .footer-brand-block {
          margin-bottom: 56px;
        }
        .footer-logo {
          width: clamp(160px, 14vw, 200px);
          height: auto;
          display: block;
          margin-bottom: 14px;
        }
        .footer-brand-subtitle {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.04em;
          max-width: 420px;
          margin: 0;
          font-family: 'Inter', system-ui, sans-serif;
          line-height: 1.6;
        }

        /* ── MAIN GRID ── */
        .footer-main-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-bottom: 48px;
        }
        @media (max-width: 768px) {
          .footer-main-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 480px) {
          .footer-main-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── NAV COLUMN ── */
        .footer-nav-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-col-title {
          font-size: 10px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(45,212,191,0.8);
          font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
          display: block;
          margin-bottom: 4px;
        }
        .footer-nav-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-nav-link {
          font-size: 13px;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          font-family: 'Inter', system-ui, sans-serif;
          letter-spacing: 0.02em;
          transition: color 300ms cubic-bezier(0.25,1,0.5,1);
        }
        .footer-nav-link:hover {
          color: #2DD4BF;
        }

        /* ── CONNECT COLUMN ── */
        .footer-connect-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-connect-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .footer-channel-item {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .footer-channel-label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
        }
        .footer-channel-link {
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
          letter-spacing: 0.02em;
          transition: color 300ms cubic-bezier(0.25,1,0.5,1);
        }
        .footer-channel-link:hover {
          color: #2DD4BF;
        }

        /* ── BOTTOM BAR ── */
        .footer-bottom-bar {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding: 20px 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copyright {
          font-size: 10px;
          color: rgba(255,255,255,0.28);
          letter-spacing: 0.12em;
          font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
        }
        .footer-status {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .footer-status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #22C55E;
          flex-shrink: 0;
          animation: footer-pulse 2.4s ease-in-out infinite;
        }
        .footer-status-text {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          font-family: 'JetBrains Mono', 'Fira Mono', 'Courier New', monospace;
        }
        .footer-status-value {
          color: rgba(34,197,94,0.85);
        }

        @keyframes footer-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }

        @media (max-width: 480px) {
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
