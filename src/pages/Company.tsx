import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GridBackground from "@/components/features/story/GridBackground";

const Company = () => (
  <div className="min-h-screen bg-background relative overflow-hidden">
    <Header />
    <GridBackground theme="neutral" />
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto px-6 md:px-12 text-center">
      <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
        Company
      </span>
      <h1 className="font-serif text-5xl md:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-6">
        The team behind the <span className="italic text-slate-400">machine.</span>
      </h1>
      <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
        We're builders, operators, and AI engineers on a mission to automate growth for India's most ambitious companies.
      </p>
      <Link to="/">
        <Button variant="outline" className="rounded-full gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Button>
      </Link>
    </main>
    <Footer />
  </div>
);

export default Company;
