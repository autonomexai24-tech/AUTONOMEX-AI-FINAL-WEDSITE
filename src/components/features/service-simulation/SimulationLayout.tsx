import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SimulationLayoutProps {
  children: ReactNode;
}

export default function SimulationLayout({ children }: SimulationLayoutProps) {
  return (
    <motion.main
      // Premium Apple-style entrance animation
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      // 10x ARCHITECTURE FIX:
      // 1. Removed `overflow-x-hidden` (This was killing the sticky scroll).
      // 2. Removed inner nested `motion.div` layers with manual transforms.
      // 3. This is now a pure, clean flex container. The left side will dictate the height,
      //    and the right side will flawlessly stick to the screen.
      className="w-full bg-[#FDFBF7] flex flex-col lg:flex-row relative selection:bg-blue-500/30"
    >
      {children}
    </motion.main>
  );
}
