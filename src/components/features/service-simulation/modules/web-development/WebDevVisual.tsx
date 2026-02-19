import React from "react";
import WebDevDesktop from "./WebDevDesktop";
import WebDevMobile from "./WebDevMobile";

interface WebDevVisualProps {
  activePhase?: string;
}

export default function WebDevVisual({ activePhase = "phase-1" }: WebDevVisualProps) {
  return (
    <div
      className="w-full h-[500px] md:h-full min-h-[500px] relative overflow-hidden rounded-3xl font-sans"
      style={{ background: "radial-gradient(ellipse at 60% 40%, #0d1117 0%, #060810 100%)" }}
    >
      {/* Desktop — shown md+ */}
      <WebDevDesktop
        activePhase={activePhase}
        className="hidden md:flex"
      />

      {/* Mobile — shown below md */}
      <WebDevMobile
        activePhase={activePhase}
        className="flex md:hidden"
      />
    </div>
  );
}
