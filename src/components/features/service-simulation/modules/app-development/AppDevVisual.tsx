import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ClipboardList,
  AlertTriangle,
  Smartphone,
  ScanLine,
  Activity,
  Database,
  Tablet,
  Server,
  ArrowLeft,
  CheckCircle2,
  CheckCircle,
  Wifi,
  TrendingUp,
} from "lucide-react";

interface AppDevVisualProps {
  activePhase?: string;
}

const CLIPBOARD_CARDS = [
  { rotateZ: -14, x: -70, y: -50, delay: 0 },
  { rotateZ: 8, x: 60, y: -30, delay: 0.15 },
  { rotateZ: -4, x: -20, y: 55, delay: 0.3 },
  { rotateZ: 18, x: 80, y: 60, delay: 0.45 },
];

const CASCADE_PANELS = [
  { icon: Tablet, label: "Tablet", x: -160, y: -30, rotateY: 20, delay: 0 },
  { icon: Smartphone, label: "Phone", x: 0, y: 20, rotateY: -5, delay: 0.18 },
  { icon: Database, label: "Cloud DB", x: 160, y: -30, rotateY: -20, delay: 0.36 },
];

const SYNC_ITEMS = [
  { label: "Accounting Engine" },
  { label: "Logistics API" },
  { label: "Database" },
];

