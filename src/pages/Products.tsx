import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Lock, Terminal, Sparkles, Cpu } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/features/story/GridBackground";
import { useState, useEffect } from "react";

/* 1. The "Live Build" Logs 
  This simulates a real engineering environment. 
*/
const BUILD_LOGS = [
  "Initializing neural core...",
  "Optimizing agent latency to <50ms...",
  "Encrypting data pipelines...",
  "Compiling v1.0.4 release candidate...",
  "Running integration tests (4,203 passed)...",
  "Allocating GPU cluster...",
  "System health: Nominal.",
];

const TerminalWindow = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    let delay = 0;
    BUILD_LOGS.forEach((log, i) => {
      delay += Math.random() * 800 + 500;
      setTimeout(() => {
        setLogs((prev) => [...prev, log].slice(-5)); // Keep last 5 lines
      }, delay);
    });
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-[#0B1120] rounded-xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs md:text-sm">
      {/* Terminal Header */}
      <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50" />
        </div>
        <div className="text-slate-500 flex items-center gap-2">
          <Cpu size={10} />
          <span>build_server_01</span>
        </div>
      </div>
      {/* Terminal Body */}
      <div className="p-4 h-48 flex flex-col justify-end items-start text-slate-300 space-y-2 font-mono">
        {logs.map((log, i) => (
          <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-300">
            <span className="text-blue-500 mr-2">➜</span>
            <span className="opacity-80">{log}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 animate-pulse text-blue-400">
          <span>➜</span>
          <span className="w-2 h-4 bg-blue-400 block" />
        </div>
      </div>
    </div>
  );
};

const Products = () => (
  <div className="min-h-screen bg-background relative overflow-hidden flex flex-col">
    <Header />

    {/* Background: Blue Theme for "Tech/Intelligence" */}
    <div className="absolute inset-0 z-0">
      <GridBackground theme="blue" />
    </div>

    <main className="flex-grow relative z-10 flex flex-col items-center justify-center px-6 md:px-12 py-20">
      {/* 1. The Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 backdrop-blur-sm mb-8 animate-in fade-in zoom-in duration-700">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-700">
          Internal R&D Lab
        </span>
      </div>

      {/* 2. The Headline */}
      <h1 className="font-serif text-5xl md:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-6 text-center max-w-4xl animate-in slide-in-from-bottom-8 fade-in duration-1000">
        We build for ourselves, <br />
        <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
          then we ship to you.
        </span>
      </h1>

      {/* 3. The Subtext */}
      <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-12 leading-relaxed text-center animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-100">
        The <strong>Autonomex Engine</strong> is our proprietary suite of automation tools. Currently powering our
        agency services, soon available as a platform.
      </p>

      {/* 4. The Visual (Live Terminal) */}
      <div className="w-full max-w-lg mb-16 animate-in zoom-in-95 fade-in duration-1000 delay-200">
        <TerminalWindow />
      </div>

      {/* 5. The "Waitlist" Input */}
      <div className="flex flex-col items-center gap-4 w-full max-w-sm animate-in slide-in-from-bottom-12 fade-in duration-1000 delay-300">
        <div className="relative w-full group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 group-hover:opacity-40 transition duration-500 blur"></div>
          <div className="relative flex bg-white rounded-full p-1 pr-1.5 border border-slate-200 shadow-sm">
            <div className="pl-4 flex items-center pointer-events-none">
              <Terminal size={16} className="text-slate-400" />
            </div>
            <input
              type="email"
              placeholder="enter_email_for_access"
              className="w-full bg-transparent border-none focus:ring-0 text-sm font-mono text-slate-700 placeholder:text-slate-400 px-3 py-2"
            />
            <Button size="sm" className="rounded-full bg-slate-900 hover:bg-slate-800 text-white px-6 font-medium">
              Request Key
            </Button>
          </div>
        </div>
        <p className="text-[10px] uppercase tracking-widest text-slate-400 font-mono">
          <Lock size={10} className="inline mr-1 mb-0.5" />
          Limited Developer Preview
        </p>
      </div>

      {/* 6. Back Link */}
      <div className="mt-16 animate-in fade-in duration-1000 delay-500">
        <Link to="/">
          <Button variant="ghost" className="text-slate-400 hover:text-slate-900 hover:bg-transparent gap-2 group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Return to Headquarters
          </Button>
        </Link>
      </div>
    </main>
    <Footer />
  </div>
);

export default Products;
