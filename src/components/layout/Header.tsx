import { useState, useEffect } from "react";
import logoIcon from "../../assets/logo-icon.png";
import logoText from "../../assets/logo-text.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Lock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smart Scroll Logic: Hide on scroll DOWN, Show on scroll UP
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        if (currentScrollY === 0) {
          setIsVisible(true); // Always show at the very top
        } else if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Hide when scrolling down
        } else {
          setIsVisible(true); // Show when scrolling up
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

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
        <div className="flex items-center justify-between px-6 py-3">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 transition-all duration-300 hover:scale-[1.02] active:scale-95">
            <img src={logoIcon} alt="Autonomex AI Icon" className="h-10 md:h-12 w-auto object-contain shrink-0" />
            <img src={logoText} alt="Autonomex AI" className="h-5 md:h-6 w-auto object-contain shrink-0" />
          </Link>

          {/* DESKTOP NAV (Hidden on Mobile) */}
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
            {/* Desktop Call to Action (Hidden on Mobile to save space) */}
            <Link to="/contact">
              <Button className="hidden md:inline-flex rounded-full bg-slate-900 text-white hover:bg-slate-800 px-6 py-2 text-xs font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                Book Strategy
              </Button>
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

      </header>

      {/* Enterprise Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[9999] bg-[#FDFBF7] flex flex-col"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/80">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3 md:gap-4 transition-all duration-300 hover:scale-[1.02] active:scale-95">
                <img src={logoIcon} alt="Autonomex AI Icon" className="h-10 md:h-12 w-auto object-contain shrink-0" />
                <img src={logoText} alt="Autonomex AI" className="h-5 md:h-6 w-auto object-contain shrink-0" />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            {/* Navigation Rows */}
            <nav className="flex-1 overflow-y-auto">
              <div className="px-6">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-5 border-b border-slate-100 group"
                >
                  <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Home</span>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </Link>

                <div className="flex items-center justify-between py-5 border-b border-slate-100 cursor-default">
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-semibold text-slate-400">Product</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 text-slate-400 px-2 py-0.5 rounded-full">
                      <Lock size={10} />
                      Soon
                    </span>
                  </div>
                </div>

                <a
                  href="/#services"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (window.location.pathname === "/") {
                      e.preventDefault();
                      document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="flex items-center justify-between py-5 border-b border-slate-100 group"
                >
                  <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">Services</span>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </a>

                <Link
                  to="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-5 border-b border-slate-100 group"
                >
                  <span className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">About</span>
                  <ChevronRight size={20} className="text-slate-300 group-hover:text-blue-500 transition-colors" />
                </Link>
              </div>
            </nav>

            {/* Bottom CTA Block */}
            <div className="border-t border-slate-200/80 bg-slate-50 p-6 space-y-3">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block">
                <Button variant="outline" className="w-full rounded-xl border-slate-300 text-slate-900 py-6 text-base font-semibold hover:bg-white">
                  Contact Us
                </Button>
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block">
                <Button className="w-full rounded-xl bg-blue-600 text-white hover:bg-blue-700 py-6 text-base font-semibold shadow-lg">
                  Book Strategy Session
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
