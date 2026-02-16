import { Suspense, useTransition, useEffect, memo } from "react";
import { useParams, Navigate } from "react-router-dom";

// Layout Components
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Lazy-loaded simulation components for code-splitting
import { lazy } from "react";
const SimulationLayout = lazy(() => import("@/components/features/service-simulation/SimulationLayout"));
const SimulationSidebar = lazy(() => import("@/components/features/service-simulation/SimulationSidebar"));
const SimulationCanvas = lazy(() => import("@/components/features/service-simulation/SimulationCanvas"));

import { serviceData } from "@/data/serviceData";

interface ServiceDetailsParams {
  id: string;
}

interface ServiceMetadata {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
}

const serviceMetadata: Record<string, ServiceMetadata> = {
  "ai-agents": {
    title: "AI Smart Assistants - Omnichannel Automation | Autonomex AI Hubballi",
    description:
      "Reduce customer service resolution time from hours to 0.1 seconds. Trusted by 40+ Karnataka manufacturers for WhatsApp, Email automation.",
    keywords: "AI chatbot Karnataka, omnichannel automation Hubballi, WhatsApp business automation Dharwad",
    ogImage: "/assets/og-ai-agents.webp",
  },
  "mobile-app": {
    title: "Custom Mobile Apps - Factory Dashboard | Autonomex AI Dharwad",
    description:
      "Real-time production tracking for packaging & manufacturing units. Eliminate manual data entry errors.",
    keywords: "factory management app Karnataka, mobile dashboard Hubballi, production tracking Belagavi",
    ogImage: "/assets/og-mobile-app.webp",
  },
  "web-develop": {
    title: "Business Websites - Conversion Engine | Autonomex AI Karnataka",
    description: "24/7 lead capture websites for manufacturing & retail. SEO-optimized for North Karnataka buyers.",
    keywords: "business website Hubballi, manufacturing website design Dharwad, lead generation Karnataka",
    ogImage: "/assets/og-web-develop.webp",
  },
  "ai-video": {
    title: "Video Ads & Marketing - Performance ROI | Autonomex AI",
    description: "AI-powered video creation with 5x ROAS. Meta Ads & YouTube campaigns for local manufacturers.",
    keywords: "video marketing Karnataka, AI video ads Hubballi, performance marketing Dharwad",
    ogImage: "/assets/og-ai-video.webp",
  },
};

const SimulationSkeleton = memo(() => (
  <div className="animate-pulse flex h-screen">
    <div className="w-full lg:w-[40%] bg-slate-100 p-8 space-y-6">
      <div className="h-12 bg-slate-200 rounded-lg w-3/4"></div>
      <div className="h-6 bg-slate-200 rounded w-1/2"></div>
      <div className="space-y-4 mt-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-slate-200 rounded-xl"></div>
        ))}
      </div>
    </div>
    <div className="hidden lg:block w-[60%] bg-slate-50">
      <div className="h-full flex items-center justify-center">
        <div className="w-96 h-96 bg-slate-200 rounded-3xl"></div>
      </div>
    </div>
  </div>
));

SimulationSkeleton.displayName = "SimulationSkeleton";

export default function ServiceDetails() {
  const { id } = useParams<Record<string, string>>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [id]);

  useEffect(() => {
    if (id) {
      const meta = serviceMetadata[id] || serviceMetadata["ai-agents"];
      document.title = meta.title;
    }
  }, [id]);

  if (!id) {
    return <Navigate to="/" replace />;
  }

  const serviceKey = id as keyof typeof serviceData;
  const currentService = serviceData[serviceKey];

  if (!currentService) {
    return <Navigate to="/" replace />;
  }

  const metadata = serviceMetadata[id] || serviceMetadata["ai-agents"];

  return (
    <>
      {/* FIX: Removed overflow-hidden from the main container if it existed, 
        and ensured the flex-col layout allows for proper sticky behavior below.
      */}
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col relative">
        <Header />

        <Suspense fallback={<SimulationSkeleton />}>
          <SimulationLayout>
            {/* FIX: The 'sticky' container. 
              Ensure 'h-screen' is used so it fills the viewport and sticks properly.
              Removed generic overflow constraints that break sticky.
            */}
            <div
              className="w-full lg:w-[60%] lg:flex-1 h-[50vh] lg:h-screen sticky top-[60px] lg:top-0 z-30 bg-slate-50 order-1 lg:order-2 border-b lg:border-b-0 border-slate-200"
              style={{ willChange: "transform" }}
            >
              <SimulationCanvas serviceId={id} />
            </div>

            {/* Scrollable Sidebar */}
            <div
              className="w-full lg:w-[40%] xl:w-[35%] min-h-screen border-r border-slate-200/60 relative z-20 bg-[#FDFBF7] order-2 lg:order-1 pt-8 lg:pt-0"
              style={{ willChange: "scroll-position" }}
            >
              <SimulationSidebar serviceData={currentService} serviceId={id} isPending={isPending} />
            </div>
          </SimulationLayout>
        </Suspense>

        <Footer />

        <a
          href="https://wa.me/919876543210?text=Hi%20Autonomex%2C%20interested%20in%20AI%20automation"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 lg:bottom-8 lg:right-8"
          aria-label="Contact via WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </a>
      </div>
    </>
  );
}
