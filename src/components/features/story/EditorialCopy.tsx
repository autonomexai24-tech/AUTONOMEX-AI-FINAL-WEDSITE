import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type EditorialCopyProps = {
  eyebrow?: string;
  title: string;
  description: string;
  ctaLabel?: string;
  theme?: "neutral" | "blue" | "pink" | "green";
};

/**
 * EditorialCopy - The "Royal Tech" Edition
 * Improvements:
 * 1. Staggered Entrance Animations (Fast & Fluid)
 * 2. Theme-aware markers for visual cohesion
 * 3. High-end Button interaction with magnetic feel
 */

const EditorialCopy = ({
  eyebrow,
  title,
  description,
  ctaLabel = "Explore Solution",
  theme = "neutral",
}: EditorialCopyProps) => {
  // Theme-specific accent colors mapped to your premium config
  const accentColors = {
    neutral: "bg-slate-400",
    blue: "bg-blue-500",
    pink: "bg-pink-500",
    green: "bg-emerald-500",
  };

  return (
    <div className="relative z-10 flex flex-col justify-center py-8 group/copy select-none">
      {/* 1. Staggered Entrance: Eyebrow with Technical Marker */}
      {eyebrow && (
        <div className="flex items-center gap-3 mb-8 animate-in fade-in slide-in-from-left-4 duration-700">
          <div className={cn("h-px w-6", accentColors[theme])} />
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground/80">
            {eyebrow}
          </span>
        </div>
      )}

      {/* 2. Staggered Entrance: The "Royal" Headline */}
      <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] leading-[1.05] max-w-xl text-slate-900 tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
        {title}
      </h2>

      {/* 3. Staggered Entrance: The Narrative Description */}
      <p className="mt-8 text-base md:text-xl text-slate-600/90 leading-relaxed max-w-md animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
        {description}
      </p>

      {/* 4. Staggered Entrance: The High-End CTA */}
      <div className="mt-12 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
        <Button
          variant="outline"
          size="lg"
          className="
            group h-14 rounded-full px-10 border-slate-200 
            bg-white text-slate-900 font-semibold text-base
            hover:bg-slate-900 hover:text-white hover:border-slate-900
            hover:-translate-y-1 transition-all duration-300
            shadow-sm hover:shadow-xl
          "
        >
          {ctaLabel}
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Unique Visual Anchor: Technical Counter */}
      <div className="mt-20 flex items-end gap-2 opacity-20 group-hover/copy:opacity-40 transition-opacity duration-700">
        <div className="font-mono text-xs font-bold uppercase tracking-widest">
          Infra-0{theme === "neutral" ? "1" : "2"}
        </div>
        <div className="h-px flex-1 bg-border/60 mb-1.5" />
      </div>
    </div>
  );
};

export default EditorialCopy;
