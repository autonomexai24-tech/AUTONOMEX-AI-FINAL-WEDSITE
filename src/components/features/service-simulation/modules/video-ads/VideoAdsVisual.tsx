import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  MousePointerClick,
  Eye,
  Play,
  ArrowLeft,
  Mic,
  Film,
  FileText,
  TrendingUp,
  Zap,
  Radio,
} from "lucide-react";

interface VideoAdsVisualProps {
  activePhase?: string;
}

// ── P1: drifting noise blocks ────────────────────────────────────────────────
const NOISE_BLOCKS = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  w: 40 + Math.floor(Math.random() * 80),
  h: 6 + Math.floor(Math.random() * 10),
  x: Math.random() * 90,
  y: Math.random() * 90,
  dur: 6 + Math.random() * 6,
  delay: Math.random() * 4,
}));

// ── P2: timeline tracks ──────────────────────────────────────────────────────
const TRACKS = [
  { icon: FileText, label: "Script", color: "#38bdf8", nodes: [8, 28, 52, 72] },
  { icon: Mic, label: "Audio", color: "#a78bfa", nodes: [15, 40, 60, 85] },
  { icon: Film, label: "Visual", color: "#34d399", nodes: [5, 30, 55, 78] },
];

// ── P3: floating engagement particles ────────────────────────────────────────
const PARTICLES = [
  { Icon: Heart, color: "#f472b6", size: 14 },
  { Icon: Eye, color: "#38bdf8", size: 12 },
  { Icon: MousePointerClick, color: "#a78bfa", size: 13 },
  { Icon: Heart, color: "#fb7185", size: 11 },
  { Icon: TrendingUp, color: "#34d399", size: 12 },
  { Icon: Zap, color: "#fbbf24", size: 11 },
  { Icon: Heart, color: "#f472b6", size: 10 },
  { Icon: Eye, color: "#67e8f9", size: 13 },
];

// ── P4: 3×3 grid cells ───────────────────────────────────────────────────────
const GRID_CELLS = Array.from({ length: 9 }, (_, i) => i);

