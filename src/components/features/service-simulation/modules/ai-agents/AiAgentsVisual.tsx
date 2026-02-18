import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Clock,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
  Cpu,
} from "lucide-react";

interface AiAgentsVisualProps {
  activePhase?: string;
}

// ─── Chaos cards for Desktop Phase 1 ────────────────────────────────────────
const CHAOS_CARDS = [
  { icon: FileText, label: "Invoice #4821", color: "#f97316" },
  { icon: Clock, label: "Overdue 3d", color: "#ef4444" },
  { icon: AlertTriangle, label: "Error 503", color: "#f59e0b" },
  { icon: FileText, label: "Report Q3", color: "#f97316" },
  { icon: Clock, label: "Pending...", color: "#ef4444" },
  { icon: AlertTriangle, label: "Conflict", color: "#f59e0b" },
  { icon: FileText, label: "Data Dump", color: "#f97316" },
  { icon: Clock, label: "Timeout", color: "#ef4444" },
  { icon: AlertTriangle, label: "Warning", color: "#f59e0b" },
  { icon: FileText, label: "Log #9921", color: "#f97316" },
  { icon: Clock, label: "Stalled", color: "#ef4444" },
  { icon: AlertTriangle, label: "Critical", color: "#f59e0b" },
];

// Pre-computed stable positions so cards don't jump on re-render
const CARD_POSITIONS = [
  { x: -160, y: -130, z: 40, rx: -20, ry: 25, rz: -8 },
  { x: 120, y: -100, z: 80, rx: 15, ry: -30, rz: 12 },
  { x: -80, y: 80, z: 60, rx: -10, ry: 20, rz: 5 },
  { x: 170, y: 60, z: 20, rx: 25, ry: -15, rz: -10 },
  { x: -190, y: 10, z: 100, rx: -30, ry: 10, rz: 15 },
  { x: 50, y: -160, z: 50, rx: 10, ry: -25, rz: -5 },
  { x: -50, y: 150, z: 30, rx: -15, ry: 30, rz: 8 },
  { x: 200, y: -40, z: 70, rx: 20, ry: -10, rz: 20 },
  { x: -140, y: -60, z: 90, rx: -25, ry: 15, rz: -12 },
  { x: 90, y: 130, z: 40, rx: 5, ry: -20, rz: 6 },
  { x: -220, y: 90, z: 55, rx: -12, ry: 25, rz: -18 },
  { x: 150, y: -170, z: 85, rx: 18, ry: -35, rz: 10 },
];

// ─── Grid nodes for Desktop Phase 4 ─────────────────────────────────────────
const GRID = Array.from({ length: 16 }, (_, i) => i);

// ─── Mobile Phase 1 error cards ──────────────────────────────────────────────
const MOBILE_ERRORS = [
  { label: "[ERR] Manual Bottleneck", sub: "Invoice queue: 47 pending" },
  { label: "[ERR] Data Entry Failure", sub: "3 records corrupted" },
  { label: "[ERR] Report Overdue", sub: "Q3 report: 5 days late" },
  { label: "[ERR] Manual Bottleneck", sub: "Invoice queue: 47 pending" },
  { label: "[ERR] Data Entry Failure", sub: "3 records corrupted" },
  { label: "[ERR] Report Overdue", sub: "Q3 report: 5 days late" },
];

// ─── Mobile Phase 3 tasks ────────────────────────────────────────────────────
const MOBILE_TASKS = [
  { label: "Invoice Processed", time: "8ms" },
  { label: "Report Generated", time: "11ms" },
  { label: "Data Synced", time: "14ms" },
];

