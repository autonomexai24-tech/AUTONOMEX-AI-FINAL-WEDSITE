import { useState } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Mouse Parallax Logic: Calculates rotation based on cursor position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20; // Range -10 to 10 degrees
    const y = (e.clientY / window.innerHeight - 0.5) * 20; // Range -10 to 10 degrees
    setRotation({ x: -y, y: x });
  };

  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-32 pb-12 md:pt-0"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setRotation({ x: 0, y: 0 })}
    >
      {/* 1. Global Noise Texture (The Premium Paper Feel) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. Auroral Background Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-purple-200/30 blur-[100px] rounded-full" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        {/* LEFT COLUMN: The Copy */}
        <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left">
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-semibold">
              The Modern Growth Stack
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-[5rem] leading-[1] font-medium text-slate-900 mb-6 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
            Deploy the future of your business,{" "}
            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              faster.
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Stop waiting on bloated agencies. We deploy AI agents, rapid apps, and high-converting campaigns to build
            your pipeline while you sleep.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
            <Button className="w-full sm:w-auto rounded-full bg-slate-900 text-white hover:bg-slate-800 px-8 py-6 text-base font-semibold shadow-xl hover:scale-105 transition-transform">
              Book Strategy Call
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto rounded-full border-slate-300 text-slate-700 px-8 py-6 text-base hover:bg-slate-50"
            >
              Explore Solutions
            </Button>
          </div>

          {/* MOBILE ONLY VISUAL (The Lite Card - Stage 5 Requirement) */}
          <div className="md:hidden mt-12 relative w-full flex justify-center animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="w-[90%] bg-white/80 backdrop-blur-xl border border-white/60 shadow-2xl rounded-2xl p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  ✨
                </div>
                <div>
                  <div className="h-2 w-20 bg-slate-200 rounded mb-1"></div>
                  <div className="h-2 w-12 bg-slate-100 rounded"></div>
                </div>
              </div>
              <div className="h-24 bg-slate-50 rounded-lg border border-slate-100 flex items-end justify-around p-2">
                <div className="w-4 h-[40%] bg-blue-200 rounded-t"></div>
                <div className="w-4 h-[60%] bg-blue-300 rounded-t"></div>
                <div className="w-4 h-[80%] bg-blue-500 rounded-t"></div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The 3D Stack (Desktop Only - Stage 4 Requirement) */}
        <div className="hidden md:block w-1/2 h-[600px] relative perspective-[2000px]">
          <div
            className="relative w-full h-full transition-transform duration-100 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${5 + rotation.x}deg) rotateY(${-12 + rotation.y}deg)`,
            }}
          >
            {/* Card 1: Code (Back) */}
            <div
              className="absolute top-10 right-10 w-80 h-56 bg-slate-900 rounded-xl border border-slate-700 shadow-2xl p-5"
              style={{ transform: "translateZ(-50px)" }}
            >
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-2 opacity-50">
                <div className="h-2 w-3/4 bg-slate-600 rounded" />
                <div className="h-2 w-1/2 bg-slate-600 rounded" />
                <div className="h-2 w-5/6 bg-slate-600 rounded" />
              </div>
            </div>

            {/* Card 2: Chart (Middle) */}
            <div
              className="absolute top-32 right-32 w-80 h-56 bg-white/90 backdrop-blur-xl rounded-xl border border-white/50 shadow-xl p-5 animate-[float-medium_5s_ease-in-out_infinite_1s]"
              style={{ transform: "translateZ(0px)" }}
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-400">REVENUE</span>
                <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">+24%</span>
              </div>
              <div className="flex items-end justify-between h-32 gap-2">
                {[40, 60, 45, 70, 50, 80, 65].map((h, i) => (
                  <div
                    key={i}
                    style={{ height: `${h}%` }}
                    className="w-full bg-blue-500/20 rounded-t hover:bg-blue-500 transition-colors duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </div>

            {/* Card 3: Chat (Front) */}
            <div
              className="absolute top-64 right-52 w-80 h-auto bg-white rounded-2xl border border-blue-100 shadow-[0_30px_80px_rgba(0,0,0,0.15)] p-5 animate-[float-fast_4s_ease-in-out_infinite_2s]"
              style={{ transform: "translateZ(50px)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs">
                  AI
                </div>
                <div className="text-xs text-slate-400">Autonomex Agent</div>
              </div>
              <div className="bg-slate-50 p-3 rounded-lg rounded-tl-none text-sm text-slate-700 leading-relaxed border border-slate-100">
                I've optimized your landing page. Conversion rate is projected to increase by <strong>3.5x</strong>.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
