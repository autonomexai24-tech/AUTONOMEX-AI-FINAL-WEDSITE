import { ReactNode } from "react";
import GridBackground from "./GridBackground";
import ShapeLayers from "./ShapeLayers";
import StatBadge from "./StatBadge";
import { cn } from "@/lib/utils";

interface StorySceneProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  stat?: { value: string; label: string };
  background?: "neutral" | "blue" | "pink" | "green";
  rightVisual?: ReactNode;
}

// 10x UNIQUE BACKGROUNDS
const MACRO_GEOMETRY: Record<string, ReactNode> = {
  // UPGRADED AI AGENT (Neutral): Now features an Architectural Cut & Indigo AI Core
  neutral: (
    <>
      <div className="absolute top-0 right-[25%] w-[120px] h-[120%] bg-slate-200/60 -skew-x-[24deg] shadow-[0_0_50px_rgba(0,0,0,0.05)] transform origin-top" />
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-slate-300/40 rounded-full blur-[100px]" />
    </>
  ),
  blue: (
    <>
      <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-gradient-to-bl from-blue-100 to-blue-50/20 -skew-x-12 transform origin-top-right border-l border-blue-200" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full blur-[100px]" />
    </>
  ),
  pink: (
    <>
      <div className="absolute top-0 left-[10%] w-[120%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-pink-200/40 via-transparent to-transparent" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-pink-500/15 rounded-full blur-[120px]" />
      <div
        className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-pink-600/5 mix-blend-multiply"
        style={{ backgroundImage: "radial-gradient(#db2777 2px, transparent 2px)", backgroundSize: "20px 20px" }}
      />
    </>
  ),
  green: (
    <>
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-[10%] w-[80%] h-[50%] bg-gradient-to-t from-emerald-50/80 to-transparent" />
    </>
  ),
};

const BADGE_COLORS: Record<string, string> = {
  neutral: "bg-slate-800 text-white ring-2 ring-slate-900 shadow-md shadow-slate-900/20",
  blue: "bg-blue-600 text-white ring-2 ring-blue-600 shadow-md shadow-blue-600/20",
  pink: "bg-pink-600 text-white ring-2 ring-pink-600 shadow-md shadow-pink-600/20",
  green: "bg-emerald-600 text-white ring-2 ring-emerald-600 shadow-md shadow-emerald-600/20",
};

const StoryScene = ({ eyebrow, title, description, stat, background = "neutral", rightVisual }: StorySceneProps) => {
  return (
    <div className="relative w-full h-full min-h-[550px] md:min-h-[650px] lg:min-h-[720px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group bg-[#FAFAFA] border border-slate-200/60 shadow-inner">
      {/* STAGE 1: Massive Background Geometry */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">{MACRO_GEOMETRY[background]}</div>

      {/* STAGE 2: The Grid & HUD */}
      <div className="absolute inset-0 z-[1] opacity-50 mix-blend-multiply pointer-events-none">
        <GridBackground theme={background} />
        <ShapeLayers theme={background} />
      </div>

      {/* STAGE 3: The 12-Column Layout */}
      <div className="relative z-20 w-full h-full flex flex-col-reverse md:grid md:grid-cols-12 items-center justify-between px-4 sm:px-6 md:px-12 lg:px-16 pt-10 md:pt-0">
        {/* LEFT: Frosted Glass Card */}
        <div className="w-full md:col-span-6 lg:col-span-5 relative z-30 -mt-16 md:mt-0 pb-6 md:pb-0">
          <div
            className="
              w-full rounded-[1.5rem] md:rounded-[2rem] border border-white/80
              bg-white/60 backdrop-blur-3xl backdrop-saturate-[200%] 
              ring-1 ring-black/5 p-6 sm:p-8 md:p-10 lg:p-12
              shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] md:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)]
              transition-transform duration-700 ease-out group-hover:-translate-y-2
            "
          >
            {eyebrow && (
              <div
                className={cn(
                  "inline-flex items-center gap-2.5 px-3.5 py-1.5 md:py-2 rounded-full",
                  "text-[11px] md:text-[13px] font-sans font-black uppercase tracking-[0.15em]",
                  BADGE_COLORS[background],
                )}
              >
                {/* Adding a live indicator dot to draw the eye */}
                <span className="relative flex w-1.5 h-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full w-1.5 h-1.5 bg-white"></span>
                </span>
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-serif font-medium text-3xl md:text-4xl lg:text-[2.75rem] leading-[1.1] tracking-tight text-slate-900 mb-4 md:mb-5">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-[1.6] font-sans font-normal">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* RIGHT: The Person */}
        <div className="relative w-full md:col-span-6 lg:col-span-7 h-[380px] sm:h-[450px] md:h-full z-[15] pointer-events-none flex items-end justify-center md:justify-end">
          {rightVisual}
        </div>
      </div>

      {/* Floating Stat Badge */}
      {stat && (
        <StatBadge
          value={stat.value}
          label={stat.label}
          className="absolute top-6 right-4 md:top-12 md:right-12 lg:top-[15%] lg:right-[10%] z-[40] shadow-2xl transition-transform hover:scale-105 border border-white/60 bg-white/90 backdrop-blur-md"
        />
      )}
    </div>
  );
};

export default StoryScene;