export default function AppDevVisual({ activePhase = "phase-1" }: AppDevVisualProps) {
  const isP1 = activePhase === "phase-1";
  const isP2 = activePhase === "phase-2";
  const isP3 = activePhase === "phase-3";
  const isP4 = activePhase === "phase-4";
  const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

  return (
    <div className="relative w-full h-[500px] md:h-full min-h-[500px] flex items-center justify-center bg-transparent">

      {/* ═══════════════════════════════════════════════════════════
          DESKTOP VISUAL — hidden on mobile, shown md+
      ═══════════════════════════════════════════════════════════ */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center">
        {/* Obsidian Glass Container */}
        <div
          className="absolute inset-0 rounded-3xl overflow-hidden"
          style={{
            background: "radial-gradient(ellipse at 55% 45%, #0d1117 0%, #060810 100%)",
            border: "1px solid rgba(51,65,85,0.5)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.03) inset",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.15]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.5) 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
        </div>

        {/* PHASE 1 */}
        <AnimatePresence mode="wait">
          {isP1 && (
            <motion.div
              key="p1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.88, filter: "blur(12px)" }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl"
              style={{ perspective: "1200px" }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.15) 0%, rgba(245,158,11,0.08) 45%, transparent 70%)" }} />
              {CLIPBOARD_CARDS.map((card, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-xl border backdrop-blur-sm flex flex-col gap-2 p-4"
                  style={{
                    background: "rgba(20,12,8,0.75)",
                    borderColor: "rgba(239,68,68,0.35)",
                    boxShadow: "0 0 20px rgba(239,68,68,0.12), inset 0 1px 0 rgba(255,255,255,0.04)",
                    x: card.x, y: card.y, rotateZ: card.rotateZ,
                    transformStyle: "preserve-3d",
                  }}
                  animate={{ y: [card.y, card.y - 12, card.y + 8, card.y], rotateZ: [card.rotateZ, card.rotateZ + 3, card.rotateZ - 2, card.rotateZ] }}
                  transition={{ duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                >
                  <div className="flex items-center gap-2">
                    <ClipboardList size={16} className="text-slate-500" />
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      {["Ledger #{i+1}", "Field Report", "Stock Count", "Manual Log"][i]}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    {[80, 60, 90].map((w, l) => (
                      <div key={l} className="h-[2px] rounded-full" style={{ width: `${w}%`, background: "rgba(100,116,139,0.25)" }} />
                    ))}
                    <div className="h-[2px] rounded-full w-1/2" style={{ background: "rgba(239,68,68,0.4)" }} />
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <AlertTriangle size={10} className="text-red-400" />
                    <span className="text-[8px] font-mono text-red-400">UNSYNCED</span>
                  </div>
                </motion.div>
              ))}
              <motion.div className="relative z-10 flex flex-col items-center gap-2" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }}>
                <motion.div className="flex items-center gap-2 px-4 py-2 rounded-xl border" style={{ background: "rgba(30,8,8,0.85)", borderColor: "rgba(239,68,68,0.5)", boxShadow: "0 0 20px rgba(239,68,68,0.2)" }}>
                  <AlertTriangle size={14} className="text-red-400" />
                  <span className="text-[11px] font-mono font-bold text-red-400 tracking-widest uppercase">Data Loss Detected</span>
                </motion.div>
                <span className="text-[9px] font-mono text-slate-600 tracking-[0.2em] uppercase">No digital record</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PHASE 2 */}
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
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.18) 0%, rgba(59,130,246,0.1) 40%, transparent 65%)" }} />
              <div className="relative flex items-center gap-8">
                <motion.div className="relative" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
                  <svg width="100" height="170" viewBox="0 0 100 170" fill="none">
                    <motion.rect x="5" y="5" width="90" height="160" rx="14" stroke="rgba(6,182,212,0.7)" strokeWidth="1.5" fill="rgba(6,182,212,0.04)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }} />
                    <motion.rect x="35" y="150" width="30" height="4" rx="2" fill="rgba(6,182,212,0.4)" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ transformOrigin: "center" }} transition={{ duration: 0.5, delay: 1.2 }} />
                    {[30, 50, 70, 90, 110].map((y, idx) => (
                      <motion.rect key={idx} x="15" y={y} width={idx % 2 === 0 ? 70 : 50} height="6" rx="2" fill="rgba(6,182,212,0.2)" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ transformOrigin: "left" }} transition={{ duration: 0.4, delay: 0.8 + idx * 0.12 }} />
                    ))}
                    <motion.circle cx="50" cy="18" r="4" stroke="rgba(6,182,212,0.5)" strokeWidth="1" fill="rgba(6,182,212,0.08)" initial={{ scale: 0 }} animate={{ scale: 1 }} style={{ transformOrigin: "50px 18px" }} transition={{ delay: 1.4, duration: 0.3 }} />
                  </svg>
                  <motion.div className="absolute left-[5px] right-[5px] h-[2px] rounded-full" style={{ background: "linear-gradient(90deg, transparent, rgba(6,182,212,1), rgba(147,210,255,1), rgba(6,182,212,1), transparent)", boxShadow: "0 0 10px rgba(6,182,212,0.9), 0 0 25px rgba(6,182,212,0.4)" }} animate={{ top: ["5px", "165px", "5px"] }} transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }} />
                </motion.div>
                <motion.div className="w-44 rounded-xl border overflow-hidden" style={{ background: "rgba(4,10,20,0.9)", borderColor: "rgba(6,182,212,0.3)", boxShadow: "0 0 30px rgba(6,182,212,0.12)" }} initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
                  <div className="flex items-center gap-1.5 px-3 py-2 border-b" style={{ borderColor: "rgba(6,182,212,0.2)" }}>
                    <ScanLine size={10} className="text-cyan-400" />
                    <span className="text-[9px] font-mono text-cyan-500 tracking-widest uppercase">Digitizing</span>
                  </div>
                  <div className="p-3 space-y-2">
                    {[{ label: "Scanning layout", done: true }, { label: "Mapping fields", done: true }, { label: "Building schema", done: true }, { label: "Syncing cloud", done: false }, { label: "Deploying app", done: false }].map((item, i) => (
                      <motion.div key={i} className="flex items-center gap-2" initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.18 }}>
                        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.done ? "#22d3ee" : "rgba(100,116,139,0.4)" }} />
                        <span className="text-[9px] font-mono" style={{ color: item.done ? "#67e8f9" : "#475569" }}>{item.label}</span>
                      </motion.div>
                    ))}
                    <div className="mt-2 h-1 rounded-full overflow-hidden" style={{ background: "rgba(6,182,212,0.1)" }}>
                      <motion.div className="h-full rounded-full" style={{ background: "linear-gradient(90deg, #06b6d4, #3b82f6)" }} animate={{ width: ["0%", "72%"] }} transition={{ duration: 2.5, delay: 0.6, ease: "easeOut" }} />
                    </div>
                    <span className="text-[8px] font-mono text-cyan-600">72% complete</span>
                  </div>
                </motion.div>
              </div>
              <div className="absolute bottom-[14%] text-center">
                <span className="text-[10px] font-mono tracking-[0.3em] text-cyan-500 uppercase">Lidar Scan · Active</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PHASE 3 */}
        <AnimatePresence mode="wait">
          {isP3 && (
            <motion.div
              key="p3"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl"
              style={{ perspective: "1400px" }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.2) 0%, transparent 60%)" }} />
              <motion.div
                className="relative rounded-[28px] border overflow-hidden"
                style={{ width: 160, height: 290, background: "rgba(4,18,12,0.92)", borderColor: "rgba(16,185,129,0.45)", boxShadow: "0 0 60px rgba(16,185,129,0.25), 0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)" }}
                initial={{ rotateX: 30, rotateY: -30, opacity: 0, y: 30 }}
                animate={{ rotateX: 15, rotateY: -15, opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
                  <span className="text-[8px] font-mono text-emerald-600">9:41</span>
                  <div className="flex items-center gap-1">
                    <Wifi size={8} className="text-emerald-500" />
                    <motion.div className="w-1.5 h-1.5 rounded-full bg-emerald-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                  </div>
                </div>
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-1.5">
                    <Smartphone size={10} className="text-emerald-400" />
                    <span className="text-[9px] font-mono font-bold text-emerald-300 tracking-widest">AUTOTRACK</span>
                  </div>
                  <motion.div className="flex items-center gap-1 px-1.5 py-0.5 rounded-md" style={{ background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)" }} animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <div className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span className="text-[7px] font-mono text-emerald-400">LIVE</span>
                  </motion.div>
                </div>
                <div className="grid grid-cols-2 gap-1.5 px-2 pb-2">
                  {[{ label: "Efficiency", value: "98.4%", color: "#10b981" }, { label: "Stock", value: "4,291", color: "#34d399" }].map((m) => (
                    <div key={m.label} className="rounded-xl p-2" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.15)" }}>
                      <span className="text-[7px] font-mono text-emerald-700 uppercase tracking-widest block">{m.label}</span>
                      <span className="text-sm font-mono font-bold" style={{ color: m.color, textShadow: `0 0 10px ${m.color}80` }}>{m.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mx-2 rounded-xl overflow-hidden" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.12)" }}>
                  <div className="flex items-center gap-1 px-2 pt-2 pb-1">
                    <TrendingUp size={8} className="text-emerald-500" />
                    <span className="text-[7px] font-mono text-emerald-600 uppercase tracking-widest">Throughput</span>
                  </div>
                  <svg width="100%" height="50" viewBox="0 0 140 50" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path d="M0,40 L20,30 L40,35 L60,15 L80,20 L100,8 L120,12 L140,5" fill="none" stroke="#10b981" strokeWidth="1.5" filter="drop-shadow(0 0 4px #10b981)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }} />
                    <motion.path d="M0,40 L20,30 L40,35 L60,15 L80,20 L100,8 L120,12 L140,5 L140,50 L0,50 Z" fill="url(#chartGrad)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.6 }} />
                  </svg>
                </div>
                <div className="px-2 pt-2 space-y-1.5">
                  {["Inventory synced", "Orders live", "Reports auto"].map((t, i) => (
                    <motion.div key={i} className="flex items-center gap-1.5" initial={{ x: -8, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 + i * 0.15 }}>
                      <motion.div animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.4 }}>
                        <CheckCircle2 size={9} className="text-emerald-400" style={{ filter: "drop-shadow(0 0 3px #10b981)" }} />
                      </motion.div>
                      <span className="text-[8px] font-mono text-emerald-400">{t}</span>
                    </motion.div>
                  ))}
                </div>
                <motion.div className="absolute left-0 right-0 h-[1px] pointer-events-none" style={{ background: "linear-gradient(90deg, transparent, rgba(16,185,129,0.5), transparent)" }} animate={{ top: ["0%", "100%"] }} transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }} />
              </motion.div>
              <div className="absolute bottom-[14%] text-center">
                <span className="text-[10px] font-mono tracking-[0.3em] text-emerald-500 uppercase">Obsidian Device · Live Sync</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* PHASE 4 */}
        <AnimatePresence mode="wait">
          {isP4 && (
            <motion.div
              key="p4"
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-3xl"
              style={{ perspective: "1400px" }}
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.2) 0%, transparent 60%)" }} />
              <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" style={{ zIndex: 5 }}>
                <motion.line x1="35%" y1="50%" x2="50%" y2="52%" stroke="rgba(139,92,246,0.55)" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.4 }} />
                <motion.line x1="50%" y1="52%" x2="65%" y2="50%" stroke="rgba(139,92,246,0.55)" strokeWidth="1" strokeDasharray="4 4" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} />
                {[0, 1].map((i) => (
                  <motion.circle key={i} r="3" fill="#a78bfa" style={{ filter: "drop-shadow(0 0 4px #a78bfa)" }} animate={{ cx: i === 0 ? ["35%", "50%", "35%"] : ["50%", "65%", "50%"], cy: i === 0 ? ["50%", "52%", "50%"] : ["52%", "50%", "52%"], opacity: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 + i * 0.5, ease: "easeInOut" }} />
                ))}
              </svg>
              {CASCADE_PANELS.map((panel, i) => {
                const Icon = panel.icon;
                return (
                  <motion.div key={i} className="absolute flex flex-col items-center gap-2 px-4 py-4 rounded-2xl border backdrop-blur-md z-10" style={{ background: "rgba(15,10,35,0.82)", borderColor: "rgba(139,92,246,0.4)", boxShadow: "0 0 30px rgba(139,92,246,0.18), inset 0 1px 0 rgba(255,255,255,0.04)", x: panel.x, y: panel.y, rotateY: panel.rotateY, transformStyle: "preserve-3d" }} initial={{ opacity: 0, scale: 0.6, y: panel.y + 30 }} animate={{ opacity: 1, scale: 1, y: panel.y }} transition={{ duration: 0.8, delay: panel.delay, ease: [0.16, 1, 0.3, 1] }}>
                    <motion.div animate={{ boxShadow: ["0 0 10px rgba(139,92,246,0.15)", "0 0 22px rgba(139,92,246,0.45)", "0 0 10px rgba(139,92,246,0.15)"] }} transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }} className="p-3 rounded-xl" style={{ background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.25)" }}>
                      <Icon size={20} className="text-violet-300" />
                    </motion.div>
                    <span className="text-[9px] font-mono text-violet-400 tracking-widest uppercase">{panel.label}</span>
                    <div className="flex items-end gap-0.5 h-5">
                      {[0, 1, 2].map((b) => (
                        <motion.div key={b} className="w-1.5 rounded-sm" style={{ background: "rgba(139,92,246,0.6)" }} animate={{ height: ["4px", `${10 + b * 4}px`, "4px"] }} transition={{ duration: 0.9, repeat: Infinity, delay: b * 0.2 + i * 0.15, ease: "easeInOut" }} />
                      ))}
                    </div>
                  </motion.div>
                );
              })}
              <div className="absolute bottom-[12%] text-center z-20">
                <span className="text-[10px] font-mono tracking-[0.3em] text-violet-400 uppercase">Device Cascade · Synced</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
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
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 50%, rgba(245,158,11,0.18) 0%, transparent 55%)" }} />
              {[0, 1, 2, 3, 4].map((r) => (
                <motion.div key={r} className="absolute rounded-full border" style={{ borderColor: `rgba(245,158,11,${0.35 - r * 0.06})`, width: 90 + r * 65, height: 90 + r * 65 }} animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeOut", delay: r * 0.5 }} />
              ))}
              <motion.div className="relative w-24 h-24 rounded-full flex items-center justify-center cursor-pointer z-10" style={{ background: "radial-gradient(circle at 35% 35%, rgba(245,158,11,0.55) 0%, rgba(20,12,4,0.95) 70%)", border: "1px solid rgba(245,158,11,0.5)", boxShadow: "0 0 40px rgba(245,158,11,0.3), 0 0 80px rgba(245,158,11,0.12), inset 0 1px 0 rgba(255,255,255,0.08)" }} animate={{ scale: [1, 1.07, 1], boxShadow: ["0 0 30px rgba(245,158,11,0.2), 0 0 60px rgba(245,158,11,0.08)", "0 0 55px rgba(245,158,11,0.5), 0 0 100px rgba(245,158,11,0.2)", "0 0 30px rgba(245,158,11,0.2), 0 0 60px rgba(245,158,11,0.08)"] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }} whileHover={{ scale: 1.12 }}>
                <motion.div animate={{ x: [-3, 3, -3] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowLeft size={32} className="text-white" style={{ filter: "drop-shadow(0 0 8px rgba(245,158,11,0.9))" }} />
                </motion.div>
              </motion.div>
              <motion.div className="mt-6 flex flex-col items-center" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                <span className="text-base font-semibold text-white tracking-wide" style={{ textShadow: "0 0 20px rgba(245,158,11,0.6)" }}>Initiate App Build</span>
                <span className="text-[11px] font-mono text-amber-500 mt-1 tracking-widest uppercase">Awaiting your command</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ═══════════════════════════════════════════════════════════
          MOBILE VISUAL — shown on mobile, hidden md+
          2D flat, Y-axis physics only, 60fps optimized
      ═══════════════════════════════════════════════════════════ */}
      <div
        className="flex md:hidden w-full h-full relative overflow-hidden items-center justify-center"
        style={{ background: "linear-gradient(160deg, #0a0f1e 0%, #060810 100%)" }}
      >
        {/* Subtle dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.12]" style={{ backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.6) 1px, transparent 1px)", backgroundSize: "22px 22px" }} />

        {/* ── MOBILE PHASE 1: The Paper Trap ── */}
        <AnimatePresence mode="wait">
          {isP1 && (
            <motion.div
              key="m-p1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-5"
            >
              {/* Ambient red glow */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(239,68,68,0.18) 0%, transparent 65%)" }} />

              {/* Paper cards stack */}
              <div className="relative w-full flex items-center justify-center" style={{ height: 220 }}>
                {[
                  { rotate: -8, y: -18, x: -12, delay: 0, label: "Stock Ledger", lines: [75, 55, 85] },
                  { rotate: 5, y: 0, x: 10, delay: 0.1, label: "Field Report", lines: [60, 80, 45] },
                  { rotate: -2, y: 14, x: -5, delay: 0.2, label: "Manual Log", lines: [90, 50, 70] },
                ].map((card, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-2xl flex flex-col gap-2.5 p-4"
                    style={{
                      width: 200,
                      background: "rgba(248,246,240,0.06)",
                      border: "1px solid rgba(239,68,68,0.25)",
                      boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
                      rotate: card.rotate,
                      x: card.x,
                      y: card.y,
                    }}
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: [card.y, card.y - 6, card.y + 4, card.y] }}
                    transition={{ opacity: { duration: 0.4, delay: card.delay }, y: { duration: 3.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: card.delay } }}
                  >
                    <div className="flex items-center gap-2">
                      <ClipboardList size={13} className="text-slate-500 flex-shrink-0" />
                      <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{card.label}</span>
                    </div>
                    <div className="space-y-2">
                      {card.lines.map((w, l) => (
                        <div key={l} className="h-[2px] rounded-full" style={{ width: `${w}%`, background: l === 2 ? "rgba(239,68,68,0.35)" : "rgba(100,116,139,0.2)" }} />
                      ))}
                    </div>
                    <div className="flex items-center gap-1">
                      <AlertTriangle size={9} className="text-red-500 flex-shrink-0" />
                      <span className="text-[8px] font-mono text-red-500">UNSYNCED</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* MANUAL SYNC FAILED badge */}
              <motion.div
                className="relative z-10 flex items-center gap-2.5 px-5 py-3 rounded-2xl border mt-2"
                style={{ background: "rgba(40,8,8,0.9)", borderColor: "rgba(239,68,68,0.55)", boxShadow: "0 0 28px rgba(239,68,68,0.25)" }}
                animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.02, 1] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <AlertTriangle size={16} className="text-red-400" />
                <span className="text-sm font-mono font-bold text-red-400 tracking-wider uppercase">MANUAL SYNC FAILED</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 2: The Native App Drawer ── */}
        <AnimatePresence mode="wait">
          {isP2 && (
            <motion.div
              key="m-p2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-end justify-end overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(6,182,212,0.12) 0%, transparent 65%)" }} />

              {/* Paper cards sliding away */}
              {[{ rotate: -8, x: -12 }, { rotate: 5, x: 10 }, { rotate: -2, x: -5 }].map((c, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-2xl"
                  style={{ width: 200, height: 100, background: "rgba(248,246,240,0.04)", border: "1px solid rgba(239,68,68,0.15)", rotate: c.rotate, x: c.x, top: "20%" }}
                  initial={{ y: 0, opacity: 0.4 }}
                  animate={{ y: 300, opacity: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.4, 0, 1, 1] }}
                />
              ))}

              {/* App Drawer sliding up */}
              <motion.div
                className="relative w-full rounded-t-3xl border-t overflow-hidden"
                style={{ borderColor: "rgba(51,65,85,0.7)", background: "rgba(10,15,30,0.97)", boxShadow: "0 -8px 40px rgba(0,0,0,0.5)" }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Drag handle */}
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-10 h-1 rounded-full" style={{ background: "rgba(100,116,139,0.4)" }} />
                </div>
                {/* Header */}
                <div className="flex items-center gap-2 px-5 pb-3 border-b" style={{ borderColor: "rgba(51,65,85,0.5)" }}>
                  <ScanLine size={14} className="text-cyan-400" />
                  <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">App Dashboard</span>
                  <div className="ml-auto flex items-center gap-1.5">
                    <motion.div className="w-2 h-2 rounded-full bg-cyan-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.2, repeat: Infinity }} />
                    <span className="text-[9px] font-mono text-cyan-600">Building</span>
                  </div>
                </div>
                {/* Skeleton content */}
                <div className="p-5 space-y-4">
                  {/* Skeleton metric row */}
                  <div className="grid grid-cols-2 gap-3">
                    {[0, 1].map((i) => (
                      <motion.div key={i} className="rounded-2xl p-4" style={{ background: "rgba(6,182,212,0.05)", border: "1px solid rgba(6,182,212,0.12)" }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + i * 0.12 }}>
                        <motion.div className="h-2 rounded-full mb-2" style={{ width: "60%", background: "rgba(6,182,212,0.15)" }} animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }} />
                        <motion.div className="h-5 rounded-full" style={{ width: "80%", background: "rgba(6,182,212,0.1)" }} animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 + 0.2 }} />
                      </motion.div>
                    ))}
                  </div>
                  {/* Skeleton list */}
                  <div className="space-y-3">
                    {[90, 70, 80].map((w, i) => (
                      <motion.div key={i} className="flex items-center gap-3" initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.65 + i * 0.1 }}>
                        <motion.div className="w-7 h-7 rounded-xl flex-shrink-0" style={{ background: "rgba(6,182,212,0.08)", border: "1px solid rgba(6,182,212,0.15)" }} animate={{ opacity: [0.4, 0.7, 0.4] }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }} />
                        <motion.div className="h-2.5 rounded-full" style={{ width: `${w}%`, background: "rgba(6,182,212,0.1)" }} animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 + 0.1 }} />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 3: The Live Command Center ── */}
        <AnimatePresence mode="wait">
          {isP3 && (
            <motion.div
              key="m-p3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-end justify-end overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(16,185,129,0.15) 0%, transparent 65%)" }} />

              {/* Live dashboard panel */}
              <motion.div
                className="relative w-full rounded-t-3xl border-t overflow-hidden"
                style={{ borderColor: "rgba(16,185,129,0.4)", background: "rgba(4,14,10,0.97)", boxShadow: "0 -8px 40px rgba(0,0,0,0.5)" }}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex justify-center pt-3 pb-2">
                  <div className="w-10 h-1 rounded-full" style={{ background: "rgba(16,185,129,0.3)" }} />
                </div>
                <div className="flex items-center gap-2 px-5 pb-3 border-b" style={{ borderColor: "rgba(16,185,129,0.2)" }}>
                  <Activity size={14} className="text-emerald-400" />
                  <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">Live Command</span>
                  <motion.div className="ml-auto flex items-center gap-1.5 px-2 py-1 rounded-lg" style={{ background: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.25)" }} animate={{ opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.2, repeat: Infinity }}>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span className="text-[9px] font-mono text-emerald-400">LIVE</span>
                  </motion.div>
                </div>

                <div className="p-5 space-y-4">
                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-[10px] font-mono text-emerald-600 uppercase tracking-widest">System Load</span>
                      <motion.span className="text-[10px] font-mono text-emerald-400" animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }}>100%</motion.span>
                    </div>
                    <div className="h-3 rounded-full overflow-hidden" style={{ background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.15)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #059669, #10b981, #34d399)", boxShadow: "0 0 12px rgba(16,185,129,0.6)" }}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>

                  {/* Big metric counters */}
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Efficiency", value: "98%", sub: "Peak Performance" },
                      { label: "Stock", value: "Live", sub: "Real-time Sync" },
                    ].map((m, i) => (
                      <motion.div
                        key={i}
                        className="rounded-2xl p-4"
                        style={{ background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.2)" }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + i * 0.15, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <span className="text-[9px] font-mono text-emerald-700 uppercase tracking-widest block mb-1">{m.label}</span>
                        <span className="text-2xl font-bold font-mono" style={{ color: "#10b981", textShadow: "0 0 16px rgba(16,185,129,0.5)" }}>{m.value}</span>
                        <span className="text-[8px] font-mono text-emerald-700 block mt-1">{m.sub}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Check items */}
                  <div className="space-y-2.5">
                    {["Inventory synced", "Orders live", "Reports auto-generated"].map((t, i) => (
                      <motion.div key={i} className="flex items-center gap-3" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.15 }}>
                        <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" style={{ filter: "drop-shadow(0 0 4px #10b981)" }} />
                        <span className="text-sm font-mono text-emerald-300">{t}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 4: The Ecosystem Sync ── */}
        <AnimatePresence mode="wait">
          {isP4 && (
            <motion.div
              key="m-p4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-end justify-end overflow-hidden"
            >
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(139,92,246,0.12) 0%, transparent 65%)" }} />

              {/* Base dashboard (dimmed) */}
              <div className="relative w-full rounded-t-3xl border-t" style={{ borderColor: "rgba(51,65,85,0.5)", background: "rgba(8,10,20,0.97)", boxShadow: "0 -8px 40px rgba(0,0,0,0.5)" }}>
                <div className="flex justify-center pt-3 pb-4">
                  <div className="w-10 h-1 rounded-full" style={{ background: "rgba(100,116,139,0.3)" }} />
                </div>
                <div className="px-5 pb-4 space-y-3 opacity-30">
                  <div className="h-3 rounded-full w-3/4" style={{ background: "rgba(100,116,139,0.2)" }} />
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-16 rounded-2xl" style={{ background: "rgba(100,116,139,0.08)" }} />
                    <div className="h-16 rounded-2xl" style={{ background: "rgba(100,116,139,0.08)" }} />
                  </div>
                </div>

                {/* Sync Modal overlay */}
                <motion.div
                  className="absolute inset-x-4 rounded-2xl border overflow-hidden"
                  style={{ top: 16, background: "rgba(10,14,28,0.98)", borderColor: "rgba(139,92,246,0.45)", boxShadow: "0 0 40px rgba(139,92,246,0.2), 0 8px 32px rgba(0,0,0,0.6)" }}
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(139,92,246,0.25)" }}>
                    <Server size={13} className="text-violet-400" />
                    <span className="text-xs font-mono text-violet-300 tracking-widest uppercase">Ecosystem Sync</span>
                    <motion.div className="ml-auto w-2 h-2 rounded-full bg-violet-400" animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.9, repeat: Infinity }} />
                  </div>
                  <div className="p-4 space-y-3">
                    {SYNC_ITEMS.map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 py-2.5 px-3 rounded-xl"
                        style={{ background: "rgba(139,92,246,0.06)", border: "1px solid rgba(139,92,246,0.15)" }}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.12 }}
                      >
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)" }}>
                          <Database size={14} className="text-violet-400" />
                        </div>
                        <span className="text-sm font-mono text-slate-300 flex-1">{item.label}</span>
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.7 + i * 0.35, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <CheckCircle size={18} className="text-emerald-400" style={{ filter: "drop-shadow(0 0 5px #10b981)" }} />
                        </motion.div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="px-4 pb-4">
                    <motion.div
                      className="h-1.5 rounded-full overflow-hidden"
                      style={{ background: "rgba(139,92,246,0.1)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: "linear-gradient(90deg, #7c3aed, #a78bfa)" }}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
                      />
                    </motion.div>
                    <span className="text-[9px] font-mono text-violet-600 mt-1 block">All systems connected</span>
                  </div>
                </motion.div>

                {/* Spacer so modal has room */}
                <div style={{ height: 260 }} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── MOBILE PHASE 5 / CTA: The Ignition Switch ── */}
        <AnimatePresence mode="wait">
          {isCTA && (
            <motion.div
              key="m-cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              {/* Amber ambient */}
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.15) 0%, transparent 60%)" }} />

              {/* Concentric radar rings — 2D scale only */}
              {[0, 1, 2, 3].map((r) => (
                <motion.div
                  key={r}
                  className="absolute rounded-full border"
                  style={{
                    borderColor: `rgba(245,158,11,${0.3 - r * 0.06})`,
                    width: 80 + r * 60,
                    height: 80 + r * 60,
                  }}
                  animate={{ scale: [1, 1.45, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut", delay: r * 0.55 }}
                />
              ))}

              {/* Central orb */}
              <motion.div
                className="relative w-28 h-28 rounded-full flex items-center justify-center z-10"
                style={{
                  background: "radial-gradient(circle at 35% 35%, rgba(245,158,11,0.5) 0%, rgba(15,10,4,0.96) 70%)",
                  border: "1px solid rgba(245,158,11,0.5)",
                  boxShadow: "0 0 40px rgba(245,158,11,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
                }}
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.div animate={{ x: [-4, 4, -4] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
                  <ArrowLeft size={36} className="text-white" style={{ filter: "drop-shadow(0 0 10px rgba(245,158,11,0.9))" }} />
                </motion.div>
              </motion.div>

              {/* CTA text */}
              <motion.div
                className="mt-8 flex flex-col items-center gap-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <span className="text-xl font-semibold text-white tracking-wide" style={{ textShadow: "0 0 24px rgba(245,158,11,0.6)" }}>
                  Initiate App Build
                </span>
                <span className="text-xs font-mono text-amber-500 tracking-widest uppercase">Awaiting your command</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
