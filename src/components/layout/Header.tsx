import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Lock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isProductExpanded, setIsProductExpanded] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
      setIsProductExpanded(false);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`
        fixed top-6 left-1/2 -translate-x-1/2 z-50 
        w-[90%] md:w-[85%] max-w-5xl 
        rounded-full border border-white/40 
        bg-white/80 backdrop-blur-xl backdrop-saturate-150
        shadow-[0_8px_30px_rgba(0,0,0,0.04)] 
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-[200%]"}
      `}
      >
        <div className="flex items-center justify-between px-6 py-5 md:py-6">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-5 transition-all duration-300 hover:scale-[1.02] active:scale-95">
            <img
              src="/logo-mark.png"
              alt="Autonomex AI Icon"
              className="h-11 md:h-14 w-auto object-contain shrink-0"
            />
            <img
              src="/logo-wordmark.png"
              alt="Autonomex AI"
              className="h-8 md:h-10 w-auto object-contain shrink-0"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              to="/"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 px-4 py-2 rounded-full transition-all duration-300"
            >
              Home
            </Link>

            <span className="text-sm font-medium text-slate-400 px-4 py-2 rounded-full flex items-center gap-1.5 cursor-default pointer-events-none select-none">
              Product
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-blue-50 text-blue-500 px-1.5 py-0.5 rounded-full leading-none">
                Soon
              </span>
            </span>

            <a
              href="/#services"
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 px-4 py-2 rounded-full transition-all duration-300"
            >
              Services
            </a>

            <Link
              to="/about"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-white/60 px-4 py-2 rounded-full transition-all duration-300"
            >
              About
            </Link>
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-4">
            <Link to="/book-strategy">
              <Button className="hidden md:inline-flex rounded-full bg-slate-900 text-white hover:bg-slate-800 px-6 py-2 text-xs font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                Fill the Details
              </Button>
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* SLIDE-IN PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 z-[101] w-[85vw] max-w-[400px] bg-white shadow-2xl md:hidden overflow-hidden flex flex-col"
            >
              {/* TOP BAR */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 shrink-0">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img
                    src="/logo-mark.png"
                    alt="Autonomex AI Icon"
                    className="h-9 w-auto object-contain"
                  />
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 -mr-2 text-slate-400 hover:text-slate-900 transition-colors flex items-center justify-center rounded-full"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              {/* NAVIGATION LINKS */}
              <div className="flex-1 overflow-y-auto px-4 py-6 space-y-3">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="bg-white rounded-2xl shadow-sm px-5 py-4 flex justify-between items-center text-lg font-medium hover:bg-slate-50 transition border border-slate-100/50"
                >
                  Home
                  <ChevronRight size={20} className="text-slate-400" />
                </Link>

                <div className="bg-white rounded-2xl shadow-sm border border-slate-100/50 overflow-hidden">
                  <button
                    onClick={() => setIsProductExpanded(!isProductExpanded)}
                    className="w-full px-5 py-4 flex justify-between items-center text-lg font-medium hover:bg-slate-50 transition"
                  >
                    Product
                    <ChevronRight
                      size={20}
                      className={`text-slate-400 transition-transform duration-300 ${isProductExpanded ? 'rotate-90' : ''}`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-out overflow-hidden ${isProductExpanded ? "max-h-40" : "max-h-0"
                      }`}
                  >
                    <div className="px-5 pb-4 pl-4 space-y-2">
                      <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                        AI Agents
                      </Link>
                      <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                        Workflows
                      </Link>
                      <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors">
                        Integrations
                      </Link>
                    </div>
                  </div>
                </div>

                <a
                  href="/#services"
                  onClick={(e) => {
                    setIsOpen(false);
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="bg-white rounded-2xl shadow-sm px-5 py-4 flex justify-between items-center text-lg font-medium hover:bg-slate-50 transition border border-slate-100/50"
                >
                  Services
                  <ChevronRight size={20} className="text-slate-400" />
                </a>

                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="bg-white rounded-2xl shadow-sm px-5 py-4 flex justify-between items-center text-lg font-medium hover:bg-slate-50 transition border border-slate-100/50"
                >
                  About
                  <ChevronRight size={20} className="text-slate-400" />
                </Link>
              </div>

              {/* BOTTOM CTA */}
              <div className="px-6 pt-6 pb-8 bg-white border-t border-slate-100 flex flex-col gap-3 shrink-0">
                <Link to="/book-strategy" onClick={() => setIsOpen(false)} className="w-full">
                  <button className="w-full bg-[#0B1120] text-white rounded-xl py-4 font-semibold text-center hover:bg-slate-800 transition shadow-lg shadow-slate-900/10">
                    Fill the Details
                  </button>
                </Link>
                <a href="tel:+917676808950" onClick={() => setIsOpen(false)} className="w-full">
                  <button className="w-full bg-white border border-slate-300 text-slate-700 rounded-xl py-4 font-medium text-center hover:bg-slate-50 transition">
                    Call Us
                  </button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}