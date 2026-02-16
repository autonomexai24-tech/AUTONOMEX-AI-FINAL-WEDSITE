import { cn } from "@/lib/utils";
import { ActiveNodeType } from "./EcosystemSection";
import founderCutout from "@/assets/founder-cutout.png"; // Your premium asset import

interface EcosystemCoreProps {
  activeNode: ActiveNodeType;
}

// 10x ARCHITECTURE: Dynamic Solid Theme Mapping
const CORE_THEMES = {
  null: {
    base: "bg-slate-200",
    grid: "#94a3b8", // slate-400
  },
  ai: {
    base: "bg-blue-400",
    grid: "#2563eb", // blue-600
  },
  web: {
    base: "bg-pink-400",
    grid: "#db2777", // pink-600
  },
  app: {
    base: "bg-emerald-400",
    grid: "#059669", // emerald-600
  },
  video: {
    base: "bg-amber-400",
    grid: "#d97706", // amber-600
  },
};

const EcosystemCore = ({ activeNode }: EcosystemCoreProps) => {
  // Fallback to 'null' (neutral) if no node is active
  const theme = CORE_THEMES[activeNode || "null"];

  return (
    <div
      className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] flex items-end justify-center transition-transform duration-700 ease-out"
      // Physics: Pushes the entire core slightly back to create 3D space for the floating nodes
      style={{ transform: "translateZ(-20px)" }}
    >
      {/* 1. THE JASPER ZIGGURAT GEOMETRY */}
      <div
        className={cn(
          "absolute inset-0 transition-colors duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] shadow-2xl",
          theme.base,
        )}
        style={{
          clipPath:
            "polygon(25% 0%, 75% 0%, 75% 25%, 100% 25%, 100% 75%, 75% 75%, 75% 100%, 25% 100%, 25% 75%, 0% 75%, 0% 25%, 25% 25%)",
        }}
      >
        {/* The Engineering Graph Paper Grid Overlay */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-color-burn"
          style={{
            backgroundImage: `linear-gradient(to right, ${theme.grid} 1.5px, transparent 1.5px), linear-gradient(to bottom, ${theme.grid} 1.5px, transparent 1.5px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* 2. THE PROTAGONIST */}
      <div
        className="relative z-10 w-full h-[115%] flex items-end justify-center pointer-events-none transform translate-y-2 transition-transform duration-700"
        style={{ transform: "translateZ(40px)" }}
      >
        {/* Using the dynamically imported asset */}
        <img
          src={founderCutout}
          alt="Autonomex Architect"
          className="h-full w-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
        />
      </div>
    </div>
  );
};

export default EcosystemCore;
