/**
 * Service Data Architecture for Autonomex AI
 * Optimized for broad appeal: from local shop owners to enterprise manufacturers.
 * Brand-agnostic, focusing strictly on universally understood business problems.
 */

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export type ServiceId = "ai-agents" | "web-develop" | "mobile-app" | "ai-video";
export type PhaseId = "phase-1" | "phase-2" | "phase-3" | "phase-4";
export type Region = "hubballi" | "dharwad" | "belagavi" | "bengaluru";
export type Language = "en" | "kn" | "hi";

export interface LocalizedString {
  en: string;
  kn?: string;
  hi?: string;
}

export interface PhaseMetric {
  label: string;
  value: string;
  trend?: "up" | "down" | "neutral";
  highlight?: boolean;
}

export interface ServicePhase {
  id: PhaseId;
  tag: string;
  title: string;
  desc: string;
  metrics?: PhaseMetric[];
  visualType?: "3d-dashboard" | "timeline" | "blueprint" | "terminal";
  ctaOverride?: string;
}

export interface Service {
  title: string;
  hook: string;
  tagline?: string;
  description: string;
  keywords: string[];
  phases: ServicePhase[];
  icon?: string;
  estimatedDuration?: string;
  startingPrice?: {
    amount: number;
    currency: string;
    period?: string;
  };
  regionalPricing?: Record<Region, number>;
  caseStudies?: CaseStudy[];
}

export interface CaseStudy {
  companyName: string;
  location: Region;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: string;
  logo?: string;
}

// ============================================================================
// SERVICE DATA (Strict 4-Phase Architecture for 3D Engine Sync)
// ============================================================================

