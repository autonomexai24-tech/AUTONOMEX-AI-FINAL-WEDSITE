import { Cpu, Globe, Smartphone, Video } from "lucide-react";
import { ActiveNodeType } from "./EcosystemSection";
import { cn } from "@/lib/utils";

interface EcosystemNodeProps {
  id: NonNullable<ActiveNodeType>;
  activeNode: ActiveNodeType;
  setActiveNode: (id: ActiveNodeType) => void;
}

// 10x ARCHITECTURE: The Smart Dictionary
// We added 'tag' and 'tagColor' to simulate a live, breathing software dashboard.
const NODE_DATA = {
  ai: {
    title: "AI Assistants",
    desc: "Automate 24/7 support & operations.",
    tag: "AUTONOMOUS",
    icon: Cpu,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-500/30",
    activeBorder: "border-blue-500",
    shadow: "shadow-blue-500/20",
    tagColor: "text-blue-600 bg-blue-100/50",
  },
  web: {
    title: "Web Platforms",
    desc: "High-ranking digital storefronts.",
    tag: "OPTIMIZED",
    icon: Globe,
    color: "text-pink-600",
    bg: "bg-pink-50",
    border: "border-pink-500/30",
    activeBorder: "border-pink-500",
    shadow: "shadow-pink-500/20",
    tagColor: "text-pink-600 bg-pink-100/50",
  },
  app: {
    title: "Mobile Apps",
    desc: "Custom software for your business.",
    tag: "SCALABLE",
    icon: Smartphone,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-500/30",
    activeBorder: "border-emerald-500",
    shadow: "shadow-emerald-500/20",
    tagColor: "text-emerald-600 bg-emerald-100/50",
  },
  video: {
    title: "Video Ads",
    desc: "AI commercials that drive sales.",
    tag: "CONVERTING",
    icon: Video,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-500/30",
    activeBorder: "border-amber-500",
    shadow: "shadow-amber-500/20",
    tagColor: "text-amber-600 bg-amber-100/50",
  },
};

const EcosystemNode = ({ id, activeNode, setActiveNode }: EcosystemNodeProps) => {
  const data = NODE_DATA[id];
  const isActive = activeNode === id;
  const isDimmed = activeNode !== null && activeNode !== id;

  return (
    <div
      onMouseEnter={() => setActiveNode(id)}
      onMouseLeave={() => setActiveNode(null)}
      // 10x PHYSICS: Floats over the tethers and the core.
      style={{ transform: "translateZ(100px)" }}
      className={cn(
        "relative group cursor-pointer transition-all duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)]",
        // Dimming effect pushes inactive cards into the background
        isDimmed ? "opacity-30 scale-95 grayscale-[60%] blur-[1px]" : "opacity-100 scale-100 blur-0",
        isActive ? "z-50 -translate-y-2" : "z-10 translate-y-0",
      )}
    >
      {/* The Floating Glass Widget 
        Mobile Optimization: Stays compact (w-[160px]) on small screens, expands to full Jasper size (w-[240px]) on desktop.
      */}
      <div
        className={cn(
          "w-[170px] md:w-[240px] p-3 md:p-5 rounded-2xl md:rounded-3xl backdrop-blur-2xl transition-all duration-500",
          "bg-white/70 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)]",
          "border",
          isActive ? `bg-white/95 shadow-2xl ${data.activeBorder} ${data.shadow}` : `border-white/80`,
        )}
      >
        {/* Header: Icon & Micro-Tag */}
        <div className="flex items-start justify-between mb-3 md:mb-4">
          <div
            className={cn(
              "w-8 h-8 md:w-10 md:h-10 rounded-xl flex items-center justify-center transition-transform duration-500",
              data.bg,
              isActive ? "scale-110" : "scale-100",
            )}
          >
            <data.icon className={cn("w-4 h-4 md:w-5 md:h-5", data.color)} strokeWidth={2.5} />
          </div>

          {/* Live Status Tag (Jasper Style) */}
          <div
            className={cn(
              "px-2 py-1 rounded-md text-[9px] md:text-[10px] font-black uppercase tracking-wider flex items-center gap-1.5",
              data.tagColor,
            )}
          >
            {/* Pulsing dot for the active state */}
            {isActive && (
              <span className="relative flex w-1.5 h-1.5">
                <span
                  className={cn("animate-ping absolute inline-flex h-full w-full rounded-full opacity-75", data.bg)}
                ></span>
                <span className={cn("relative inline-flex rounded-full w-1.5 h-1.5", data.bg)}></span>
              </span>
            )}
            {data.tag}
          </div>
        </div>

        {/* Typography */}
        <div className="flex flex-col">
          <span className="font-serif text-[16px] md:text-[20px] font-medium text-slate-900 leading-tight mb-1 md:mb-1.5">
            {data.title}
          </span>
          {/* Hidden on very small mobile to prevent clutter, visible on MD and up */}
          <span className="hidden md:block font-sans text-[13px] text-slate-500 leading-relaxed">{data.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default EcosystemNode;
