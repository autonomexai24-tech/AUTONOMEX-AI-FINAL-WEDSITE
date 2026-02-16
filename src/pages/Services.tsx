import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/features/story/GridBackground";

const services = [
  { title: "AI Agent Automation", description: "Autonomous agents that work 24/7 — qualifying leads, nurturing prospects, and closing loops.", path: "/services/ai-agents" },
  { title: "Website Development", description: "High-performance, editorial-grade websites built for clarity, conversion, and scale.", path: "/services/web-development" },
  { title: "App Development", description: "Native-quality applications engineered for speed, reliability, and seamless user experience.", path: "/services/app-development" },
  { title: "AI Video & UGC", description: "AI-generated video content and UGC at scale — authentic, on-brand, and conversion-ready.", path: "/services/ai-video" },
];

const Services = () => (
  <div className="min-h-screen bg-background relative overflow-hidden">
    <Header />
    <GridBackground theme="neutral" />

    <section className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] max-w-7xl mx-auto px-6 md:px-12 text-center pt-32 pb-16">
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
        Services
      </span>
      <h1 className="font-serif text-5xl md:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-6">
        What we <span className="italic text-slate-400">build.</span>
      </h1>
      <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
        Four capabilities. One engineering standard. Every engagement is built to compound.
      </p>
    </section>

    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <Link key={i} to={s.path} className="group block bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <h3 className="font-serif text-2xl font-medium text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{s.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.description}</p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors">
              Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
