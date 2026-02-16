import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Cpu, Activity, Server, Network, Database, CheckCircle2, AlertCircle } from "lucide-react";

interface AiAgentsVisualProps {
  activePhase?: string;
}

export default function AiAgentsVisual({ activePhase = "phase-1" }: AiAgentsVisualProps) {
  // Phase mapping
  const isP1 = activePhase === "phase-1";
  const isP2 = activePhase === "phase-2";
  const isP3 = activePhase === "phase-3";
  const isP4 = activePhase === "phase-4";
  const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

  // Dynamic system colors for the "Calm Intelligence" aesthetic
  const systemColor = isP1 ? "#ef4444" : isP2 ? "#3b82f6" : isP3 ? "#10b981" : "#6366f1";
  const bgGlow = isP1
    ? "rgba(239,68,68,0.03)"
    : isP2
      ? "rgba(59,130,246,0.03)"
      : isP3
        ? "rgba(16,185,129,0.03)"
        : "rgba(99,102,241,0.03)";

  return (
    <div className="w-full h-[500px] md:h-full min-h-[500px] relative overflow-hidden flex items-center justify-center bg-[#FDFBF7] rounded-3xl border border-slate-200 shadow-sm font-sans">
      {/* Vercel-style clean technical grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle ambient system glow */}
      <motion.div
        className="absolute inset-0 transition-colors duration-1000 z-0"
        animate={{ background: `radial-gradient(circle at 50% 50%, ${bgGlow} 0%, transparent 80%)` }}
      />

      {/* ========================================================
          THE LIVE ORCHESTRATION CANVAS (Evolves across all phases)
          ======================================================== */}
      <div className="relative z-10 w-full h-full flex items-center justify-center max-w-2xl px-8">
        <AnimatePresence mode="popLayout">
          {!isCTA && (
            <motion.div
              key="system-canvas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
              className="w-full relative flex flex-col items-center justify-center"
            >
              {/* THE MULTI-PIPELINE WRAPPER (Triggers on Phase 4 Scale) */}
              <div className="relative w-full flex flex-col items-center gap-8">
                {[0, 1, 2].map((pipelineIndex) => (
                  <motion.div
                    key={`pipeline-${pipelineIndex}`}
                    initial={false}
                    animate={{
                      // Only show center pipeline (index 1) for phases 1-3. Show all for phase 4.
                      opacity: isP4 ? (pipelineIndex === 1 ? 1 : 0.4) : pipelineIndex === 1 ? 1 : 0,
                      height: isP4 ? "auto" : pipelineIndex === 1 ? "auto" : 0,
                      scale: isP4 ? 0.85 : 1,
                      y: isP4 ? 0 : 0,
                    }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full flex items-center justify-between relative"
                  >
                    {/* LEFT NODE: INPUT QUEUE */}
                    <div className="relative w-40 flex flex-col gap-2 z-20">
                      <div className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-slate-400" />
                          <span className="text-[10px] font-mono font-bold text-slate-600 uppercase">Input Stream</span>
                        </div>
                        {isP1 && pipelineIndex === 1 && (
                          <motion.div animate={{ opacity: [1, 0.5, 1] }} transition={{ repeat: Infinity, duration: 1 }}>
                            <AlertCircle className="w-4 h-4 text-red-500" />
                          </motion.div>
                        )}
                      </div>

                      {/* P1 Chaos Visualization: Stacked pending tasks */}
                      {isP1 && pipelineIndex === 1 && (
                        <div className="absolute top-14 left-0 w-full">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              initial={{ y: -10, opacity: 0 }}
                              animate={{ y: i * 4, opacity: 1 - i * 0.2 }}
                              transition={{ delay: i * 0.1 }}
                              className="absolute w-full bg-red-50 border border-red-100 rounded p-2 text-[8px] font-mono text-red-600 shadow-sm"
                              style={{ zIndex: 10 - i }}
                            >
                              [ERR] Queue blocked...
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* CENTER: WIRING & DATA PACKETS (The Bridge) */}
                    <div className="flex-1 h-[2px] mx-4 relative">
                      {/* Base Track */}
                      <motion.div
                        className="absolute inset-0 bg-slate-200 origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isP1 ? 0 : 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />

                      {/* Moving Data Packets (P3 & P4) */}
                      {(isP3 || isP4) && (
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                          animate={{ left: ["0%", "100%"] }}
                          transition={{
                            duration: isP4 ? 0.6 : 1.2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: pipelineIndex * 0.2,
                          }}
                        />
                      )}
                    </div>

                    {/* CENTER NODE: AI ORCHESTRATION ENGINE */}
                    <motion.div
                      className="relative z-20"
                      animate={{
                        scale: isP2 ? 1.05 : 1,
                        filter: isP1 ? "grayscale(100%) opacity(50%)" : "grayscale(0%) opacity(100%)",
                      }}
                    >
                      <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl flex items-center justify-center relative overflow-hidden">
                        {/* Engine Activity Glow */}
                        {(isP2 || isP3 || isP4) && (
                          <motion.div
                            className="absolute inset-0 opacity-20"
                            animate={{
                              background: [
                                `conic-gradient(from 0deg, transparent 0 340deg, ${systemColor} 360deg)`,
                                `conic-gradient(from 360deg, transparent 0 340deg, ${systemColor} 360deg)`,
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          />
                        )}
                        <Cpu className="w-6 h-6 text-white relative z-10" />
                      </div>

                      {/* Engine Status Log */}
                      {pipelineIndex === 1 && (
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                          <span
                            className="text-[9px] font-mono tracking-widest uppercase font-bold"
                            style={{ color: systemColor }}
                          >
                            {isP1
                              ? "System Offline"
                              : isP2
                                ? "Mapping Rules..."
                                : isP3
                                  ? "Orchestrating"
                                  : "Load Balancing"}
                          </span>
                        </div>
                      )}
                    </motion.div>

                    {/* RIGHT: WIRING & DATA PACKETS */}
                    <div className="flex-1 h-[2px] mx-4 relative">
                      <motion.div
                        className="absolute inset-0 bg-slate-200 origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: isP3 || isP4 ? 1 : 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      />
                      {(isP3 || isP4) && (
                        <motion.div
                          className="absolute top-1/2 -translate-y-1/2 w-4 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                          animate={{ left: ["0%", "100%"] }}
                          transition={{
                            duration: isP4 ? 0.6 : 1.2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: pipelineIndex * 0.2 + 0.3,
                          }}
                        />
                      )}
                    </div>

                    {/* RIGHT NODE: EXECUTION / OUTPUT */}
                    <div className="relative w-40 flex flex-col gap-2 z-20">
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: isP3 || isP4 ? 1 : 0, x: isP3 || isP4 ? 0 : 20 }}
                        className="bg-white border border-slate-200 rounded-lg p-3 shadow-sm flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Server className="w-4 h-4 text-slate-400" />
                          <span className="text-[10px] font-mono font-bold text-slate-600 uppercase">Resolved</span>
                        </div>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                      </motion.div>

                      {/* Success Micro-Logs */}
                      {(isP3 || isP4) && pipelineIndex === 1 && (
                        <div className="absolute top-14 left-0 w-full overflow-hidden h-12">
                          <motion.div
                            animate={{ y: [0, -20] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="space-y-1"
                          >
                            {[0, 1, 2].map((i) => (
                              <div key={i} className="text-[8px] font-mono text-slate-400 flex justify-between">
                                <span>Task_ID: {8492 + i}</span>
                                <span className="text-emerald-500">12ms</span>
                              </div>
                            ))}
                          </motion.div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Central Authority Metric overlay for Scale (Phase 4) */}
              {isP4 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-xl shadow-2xl flex flex-col items-center z-50 pointer-events-none"
                >
                  <Network className="w-6 h-6 text-indigo-400 mb-2" />
                  <span className="text-3xl font-light text-white font-mono tracking-tighter">1,000+</span>
                  <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-1">
                    Concurrent Executions
                  </span>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ========================================================
            STAGE 5: CTA (READY TO UPGRADE) - ARROW POINTS LEFT
            ======================================================== */}
        <AnimatePresence>
          {isCTA && (
            <motion.div
              key="cta-canvas"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-[#FDFBF7]"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] mb-6 cursor-pointer relative group"
              >
                {/* Sonar pulse rings */}
                <div className="absolute inset-0 border border-slate-900/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute inset-0 border border-slate-900/10 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />

                {/* 10x FIX: Arrow points Left toward the text/contact form */}
                <ArrowLeft className="w-10 h-10 text-white group-hover:-translate-x-1 transition-transform" />
              </motion.div>
              <h4 className="text-2xl font-serif text-slate-900 mb-2">Initiate System</h4>
              <p className="text-sm text-slate-500 font-medium">Awaiting your command on the left.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
