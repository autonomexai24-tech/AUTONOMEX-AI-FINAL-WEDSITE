import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

// --- CUSTOM SVG EDITORIAL ARTWORKS ---
// These replace standard icons with Jasper-style "Living Art"

const AiAgentArt = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full overflow-visible">
    <style>{`
      @keyframes float-y { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
      @keyframes spin-slow { to { transform: rotate(360deg); } }
      .anim-float { animation: float-y 6s ease-in-out infinite; }
      .anim-float-delayed { animation: float-y 6s ease-in-out infinite 3s; }
      .anim-spin { animation: spin-slow 12s linear infinite; transform-origin: center; }
    `}</style>
    {/* Colored Offset Blocks */}
    <rect x="30" y="40" width="60" height="70" fill="#60a5fa" fillOpacity="0.4" className="anim-float" />
    <circle cx="150" cy="50" r="20" fill="#3b82f6" fillOpacity="0.6" className="anim-float-delayed" />

    {/* Black Structural Outlines */}
    <g stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinejoin="round">
      {/* Central Node */}
      <rect x="25" y="45" width="60" height="50" className="anim-float" fill="#ffffff" />
      <line x1="35" y1="55" x2="75" y2="55" className="anim-float" />
      <line x1="35" y1="65" x2="65" y2="65" className="anim-float" />
      <line x1="35" y1="80" x2="75" y2="80" className="anim-float" />

      {/* Connecting Path */}
      <path d="M85 70 L120 70 L120 50 L130 50" />
      <polyline points="125 45 130 50 125 55" />

      {/* Secondary Node */}
      <circle cx="150" cy="50" r="20" className="anim-float-delayed" fill="#ffffff" />
      <circle cx="150" cy="50" r="6" className="anim-float-delayed" fill="#0f172a" />
    </g>

    {/* Jasper Sparks */}
    <path
      d="M 140 100 L 150 90 L 160 100 L 150 110 Z"
      fill="none"
      stroke="#0f172a"
      strokeWidth="2"
      className="anim-spin"
      style={{ transformOrigin: "150px 100px" }}
    />
  </svg>
);

const WebDevArt = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full overflow-visible">
    <style>{`
      @keyframes slide-x { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(10px); } }
      .anim-slide { animation: slide-x 5s ease-in-out infinite; }
    `}</style>
    {/* Colored Offset Blocks */}
    <rect x="20" y="20" width="100" height="80" fill="#f472b6" fillOpacity="0.3" />
    <rect x="110" y="70" width="70" height="50" fill="#db2777" fillOpacity="0.5" className="anim-slide" />

    {/* Black Structural Outlines */}
    <g stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinejoin="round">
      {/* Main Browser */}
      <rect x="15" y="25" width="100" height="80" fill="#ffffff" />
      <line x1="15" y1="40" x2="115" y2="40" />
      <circle cx="25" cy="32.5" r="2" fill="#0f172a" />
      <circle cx="35" cy="32.5" r="2" fill="#0f172a" />

      {/* Inner Content */}
      <rect x="25" y="55" width="40" height="40" />
      <line x1="75" y1="60" x2="100" y2="60" />
      <line x1="75" y1="70" x2="90" y2="70" />

      {/* Floating UI Element */}
      <g className="anim-slide">
        <rect x="105" y="75" width="70" height="40" fill="#ffffff" />
        <circle cx="115" cy="95" r="4" fill="#0f172a" />
        <line x1="125" y1="90" x2="165" y2="90" />
        <line x1="125" y1="100" x2="155" y2="100" />
      </g>
    </g>

    {/* Cursor Pointer */}
    <path
      d="M 160 30 L 165 55 L 175 45 L 185 55 L 190 50 L 180 40 L 190 35 Z"
      fill="#ffffff"
      stroke="#0f172a"
      strokeWidth="2.5"
      className="anim-float"
      style={{ animationDuration: "4s" }}
    />
  </svg>
);

