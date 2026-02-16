import { cn } from "@/lib/utils";
import { ActiveNodeType } from "./EcosystemSection";

interface EcosystemCanvasProps {
  activeNode: ActiveNodeType;
}

/**
 * EcosystemCanvas - The "Neural Tethers"
 * Replaces straight lines with organic, curved SVG Bezier paths.
 * Uses viewBox="0 0 1000 1000" to perfectly map 1:1 with HTML percentages.
 */
const EcosystemCanvas = ({ activeNode }: EcosystemCanvasProps) => {
  // 10x PHYSICS: Dynamic Path Styling
  const getPathStyle = (id: ActiveNodeType, activeColor: string) => {
    const isActive = activeNode === id;
    const isDimmed = activeNode !== null && activeNode !== id;

    return cn(
      "transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] fill-none",
      isActive
        ? `stroke-[4px] ${activeColor} drop-shadow-[0_0_12px_currentColor] opacity-100`
        : isDimmed
          ? "stroke-[2px] stroke-slate-200 opacity-30 grayscale"
          : "stroke-[2px] stroke-slate-300 opacity-70",
    );
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      // Physics: Pushes the tethers safely behind the Founder but in front of the Ziggurat
      style={{ transform: "translateZ(10px)" }}
    >
      {/* 10x INNOVATION: Flowing Neural Data Packets */}
      <style>{`
        @keyframes neural-pulse {
          from { stroke-dashoffset: 100; }
          to { stroke-dashoffset: 0; }
        }
        .anim-neural {
          stroke-dasharray: 6 24; /* 6px data packet, 24px gap */
          animation: neural-pulse 1s linear infinite;
          fill: none;
        }
      `}</style>

      {/* viewBox="0 0 1000 1000" with preserveAspectRatio="none" 
        allows us to use 0-1000 as 0%-100% to perfectly hit the HTML nodes.
      */}
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="w-full h-full overflow-visible">
        {/* =========================================
            TETHER 1: AI Agents (Top Left -> Center)
            Starts at 15% 15% (150, 150) -> Ends at 50% 50% (500, 500)
            ========================================= */}
        <path d="M 150 150 C 350 150, 300 500, 500 500" className={getPathStyle("ai", "stroke-blue-500")} />
        <g className={cn("transition-opacity duration-500", activeNode === "ai" ? "opacity-100" : "opacity-0")}>
          <path
            d="M 150 150 C 350 150, 300 500, 500 500"
            className="stroke-white stroke-[4px] anim-neural drop-shadow-[0_0_8px_white]"
          />
        </g>

        {/* =========================================
            TETHER 2: App Dev (Top Right -> Center)
            Starts at 85% 20% (850, 200) -> Ends at 50% 50% (500, 500)
            ========================================= */}
        <path d="M 850 200 C 650 200, 700 500, 500 500" className={getPathStyle("app", "stroke-emerald-500")} />
        <g className={cn("transition-opacity duration-500", activeNode === "app" ? "opacity-100" : "opacity-0")}>
          <path
            d="M 850 200 C 650 200, 700 500, 500 500"
            className="stroke-white stroke-[4px] anim-neural drop-shadow-[0_0_8px_white]"
          />
        </g>

        {/* =========================================
            TETHER 3: Web Dev (Bottom Left -> Center)
            Starts at 10% 80% (100, 800) -> Ends at 50% 50% (500, 500)
            ========================================= */}
        <path d="M 100 800 C 300 800, 350 500, 500 500" className={getPathStyle("web", "stroke-pink-500")} />
        <g className={cn("transition-opacity duration-500", activeNode === "web" ? "opacity-100" : "opacity-0")}>
          <path
            d="M 100 800 C 300 800, 350 500, 500 500"
            className="stroke-white stroke-[4px] anim-neural drop-shadow-[0_0_8px_white]"
          />
        </g>

        {/* =========================================
            TETHER 4: Video Ads (Bottom Right -> Center)
            Starts at 90% 85% (900, 850) -> Ends at 50% 50% (500, 500)
            ========================================= */}
        <path d="M 900 850 C 700 850, 650 500, 500 500" className={getPathStyle("video", "stroke-amber-500")} />
        <g className={cn("transition-opacity duration-500", activeNode === "video" ? "opacity-100" : "opacity-0")}>
          <path
            d="M 900 850 C 700 850, 650 500, 500 500"
            className="stroke-white stroke-[4px] anim-neural drop-shadow-[0_0_8px_white]"
          />
        </g>

        {/* =========================================
            THE NEURAL ANCHOR (Behind the Founder)
            ========================================= */}
        <circle
          cx="500"
          cy="500"
          r="40"
          className={cn(
            "transition-colors duration-700 ease-out shadow-lg",
            activeNode === "ai"
              ? "fill-blue-500"
              : activeNode === "app"
                ? "fill-emerald-500"
                : activeNode === "web"
                  ? "fill-pink-500"
                  : activeNode === "video"
                    ? "fill-amber-500"
                    : "fill-slate-300",
          )}
        />
        <circle cx="500" cy="500" r="20" fill="#ffffff" />
      </svg>
    </div>
  );
};

export default EcosystemCanvas;
