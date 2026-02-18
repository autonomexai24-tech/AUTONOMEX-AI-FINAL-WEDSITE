import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Globe,
  Code2,
  Zap,
  CheckCircle,
  Database,
  BarChart3,
  Mail,
  ArrowLeft,
  AlertCircle,
  Cpu,
  Activity,
  AlertTriangle,
} from "lucide-react";

interface WebDevVisualProps {
  activePhase?: string;
}

// Pre-computed stable packet positions for Desktop P1
const PACKETS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  startX: Math.random() * 100,
  startY: Math.random() * 100,
  endX: Math.random() * 100,
  endY: Math.random() * 100,
  duration: 2.5 + Math.random() * 2,
  delay: Math.random() * 3,
  size: Math.random() * 3 + 2,
}));

// Stable lead orb positions for Desktop P3
const LEAD_ORBS = [
  { startX: -180, startY: -60, delay: 0 },
  { startX: 200, startY: -80, delay: 0.6 },
  { startX: -160, startY: 90, delay: 1.1 },
  { startX: 190, startY: 70, delay: 1.7 },
  { startX: 0, startY: -160, delay: 2.2 },
  { startX: 0, startY: 160, delay: 2.8 },
];

// Desktop P4 peripheral nodes
const PERIPHERAL_NODES = [
  { icon: Database, label: "CRM Sync", angle: -40, radius: 190 },
  { icon: BarChart3, label: "Analytics", angle: 180, radius: 190 },
  { icon: Mail, label: "Auto-Email", angle: 40, radius: 190 },
  { icon: Globe, label: "CDN Edge", angle: -140, radius: 190 },
];

// Mobile P3 — push notification messages
const PUSH_NOTIFS = [
  "New Lead: Rahul M. — Contact Form",
  "New Lead: Priya S. — WhatsApp",
  "New Lead: Amit K. — Callback",
  "New Lead: Rahul M. — Contact Form",
  "New Lead: Priya S. — WhatsApp",
  "New Lead: Amit K. — Callback",
];

// Mobile P4 — rain dot configs (stable, not random)
const RAIN_DOTS = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: 10 + (i % 9) * 10,
  delay: (i * 0.22) % 2,
  dur: 1.4 + (i % 4) * 0.2,
  color: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#a78bfa" : "#34d399",
  glow: i % 3 === 0 ? "rgba(34,211,238,0.7)" : i % 3 === 1 ? "rgba(167,139,250,0.7)" : "rgba(52,211,153,0.7)",
}));