export const serviceData: Record<ServiceId, Service> = {
  "ai-agents": {
    title: "AI Smart Assistants",
    hook: "Software that works like an employee",
    tagline: "Automate your repeated tasks and manual work",
    description:
      "Eliminate manual data entry and repetitive customer questions. Our AI handles your daily routines 24/7 with zero errors.",
    keywords: [
      "business automation",
      "AI assistant",
      "task automation",
      "data entry automation",
      "workflow automation",
    ],
    icon: "/assets/icons/ai-agents.svg",
    estimatedDuration: "2-3 weeks",
    startingPrice: { amount: 15000, currency: "INR", period: "per month" },
    regionalPricing: { hubballi: 15000, dharwad: 15000, belagavi: 18000, bengaluru: 25000 },
    phases: [
      {
        id: "phase-1",
        tag: "01_THE_PROBLEM",
        title: "The trap of manual work",
        desc: "Doing the exact same task every day wastes your time. Whether it is typing data into a system or answering the same questions for customers, manual repetition slows your business down and causes human errors.",
        metrics: [
          { label: "Daily Repeated Tasks", value: "150+", trend: "up", highlight: true },
          { label: "Hours Wasted", value: "4.5hrs", trend: "down", highlight: true },
        ],
        visualType: "terminal",
      },
      {
        id: "phase-2",
        tag: "02_THE_BRIDGE",
        title: "Teaching the AI your rules",
        desc: "We look at the boring tasks you do every day. We connect our AI to your current setup, teaching it your exact business rules so it knows how to do the job perfectly.",
        metrics: [
          { label: "Accuracy", value: "99.9%", trend: "up" },
          { label: "Learning Speed", value: "Instant", trend: "neutral" },
        ],
        visualType: "3d-dashboard",
      },
      {
        id: "phase-3",
        tag: "03_AUTONOMY",
        title: "Total execution, zero effort",
        desc: "The AI takes over entirely. It instantly handles inquiries, updates your records, and finishes the routine work automatically. You get your entire day back to focus on growing your business.",
        metrics: [
          { label: "Manual Work Eliminated", value: "95%", trend: "up", highlight: true },
          { label: "Task Speed", value: "0.1s", trend: "up", highlight: true },
        ],
        visualType: "3d-dashboard",
      },
      {
        id: "phase-4",
        tag: "04_SCALE",
        title: "Doing the work of 100 people",
        desc: "Your business can suddenly handle massive volume. The AI processes a thousand tasks just as easily as one. It never takes a break, never gets tired, and never makes a typo.",
        metrics: [
          { label: "Task Capacity", value: "Infinite", trend: "up" },
          { label: "Error Rate", value: "0%", trend: "down" },
        ],
        visualType: "terminal",
      },
    ],
    caseStudies: [
      {
        companyName: "Dhanush Packaging",
        location: "hubballi",
        industry: "Packaging & Manufacturing",
        challenge: "Massive daily customer inquiries causing severe response delays.",
        solution: "Custom AI agent trained on the company's product catalog and pricing rules.",
        results: [
          "94% of inquiries answered instantly",
          "67% increase in quote conversions",
          "Freed up 4 staff hours daily",
        ],
        testimonial:
          "Our AI handles pricing questions faster than any human could. It's like having extra employees working for free.",
        logo: "/assets/logos/dhanush-packaging.png",
      },
    ],
  },

  "web-develop": {
    title: "Business Websites",
    hook: "Your 24/7 digital storefront",
    tagline: "Convert visitors into customers while you sleep",
    description:
      "A premium digital presence for your business. We build fast, high-converting websites that capture leads and showcase your products.",
    keywords: [
      "business website",
      "manufacturing website design",
      "lead generation website",
      "SEO website",
      "digital storefront",
    ],
    icon: "/assets/icons/web-develop.svg",
    estimatedDuration: "3-4 weeks",
    startingPrice: { amount: 35000, currency: "INR" },
    regionalPricing: { hubballi: 35000, dharwad: 35000, belagavi: 42000, bengaluru: 60000 },
    phases: [
      {
        id: "phase-1",
        tag: "01_THE_PROBLEM",
        title: "Invisible to modern buyers",
        desc: "Relying purely on word-of-mouth is dangerous. If a buyer searches online for your service and finds your competitor's website instead, you lose the deal instantly. Your reputation doesn't matter if they can't find you.",
        metrics: [
          { label: "Buyers Searching Online", value: "87%", highlight: true },
          { label: "Without Website", value: "Lost Lead", trend: "down" },
        ],
        visualType: "blueprint",
        ctaOverride: "Get Found Online",
      },
      {
        id: "phase-2",
        tag: "02_THE_BRIDGE",
        title: "Engineering conversion machines",
        desc: "We don't just build pretty pages. We engineer clear, professional digital storefronts. Every element is logically optimized to turn everyday visitors into paying customers.",
        metrics: [
          { label: "Page Load Speed", value: "1.2s", trend: "up" },
          { label: "Mobile Optimized", value: "100%", trend: "neutral" },
        ],
        visualType: "blueprint",
      },
      {
        id: "phase-3",
        tag: "03_AUTONOMY",
        title: "A scalable 24/7 digital asset",
        desc: "Your website is live, ranking high on search engines, and capturing leads while you sleep. It builds instant trust, displays your products professionally, and establishes true brand authority.",
        metrics: [
          { label: "Monthly Visitors", value: "2,847", trend: "up", highlight: true },
          { label: "Lead Conversion", value: "12.3%", trend: "up", highlight: true },
        ],
        visualType: "blueprint",
        ctaOverride: "Launch Your Website",
      },
      {
        id: "phase-4",
        tag: "04_SCALE",
        title: "Infinite digital expansion",
        desc: "As your business grows, your digital storefront grows. Easily add product catalogs, customer portals, or automated booking systems without ever starting over.",
        metrics: [
          { label: "Server Uptime", value: "99.99%", trend: "up" },
          { label: "Scalability", value: "Infinite", trend: "neutral" },
        ],
        visualType: "blueprint",
      },
    ],
  },

  "mobile-app": {
    title: "Custom Mobile Apps",
    hook: "Your entire business in your pocket",
    tagline: "Real-time control from anywhere in the world",
    description:
      "Custom business dashboards for factory owners and shop managers. Track inventory, monitor operations, and view profits in real-time.",
    keywords: [
      "factory management app",
      "mobile dashboard",
      "inventory tracking app",
      "business operations app",
      "custom software",
    ],
    icon: "/assets/icons/mobile-app.svg",
    estimatedDuration: "4-6 weeks",
    startingPrice: { amount: 50000, currency: "INR" },
    regionalPricing: { hubballi: 50000, dharwad: 50000, belagavi: 60000, bengaluru: 85000 },
    phases: [
      {
        id: "phase-1",
        tag: "01_THE_PROBLEM",
        title: "Drowning in paper and spreadsheets",
        desc: "Tracking inventory, managing workers, or handling deliveries with paper ledgers and manual spreadsheets causes massive data loss and errors. You're guessing, not knowing.",
        metrics: [
          { label: "Data Entry Errors", value: "18%", trend: "down", highlight: true },
          { label: "Manual Hours/Day", value: "3.5hrs", trend: "down" },
        ],
        visualType: "3d-dashboard",
        ctaOverride: "Digitize Your Business",
      },
      {
        id: "phase-2",
        tag: "02_THE_BRIDGE",
        title: "Building your digital command center",
        desc: "We design a custom, easy-to-use application tailored specifically to how your business operates. Track stock, monitor production, and manage tasks exactly the way you want.",
        metrics: [
          { label: "Custom Features", value: "12", trend: "neutral" },
          { label: "Offline Mode", value: "Yes", trend: "up" },
        ],
        visualType: "3d-dashboard",
      },
      {
        id: "phase-3",
        tag: "03_AUTONOMY",
        title: "Total operational control",
        desc: "Check stock levels, monitor staff activities, and view daily profits from your phone anywhere in the world. Your business operations are finally digitized, secure, and under your control.",
        metrics: [
          { label: "Real-time Updates", value: "< 2s", trend: "up", highlight: true },
          { label: "Error Reduction", value: "94%", trend: "up", highlight: true },
        ],
        visualType: "3d-dashboard",
        ctaOverride: "Build Your App",
      },
      {
        id: "phase-4",
        tag: "04_SCALE",
        title: "Seamless Ecosystem Integration",
        desc: "Connect your new mobile app directly to your existing accounting software and logistics networks. A unified digital ecosystem that scales across multiple branches effortlessly.",
        metrics: [
          { label: "System Integrations", value: "15+", trend: "up" },
          { label: "Cross-Platform", value: "Native", trend: "neutral" },
        ],
        visualType: "3d-dashboard",
      },
    ],
  },

  "ai-video": {
    title: "Video Ads & Marketing",
    hook: "Promotions that actually sell",
    tagline: "AI-powered video creation at a fraction of the cost",
    description:
      "High-performance video marketing. We use AI to generate scripts, voiceovers, and premium edits to drive massive reach and ROI for your business.",
    keywords: [
      "video marketing",
      "AI video ads",
      "social media marketing",
      "digital advertising",
      "performance marketing",
    ],
    icon: "/assets/icons/ai-video.svg",
    estimatedDuration: "1-2 weeks",
    startingPrice: { amount: 12000, currency: "INR", period: "per video" },
    regionalPricing: { hubballi: 12000, dharwad: 12000, belagavi: 15000, bengaluru: 20000 },
    phases: [
      {
        id: "phase-1",
        tag: "01_THE_PROBLEM",
        title: "Great products, zero attention",
        desc: "You have the best quality products or services in town, but nobody knows about them. Standard text advertisements get ignored, leaving you completely invisible in a noisy market.",
        metrics: [
          { label: "Traditional Ad Clicks", value: "0.9%", trend: "down", highlight: true },
          { label: "Video Ad Clicks", value: "4.7%", trend: "up", highlight: true },
        ],
        visualType: "timeline",
        ctaOverride: "Get Noticed",
      },
      {
        id: "phase-2",
        tag: "02_THE_BRIDGE",
        title: "AI-powered creative engineering",
        desc: "We use advanced AI tools to write compelling scripts, generate professional voiceovers, and edit high-quality commercial videos—all without the need for expensive film crews.",
        metrics: [
          { label: "Production Time", value: "3 days", trend: "up" },
          { label: "Cost vs Traditional", value: "90% less", trend: "up" },
        ],
        visualType: "timeline",
      },
      {
        id: "phase-3",
        tag: "03_AUTONOMY",
        title: "Massive reach and proven ROI",
        desc: "Your videos are deployed across top social media and video platforms. They instantly grab attention, clearly explain your value, and drive targeted buyers directly to your business.",
        metrics: [
          { label: "Average Return", value: "5.2x", trend: "up", highlight: true },
          { label: "Total Reach", value: "48K+", trend: "up", highlight: true },
        ],
        visualType: "timeline",
        ctaOverride: "Start Video Campaign",
      },
      {
        id: "phase-4",
        tag: "04_SCALE",
        title: "Omnipresent Brand Domination",
        desc: "We continuously test multiple variations of your videos to find the winning message, then scale it aggressively. Your brand becomes unavoidable to your target customers.",
        metrics: [
          { label: "Platform Coverage", value: "360°", trend: "neutral" },
          { label: "Ad Variations", value: "50+", trend: "up" },
        ],
        visualType: "timeline",
      },
    ],
  },
};

