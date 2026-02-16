import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LayoutDashboard, Box, AlertCircle, Activity, TrendingUp, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const MobileAppModule = ({ activePhase }: { activePhase?: string }) => {
  const isPhase1 = activePhase === "phase-1";
  const isPhase2 = activePhase === "phase-2";
  const isPhase3 = activePhase === "phase-3";

  // Stagger variants for the dashboard cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } },
  };

  return (
    <div className="relative w-full max-w-[900px] flex items-center justify-center perspective-[2000px]">
      {/* THE TABLET HARDWARE (The Canvas) */}
      <motion.div
        animate={{
          rotateX: isPhase1 ? 15 : 0,
          rotateY: isPhase1 ? -10 : 0,
          scale: isPhase1 ? 0.95 : 1,
          z: isPhase3 ? 40 : 0,
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-[700px] aspect-[4/3] bg-slate-100 rounded-[2rem] border-[12px] border-slate-900 shadow-[0_50px_100px_rgba(0,0,0,0.25)] overflow-hidden relative flex"
      >
        {/* Hardware Camera Notch (Tablet Landscape) */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-20 bg-slate-900 rounded-r-xl z-50 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
        </div>

        {/* SIDEBAR (Navigation) */}
        <div className="w-[180px] bg-white border-r border-slate-200 p-5 flex flex-col z-20">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
              <Activity className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-slate-800 text-sm tracking-tight">AutoTrack</span>
          </div>

          <nav className="space-y-2 flex-1">
            <div className="flex items-center gap-3 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg">
              <LayoutDashboard className="w-4 h-4" />
              <span className="text-xs font-semibold">Overview</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
              <Box className="w-4 h-4" />
              <span className="text-xs font-medium">Inventory</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg transition-colors">
              <AlertCircle className="w-4 h-4" />
              <span className="text-xs font-medium">Alerts</span>
            </div>
          </nav>

          {/* Profile/Status Bottom */}
          <div className="mt-auto pt-4 border-t border-slate-100 flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white shadow-sm" />
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-700">Admin_01</span>
              <span className="text-[9px] text-emerald-500 font-medium">● Online</span>
            </div>
          </div>
        </div>

        {/* MAIN DASHBOARD CONTENT */}
        <div className="flex-1 bg-[#F8FAFC] p-6 flex flex-col relative z-10 overflow-hidden">
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-800 tracking-tight">Factory Overview</h2>
              <p className="text-[11px] text-slate-500">Live production metrics</p>
            </div>
            <div className="bg-white px-3 py-1.5 rounded-full border border-slate-200 flex items-center gap-2 shadow-sm">
              <Search className="w-3 h-3 text-slate-400" />
              <span className="text-[10px] text-slate-400">Search nodes...</span>
            </div>
          </div>

          {/* Dynamic Grid Metrics */}
          <AnimatePresence>
            {(isPhase2 || isPhase3) && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-2 gap-4"
              >
                {/* Huge Production Card */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="col-span-2 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Daily Production Output
                    </span>
                    <div className="flex items-center gap-1 text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">
                      <TrendingUp className="w-3 h-3" />
                      <span className="text-[10px] font-bold">+14.2%</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-3 mb-3">
                    <span className="text-4xl font-serif text-slate-900 leading-none">8,420</span>
                    <span className="text-xs text-slate-400 mb-1">units / target 9k</span>
                  </div>
                  {/* Animated Progress Bar */}
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isPhase3 ? "94%" : "45%" }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      className="h-full bg-blue-600 rounded-full"
                    />
                  </div>
                </motion.div>

                {/* Inventory Card */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Roll Stock</span>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="p-2.5 bg-indigo-50 rounded-xl">
                      <Box className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-slate-800">1,204</span>
                      <span className="text-[9px] text-slate-400">Total pallets</span>
                    </div>
                  </div>
                </motion.div>

                {/* Critical Alert Card */}
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  className="bg-white p-4 rounded-2xl border border-red-100 shadow-sm relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
                  <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                    Critical Low
                  </span>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="p-2.5 bg-red-50 rounded-xl relative">
                      {isPhase3 && (
                        <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping" />
                      )}
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold text-red-600">08</span>
                      <span className="text-[9px] text-slate-400">Items require restock</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sync Overlay for Phase 2 */}
          <AnimatePresence>
            {isPhase2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-white/60 backdrop-blur-sm z-30 flex items-center justify-center"
              >
                <div className="bg-white px-5 py-3 rounded-2xl shadow-xl border border-blue-100 flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  <span className="text-xs font-bold text-blue-800">Digitizing Operations...</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default MobileAppModule;
