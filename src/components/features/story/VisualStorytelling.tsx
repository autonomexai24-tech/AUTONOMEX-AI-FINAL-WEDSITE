import { useState, useEffect, useRef, useCallback } from "react";
import StoryScene from "./StoryScene";
import PersonCutout from "./PersonCutout";
import { cn } from "@/lib/utils";

import editorialAi from "@/assets/editorial-ai.pngn";
import editorialApp from "@/assets/editorial-app.pngn";
import editorialWeb from "@/assets/editorial-web.pngn";
import editorialUgc from "@/assets/editorial-ugc.pngn";

const SCENES = [
  {
    eyebrow: "AI SMART ASSISTANTS",
    title: "Virtual staff that work for you 24/7.",
    description:
      "We build intelligent computer programs that instantly answer customer messages, take orders, and handle daily tasks automatically. Perfect for busy shops and factory floors.",
    stat: { value: "40%", label: "time recovered" },
    background: "neutral" as const,
    image: editorialAi,
    imageAlt: "AI automation specialist",
  },
  {
    eyebrow: "CUSTOM MOBILE APPS",
    title: "Your own business app, made simple.",
    description:
      "Get custom mobile software to easily track your manufacturing inventory, manage your staff, or let customers buy directly from their phones.",
    stat: { value: "3×", label: "faster delivery" },
    background: "blue" as const,
    image: editorialApp,
    imageAlt: "App development engineer",
  },
  {
    eyebrow: "BUSINESS WEBSITES",
    title: "Your digital storefront on the internet.",
    description: "We build fast, professional websites designed to appear at the top of search results, building absolute trust and bringing new clients right to your door.",
    stat: { value: "+67%", label: "organic traffic" },
    background: "pink" as const,
    image: editorialWeb,
    imageAlt: "Website strategist",
  },
  {
    eyebrow: "VIDEO ADS & MARKETING",
    title: "Promotions that actually sell your products.",
    description: "We use advanced technology to create catchy, high-quality video commercials for social media that grab attention and drive massive sales to your business.",
    stat: { value: "+35%", label: "pipeline growth" },
    background: "green" as const,
    image: editorialUgc,
    imageAlt: "UGC ads specialist",
  },
];

export default function VisualStorytelling() {
  const [activeScene, setActiveScene] = useState(0);
  const isPausedRef = useRef(false);

  const advance = useCallback(() => {
    if (!isPausedRef.current) {
      setActiveScene((prev) => (prev + 1) % SCENES.length);
    }
  }, []);

  // Bulletproof setInterval — no dependency on activeScene, no re-render loops
  useEffect(() => {
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [advance]);

  return (
    <section
      className="relative bg-background pt-12 pb-12 md:pt-20 md:pb-20 overflow-hidden group"
      onMouseEnter={() => { isPausedRef.current = true; }}
      onMouseLeave={() => { isPausedRef.current = false; }}
    >
      <div className="relative z-10 grid w-full max-w-[1400px] mx-auto px-4 md:px-6">
        {SCENES.map((scene, index) => {
          const isActive = index === activeScene;
          const isPrev = index === (activeScene - 1 + SCENES.length) % SCENES.length;

          // Continuous Sweep Math
          let positionClass: string;
          if (isActive) {
            positionClass = "opacity-100 translate-x-0 scale-100 z-20 pointer-events-auto";
          } else if (isPrev) {
            positionClass = "opacity-0 -translate-x-20 scale-95 z-10 pointer-events-none";
          } else {
            positionClass = "opacity-0 translate-x-20 scale-95 z-10 pointer-events-none";
          }

          return (
            <div
              key={index}
              className={cn(
                "col-start-1 row-start-1 w-full transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)]",
                positionClass,
              )}
            >
              <StoryScene
                eyebrow={scene.eyebrow}
                title={scene.title}
                description={scene.description}
                stat={scene.stat}
                background={scene.background}
                rightVisual={
                  <PersonCutout src={scene.image} alt={scene.imageAlt} theme={scene.background} isActive={isActive} />
                }
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
