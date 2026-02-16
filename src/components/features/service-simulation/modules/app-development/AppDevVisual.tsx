import React from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  FileWarning,
  Smartphone,
  ScanLine,
  Activity,
  Boxes,
  Server,
  ArrowRight,
  Database,
} from "lucide-react";

interface AppDevVisualProps {
  activePhase?: string;
}

export default function AppDevVisual({ activePhase = "phase-1" }: AppDevVisualProps) {
  // Map the phases to booleans for smooth cross-fading
  const isP1 = activePhase === "phase-1";
  const isP2 = activePhase === "phase-2";
  const isP3 = activePhase === "phase-3";
  const isP4 = activePhase === "phase-4";

  // If it's none of the 4 text phases, trigger the final contact block
  const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

  // Dynamic Background Glow based on phase
  const glowColor = isP1
    ? "rgba(239,68,68,0.15)" // Red (Chaos)
    : isP2
      ? "rgba(59,130,246,0.15)" // Blue (Scanning)
      : isP3
        ? "rgba(16,185,129,0.15)" // Green (Control)
        : isP4
          ? "rgba(168,85,247,0.15)" // Purple (Scale)
          : "rgba(245,158,11,0.15)"; // Amber (CTA)

  return (
    <div className="w-full h-[500px] md:h-full min-h-[500px] bg-[#050505] rounded-3xl border border-[#222] relative overflow-hidden flex items-center justify-center perspective-[2000px] shadow-2xl">
      {/* Ambient Phase Glow */}
      <motion.div
        animate={{ backgroundColor: glowColor }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 blur-[100px] transition-colors"
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* ==========================================
          STAGE 1: PAPER CHAOS (THE PROBLEM)
          ========================================== */}
      <motion.div
        animate={{ opacity: isP1 ? 1 : 0, scale: isP1 ? 1 : 0.8, zIndex: isP1 ? 20 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="relative w-64 h-64 flex items-center justify-center">
          {/* Central Clipboard */}
          <motion.div
            animate={{ rotateZ: [-2, 2, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute z-10 bg-[#0A0A0A] border border-[#333] p-6 rounded-xl shadow-2xl"
          >
            <ClipboardList className="w-12 h-12 text-slate-500 mb-2" />
            <div className="space-y-2">
              <div className="w-16 h-1 bg-red-500/50 rounded" />
              <div className="w-12 h-1 bg-slate-700 rounded" />
              <div className="w-20 h-1 bg-slate-700 rounded" />
            </div>
          </motion.div>

          {/* Flying Error Papers */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`paper-${i}`}
              animate={{
                x: [Math.random() * 120 - 60, Math.random() * -120 + 60, Math.random() * 120 - 60],
                y: [Math.random() * 120 - 60, Math.random() * -120 + 60, Math.random() * 120 - 60],
                rotateZ: [0, Math.random() * 90, -90, 0],
              }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "linear" }}
              className="absolute bg-red-950/30 border border-red-500/30 p-3 rounded shadow-xl flex items-center justify-center backdrop-blur-sm"
              style={{ left: `${30 + i * 10}%`, top: `${20 + i * 15}%` }}
            >
              <FileWarning className="w-5 h-5 text-red-400" />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center bg-red-500/10 px-6 py-2 rounded-full border border-red-500/20">
          <p className="text-red-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">Data Loss Detected</p>
        </div>
      </motion.div>

      {/* ==========================================
          STAGE 2: DIGITIZING (THE BRIDGE)
          ========================================== */}
      <motion.div
        animate={{ opacity: isP2 ? 1 : 0, scale: isP2 ? 1 : 0.8, zIndex: isP2 ? 20 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="relative w-48 h-72 border-2 border-blue-500/50 rounded-3xl bg-[#0A0A0A] overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)]">
          {/* Laser Scanner */}
          <motion.div
            animate={{ y: ["0%", "400%", "0%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 w-full h-12 bg-gradient-to-b from-transparent to-blue-500/30 border-b-2 border-blue-400 z-20"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 opacity-50">
            <ScanLine className="w-12 h-12 text-blue-400 animate-pulse" />
            <div className="w-24 h-2 bg-blue-900/50 rounded overflow-hidden">
              <motion.div
                animate={{ width: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-full bg-blue-500"
              />
            </div>
          </div>
        </div>
        <p className="mt-10 text-blue-400 font-mono text-xs font-bold tracking-[0.2em] uppercase bg-blue-500/10 px-6 py-2 rounded-full border border-blue-500/20">
          Digitizing Workflows...
        </p>
      </motion.div>

      {/* ==========================================
          STAGE 3: TOTAL CONTROL (UNIQUENESS)
          ========================================== */}
      <motion.div
        animate={{ opacity: isP3 ? 1 : 0, scale: isP3 ? 1 : 0.8, zIndex: isP3 ? 20 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      >
        {/* 3D App Dashboard */}
        <motion.div
          animate={{ rotateX: 10, rotateY: -10 }}
          className="w-72 md:w-96 bg-[#0A0A0A] border border-[#222] rounded-2xl overflow-hidden shadow-[20px_20px_60px_-15px_rgba(16,185,129,0.3)] flex flex-col"
        >
          {/* App Header */}
          <div className="h-12 border-b border-[#222] flex items-center justify-between px-4 bg-[#111]">
            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-bold text-white tracking-widest">AUTOTRACK OS</span>
            </div>
            <span className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-1 rounded">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
            </span>
          </div>

          {/* App Content */}
          <div className="p-4 grid grid-cols-2 gap-3">
            <div className="bg-[#111] p-3 rounded-xl border border-[#222]">
              <Boxes className="w-4 h-4 text-slate-400 mb-2" />
              <p className="text-[10px] text-slate-500 font-mono">Roll Stock</p>
              <p className="text-lg font-bold text-white mt-1">4,291</p>
            </div>
            <div className="bg-[#111] p-3 rounded-xl border border-[#222]">
              <Activity className="w-4 h-4 text-emerald-500 mb-2" />
              <p className="text-[10px] text-slate-500 font-mono">Efficiency</p>
              <p className="text-lg font-bold text-emerald-400 mt-1">98.4%</p>
            </div>
            <div className="col-span-2 bg-[#111] p-3 rounded-xl border border-[#222] h-16 flex items-end relative overflow-hidden">
              {/* Decorative Chart Line */}
              <svg className="absolute bottom-0 left-0 w-full h-10" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,100 L0,50 Q25,80 50,30 T100,10 L100,100 Z" fill="rgba(16,185,129,0.1)" />
                <path d="M0,50 Q25,80 50,30 T100,10" fill="none" stroke="#10b981" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ==========================================
          STAGE 4: ECOSYSTEM (INFINITE SCALE)
          ========================================== */}
      <motion.div
        animate={{ opacity: isP4 ? 1 : 0, scale: isP4 ? 1 : 0.8, zIndex: isP4 ? 20 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Central Hub */}
          <div className="absolute z-20 bg-[#0A0A0A] border border-purple-500/30 p-5 rounded-2xl shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <Server className="w-10 h-10 text-purple-400" />
          </div>

          {/* Orbiting Devices */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] border border-purple-900/30 rounded-full flex items-center justify-center"
          >
            <div className="absolute -top-4 bg-[#111] border border-[#333] p-2 rounded-lg">
              <Smartphone className="w-5 h-5 text-slate-300" />
            </div>
            <div className="absolute -bottom-4 bg-[#111] border border-[#333] p-2 rounded-lg">
              <Smartphone className="w-5 h-5 text-slate-300" />
            </div>
            <div className="absolute -left-4 bg-[#111] border border-[#333] p-2 rounded-lg">
              <Database className="w-5 h-5 text-purple-400" />
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 bg-[#050505]/80 backdrop-blur-xl border border-purple-500/30 px-6 py-3 rounded-full text-center shadow-xl">
          <p className="text-[11px] text-purple-400 font-mono tracking-widest font-bold uppercase">
            Cross-Platform Sync Active
          </p>
        </div>
      </motion.div>

      {/* ==========================================
          STAGE 5: CTA (READY TO UPGRADE)
          ========================================== */}
      <motion.div
        animate={{ opacity: isCTA ? 1 : 0, scale: isCTA ? 1 : 0.8, zIndex: isCTA ? 20 : 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 flex flex-col items-center justify-center"
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="relative w-48 h-48 flex items-center justify-center"
        >
          <div className="absolute inset-0 border border-amber-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
          <div className="absolute inset-4 border border-amber-500/40 rounded-full animate-[spin_7s_linear_infinite_reverse]" />
          <div className="absolute inset-8 border border-amber-500/60 rounded-full animate-pulse bg-amber-500/5" />
          <div className="bg-[#0A0A0A] border border-amber-500 p-6 rounded-full shadow-[0_0_30px_rgba(245,158,11,0.2)] z-10">
            <ArrowRight className="w-10 h-10 text-amber-500" />
          </div>
        </motion.div>

        <div className="mt-10 text-center space-y-2">
          <p className="text-amber-400 font-mono text-sm font-bold tracking-[0.2em] uppercase">Initiate App Build</p>
          <p className="text-slate-500 text-xs">Awaiting your command on the left.</p>
        </div>
      </motion.div>
    </div>
  );
}
