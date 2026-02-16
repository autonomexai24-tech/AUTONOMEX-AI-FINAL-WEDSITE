import { ArrowRight, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";

const footerColumns = [
  { title: "Platform", links: ["AI Agents", "Workflow Studio", "Integrations", "Security", "Roadmap"] },
  { title: "Solutions", links: ["Enterprise", "Startups", "E-commerce", "Agencies", "Creators"] },
  { title: "Resources", links: ["Documentation", "API Reference", "Community", "Help Center", "Status"] },
  { title: "Company", links: ["About", "Careers", "Blog", "Press", "Contact"] },
];

const Footer = () => {
  return (
    <footer className="relative bg-[#050A15] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      {/* Background Texture: Subtle Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Section: Brand & Newsletter */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
          <div className="max-w-md">
            <span className="font-serif text-3xl font-bold tracking-tight text-white">
              Autonomex<span className="text-blue-500">.</span>
            </span>
            <p className="mt-6 text-slate-400 leading-relaxed font-sans text-lg">
              The infrastructure for the autonomous economy. <br />
              Deploy intelligence, not just code.
            </p>
          </div>

          <div className="w-full md:w-auto">
            <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              Subscribe to the future
            </h4>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all w-full md:w-80"
              />
              <button className="bg-white text-slate-900 rounded-full p-3 hover:bg-blue-50 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-20 border-t border-white/5 pt-16">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-sans text-sm text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Meta, Social, Legal */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
          {/* Copyright & Legal */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <span className="font-mono text-xs text-slate-600">© 2026 Autonomex Inc.</span>
            <div className="flex gap-6">
              <a href="#" className="font-sans text-xs text-slate-500 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-sans text-xs text-slate-500 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Socials & Status */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-mono text-[10px] font-bold text-emerald-500 uppercase tracking-wider">
                Systems Operational
              </span>
            </div>

            <div className="h-4 w-px bg-white/10" />

            <div className="flex gap-4">
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Massive Watermark Text (The "Premium" background touch) */}
      <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 pointer-events-none select-none overflow-hidden w-full flex justify-center opacity-[0.02]">
        <h1 className="font-serif font-bold text-[12rem] md:text-[18rem] tracking-tighter text-white whitespace-nowrap leading-none">
          AUTONOMEX
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
