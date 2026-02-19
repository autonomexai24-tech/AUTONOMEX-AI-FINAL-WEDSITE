import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Code,
    CheckCircle2,
    Globe,
    ArrowLeft,
} from "lucide-react";

interface WebDevMobileProps {
    activePhase?: string;
    className?: string;
}

export default function WebDevMobile({ activePhase = "phase-1", className = "" }: WebDevMobileProps) {
    const isP1 = activePhase === "phase-1";
    const isP2 = activePhase === "phase-2";
    const isP3 = activePhase === "phase-3";
    const isP4 = activePhase === "phase-4";
    const isCTA = activePhase === "cta" || (!isP1 && !isP2 && !isP3 && !isP4);

    return (
        <div className={`absolute inset-0 items-center justify-center ${className}`}>
            {/* OLED Card */}
            <div
                className="w-[90%] max-w-[340px] h-[280px] bg-black rounded-[2.5rem] shadow-2xl border border-slate-800 flex items-center justify-center overflow-hidden relative"
            >
                <AnimatePresence mode="wait">

                    {/* ── PHASE 1: The Invisible Void ──────────────────────────── */}
                    {isP1 && (
                        <motion.div
                            key="m-p1"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        >
                            {/* Subtle red ambient — single layer, no blur */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(circle at 50% 40%, rgba(239,68,68,0.12) 0%, transparent 70%)" }}
                            />

                            {/* Giant pulsing search icon */}
                            <motion.div
                                animate={{ opacity: [0.45, 0.65, 0.45], scale: [1, 1.06, 1] }}
                                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <Search size={48} className="text-red-500" />
                            </motion.div>

                            {/* Headline */}
                            <p className="text-2xl font-bold text-white tracking-wider z-10">INVISIBLE</p>

                            {/* Subtext */}
                            <p className="text-sm text-red-400 z-10">0 Results Found</p>
                        </motion.div>
                    )}

                    {/* ── PHASE 2: The Engineering ──────────────────────────────── */}
                    {isP2 && (
                        <motion.div
                            key="m-p2"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        >
                            {/* Blue ambient */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(circle at 50% 40%, rgba(59,130,246,0.14) 0%, transparent 70%)" }}
                            />

                            {/* Code icon with glowing sweep line */}
                            <div className="relative flex items-center justify-center">
                                <Code size={56} className="text-blue-500" />
                                {/* Sweep line — purely 2D (y-axis translate) */}
                                <motion.div
                                    className="absolute left-0 right-0 h-[2px] rounded-full"
                                    style={{
                                        background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.9), transparent)",
                                        boxShadow: "0 0 8px rgba(59,130,246,0.8)",
                                        top: 0,
                                    }}
                                    animate={{ y: [0, 56, 0] }}
                                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>

                            {/* Headline */}
                            <p className="text-2xl font-bold text-white z-10">COMPILING</p>

                            {/* Subtext */}
                            <p className="text-sm text-blue-400 z-10">Speed: 100/100</p>
                        </motion.div>
                    )}

                    {/* ── PHASE 3: The Lead Machine ──────────────────────────────── */}
                    {isP3 && (
                        <motion.div
                            key="m-p3"
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.88 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        >
                            {/* Emerald ambient */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(circle at 50% 40%, rgba(16,185,129,0.14) 0%, transparent 70%)" }}
                            />

                            {/* Popping check icon */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                style={{ filter: "drop-shadow(0 0 16px rgba(16,185,129,0.7))" }}
                            >
                                <CheckCircle2 size={64} className="text-emerald-400" />
                            </motion.div>

                            {/* Headline */}
                            <p className="text-2xl font-bold text-white z-10">CONVERTING</p>

                            {/* Subtext */}
                            <p className="text-sm text-emerald-400 z-10">New Lead Captured</p>
                        </motion.div>
                    )}

                    {/* ── PHASE 4: The Global Scale ──────────────────────────────── */}
                    {isP4 && (
                        <motion.div
                            key="m-p4"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                        >
                            {/* Purple ambient */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(circle at 50% 40%, rgba(168,85,247,0.14) 0%, transparent 70%)" }}
                            />

                            {/* Slowly rotating globe — 2D rotate only */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                style={{ filter: "drop-shadow(0 0 16px rgba(168,85,247,0.6))" }}
                            >
                                <Globe size={64} className="text-purple-500" />
                            </motion.div>

                            {/* Headline */}
                            <p className="text-2xl font-bold text-white z-10">GLOBAL NODE</p>

                            {/* Subtext */}
                            <p className="text-sm text-purple-400 z-10">CRM & Analytics Synced</p>
                        </motion.div>
                    )}

                    {/* ── PHASE 5 / CTA: The Trigger ─────────────────────────────── */}
                    {isCTA && (
                        <motion.div
                            key="m-cta"
                            initial={{ opacity: 0, scale: 0.88 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.88 }}
                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col items-center justify-center gap-5"
                        >
                            {/* Cyan ambient */}
                            <div
                                className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.14) 0%, transparent 70%)" }}
                            />

                            {/* Pill CTA button — dark glass, no backdrop-blur for GPU safety */}
                            <motion.button
                                className="flex items-center gap-3 rounded-full px-8 py-4 cursor-pointer z-10"
                                style={{
                                    background: "rgba(255,255,255,0.1)",
                                    border: "1px solid rgba(255,255,255,0.15)",
                                }}
                                animate={{ scale: [1, 1.04, 1] }}
                                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                                whileHover={{ scale: 1.07 }}
                            >
                                <ArrowLeft size={22} className="text-white" />
                                <span className="text-lg font-semibold text-white tracking-wide">Launch Site</span>
                            </motion.button>

                            {/* Subtext */}
                            <motion.p
                                className="text-sm text-cyan-400 tracking-widest uppercase z-10"
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.25 }}
                            >
                                Awaiting your command
                            </motion.p>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
}
