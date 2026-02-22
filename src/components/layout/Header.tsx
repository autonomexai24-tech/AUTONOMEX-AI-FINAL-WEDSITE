import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronRight, Lock } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

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
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
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

      {isOpen && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-white
            flex
            flex-col
            items-center
            justify-center
            gap-8
          "
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-900 hover:text-blue-600 transition-colors"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </Link>
          <span className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-default">
            Product
          </span>
          <a
            href="/#services"
            onClick={(e) => {
              setIsOpen(false);
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300"
          >
            Services
          </a>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-medium text-gray-900 hover:text-blue-600 transition-colors duration-300"
          >
            About
          </Link>
        </div>
      )}
    </>
  );
}