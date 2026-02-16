import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Zap, Layout, Search, Code2, Globe, Cpu } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/features/story/GridBackground";

/* 1. The "Tech Stack" Marquee Data */
const STACK = ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "PostgreSQL", "Vercel Edge"];

/* 2. The "System Modules" (Benefits) */
const MODULES = [
  {
    id: "01",
    title: "Performance Engineering",
    desc: "We don't optimize later; we build for speed first. Sub-second load times, 100/100 Lighthouse scores, and Core Web Vitals compliance.",
    metric: "99/100 Speed",
    icon: Zap,
  },
  {
    id: "02",
    title: "Semantic Architecture",
    desc: "Clean, semantic HTML5 structure that search engines love. Schema.org integration and dynamic meta-tagging for maximum visibility.",
    metric: "+40% SEO Lift",
    icon: Search,
  },
  {
    id: "03",
    title: "Editorial Interaction",
    desc: "Fluid animations and micro-interactions that guide user attention. It feels like an app, not a document.",
    metric: "60fps Smooth",
    icon: Layout,
  },
];

const WebDevelopment = () => (
  <div className="min-h-screen bg-background relative overflow-hidden">
    <Header />
    <GridBackground theme="pink" />

    {/* HERO SECTION */}
    <section className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-pink-200 bg-pink-50/50 backdrop-blur-sm mb-8 animate-in fade-in zoom-in duration-700">
        <Globe className="w-3 h-3 text-pink-600" />
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-pink-700">
          Web Engineering
        </span>
      </div>

      {/* Headline */}
      <h1 className="font-serif text-5xl md:text-8xl text-slate-900 tracking-tight leading-[1] mb-8 animate-in slide-in-from-bottom-8 fade-in duration-1000">
        We don't build pages. <br />
        We build{" "}
        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-500">
          engines.
        </span>
      </h1>

      {/* Subhead */}
      <p className="text-lg md:text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-100">
        Most websites are digital brochures. Ours are high-performance assets engineered for conversion, speed, and
        massive scale.
      </p>

      {/* The "HUD" Visual (Live Stats) */}
      <div className="flex flex-wrap justify-center gap-4 mb-16 animate-in zoom-in-95 fade-in duration-1000 delay-200">
        <div className="px-6 py-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs font-bold text-slate-600 uppercase tracking-wider">Lighthouse: 100</span>
        </div>
        <div className="px-6 py-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs font-bold text-slate-600 uppercase tracking-wider">Uptime: 99.9%</span>
        </div>
        <div className="px-6 py-3 bg-white/80 backdrop-blur-md border border-slate-200 rounded-xl shadow-sm flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs font-bold text-slate-600 uppercase tracking-wider">SEO: Optimized</span>
        </div>
      </div>

      {/* CTA */}
      <div className="animate-in slide-in-from-bottom-12 fade-in duration-1000 delay-300">
        <Link to="/contact">
          <Button className="h-14 px-10 rounded-full bg-[#0B1120] text-white text-[15px] font-semibold shadow-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
            Start Your Build <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </section>

    {/* TECH STACK MARQUEE */}
    <div className="relative w-full overflow-hidden py-8 border-y border-slate-100 bg-white/50 backdrop-blur-sm">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex gap-16 animate-marquee whitespace-nowrap min-w-full justify-center">
        {/* Render twice for infinite loop visual if we added animation class, simple flex for now */}
        {STACK.map((tech, i) => (
          <span
            key={i}
            className="text-sm font-mono font-bold text-slate-300 uppercase tracking-widest flex items-center gap-2"
          >
            <Cpu size={12} /> {tech}
          </span>
        ))}
      </div>
    </div>

    {/* MODULES GRID (The "Spec Sheet") */}
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MODULES.map((m, i) => (
          <div
            key={i}
            className="group relative bg-white border border-slate-200 rounded-3xl p-8 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
          >
            {/* Hover Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Header */}
            <div className="relative z-10 flex justify-between items-start mb-8">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-pink-500 group-hover:text-white transition-colors duration-500">
                <m.icon size={20} />
              </div>
              <span className="font-mono text-xs text-slate-300 group-hover:text-pink-400 transition-colors">
                SYS_MOD_{m.id}
              </span>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h3 className="font-serif text-2xl font-medium text-slate-900 mb-4">{m.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-8">{m.desc}</p>

              {/* Metric Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-600 text-xs font-bold font-mono uppercase tracking-wide">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {m.metric}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Nav */}
      <div className="mt-24 text-center">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-900 transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Return to Mission Control
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default WebDevelopment;
