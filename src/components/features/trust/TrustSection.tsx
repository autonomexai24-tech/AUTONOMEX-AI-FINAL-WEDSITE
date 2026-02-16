import { useEffect, useRef } from "react";

const placeholderLogos = [
  "Acme Corp",
  "Horizon",
  "Vertex",
  "Nimbus",
  "Prism",
  "Helix",
  "Aura",
  "Quantum",
  "Nexus",
  "Stellar",
  "Titan",
  "Vanguard",
];

const TrustSection = () => {
  return (
    <section className="py-20 md:py-32 px-6 md:px-12 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Subtle Heading */}
        <h2 className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-16 animate-in fade-in duration-1000">
          Powering the next generation of industry leaders
        </h2>

        {/* Logo Scroller Container */}
        <div className="relative w-full overflow-hidden">
          {/* Edge Fades (The Premium Touch) */}
          <div className="absolute left-0 top-0 w-20 md:w-40 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 md:w-40 h-full bg-gradient-to-l from-background to-transparent z-10" />

          {/* Infinite Scroll Wrapper */}
          <div className="flex w-fit animate-[spin-slow_40s_linear_infinite] pause-on-hover">
            {/* Render logos twice for seamless looping */}
            {[...placeholderLogos, ...placeholderLogos].map((name, idx) => (
              <div key={idx} className="flex items-center justify-center px-8 md:px-16">
                <span className="font-serif text-xl md:text-3xl font-bold text-slate-900/10 hover:text-blue-600/30 transition-colors duration-500 cursor-default whitespace-nowrap tracking-tighter italic">
                  {name}
                  <span className="text-blue-500/20 not-italic ml-0.5">.</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Metric (The "Royal" Indian Trust Factor) */}
        <div className="mt-20 flex flex-col items-center gap-2">
          <div className="h-px w-12 bg-slate-200" />
          <p className="text-xs font-medium text-slate-400 italic">
            Over <span className="text-slate-900 font-bold not-italic">500+</span> enterprises optimizing operations
            with Autonomex.
          </p>
        </div>
      </div>

      {/* Add this specific animation to your tailwind.config if not already there, 
          or use a standard slide animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustSection;
