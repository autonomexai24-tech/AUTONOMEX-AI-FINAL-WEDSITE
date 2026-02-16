import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle2, MessageSquare, Phone } from "lucide-react";
import OrbitalCenter from "./OrbitalCenter";
import OrbitalRings from "./OrbitalRings";
import OrbitalSatellites from "./OrbitalSatellites";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FDFBF7] pt-32 pb-20 lg:pt-0">
      {/* 1. Background Layers (The Atmosphere) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Paper Grain */}
        <div className="absolute inset-0 opacity-[0.03] bg-noise mix-blend-multiply" />

        {/* Saffron/Gold Warmth (Top Right) */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-orange-100/30 blur-[150px] rounded-full mix-blend-multiply" />

        {/* Trust Blue (Bottom Left) */}
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-50/50 blur-[150px] rounded-full mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        {/* LEFT COLUMN: Copy & Action */}
        <div
          className={`flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          {/* Badge */}
          <div className="relative z-20 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200/60 bg-white/60 backdrop-blur-md mb-8 shadow-sm cursor-default">
            <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 font-bold">
              Trusted by Shops & Manufacturers
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-[5rem] leading-[1.1] lg:leading-[1.05] font-bold text-slate-900 mb-8 tracking-tight">
            Technology That <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Grows Your Business.
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg lg:max-w-xl font-medium">
            Whether you run a <span className="text-slate-900 font-semibold">local shop</span> or a{" "}
            <span className="text-slate-900 font-semibold">large factory</span>, we build the Websites, Apps, and AI
            Tools you need to save time and make more money.
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 mb-12 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-1 rounded-full">
                <CheckCircle2 className="w-3 h-3 text-green-700" />
              </div>
              <span>Zero Overhead</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-1 rounded-full">
                <CheckCircle2 className="w-3 h-3 text-green-700" />
              </div>
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-100 p-1 rounded-full">
                <CheckCircle2 className="w-3 h-3 text-green-700" />
              </div>
              <span>24h Deployment</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
            <Link to="/contact">
              <Button className="h-14 px-10 rounded-full bg-[#0B1120] text-white text-[15px] font-semibold shadow-2xl hover:shadow-xl hover:scale-[1.02] hover:bg-slate-900 transition-all duration-300 group w-full sm:w-auto">
                Contact Us
                <MessageSquare className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="h-14 w-full px-10 rounded-full border-slate-300 text-slate-700 hover:bg-white hover:text-slate-900 text-[15px] font-medium backdrop-blur-sm"
              >
                Contact Us
                <Phone className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* 10x PREMIUM MOBILE VISUAL (iOS-Grade Glass Widget) */}
          <div className="lg:hidden mt-16 w-full max-w-[360px] mx-auto animate-[float-slow_6s_ease-in-out_infinite]">
            {/* Ambient Glow behind the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 blur-3xl rounded-[2.5rem] -z-10" />

            {/* Main Glass Housing */}
            <div className="relative bg-white/70 backdrop-blur-3xl backdrop-saturate-[150%] border border-white/90 shadow-[0_24px_40px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.03] rounded-[2rem] p-6 overflow-hidden">
              {/* Subtle geometric overlay for premium reflection feel */}
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-gradient-to-bl from-blue-100/60 to-transparent rounded-full blur-2xl pointer-events-none" />

              {/* Header Section */}
              <div className="flex items-center gap-4 mb-6 relative z-10">
                {/* Physical Core Icon */}
                <div className="relative w-12 h-12 rounded-[1.25rem] bg-gradient-to-b from-blue-500 to-indigo-600 p-[1px] shadow-[0_8px_16px_-4px_rgba(59,130,246,0.4)]">
                  <div className="absolute inset-0 rounded-[1.25rem] bg-gradient-to-b from-white/25 to-transparent pointer-events-none" />
                  <div className="w-full h-full rounded-[1.25rem] bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-inner">
                    <Sparkles className="w-5 h-5 text-white drop-shadow-md" />
                  </div>
                </div>

                {/* Title & Status */}
                <div>
                  <div className="text-[17px] font-bold text-slate-900 tracking-tight leading-none mb-1.5">
                    Autonomex Agent
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex w-2 h-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.8)]"></span>
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest leading-none mt-px">
                      System Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Message Interface */}
              <div className="relative z-10 bg-gradient-to-b from-slate-50/90 to-slate-100/50 p-5 rounded-2xl border border-slate-200/60 shadow-[inset_0_2px_4px_rgba(255,255,255,0.7)]">
                <p className="text-[15px] text-slate-700 leading-relaxed font-medium">
                  "I've analyzed your market data. We can reduce ad spend by{" "}
                  <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-700 font-bold mx-0.5 shadow-sm">
                    35%
                  </span>{" "}
                  while maintaining lead volume."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Orbital Command Center (Desktop Only) */}
        <div className="hidden lg:flex relative h-[800px] w-full items-center justify-center perspective-[1000px]">
          <div className="relative w-[800px] h-[800px] flex items-center justify-center transform-style-3d scale-90">
            <OrbitalRings />
            <OrbitalCenter />
            <OrbitalSatellites />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
