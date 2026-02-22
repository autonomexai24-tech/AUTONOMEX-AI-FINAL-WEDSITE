import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight } from "lucide-react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isProductExpanded, setIsProductExpanded] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const controlNavbar = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
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
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }

      if (e.key === "Tab" && isOpen && menuRef.current) {
        const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);

      // Auto-focus logic for accessibility on open
      const focusTimer = setTimeout(() => {
        const closeBtn = menuRef.current?.querySelector('button[aria-label="Close menu"]') as HTMLElement;
        closeBtn?.focus();
      }, 300); // Wait for transition

      return () => {
        clearTimeout(focusTimer);
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
      setIsProductExpanded(false);

      return () => { };
    }
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
              type="button"
              onClick={() => setIsOpen(true)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAVIGATION SYSTEM */}
      <div className="md:hidden">
        {/* OVERLAY BACKDROP */}
        <div
          className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-all duration-300 ease-out ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* SLIDE-IN PANEL */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 bottom-0 z-[101] w-[85vw] max-w-[400px] bg-slate-50 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ease-out ${isOpen ? "translate-x-0 visible" : "translate-x-full invisible"
            }`}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-white shrink-0">
            <Link to="/" onClick={() => setIsOpen(false)} className="outline-none focus-visible:ring-2 focus-visible:ring-slate-900 rounded-md">
              <img
                src="/logo-mark.png"
                alt="Autonomex AI Icon"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 -mr-2 text-slate-400 hover:text-slate-900 transition-colors flex items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
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
              className="bg-white rounded-2xl shadow-sm px-5 py-4 flex justify-between items-center text-lg font-medium hover:bg-slate-50 transition outline-none focus-visible:ring-2 focus-visible:ring-slate-900 group"
            >
              Home
              <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
            </Link>

            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setIsProductExpanded(!isProductExpanded)}
                className="w-full px-5 py-4 flex justify-between items-center text-lg font-medium hover:bg-slate-50 transition outline-none focus-visible:ring-2 focus-visible:ring-slate-900 group"
              >
                Product
                <ChevronRight
                  size={20}
                  className={`text-slate-300 group-hover:text-slate-400 transition-transform duration-300 ${isProductExpanded ? "rotate-90" : ""
                    }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-out overflow-hidden ${isProductExpanded ? "max-h-40" : "max-h-0"
                  }`}
              >
                <div className="px-5 pb-4 space-y-1">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="block pl-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  >
                    AI Agents
                  </Link>
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="block pl-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  >
                    Workflows
                  </Link>
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="block pl-4 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
                  >
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
              className="bg-white rounded-2xl shadow-sm px-5 py-4 flex justify-between items-center text-lg font-medium hover:bg-slate-50 transition outline-none focus-visible:ring-2 focus-visible:ring-slate-900 group"
            >
              Services
              <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
            </a>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="bg-white rounded-2xl shadow-sm px-5 py-4 flex justify-between items-center text-lg font-medium hover:bg-slate-50 transition outline-none focus-visible:ring-2 focus-visible:ring-slate-900 group"
            >
              About
              <ChevronRight size={20} className="text-slate-300 group-hover:text-slate-400 transition-colors" />
            </Link>
          </div>

          {/* BOTTOM CTA */}
          <div className="px-6 pt-6 pb-8 bg-white border-t border-slate-100 flex flex-col gap-3 shrink-0">
            <Link to="/book-strategy" onClick={() => setIsOpen(false)} className="w-full outline-none rounded-xl focus-visible:ring-2 focus-visible:ring-[#0B1120] focus-visible:ring-offset-2">
              <button type="button" className="w-full bg-[#0B1120] text-white rounded-xl py-4 font-semibold text-center hover:bg-slate-800 transition shadow-lg shadow-slate-900/10 outline-none">
                Fill the Details
              </button>
            </Link>
            <a href="tel:+917676808950" onClick={() => setIsOpen(false)} className="w-full outline-none rounded-xl focus-visible:ring-2 focus-visible:ring-slate-300 focus-visible:ring-offset-2">
              <button type="button" className="w-full bg-white border border-slate-300 text-slate-700 rounded-xl py-4 font-medium text-center hover:bg-slate-50 transition outline-none">
                Call Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}