import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// ─── Easing ─────────────────────────────────────────────────────────────────
const EASE = [0.25, 1, 0.5, 1] as const;

// ─── Custom hook: scroll-triggered inView with once ─────────────────────────
function useSectionInView(threshold = 0.15) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, amount: threshold });
    return { ref, inView };
}

// ─── Typewriter hook ─────────────────────────────────────────────────────────
function useTypewriter(text: string, speed = 55, delay = 1200) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0;
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setDisplayed(text.slice(0, i + 1));
                i++;
                if (i === text.length) {
                    clearInterval(interval);
                    setDone(true);
                }
            }, speed);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, speed, delay]);

    return { displayed, done };
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 – SYSTEM BOOT HERO
// ─────────────────────────────────────────────────────────────────────────────
function SystemBootHero() {
    const { displayed, done } = useTypewriter("Initializing Autonomex Systems...");

    return (
        <section id="section-boot" className="relative min-h-screen flex flex-col items-center justify-center bg-[#080b0e] overflow-hidden">
            {/* Subtle radial glow */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(20,184,166,0.06) 0%, transparent 70%)",
                }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center">
                {/* System label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.2 }}
                    className="mb-8"
                >
                    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-teal-500/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
                        AUTONOMEX / SYSTEM_INIT
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.5 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white tracking-tight leading-[1.05] mb-10"
                >
                    Built in the
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-300">
                        Era of AI.
                    </span>
                </motion.h1>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, ease: EASE, delay: 0.9 }}
                    className="h-7 flex items-center justify-center"
                >
                    <span className="font-mono text-sm text-slate-400 tracking-wide">
                        {displayed}
                        <span
                            className={`inline-block w-[2px] h-[1em] bg-teal-400 ml-0.5 align-middle ${done ? "animate-[blink_1s_step-end_infinite]" : ""
                                }`}
                        />
                    </span>
                </motion.div>
            </div>

            {/* Bottom rule */}
            <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: EASE, delay: 1.8 }}
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent origin-left"
            />

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 0.8, ease: EASE }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                    Scroll
                </span>
                <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent" />
            </motion.div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 – ARCHITECT AUTHORITY PANEL
// ─────────────────────────────────────────────────────────────────────────────

// ─── Terminal lines (static — all visible after fade-in) ────────────────────
const TERMINAL_LINES = [
    { key: "ARCHITECT", value: "HARSH HAVANUR" },
    { key: "ROLE", value: "SYSTEMS ENGINEER" },
    { key: "DOMAIN", value: "AI INFRASTRUCTURE" },
    { key: "MODE", value: "PRODUCTION" },
    { key: "STATUS", value: "STABLE" },
];

function TerminalPanel({ inView }: { inView: boolean }) {
    const [cursorOn, setCursorOn] = useState(true);

    useEffect(() => {
        const id = setInterval(() => setCursorOn((v) => !v), 530);
        return () => clearInterval(id);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: EASE, delay: 0.4 }}
            className="relative md:ml-auto w-full"
        >
            {/* Panel shell */}
            <div
                className="relative border border-teal-500/20 bg-[#060809] overflow-hidden"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(20,184,166,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(20,184,166,0.018) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            >
                {/* Title bar */}
                <div className="flex items-center gap-3 px-5 py-3 border-b border-teal-500/10 bg-white/[0.012]">
                    <span className="w-2 h-2 rounded-full bg-teal-500/40" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-teal-500/45">
                        AUTONOMEX / ARCHITECT_PROFILE
                    </span>
                </div>

                {/* Terminal body */}
                <div className="px-6 py-8 space-y-[14px]">
                    {TERMINAL_LINES.map((line) => (
                        <div key={line.key} className="flex items-baseline gap-0">
                            <span className="font-mono text-[11px] text-slate-600 tracking-wider shrink-0 mr-2">
                                &gt;
                            </span>
                            <span className="font-mono text-[11px] text-slate-500 tracking-wider shrink-0 w-36">
                                {line.key}:
                            </span>
                            <span className="font-mono text-[13px] font-medium text-teal-300 tracking-wide">
                                {line.value}
                            </span>
                        </div>
                    ))}

                    {/* Blinking prompt cursor */}
                    <div className="flex items-center gap-2 pt-2">
                        <span className="font-mono text-[11px] text-slate-700">&gt;</span>
                        <span
                            className="inline-block w-[7px] h-[14px] bg-teal-400/60"
                            style={{ opacity: cursorOn ? 1 : 0 }}
                        />
                    </div>
                </div>

                {/* Status footer */}
                <div className="px-5 py-3 border-t border-teal-500/10 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-slate-700 tracking-wider">
                        AUTONOMEX AI — SYSTEMS DIVISION
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-[10px] text-teal-500/55">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500/55 animate-pulse" />
                        LIVE
                    </span>
                </div>
            </div>

            {/* Corner frame accents */}
            <div className="absolute -top-px -left-px  w-4 h-4 border-t-2 border-l-2 border-teal-500/50" />
            <div className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2 border-teal-500/50" />
            <div className="absolute -bottom-px -left-px  w-4 h-4 border-b-2 border-l-2 border-teal-500/50" />
            <div className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2 border-teal-500/50" />
        </motion.div>
    );
}


