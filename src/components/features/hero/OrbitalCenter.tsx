import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

/**
 * OrbitalCenter - The Levitating Quantum Core
 * Multi-layered glowing nucleus with breathing animation.
 */
const OrbitalCenter = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none">
      {/* Outermost plasma field */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 200,
          height: 200,
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, rgba(59,130,246,0.06) 50%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Mid glow ring */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 140,
          height: 140,
          background: "radial-gradient(circle, rgba(59,130,246,0.18) 0%, rgba(99,102,241,0.1) 50%, transparent 70%)",
          filter: "blur(12px)",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* Spinning outer dashed ring */}
      <motion.div
        className="absolute"
        style={{ width: 120, height: 120 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50" cy="50" r="48"
            fill="none"
            stroke="rgba(99,102,241,0.5)"
            strokeWidth="0.6"
            strokeDasharray="3 5"
          />
          {/* Bright accent dot on the ring */}
          <circle cx="50" cy="2" r="2.5" fill="#6366f1"
            style={{ filter: "drop-shadow(0 0 4px #6366f1)" }}
          />
        </svg>
      </motion.div>

      {/* Counter-spinning inner ring */}
      <motion.div
        className="absolute"
        style={{ width: 96, height: 96 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50" cy="50" r="48"
            fill="none"
            stroke="rgba(34,211,238,0.35)"
            strokeWidth="0.5"
            strokeDasharray="1 8"
          />
          <circle cx="50" cy="2" r="2" fill="#22d3ee"
            style={{ filter: "drop-shadow(0 0 4px #22d3ee)" }}
          />
        </svg>
      </motion.div>

      {/* The solid core */}
      <motion.div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: 80,
          height: 80,
          background: "radial-gradient(circle at 35% 35%, #1e2d5a 0%, #0B1120 70%)",
          border: "1px solid rgba(99,102,241,0.5)",
          boxShadow: "0 0 30px rgba(99,102,241,0.3), 0 0 60px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 20px rgba(99,102,241,0.2), 0 0 40px rgba(59,130,246,0.1)",
            "0 0 40px rgba(99,102,241,0.45), 0 0 80px rgba(59,130,246,0.2)",
            "0 0 20px rgba(99,102,241,0.2), 0 0 40px rgba(59,130,246,0.1)",
          ],
        }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Inner highlight */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.08) 0%, transparent 60%)",
          }}
        />
        <Cpu
          className="w-8 h-8 relative z-10"
          strokeWidth={1.5}
          style={{
            color: "#93c5fd",
            filter: "drop-shadow(0 0 8px rgba(147,197,253,0.8)) drop-shadow(0 0 16px rgba(99,102,241,0.5))",
          }}
        />
      </motion.div>
    </div>
  );
};

export default OrbitalCenter;
