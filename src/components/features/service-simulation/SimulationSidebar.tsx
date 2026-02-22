import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Phone, Calendar, ArrowRight, Sparkles } from "lucide-react";

declare global {
  interface Window {
    gtag: any;
  }
}

interface Phase {
  id: string;
  tag: string;
  title: string;
  desc: string;
  metrics?: { label: string; value: string }[];
}

interface ServiceData {
  title: string;
  tagline?: string;
  phases: Phase[];
  region?: string;
}

interface SimulationSidebarProps {
  serviceData: ServiceData;
  serviceId: string;
  isPending?: boolean;
}

export default function SimulationSidebar({ serviceData, serviceId, isPending = false }: SimulationSidebarProps) {
  const [activePhase, setActivePhase] = useState("phase-1");
  const ctaRef = useRef<HTMLDivElement>(null);
  const isCtaInView = useInView(ctaRef, { once: true, margin: "-100px" });
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newPhase = entry.target.id;
            setActivePhase(newPhase);
            window.dispatchEvent(
              new CustomEvent("phaseChange", {
                detail: { phase: newPhase, serviceId },
              }),
            );
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );

    const phaseElements = document.querySelectorAll(".phase-block");
    phaseElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [serviceId]);

  const phoneNumbers: Record<string, string> = {
    "ai-agents": "+919876543210",
    "app-development": "+919876543211",
    "web-development": "+919876543212",
    "ai-video": "+919876543213",
  };
  const phoneNumber = phoneNumbers[serviceId] || phoneNumbers["ai-agents"];

  const handleAnalytics = (action: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        event_category: "CTA",
        event_label: `${action} - ${serviceId}`,
        value: 1,
      });
    }
  };

  return (
    <aside className="w-full h-full pb-[10vh] relative">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-[60px] lg:top-0 p-6 lg:p-8 pt-12 lg:pt-24 pb-8 lg:pb-12 bg-[#FDFBF7]/90 backdrop-blur-xl z-30 border-b border-slate-200/50"
      >
        <span className="inline-block font-mono text-[10px] font-bold text-blue-600 tracking-[0.2em] mb-4 uppercase">
          Autonomex AI // {serviceId.replace("-", "_")}
        </span>
        <h2 className="font-serif text-3xl md:text-5xl text-slate-900 leading-tight mb-6 tracking-tight">
          {serviceData?.title}
          <span className="text-blue-600">.</span>
        </h2>
        {serviceData?.tagline && (
          <p className="text-base text-slate-500 mb-6 max-w-md leading-relaxed">{serviceData.tagline}</p>
        )}

        <div className="flex items-center gap-3">
          {serviceData?.phases?.map((phase) => {
            const isActive = activePhase === phase.id;
            return (
              <motion.div
                key={`dot-${phase.id}`}
                className="h-1.5 rounded-full transition-colors duration-300"
                animate={{
                  width: isActive ? 32 : 16,
                  backgroundColor: isActive ? "#2563eb" : "#e2e8f0",
                }}
              />
            );
          })}
          <motion.div
            className="h-1.5 rounded-full transition-colors duration-300"
            animate={{
              width: activePhase === "cta" ? 32 : 16,
              backgroundColor: activePhase === "cta" ? "#f59e0b" : "#e2e8f0",
            }}
          />
        </div>
      </motion.div>

      <div className="px-6 lg:px-8 mt-12 space-y-[40vh] lg:space-y-[45vh]">
        <AnimatePresence mode="sync">
          {/* FIX: Removed the unused 'index' parameter here to stop TS6133 errors */}
          {serviceData?.phases?.map((phase) => {
            const isActive = activePhase === phase.id;
            return (
              <motion.div
                key={phase.id}
                id={phase.id}
                className="phase-block"
                // FIX: Removed complex variants and injected raw inline animations for guaranteed TS compilation
                initial={{ opacity: 0.2, x: -16, filter: "blur(2px)", scale: 0.98 }}
                animate={{
                  opacity: isActive ? 1 : 0.2,
                  x: isActive ? 0 : -16,
                  filter: isActive ? "blur(0px)" : "blur(2px)",
                  scale: isActive ? 1 : 0.98,
                }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-mono text-[10px] font-bold text-blue-600 tracking-[0.2em] mb-4 block uppercase">
                  SYSTEM_PHASE // {phase.tag}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-slate-900 mb-6 leading-[1.1]">{phase.title}</h3>
                <p className="font-sans text-base lg:text-lg text-slate-500 leading-relaxed max-w-sm mb-6">
                  {phase.desc}
                </p>

                {phase.metrics && isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 gap-4 mt-6"
                  >
                    {/* FIX: Removed the unused 'i' parameter here to stop TS6133 errors */}
                    {phase.metrics.map((metric) => (
                      <div key={metric.label} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <p className="text-2xl font-bold text-slate-900">{metric.value}</p>
                        <p className="text-xs text-slate-500 mt-1">{metric.label}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>

        <motion.div
          id="cta"
          className="pt-[15vh] pb-[20vh] phase-block"
          ref={ctaRef}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{
            opacity: isCtaInView ? 1 : 0,
            y: isCtaInView ? 0 : 40,
            scale: isCtaInView ? 1 : 0.95,
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] max-w-sm relative overflow-hidden group">
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-bl-full -z-10"
              animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />

            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-semibold mb-4">
              <Sparkles className="w-3 h-3" />
              Trusted by 40+ Karnataka Factories
            </div>

            <h3 className="font-serif text-2xl text-slate-900 mb-2 leading-tight">Ready to Upgrade?</h3>
            <p className="text-sm text-slate-500 mb-8 leading-relaxed">
              Stop losing revenue to outdated systems. Connect with our engineering team to architect your custom
              solution.
            </p>

            <div className="flex flex-col gap-3">
              <motion.a
                href={`tel:${phoneNumber}`}
                onClick={() => handleAnalytics("Call")}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-3 transition-all shadow-lg shadow-slate-900/20 relative overflow-hidden group/btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Directly</span>
              </motion.a>

              <motion.button
                onClick={() => {
                  handleAnalytics("Booking");
                  navigate("/book-strategy");
                }}
                className="w-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-6 py-4 rounded-xl font-semibold text-sm flex items-center gap-3 transition-all"
                whileHover={{ scale: 1.02, borderColor: "#94a3b8" }}
                whileTap={{ scale: 0.98 }}
              >
                <Calendar className="w-4 h-4 text-blue-600" />
                <span className="flex-1 text-left">Fill the Details</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </motion.button>
            </div>

            <p className="text-xs text-slate-400 mt-4 text-center">
              🔥 <strong className="text-slate-600">3 slots</strong> left this week in Hubballi
            </p>
          </div>
        </motion.div>
      </div>
    </aside>
  );
}
