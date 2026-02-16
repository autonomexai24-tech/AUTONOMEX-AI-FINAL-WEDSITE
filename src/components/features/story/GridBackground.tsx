import { cn } from "@/lib/utils";

interface GridBackgroundProps {
  theme?: "neutral" | "blue" | "pink" | "green";
}

/**
 * GridBackground - The "Autonomex Canvas" Edition
 * * DESIGN ANALYSIS:
 * - We moved the massive solid geometry to the PersonCutout (Foreground).
 * - This background now acts as the "Quiet Stage" (Background).
 * - Features: Premium Film Grain, Static Dot Matrix, and a Subconscious 120s Drifting Lattice.
 * - Performance: 100% CSS/SVG. Zero JS overhead.
 */

const GridBackground = ({ theme = "neutral" }: GridBackgroundProps) => {
  const themeColors = {
    neutral: "#64748b", // Slate-500
    blue: "#3b82f6", // Blue-500
    pink: "#ec4899", // Pink-500
    green: "#10b981", // Emerald-500
  };

  const activeColor = themeColors[theme];

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden rounded-[inherit]">
      {/* PERFORMANCE: Pure CSS Hardware-Accelerated Animation */}
      <style>{`
        @keyframes drift {
          from { transform: translate(0, 0); }
          to { transform: translate(40px, 40px); }
        }
      `}</style>

      {/* 1. THE CANVAS: Premium Film Grain (Paper Feel) 
          Uses a lightweight SVG data URI to prevent loading layout shifts.
      */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* 2. THE ANCHOR: Static Precision Dot Grid 
          Very faint dots that give the screen a mathematical, engineered feel.
      */}
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: `radial-gradient(${activeColor} 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* 3. THE DRIFT: Subconscious Moving Lattice 
          Moves incredibly slowly (120s) so it feels premium, not distracting.
      */}
      <div className="absolute inset-0 z-10" style={{ animation: "drift 120s linear infinite" }}>
        <svg
          className="absolute inset-0 w-full h-[150%] opacity-[0.05]"
          style={{ maskImage: "radial-gradient(circle at 50% 50%, black 30%, transparent 80%)" }}
        >
          <defs>
            <pattern id={`grid-pattern-${theme}`} width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke={activeColor} strokeWidth="1" strokeLinecap="square" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-pattern-${theme})`} />
        </svg>
      </div>

      {/* 4. THE FRAME: Autonomex Technical Corner Markers 
          Adds the 20% "Proud Engineer" uniqueness to the edges of the card.
      */}
      <div className="absolute inset-0 z-20 opacity-40">
        <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-slate-400/50 rounded-tl-sm" />
        <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-slate-400/50 rounded-br-sm" />
        <div className="absolute top-8 right-8 text-[9px] font-mono text-slate-400/50 uppercase tracking-widest hidden md:block">
          SYS.RDY
        </div>
      </div>
    </div>
  );
};

export default GridBackground;
