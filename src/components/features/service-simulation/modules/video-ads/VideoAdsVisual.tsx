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
  Instagram,
  Youtube,
  Globe,
} from "lucide-react";

interface VideoAdsVisualProps {
  activePhase?: string;
}

// ── Desktop P1: drifting noise blocks ────────────────────────────────────────
const NOISE_BLOCKS = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  w: 40 + Math.floor(Math.random() * 80),
  h: 6 + Math.floor(Math.random() * 10),
  x: Math.random() * 90,
  y: Math.random() * 90,
  dur: 6 + Math.random() * 6,
  delay: Math.random() * 4,
}));

// ── Desktop P2: timeline tracks ──────────────────────────────────────────────
const TRACKS = [
  { icon: FileText, label: "Script", color: "#38bdf8", nodes: [8, 28, 52, 72] },
  { icon: Mic, label: "Audio", color: "#a78bfa", nodes: [15, 40, 60, 85] },
  { icon: Film, label: "Visual", color: "#34d399", nodes: [5, 30, 55, 78] },
];

// ── Desktop P3: floating engagement particles ─────────────────────────────────
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

// ── Desktop P4: 3×3 grid cells ───────────────────────────────────────────────
const GRID_CELLS = Array.from({ length: 9 }, (_, i) => i);

// ── Mobile P3: floating engagement icons (stable, no Math.random on render) ──
const MOBILE_PARTICLES = [
  { Icon: Heart, color: "#f472b6", x: "72%", delay: 0, dur: 1.8 },
  { Icon: Heart, color: "#fb7185", x: "80%", delay: 0.4, dur: 2.0 },
  { Icon: Eye, color: "#38bdf8", x: "65%", delay: 0.7, dur: 1.6 },
  { Icon: MousePointerClick, color: "#a78bfa", x: "76%", delay: 1.1, dur: 1.9 },
  { Icon: Play, color: "#34d399", x: "68%", delay: 1.5, dur: 1.7 },
  { Icon: Heart, color: "#f472b6", x: "83%", delay: 0.2, dur: 2.1 },
];

// ── Mobile P4: platform nodes ─────────────────────────────────────────────────
const PLATFORM_NODES = [
  { Icon: Youtube, label: "YouTube", color: "#ef4444", tx: 0, ty: -110 },
  { Icon: Instagram, label: "Instagram", color: "#f472b6", tx: -110, ty: 30 },
  { Icon: Globe, label: "Web", color: "#38bdf8", tx: 110, ty: 30 },
];