function FounderSection() {
    const { ref, inView } = useSectionInView(0.2);

    return (
        <section ref={ref} id="section-architect" className="bg-[#0a0c0f] py-28 md:py-36">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="mb-16 md:mb-20"
                >
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-500/60">
                        01 / Architect
                    </span>
                    <div className="mt-3 h-px w-12 bg-teal-500/30" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
                    {/* LEFT – Manifesto */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, ease: EASE, delay: 0.15 }}
                    >
                        <h2 className="font-sans text-3xl md:text-4xl font-bold text-white leading-[1.15] tracking-tight mb-8">
                            We don't build AI features.
                            <br />
                            <span className="text-slate-400">We engineer AI systems.</span>
                        </h2>

                        <div className="space-y-5 text-slate-400 text-sm leading-[1.8]">
                            <p>
                                Production-grade AI is not a plugin. It is a precision-engineered
                                system — designed around data contracts, failure boundaries, and
                                explicit operational constraints.
                            </p>
                            <p>
                                Every deployment we ship is specced, versioned, and stress-tested
                                before it touches a live environment. No prototypes in production.
                                No ambiguity in scope.
                            </p>
                            <p>
                                We engage with operators who understand that AI infrastructure
                                is a long-term architectural commitment — not a quarterly experiment.
                            </p>
                        </div>

                        <div className="mt-10 pt-8 border-t border-white/[0.06]">
                            <p className="font-sans font-semibold text-white text-sm tracking-wide">
                                Harsh Havanur
                            </p>
                            <p className="font-mono text-[10px] text-teal-500/60 tracking-[0.2em] uppercase mt-1.5">
                                Founder & Chief Engineer — AUTONOMEX AI
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT – Terminal Authority Panel */}
                    <TerminalPanel inView={inView} />
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 – ENGINEERING PHILOSOPHY GRID
// ─────────────────────────────────────────────────────────────────────────────
const PHILOSOPHY = [
    {
        index: "01",
        title: "Architecture over ambiguity.",
        body: "Every system begins with a precise spec. We don't iterate blindly — we design deliberately.",
    },
    {
        index: "02",
        title: "Reliability is the product.",
        body: "Demos impress. Uptime earns trust. We build for production from the first commit.",
    },
    {
        index: "03",
        title: "Scale is designed in, not bolted on.",
        body: "Systems that don't hold at 10x volume were never truly built. We architect for the load you'll face.",
    },
];

