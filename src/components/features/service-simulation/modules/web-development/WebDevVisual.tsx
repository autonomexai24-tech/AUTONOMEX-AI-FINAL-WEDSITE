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
} from "lucide-react";

interface WebDevVisualProps {
  activePhase?: string;
}

// Pre-computed stable packet positions for P1
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

// Stable lead orb positions for P3
const LEAD_ORBS = [
  { startX: -180, startY: -60, delay: 0 },
  { startX: 200, startY: -80, delay: 0.6 },
  { startX: -160, startY: 90, delay: 1.1 },
  { startX: 190, startY: 70, delay: 1.7 },
  { startX: 0, startY: -160, delay: 2.2 },
  { startX: 0, startY: 160, delay: 2.8 },
];

// P4 peripheral nodes
const PERIPHERAL_NODES = [
  { icon: Database, label: "CRM Sync", angle: -40, radius: 190 },
  { icon: BarChart3, label: "Analytics", angle: 180, radius: 190 },
  { icon: Mail, label: "Auto-Email", angle: 40, radius: 190 },
  { icon: Globe, label: "CDN Edge", angle: -140, radius: 190 },
];

export default function WebDevVisual({ activePhase = "phase-1" }: WebDevVisualProps) {
  const isP1 = activePhase === "phase-1";
  const isP2 = activePhase === "phase-2";
  const isP3 = activePhase === "phase-3";
  const isP4 = activePhase === "phase-4";
  const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

  return (
    <div
      className="w-full h-[500px] md:h-full min-h-[500px] relative overflow-hidden flex items-center justify-center rounded-3xl font-sans"
      style={{ background: "radial-gradient(ellipse at 60% 40%, #0d1117 0%, #060810 100%)" }}
    >
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
            {/* Cyan ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.12) 0%, transparent 60%)" }}
            />

            {/* Flying data packets that bypass the center */}
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
                transition={{
                  duration: p.duration,
                  delay: p.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}

            {/* Central dim "dead" node */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <motion.div
                className="w-20 h-20 rounded-2xl border flex items-center justify-center"
                style={{
                  background: "rgba(15,20,30,0.8)",
                  borderColor: "rgba(100,116,139,0.3)",
                  boxShadow: "0 0 0 rgba(0,0,0,0)",
                }}
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Globe size={28} className="text-slate-600" />
              </motion.div>

              {/* Error badge */}
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg border"
                style={{
                  background: "rgba(30,10,10,0.8)",
                  borderColor: "rgba(239,68,68,0.5)",
                  boxShadow: "0 0 16px rgba(239,68,68,0.2)",
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <AlertCircle size={12} className="text-red-400" />
                <span className="text-[10px] font-mono font-bold text-red-400 tracking-widest">
                  ERR: 0 VISIBILITY
                </span>
              </motion.div>

              <span className="text-[9px] font-mono text-slate-600 tracking-[0.25em] uppercase">
                Traffic bypassing site
              </span>
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
            {/* Blue ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 60%)" }}
            />

            <div className="relative flex gap-6 items-center">
              {/* SVG wireframe drawing */}
              <motion.svg
                width="180"
                height="200"
                viewBox="0 0 180 200"
                fill="none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {/* Header block */}
                <motion.rect
                  x="8" y="8" width="164" height="36" rx="4"
                  stroke="rgba(99,179,255,0.7)" strokeWidth="1.5"
                  fill="rgba(30,60,120,0.3)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                {/* Nav dots */}
                {[0, 1, 2].map((d) => (
                  <motion.circle
                    key={d}
                    cx={20 + d * 14} cy={26} r="3"
                    fill="rgba(99,179,255,0.5)"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6 + d * 0.1 }}
                  />
                ))}
                {/* Hero block */}
                <motion.rect
                  x="8" y="52" width="164" height="72" rx="4"
                  stroke="rgba(99,179,255,0.5)" strokeWidth="1.5"
                  fill="rgba(20,40,90,0.25)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
                {/* Hero text lines */}
                {[0, 1, 2].map((l) => (
                  <motion.rect
                    key={l}
                    x="20" y={70 + l * 14} width={120 - l * 30} height="6" rx="2"
                    fill="rgba(99,179,255,0.3)"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    style={{ transformOrigin: "left" }}
                    transition={{ delay: 0.8 + l * 0.15, duration: 0.5 }}
                  />
                ))}
                {/* CTA button */}
                <motion.rect
                  x="20" y="108" width="60" height="10" rx="5"
                  fill="rgba(59,130,246,0.6)"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  style={{ transformOrigin: "left" }}
                  transition={{ delay: 1.2, duration: 0.4 }}
                />
                {/* Card row */}
                {[0, 1, 2].map((c) => (
                  <motion.rect
                    key={c}
                    x={8 + c * 58} y="132" width="50" height="56" rx="4"
                    stroke="rgba(99,179,255,0.4)" strokeWidth="1"
                    fill="rgba(15,30,70,0.3)"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.0 + c * 0.15 }}
                  />
                ))}
                {/* Scan line */}
                <motion.line
                  x1="0" y1="0" x2="180" y2="0"
                  stroke="rgba(99,179,255,0.6)" strokeWidth="1.5"
                  animate={{ y1: [0, 200, 0], y2: [0, 200, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.svg>

              {/* Terminal window */}
              <motion.div
                className="w-44 rounded-xl border overflow-hidden"
                style={{
                  background: "rgba(5,10,20,0.85)",
                  borderColor: "rgba(59,130,246,0.3)",
                  boxShadow: "0 0 30px rgba(59,130,246,0.15)",
                }}
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Terminal header */}
                <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: "rgba(59,130,246,0.2)" }}>
                  {["#ef4444", "#f59e0b", "#10b981"].map((c) => (
                    <div key={c} className="w-2 h-2 rounded-full" style={{ background: c }} />
                  ))}
                  <span className="text-[9px] font-mono text-slate-500 ml-1">build.sh</span>
                </div>
                {/* Terminal lines */}
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
                    <motion.div
                      key={i}
                      className="text-[9px] font-mono"
                      style={{ color: line.color }}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.18 }}
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  {/* Blinking cursor */}
                  <motion.div
                    className="w-1.5 h-3 bg-blue-400 rounded-sm"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-[14%] text-center">
              <span className="text-[10px] font-mono tracking-[0.3em] text-blue-400 uppercase">
                Blueprint · Assembling
              </span>
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
            {/* Emerald ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.18) 0%, transparent 60%)" }}
            />

            {/* Flying lead orbs */}
            {LEAD_ORBS.map((orb, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full z-20"
                style={{
                  background: "#10b981",
                  boxShadow: "0 0 10px #10b981, 0 0 20px rgba(16,185,129,0.5)",
                }}
                animate={{
                  x: [orb.startX, 0],
                  y: [orb.startY, 0],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 0.8, 0],
                }}
                transition={{
                  duration: 1.8,
                  delay: orb.delay,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Central dark-glass dashboard */}
            <motion.div
              className="relative w-64 rounded-2xl border overflow-hidden z-10"
              style={{
                background: "rgba(5,20,15,0.85)",
                borderColor: "rgba(16,185,129,0.4)",
                boxShadow: "0 0 50px rgba(16,185,129,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                transform: "rotateX(6deg) rotateY(-4deg)",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #10b981" }} />
                  <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">Capture Vault · Live</span>
                </div>
                <Activity size={12} className="text-emerald-500" />
              </div>

              {/* Metric row */}
              <div className="grid grid-cols-3 gap-px border-b" style={{ borderColor: "rgba(16,185,129,0.15)" }}>
                {[
                  { label: "Leads", value: "847" },
                  { label: "Conv%", value: "12.4" },
                  { label: "Rev", value: "₹2.1L" },
                ].map((m) => (
                  <div key={m.label} className="px-3 py-2.5 flex flex-col items-center">
                    <span className="text-base font-mono font-bold text-emerald-300" style={{ textShadow: "0 0 10px rgba(16,185,129,0.6)" }}>
                      {m.value}
                    </span>
                    <span className="text-[8px] font-mono text-emerald-700 uppercase tracking-widest">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Lead capture list */}
              <div className="px-4 py-3 space-y-2">
                {["Rahul M. — Contact Form", "Priya S. — WhatsApp", "Amit K. — Callback"].map((lead, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2"
                    initial={{ x: -12, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.4 }}
                    >
                      <CheckCircle size={12} className="text-emerald-400" style={{ filter: "drop-shadow(0 0 4px #10b981)" }} />
                    </motion.div>
                    <span className="text-[10px] font-mono text-emerald-300">{lead}</span>
                    <span className="ml-auto text-[9px] font-mono text-emerald-700">now</span>
                  </motion.div>
                ))}
              </div>

              {/* Scan line */}
              <motion.div
                className="absolute left-0 right-0 h-[1px] pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)" }}
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <div className="absolute bottom-[14%] text-center">
              <span className="text-[10px] font-mono tracking-[0.3em] text-emerald-500 uppercase">
                Conversion Matrix · Active
              </span>
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
            {/* Indigo ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.2) 0%, transparent 60%)" }}
            />

            {/* SVG laser connection lines */}
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 5 }}>
              {PERIPHERAL_NODES.map((node, i) => {
                const cx = 50; // percent
                const cy = 50;
                const rad = (node.angle * Math.PI) / 180;
                // Convert radius to approximate % of container (assume ~400px wide)
                const ex = cx + (Math.cos(rad) * node.radius / 4);
                const ey = cy + (Math.sin(rad) * node.radius / 4);
                return (
                  <motion.line
                    key={i}
                    x1={`${cx}%`} y1={`${cy}%`}
                    x2={`${ex}%`} y2={`${ey}%`}
                    stroke="rgba(139,92,246,0.5)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.2 + i * 0.15 }}
                  />
                );
              })}
              {/* Animated data pulses along lines */}
              {PERIPHERAL_NODES.map((node, i) => {
                const cx = 50;
                const cy = 50;
                const rad = (node.angle * Math.PI) / 180;
                const ex = cx + (Math.cos(rad) * node.radius / 4);
                const ey = cy + (Math.sin(rad) * node.radius / 4);
                return (
                  <motion.circle
                    key={`pulse-${i}`}
                    r="3"
                    fill="#a78bfa"
                    style={{ filter: "drop-shadow(0 0 4px #a78bfa)" }}
                    animate={{
                      cx: [`${cx}%`, `${ex}%`, `${cx}%`],
                      cy: [`${cy}%`, `${ey}%`, `${cy}%`],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: 0.6 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                );
              })}
            </svg>

            {/* Central hub */}
            <motion.div
              className="relative z-10 w-20 h-20 rounded-2xl border flex flex-col items-center justify-center gap-1"
              style={{
                background: "rgba(20,15,45,0.85)",
                borderColor: "rgba(139,92,246,0.5)",
                boxShadow: "0 0 40px rgba(139,92,246,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
              animate={{
                boxShadow: [
                  "0 0 25px rgba(139,92,246,0.2)",
                  "0 0 50px rgba(139,92,246,0.5)",
                  "0 0 25px rgba(139,92,246,0.2)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Globe size={22} className="text-indigo-300" />
              <span className="text-[8px] font-mono text-indigo-400 tracking-widest uppercase">Hub</span>
            </motion.div>

            {/* Peripheral nodes */}
            {PERIPHERAL_NODES.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = Math.cos(rad) * node.radius;
              const y = Math.sin(rad) * node.radius;
              const Icon = node.icon;
              return (
                <motion.div
                  key={i}
                  className="absolute z-10 flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl border backdrop-blur-md"
                  style={{
                    background: "rgba(15,10,35,0.8)",
                    borderColor: "rgba(139,92,246,0.35)",
                    boxShadow: "0 0 20px rgba(139,92,246,0.15)",
                  }}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                  animate={{ x, y, opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <motion.div
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
                  >
                    <Icon size={16} className="text-indigo-300" />
                  </motion.div>
                  <span className="text-[9px] font-mono text-indigo-400 tracking-wider whitespace-nowrap">{node.label}</span>
                </motion.div>
              );
            })}

            <div className="absolute bottom-[12%] text-center z-20">
              <span className="text-[10px] font-mono tracking-[0.3em] text-indigo-400 uppercase">
                Global Ecosystem · Connected
              </span>
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
            {/* Deep cyan ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.18) 0%, transparent 55%)" }}
            />

            {/* Radar / concentric rings */}
            {[0, 1, 2, 3, 4].map((r) => (
              <motion.div
                key={r}
                className="absolute rounded-full border"
                style={{
                  borderColor: `rgba(6,182,212,${0.35 - r * 0.06})`,
                  width: 90 + r * 65,
                  height: 90 + r * 65,
                }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: r * 0.5,
                }}
              />
            ))}

            {/* Central pulsing orb */}
            <motion.div
              className="relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer z-10"
              style={{
                background: "radial-gradient(circle at 35% 35%, rgba(6,182,212,0.55) 0%, rgba(10,20,40,0.95) 70%)",
                border: "1px solid rgba(6,182,212,0.5)",
                boxShadow: "0 0 40px rgba(6,182,212,0.35), 0 0 80px rgba(6,182,212,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
              animate={{
                scale: [1, 1.07, 1],
                boxShadow: [
                  "0 0 30px rgba(6,182,212,0.25), 0 0 60px rgba(6,182,212,0.1)",
                  "0 0 55px rgba(6,182,212,0.55), 0 0 100px rgba(6,182,212,0.25)",
                  "0 0 30px rgba(6,182,212,0.25), 0 0 60px rgba(6,182,212,0.1)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.12 }}
            >
              <motion.div
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowLeft size={32} className="text-white" style={{ filter: "drop-shadow(0 0 8px rgba(6,182,212,0.9))" }} />
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span
                className="text-base font-semibold text-white tracking-wide"
                style={{ textShadow: "0 0 20px rgba(6,182,212,0.6)" }}
              >
                Launch Your Site
              </span>
              <span className="text-[11px] font-mono text-cyan-500 mt-1 tracking-widest uppercase">
                Awaiting your command
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
