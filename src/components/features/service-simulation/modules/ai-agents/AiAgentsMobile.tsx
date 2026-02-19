import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Cpu, CheckCircle2, ArrowLeft } from "lucide-react";

interface AiAgentsMobileProps {
    activePhase?: string;
    className?: string;
}

export default function AiAgentsMobile({
    activePhase = "phase-1",
    className = "",
}: AiAgentsMobileProps) {
    const isP1 = activePhase === "phase-1";
    const isP2 = activePhase === "phase-2";
    const isP3 = activePhase === "phase-3";
    const isP4 = activePhase === "phase-4";
    const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

    return (
        <div className={`absolute inset-0 items-center justify-center ${className}`}>
            {/* OLED Dynamic Island card */}
            <div
                className="w-[90%] max-w-[340px] h-[280px] bg-black rounded-[2.5rem] shadow-2xl border border-slate-800 relative overflow-hidden flex items-center justify-center"
            >
                <AnimatePresence mode="wait">

                    {/* ── PHASE 1: The Overload ───────────────────────────────────── */}
                    {isP1 && (
                        <motion.div
                            key="m-p1"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        >
                            {/* Red ambient glow */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(circle at 50% 40%, rgba(239,68,68,0.18) 0%, transparent 70%)" }}
                            />

                            <motion.div
                                animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <AlertTriangle size={48} className="text-red-500" style={{ filter: "drop-shadow(0 0 12px rgba(239,68,68,0.8))" }} />
                            </motion.div>

                            <span className="text-2xl font-bold text-white tracking-wider z-10">OVERLOAD</span>
                            <span className="text-sm text-red-400 z-10">47 Tasks Pending</span>
                        </motion.div>
                    )}

                    {/* ── PHASE 2: The Scan ──────────────────────────────────────── */}
                    {isP2 && (
                        <motion.div
                            key="m-p2"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-4"
                        >
                            {/* Blue ambient glow */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(circle at 50% 40%, rgba(59,130,246,0.18) 0%, transparent 70%)" }}
                            />

                            {/* Rotating CPU with scan line */}
                            <div className="relative flex items-center justify-center z-10">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                >
                                    <Cpu size={56} className="text-blue-500" style={{ filter: "drop-shadow(0 0 14px rgba(59,130,246,0.9))" }} />
                                </motion.div>

                                {/* Thick blue sweep line */}
                                <motion.div
                                    className="absolute left-[-40px] right-[-40px] rounded-full"
                                    style={{
                                        height: 3,
                                        background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.9), rgba(147,210,255,1), rgba(59,130,246,0.9), transparent)",
                                        boxShadow: "0 0 12px rgba(59,130,246,0.8), 0 0 24px rgba(59,130,246,0.4)",
                                    }}
                                    animate={{ top: ["15%", "85%", "15%"] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>

                            <span className="text-sm font-mono tracking-[0.2em] text-blue-400 uppercase z-10">Mapping Rules...</span>
                        </motion.div>
                    )}

                    {/* ── PHASE 3: The Autopilot ─────────────────────────────────── */}
                    {isP3 && (
                        <motion.div
                            key="m-p3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.1 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        >
                            {/* Emerald ambient glow */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(circle at 50% 45%, rgba(16,185,129,0.2) 0%, transparent 70%)" }}
                            />

                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: [0, 1.2, 1] }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="z-10"
                            >
                                <CheckCircle2
                                    size={64}
                                    className="text-emerald-400"
                                    style={{ filter: "drop-shadow(0 0 18px rgba(16,185,129,0.9))" }}
                                />
                            </motion.div>

                            <motion.span
                                className="text-2xl font-bold text-white tracking-wider z-10"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                AUTOPILOT
                            </motion.span>
                            <motion.span
                                className="text-sm text-emerald-400 z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.45 }}
                            >
                                Execution time: 0.1s
                            </motion.span>
                        </motion.div>
                    )}

                    {/* ── PHASE 4: The Scale ─────────────────────────────────────── */}
                    {isP4 && (
                        <motion.div
                            key="m-p4"
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.88 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        >
                            {/* Indigo ambient glow */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(circle at 50% 45%, rgba(99,102,241,0.2) 0%, transparent 70%)" }}
                            />

                            <motion.span
                                className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 z-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{ filter: "drop-shadow(0 0 20px rgba(139,92,246,0.6))" }}
                            >
                                1,000+
                            </motion.span>

                            <motion.span
                                className="text-sm font-mono tracking-[0.15em] text-indigo-300 uppercase z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Concurrent Executions
                            </motion.span>
                        </motion.div>
                    )}

                    {/* ── PHASE 5 / CTA: The Trigger ────────────────────────────── */}
                    {isCTA && (
                        <motion.div
                            key="m-cta"
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.04 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-5"
                        >
                            {/* Violet ambient glow */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.18) 0%, transparent 65%)" }}
                            />

                            {/* Glass pill button */}
                            <motion.button
                                className="relative z-10 flex items-center gap-3 rounded-full px-8 py-4 cursor-pointer"
                                style={{
                                    background: "rgba(255,255,255,0.1)",
                                    backdropFilter: "blur(12px)",
                                    WebkitBackdropFilter: "blur(12px)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                    boxShadow: "0 8px 32px rgba(139,92,246,0.25)",
                                }}
                                animate={{ scale: [1, 1.03, 1] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ scale: 1.06 }}
                            >
                                <ArrowLeft size={20} className="text-white" />
                                <span className="text-lg font-semibold text-white tracking-wide">Deploy AI</span>
                            </motion.button>

                            <motion.span
                                className="text-xs font-mono tracking-widest text-indigo-400 uppercase z-10"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                Awaiting your command
                            </motion.span>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
