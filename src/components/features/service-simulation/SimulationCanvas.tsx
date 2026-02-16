import React, { Suspense, lazy, useEffect, useState, memo } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";

// Lazy-loaded 10x visual modules
const AiAgentsVisual = lazy(() => import("./modules/ai-agents/AiAgentsVisual"));
const WebDevVisual = lazy(() => import("./modules/web-development/WebDevVisual"));
const AppDevVisual = lazy(() => import("./modules/app-development/AppDevVisual"));
const VideoAdsVisual = lazy(() => import("./modules/video-ads/VideoAdsVisual"));

interface SimulationCanvasProps {
  serviceId?: string;
}

const ModuleLoader = memo(() => (
  <div className="flex flex-col items-center justify-center gap-4">
    <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
    <p className="text-slate-400 font-mono text-xs tracking-[0.2em] uppercase">Booting_Neural_Engine...</p>
  </div>
));
ModuleLoader.displayName = "ModuleLoader";

const normalizeServiceId = (id?: string): string => {
  if (!id) return "unknown";
  const map: Record<string, string> = {
    "ai-agents": "ai-agents",
    "ai-agent": "ai-agents",
    "smart-assistants": "ai-agents",
    "web-development": "web-development",
    "web-develop": "web-development",
    website: "web-development",
    "app-development": "app-development",
    "mobile-app": "app-development",
    mobile: "app-development",
    "ai-video": "ai-video",
    "video-ads": "ai-video",
    marketing: "ai-video",
  };
  return map[id.toLowerCase()] || id;
};

export default function SimulationCanvas({ serviceId }: SimulationCanvasProps) {
  const [activePhase, setActivePhase] = useState("phase-1");
  const prefersReducedMotion = useReducedMotion();
  const normalizedId = normalizeServiceId(serviceId);

  // Force reset the phase to "phase-1" whenever the user visits a new service page
  useEffect(() => {
    setActivePhase("phase-1");
  }, [serviceId]);

  // Bulletproof Event Listener for Scroll Synchronization
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.phase) {
        setActivePhase(detail.phase);
      } else if (typeof detail === "string") {
        setActivePhase(detail);
      }
    };

    window.addEventListener("phaseChange", handler);
    return () => window.removeEventListener("phaseChange", handler);
  }, []);

  // Router for the specific 3D Module
  const renderVisual = () => {
    switch (normalizedId) {
      case "ai-agents":
        return <AiAgentsVisual activePhase={activePhase} />;
      case "web-development":
        return <WebDevVisual activePhase={activePhase} />;
      case "app-development":
        return <AppDevVisual activePhase={activePhase} />;
      case "ai-video":
        return <VideoAdsVisual activePhase={activePhase} />;
      default:
        return (
          <div className="text-center text-slate-400 text-sm font-mono border border-slate-200 p-8 rounded-xl bg-white shadow-sm">
            Unknown subsystem: <code className="text-blue-500 ml-2">{serviceId}</code>
          </div>
        );
    }
  };

  return (
    <div
      // FIX: Changed to bg-transparent so it blends with your clean, premium website theme
      className="relative w-full h-full flex items-center justify-center overflow-hidden bg-transparent"
      role="region"
      aria-label="Interactive service simulation"
    >
      <div className="relative z-10 w-full max-w-5xl h-full flex items-center justify-center p-6 md:p-12">
        <AnimatePresence mode="wait">
          <motion.div
            // CRITICAL FIX: Only remount if the ENTIRE SERVICE changes, not when the phase changes.
            key={normalizedId}
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full flex items-center justify-center"
          >
            <Suspense fallback={<ModuleLoader />}>{renderVisual()}</Suspense>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