export default function WebDevVisual({ activePhase = "phase-1" }: WebDevVisualProps) {
  const isP1 = activePhase === "phase-1";
  const isP2 = activePhase === "phase-2";
  const isP3 = activePhase === "phase-3";
  const isP4 = activePhase === "phase-4";
  const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

  return (
    <div
      className="w-full h-[500px] md:h-full min-h-[500px] relative overflow-hidden rounded-3xl font-sans"
      style={{ background: "radial-gradient(ellipse at 60% 40%, #0d1117 0%, #060810 100%)" }}
    >

      {/* ════════════════════════════════════════════════════════════════════
          DESKTOP VISUAL — hidden on mobile, shown md+
          (Original code 100% preserved)
      ════════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center overflow-hidden">

        {/* Dot-grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(56,189,248,0.4) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* ── PHASE 1: The Void & The Lost Traffic ──────────────────────── */}
        <AnimatePresence mode="wait">
          {isP1 && (
            <motion.div
              key="p1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 60%)" }}
              />
              {PACKETS.map((p) => (
                <motion.div
                  key={p.id}
                  className="absolute rounded-full"
                  style={{
                    width: p.size,
                    height: p.size,
                    background: "#22d3ee",
                    boxShadow: "0 0 6px #22d3ee, 0 0 12px rgba(34,211,238,0.4)",
                    left: `${p.startX}%`,
                    top: `${p.startY}%`,
                  }}
                  animate={{
                    left: [`${p.startX}%`, `${p.endX}%`],
                    top: [`${p.startY}%`, `${p.endY}%`],
                    opacity: [0, 0.9, 0.9, 0],
                  }}
                  transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
                />
              ))}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <motion.div
                  className="w-20 h-20 rounded-2xl border flex items-center justify-center"
                  style={{ background: "rgba(15,20,30,0.8)", borderColor: "rgba(100,116,139,0.3)", boxShadow: "0 0 0 rgba(0,0,0,0)" }}
                  animate={{ opacity: [0.4, 0.6, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Globe size={28} className="text-slate-600" />
                </motion.div>
                <motion.div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg border"
                  style={{ background: "rgba(30,10,10,0.8)", borderColor: "rgba(239,68,68,0.5)", boxShadow: "0 0 16px rgba(239,68,68,0.2)" }}
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <AlertCircle size={12} className="text-red-400" />
                  <span className="text-[10px] font-mono font-bold text-red-400 tracking-widest">ERR: 0 VISIBILITY</span>
                </motion.div>
                <span className="text-[9px] font-mono text-slate-600 tracking-[0.25em] uppercase">Traffic bypassing site</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PHASE 2: The Blueprint Assembly ───────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP2 && (
            <motion.div
              key="p2"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 60%)" }}
              />
              <div className="relative flex gap-6 items-center">
                <motion.svg width="180" height="200" viewBox="0 0 180 200" fill="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
                  <motion.rect x="8" y="8" width="164" height="36" rx="4" stroke="rgba(99,179,255,0.7)" strokeWidth="1.5" fill="rgba(30,60,120,0.3)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }} />
                  {[0, 1, 2].map((d) => (
                    <motion.circle key={d} cx={20 + d * 14} cy={26} r="3" fill="rgba(99,179,255,0.5)" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6 + d * 0.1 }} />
                  ))}
                  <motion.rect x="8" y="52" width="164" height="72" rx="4" stroke="rgba(99,179,255,0.5)" strokeWidth="1.5" fill="rgba(20,40,90,0.25)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.5 }} />
                  {[0, 1, 2].map((l) => (
                    <motion.rect key={l} x="20" y={70 + l * 14} width={120 - l * 30} height="6" rx="2" fill="rgba(99,179,255,0.3)" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ transformOrigin: "left" }} transition={{ delay: 0.8 + l * 0.15, duration: 0.5 }} />
                  ))}
                  <motion.rect x="20" y="108" width="60" height="10" rx="5" fill="rgba(59,130,246,0.6)" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ transformOrigin: "left" }} transition={{ delay: 1.2, duration: 0.4 }} />
                  {[0, 1, 2].map((c) => (
                    <motion.rect key={c} x={8 + c * 58} y="132" width="50" height="56" rx="4" stroke="rgba(99,179,255,0.4)" strokeWidth="1" fill="rgba(15,30,70,0.3)" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 1.0 + c * 0.15 }} />
                  ))}
                  <motion.line x1="0" y1="0" x2="180" y2="0" stroke="rgba(99,179,255,0.6)" strokeWidth="1.5" animate={{ y1: [0, 200, 0], y2: [0, 200, 0] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} />
                </motion.svg>
                <motion.div
                  className="w-44 rounded-xl border overflow-hidden"
                  style={{ background: "rgba(5,10,20,0.85)", borderColor: "rgba(59,130,246,0.3)", boxShadow: "0 0 30px rgba(59,130,246,0.15)" }}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: "rgba(59,130,246,0.2)" }}>
                    {["#ef4444", "#f59e0b", "#10b981"].map((c) => (
                      <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
                    ))}
                    <span className="text-[9px] font-mono text-slate-500 ml-1">build.sh</span>
                  </div>
                  <div className="p-3 space-y-1.5">
                    {[
                      { text: "$ npm run build", color: "#94a3b8" },
                      { text: "> vite build", color: "#60a5fa" },
                      { text: "✓ Compiling TSX...", color: "#34d399" },
                      { text: "✓ Tree-shaking...", color: "#34d399" },
                      { text: "✓ Optimizing CSS", color: "#34d399" },
                      { text: "⚡ 98/100 Perf", color: "#fbbf24" },
                      { text: "✓ Build complete", color: "#a78bfa" },
                    ].map((line, i) => (
                      <motion.div key={i} className="text-[9px] font-mono" style={{ color: line.color }} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.18 }}>
                        {line.text}
                      </motion.div>
                    ))}
                    <motion.div className="w-1.5 h-3 bg-blue-400 rounded-sm" animate={{ opacity: [1, 0, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
                  </div>
                </motion.div>
              </div>
              <div className="absolute bottom-[14%] text-center">
                <span className="text-[10px] font-mono tracking-[0.3em] text-blue-400 uppercase">Blueprint · Assembling</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PHASE 3: The Conversion Matrix ────────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP3 && (
            <motion.div
              key="p3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.18) 0%, transparent 60%)" }} />
              {LEAD_ORBS.map((orb, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full z-20"
                  style={{ background: "#10b981", boxShadow: "0 0 10px #10b981, 0 0 20px rgba(16,185,129,0.5)" }}
                  animate={{ x: [orb.startX, 0], y: [orb.startY, 0], opacity: [0, 1, 1, 0], scale: [0.5, 1, 0.8, 0] }}
                  transition={{ duration: 1.8, delay: orb.delay, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
                />
              ))}
              <motion.div
                className="relative w-64 rounded-2xl border overflow-hidden z-10"
                style={{ background: "rgba(5,20,15,0.85)", borderColor: "rgba(16,185,129,0.4)", boxShadow: "0 0 50px rgba(16,185,129,0.2), inset 0 1px 0 rgba(255,255,255,0.05)", transform: "rotateX(6deg) rotateY(-4deg)" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #10b981" }} />
                    <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">Capture Vault · Live</span>
                  </div>
                  <Activity size={12} className="text-emerald-500" />
                </div>
                <div className="grid grid-cols-3 gap-px border-b" style={{ borderColor: "rgba(16,185,129,0.15)" }}>
                  {[{ label: "Leads", value: "847" }, { label: "Conv%", value: "12.4" }, { label: "Rev", value: "₹2.1L" }].map((m) => (
                    <div key={m.label} className="px-3 py-2.5 flex flex-col items-center">
                      <span className="text-base font-mono font-bold text-emerald-300" style={{ textShadow: "0 0 10px rgba(16,185,129,0.6)" }}>{m.value}</span>
                      <span className="text-[8px] font-mono text-emerald-700 uppercase tracking-widest">{m.label}</span>
                    </div>
                  ))}
                </div>
                <div className="px-4 py-3 space-y-2">
                  {["Rahul M. — Contact Form", "Priya S. — WhatsApp", "Amit K. — Callback"].map((lead, i) => (
                    <motion.div key={i} className="flex items-center gap-2" initial={{ x: -12, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 + i * 0.15 }}>
                      <motion.div animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.4 }}>
                        <CheckCircle size={12} className="text-emerald-400" style={{ filter: "drop-shadow(0 0 4px #10b981)" }} />
                      </motion.div>
                      <span className="text-[10px] font-mono text-emerald-300">{lead}</span>
                      <span className="ml-auto text-[9px] font-mono text-emerald-700">now</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="absolute left-0 right-0 h-[1px] pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)" }}
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <div className="absolute bottom-[14%] text-center">
                <span className="text-[10px] font-mono tracking-[0.3em] text-emerald-500 uppercase">Conversion Matrix · Active</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PHASE 4: The Global Node ───────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP4 && (
            <motion.div
              key="p4"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.2) 0%, transparent 60%)" }} />
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 5 }}>
                {PERIPHERAL_NODES.map((node, i) => {
                  const cx = 50;
                  const cy = 50;
                  const rad = (node.angle * Math.PI) / 180;
                  const ex = cx + (Math.cos(rad) * node.radius / 4);
                  const ey = cy + (Math.sin(rad) * node.radius / 4);
                  return (
                    <motion.line key={i} x1={`${cx}%`} y1={`${cy}%`} x2={`${ex}%`} y2={`${ey}%`} stroke="rgba(139,92,246,0.5)" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.9, delay: 0.2 + i * 0.15 }} />
                  );
                })}
                {PERIPHERAL_NODES.map((node, i) => {
                  const cx = 50;
                  const cy = 50;
                  const rad = (node.angle * Math.PI) / 180;
                  const ex = cx + (Math.cos(rad) * node.radius / 4);
                  const ey = cy + (Math.sin(rad) * node.radius / 4);
                  return (
                    <motion.circle key={`pulse-${i}`} r="3" fill="#a78bfa" style={{ filter: "drop-shadow(0 0 4px #a78bfa)" }} animate={{ cx: [`${cx}%`, `${ex}%`, `${cx}%`], cy: [`${cy}%`, `${ey}%`, `${cy}%`], opacity: [0, 1, 0] }} transition={{ duration: 2, delay: 0.6 + i * 0.4, repeat: Infinity, ease: "easeInOut" }} />
                  );
                })}
              </svg>
              <motion.div
                className="relative z-10 w-20 h-20 rounded-2xl border flex flex-col items-center justify-center gap-1"
                style={{ background: "rgba(20,15,45,0.85)", borderColor: "rgba(139,92,246,0.5)", boxShadow: "0 0 40px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.06)" }}
                animate={{ boxShadow: ["0 0 25px rgba(139,92,246,0.2)", "0 0 50px rgba(139,92,246,0.5)", "0 0 25px rgba(139,92,246,0.2)"] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Globe size={22} className="text-indigo-300" />
                <span className="text-[8px] font-mono text-indigo-400 tracking-widest uppercase">Hub</span>
              </motion.div>
              {PERIPHERAL_NODES.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                const x = Math.cos(rad) * node.radius;
                const y = Math.sin(rad) * node.radius;
                const Icon = node.icon;
                return (
                  <motion.div
                    key={i}
                    className="absolute z-10 flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl border backdrop-blur-md"
                    style={{ background: "rgba(15,10,35,0.8)", borderColor: "rgba(139,92,246,0.35)", boxShadow: "0 0 20px rgba(139,92,246,0.15)" }}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                    animate={{ x, y, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}>
                      <Icon size={16} className="text-indigo-300" />
                    </motion.div>
                    <span className="text-[9px] font-mono text-indigo-400 tracking-wider whitespace-nowrap">{node.label}</span>
                  </motion.div>
                );
              })}
              <div className="absolute bottom-[12%] text-center z-20">
                <span className="text-[10px] font-mono tracking-[0.3em] text-indigo-400 uppercase">Global Ecosystem · Connected</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PHASE 5 / CTA: The Ignition Switch ───────────────────────── */}
        <AnimatePresence mode="wait">
          {isCTA && (
            <motion.div
              key="cta"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.18) 0%, transparent 55%)" }} />
              {[0, 1, 2, 3, 4].map((r) => (
                <motion.div key={r} className="absolute rounded-full border" style={{ borderColor: `rgba(6,182,212,${0.35 - r * 0.06})`, width: 90 + r * 65, height: 90 + r * 65 }} animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: r * 0.5 }} />
              ))}
              <motion.div
                className="relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer z-10"
                style={{ background: "radial-gradient(circle at 35% 35%, rgba(6,182,212,0.55) 0%, rgba(10,20,40,0.95) 70%)", border: "1px solid rgba(6,182,212,0.5)", boxShadow: "0 0 40px rgba(6,182,212,0.35), 0 0 80px rgba(6,182,212,0.15), inset 0 1px 0 rgba(255,255,255,0.08)" }}
                animate={{ scale: [1, 1.07, 1], boxShadow: ["0 0 30px rgba(6,182,212,0.25), 0 0 60px rgba(6,182,212,0.1)", "0 0 55px rgba(6,182,212,0.55), 0 0 100px rgba(6,182,212,0.25)", "0 0 30px rgba(6,182,212,0.25), 0 0 60px rgba(6,182,212,0.1)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.12 }}
              >
                <motion.div animate={{ x: [-3, 3, -3] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowLeft size={32} className="text-white" style={{ filter: "drop-shadow(0 0 8px rgba(6,182,212,0.9))" }} />
                </motion.div>
              </motion.div>
              <motion.div className="mt-6 flex flex-col items-center" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <span className="text-base font-semibold text-white tracking-wide" style={{ textShadow: "0 0 20px rgba(6,182,212,0.6)" }}>Launch Your Site</span>
                <span className="text-[11px] font-mono text-cyan-500 mt-1 tracking-widest uppercase">Awaiting your command</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ════════════════════════════════════════════════════════════════════
          MOBILE VISUAL — shown on mobile only, hidden md+
          Flat 2D, Y-axis / scale / opacity only — no 3D transforms
      ════════════════════════════════════════════════════════════════════ */}
      <div className="flex md:hidden absolute inset-0 items-center justify-center overflow-hidden">

        {/* ── MOBILE PHASE 1: The High Bounce Rate ──────────────────────── */}
        <AnimatePresence mode="wait">
          {isP1 && (
            <motion.div
              key="m-p1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-6"
            >
              {/* Red ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 45%, rgba(239,68,68,0.14) 0%, transparent 65%)" }} />

              {/* Mobile frame */}
              <div
                className="relative rounded-[28px] border overflow-hidden flex flex-col"
                style={{ width: 180, height: 300, background: "rgba(12,8,18,0.9)", borderColor: "rgba(239,68,68,0.4)", boxShadow: "0 0 30px rgba(239,68,68,0.15)" }}
              >
                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: "rgba(239,68,68,0.2)" }}>
                  <span className="text-[8px] font-mono text-red-700">9:41</span>
                  <div className="flex gap-1">
                    {[1, 2, 3].map((b) => <div key={b} className="w-1 h-2 rounded-sm bg-red-900" />)}
                  </div>
                </div>

                {/* Spinning error circle */}
                <div className="flex-1 flex flex-col items-center justify-center gap-3 px-4">
                  <motion.div
                    className="w-14 h-14 rounded-full border-4 border-t-red-500 border-red-900"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="space-y-1.5 w-full">
                    {[80, 60, 70].map((w, i) => (
                      <div key={i} className="h-2 rounded-full" style={{ width: `${w}%`, background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.15)" }} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Bounce notification */}
              <motion.div
                className="flex items-center gap-3 px-4 py-3 rounded-xl border w-full max-w-[260px]"
                style={{ background: "rgba(30,8,8,0.85)", borderColor: "rgba(239,68,68,0.45)", boxShadow: "0 0 16px rgba(239,68,68,0.15)" }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <AlertTriangle size={20} className="text-red-400 flex-shrink-0" />
                <div>
                  <div className="text-sm font-mono font-bold text-red-400">Visitor Bounced</div>
                  <div className="text-xs font-mono text-red-700 mt-0.5">Slow Load · 8.4s TTI</div>
                </div>
              </motion.div>

              <span className="text-xs font-mono tracking-widest text-red-600 uppercase z-10">0 Visibility · Traffic Lost</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 2: The Mobile-First Build ────────────────────── */}
        <AnimatePresence mode="wait">
          {isP2 && (
            <motion.div
              key="m-p2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-5"
            >
              {/* Blue ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 40%, rgba(59,130,246,0.16) 0%, transparent 65%)" }} />

              {/* Mobile frame with dropping UI blocks */}
              <div
                className="relative rounded-[28px] border overflow-hidden flex flex-col"
                style={{ width: 180, height: 300, background: "rgba(8,14,30,0.9)", borderColor: "rgba(59,130,246,0.4)", boxShadow: "0 0 30px rgba(59,130,246,0.15)" }}
              >
                {/* Status bar */}
                <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: "rgba(59,130,246,0.2)" }}>
                  <span className="text-[8px] font-mono text-blue-600">9:41</span>
                  <motion.div className="w-1.5 h-1.5 rounded-full bg-blue-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                </div>

                {/* Dropping UI section blocks */}
                <div className="flex-1 flex flex-col gap-2 p-3 overflow-hidden">
                  {[
                    { h: 28, color: "rgba(59,130,246,0.3)", border: "rgba(59,130,246,0.4)", delay: 0.1 },
                    { h: 60, color: "rgba(30,50,100,0.4)", border: "rgba(59,130,246,0.3)", delay: 0.3 },
                    { h: 36, color: "rgba(20,35,80,0.35)", border: "rgba(59,130,246,0.25)", delay: 0.5 },
                    { h: 44, color: "rgba(15,28,65,0.3)", border: "rgba(59,130,246,0.2)", delay: 0.7 },
                  ].map((block, i) => (
                    <motion.div
                      key={i}
                      className="w-full rounded-lg border"
                      style={{ height: block.h, background: block.color, borderColor: block.border }}
                      initial={{ y: -60, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: block.delay, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    />
                  ))}
                </div>
              </div>

              {/* Lighthouse badge */}
              <motion.div
                className="flex items-center gap-2.5 px-5 py-3 rounded-xl border"
                style={{ background: "rgba(8,25,15,0.85)", borderColor: "rgba(16,185,129,0.5)", boxShadow: "0 0 20px rgba(16,185,129,0.2)" }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <Zap size={18} className="text-emerald-400" style={{ filter: "drop-shadow(0 0 5px #10b981)" }} />
                <span className="text-base font-mono font-bold text-emerald-300">Lighthouse: 100/100</span>
              </motion.div>

              <span className="text-xs font-mono tracking-widest text-blue-500 uppercase z-10">Blueprint · Assembling</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 3: The Lead Magnet ───────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP3 && (
            <motion.div
              key="m-p3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center px-5 gap-4"
            >
              {/* Emerald ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.16) 0%, transparent 65%)" }} />

              {/* Header */}
              <div className="flex items-center gap-2 z-10">
                <motion.div className="w-2.5 h-2.5 rounded-full bg-emerald-400" animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }} transition={{ duration: 1.2, repeat: Infinity }} style={{ boxShadow: "0 0 8px #10b981" }} />
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">Capture Vault · Live</span>
              </div>

              {/* Sliding push notifications */}
              <div className="relative w-full overflow-hidden z-10" style={{ height: 240 }}>
                <motion.div
                  className="flex flex-col gap-3 absolute w-full"
                  animate={{ y: [0, -240] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  {PUSH_NOTIFS.map((notif, i) => (
                    <div
                      key={i}
                      className="w-full rounded-xl border flex items-center gap-3 px-4 py-3.5"
                      style={{ background: "rgba(5,22,15,0.85)", borderColor: "rgba(16,185,129,0.35)", boxShadow: "0 0 12px rgba(16,185,129,0.1)" }}
                    >
                      <CheckCircle size={20} className="text-emerald-400 flex-shrink-0" style={{ filter: "drop-shadow(0 0 5px #10b981)" }} />
                      <div>
                        <div className="text-[10px] font-mono font-bold text-emerald-600 uppercase tracking-widest">New Lead Captured</div>
                        <div className="text-sm font-mono text-emerald-200 mt-0.5">{notif}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <span className="text-xs font-mono tracking-widest text-emerald-500 uppercase z-10">Conversion Matrix · Active</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 4: The Traffic Funnel ────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP4 && (
            <motion.div
              key="m-p4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-0 overflow-hidden"
            >
              {/* Indigo ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 40%, rgba(99,102,241,0.18) 0%, transparent 65%)" }} />

              {/* Rain zone — dots falling into frame */}
              <div className="relative w-full flex justify-center" style={{ height: 100 }}>
                {RAIN_DOTS.map((dot) => (
                  <motion.div
                    key={dot.id}
                    className="absolute rounded-full"
                    style={{
                      width: 6,
                      height: 6,
                      left: `${dot.x}%`,
                      background: dot.color,
                      boxShadow: `0 0 8px ${dot.glow}`,
                      top: 0,
                    }}
                    animate={{ y: [0, 95], opacity: [0, 1, 1, 0] }}
                    transition={{ duration: dot.dur, delay: dot.delay, repeat: Infinity, ease: "easeIn" }}
                  />
                ))}
                {/* Funnel label */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center">
                  <span className="text-[9px] font-mono text-indigo-500 tracking-widest uppercase">Traffic Incoming</span>
                </div>
              </div>

              {/* Scaled-down mobile frame */}
              <motion.div
                className="relative rounded-[28px] border overflow-hidden flex flex-col z-10"
                style={{ width: 160, height: 240, background: "rgba(12,8,28,0.92)", borderColor: "rgba(99,102,241,0.5)", boxShadow: "0 0 35px rgba(99,102,241,0.25)" }}
                animate={{ scale: [0.85, 0.87, 0.85], boxShadow: ["0 0 25px rgba(99,102,241,0.2)", "0 0 45px rgba(99,102,241,0.45)", "0 0 25px rgba(99,102,241,0.2)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Status bar */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b" style={{ borderColor: "rgba(99,102,241,0.25)" }}>
                  <span className="text-[7px] font-mono text-indigo-600">9:41</span>
                  <motion.div className="w-1.5 h-1.5 rounded-full bg-indigo-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                </div>
                {/* Content blocks */}
                <div className="flex-1 flex flex-col gap-2 p-2.5">
                  {[{ h: 22, c: "rgba(99,102,241,0.25)" }, { h: 50, c: "rgba(70,80,180,0.2)" }, { h: 30, c: "rgba(60,70,160,0.18)" }, { h: 40, c: "rgba(50,60,140,0.15)" }].map((b, i) => (
                    <div key={i} className="w-full rounded-lg" style={{ height: b.h, background: b.c, border: "1px solid rgba(99,102,241,0.2)" }} />
                  ))}
                </div>
              </motion.div>

              <div className="mt-4 z-10">
                <span className="text-xs font-mono tracking-widest text-indigo-400 uppercase">Global Ecosystem · Connected</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 5 / CTA: The Ignition Switch ─────────────────── */}
        <AnimatePresence mode="wait">
          {isCTA && (
            <motion.div
              key="m-cta"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-6"
            >
              {/* Cyan ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.18) 0%, transparent 60%)" }} />

              {/* Radar rings */}
              {[0, 1, 2, 3].map((r) => (
                <motion.div
                  key={r}
                  className="absolute rounded-full border"
                  style={{ borderColor: `rgba(6,182,212,${0.35 - r * 0.07})`, width: 110 + r * 55, height: 110 + r * 55 }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: r * 0.6 }}
                />
              ))}

              {/* Central orb */}
              <motion.div
                className="relative rounded-full flex items-center justify-center cursor-pointer z-10"
                style={{
                  width: 100,
                  height: 100,
                  background: "radial-gradient(circle at 35% 35%, rgba(6,182,212,0.55) 0%, rgba(10,20,40,0.95) 70%)",
                  border: "1px solid rgba(6,182,212,0.5)",
                  boxShadow: "0 0 40px rgba(6,182,212,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
                animate={{
                  scale: [1, 1.07, 1],
                  boxShadow: [
                    "0 0 30px rgba(6,182,212,0.25)",
                    "0 0 55px rgba(6,182,212,0.6)",
                    "0 0 30px rgba(6,182,212,0.25)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div animate={{ x: [-3, 3, -3] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowLeft size={36} className="text-white" style={{ filter: "drop-shadow(0 0 8px rgba(6,182,212,0.9))" }} />
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.div className="flex flex-col items-center z-10" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <span className="text-xl font-semibold text-white tracking-wide" style={{ textShadow: "0 0 20px rgba(6,182,212,0.6)" }}>
                  Launch Your Site
                </span>
                <span className="text-sm font-mono text-cyan-500 mt-1 tracking-widest uppercase">Awaiting your command</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
