import Header from "@/components/layout/Header";
import HeroSection from "@/components/features/hero/HeroSection";
import VisualStorytelling from "@/components/features/story/VisualStorytelling";
import EcosystemSection from "@/components/features/ecosystem/EcosystemSection";
import CapabilityBlocks from "@/components/features/services/CapabilityBlocks";
import CtaSection from "@/components/features/cta/CtaSection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <VisualStorytelling />
        <section id="services" className="scroll-mt-24">
          <CapabilityBlocks />
        </section>
        <EcosystemSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
