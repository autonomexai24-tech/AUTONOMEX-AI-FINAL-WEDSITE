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
        <div className="flex items-center justify-between px-6 py-5 md:py-6">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-5 transition-all duration-300 hover:scale-[1.02] active:scale-95">
            <img
              src={logoIcon}
              alt="Autonomex AI Icon"
              className="h-20 md:h-24 w-auto object-contain shrink-0"
            />
            <img
              src={logoText}
              alt="Autonomex AI"
              className="h-9 md:h-12 w-auto object-contain shrink-0"
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
            <Link to="/contact">
              <Button className="hidden md:inline-flex rounded-full bg-slate-900 text-white hover:bg-slate-800 px-6 py-2 text-xs font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                Book Strategy
              </Button>
            </Link>

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

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[9999] bg-[#FDFBF7] flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200/80">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-5 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <img
                  src={logoIcon}
                  alt="Autonomex AI Icon"
                  className="h-16 w-auto object-contain shrink-0"
                />
                <img
                  src={logoText}
                  alt="Autonomex AI"
                  className="h-8 w-auto object-contain shrink-0"
                />
              </Link>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 -mr-2 text-slate-500 hover:text-slate-900 transition-colors"
                aria-label="Close menu"
              >
                <X size={28} strokeWidth={1.5} />
              </button>
            </div>

            {/* Rest untouched */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}