export default function VideoAdsVisual({ activePhase = "phase-1" }: VideoAdsVisualProps) {
  const isP1 = activePhase === "phase-1";
  const isP2 = activePhase === "phase-2";
  const isP3 = activePhase === "phase-3";
  const isP4 = activePhase === "phase-4";
  const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

  return (
    <div className="relative w-full h-[500px] md:h-full min-h-[500px] flex items-center justify-center overflow-hidden bg-transparent">
      {/* Obsidian Glass Container */}
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden"
        style={{
          background: "radial-gradient(ellipse at 55% 40%, #0d0a1a 0%, #06050f 100%)",
          border: "1px solid rgba(51,40,80,0.55)",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        {/* Dot-grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(168,85,247,0.6) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      {/* ── PHASE 1: The Static Void ─────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {isP1 && (
          <motion.div
            key="p1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(12px)" }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl"
          >
            {/* Dim slate ambient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(71,85,105,0.18) 0%, transparent 65%)" }}
            />

            {/* Drifting noise blocks */}
            {NOISE_BLOCKS.map((b) => (
              <motion.div
                key={b.id}
                className="absolute rounded-sm"
                style={{
                  width: b.w,
                  height: b.h,
                  left: `${b.x}%`,
                  top: `${b.y}%`,
                  background: "rgba(100,116,139,0.12)",
                  border: "1px solid rgba(100,116,139,0.08)",
                }}
                animate={{
                  x: [0, 12, -8, 0],
                  y: [0, -6, 10, 0],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}

            {/* Central ignored text-ad card */}
            <motion.div
              className="relative z-10 rounded-xl border flex flex-col gap-3 p-5"
              style={{
                background: "rgba(15,15,25,0.7)",
                borderColor: "rgba(71,85,105,0.3)",
                width: 200,
                filter: "grayscale(1)",
                opacity: 0.55,
              }}
              animate={{ y: [0, -5, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-slate-700" />
                <div className="flex flex-col gap-1">
                  <div className="w-20 h-2 rounded bg-slate-700" />
                  <div className="w-12 h-1.5 rounded bg-slate-800" />
                </div>
              </div>
              <div className="space-y-1.5">
                {[100, 80, 90, 60].map((w, i) => (
                  <div key={i} className="h-2 rounded" style={{ width: `${w}%`, background: "rgba(71,85,105,0.4)" }} />
                ))}
              </div>
              <div className="w-16 h-6 rounded-md bg-slate-700 opacity-50" />
            </motion.div>

            {/* "Buried" label */}
            <motion.div
              className="absolute bottom-[18%] flex items-center gap-2 px-3 py-1.5 rounded-lg border"
              style={{ background: "rgba(20,15,30,0.8)", borderColor: "rgba(71,85,105,0.35)" }}
              animate={{ opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">0 Impressions · Buried</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHASE 2: The AI Timeline ─────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {isP2 && (
          <motion.div
            key="p2"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl"
          >
            {/* Cyan ambient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.18) 0%, transparent 60%)" }}
            />

            {/* 3D tilted timeline panel */}
            <motion.div
              className="relative rounded-2xl border overflow-hidden"
              style={{
                width: 300,
                background: "rgba(4,10,22,0.88)",
                borderColor: "rgba(6,182,212,0.35)",
                boxShadow: "0 0 50px rgba(6,182,212,0.15), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
              initial={{ rotateX: 25, opacity: 0, y: 20 }}
              animate={{ rotateX: 10, opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "rgba(6,182,212,0.2)" }}>
                <div className="flex items-center gap-2">
                  <Play size={10} className="text-cyan-400" />
                  <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">AI Timeline · Rendering</span>
                </div>
                <motion.div
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </div>

              {/* Tracks */}
              <div className="px-4 py-4 space-y-4 relative">
                {/* Playhead */}
                <motion.div
                  className="absolute top-4 bottom-4 w-[1.5px] z-20 rounded-full"
                  style={{
                    background: "linear-gradient(180deg, rgba(6,182,212,0.9), rgba(6,182,212,0.3))",
                    boxShadow: "0 0 8px rgba(6,182,212,0.8), 0 0 20px rgba(6,182,212,0.3)",
                  }}
                  animate={{ left: ["8%", "92%"] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                />

                {TRACKS.map((track, ti) => (
                  <div key={ti} className="flex items-center gap-3">
                    {/* Track label */}
                    <div className="flex items-center gap-1.5 w-16 flex-shrink-0">
                      <track.icon size={10} style={{ color: track.color }} />
                      <span className="text-[9px] font-mono" style={{ color: track.color }}>{track.label}</span>
                    </div>
                    {/* Track lane */}
                    <div className="flex-1 h-7 rounded-lg relative overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${track.color}22` }}>
                      {/* Nodes snapping in */}
                      {track.nodes.map((pos, ni) => (
                        <motion.div
                          key={ni}
                          className="absolute top-1 bottom-1 rounded-md"
                          style={{
                            left: `${pos}%`,
                            width: "18%",
                            background: `${track.color}22`,
                            border: `1px solid ${track.color}55`,
                            boxShadow: `0 0 8px ${track.color}33`,
                          }}
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.4 + ti * 0.15 + ni * 0.12, ease: [0.16, 1, 0.3, 1] }}
                        />
                      ))}
                    </div>
                  </div>
                ))}

                {/* Progress bar */}
                <div className="h-1 rounded-full overflow-hidden mt-1" style={{ background: "rgba(6,182,212,0.08)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, #06b6d4, #a78bfa)" }}
                    animate={{ width: ["0%", "100%"] }}
                    transition={{ duration: 5.6, repeat: Infinity, ease: "linear" }}
                  />
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-[14%] text-center">
              <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-500 uppercase">AI Timeline · Auto-Editing</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHASE 3: The Engagement Reactor ──────────────────────────────── */}
      <AnimatePresence mode="wait">
        {isP3 && (
          <motion.div
            key="p3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88, filter: "blur(10px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl"
          >
            {/* Magenta ambient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.2) 0%, rgba(168,85,247,0.12) 40%, transparent 65%)" }}
            />

            {/* Floating engagement particles */}
            {PARTICLES.map((p, i) => (
              <motion.div
                key={i}
                className="absolute z-20"
                style={{ left: `${38 + (i % 4) * 7}%` }}
                animate={{
                  y: [20, -160],
                  x: [(i % 2 === 0 ? -1 : 1) * (i * 8), (i % 2 === 0 ? 1 : -1) * (i * 5)],
                  opacity: [0, 1, 1, 0],
                  scale: [0.5, 1, 0.8],
                }}
                transition={{
                  duration: 2.2,
                  delay: i * 0.35,
                  repeat: Infinity,
                  repeatDelay: 0.8,
                  ease: "easeOut",
                }}
              >
                <p.Icon size={p.size} style={{ color: p.color, filter: `drop-shadow(0 0 5px ${p.color})` }} />
              </motion.div>
            ))}

            {/* Phone frame */}
            <motion.div
              className="relative rounded-[28px] border overflow-hidden z-10"
              style={{
                width: 148,
                height: 270,
                background: "rgba(8,4,18,0.92)",
                borderColor: "rgba(236,72,153,0.45)",
                boxShadow: "0 0 60px rgba(236,72,153,0.25), 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-3 py-1.5 border-b" style={{ borderColor: "rgba(236,72,153,0.2)" }}>
                <span className="text-[7px] font-mono text-pink-600">9:41</span>
                <motion.div className="w-1 h-1 rounded-full bg-pink-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
              </div>

              {/* Video content area */}
              <div className="relative flex-1 flex flex-col items-center justify-center" style={{ height: 200 }}>
                {/* Gradient video bg */}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(160deg, rgba(30,10,40,0.9) 0%, rgba(10,5,20,0.95) 100%)" }}
                />
                {/* Play icon */}
                <motion.div
                  className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(236,72,153,0.2)", border: "1px solid rgba(236,72,153,0.4)" }}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                >
                  <Play size={16} className="text-pink-400 ml-0.5" style={{ filter: "drop-shadow(0 0 6px #ec4899)" }} />
                </motion.div>
                {/* Scan line */}
                <motion.div
                  className="absolute left-0 right-0 h-[1px] pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.5), transparent)" }}
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              </div>

              {/* ROI counter */}
              <div className="px-3 py-2 border-t" style={{ borderColor: "rgba(236,72,153,0.2)" }}>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-mono text-pink-700 uppercase tracking-widest">ROI</span>
                  <motion.span
                    className="text-sm font-mono font-bold text-pink-300"
                    style={{ textShadow: "0 0 10px rgba(236,72,153,0.7)" }}
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    ₹4.2L
                  </motion.span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp size={8} className="text-pink-500" />
                  <span className="text-[7px] font-mono text-pink-600">+340% this week</span>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-[14%] text-center">
              <span className="text-[10px] font-mono tracking-[0.3em] text-pink-500 uppercase">Engagement Reactor · Live</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHASE 4: The Omni-Grid Broadcast ─────────────────────────────── */}
      <AnimatePresence mode="wait">
        {isP4 && (
          <motion.div
            key="p4"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl"
          >
            {/* Violet ambient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.22) 0%, transparent 60%)" }}
            />

            {/* SVG laser connections */}
            <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 5 }}>
              {/* Horizontal lines */}
              {[0, 1].map((r) =>
                [0, 1].map((c) => (
                  <motion.line
                    key={`h-${r}-${c}`}
                    x1={`${28 + c * 22}%`} y1={`${35 + r * 22}%`}
                    x2={`${28 + (c + 1) * 22}%`} y2={`${35 + r * 22}%`}
                    stroke="rgba(139,92,246,0.4)" strokeWidth="0.8" strokeDasharray="3 3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 + r * 0.1 + c * 0.1 }}
                  />
                ))
              )}
              {/* Vertical lines */}
              {[0, 1].map((c) =>
                [0, 1].map((r) => (
                  <motion.line
                    key={`v-${c}-${r}`}
                    x1={`${28 + c * 22}%`} y1={`${35 + r * 22}%`}
                    x2={`${28 + c * 22}%`} y2={`${35 + (r + 1) * 22}%`}
                    stroke="rgba(139,92,246,0.4)" strokeWidth="0.8" strokeDasharray="3 3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 + c * 0.1 + r * 0.1 }}
                  />
                ))
              )}
            </svg>

            {/* 3×3 isometric grid */}
            <motion.div
              className="grid gap-2.5 z-10"
              style={{
                gridTemplateColumns: "repeat(3, 1fr)",
                transform: "rotateX(30deg) rotateZ(-15deg) scale(0.85)",
                transformStyle: "preserve-3d",
              }}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 0.85, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              {GRID_CELLS.map((i) => (
                <motion.div
                  key={i}
                  className="rounded-xl border overflow-hidden flex flex-col"
                  style={{
                    width: 72,
                    height: 110,
                    background: "rgba(15,8,30,0.85)",
                    borderColor: "rgba(139,92,246,0.35)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 8px rgba(139,92,246,0.1)",
                      "0 0 22px rgba(139,92,246,0.45)",
                      "0 0 8px rgba(139,92,246,0.1)",
                    ],
                    borderColor: [
                      "rgba(139,92,246,0.2)",
                      "rgba(168,85,247,0.65)",
                      "rgba(139,92,246,0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: (i % 3) * 0.22 + Math.floor(i / 3) * 0.15,
                  }}
                >
                  {/* Mini video gradient */}
                  <div
                    className="flex-1"
                    style={{
                      background: `linear-gradient(160deg, rgba(${30 + (i % 3) * 15},10,${40 + i * 5},0.9) 0%, rgba(8,4,18,0.95) 100%)`,
                    }}
                  />
                  {/* Mini bar */}
                  <div className="px-1.5 py-1 border-t" style={{ borderColor: "rgba(139,92,246,0.2)" }}>
                    <div className="flex items-end gap-0.5 h-3">
                      {[0, 1, 2].map((b) => (
                        <motion.div
                          key={b}
                          className="flex-1 rounded-sm"
                          style={{ background: "rgba(139,92,246,0.6)" }}
                          animate={{ height: ["3px", `${6 + b * 3}px`, "3px"] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: b * 0.15 + i * 0.07, ease: "easeInOut" }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="absolute bottom-[12%] text-center z-20">
              <span className="text-[10px] font-mono tracking-[0.3em] text-violet-400 uppercase">Omni-Grid · Broadcasting</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── PHASE 5 / CTA: The Ignition Switch ───────────────────────────── */}
      <AnimatePresence mode="wait">
        {isCTA && (
          <motion.div
            key="cta"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(12px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden rounded-3xl"
          >
            {/* Magenta ambient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.2) 0%, rgba(139,92,246,0.1) 40%, transparent 60%)" }}
            />

            {/* Concentric radar rings */}
            {[0, 1, 2, 3, 4].map((r) => (
              <motion.div
                key={r}
                className="absolute rounded-full border"
                style={{
                  borderColor: `rgba(236,72,153,${0.38 - r * 0.07})`,
                  width: 90 + r * 65,
                  height: 90 + r * 65,
                }}
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: r * 0.5 }}
              />
            ))}

            {/* Central pulsing orb */}
            <motion.div
              className="relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer z-10"
              style={{
                background: "radial-gradient(circle at 35% 35%, rgba(236,72,153,0.55) 0%, rgba(20,6,18,0.95) 70%)",
                border: "1px solid rgba(236,72,153,0.5)",
                boxShadow: "0 0 40px rgba(236,72,153,0.35), 0 0 80px rgba(168,85,247,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
              animate={{
                scale: [1, 1.07, 1],
                boxShadow: [
                  "0 0 30px rgba(236,72,153,0.25), 0 0 60px rgba(168,85,247,0.1)",
                  "0 0 55px rgba(236,72,153,0.6), 0 0 100px rgba(168,85,247,0.25)",
                  "0 0 30px rgba(236,72,153,0.25), 0 0 60px rgba(168,85,247,0.1)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.12 }}
            >
              <motion.div
                animate={{ x: [-3, 3, -3] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowLeft size={32} className="text-white" style={{ filter: "drop-shadow(0 0 8px rgba(236,72,153,0.9))" }} />
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
                style={{ textShadow: "0 0 20px rgba(236,72,153,0.6)" }}
              >
                Launch Your Campaign
              </span>
              <span className="text-[11px] font-mono text-pink-500 mt-1 tracking-widest uppercase">
                Awaiting your command
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
