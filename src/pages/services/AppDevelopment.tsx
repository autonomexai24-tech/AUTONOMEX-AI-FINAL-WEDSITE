import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Layers, Rocket, RefreshCw } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/features/story/GridBackground";

const benefits = [
  { icon: Rocket, title: "Launch Fast", description: "From concept to production in weeks, not months. Rapid iteration with zero compromise." },
  { icon: Layers, title: "Cross-Platform", description: "Robust applications engineered for reliability across web, iOS, and Android." },
  { icon: RefreshCw, title: "Future-Proof", description: "Modular architecture designed for growth — scale from 100 to 1M users seamlessly." },
];

const AppDevelopment = () => (
  <div className="min-h-screen bg-background relative overflow-hidden">
    <Header />
    <GridBackground theme="green" />

    <section className="relative z-10 flex flex-col items-center justify-center min-h-[70vh] max-w-7xl mx-auto px-6 md:px-12 text-center pt-32 pb-16">
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-emerald-600 mb-4">App Development</span>
      <h1 className="font-serif text-5xl md:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-6">
        Apps built for <span className="italic text-slate-400">speed & scale.</span>
      </h1>
      <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
        Robust applications engineered for reliability, speed, and future growth across platforms.
      </p>
      <Link to="/contact">
        <Button className="h-14 px-10 rounded-full bg-slate-900 text-white text-[15px] font-semibold shadow-2xl hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group">
          Book Strategy Call <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
    </section>

    <section className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((b, i) => (
          <div key={i} className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-2xl p-8 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-5">
              <b.icon className="w-6 h-6 text-emerald-600" />
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

export default AppDevelopment;
