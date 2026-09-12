import {
  BarChart3,
  Code2,
  Database,
  Globe2,
  Instagram,
  Map,
  MessageCircle,
  Mic,
  MonitorSmartphone,
  Radio,
  Search,
  Sparkles,
  Stethoscope,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ProjectCard = {
  number: string;
  name: string;
  category: string;
  description: string;
  result: string;
  status: string;
  tags: string[];
  flow: string[];
  icon: LucideIcon;
  layout: string;
  tone: string;
};

export const projectCards: ProjectCard[] = [
  {
    number: "01",
    name: "RecallSync",
    category: "Customer reactivation platform",
    description:
      "A multi-tenant platform that helps real businesses win back dormant customers through coordinated voice, SMS, and email conversations.",
    result:
      "Designed and shipped solo as a live production system, from tenant isolation and agent behavior to cross-channel delivery.",
    status: "Live with real businesses",
    tags: ["Multi-tenant", "Voice", "SMS", "Email", "AI agents"],
    flow: ["Dormant lead", "AI conversation", "Human handoff"],
    icon: Radio,
    layout: "lg:col-span-7",
    tone: "from-lime-300/30 via-brand/10 to-transparent dark:from-lime-300/15",
  },
  {
    number: "02",
    name: "IGThreadly",
    category: "Instagram + WhatsApp automation",
    description:
      "An AI agent that reads Instagram comments, qualifies intent automatically, and moves high-intent conversations to WhatsApp.",
    result:
      "Running today for event and local businesses that need faster, more consistent lead follow-up.",
    status: "Production automation",
    tags: ["Instagram", "WhatsApp", "Lead qualification", "Webhooks"],
    flow: ["New comment", "Intent qualified", "WhatsApp"],
    icon: Instagram,
    layout: "lg:col-span-5",
    tone: "from-fuchsia-300/25 via-pink-300/10 to-transparent dark:from-fuchsia-400/15",
  },
  {
    number: "03",
    name: "GMBFlow",
    category: "Google review automation",
    description:
      "An open-source review workflow for local businesses, with smart routing that makes positive feedback public and keeps recovery conversations private.",
    result:
      "Built around a practical business outcome: stronger Google presence without losing the chance to resolve poor experiences.",
    status: "Open source + in use",
    tags: ["Review routing", "Local business", "Automation", "Open source"],
    flow: ["Customer visit", "Smart routing", "Review growth"],
    icon: Sparkles,
    layout: "lg:col-span-5",
    tone: "from-sky-300/30 via-cyan-300/10 to-transparent dark:from-sky-400/15",
  },
  {
    number: "04",
    name: "Companion Apps",
    category: "iOS + Android product delivery",
    description:
      "Cross-platform mobile companions for FusionSync products, extending the same workflows from web to iOS and Android through one shared codebase.",
    result:
      "One product experience across three platforms, owned by one developer from architecture through release.",
    status: "Shipped on mobile",
    tags: ["iOS", "Android", "Shared codebase", "Product systems"],
    flow: ["Core platform", "Shared product layer", "iOS + Android"],
    icon: MonitorSmartphone,
    layout: "lg:col-span-7",
    tone: "from-violet-300/25 via-indigo-300/10 to-transparent dark:from-violet-400/15",
  },
  {
    number: "05",
    name: "TravelBTA",
    category: "AI travel chatbot + itinerary CMS",
    description:
      "An AI-powered chatbot for travel companies that handles customer queries, generates personalized itineraries, and manages travel content through a full-featured CMS built for the travel industry.",
    result:
      "End-to-end travel automation—from conversational booking to dynamic itinerary generation, all managed from one CMS.",
    status: "Production ready",
    tags: ["Travel", "AI chatbot", "Itinerary generation", "CMS", "LangChain"],
    flow: ["Customer query", "AI itinerary builder", "CMS management"],
    icon: Map,
    layout: "lg:col-span-5",
    tone: "from-emerald-300/25 via-teal-300/10 to-transparent dark:from-emerald-400/15",
  },
  {
    number: "06",
    name: "RAG Chatbots",
    category: "Knowledge base AI for companies",
    description:
      "Retrieval-Augmented Generation chatbots built with LangChain that connect to company knowledge bases, documentation, and internal data to deliver accurate, context-aware answers.",
    result:
      "Companies get a trained AI assistant that understands their business, not a generic chatbot guessing from thin air.",
    status: "Deployed for clients",
    tags: ["RAG", "LangChain", "Knowledge base", "Vector DB", "Embeddings"],
    flow: ["Company docs", "Vector store", "Accurate answers"],
    icon: Database,
    layout: "lg:col-span-7",
    tone: "from-amber-300/25 via-orange-300/10 to-transparent dark:from-amber-400/15",
  },
  {
    number: "07",
    name: "FusionSync.ai",
    category: "Business platform + company page",
    description:
      "The central business platform for FusionSync—handling company presence, service delivery, client management, and the public-facing product ecosystem.",
    result:
      "A unified business hub connecting all products, services, and client interactions under one roof.",
    status: "Live platform",
    tags: ["Business platform", "SaaS", "Client management", "Multi-product"],
    flow: ["Business logic", "Product layer", "Client delivery"],
    icon: Globe2,
    layout: "lg:col-span-5",
    tone: "from-cyan-300/25 via-blue-300/10 to-transparent dark:from-cyan-400/15",
  },
  {
    number: "08",
    name: "GHL Dashboard",
    category: "Sales dashboard + GoHighLevel integration",
    description:
      "A real-time sales dashboard integrated with GoHighLevel that pulls pipeline data, tracks conversions, and visualizes sales performance across campaigns and automations.",
    result:
      "From raw GHL data to actionable sales insights—live dashboards that show what's actually making money.",
    status: "Live with sales teams",
    tags: ["GoHighLevel", "Sales analytics", "Dashboard", "API integration", "Real-time"],
    flow: ["GHL pipeline", "Data sync", "Sales insights"],
    icon: BarChart3,
    layout: "lg:col-span-7",
    tone: "from-yellow-300/25 via-amber-300/10 to-transparent dark:from-yellow-400/15",
  },
  {
    number: "09",
    name: "DentalBook",
    category: "Dental website + PMS + booking chatbot",
    description:
      "A complete dental practice website with Practice Management System integration and an AI chatbot that handles patient booking, appointment scheduling, and front-desk automation.",
    result:
      "Patients book through chat, the PMS stays synced, and the front desk focuses on care instead of phone tag.",
    status: "Live for practices",
    tags: ["Dental", "PMS integration", "Booking system", "Healthcare AI", "Chatbot"],
    flow: ["Patient inquiry", "AI booking agent", "PMS sync"],
    icon: Stethoscope,
    layout: "lg:col-span-5",
    tone: "from-rose-300/25 via-pink-300/10 to-transparent dark:from-rose-400/15",
  },
  {
    number: "10",
    name: "Business Scrapers",
    category: "AI agents for business listing intelligence",
    description:
      "AI agents that scrape business listings to extract company details—phone numbers, emails, domains—and validate email authenticity, enrich data with GMB, SEO, GEO, and AEO signals.",
    result:
      "Automated lead intelligence: from raw business listings to verified, enriched contact data at scale.",
    status: "Running in production",
    tags: ["Web scraping", "Email validation", "GMB/SEO", "GEO/AEO", "Data enrichment"],
    flow: ["Business listings", "AI extraction", "Verified data"],
    icon: Search,
    layout: "lg:col-span-5",
    tone: "from-orange-300/25 via-red-300/10 to-transparent dark:from-orange-400/15",
  },
  {
    number: "11",
    name: "VoiceBot",
    category: "AI voice calling + cold outreach",
    description:
      "An AI voice call chatbot that handles cold calling, follow-up sequences, and call audits—conversational voice agents that qualify leads and book meetings without human intervention.",
    result:
      "Cold calling at scale with AI that sounds natural, follows up persistently, and logs everything for audit.",
    status: "Active for sales teams",
    tags: ["Voice AI", "Cold calling", "Follow-ups", "Call audit", "Telephony"],
    flow: ["Lead list", "AI voice call", "Audit & follow-up"],
    icon: Mic,
    layout: "lg:col-span-7",
    tone: "from-red-300/25 via-rose-300/10 to-transparent dark:from-red-400/15",
  },
  {
    number: "12",
    name: "OmniChannel Chatbots",
    category: "WhatsApp + Instagram + Discord integrations",
    description:
      "Multi-platform chatbot deployments across WhatsApp, Instagram, and Discord—each with platform-specific integrations, webhook handling, and unified conversation management.",
    result:
      "One bot engine, every platform. Customers reach you where they are, and you never miss a message.",
    status: "Live across platforms",
    tags: ["WhatsApp", "Instagram", "Discord", "Multi-platform", "Webhooks"],
    flow: ["Platform message", "Unified engine", "Smart response"],
    icon: MessageCircle,
    layout: "lg:col-span-5",
    tone: "from-teal-300/25 via-emerald-300/10 to-transparent dark:from-teal-400/15",
  },
  {
    number: "13",
    name: "FlowBuilder",
    category: "Chatbot flows + voice flows + prompt engineering",
    description:
      "Visual chatbot flow design and voice flow architecture—prompt-base systems where conversation logic, branching, and AI behavior are configured through structured flows rather than hardcoded paths.",
    result:
      "Non-technical teams can redesign conversations, test prompts, and iterate on AI behavior without touching code.",
    status: "Internal tooling + client delivery",
    tags: ["Flow design", "Prompt engineering", "Voice flows", "No-code", "Conversation AI"],
    flow: ["Flow design", "Prompt config", "Live deployment"],
    icon: Workflow,
    layout: "lg:col-span-7",
    tone: "from-purple-300/25 via-violet-300/10 to-transparent dark:from-purple-400/15",
  },
  {
    number: "14",
    name: "DevOps Pipeline",
    category: "CLI tools + hosting + GitHub Actions",
    description:
      "Custom CLI development, web hosting infrastructure, server management, and GitHub Actions CI/CD pipelines—the automation layer that keeps everything deployed, tested, and running.",
    result:
      "From code push to production: automated builds, tests, deployments, and infrastructure that scales.",
    status: "Active infrastructure",
    tags: ["CLI", "GitHub Actions", "CI/CD", "Web hosting", "Server management"],
    flow: ["Code push", "CI/CD pipeline", "Live deployment"],
    icon: Code2,
    layout: "lg:col-span-5",
    tone: "from-slate-300/25 via-zinc-300/10 to-transparent dark:from-slate-400/15",
  },
];