export default function AiAgentsVisual({ activePhase = "phase-1" }: AiAgentsVisualProps) {
  const isP1  = activePhase === "phase-1";
  const isP2  = activePhase === "phase-2";
  const isP3  = activePhase === "phase-3";
  const isP4  = activePhase === "phase-4";
  const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

  // ── Shared outer wrapper ──────────────────────────────────────────────────
  return (
    <div
      className="w-full h-[500px] md:h-full min-h-[500px] relative overflow-hidden rounded-3xl font-sans"
      style={{ background: "radial-gradient(ellipse at 60% 40%, #0d1117 0%, #060810 100%)" }}
    >

      {/* ════════════════════════════════════════════════════════════════════
          DESKTOP VISUAL — hidden on mobile, shown md+
          (Original 3D code 100% preserved)
      ════════════════════════════════════════════════════════════════════ */}
      <div
        className="hidden md:flex absolute inset-0 items-center justify-center overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        {/* Subtle star-field dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1,
                height: Math.random() * 2 + 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.25 + 0.05,
              }}
            />
          ))}
        </div>

        {/* ── PHASE 1: Vortex of Chaos ──────────────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP1 && (
            <motion.div
              key="p1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.18) 0%, transparent 65%)" }}
              />
              {CHAOS_CARDS.map((card, i) => {
                const pos = CARD_POSITIONS[i];
                const Icon = card.icon;
                const delay = i * 0.08;
                return (
                  <motion.div
                    key={i}
                    className="absolute flex items-center gap-1.5 px-3 py-2 rounded-xl border backdrop-blur-md"
                    style={{
                      background: "rgba(15,10,10,0.55)",
                      borderColor: `${card.color}55`,
                      boxShadow: `0 0 18px ${card.color}33, inset 0 1px 0 rgba(255,255,255,0.06)`,
                      transformStyle: "preserve-3d",
                    }}
                    initial={{ opacity: 0, x: 0, y: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }}
                    animate={{
                      opacity: [0.6, 0.9, 0.6],
                      x: [pos.x, pos.x + 12, pos.x - 8, pos.x],
                      y: [pos.y, pos.y - 10, pos.y + 14, pos.y],
                      rotateX: [pos.rx, pos.rx + 8, pos.rx - 5, pos.rx],
                      rotateY: [pos.ry, pos.ry - 10, pos.ry + 6, pos.ry],
                      rotateZ: [pos.rz, pos.rz + 4, pos.rz - 3, pos.rz],
                    }}
                    transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut", delay }}
                  >
                    <Icon size={12} style={{ color: card.color }} />
                    <span className="text-[10px] font-mono font-semibold" style={{ color: card.color }}>
                      {card.label}
                    </span>
                  </motion.div>
                );
              })}
              <motion.div
                className="relative z-10 flex flex-col items-center"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <AlertTriangle size={28} className="text-red-400 mb-1" />
                <span className="text-[11px] font-mono tracking-[0.25em] text-red-400 uppercase">Manual Chaos</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PHASE 2: The Monolith & The Scan ─────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP2 && (
            <motion.div
              key="p2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.2) 0%, transparent 65%)" }}
              />
              <div className="absolute flex gap-3" style={{ top: "30%", transform: "translateY(-50%)" }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center gap-1 px-2 py-2 rounded-lg border backdrop-blur-md"
                    style={{ background: "rgba(10,20,40,0.6)", borderColor: "rgba(59,130,246,0.3)", boxShadow: "0 0 12px rgba(59,130,246,0.15)" }}
                    initial={{ x: (i - 2) * 80, opacity: 0 }}
                    animate={{ x: (i - 2) * 56, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <FileText size={14} className="text-blue-300" />
                    <span className="text-[8px] font-mono text-blue-400">doc_{i + 1}</span>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="relative flex items-center justify-center"
                initial={{ y: -120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative w-28 h-28" style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg) rotateY(-30deg)" }}>
                  <div
                    className="absolute inset-0 rounded-2xl border backdrop-blur-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(30,50,90,0.8) 0%, rgba(10,20,50,0.9) 100%)",
                      borderColor: "rgba(99,179,255,0.4)",
                      boxShadow: "0 0 40px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
                      transform: "translateZ(14px)",
                    }}
                  >
                    <Cpu size={32} className="text-blue-300" />
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "linear-gradient(180deg, rgba(99,179,255,0.25) 0%, rgba(30,60,120,0.4) 100%)",
                      border: "1px solid rgba(99,179,255,0.3)",
                      transform: "rotateX(90deg) translateZ(14px)",
                      transformOrigin: "top",
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background: "linear-gradient(90deg, rgba(20,40,80,0.6) 0%, rgba(10,20,50,0.8) 100%)",
                      border: "1px solid rgba(59,130,246,0.2)",
                      transform: "rotateY(90deg) translateZ(14px)",
                      transformOrigin: "right",
                    }}
                  />
                </div>
                <motion.div
                  className="absolute left-[-80px] right-[-80px] h-[2px] rounded-full"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(99,179,255,0.9), rgba(147,210,255,1), rgba(99,179,255,0.9), transparent)",
                    boxShadow: "0 0 12px rgba(99,179,255,0.8), 0 0 30px rgba(59,130,246,0.4)",
                  }}
                  animate={{ top: ["20%", "80%", "20%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <div className="absolute bottom-[18%] text-center">
                <span className="text-[10px] font-mono tracking-[0.3em] text-blue-400 uppercase">AI Prism · Scanning</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PHASE 3: The Silent Hologram ──────────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP3 && (
            <motion.div
              key="p3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.2) 0%, transparent 65%)" }}
              />
              <motion.div
                className="relative w-72 rounded-2xl border backdrop-blur-xl overflow-hidden"
                style={{
                  background: "rgba(5,25,20,0.75)",
                  borderColor: "rgba(16,185,129,0.35)",
                  boxShadow: "0 0 50px rgba(16,185,129,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
                  transform: "rotateX(8deg) rotateY(-6deg)",
                }}
                initial={{ rotateX: 25, rotateY: -20, opacity: 0 }}
                animate={{ rotateX: 8, rotateY: -6, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #10b981" }} />
                    <span className="text-[10px] font-mono text-emerald-400 tracking-widest uppercase">AI Engine · Live</span>
                  </div>
                  <div className="flex gap-1">
                    {[0, 1, 2].map((d) => (
                      <div key={d} className="w-1.5 h-1.5 rounded-full" style={{ background: d === 0 ? "#10b981" : "rgba(16,185,129,0.3)" }} />
                    ))}
                  </div>
                </div>
                <div className="px-4 pt-3 pb-2">
                  <span className="text-[9px] font-mono text-emerald-600 tracking-widest uppercase">Throughput</span>
                  <div className="flex items-end gap-1.5 mt-2 h-12">
                    {[60, 80, 45, 95, 70, 100, 85, 90, 75, 88].map((h, i) => (
                      <motion.div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{ background: "linear-gradient(180deg, #10b981 0%, #065f46 100%)", boxShadow: "0 0 6px rgba(16,185,129,0.4)" }}
                        animate={{ height: [`${h * 0.5}%`, `${Math.min(h + 15, 100)}%`, `${h * 0.5}%`] }}
                        transition={{ duration: 1.5 + i * 0.1, repeat: Infinity, ease: "easeInOut", delay: i * 0.08 }}
                      />
                    ))}
                  </div>
                </div>
                <div className="px-4 pb-4 space-y-2">
                  {["Invoice Processed", "Report Generated", "Alert Resolved", "Data Synced"].map((task, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-2"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + i * 0.12 }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.3 }}
                      >
                        <CheckCircle2 size={12} className="text-emerald-400" style={{ filter: "drop-shadow(0 0 4px #10b981)" }} />
                      </motion.div>
                      <span className="text-[10px] font-mono text-emerald-300">{task}</span>
                      <span className="ml-auto text-[9px] font-mono text-emerald-600">{8 + i * 3}ms</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="absolute left-0 right-0 h-[1px] pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.6), transparent)" }}
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <div className="absolute bottom-[14%] text-center">
                <span className="text-[10px] font-mono tracking-[0.3em] text-emerald-500 uppercase">Processing · 100% Automated</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PHASE 4: The Isometric Grid ───────────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP4 && (
            <motion.div
              key="p4"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.22) 0%, transparent 65%)" }}
              />
              <motion.div
                className="grid gap-3"
                style={{ gridTemplateColumns: "repeat(4, 1fr)", transform: "rotateX(20deg) rotateY(-15deg) scale(0.88)", transformStyle: "preserve-3d" }}
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 0.88, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {GRID.map((i) => (
                  <motion.div
                    key={i}
                    className="w-14 h-14 rounded-xl border backdrop-blur-md flex flex-col items-center justify-center gap-1"
                    style={{ background: "rgba(20,15,45,0.7)", borderColor: "rgba(99,102,241,0.35)", boxShadow: "0 0 18px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.05)" }}
                    animate={{
                      boxShadow: ["0 0 12px rgba(99,102,241,0.15)", "0 0 28px rgba(99,102,241,0.45)", "0 0 12px rgba(99,102,241,0.15)"],
                      borderColor: ["rgba(99,102,241,0.25)", "rgba(139,92,246,0.7)", "rgba(99,102,241,0.25)"],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: (i % 4) * 0.18 + Math.floor(i / 4) * 0.12 }}
                  >
                    <Cpu size={14} className="text-indigo-400" />
                    <div className="flex gap-0.5">
                      {[0, 1, 2].map((d) => (
                        <motion.div
                          key={d}
                          className="w-1 rounded-full bg-indigo-500"
                          animate={{ height: ["4px", "10px", "4px"] }}
                          transition={{ duration: 0.7, repeat: Infinity, delay: d * 0.15 + i * 0.05, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="absolute bottom-[12%] flex flex-col items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-3xl font-light font-mono text-white tracking-tighter" style={{ textShadow: "0 0 20px rgba(139,92,246,0.8)" }}>
                  1,000+
                </span>
                <span className="text-[9px] font-mono tracking-[0.3em] text-indigo-400 uppercase mt-0.5">Concurrent Executions</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PHASE 5 / CTA: The Pulse Portal ──────────────────────────── */}
        <AnimatePresence mode="wait">
          {isCTA && (
            <motion.div
              key="cta"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.22) 0%, transparent 60%)" }}
              />
              {[0, 1, 2, 3].map((r) => (
                <motion.div
                  key={r}
                  className="absolute rounded-full border"
                  style={{ borderColor: `rgba(139,92,246,${0.35 - r * 0.07})`, width: 100 + r * 60, height: 100 + r * 60 }}
                  animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut", delay: r * 0.55 }}
                />
              ))}
              <motion.div
                className="relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer z-10"
                style={{
                  background: "radial-gradient(circle at 35% 35%, rgba(139,92,246,0.6) 0%, rgba(30,15,60,0.95) 70%)",
                  border: "1px solid rgba(139,92,246,0.5)",
                  boxShadow: "0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(99,102,241,0.2), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
                animate={{
                  scale: [1, 1.06, 1],
                  boxShadow: [
                    "0 0 30px rgba(139,92,246,0.3), 0 0 60px rgba(99,102,241,0.15)",
                    "0 0 55px rgba(139,92,246,0.6), 0 0 100px rgba(99,102,241,0.3)",
                    "0 0 30px rgba(139,92,246,0.3), 0 0 60px rgba(99,102,241,0.15)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div animate={{ x: [-2, 2, -2] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowLeft size={32} className="text-white" style={{ filter: "drop-shadow(0 0 8px rgba(139,92,246,0.9))" }} />
                </motion.div>
              </motion.div>
              <motion.div
                className="mt-6 flex flex-col items-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-base font-semibold text-white tracking-wide" style={{ textShadow: "0 0 20px rgba(139,92,246,0.6)" }}>
                  Initiate System
                </span>
                <span className="text-[11px] font-mono text-indigo-400 mt-1 tracking-widest uppercase">Awaiting your command</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ════════════════════════════════════════════════════════════════════
          MOBILE VISUAL — shown on mobile only, hidden md+
          Flat 2D, Y-axis only, no 3D transforms, minimal backdrop-blur
      ════════════════════════════════════════════════════════════════════ */}
      <div className="flex md:hidden absolute inset-0 items-center justify-center overflow-hidden">

        {/* ── MOBILE PHASE 1: Terminal Error Scroll ─────────────────────── */}
        <AnimatePresence mode="wait">
          {isP1 && (
            <motion.div
              key="m-p1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-5 overflow-hidden"
            >
              {/* Dim red ambient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.14) 0%, transparent 70%)" }}
              />

              {/* Scrolling error cards */}
              <div className="relative w-full overflow-hidden" style={{ height: 280 }}>
                <motion.div
                  className="flex flex-col gap-3 absolute w-full"
                  animate={{ y: [0, -280] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  {MOBILE_ERRORS.map((err, i) => (
                    <div
                      key={i}
                      className="w-full rounded-xl border px-4 py-3 flex items-start gap-3"
                      style={{
                        background: "rgba(30,10,10,0.7)",
                        borderColor: "rgba(239,68,68,0.35)",
                        boxShadow: "0 0 12px rgba(239,68,68,0.12)",
                      }}
                    >
                      <AlertTriangle size={18} className="text-red-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-mono font-bold text-red-400">{err.label}</div>
                        <div className="text-xs font-mono text-red-700 mt-0.5">{err.sub}</div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Label */}
              <motion.div
                className="mt-4 flex items-center gap-2"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="text-xs font-mono tracking-widest text-red-500 uppercase">Manual Chaos · Active</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 2: The Core Scan ─────────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP2 && (
            <motion.div
              key="m-p2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-8"
            >
              {/* Blue ambient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 30%, rgba(59,130,246,0.18) 0%, transparent 65%)" }}
              />

              {/* CPU icon — large, glowing */}
              <motion.div
                className="relative flex items-center justify-center rounded-full z-10"
                style={{
                  width: 88,
                  height: 88,
                  background: "radial-gradient(circle at 35% 35%, #1e3a6e 0%, #0b1120 70%)",
                  border: "1px solid rgba(59,130,246,0.5)",
                  boxShadow: "0 0 30px rgba(59,130,246,0.4), 0 0 60px rgba(59,130,246,0.15)",
                }}
                animate={{
                  scale: [1, 1.06, 1],
                  boxShadow: [
                    "0 0 20px rgba(59,130,246,0.3)",
                    "0 0 45px rgba(59,130,246,0.6)",
                    "0 0 20px rgba(59,130,246,0.3)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Cpu size={36} className="text-blue-300" style={{ filter: "drop-shadow(0 0 8px rgba(147,197,253,0.8))" }} />
              </motion.div>

              {/* Data file block with laser scan */}
              <div className="relative w-full rounded-2xl border overflow-hidden" style={{
                background: "rgba(8,18,40,0.8)",
                borderColor: "rgba(59,130,246,0.3)",
                boxShadow: "0 0 20px rgba(59,130,246,0.1)",
              }}>
                <div className="px-5 py-4">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText size={16} className="text-blue-400" />
                    <span className="text-sm font-mono font-bold text-blue-300">data_batch_4821.json</span>
                  </div>
                  <div className="space-y-2">
                    {[90, 70, 85, 55].map((w, i) => (
                      <div key={i} className="h-2 rounded-full" style={{ width: `${w}%`, background: "rgba(59,130,246,0.25)", border: "1px solid rgba(59,130,246,0.2)" }} />
                    ))}
                  </div>
                </div>

                {/* Laser sweep */}
                <motion.div
                  className="absolute left-0 right-0 h-[2px] pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent, rgba(99,179,255,0.9), rgba(147,210,255,1), rgba(99,179,255,0.9), transparent)",
                    boxShadow: "0 0 10px rgba(99,179,255,0.8), 0 0 24px rgba(59,130,246,0.4)",
                  }}
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              <span className="text-xs font-mono tracking-[0.25em] text-blue-400 uppercase z-10">AI Prism · Scanning</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 3: The Action Log ────────────────────────────── */}
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
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.16) 0%, transparent 65%)" }}
              />

              {/* Header */}
              <div className="flex items-center gap-2 z-10">
                <motion.div
                  className="w-2.5 h-2.5 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  style={{ boxShadow: "0 0 8px #10b981" }}
                />
                <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">AI Engine · Live</span>
              </div>

              {/* Task rows */}
              <div className="w-full space-y-3 z-10">
                {MOBILE_TASKS.map((task, i) => (
                  <motion.div
                    key={i}
                    className="w-full rounded-xl border flex items-center gap-4 px-4 py-4"
                    style={{
                      background: "rgba(5,25,20,0.75)",
                      borderColor: "rgba(16,185,129,0.3)",
                      boxShadow: "0 0 14px rgba(16,185,129,0.1)",
                    }}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.18, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.35, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.4 }}
                    >
                      <CheckCircle2
                        size={22}
                        className="text-emerald-400 flex-shrink-0"
                        style={{ filter: "drop-shadow(0 0 5px #10b981)" }}
                      />
                    </motion.div>
                    <span className="text-base font-mono font-semibold text-emerald-200 flex-1">{task.label}</span>
                    <span className="text-xs font-mono text-emerald-600">{task.time}</span>
                  </motion.div>
                ))}
              </div>

              <span className="text-xs font-mono tracking-[0.25em] text-emerald-500 uppercase z-10">Processing · 100% Automated</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 4: The Micro-Grid ────────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP4 && (
            <motion.div
              key="m-p4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-8"
            >
              {/* Purple ambient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.2) 0%, transparent 65%)" }}
              />

              {/* 2×2 grid */}
              <div className="grid gap-4 z-10" style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className="rounded-2xl border flex flex-col items-center justify-center gap-2"
                    style={{
                      width: 110,
                      height: 110,
                      background: "rgba(20,15,45,0.8)",
                      borderColor: "rgba(99,102,241,0.4)",
                    }}
                    animate={{
                      boxShadow: [
                        "0 0 12px rgba(99,102,241,0.15)",
                        "0 0 32px rgba(99,102,241,0.5)",
                        "0 0 12px rgba(99,102,241,0.15)",
                      ],
                      borderColor: [
                        "rgba(99,102,241,0.3)",
                        "rgba(139,92,246,0.75)",
                        "rgba(99,102,241,0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.35 }}
                  >
                    <Cpu size={24} className="text-indigo-400" style={{ filter: "drop-shadow(0 0 6px rgba(99,102,241,0.7))" }} />
                    <div className="flex gap-1 items-end h-5">
                      {[0, 1, 2].map((d) => (
                        <motion.div
                          key={d}
                          className="w-1.5 rounded-full bg-indigo-500"
                          animate={{ height: ["4px", "14px", "4px"] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.18 + i * 0.1, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Big typography */}
              <motion.div
                className="flex flex-col items-center z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <span
                  className="text-5xl font-light font-mono text-white tracking-tighter"
                  style={{ textShadow: "0 0 24px rgba(139,92,246,0.9)" }}
                >
                  1,000+
                </span>
                <span className="text-xs font-mono tracking-[0.25em] text-indigo-400 uppercase mt-1">
                  Concurrent Executions
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 5 / CTA: The Pulse Button ────────────────────── */}
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
              {/* Violet ambient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.2) 0%, transparent 60%)" }}
              />

              {/* Radar rings */}
              {[0, 1, 2, 3].map((r) => (
                <motion.div
                  key={r}
                  className="absolute rounded-full border"
                  style={{
                    borderColor: `rgba(139,92,246,${0.35 - r * 0.07})`,
                    width: 110 + r * 55,
                    height: 110 + r * 55,
                  }}
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
                  background: "radial-gradient(circle at 35% 35%, rgba(139,92,246,0.6) 0%, rgba(30,15,60,0.95) 70%)",
                  border: "1px solid rgba(139,92,246,0.5)",
                  boxShadow: "0 0 40px rgba(139,92,246,0.4), inset 0 1px 0 rgba(255,255,255,0.1)",
                }}
                animate={{
                  scale: [1, 1.07, 1],
                  boxShadow: [
                    "0 0 30px rgba(139,92,246,0.3)",
                    "0 0 55px rgba(139,92,246,0.65)",
                    "0 0 30px rgba(139,92,246,0.3)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div
                  animate={{ x: [-3, 3, -3] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowLeft size={36} className="text-white" style={{ filter: "drop-shadow(0 0 8px rgba(139,92,246,0.9))" }} />
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.div
                className="flex flex-col items-center z-10"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span
                  className="text-xl font-semibold text-white tracking-wide"
                  style={{ textShadow: "0 0 20px rgba(139,92,246,0.6)" }}
                >
                  Initiate System
                </span>
                <span className="text-sm font-mono text-indigo-400 mt-1 tracking-widest uppercase">
                  Awaiting your command
                </span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
