import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Briefcase,
  CheckCircle2,
  Code2,
  Database,
  Github,
  Globe2,
  GraduationCap,
  Instagram,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  Phone,
  Radio,
  Server,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { FaUpwork } from "react-icons/fa6";

const projectCards: Array<{
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
}> = [
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
];

const capabilities: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
  className: string;
}> = [
  {
    title: "AI agents that handle the messy parts",
    description:
      "Prompt design, orchestration, guardrails, failure handling, and human handoff—built for real conversations rather than polished demos.",
    icon: BrainCircuit,
    className: "md:col-span-2 lg:col-span-7",
  },
  {
    title: "Product engineering",
    description:
      "Full-stack SaaS, multi-tenant architecture, authentication, adaptive dashboards, APIs, deployment, and ongoing operation.",
    icon: Layers3,
    className: "lg:col-span-5",
  },
  {
    title: "Cross-channel automation",
    description:
      "Instagram, WhatsApp, SMS, voice, and email connected to GoHighLevel or a custom CRM as one coherent workflow.",
    icon: Workflow,
    className: "lg:col-span-5",
  },
  {
    title: "Architecture before complexity",
    description:
      "Research first, then the simplest reliable system that protects quality while keeping infrastructure and tooling costs lean.",
    icon: Server,
    className: "md:col-span-2 lg:col-span-7",
  },
];

const stack = [
  "Next.js",
  "TypeScript",
  "OpenAI + LLMs",
  "Supabase",
  "PostgreSQL",
  "n8n",
  "GoHighLevel",
  "Instagram",
  "WhatsApp",
  "Docker",
];