// ============================================================================
// HELPER FUNCTIONS (10x ENTERPRISE ROUTING ALIASES)
// ============================================================================

// If a button accidentally uses the wrong URL name, this maps it to the correct database ID!
export const serviceAliases: Record<string, ServiceId> = {
  "web-development": "web-develop",
  "app-development": "mobile-app",
  "custom-mobile-apps": "mobile-app",
  "video-ads": "ai-video",
  "ai-agent": "ai-agents",
};

/**
 * Enterprise URL Resolver: Converts ANY URL string into a valid ServiceId
 */
export const resolveServiceId = (slug?: string): ServiceId | null => {
  if (!slug) return null;
  const normalized = slug.toLowerCase();

  // If it's already a perfect match
  if (normalized in serviceData) return normalized as ServiceId;

  // If it's an alias (e.g. "web-development" -> "web-develop")
  if (normalized in serviceAliases) return serviceAliases[normalized];

  return null;
};

export const getService = (serviceId: ServiceId): Service | undefined => {
  return serviceData[serviceId];
};

export const getAllServiceIds = (): ServiceId[] => {
  return Object.keys(serviceData) as ServiceId[];
};

export const getServicesByCategory = (category: "automation" | "digital" | "marketing"): Service[] => {
  const categoryMap: Record<string, ServiceId[]> = {
    automation: ["ai-agents", "mobile-app"],
    digital: ["web-develop", "mobile-app"],
    marketing: ["ai-video", "web-develop"],
  };
  return (categoryMap[category] || []).map((id) => serviceData[id]).filter(Boolean);
};

export const getRegionalPrice = (serviceId: ServiceId, region: Region): number | undefined => {
  const service = serviceData[serviceId];
  return service?.regionalPricing?.[region] || service?.startingPrice?.amount;
};

export const formatPrice = (amount: number, currency: string = "INR"): string => {
  if (currency === "INR") {
    return `₹${amount.toLocaleString("en-IN")}`;
  }
  return `${currency} ${amount.toLocaleString()}`;
};

export const getServiceSEO = (serviceId: ServiceId) => {
  const service = serviceData[serviceId];
  if (!service) return null;

  return {
    title: `${service.title} - ${service.tagline} | Autonomex AI`,
    description: service.description,
    keywords: service.keywords.join(", "),
    ogTitle: service.title,
    ogDescription: service.hook,
  };
};

export default serviceData;