const AppDevArt = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full overflow-visible">
    <style>{`
      @keyframes float-diag { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-5px, -5px); } }
      .anim-diag { animation: float-diag 4s ease-in-out infinite; }
    `}</style>
    {/* Colored Offset Blocks */}
    <rect x="75" y="15" width="50" height="100" rx="6" fill="#34d399" fillOpacity="0.4" />
    <rect x="110" y="50" width="60" height="40" fill="#059669" fillOpacity="0.5" className="anim-diag" />
    <circle cx="50" cy="110" r="15" fill="#a7f3d0" fillOpacity="0.8" />

    {/* Black Structural Outlines */}
    <g stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinejoin="round">
      {/* Phone Outline */}
      <rect x="70" y="20" width="50" height="100" rx="6" fill="#ffffff" />
      <line x1="90" y1="25" x2="100" y2="25" />
      <circle cx="95" cy="110" r="4" fill="#0f172a" />

      {/* Screen Content */}
      <rect x="78" y="35" width="34" height="20" rx="2" />
      <rect x="78" y="60" width="15" height="15" rx="2" />
      <rect x="97" y="60" width="15" height="15" rx="2" />

      {/* Floating Module */}
      <g className="anim-diag">
        <rect x="115" y="45" width="60" height="30" fill="#ffffff" />
        <line x1="125" y1="55" x2="165" y2="55" />
        <line x1="125" y1="65" x2="145" y2="65" />
      </g>
    </g>

    {/* Spark */}
    <path
      d="M 40 100 L 50 110 L 60 100 L 50 90 Z"
      fill="none"
      stroke="#0f172a"
      strokeWidth="2"
      className="anim-spin"
      style={{ transformOrigin: "50px 100px", animationDuration: "8s" }}
    />
  </svg>
);

const VideoAdsArt = () => (
  <svg viewBox="0 0 200 150" className="w-full h-full overflow-visible">
    <style>{`
      @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 1; } 100% { transform: scale(1.5); opacity: 0; } }
      .anim-ring { animation: pulse-ring 3s cubic-bezier(0.2, 0, 0.8, 1) infinite; transform-origin: center; }
    `}</style>
    {/* Colored Offset Blocks */}
    <polygon points="70,40 140,75 70,110" fill="#fbbf24" fillOpacity="0.4" />
    <rect x="30" y="90" width="140" height="40" fill="#d97706" fillOpacity="0.3" />

    {/* Black Structural Outlines */}
    <g stroke="#0f172a" strokeWidth="2.5" fill="none" strokeLinejoin="round">
      {/* Target Brackets */}
      <path d="M 50 30 L 30 30 L 30 50" />
      <path d="M 150 30 L 170 30 L 170 50" />
      <path d="M 50 120 L 30 120 L 30 100" />
      <path d="M 150 120 L 170 120 L 170 100" />

      {/* Play Button */}
      <polygon points="80,50 130,75 80,100" fill="#ffffff" />

      {/* Emitting Rings */}
      <circle
        cx="100"
        cy="75"
        r="30"
        className="anim-ring"
        stroke="#fbbf24"
        strokeWidth="2"
        style={{ transformOrigin: "100px 75px" }}
      />
      <circle
        cx="100"
        cy="75"
        r="40"
        className="anim-ring"
        stroke="#fbbf24"
        strokeWidth="1"
        style={{ transformOrigin: "100px 75px", animationDelay: "1.5s" }}
      />
    </g>

    {/* Spark */}
    <path
      d="M 150 40 L 155 45 L 160 40 L 155 35 Z"
      fill="#0f172a"
      className="anim-spin"
      style={{ transformOrigin: "155px 40px", animationDuration: "5s" }}
    />
  </svg>
);

// --- MAIN CONFIGURATION ---

interface ServiceConfig {
  title: string;
  description: string;
  theme: "blue" | "pink" | "emerald" | "amber";
  Artwork: React.FC;
  href: string;
}

const services: ServiceConfig[] = [
  {
    title: "AI Smart Assistants",
    description:
      "Virtual staff that work for you 24/7. Instantly answer messages, take orders, and handle daily tasks automatically.",
    theme: "blue",
    Artwork: AiAgentArt,
    href: "/services/ai-agents",
  },
  {
    title: "Business Websites",
    description:
      "Your digital storefront. Fast, professional websites designed to rank on Google and bring new clients to your door.",
    theme: "pink",
    Artwork: WebDevArt,
    href: "/services/web-development",
  },
  {
    title: "Custom Mobile Apps",
    description:
      "Your own business app, made simple. Track manufacturing inventory, manage staff, or let customers buy directly.",
    theme: "emerald",
    Artwork: AppDevArt,
    href: "/services/app-development",
  },
  {
    title: "Video Ads & Marketing",
    description:
      "Promotions that actually sell. High-quality video commercials for social media that grab attention and drive sales.",
    theme: "amber",
    Artwork: VideoAdsArt,
    href: "/services/ai-video",
  },
];

