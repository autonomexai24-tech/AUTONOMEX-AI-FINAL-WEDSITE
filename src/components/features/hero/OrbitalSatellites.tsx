import { Activity, Zap, Clock } from "lucide-react";

/**
 * OrbitalSatellites - The "Data HUD"
 * Three floating telemetry nodes with engineering brackets.
 */
const OrbitalSatellites = () => {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none select-none">
      {/* HUD Node 1: Revenue Telemetry (Top Right) */}
      <div className="absolute top-[15%] right-[10%] md:right-[15%] animate-[float-slow_6s_ease-in-out_infinite]">
        <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200/50 shadow-[0_15px_40px_rgba(15,23,42,0.08)] rounded-xl p-3 pr-6 flex items-center gap-4">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-blue-500/60 rounded-tl-xl" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-blue-500/60 rounded-br-xl" />
          <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-blue-600 shadow-inner">
            <Activity strokeWidth={2.5} className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[9px] uppercase font-mono font-bold text-slate-400 tracking-widest mb-0.5">Sys.Revenue</div>
            <div className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
              +124% <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(34,197,94,0.6)]" />
            </div>
          </div>
        </div>
      </div>

      {/* HUD Node 2: System Status (Left) */}
      <div className="absolute top-[45%] left-[5%] md:left-[10%] animate-[float-medium_5s_ease-in-out_infinite_1s]">
        <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200/50 shadow-[0_15px_40px_rgba(15,23,42,0.08)] rounded-xl p-3 pr-6 flex items-center gap-4">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-blue-500/60 rounded-tl-xl" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-blue-500/60 rounded-br-xl" />
          <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-indigo-600 shadow-inner">
            <Zap strokeWidth={2.5} className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[9px] uppercase font-mono font-bold text-slate-400 tracking-widest mb-0.5">Ad_Scale_Protocol</div>
            <div className="text-sm font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
              Active <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(59,130,246,0.6)]" />
            </div>
          </div>
        </div>
      </div>

      {/* HUD Node 3: Efficiency Metrics (Bottom Right) */}
      <div className="absolute bottom-[20%] right-[20%] animate-[float-fast_7s_ease-in-out_infinite_2s]">
        <div className="relative bg-white/70 backdrop-blur-xl border border-slate-200/50 shadow-[0_15px_40px_rgba(15,23,42,0.08)] rounded-xl p-3 pr-6 flex items-center gap-4">
          <div className="absolute top-0 left-0 w-2 h-2 border-t-[1.5px] border-l-[1.5px] border-blue-500/60 rounded-tl-xl" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-[1.5px] border-r-[1.5px] border-blue-500/60 rounded-br-xl" />
          <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg text-emerald-600 shadow-inner">
            <Clock strokeWidth={2.5} className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[9px] uppercase font-mono font-bold text-slate-400 tracking-widest mb-0.5">Compute.Saved</div>
            <div className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
              40h/wk <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_5px_rgba(16,185,129,0.6)]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrbitalSatellites;
