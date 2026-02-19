import React from "react";
import AiAgentsDesktop from "./AiAgentsDesktop";
import AiAgentsMobile from "./AiAgentsMobile";

interface AiAgentsVisualProps {
  activePhase?: string;
}

export default function AiAgentsVisual({ activePhase = "phase-1" }: AiAgentsVisualProps) {
  return (
    <div
      className="w-full h-[500px] md:h-full min-h-[500px] relative overflow-hidden rounded-3xl font-sans"
      style={{ background: "radial-gradient(ellipse at 60% 40%, #0d1117 0%, #060810 100%)" }}
    >
      {/* Desktop: 3D isometric visual — hidden on mobile */}
      <AiAgentsDesktop
        activePhase={activePhase}
        className="hidden md:flex"
      />

      {/* Mobile: OLED Dynamic Island visual — hidden on md+ */}
      <AiAgentsMobile
        activePhase={activePhase}
        className="flex md:hidden"
      />
    </div>
  );
}
