import { useRef, useState } from "react";
import EcosystemCore from "./EcosystemCore";
import EcosystemNode from "./EcosystemNode";
import EcosystemCanvas from "./EcosystemCanvas";

// The Global State Type for our Ecosystem
export type ActiveNodeType = "ai" | "web" | "app" | "video" | null;

/**
 * EcosystemSection - The "Living Ecosystem" Wrapper
 * 10x ARCHITECTURE:
 * 1. Lifts the 'activeNode' state to the top so the Canvas, Core, and Nodes can all talk to each other.
 * 2. Implements a Zero-Lag 3D Physics engine tracking the mouse via CSS variables.
 */
const EcosystemSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<ActiveNodeType>(null);

  // 10x PHYSICS: GPU-Accelerated Mouse Tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    containerRef.current.style.setProperty("--mouse-x", `${x}`);
    containerRef.current.style.setProperty("--mouse-y", `${y}`);
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty("--mouse-x", "0");
    containerRef.current.style.setProperty("--mouse-y", "0");
    setActiveNode(null); // Reset ecosystem to default neutral state when mouse leaves
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-[800px] lg:min-h-screen bg-[#FAFAFA] overflow-hidden flex items-center justify-center perspective-[1200px] py-20"
      style={
        {
          "--mouse-x": "0",
          "--mouse-y": "0",
        } as React.CSSProperties
      }
    >
      {/* The 3D Stage Wrapper. 
        Everything inside this div will react to the mouse movement.
      */}
      <div
        className="relative w-full max-w-[1200px] h-[700px] lg:h-[800px] transform-style-3d transition-transform duration-200 ease-out"
        style={{
          transform: "rotateY(calc(var(--mouse-x) * 10deg)) rotateX(calc(var(--mouse-y) * -10deg))",
        }}
      >
        {/* STAGE 2 Placeholder: The Background Geometry & Center Portrait */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          {/* @ts-ignore - Prop will be wired up in Stage 2 */}
          <EcosystemCore activeNode={activeNode} />
        </div>

        {/* STAGE 4 Placeholder: The SVG Connection Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* @ts-ignore - Prop will be wired up in Stage 4 */}
          <EcosystemCanvas activeNode={activeNode} />
        </div>

        {/* STAGE 3 Placeholders: The 4 Orbiting Service Nodes */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          {/* Top Left: AI Agents */}
          <div className="absolute top-[15%] left-[5%] md:left-[15%] pointer-events-auto">
            {/* @ts-ignore */}
            <EcosystemNode id="ai" activeNode={activeNode} setActiveNode={setActiveNode} />
          </div>

          {/* Bottom Left: Web Dev */}
          <div className="absolute bottom-[20%] left-[5%] md:left-[10%] pointer-events-auto">
            {/* @ts-ignore */}
            <EcosystemNode id="web" activeNode={activeNode} setActiveNode={setActiveNode} />
          </div>

          {/* Top Right: App Dev */}
          <div className="absolute top-[20%] right-[5%] md:right-[15%] pointer-events-auto">
            {/* @ts-ignore */}
            <EcosystemNode id="app" activeNode={activeNode} setActiveNode={setActiveNode} />
          </div>

          {/* Bottom Right: Video Ads */}
          <div className="absolute bottom-[15%] right-[5%] md:right-[10%] pointer-events-auto">
            {/* @ts-ignore */}
            <EcosystemNode id="video" activeNode={activeNode} setActiveNode={setActiveNode} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
