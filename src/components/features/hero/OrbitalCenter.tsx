import { Cpu } from "lucide-react";

/**
 * OrbitalCenter - The Processing Core
 * A dark nucleus with a Cpu icon and a dashed SVG spin tracker.
 */
const OrbitalCenter = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none">
      {/* Plasma Field (Outer Glow) */}
      <div className="absolute w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />

      {/* Solid Core */}
      <div className="relative w-28 h-28 bg-[#0B1120] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.15)]">
        <Cpu className="w-8 h-8 text-blue-400" strokeWidth={1.5} />

        {/* Dashed Spin Tracker */}
        <div className="absolute inset-[-12px] animate-[spin_12s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="0.4"
              strokeDasharray="4 6"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OrbitalCenter;
