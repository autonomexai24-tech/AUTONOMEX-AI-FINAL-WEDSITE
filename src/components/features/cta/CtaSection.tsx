import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

/**
 * CtaSection - The "Digital Transformation Vault"
 * 90% Jasper Layout (Stepped Graph Paper, High-Contrast Serif)
 * 10% Autonomex Innovation (Frosted Glass, Live Data Streams, 3D Parallax)
 * Copy updated to reflect the shift from manual books to full digitalization.
 */
const CtaSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 10x UNIQUE: Zero-Lag 3D Physics Engine
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    containerRef.current.style.setProperty("--mouse-x", `${x}`);
    containerRef.current.style.setProperty("--mouse-y", `${y}`);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty("--mouse-x", "0");
    containerRef.current.style.setProperty("--mouse-y", "0");
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="py-24 md:py-32 px-4 md:px-6 bg-[#FAFAFA] relative overflow-hidden perspective-[1200px]"
      style={
        {
          "--mouse-x": "0",
          "--mouse-y": "0",
        } as React.CSSProperties
      }
    >
      {/* 10x PERFORMANCE: Pure CSS Data Streams */}
      <style>{`
        @keyframes scan-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes scan-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .data-stream-x { animation: scan-horizontal 6s linear infinite; }
        .data-stream-y { animation: scan-vertical 8s linear infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">
        {/* =========================================
            LAYER 1: The Stepped Graph Paper (Background)
            ========================================= */}
        <div
          className="absolute w-[120%] h-[120%] md:w-full md:h-full transition-transform duration-300 ease-out z-0"
          style={{
            // Moves oppositely to the mouse for deep parallax
            transform:
              "translateZ(-50px) translateX(calc(var(--mouse-x) * -30px)) translateY(calc(var(--mouse-y) * -30px))",
          }}
        >
          {/* The Mathematical Ziggurat Shape */}
          <div
            className="w-full h-full bg-blue-50/50 border border-blue-200/50 shadow-inner relative overflow-hidden"
            style={{
              clipPath:
                "polygon(20% 0%, 80% 0%, 80% 20%, 100% 20%, 100% 80%, 80% 80%, 80% 100%, 20% 100%, 20% 80%, 0% 80%, 0% 20%, 20% 20%)",
            }}
          >
            {/* The Engineering Grid */}
            <div
              className="absolute inset-0 opacity-[0.4]"
              style={{
                backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                backgroundSize: "32px 32px",
              }}
            />

            {/* Autonomex Innovation: Live Server Data Streams */}
            <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-color-burn">
              <div className="absolute top-0 bottom-0 left-0 w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent data-stream-x" />
              <div className="absolute left-0 right-0 top-0 h-full bg-gradient-to-b from-transparent via-blue-400 to-transparent data-stream-y" />
            </div>
          </div>
        </div>

        {/* =========================================
            LAYER 2: The Frosted Editorial Vault (Foreground)
            ========================================= */}
        <div
          className="relative z-10 w-full max-w-[90%] md:max-w-3xl transition-transform duration-200 ease-out"
          style={{
            // Floats towards the user
            transform:
              "translateZ(30px) translateX(calc(var(--mouse-x) * 20px)) translateY(calc(var(--mouse-y) * 20px))",
          }}
        >
          <div className="bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] rounded-none md:rounded-3xl p-8 md:p-16 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-8 mx-auto">
              <Zap className="w-4 h-4 text-blue-600" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-700">
                The Digital Transition
              </span>
            </div>

            {/* Massive Editorial Headline */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.05] mb-6 font-medium">
              Leave the manual work behind. <br className="hidden md:block" />
              <span className="italic text-slate-600">Step into the digital future.</span>
            </h2>

            {/* Powerful Transformation Copy encompassing all 4 services */}
            <p className="text-[15px] md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-sans">
              The world is moving fast. We help businesses transition from outdated paper books to powerful digital
              systems. From smart AI assistants and custom mobile apps, to premium websites and high-converting video
              ads—we build exactly what you need to automate and scale.
            </p>

            {/* CTA Button */}
            <Link to="/book-strategy">
              <Button
                size="lg"
                className="
                  group
                  rounded-full bg-[#0B1120] text-white
                  px-8 py-6 text-[15px] font-bold tracking-wide
                  hover:bg-blue-600 hover:scale-[1.02] transition-all duration-300
                  shadow-xl shadow-slate-900/20
                "
              >
                Fill the Details
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            {/* Micro-copy */}
            <p className="mt-6 text-xs text-slate-400 font-mono uppercase tracking-widest">
              No commitment required • Free digital audit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
