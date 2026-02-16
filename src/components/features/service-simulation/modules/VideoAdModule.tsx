import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Layers,
  Scissors,
  Captions,
  TrendingUp,
  Target,
  MousePointerClick,
  BarChart3,
} from "lucide-react";
import { cn } from "@/lib/utils";

const VideoAdModule = ({ activePhase }: { activePhase?: string }) => {
  const isPhase1 = activePhase === "phase-1";
  const isPhase2 = activePhase === "phase-2";
  const isPhase3 = activePhase === "phase-3";

  return (
    <div className="relative w-full max-w-[850px] h-[550px] flex items-center justify-center perspective-[2000px]">
      {/* BACKGROUND AMBIENT GLOW */}
      <div
        className={cn(
          "absolute inset-0 z-0 blur-[100px] transition-colors duration-1000 opacity-20 pointer-events-none",
          isPhase1 ? "bg-slate-500" : isPhase2 ? "bg-amber-500" : "bg-blue-600",
        )}
      />

      {/* THE AI VIDEO EDITOR (Left Side in Phase 3) */}
      <motion.div
        animate={{
          rotateX: isPhase1 ? 15 : 0,
          rotateY: isPhase1 ? 10 : isPhase3 ? -12 : 0,
          scale: isPhase3 ? 0.85 : 1,
          x: isPhase3 ? -120 : 0,
          opacity: isPhase1 ? 0.8 : 1,
          boxShadow: isPhase3 ? "0 20px 40px -10px rgba(0,0,0,0.5)" : "0 40px 80px -20px rgba(0,0,0,0.4)",
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-[500px] bg-[#1A1D21] rounded-2xl border border-slate-700 overflow-hidden relative font-sans text-white z-10"
      >
        {/* Editor Interface Header */}
        <div className="h-10 bg-slate-800/80 border-b border-white/5 flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              {isPhase1 ? "RAW_FOOTAGE.mp4" : isPhase2 ? "AI_EDIT_ACTIVE" : "LIVE_CAMPAIGN_01"}
            </span>
            {isPhase2 && (
              <div className="px-2 py-0.5 bg-amber-500/20 rounded border border-amber-500/30 text-[9px] font-bold text-amber-400 uppercase animate-pulse">
                Processing
              </div>
            )}
          </div>
          <div className="flex items-center gap-3 opacity-60">
            <Layers className="w-3.5 h-3.5" />
            <Scissors className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Main Preview Canvas */}
        <div className="relative h-[220px] bg-black flex items-center justify-center overflow-hidden">
          {/* Abstract Animated Background */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-1000",
              isPhase1 ? "opacity-20 grayscale" : "opacity-60",
            )}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-tr from-amber-500/30 via-transparent to-blue-500/30"
            />
          </div>

          {/* Dynamic AI Captions (Visible in Phase 2 & 3) */}
          <AnimatePresence>
            {(isPhase2 || isPhase3) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
                transition={{ duration: 4, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
                className="relative z-10 text-center px-12"
              >
                <h4 className="text-3xl font-serif italic mb-3 drop-shadow-2xl">
                  Stop <span className="text-amber-400">waiting</span> for growth.
                </h4>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                  <Captions className="w-3 h-3 text-amber-400" />
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-200">AI Caption</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Play Controls Overlay */}
          <div className="absolute bottom-3 left-3 flex items-center gap-3 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
            {isPhase1 ? (
              <Pause className="w-3.5 h-3.5 fill-slate-500 text-slate-500" />
            ) : (
              <Play className="w-3.5 h-3.5 fill-white" />
            )}
            <span className="text-[10px] font-mono text-white/60">{isPhase1 ? "00:00:00" : "00:04:12"}</span>
          </div>
        </div>

        {/* The Technical Timeline */}
        <div className="h-[180px] bg-[#111315] p-4 relative overflow-hidden border-t border-slate-800">
          {/* Vertical Playhead */}
          {(isPhase2 || isPhase3) && (
            <motion.div
              animate={{ left: ["10%", "90%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 bottom-0 w-px bg-amber-400 z-30 shadow-[0_0_8px_#fbbf24]"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-400 rotate-45" />
            </motion.div>
          )}

          <div className="space-y-3 relative z-10 mt-2">
            {/* Visual Track */}
            <div className="flex items-center gap-3">
              <span className="w-10 text-[9px] font-mono text-slate-600 uppercase">Video</span>
              <div className="flex-1 h-5 bg-slate-800/50 rounded flex gap-1 p-0.5">
                <div
                  className={cn(
                    "w-1/3 h-full rounded-sm transition-colors duration-1000",
                    isPhase1 ? "bg-slate-700" : "bg-blue-500/60",
                  )}
                />
                <div
                  className={cn(
                    "flex-1 h-full rounded-sm transition-colors duration-1000",
                    isPhase1 ? "bg-slate-700" : "bg-blue-500/80",
                  )}
                />
              </div>
            </div>

            {/* Audio Track */}
            <div className="flex items-center gap-3">
              <span className="w-10 text-[9px] font-mono text-slate-600 uppercase">Audio</span>
              <div className="flex-1 h-5 bg-slate-800/50 rounded relative overflow-hidden">
                <div className="absolute inset-0 flex items-center gap-[1px] px-1 opacity-80">
                  {Array.from({ length: 45 }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "flex-1 transition-colors duration-1000",
                        isPhase1 ? "bg-slate-700" : "bg-emerald-500/60",
                      )}
                      style={{ height: `${isPhase1 ? 10 : Math.random() * 80 + 20}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Captions Track */}
            <div className="flex items-center gap-3">
              <span className="w-10 text-[9px] font-mono text-slate-600 uppercase">Text</span>
              <div className="flex-1 h-5 bg-slate-800/50 rounded flex gap-2 p-0.5">
                <div
                  className={cn(
                    "w-16 h-full rounded-sm transition-colors duration-1000",
                    isPhase1 ? "bg-transparent" : "bg-amber-500/60",
                  )}
                />
                <div
                  className={cn(
                    "w-24 h-full rounded-sm transition-colors duration-1000",
                    isPhase1 ? "bg-transparent" : "bg-amber-500/80",
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* PHASE 3: THE META ADS ROI DASHBOARD (Right Side) */}
      <AnimatePresence>
        {isPhase3 && (
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 80, rotateY: -5, z: 50 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            className="absolute right-[5%] w-[320px] bg-white/95 backdrop-blur-xl rounded-2xl border border-white shadow-[0_30px_60px_rgba(0,0,0,0.15)] p-5 z-20 flex flex-col gap-4"
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-100 rounded-lg">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                </div>
                <span className="font-bold text-slate-800 text-sm">Campaign Live</span>
              </div>
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            {/* Massive ROAS Metric */}
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Return on Ad Spend</span>
              <div className="flex items-end gap-2 mt-1">
                <span className="text-4xl font-serif text-slate-900 leading-none">4.2x</span>
                <span className="flex items-center text-emerald-500 text-xs font-bold mb-1 bg-emerald-100 px-1.5 py-0.5 rounded">
                  <TrendingUp className="w-3 h-3 mr-1" /> +124%
                </span>
              </div>
            </div>

            {/* Leads & Clicks */}
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Leads Generated</span>
                <span className="text-xl font-bold text-slate-800 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-purple-500" /> 142
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">Click-Through</span>
                <span className="text-xl font-bold text-slate-800 flex items-center gap-1.5">
                  <MousePointerClick className="w-4 h-4 text-blue-500" /> 8.4%
                </span>
              </div>
            </div>

            {/* Simulated Live Graph */}
            <div className="h-16 mt-2 w-full flex items-end gap-1.5">
              {[30, 45, 25, 60, 40, 75, 55, 90, 85, 100].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: "0%" }}
                  animate={{ height: `${height}%` }}
                  transition={{ duration: 1, delay: i * 0.1, type: "spring" }}
                  className="flex-1 bg-blue-500 rounded-t-sm opacity-80"
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoAdModule;
