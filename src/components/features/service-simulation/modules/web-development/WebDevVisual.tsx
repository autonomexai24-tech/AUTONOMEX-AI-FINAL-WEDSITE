import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Globe,
  Code,
  Zap,
  UserCheck,
  Database,
  LayoutTemplate,
  ArrowLeft,
  BarChart3,
  Mail,
  AlertCircle,
} from "lucide-react";

interface WebDevVisualProps {
  activePhase?: string;
}

export default function WebDevVisual({ activePhase = "phase-1" }: WebDevVisualProps) {
  // Map phases strictly to our 4+1 architecture
  const isP1 = activePhase === "phase-1";
  const isP2 = activePhase === "phase-2";
  const isP3 = activePhase === "phase-3";
  const isP4 = activePhase === "phase-4";
  const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

  return (
    // Transparent background so the glassmorphism pops against your site's light theme
    <div className="w-full h-[500px] md:h-full min-h-[500px] relative overflow-hidden flex items-center justify-center perspective-[2000px] bg-transparent">
      {/* Premium Frosted Glass Background Box */}
      <div className="absolute inset-4 md:inset-8 bg-white/60 backdrop-blur-3xl rounded-3xl border border-white/80 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
        {/* Subtle animated gradient inside the glass */}
        <motion.div
          animate={{
            background: isP1
              ? "radial-gradient(circle at 50% 50%, rgba(239,68,68,0.05) 0%, transparent 70%)"
              : isP2
                ? "radial-gradient(circle at 50% 50%, rgba(59,130,246,0.05) 0%, transparent 70%)"
                : isP3
                  ? "radial-gradient(circle at 50% 50%, rgba(16,185,129,0.05) 0%, transparent 70%)"
                  : "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)",
          }}
          className="absolute inset-0 transition-colors duration-1000"
        />

        {/* THE MASTER BROWSER WINDOW */}
        <motion.div
          animate={{
            scale: isP4 ? 0.75 : isCTA ? 0.95 : 1,
            y: isP4 ? -20 : 0,
            opacity: isCTA ? 0 : 1,
          }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[340px] md:max-w-md bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden z-20"
        >
          {/* Browser Chrome Bar */}
          <div className="h-10 bg-slate-50 border-b border-slate-200 flex items-center px-4 gap-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            </div>
            <div className="flex-1 bg-white border border-slate-200 rounded-md h-6 flex items-center px-3 gap-2 shadow-sm">
              {isP1 ? <Search className="w-3 h-3 text-slate-400" /> : <Globe className="w-3 h-3 text-blue-500" />}
              <span className="text-[10px] font-mono text-slate-400 tracking-widest truncate">
                {isP1 ? "search: local businesses" : isP2 ? "building-environment.dev" : "your-business.com"}
              </span>
            </div>
          </div>

          {/* Browser Content Area */}
          <div className="h-64 relative bg-white overflow-hidden flex flex-col items-center justify-center">
            {/* P1: INVISIBLE (The Problem) */}
            <motion.div
              animate={{ opacity: isP1 ? 1 : 0, zIndex: isP1 ? 10 : 0, pointerEvents: isP1 ? "auto" : "none" }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-red-50 p-4 rounded-full mb-4 border border-red-100 shadow-sm"
              >
                <AlertCircle className="w-8 h-8 text-red-400" />
              </motion.div>
              <p className="text-sm font-bold text-slate-700 mb-1">0 Results Found</p>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                Competitor link clicked instead
              </p>
            </motion.div>

            {/* P2: ENGINEERING (The Bridge) */}
            <motion.div
              animate={{ opacity: isP2 ? 1 : 0, zIndex: isP2 ? 10 : 0, pointerEvents: isP2 ? "auto" : "none" }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 gap-6 bg-white"
            >
              <div className="w-full flex-1 flex gap-4">
                <div className="w-1/3 space-y-3">
                  {/* Building wireframes */}
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isP2 ? "100%" : "0%" }}
                    transition={{ duration: 1 }}
                    className="h-4 bg-blue-100 rounded"
                  />
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isP2 ? "80%" : "0%" }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-4 bg-blue-50 rounded"
                  />
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: isP2 ? "60%" : "0%" }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-4 bg-blue-50 rounded"
                  />
                </div>
                <div className="flex-1 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <Code className="w-6 h-6 text-slate-300" />
                  {/* Scanning compiler line */}
                  <motion.div
                    animate={{ y: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="absolute w-full h-8 bg-gradient-to-b from-transparent to-blue-500/10 border-b border-blue-400/50"
                  />
                </div>
              </div>
              <div className="w-full flex justify-between items-center bg-slate-50 border border-slate-100 p-3 rounded-lg shadow-sm">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-mono font-bold text-slate-600 uppercase">Speed Test</span>
                </div>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded">100/100</span>
              </div>
            </motion.div>

            {/* P3: LIVE AUTONOMY (Lead Gen Machine) */}
            <motion.div
              animate={{
                opacity: isP3 || isP4 ? 1 : 0,
                zIndex: isP3 || isP4 ? 10 : 0,
                pointerEvents: isP3 || isP4 ? "auto" : "none",
              }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-white"
            >
              <LayoutTemplate className="w-16 h-16 text-emerald-50 absolute top-4 left-4" />

              {/* Premium wireframe layout */}
              <div className="w-full space-y-4 relative z-10 pl-16">
                <div className="w-3/4 h-6 bg-slate-800 rounded-md shadow-sm" />
                <div className="w-1/2 h-3 bg-slate-200 rounded-md" />
                <div className="w-1/3 h-8 bg-emerald-500 rounded-md mt-6 shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
              </div>

              {/* Popping Lead Notifications */}
              <div className="absolute right-4 bottom-4 flex flex-col gap-2 items-end">
                {[0, 1].map((i) => (
                  <motion.div
                    key={`lead-${i}`}
                    initial={{ opacity: 0, x: 20, y: 10 }}
                    animate={{
                      opacity: isP3 || isP4 ? [0, 1, 1, 0] : 0,
                      x: isP3 || isP4 ? 0 : 20,
                      y: isP3 || isP4 ? -10 : 10,
                    }}
                    transition={{ duration: 3, delay: i * 1.5, repeat: Infinity }}
                    className="bg-white border border-emerald-100 shadow-xl p-2 rounded-lg flex items-center gap-2"
                  >
                    <div className="bg-emerald-50 p-1.5 rounded-md">
                      <UserCheck className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-700 uppercase tracking-wider">
                      New Lead Capture
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ==========================================
            STAGE 4: INFINITE SCALE EXTENSIONS 
            ========================================== */}
        <AnimatePresence>
          {isP4 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              {[
                { icon: Database, label: "CRM Sync", angle: -35, delay: 0 },
                { icon: BarChart3, label: "Analytics", angle: 180, delay: 0.2 },
                { icon: Mail, label: "Auto-Email", angle: 35, delay: 0.4 },
              ].map((node, i) => {
                const radius = 220; // Distance from the central browser
                const x = Math.cos(node.angle * (Math.PI / 180)) * radius;
                const y = Math.sin(node.angle * (Math.PI / 180)) * radius;

                return (
                  <motion.div
                    key={`node-${i}`}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ opacity: 1, x, y }}
                    transition={{ duration: 0.8, delay: node.delay, ease: "easeOut" }}
                    className="absolute flex flex-col items-center justify-center z-10"
                  >
                    {/* SVG Connection Line */}
                    <svg
                      className="absolute w-full h-full overflow-visible z-0"
                      style={{ transform: `translate(${-x / 2}px, ${-y / 2}px)` }}
                    >
                      <motion.line
                        x1={0}
                        y1={0}
                        x2={x}
                        y2={y}
                        stroke="#cbd5e1"
                        strokeWidth="1.5"
                        strokeDasharray="4 4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: node.delay }}
                      />
                    </svg>

                    {/* The Scale Node */}
                    <div className="bg-white border border-purple-100 p-3 rounded-xl shadow-xl relative z-10 flex flex-col items-center gap-2">
                      <div className="bg-purple-50 p-2 rounded-lg text-purple-600">
                        <node.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-wider">
                        {node.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ==========================================
            STAGE 5: CTA (READY TO UPGRADE) 
            ========================================== */}
        <AnimatePresence>
          {isCTA && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex flex-col items-center justify-center z-30"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.2)] mb-6 cursor-pointer relative group"
              >
                <div className="absolute inset-0 border border-slate-900/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <div className="absolute inset-0 border border-slate-900/10 rounded-full animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite]" />
                <ArrowLeft className="w-10 h-10 text-white group-hover:-translate-x-1 transition-transform" />
              </motion.div>
              <h4 className="text-2xl font-serif text-slate-900 mb-2">Launch Your Site</h4>
              <p className="text-sm text-slate-500 font-medium">Awaiting your command on the left.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
