import { cn } from "@/lib/utils";

interface ShapeLayersProps {
  theme?: "neutral" | "blue" | "pink" | "green";
}

/**
 * ShapeLayers - The "Engineering HUD" Edition
 * * DESIGN ANALYSIS:
 * - This layer sits between the deep background and the main content.
 * - 50% Jasper: Kept ultra-minimal so it doesn't fight the solid geometry.
 * - 30% Autonomex: Adds technical, "Proud Engineer" vector accents.
 * - 20% Uniqueness: Theme-specific SVG overlays (HUDs) that run flawlessly on GPU.
 */

const ShapeLayers = ({ theme = "neutral" }: ShapeLayersProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* GLOBAL 1: Precision Vector Crosshairs (Replacing the text '+') */}
      <div className="absolute top-10 left-10 opacity-20 animate-in fade-in zoom-in duration-1000 delay-300">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-500">
          <path d="M12 2v20M2 12h20" strokeWidth="0.5" />
          <circle cx="12" cy="12" r="4" strokeWidth="0.5" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 animate-in fade-in zoom-in duration-1000 delay-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-slate-500">
          <path d="M12 2v20M2 12h20" strokeWidth="0.5" />
        </svg>
      </div>

      {/* THEME: NEUTRAL (AI Agents) -> "The Neural Core" */}
      {theme === "neutral" && (
        <div className="contents">
          {/* Faint, slowly rotating SVG rings representing 24/7 processing */}
          <div className="absolute top-[20%] right-[30%] w-[400px] h-[400px] opacity-[0.03] animate-[spin_60s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" stroke="#64748b" strokeWidth="0.2">
              <circle cx="50" cy="50" r="48" strokeDasharray="4 4" />
              <circle cx="50" cy="50" r="35" strokeDasharray="1 8" strokeWidth="0.5" />
            </svg>
          </div>
          {/* Technical readout */}
          <div className="absolute top-[35%] left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400/10 to-transparent" />
          <span className="absolute top-[35%] left-[15%] -mt-4 text-[8px] font-mono text-slate-400/40 uppercase">
            // SYS.AUTO_AGENT : ACTIVE
          </span>
        </div>
      )}

      {/* THEME: BLUE (App Dev) -> "The Compiler Streams" */}
      {theme === "blue" && (
        <div className="contents">
          {/* Vertical data streams representing server/backend architecture */}
          <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />
          <div className="absolute top-0 left-[18%] w-px h-full bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

          <div className="absolute bottom-[20%] left-[10%] opacity-[0.04]">
            <svg width="200" height="200" viewBox="0 0 100 100" fill="none" stroke="#2563eb" strokeWidth="0.5">
              <path d="M0 100 L50 50 L100 100" />
              <path d="M0 90 L50 40 L100 90" />
              <path d="M0 80 L50 30 L100 80" />
            </svg>
          </div>
        </div>
      )}

      {/* THEME: PINK (Web Dev) -> "The Golden Ratio / Layout" */}
      {theme === "pink" && (
        <div className="contents">
          {/* UI/UX layout framing brackets */}
          <div className="absolute top-[15%] left-[40%] w-[300px] h-[300px] opacity-[0.05]">
            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="#db2777" strokeWidth="0.5">
              {/* Top Left Bracket */}
              <path d="M10 20 V10 H20" />
              {/* Bottom Right Bracket */}
              <path d="M90 80 V90 H80" />
            </svg>
          </div>
          <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/10 to-transparent" />
        </div>
      )}

      {/* THEME: GREEN (AI Video & UGC) -> "The Render Timeline" */}
      {theme === "green" && (
        <div className="contents">
          {/* Media timeline tick marks */}
          <div className="absolute bottom-[15%] left-[10%] w-[300px] h-4 opacity-[0.1]">
            <svg width="100%" height="100%" viewBox="0 0 100 10" fill="none" stroke="#059669" strokeWidth="0.5">
              <line x1="0" y1="5" x2="100" y2="5" />
              <line x1="10" y1="0" x2="10" y2="10" />
              <line x1="30" y1="2" x2="30" y2="8" />
              <line x1="50" y1="0" x2="50" y2="10" strokeWidth="1" />
              <line x1="70" y1="2" x2="70" y2="8" />
              <line x1="90" y1="0" x2="90" y2="10" />
            </svg>
          </div>

          {/* Pulsing render node */}
          <div className="absolute top-[25%] left-[20%] flex items-center gap-2 opacity-30">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[8px] font-mono text-emerald-600/50 uppercase tracking-widest">Render.Seq</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShapeLayers;
