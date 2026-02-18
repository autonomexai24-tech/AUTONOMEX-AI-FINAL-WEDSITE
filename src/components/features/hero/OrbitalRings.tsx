import { motion } from "framer-motion";

/**
 * OrbitalRings - The 3D Holographic Table
 * Tilted rings in 3D space with glowing orbiting data packets.
 */

// Stable data packet configs for each ring
const INNER_PACKETS = [
  { color: "#22d3ee", shadow: "rgba(34,211,238,0.8)", dur: 4, delay: 0 },
  { color: "#34d399", shadow: "rgba(52,211,153,0.8)", dur: 4, delay: 2 },
];
const MID_PACKETS = [
  { color: "#22d3ee", shadow: "rgba(34,211,238,0.8)", dur: 7, delay: 0 },
  { color: "#a78bfa", shadow: "rgba(167,139,250,0.8)", dur: 7, delay: 3.5 },
  { color: "#34d399", shadow: "rgba(52,211,153,0.8)", dur: 7, delay: 1.5 },
];
const OUTER_PACKETS = [
  { color: "#60a5fa", shadow: "rgba(96,165,250,0.8)", dur: 12, delay: 0 },
  { color: "#22d3ee", shadow: "rgba(34,211,238,0.8)", dur: 12, delay: 4 },
  { color: "#34d399", shadow: "rgba(52,211,153,0.8)", dur: 12, delay: 8 },
];

interface PacketProps {
  color: string;
  shadow: string;
  dur: number;
  delay: number;
  rx: number; // ellipse x-radius in px
  ry: number; // ellipse y-radius in px
}

const OrbitingPacket = ({ color, shadow, dur, delay, rx, ry }: PacketProps) => (
  <motion.div
    className="absolute rounded-full"
    style={{
      width: 7,
      height: 7,
      background: color,
      boxShadow: `0 0 8px ${shadow}, 0 0 16px ${shadow}`,
      top: "50%",
      left: "50%",
      marginTop: -3.5,
      marginLeft: -3.5,
    }}
    animate={{
      x: Array.from({ length: 61 }, (_, i) => Math.cos((i / 60) * 2 * Math.PI) * rx),
      y: Array.from({ length: 61 }, (_, i) => Math.sin((i / 60) * 2 * Math.PI) * ry),
    }}
    transition={{
      duration: dur,
      delay,
      repeat: Infinity,
      ease: "linear",
    }}
  />
);

const OrbitalRings = () => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 select-none"
      style={{ perspective: "1200px" }}
    >
      {/* The 3D tilted ring system */}
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          transformStyle: "preserve-3d",
          transform: "rotateX(60deg) rotateY(-10deg)",
        }}
      >
        {/* ── INNER RING (450px) ─────────────────────────────────────── */}
        <motion.div
          style={{
            position: "absolute",
            width: 450,
            height: 450,
            top: "50%",
            left: "50%",
            marginTop: -225,
            marginLeft: -225,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <filter id="glow-inner">
                <feGaussianBlur stdDeviation="1" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="49" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="0.3" />
            <circle
              cx="50" cy="50" r="49"
              fill="none"
              stroke="rgba(99,102,241,0.6)"
              strokeWidth="0.5"
              strokeDasharray="3 6"
              filter="url(#glow-inner)"
            />
          </svg>
        </motion.div>

        {/* Inner ring data packets */}
        <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: -225, marginLeft: -225, width: 450, height: 450 }}>
          {INNER_PACKETS.map((p, i) => (
            <OrbitingPacket key={i} {...p} rx={218} ry={218} />
          ))}
        </div>

        {/* ── MIDDLE RING (600px) ────────────────────────────────────── */}
        <motion.div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            top: "50%",
            left: "50%",
            marginTop: -300,
            marginLeft: -300,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <filter id="glow-mid">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="49.5" fill="none" stroke="rgba(59,130,246,0.12)" strokeWidth="0.3" />
            <circle
              cx="50" cy="50" r="49.5"
              fill="none"
              stroke="rgba(34,211,238,0.55)"
              strokeWidth="0.6"
              strokeDasharray="8 20"
              filter="url(#glow-mid)"
            />
          </svg>
        </motion.div>

        {/* Middle ring data packets */}
        <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: -300, marginLeft: -300, width: 600, height: 600 }}>
          {MID_PACKETS.map((p, i) => (
            <OrbitingPacket key={i} {...p} rx={293} ry={293} />
          ))}
        </div>

        {/* ── OUTER RING (780px) ─────────────────────────────────────── */}
        <motion.div
          style={{
            position: "absolute",
            width: 780,
            height: 780,
            top: "50%",
            left: "50%",
            marginTop: -390,
            marginLeft: -390,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <filter id="glow-outer">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="49.5" fill="none" stroke="rgba(148,163,184,0.08)" strokeWidth="0.2" />
            <circle
              cx="50" cy="50" r="49.5"
              fill="none"
              stroke="rgba(96,165,250,0.4)"
              strokeWidth="0.5"
              strokeDasharray="0.5 4"
              filter="url(#glow-outer)"
            />
          </svg>
        </motion.div>

        {/* Outer ring data packets */}
        <div style={{ position: "absolute", top: "50%", left: "50%", marginTop: -390, marginLeft: -390, width: 780, height: 780 }}>
          {OUTER_PACKETS.map((p, i) => (
            <OrbitingPacket key={i} {...p} rx={383} ry={383} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrbitalRings;