function PhilosophyGrid() {
    const { ref, inView } = useSectionInView(0.15);

    return (
        <section
            ref={ref}
            id="section-philosophy"
            className="relative py-28 md:py-36"
            style={{
                background: "#0d1014",
                backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
            }}
        >
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="mb-16 md:mb-20"
                >
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-500/60">
                        02 / Engineering Philosophy
                    </span>
                    <div className="mt-3 h-px w-12 bg-teal-500/30" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                    {PHILOSOPHY.map((item, i) => (
                        <motion.div
                            key={item.index}
                            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                            animate={
                                inView
                                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                                    : {}
                            }
                            transition={{
                                duration: 0.75,
                                ease: EASE,
                                delay: 0.1 + i * 0.4,
                            }}
                            className="relative p-8 bg-white/[0.025] border border-white/[0.06] rounded-sm group"
                        >
                            {/* Teal left accent */}
                            <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-teal-500/50 rounded-full" />

                            <span className="block font-mono text-[11px] text-teal-500/50 tracking-widest uppercase mb-6">
                                {item.index}
                            </span>
                            <h3 className="font-sans text-lg font-bold text-white leading-snug mb-4 tracking-tight">
                                {item.title}
                            </h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{item.body}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 – SERVICES AS SYSTEM MODULES
// ─────────────────────────────────────────────────────────────────────────────
const MODULES = [
    {
        id: "MOD_01",
        title: "AI Workflow Automation",
        descriptor:
            "End-to-end automation of repeatable business processes using custom-trained AI agents.",
        tag: "CORE_SYSTEM",
    },
    {
        id: "MOD_02",
        title: "Intelligent Data Infrastructure",
        descriptor:
            "Structured pipelines that transform raw data into decision-ready intelligence.",
        tag: "DATA_LAYER",
    },
    {
        id: "MOD_03",
        title: "Custom AI Integration",
        descriptor:
            "Precision integration of LLM and ML systems into your existing operating stack.",
        tag: "INTEGRATION",
    },
    {
        id: "MOD_04",
        title: "AI Strategy & Architecture",
        descriptor:
            "Senior-led technical consulting to define your AI roadmap and system architecture.",
        tag: "ADVISORY",
    },
];

function SystemModules() {
    const { ref, inView } = useSectionInView(0.1);

    return (
        <section ref={ref} id="section-modules" className="bg-[#080b0e] py-28 md:py-36">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                {/* Section label */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.7, ease: EASE }}
                    className="mb-16 md:mb-20"
                >
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-500/60">
                        03 / Service Modules
                    </span>
                    <div className="mt-3 h-px w-12 bg-teal-500/30" />
                </motion.div>

                <div className="space-y-0 divide-y divide-white/[0.05]">
                    {MODULES.map((mod, i) => {
                        const fromLeft = i % 2 === 0;
                        return (
                            <motion.div
                                key={mod.id}
                                initial={{ opacity: 0, x: fromLeft ? -60 : 60 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{
                                    duration: 0.85,
                                    ease: EASE,
                                    delay: 0.1 + i * 0.15,
                                }}
                                className="group relative py-9 flex flex-col md:flex-row md:items-center gap-4 md:gap-10 cursor-default"
                            >
                                {/* Hover accent line */}
                                <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-teal-500/40 transition-[width] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" />

                                {/* ID */}
                                <span className="font-mono text-[11px] text-slate-600 tracking-widest uppercase shrink-0 w-20">
                                    {mod.id}
                                </span>

                                {/* Title */}
                                <h3 className="font-sans text-xl md:text-2xl font-bold text-white tracking-tight flex-1 group-hover:text-teal-300 transition-colors duration-300">
                                    {title(mod.title)}
                                </h3>

                                {/* Descriptor */}
                                <p className="text-slate-500 text-sm leading-relaxed md:max-w-xs">
                                    {mod.descriptor}
                                </p>

                                {/* Tag */}
                                <span className="font-mono text-[10px] text-teal-600/60 tracking-widest uppercase shrink-0 hidden md:block">
                                    {mod.tag}
                                </span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function title(s: string) {
    return s;
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 5 – VISION CLOSE
// ─────────────────────────────────────────────────────────────────────────────
function VisionClose() {
    const { ref, inView } = useSectionInView(0.25);

    return (
        <section ref={ref} id="section-vision" className="bg-[#080b0e] py-32 md:py-44">
            {/* Top rule */}
            <div className="max-w-6xl mx-auto px-6 md:px-12 mb-20">
                <div className="h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="mb-8"
                >
                    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-teal-500/60">
                        04 / Vision
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.2 }}
                    className="font-sans text-4xl md:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
                >
                    The future belongs to
                    <br />
                    <span className="text-teal-400">systems that think.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
                    className="text-slate-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-12"
                >
                    We're building the AI infrastructure layer for India's most ambitious
                    companies. If that sounds like you, let's begin.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.85 }}
                >
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-teal-500 text-black font-sans font-semibold text-sm tracking-wide hover:bg-teal-400 transition-colors duration-300 rounded-sm"
                    >
                        Start a Conversation
                        <span className="font-mono text-xs opacity-60">→</span>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SCROLL PROGRESS BAR
// ─────────────────────────────────────────────────────────────────────────────
function ScrollProgressBar() {
    const [pct, setPct] = useState(0);

    useEffect(() => {
        function onScroll() {
            const scrolled = window.scrollY;
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setPct(total > 0 ? (scrolled / total) * 100 : 0);
        }
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-[2px] z-[9999] bg-transparent pointer-events-none">
            <div
                className="h-full bg-teal-500/70"
                style={{ width: `${pct}%` }}
            />
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION INDEX HUD
// ─────────────────────────────────────────────────────────────────────────────
const HUD_SECTIONS = [
    { id: "section-boot", label: "SYSTEM_BOOT", index: "01" },
    { id: "section-architect", label: "ARCHITECT", index: "02" },
    { id: "section-philosophy", label: "PHILOSOPHY", index: "03" },
    { id: "section-modules", label: "MODULES", index: "04" },
    { id: "section-vision", label: "VISION", index: "05" },
];

function SectionHUD() {
    const [activeId, setActiveId] = useState("section-boot");

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        HUD_SECTIONS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) setActiveId(id);
                },
                { threshold: 0.35 }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-5 items-end pointer-events-none">
            {HUD_SECTIONS.map(({ id, label, index }) => {
                const active = activeId === id;
                return (
                    <div
                        key={id}
                        className="flex items-center gap-2.5"
                        style={{ opacity: active ? 1 : 0.28 }}
                    >
                        <span
                            className="font-mono text-[9px] tracking-[0.2em] uppercase"
                            style={{ color: active ? "rgb(45,212,191)" : "rgb(100,116,139)" }}
                        >
                            {label}
                        </span>
                        <span
                            className="font-mono text-[9px] tracking-wider"
                            style={{ color: active ? "rgb(45,212,191)" : "rgb(71,85,105)" }}
                        >
                            {index}
                        </span>
                        <div
                            className="w-px h-3"
                            style={{ background: active ? "rgb(45,212,191)" : "rgb(51,65,85)" }}
                        />
                    </div>
                );
            })}
        </div>
    );
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE ROOT
// ─────────────────────────────────────────────────────────────────────────────
export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#080b0e]">
            <ScrollProgressBar />
            <SectionHUD />
            <Header />
            <main>
                <SystemBootHero />
                <FounderSection />
                <PhilosophyGrid />
                <SystemModules />
                <VisionClose />
            </main>
            <Footer />
        </div>
    );
}