function Eyebrow({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-brand">
        /{index}
      </span>
      <span className="h-px w-8 bg-brand/50" aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}

function HeroSystemVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
      <div
        className="absolute -inset-8 -z-10 rounded-full bg-brand/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="automation-grid relative overflow-hidden rounded-[2rem] border border-border/80 bg-card/90 p-4 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.65)] sm:p-6">
        <div className="mb-8 flex items-center justify-between border-b border-border/70 pb-4">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-red-400" />
            <span className="size-2 rounded-full bg-amber-400" />
            <span className="size-2 rounded-full bg-emerald-400" />
          </div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            agent-orchestrator / live
          </span>
          <span className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
            <span className="status-pulse size-1.5 rounded-full bg-emerald-500" />
            Online
          </span>
        </div>

        <div className="relative mx-auto max-w-md space-y-4">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-semibold shadow-sm">
              <Instagram className="size-3.5 text-fuchsia-500" />
              New customer signal
            </div>
          </div>

          <div className="mx-auto h-8 w-px border-l border-dashed border-brand/60" />

          <div className="relative rounded-2xl border border-brand/30 bg-brand/10 p-4 shadow-[0_0_40px_-20px_var(--brand)] sm:p-5">
            <div
              className="absolute inset-y-3 left-0 w-0.5 rounded-full bg-brand"
              aria-hidden="true"
            />
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground">
                  <BrainCircuit className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold">Qualify &amp; decide</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    Context, intent, routing, and guardrails
                  </p>
                </div>
              </div>
              <span className="rounded-md border border-brand/20 bg-background/70 px-2 py-1 font-mono text-[9px] text-brand">
                0.8s
              </span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-1.5">
              {["Context", "Rules", "LLM"].map((item, index) => (
                <div
                  key={item}
                  className="rounded-lg border border-border/70 bg-background/70 px-2 py-2 text-center"
                >
                  <span className="mb-1 block font-mono text-[8px] text-muted-foreground">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] font-bold">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto h-8 w-px border-l border-dashed border-brand/60" />

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-border bg-background p-3 shadow-sm">
              <MessageCircle className="mb-3 size-4 text-emerald-500" />
              <p className="text-xs font-bold">WhatsApp handoff</p>
              <p className="mt-1 font-mono text-[9px] text-muted-foreground">
                lead_qualified
              </p>
            </div>
            <div className="rounded-xl border border-border bg-background p-3 shadow-sm">
              <Database className="mb-3 size-4 text-sky-500" />
              <p className="text-xs font-bold">CRM updated</p>
              <p className="mt-1 font-mono text-[9px] text-muted-foreground">
                contact_synced
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between border-t border-border/70 pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
          <span>Human handoff ready</span>
          <span>5 channels connected</span>
        </div>
      </div>

      <div className="animate-float absolute -left-5 top-24 hidden items-center gap-2 rounded-xl border border-border bg-background/95 px-3 py-2 text-xs font-bold shadow-xl sm:flex">
        <CheckCircle2 className="size-4 text-emerald-500" />
        Production, not a demo
      </div>
      <div className="animate-float-delayed absolute -bottom-5 right-8 hidden rounded-xl border border-border bg-background/95 px-4 py-3 shadow-xl sm:block">
        <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
          System owner
        </p>
        <p className="mt-1 text-sm font-extrabold">Architecture → deploy</p>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projectCards)[number];
}) {
  const Icon = project.icon;

  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_28px_80px_-42px_rgba(15,23,42,0.6)] sm:p-7 ${project.layout}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-48 bg-gradient-to-b ${project.tone}`}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="mb-10 flex items-start justify-between gap-4">
          <span className="grid size-12 place-items-center rounded-2xl border border-border/70 bg-background/80 shadow-sm backdrop-blur-sm">
            <Icon className="size-5" />
          </span>
          <span className="font-mono text-xs font-bold text-muted-foreground">
            {project.number}
          </span>
        </div>

        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">
            {project.category}
          </p>
          <h3 className="text-3xl font-black tracking-[-0.045em] sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="mb-7 rounded-2xl border border-border/80 bg-background/75 p-3.5">
          <div className="mb-3 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
            <span className="status-pulse size-1.5 rounded-full bg-brand" />
            Live system flow
          </div>
          <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            {project.flow.map((step, index) => (
              <div key={step} className="contents">
                <div className="rounded-xl border border-border bg-card px-3 py-3 text-center text-[11px] font-bold">
                  {step}
                </div>
                {index < project.flow.length - 1 && (
                  <ArrowRight className="mx-auto size-3.5 rotate-90 text-brand sm:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="border-l-2 border-brand pl-4 text-sm font-medium leading-6">
          {project.result}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-bold text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {project.status}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function PortfolioHome() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:px-8">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] shadow-sm backdrop-blur-sm sm:text-xs">
              <span className="status-pulse size-2 rounded-full bg-brand" />
              Building production AI at FusionSync AI
            </div>

            <p className="mb-5 font-mono text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Piyush Kashyap / Mohali · Chandigarh
            </p>

            <h1 className="max-w-4xl text-[clamp(3.6rem,8vw,7.35rem)] font-black leading-[0.88] tracking-[-0.075em]">
              I build AI
              <span className="relative ml-[0.16em] inline-block text-brand">
                products
                <svg
                  className="absolute -bottom-2 left-0 w-full text-brand/45"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 9C77 1 183 1 298 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              that do real work.
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              Full-stack developer designing and shipping SaaS platforms, AI
              agent systems, and cross-channel automations—from the first
              architecture decision to deployment and business results.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand px-6 text-sm font-extrabold text-brand-foreground shadow-[0_14px_35px_-16px_var(--brand)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-16px_var(--brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                See production work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="mailto:piyush.kashyap.in@gmail.com"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card/70 px-6 text-sm font-bold backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-foreground/30 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <Mail className="size-4" />
                Start a conversation
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <p className="text-2xl font-black tracking-tight sm:text-3xl">
                  3+
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Years in tech
                </p>
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight sm:text-3xl">
                  5
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Channels unified
                </p>
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight sm:text-3xl">
                  3
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  Platforms shipped
                </p>
              </div>
            </div>
          </div>

          <HeroSystemVisual />
        </div>
      </section>

      <section
        aria-label="Core technology"
        className="border-y border-border bg-card/45 py-5"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5">
          {stack.map((technology, index) => (
            <div key={technology} className="flex items-center gap-8">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                {technology}
              </span>
              {index < stack.length - 1 && (
                <span
                  className="hidden size-1 rounded-full bg-brand/60 sm:block"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-28 px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Eyebrow index="01">About</Eyebrow>

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                One developer.
                <br />
                <span className="text-muted-foreground">Whole product.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-xl font-semibold leading-8 tracking-tight sm:text-2xl sm:leading-9">
                I like owning the architecture, the AI behind it, and the
                business result it is supposed to deliver.
              </p>
              <div className="grid gap-5 text-sm leading-7 text-muted-foreground sm:grid-cols-2 sm:text-base">
                <p>
                  I work as the sole full-stack developer at FusionSync AI,
                  turning product ideas into production SaaS and agent systems
                  without a team to fall back on.
                </p>
                <p>
                  That means researching first, choosing lean infrastructure,
                  building the full system, handling edge cases, deploying it,
                  and communicating directly with the businesses using it.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[2rem] border border-border bg-card sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Code2,
                title: "End-to-end",
                copy: "Architecture through deployment",
              },
              {
                icon: Bot,
                title: "Production AI",
                copy: "Agents with human handoff",
              },
              {
                icon: ShieldCheck,
                title: "Multi-tenant",
                copy: "Auth and isolation from scratch",
              },
              {
                icon: Globe2,
                title: "Business-aware",
                copy: "Tech translated into outcomes",
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-6 sm:p-7 ${
                    index < 3
                      ? "border-b border-border sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r"
                      : ""
                  }`}
                >
                  <Icon className="mb-6 size-5 text-brand" />
                  <p className="font-extrabold">{item.title}</p>
                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {item.copy}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="work"
        className="scroll-mt-28 border-y border-border bg-muted/35 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 grid items-end gap-8 lg:grid-cols-2">
            <div>
              <Eyebrow index="02">Selected systems</Eyebrow>
              <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
                Built, shipped,
                <br />
                <span className="text-brand">used.</span>
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground lg:justify-self-end sm:text-base">
              These are live systems solving customer reactivation, lead
              capture, reputation growth, and cross-platform access—not
              portfolio concepts.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-12">
            {projectCards.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-28 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow index="03">Experience</Eyebrow>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              Close to the
              <br />
              <span className="text-muted-foreground">code &amp; customer.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
              The job is bigger than delivering features. I work across product
              architecture, AI behavior, deployment, client communication, and
              growth.
            </p>
          </div>

          <div className="relative border-l border-border pl-6 sm:pl-10">
            <span
              className="absolute -left-1.5 top-2 size-3 rounded-full border-2 border-background bg-brand shadow-[0_0_0_5px_color-mix(in_oklab,var(--brand)_18%,transparent)]"
              aria-hidden="true"
            />

            <article className="rounded-[2rem] border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-col justify-between gap-4 border-b border-border pb-6 sm:flex-row sm:items-start">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-brand">
                    <Briefcase className="size-3" />
                    Current role
                  </div>
                  <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                    Solo Full Stack Developer
                    <span className="block text-muted-foreground">
                      &amp; Business Growth Partner
                    </span>
                  </h3>
                  <p className="mt-2 font-bold">FusionSync AI · Chandigarh</p>
                </div>
                <p className="shrink-0 font-mono text-xs font-bold text-muted-foreground">
                  MAY 2024 — PRESENT
                </p>
              </div>

              <ul className="mt-7 space-y-5">
                {[
                  "Own every architecture decision, the full build, and deployment for production AI SaaS platforms.",
                  "Build conversational agents that handle real customer interactions autonomously and hand off to humans when needed.",
                  "Create generative interfaces and dashboards that adapt to the user and business context.",
                  "Connect Instagram, WhatsApp, SMS, voice, and email with GoHighLevel and custom CRMs.",
                  "Work directly with small businesses and startups on client communication, marketing, and lead generation.",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7"
                  >
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>

            <div className="relative mt-6 rounded-2xl border border-border/80 bg-muted/50 p-5 sm:p-6">
              <span
                className="absolute -left-[2.05rem] top-7 size-2.5 rounded-full border-2 border-background bg-muted-foreground sm:-left-[2.95rem]"
                aria-hidden="true"
              />
              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <div>
                  <p className="text-sm font-extrabold">
                    Production hotel booking platform
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Owned the booking-flow design and its supporting backend.
                  </p>
                </div>
                <span className="font-mono text-[10px] font-bold text-muted-foreground">
                  JUN 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="capabilities"
        className="scroll-mt-28 border-y border-border bg-muted/35 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-3xl">
            <Eyebrow index="04">Capabilities</Eyebrow>
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              Systems thinking,
              <br />
              <span className="text-muted-foreground">hands-on execution.</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-12">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <article
                  key={capability.title}
                  className={`group relative min-h-72 overflow-hidden rounded-[2rem] border border-border bg-card p-6 transition-colors hover:border-brand/40 sm:p-8 ${capability.className}`}
                >
                  <div
                    className="absolute -right-16 -top-16 size-56 rounded-full bg-brand/8 blur-2xl transition-transform duration-700 group-hover:scale-125"
                    aria-hidden="true"
                  />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-2xl bg-foreground text-background">
                        <Icon className="size-5" />
                      </span>
                      <span className="font-mono text-[10px] font-bold text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <div className="mt-auto pt-16">
                      <h3 className="max-w-lg text-2xl font-black tracking-[-0.035em] sm:text-3xl">
                        {capability.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Smartphone,
                label: "Platform coverage",
                value: "Web · iOS · Android",
              },
              {
                icon: Zap,
                label: "Automation coverage",
                value: "Social · voice · messaging",
              },
              {
                icon: Database,
                label: "Product foundation",
                value: "Auth · tenants · data",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <Icon className="size-5 shrink-0 text-brand" />
                  <div>
                    <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-extrabold">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Eyebrow index="05">How I build</Eyebrow>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <h2 className="text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              Simple where possible.
              <br />
              <span className="text-brand">Serious where needed.</span>
            </h2>

            <div className="divide-y divide-border border-y border-border">
              {[
                {
                  number: "01",
                  title: "Research the real constraint",
                  copy: "Start with the user, workflow, economics, and failure cases—not a fashionable stack.",
                },
                {
                  number: "02",
                  title: "Design the smallest sound system",
                  copy: "Choose lean infrastructure and clear boundaries that can grow without paying for complexity early.",
                },
                {
                  number: "03",
                  title: "Ship, observe, and own it",
                  copy: "Deploy to real users, monitor what breaks, refine agent behavior, and stay accountable to the outcome.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="group grid gap-4 py-7 sm:grid-cols-[3rem_1fr] sm:gap-6"
                >
                  <span className="font-mono text-xs font-bold text-brand">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-black tracking-tight transition-transform duration-300 group-hover:translate-x-1">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {step.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] border border-border bg-background p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-11 place-items-center rounded-xl bg-brand/10 text-brand">
                <GraduationCap className="size-5" />
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                2025 — 2027
              </span>
            </div>
            <h3 className="mt-10 text-2xl font-black tracking-tight">
              Master of Computer Applications
            </h3>
            <p className="mt-2 text-sm font-semibold text-brand">
              AI &amp; Web Development
            </p>
            <p className="mt-5 text-sm text-muted-foreground">
              Kurukshetra University · In progress
            </p>
          </article>

          <article className="rounded-[2rem] border border-border bg-background p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <span className="grid size-11 place-items-center rounded-xl bg-muted text-muted-foreground">
                <GraduationCap className="size-5" />
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                2022 — 2025
              </span>
            </div>
            <h3 className="mt-10 text-2xl font-black tracking-tight">
              Bachelor of Computer Applications
            </h3>
            <p className="mt-2 text-sm font-semibold text-muted-foreground">
              Himachal Pradesh University
            </p>
            <p className="mt-5 text-sm text-muted-foreground">CGPA · 7.49</p>
          </article>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28 lg:px-8"
      >
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-brand px-6 py-12 text-brand-foreground shadow-[0_30px_100px_-45px_var(--brand)] sm:px-10 sm:py-16 lg:px-16">
          <div
            className="absolute -right-20 -top-32 size-96 rounded-full border-[55px] border-brand-foreground/10"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-24 right-1/3 size-56 rounded-full bg-brand-foreground/8 blur-2xl"
            aria-hidden="true"
          />

          <div className="relative grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] opacity-70">
                Have a real business problem?
              </p>
              <h2 className="mt-5 max-w-4xl text-4xl font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Let&apos;s turn it into a product that works.
              </h2>
            </div>

            <div className="space-y-3">
              <a
                href="mailto:piyush.kashyap.in@gmail.com"
                className="group flex items-center justify-between rounded-2xl bg-brand-foreground px-5 py-4 text-sm font-extrabold text-brand transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-foreground/70"
              >
                Email Piyush
                <ArrowUpRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="tel:+918628897518"
                className="flex items-center justify-between rounded-2xl border border-brand-foreground/25 px-5 py-4 text-sm font-bold transition-colors hover:bg-brand-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-foreground/70"
              >
                +91 86289 77518
                <Phone className="size-4" />
              </a>
              <p className="flex items-center gap-2 px-2 pt-2 text-xs font-semibold opacity-70">
                <MapPin className="size-3.5" />
                Mohali / Chandigarh, India
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-4 pb-24 pt-4 sm:px-6 sm:pb-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-xl font-black tracking-[-0.04em] transition-colors hover:text-brand"
            >
              Piyush Kashyap
            </Link>
            <p className="mt-2 max-w-sm text-xs leading-5 text-muted-foreground">
              Full Stack Developer · AI Products &amp; Business Automation
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://github.com/imPiyushkashyap"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-3.5 text-xs font-bold transition-colors hover:border-foreground/30 hover:bg-muted"
            >
              <Github className="size-4" />
              GitHub
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01aaf78f140ef80cb0"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-3.5 text-xs font-bold transition-colors hover:border-foreground/30 hover:bg-muted"
            >
              <FaUpwork className="size-4" />
              Upwork
            </a>
            <a
              href="mailto:piyush.kashyap.in@gmail.com"
              className="grid size-10 place-items-center rounded-full border border-border transition-colors hover:border-foreground/30 hover:bg-muted"
              aria-label="Email Piyush"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Piyush Kashyap</p>
          <p>Designed around real work, not buzzwords.</p>
        </div>
      </footer>
    </>
  );
}
