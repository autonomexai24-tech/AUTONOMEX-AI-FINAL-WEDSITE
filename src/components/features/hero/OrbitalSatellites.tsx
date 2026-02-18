import { motion } from "framer-motion";
import { Activity, Zap, Clock } from "lucide-react";

/**
 * OrbitalSatellites - The Parallax Metric Cards
 * Ultra-premium glassmorphism HUD nodes floating at different depths.
 */
const OrbitalSatellites = () => {
  return (
    <div className="absolute inset-0 z-30 pointer-events-none select-none">

      {/* ── HUD Node 1: SYS.REVENUE (Top Right) ─────────────────────── */}
      <motion.div
        className="absolute top-[15%] right-[10%] md:right-[12%]"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-xl p-3 pr-6 flex items-center gap-4"
          style={{
            boxShadow: "0 20px 50px rgba(15,23,42,0.12), 0 4px 16px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-indigo-400/70 rounded-tl-xl" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-indigo-400/70 rounded-br-xl" />

          {/* Icon */}
          <div
            className="p-2 rounded-lg"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(59,130,246,0.08) 100%)",
              border: "1px solid rgba(99,102,241,0.2)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <Activity strokeWidth={2.5} className="w-4 h-4 text-indigo-600" />
          </div>

          {/* Data */}
          <div>
            <div className="text-[9px] uppercase font-mono font-bold text-slate-400 tracking-widest mb-0.5">
              SYS.REVENUE
            </div>
            <div className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
              +124%
              <motion.span
                className="w-1.5 h-1.5 bg-green-500 rounded-full"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                style={{ boxShadow: "0 0 6px rgba(34,197,94,0.7)" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── HUD Node 2: AD_SCALE_PROTOCOL (Left) ─────────────────────── */}
      <motion.div
        className="absolute top-[45%] left-[5%] md:left-[8%]"
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
      >
        <div
          className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-xl p-3 pr-6 flex items-center gap-4"
          style={{
            boxShadow: "0 20px 50px rgba(15,23,42,0.12), 0 4px 16px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-blue-400/70 rounded-tl-xl" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-blue-400/70 rounded-br-xl" />

          {/* Icon */}
          <div
            className="p-2 rounded-lg"
            style={{
              background: "linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(99,102,241,0.08) 100%)",
              border: "1px solid rgba(59,130,246,0.2)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <Zap strokeWidth={2.5} className="w-4 h-4 text-blue-600" />
          </div>

          {/* Data */}
          <div>
            <div className="text-[9px] uppercase font-mono font-bold text-slate-400 tracking-widest mb-0.5">
              AD_SCALE_PROTOCOL
            </div>
            <div className="text-sm font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
              Active
              <motion.span
                className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                style={{ boxShadow: "0 0 6px rgba(59,130,246,0.7)" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── HUD Node 3: COMPUTE.SAVED (Bottom Right) ─────────────────── */}
      <motion.div
        className="absolute bottom-[20%] right-[18%]"
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      >
        <div
          className="relative bg-white/80 backdrop-blur-xl border border-white/50 rounded-xl p-3 pr-6 flex items-center gap-4"
          style={{
            boxShadow: "0 20px 50px rgba(15,23,42,0.12), 0 4px 16px rgba(16,185,129,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
          }}
        >
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-2.5 h-2.5 border-t-[1.5px] border-l-[1.5px] border-emerald-400/70 rounded-tl-xl" />
          <div className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b-[1.5px] border-r-[1.5px] border-emerald-400/70 rounded-br-xl" />

          {/* Icon */}
          <div
            className="p-2 rounded-lg"
            style={{
              background: "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(52,211,153,0.08) 100%)",
              border: "1px solid rgba(16,185,129,0.2)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
            }}
          >
            <Clock strokeWidth={2.5} className="w-4 h-4 text-emerald-600" />
          </div>

          {/* Data */}
          <div>
            <div className="text-[9px] uppercase font-mono font-bold text-slate-400 tracking-widest mb-0.5">
              COMPUTE.SAVED
            </div>
            <div className="text-lg font-bold text-slate-800 tracking-tight flex items-center gap-1.5">
              40h/wk
              <motion.span
                className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 }}
                style={{ boxShadow: "0 0 6px rgba(16,185,129,0.7)" }}
              />
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default OrbitalSatellites;
