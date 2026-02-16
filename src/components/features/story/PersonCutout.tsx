import { cn } from "@/lib/utils";

type PersonCutoutProps = {
  src: string;
  alt: string;
  theme?: "neutral" | "blue" | "pink" | "green";
  className?: string;
  isActive?: boolean; // NEW: Passed from the Logic Engine
};

// 10x JASPER AESTHETIC: Massive Solid Geometry Anchors
// Instead of thin lines, we use giant, bold, saturated shapes to anchor the subject.
const JASPER_GEOMETRY: Record<string, React.ReactNode> = {
  neutral: (
    <div className="absolute bottom-[5%] right-[10%] md:right-[5%] w-[65%] aspect-square rounded-full bg-slate-300 opacity-90 mix-blend-multiply z-[1]" />
  ),
  blue: (
    <div className="absolute bottom-[0%] right-[5%] w-[75%] h-[65%] rounded-[4rem] bg-blue-500 opacity-90 mix-blend-multiply z-[1]" />
  ), // Massive Pill Shape
  pink: (
    <div className="absolute bottom-[10%] right-[15%] w-[60%] aspect-square rotate-12 rounded-[3rem] bg-pink-500 opacity-90 mix-blend-multiply z-[1]" />
  ), // Tilted Soft Square
  green: (
    <div className="absolute bottom-[0%] right-[10%] w-[70%] aspect-square rounded-full bg-emerald-500 opacity-90 mix-blend-multiply z-[1]" />
  ), // Giant Circle
};

const PersonCutout = ({ src, alt, theme = "neutral", isActive = false, className = "" }: PersonCutoutProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-full flex items-end justify-center md:justify-end md:pr-12",
        "transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom",
        // GPU Hardware Acceleration: Smooth slide and scale based on active state
        isActive ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95",
        className,
      )}
    >
      {/* Jasper Massive Geometric Anchor */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-1000 delay-200 ease-out",
          isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-10",
        )}
      >
        {JASPER_GEOMETRY[theme]}
      </div>

      {/* Premium Gradient Shadow Floor (Grounds the image) */}
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/5 to-transparent z-[2]" />

      {/* The Subject Image */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="
          relative z-[3]
          w-full h-full md:h-[95%] 
          object-contain object-bottom select-none
          drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]
        "
      />
    </div>
  );
};

export default PersonCutout;