export default function VideoAdsVisual({ activePhase = "phase-1" }: VideoAdsVisualProps) {
  const isP1 = activePhase === "phase-1";
  const isP2 = activePhase === "phase-2";
  const isP3 = activePhase === "phase-3";
  const isP4 = activePhase === "phase-4";
  const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

  return (
    <div className="relative w-full h-[500px] md:h-full min-h-[500px] flex items-center justify-center overflow-hidden bg-transparent">

      {/* ════════════════════════════════════════════════════════════════════
          DESKTOP VISUAL — hidden on mobile, shown md+
          (Original code 100% preserved)
      ════════════════════════════════════════════════════════════════════ */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center overflow-hidden">

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

        {/* ── PHASE 1: The Static Void ──────────────────────────────────── */}
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
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(71,85,105,0.18) 0%, transparent 65%)" }} />
              {NOISE_BLOCKS.map((b) => (
                <motion.div
                  key={b.id}
                  className="absolute rounded-sm"
                  style={{ width: b.w, height: b.h, left: `${b.x}%`, top: `${b.y}%`, background: "rgba(100,116,139,0.12)", border: "1px solid rgba(100,116,139,0.08)" }}
                  animate={{ x: [0, 12, -8, 0], y: [0, -6, 10, 0], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
              <motion.div
                className="relative z-10 rounded-xl border flex flex-col gap-3 p-5"
                style={{ background: "rgba(15,15,25,0.7)", borderColor: "rgba(71,85,105,0.3)", width: 200, filter: "grayscale(1)", opacity: 0.55 }}
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

        {/* ── PHASE 2: The AI Timeline ──────────────────────────────────── */}
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
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.18) 0%, transparent 60%)" }} />
              <motion.div
                className="relative rounded-2xl border overflow-hidden"
                style={{ width: 300, background: "rgba(4,10,22,0.88)", borderColor: "rgba(6,182,212,0.35)", boxShadow: "0 0 50px rgba(6,182,212,0.15), inset 0 1px 0 rgba(255,255,255,0.04)" }}
                initial={{ rotateX: 25, opacity: 0, y: 20 }}
                animate={{ rotateX: 10, opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between px-4 py-2.5 border-b" style={{ borderColor: "rgba(6,182,212,0.2)" }}>
                  <div className="flex items-center gap-2">
                    <Play size={10} className="text-cyan-400" />
                    <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">AI Timeline · Rendering</span>
                  </div>
                  <motion.div className="w-1.5 h-1.5 rounded-full bg-cyan-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }} />
                </div>
                <div className="px-4 py-4 space-y-4 relative">
                  <motion.div
                    className="absolute top-4 bottom-4 w-[1.5px] z-20 rounded-full"
                    style={{ background: "linear-gradient(180deg, rgba(6,182,212,0.9), rgba(6,182,212,0.3))", boxShadow: "0 0 8px rgba(6,182,212,0.8), 0 0 20px rgba(6,182,212,0.3)" }}
                    animate={{ left: ["8%", "92%"] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                  {TRACKS.map((track, ti) => (
                    <div key={ti} className="flex items-center gap-3">
                      <div className="flex items-center gap-1.5 w-16 flex-shrink-0">
                        <track.icon size={10} style={{ color: track.color }} />
                        <span className="text-[9px] font-mono" style={{ color: track.color }}>{track.label}</span>
                      </div>
                      <div className="flex-1 h-7 rounded-lg relative overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${track.color}22` }}>
                        {track.nodes.map((pos, ni) => (
                          <motion.div
                            key={ni}
                            className="absolute top-1 bottom-1 rounded-md"
                            style={{ left: `${pos}%`, width: "18%", background: `${track.color}22`, border: `1px solid ${track.color}55`, boxShadow: `0 0 8px ${track.color}33` }}
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 + ti * 0.15 + ni * 0.12, ease: [0.16, 1, 0.3, 1] }}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                  <div className="h-1 rounded-full overflow-hidden mt-1" style={{ background: "rgba(6,182,212,0.08)" }}>
                    <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #06b6d4, #a78bfa)" }} animate={{ width: ["0%", "100%"] }} transition={{ duration: 5.6, repeat: Infinity, ease: "linear" }} />
                  </div>
                </div>
              </motion.div>
              <div className="absolute bottom-[14%] text-center">
                <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-500 uppercase">AI Timeline · Auto-Editing</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── PHASE 3: The Engagement Reactor ──────────────────────────── */}
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
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.2) 0%, rgba(168,85,247,0.12) 40%, transparent 65%)" }} />
              {PARTICLES.map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute z-20"
                  style={{ left: `${38 + (i % 4) * 7}%` }}
                  animate={{ y: [20, -160], x: [(i % 2 === 0 ? -1 : 1) * (i * 8), (i % 2 === 0 ? 1 : -1) * (i * 5)], opacity: [0, 1, 1, 0], scale: [0.5, 1, 0.8] }}
                  transition={{ duration: 2.2, delay: i * 0.35, repeat: Infinity, repeatDelay: 0.8, ease: "easeOut" }}
                >
                  <p.Icon size={p.size} style={{ color: p.color, filter: `drop-shadow(0 0 5px ${p.color})` }} />
                </motion.div>
              ))}
              <motion.div
                className="relative rounded-[28px] border overflow-hidden z-10"
                style={{ width: 148, height: 270, background: "rgba(8,4,18,0.92)", borderColor: "rgba(236,72,153,0.45)", boxShadow: "0 0 60px rgba(236,72,153,0.25), 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between px-3 py-1.5 border-b" style={{ borderColor: "rgba(236,72,153,0.2)" }}>
                  <span className="text-[7px] font-mono text-pink-600">9:41</span>
                  <motion.div className="w-1 h-1 rounded-full bg-pink-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                </div>
                <div className="relative flex-1 flex flex-col items-center justify-center" style={{ height: 200 }}>
                  <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(30,10,40,0.9) 0%, rgba(10,5,20,0.95) 100%)" }} />
                  <motion.div
                    className="relative z-10 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(236,72,153,0.2)", border: "1px solid rgba(236,72,153,0.4)" }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    <Play size={16} className="text-pink-400 ml-0.5" style={{ filter: "drop-shadow(0 0 6px #ec4899)" }} />
                  </motion.div>
                  <motion.div
                    className="absolute left-0 right-0 h-[1px] pointer-events-none"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.5), transparent)" }}
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <div className="px-3 py-2 border-t" style={{ borderColor: "rgba(236,72,153,0.2)" }}>
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-mono text-pink-700 uppercase tracking-widest">ROI</span>
                    <motion.span className="text-sm font-mono font-bold text-pink-300" style={{ textShadow: "0 0 10px rgba(236,72,153,0.7)" }} animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 1, repeat: Infinity }}>
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

        {/* ── PHASE 4: The Omni-Grid Broadcast ─────────────────────────── */}
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
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.22) 0%, transparent 60%)" }} />
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 5 }}>
                {[0, 1].map((r) => [0, 1].map((c) => (
                  <motion.line key={`h-${r}-${c}`} x1={`${28 + c * 22}%`} y1={`${35 + r * 22}%`} x2={`${28 + (c + 1) * 22}%`} y2={`${35 + r * 22}%`} stroke="rgba(139,92,246,0.4)" strokeWidth="0.8" strokeDasharray="3 3" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.3 + r * 0.1 + c * 0.1 }} />
                )))}
                {[0, 1].map((c) => [0, 1].map((r) => (
                  <motion.line key={`v-${c}-${r}`} x1={`${28 + c * 22}%`} y1={`${35 + r * 22}%`} x2={`${28 + c * 22}%`} y2={`${35 + (r + 1) * 22}%`} stroke="rgba(139,92,246,0.4)" strokeWidth="0.8" strokeDasharray="3 3" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 + c * 0.1 + r * 0.1 }} />
                )))}
              </svg>
              <motion.div
                className="grid gap-2.5 z-10"
                style={{ gridTemplateColumns: "repeat(3, 1fr)", transform: "rotateX(30deg) rotateZ(-15deg) scale(0.85)", transformStyle: "preserve-3d" }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 0.85, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {GRID_CELLS.map((i) => (
                  <motion.div
                    key={i}
                    className="rounded-xl border overflow-hidden flex flex-col"
                    style={{ width: 72, height: 110, background: "rgba(15,8,30,0.85)", borderColor: "rgba(139,92,246,0.35)" }}
                    animate={{ boxShadow: ["0 0 8px rgba(139,92,246,0.1)", "0 0 22px rgba(139,92,246,0.45)", "0 0 8px rgba(139,92,246,0.1)"], borderColor: ["rgba(139,92,246,0.2)", "rgba(168,85,247,0.65)", "rgba(139,92,246,0.2)"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: (i % 3) * 0.22 + Math.floor(i / 3) * 0.15 }}
                  >
                    <div className="flex-1" style={{ background: `linear-gradient(160deg, rgba(${30 + (i % 3) * 15},10,${40 + i * 5},0.9) 0%, rgba(8,4,18,0.95) 100%)` }} />
                    <div className="px-1.5 py-1 border-t" style={{ borderColor: "rgba(139,92,246,0.2)" }}>
                      <div className="flex items-end gap-0.5 h-3">
                        {[0, 1, 2].map((b) => (
                          <motion.div key={b} className="flex-1 rounded-sm" style={{ background: "rgba(139,92,246,0.6)" }} animate={{ height: ["3px", `${6 + b * 3}px`, "3px"] }} transition={{ duration: 0.8, repeat: Infinity, delay: b * 0.15 + i * 0.07, ease: "easeInOut" }} />
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

        {/* ── PHASE 5 / CTA: The Ignition Switch ───────────────────────── */}
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
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.2) 0%, rgba(139,92,246,0.1) 40%, transparent 60%)" }} />
              {[0, 1, 2, 3, 4].map((r) => (
                <motion.div key={r} className="absolute rounded-full border" style={{ borderColor: `rgba(236,72,153,${0.38 - r * 0.07})`, width: 90 + r * 65, height: 90 + r * 65 }} animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: r * 0.5 }} />
              ))}
              <motion.div
                className="relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer z-10"
                style={{ background: "radial-gradient(circle at 35% 35%, rgba(236,72,153,0.55) 0%, rgba(20,6,18,0.95) 70%)", border: "1px solid rgba(236,72,153,0.5)", boxShadow: "0 0 40px rgba(236,72,153,0.35), 0 0 80px rgba(168,85,247,0.15), inset 0 1px 0 rgba(255,255,255,0.08)" }}
                animate={{ scale: [1, 1.07, 1], boxShadow: ["0 0 30px rgba(236,72,153,0.25), 0 0 60px rgba(168,85,247,0.1)", "0 0 55px rgba(236,72,153,0.6), 0 0 100px rgba(168,85,247,0.25)", "0 0 30px rgba(236,72,153,0.25), 0 0 60px rgba(168,85,247,0.1)"] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.12 }}
              >
                <motion.div animate={{ x: [-3, 3, -3] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowLeft size={32} className="text-white" style={{ filter: "drop-shadow(0 0 8px rgba(236,72,153,0.9))" }} />
                </motion.div>
              </motion.div>
              <motion.div className="mt-6 flex flex-col items-center" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <span className="text-base font-semibold text-white tracking-wide" style={{ textShadow: "0 0 20px rgba(236,72,153,0.6)" }}>Launch Your Campaign</span>
                <span className="text-[11px] font-mono text-pink-500 mt-1 tracking-widest uppercase">Awaiting your command</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ════════════════════════════════════════════════════════════════════
          MOBILE VISUAL — shown on mobile only, hidden md+
          Flat 2D, Y/X/scale/opacity only — no 3D transforms, 60fps
      ════════════════════════════════════════════════════════════════════ */}
      <div className="flex md:hidden absolute inset-0 items-center justify-center overflow-hidden">

        {/* Obsidian Glass background for mobile */}
        <div
          className="absolute inset-0 rounded-3xl"
          style={{
            background: "radial-gradient(ellipse at 55% 40%, #0d0a1a 0%, #06050f 100%)",
            border: "1px solid rgba(51,40,80,0.55)",
          }}
        />

        {/* ── MOBILE PHASE 1: The Ignored Swipe ─────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP1 && (
            <motion.div
              key="m-p1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-5"
            >
              {/* Dim slate ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(71,85,105,0.15) 0%, transparent 65%)" }} />

              {/* Label */}
              <div className="flex items-center gap-2 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                <span className="text-xs font-mono tracking-widest text-slate-500 uppercase">0 Impressions · Buried</span>
              </div>

              {/* Looping swipe-away card */}
              <div className="relative w-full overflow-hidden z-10" style={{ height: 180 }}>
                <motion.div
                  className="absolute inset-x-0 mx-auto rounded-2xl border flex flex-col gap-3 p-5"
                  style={{
                    background: "rgba(20,20,32,0.8)",
                    borderColor: "rgba(71,85,105,0.3)",
                    filter: "grayscale(1)",
                    opacity: 0.6,
                    maxWidth: 280,
                  }}
                  animate={{
                    y: [60, 0, 0, -220],
                    opacity: [0, 0.6, 0.6, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    times: [0, 0.25, 0.65, 1],
                    repeat: Infinity,
                    repeatDelay: 0.4,
                    ease: "easeInOut",
                  }}
                >
                  {/* Fake ad header */}
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-700 flex-shrink-0" />
                    <div className="flex flex-col gap-1.5 flex-1">
                      <div className="h-2.5 rounded bg-slate-700 w-3/4" />
                      <div className="h-2 rounded bg-slate-800 w-1/2" />
                    </div>
                    <div className="text-[9px] font-mono text-slate-600 uppercase">Ad</div>
                  </div>
                  {/* Fake ad body */}
                  <div className="space-y-2">
                    {[100, 85, 90].map((w, i) => (
                      <div key={i} className="h-2.5 rounded" style={{ width: `${w}%`, background: "rgba(71,85,105,0.35)" }} />
                    ))}
                  </div>
                  {/* Fake CTA */}
                  <div className="h-8 rounded-lg bg-slate-700 opacity-50 w-28" />
                </motion.div>
              </div>

              <span className="text-xs font-mono tracking-widest text-slate-600 uppercase z-10">User swiped past · Ignored</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 2: The AI Generator ──────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP2 && (
            <motion.div
              key="m-p2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 gap-6"
            >
              {/* Cyan ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 40%, rgba(6,182,212,0.16) 0%, transparent 65%)" }} />

              {/* Spinning progress ring */}
              <div className="relative flex items-center justify-center z-10" style={{ width: 100, height: 100 }}>
                {/* Outer glow ring */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "2px solid rgba(168,85,247,0.15)", boxShadow: "0 0 20px rgba(168,85,247,0.2)" }}
                />
                {/* Spinning arc */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "3px solid transparent", borderTopColor: "#ec4899", borderRightColor: "#06b6d4" }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                />
                {/* Inner dot */}
                <motion.div
                  className="w-3 h-3 rounded-full"
                  style={{ background: "radial-gradient(circle, #ec4899, #a855f7)", boxShadow: "0 0 12px #ec4899" }}
                  animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                />
              </div>

              {/* Flashing monospace status lines */}
              <div className="flex flex-col items-center gap-3 z-10 w-full max-w-[280px]">
                {[
                  { text: "[GENERATING HOOK...]", color: "#38bdf8", delay: 0 },
                  { text: "[RENDERING MEDIA...]", color: "#a78bfa", delay: 0.6 },
                  { text: "[OPTIMISING CTA...]", color: "#34d399", delay: 1.2 },
                ].map((line, i) => (
                  <motion.div
                    key={i}
                    className="w-full rounded-lg border px-4 py-3 text-center"
                    style={{ background: "rgba(10,8,22,0.8)", borderColor: `${line.color}33` }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: line.delay, ease: "easeInOut" }}
                  >
                    <span className="text-sm font-mono font-bold" style={{ color: line.color }}>{line.text}</span>
                  </motion.div>
                ))}
              </div>

              <span className="text-xs font-mono tracking-widest text-cyan-500 uppercase z-10">AI Timeline · Auto-Editing</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 3: The Viral Hit ─────────────────────────────── */}
        <AnimatePresence mode="wait">
          {isP3 && (
            <motion.div
              key="m-p3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center gap-0"
            >
              {/* Magenta ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.18) 0%, rgba(168,85,247,0.1) 40%, transparent 65%)" }} />

              {/* Phone frame */}
              <motion.div
                className="relative rounded-[28px] border overflow-hidden z-10"
                style={{ width: 160, height: 260, background: "rgba(8,4,18,0.92)", borderColor: "rgba(236,72,153,0.45)", boxShadow: "0 0 50px rgba(236,72,153,0.2), inset 0 1px 0 rgba(255,255,255,0.06)" }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Status bar */}
                <div className="flex items-center justify-between px-3 py-1.5 border-b" style={{ borderColor: "rgba(236,72,153,0.2)" }}>
                  <span className="text-[7px] font-mono text-pink-600">9:41</span>
                  <motion.div className="w-1 h-1 rounded-full bg-pink-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                </div>

                {/* Vibrant gradient video area */}
                <div className="relative flex flex-col items-center justify-center" style={{ height: 180, background: "linear-gradient(160deg, #2d0a3a 0%, #0f0520 50%, #0a1a2e 100%)" }}>
                  {/* Floating engagement icons from bottom-right */}
                  {MOBILE_PARTICLES.map((p, i) => (
                    <motion.div
                      key={i}
                      className="absolute z-20"
                      style={{ left: p.x, bottom: 10 }}
                      animate={{ y: [0, -110], opacity: [0, 1, 1, 0], scale: [0.6, 1, 0.8] }}
                      transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, repeatDelay: 0.5, ease: "easeOut" }}
                    >
                      <p.Icon size={16} style={{ color: p.color, filter: `drop-shadow(0 0 5px ${p.color})` }} />
                    </motion.div>
                  ))}

                  {/* Bold ROI counter */}
                  <motion.div
                    className="relative z-10 flex flex-col items-center"
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-4xl font-black text-white" style={{ textShadow: "0 0 30px rgba(236,72,153,0.8), 0 0 60px rgba(168,85,247,0.4)" }}>
                      5.2x
                    </span>
                    <span className="text-xs font-mono font-bold text-pink-400 tracking-widest uppercase mt-1">ROI</span>
                  </motion.div>

                  {/* Scan line */}
                  <motion.div
                    className="absolute left-0 right-0 h-[1px] pointer-events-none"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(236,72,153,0.5), transparent)" }}
                    animate={{ top: ["0%", "100%"] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>

                {/* Bottom bar */}
                <div className="px-3 py-2 border-t" style={{ borderColor: "rgba(236,72,153,0.2)" }}>
                  <div className="flex items-center gap-1">
                    <TrendingUp size={10} className="text-pink-500" />
                    <span className="text-[9px] font-mono text-pink-500">+340% this week</span>
                  </div>
                </div>
              </motion.div>

              <div className="mt-4 z-10">
                <span className="text-xs font-mono tracking-widest text-pink-500 uppercase">Engagement Reactor · Live</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 4: The Omni-Channel Drop ─────────────────────── */}
        <AnimatePresence mode="wait">
          {isP4 && (
            <motion.div
              key="m-p4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Violet ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.2) 0%, transparent 65%)" }} />

              {/* SVG connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
                {/* Line to top node */}
                <motion.line x1="50%" y1="50%" x2="50%" y2="22%" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" strokeDasharray="5 4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} />
                {/* Line to left node */}
                <motion.line x1="50%" y1="50%" x2="22%" y2="60%" stroke="rgba(236,72,153,0.5)" strokeWidth="1.5" strokeDasharray="5 4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.45 }} />
                {/* Line to right node */}
                <motion.line x1="50%" y1="50%" x2="78%" y2="60%" stroke="rgba(56,189,248,0.5)" strokeWidth="1.5" strokeDasharray="5 4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }} />
                {/* Pulsing dots along lines */}
                {[
                  { x1: "50%", y1: "50%", x2: "50%", y2: "22%", color: "#a78bfa" },
                  { x1: "50%", y1: "50%", x2: "22%", y2: "60%", color: "#f472b6" },
                  { x1: "50%", y1: "50%", x2: "78%", y2: "60%", color: "#38bdf8" },
                ].map((line, i) => (
                  <motion.circle
                    key={i}
                    r="4"
                    fill={line.color}
                    style={{ filter: `drop-shadow(0 0 4px ${line.color})` }}
                    animate={{
                      cx: [line.x1, line.x2, line.x1],
                      cy: [line.y1, line.y2, line.y1],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 1.6, delay: 0.7 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  />
                ))}
              </svg>

              {/* Central scaled-down phone frame */}
              <motion.div
                className="relative rounded-[24px] border overflow-hidden z-10"
                style={{ width: 110, height: 170, background: "rgba(12,6,24,0.92)", borderColor: "rgba(139,92,246,0.5)", boxShadow: "0 0 35px rgba(139,92,246,0.25)" }}
                animate={{ scale: [0.8, 0.82, 0.8] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center justify-between px-2.5 py-1.5 border-b" style={{ borderColor: "rgba(139,92,246,0.2)" }}>
                  <span className="text-[6px] font-mono text-violet-600">9:41</span>
                  <motion.div className="w-1 h-1 rounded-full bg-violet-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1, repeat: Infinity }} />
                </div>
                <div className="flex-1 flex flex-col gap-1.5 p-2" style={{ height: 120 }}>
                  {[{ h: 18, c: "rgba(139,92,246,0.25)" }, { h: 45, c: "rgba(100,70,180,0.2)" }, { h: 25, c: "rgba(80,55,160,0.18)" }].map((b, i) => (
                    <div key={i} className="w-full rounded-md" style={{ height: b.h, background: b.c, border: "1px solid rgba(139,92,246,0.2)" }} />
                  ))}
                </div>
              </motion.div>

              {/* Platform nodes */}
              {PLATFORM_NODES.map((node, i) => {
                const Icon = node.Icon;
                return (
                  <motion.div
                    key={i}
                    className="absolute z-10 flex flex-col items-center gap-1.5 px-3 py-2.5 rounded-xl border"
                    style={{ background: "rgba(12,8,28,0.9)", borderColor: `${node.color}44`, boxShadow: `0 0 16px ${node.color}22` }}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0.5 }}
                    animate={{ x: node.tx, y: node.ty, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}>
                      <Icon size={18} style={{ color: node.color, filter: `drop-shadow(0 0 5px ${node.color})` }} />
                    </motion.div>
                    <span className="text-[9px] font-mono whitespace-nowrap" style={{ color: node.color }}>{node.label}</span>
                  </motion.div>
                );
              })}

              <div className="absolute bottom-8 z-20">
                <span className="text-xs font-mono tracking-widest text-violet-400 uppercase">Omni-Grid · Broadcasting</span>
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
              {/* Magenta ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(236,72,153,0.18) 0%, rgba(139,92,246,0.1) 40%, transparent 60%)" }} />

              {/* Radar rings */}
              {[0, 1, 2, 3].map((r) => (
                <motion.div
                  key={r}
                  className="absolute rounded-full border"
                  style={{ borderColor: `rgba(236,72,153,${0.38 - r * 0.08})`, width: 110 + r * 55, height: 110 + r * 55 }}
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
                  background: "radial-gradient(circle at 35% 35%, rgba(236,72,153,0.55) 0%, rgba(20,6,18,0.95) 70%)",
                  border: "1px solid rgba(236,72,153,0.5)",
                  boxShadow: "0 0 40px rgba(236,72,153,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
                animate={{
                  scale: [1, 1.07, 1],
                  boxShadow: [
                    "0 0 30px rgba(236,72,153,0.25)",
                    "0 0 55px rgba(236,72,153,0.65)",
                    "0 0 30px rgba(236,72,153,0.25)",
                  ],
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div animate={{ x: [-3, 3, -3] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowLeft size={36} className="text-white" style={{ filter: "drop-shadow(0 0 8px rgba(236,72,153,0.9))" }} />
                </motion.div>
              </motion.div>

              {/* Text */}
              <motion.div className="flex flex-col items-center z-10" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <span className="text-xl font-semibold text-white tracking-wide" style={{ textShadow: "0 0 20px rgba(236,72,153,0.6)" }}>
                  Launch Your Campaign
                </span>
                <span className="text-sm font-mono text-pink-500 mt-1 tracking-widest uppercase">Awaiting your command</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
