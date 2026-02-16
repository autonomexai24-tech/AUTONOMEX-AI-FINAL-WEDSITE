/**
 * OrbitalRings - The "Engineering Grid"
 * Precision SVG geometry, tick-marks, and data nodes.
 */
const OrbitalRings = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none">
      {/* 1. THE INNER TRACK */}
      <div className="absolute w-[450px] h-[450px] animate-[spin_20s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
          <circle cx="50" cy="50" r="49" fill="none" stroke="#60a5fa" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="49" fill="none" stroke="#3b82f6" strokeWidth="0.25" strokeDasharray="2 4" />
        </svg>
      </div>

      {/* 2. THE MIDDLE ORBIT */}
      <div className="absolute w-[600px] h-[600px] animate-[spin_40s_linear_infinite_reverse]">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-40">
          <circle cx="50" cy="50" r="49.5" fill="none" stroke="#64748b" strokeWidth="0.1" />
          <circle cx="50" cy="50" r="49.5" fill="none" stroke="#3b82f6" strokeWidth="0.3" strokeDasharray="10 40" />
          <circle cx="50" cy="0.5" r="1.2" fill="#60a5fa" className="drop-shadow-[0_0_8px_rgba(96,165,250,1)]" />
        </svg>
      </div>

      {/* 3. THE OUTER PERIMETER */}
      <div className="absolute w-[800px] h-[800px] animate-[spin_60s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
          <circle cx="50" cy="50" r="49.5" fill="none" stroke="#94a3b8" strokeWidth="0.05" />
          <circle cx="50" cy="50" r="49.5" fill="none" stroke="#64748b" strokeWidth="0.5" strokeDasharray="0.1 3" />
          <circle cx="50" cy="0.5" r="0.8" fill="#3b82f6" />
          <circle cx="50" cy="99.5" r="0.8" fill="#3b82f6" />
          <circle cx="0.5" cy="50" r="0.8" fill="#3b82f6" />
          <circle cx="99.5" cy="50" r="0.8" fill="#3b82f6" />
        </svg>
      </div>

      {/* 4. THE STATIC COMPASS */}
      <div className="absolute w-[850px] h-[850px] opacity-[0.04]">
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-slate-800 -translate-x-1/2" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-slate-800 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-8 h-8 border border-slate-800 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
};

export default OrbitalRings;
