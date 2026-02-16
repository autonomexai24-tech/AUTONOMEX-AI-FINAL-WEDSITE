import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Clock, ShieldCheck, Zap } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/features/story/GridBackground";

const benefits = [
  { icon: Clock, title: "24/7 Uptime", description: "Agents that never sleep — executing workflows, decisions, and outreach around the clock." },
  { icon: ShieldCheck, title: "Zero Error Rate", description: "Eliminate human mistakes with deterministic logic and built-in validation layers." },
  { icon: Zap, title: "Instant Scale", description: "Deploy once, scale infinitely. Handle 10x volume without adding headcount." },
];

const AiAgents = () => (
  <div className="min-h-screen bg-background relative overflow-hidden">
    <Header />
    <GridBackground theme="blue" />

    {/* Hero */}
    <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] max-w-7xl mx-auto px-6 md:px-12 text-center pt-32 pb-16">
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">AI Agent Automation</span>
      <h1 className="font-serif text-5xl md:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-6">
        Autonomous agents that <span className="italic text-slate-400">work for you.</span>
      </h1>
      <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
        Design and deploy intelligent agents that handle workflows, decisions, and execution autonomously at scale.
      </p>
      <Link to="/contact">
        <Button className="h-14 px-10 rounded-full bg-slate-900 text-white text-[15px] font-semibold shadow-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
          Book Strategy Call <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </section>

    {/* Benefits Grid */}
    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((b, i) => (
          <div key={i} className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
              <b.icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-serif text-xl font-medium text-slate-900 mb-2">{b.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{b.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    </section>

    <Footer />
  </div>
);

export default AiAgents;