const THEME_MAP = {
  blue: {
    bg: "bg-blue-50/80",
    grid: "radial-gradient(#3b82f6 1.5px, transparent 1.5px)",
    border: "group-hover:border-blue-300",
    text: "text-blue-600",
  },
  pink: {
    bg: "bg-pink-50/80",
    grid: "radial-gradient(#ec4899 1.5px, transparent 1.5px)",
    border: "group-hover:border-pink-300",
    text: "text-pink-600",
  },
  emerald: {
    bg: "bg-emerald-50/80",
    grid: "radial-gradient(#10b981 1.5px, transparent 1.5px)",
    border: "group-hover:border-emerald-300",
    text: "text-emerald-600",
  },
  amber: {
    bg: "bg-amber-50/80",
    grid: "radial-gradient(#f59e0b 1.5px, transparent 1.5px)",
    border: "group-hover:border-amber-300",
    text: "text-amber-600",
  },
};

const ServiceCard = ({ service, index }: { service: ServiceConfig; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const theme = THEME_MAP[service.theme];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    cardRef.current.style.setProperty("--rx", `${rotateX}deg`);
    cardRef.current.style.setProperty("--ry", `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rx", "0deg");
    cardRef.current.style.setProperty("--ry", "0deg");
  };

  return (
    <div className="relative h-[480px] w-full perspective-[1200px] group cursor-pointer">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "w-full h-full relative rounded-[2rem] overflow-hidden transform-style-3d transition-all duration-300 ease-out flex flex-col",
          "border border-slate-200/60 bg-white shadow-sm hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)]",
          theme.border,
        )}
        style={{ transform: "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))" }}
      >
        {/* Jasper Style Grid & Background */}
        <div className={cn("absolute inset-0 z-0 transition-colors duration-500", theme.bg)} />
        <div
          className="absolute inset-0 z-[1] opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500"
          style={{ backgroundImage: theme.grid, backgroundSize: "24px 24px" }}
        />
        <div className="absolute inset-0 z-[2] bg-white/40 backdrop-blur-[2px]" />

        {/* HUD Corners */}
        <div className="absolute inset-0 z-[3] pointer-events-none opacity-20 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-5 left-5 w-2 h-2 border-t border-l border-slate-900" />
          <div className="absolute top-5 right-5 w-2 h-2 border-t border-r border-slate-900" />
          <div className="absolute bottom-5 left-5 w-2 h-2 border-b border-l border-slate-900" />
          <div className="absolute bottom-5 right-5 w-2 h-2 border-b border-r border-slate-900" />
        </div>

        {/* Extruded 3D Content Container */}
        <div className="relative z-10 flex flex-col h-full transform translate-z-[40px]">
          {/* TOP HALF: The Editorial Abstract Canvas */}
          <div className="relative h-[200px] w-full pt-8 px-8 flex items-center justify-center border-b border-slate-200/40">
            <span
              className={cn(
                "absolute top-6 left-6 font-mono text-[10px] font-bold tracking-widest uppercase z-20",
                theme.text,
              )}
            >
              SYS.0{index + 1}
            </span>
            {/* The Living Art Component */}
            <div className="w-full h-full max-w-[180px] relative z-10 transition-transform duration-500 group-hover:scale-105">
              <service.Artwork />
            </div>
          </div>

          {/* BOTTOM HALF: Typography & CTA */}
          <div className="p-8 flex flex-col flex-grow bg-white/40">
            <h3 className="font-serif text-2xl lg:text-3xl font-medium text-slate-900 mb-3 leading-tight group-hover:text-slate-950 transition-colors">
              {service.title}
            </h3>
            <p className="text-[14px] lg:text-[15px] text-slate-600 leading-relaxed font-sans flex-grow">
              {service.description}
            </p>

            {/* Magnetic CTA */}
            <div className="mt-6 flex items-center gap-3">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center bg-slate-900 text-white transition-all duration-300",
                  "group-hover:w-[160px] group-hover:justify-between group-hover:px-4 shadow-md",
                )}
              >
                <span className="text-xs font-bold tracking-widest uppercase opacity-0 w-0 overflow-hidden group-hover:opacity-100 group-hover:w-auto transition-all duration-300 whitespace-nowrap">
                  Explore Module
                </span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CapabilityBlocks = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 px-6 md:px-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-blue-600"></span>
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-blue-600">
              System Capabilities
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-[4rem] text-slate-900 tracking-tight leading-[1.05]">
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">
              scale
            </span>{" "}
            your operation.
          </h2>
        </div>

        {/* The 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={cn(
                "transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] fill-mode-forwards",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16",
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Link to={service.href} className="block h-full outline-none">
                <ServiceCard service={service} index={i} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityBlocks;
