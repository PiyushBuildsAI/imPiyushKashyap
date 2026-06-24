import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Upwork AI SaaS Freelancer | Hire Piyush Kashyap",
  description:
    "Freelance developer building AI SaaS products on Upwork — subscription platforms, automation systems, and AI agents using Next.js, Supabase, and Claude Code.",
  keywords: [
    "Upwork AI SaaS Freelancer",
    "AI SaaS Developer Upwork",
    "Hire AI Developer Upwork",
    "SaaS MVP Developer",
  ],
  openGraph: {
    title: "Upwork AI SaaS Freelancer | Piyush Kashyap",
    description:
      "Freelance developer building AI SaaS products on Upwork — subscription platforms, automation systems, and AI agents.",
    type: "website",
  },
};

const faqs = [
  {
    q: "What kind of AI SaaS products do you build?",
    a: "I build subscription platforms with AI built in — things like lead qualification tools, content automation, CRM integrations, and custom AI workflows. Every project starts with understanding what the product actually needs to do, then designing the database, auth, and AI layer around that. I use Next.js for the frontend, Supabase for the backend, and integrate OpenAI or Claude depending on what the use case calls for.",
  },
  {
    q: "Why hire a freelancer on Upwork instead of an agency?",
    a: "With a freelancer, you work directly with the person writing the code. No account managers, no handoffs, no miscommunication. Upwork gives you milestone-based payments and a clear project timeline, so you know what you're getting before you pay for it. I've delivered multiple SaaS products through Upwork and the process is straightforward — we scope the work, agree on milestones, and I deliver.",
  },
  {
    q: "How do you handle AI integrations in SaaS products?",
    a: "I start by figuring out what the AI actually needs to do — is it generating content, classifying data, responding to users, or making decisions? Then I pick the right model and build the integration around that. For simple tasks, I use OpenAI's API. For more complex reasoning, I use Claude. For privacy-sensitive workloads, I set up local inference with Ollama. The key is matching the tool to the problem, not using AI for everything.",
  },
  {
    q: "How long does it take to build an AI SaaS MVP?",
    a: "Most MVPs take 2-4 weeks. That includes the database schema, auth, payments, the AI integration, and a clean frontend. If the product needs multiple AI agents or complex automation, it can take 4-6 weeks. I break the work into milestones so you can see progress as we go.",
  },
  {
    q: "Can you take over an existing project that's stuck?",
    a: "Yes. I've taken over multiple projects built with Lovable, Cursor, and other AI tools where the codebase got messy or the product wasn't working as expected. I audit what's there, identify what needs to change, and either refactor or rebuild depending on the state of things.",
  },
];

const caseStudies = [
  {
    name: "RecallSync",
    challenge:
      "GoHighLevel users were spending hours each week manually looking up and syncing lead data across their CRM workflows. The existing tools didn't have a way to automatically recall and reconcile this information — reps had to do it by hand.",
    approach:
      "I built an agentic layer on top of GoHighLevel using LangGraph to orchestrate multi-step reasoning and Ollama for local LLM inference. The agent pulls lead data from multiple sources, cross-references it, and syncs the records back into GoHighLevel — all without manual intervention. I designed the system to run locally so client data never leaves their infrastructure.",
    outcome:
      "RecallSync cut manual data lookups to zero. CRM records stay in sync automatically, and reps can focus on conversations instead of data entry.",
    stack: ["GoHighLevel", "LangGraph", "Ollama", "Python"],
  },
  {
    name: "FusionSyncAI",
    challenge:
      "Nightlife venues and real estate firms were losing leads because their Instagram DMs went unanswered for hours. They needed responses that felt personal, not templated — but couldn't staff someone to reply 24/7.",
    approach:
      "I built an end-to-end DM automation system. When a message comes in, the system qualifies the lead by asking a few contextual questions, checks availability, and responds with context-aware replies. The whole flow runs through Instagram's API with a Supabase backend tracking conversation state and lead status. I designed the prompts to match each client's brand voice.",
    outcome:
      "Response times dropped from several hours to under 30 seconds. The system handles hundreds of concurrent DMs without issues, and clients report higher booking rates from Instagram.",
    stack: ["Instagram API", "Next.js", "Supabase", "OpenAI"],
  },
  {
    name: "IGThreadly",
    challenge:
      "Creators and small businesses were getting engagement on their Instagram posts but had no systematic way to turn those commenters into leads. They were manually checking comments and sending DMs one by one.",
    approach:
      "I built a SaaS platform that monitors Instagram posts for specific keywords or sentiment, then automatically sends personalized DM sequences to commenters. The system tracks which comments triggered which DMs, manages follow-up sequences, and provides analytics on conversion rates. I used Supabase for the data layer with Row Level Security for multi-tenant access.",
    outcome:
      "IGThreadly let creators capture leads from comments at scale without doing any manual outreach. They set up their triggers once and the system runs continuously.",
    stack: ["Next.js", "Supabase", "Instagram API", "n8n"],
  },
];

export default function UpworkAISaaSFreelancerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Piyush Kashyap",
        jobTitle: "Upwork AI SaaS Freelancer",
        url: "https://piyushkashyap.dev",
        sameAs: [
          "https://github.com/imPiyushkashyap",
          "https://www.upwork.com/freelancers/~01aaf78f140ef80cb0",
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-3xl mx-auto px-6 py-24 space-y-16">
        <div className="space-y-6">
          <Link
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Upwork AI SaaS Freelancer
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            I build AI-powered SaaS products — subscription platforms, automation
            systems, and AI agents. I work with founders and businesses who need
            someone to take an idea from concept to a working product, and I do
            it using Next.js, Supabase, and carefully chosen AI tools.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">What I Build</h2>
          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">AI SaaS Platforms</strong> —
              Subscription products with authentication, payments, dashboards,
              and AI integrations. I design the database schema, build the auth
              flow, wire up Stripe, and integrate the AI layer. Every product I
              build is designed to handle real users from day one.
            </p>
            <p>
              <strong className="text-foreground">AI Agents</strong> — I build
              agents that qualify leads, respond to customers, and automate
              workflows. These aren't chatbots — they make decisions, call APIs,
              and take actions based on what they find. I use LangGraph for
              orchestration and connect them to your existing tools.
            </p>
            <p>
              <strong className="text-foreground">Startup MVPs</strong> — I help
              founders validate ideas quickly. I focus on building the core
              functionality first, with a clean architecture that can grow. No
              over-engineering, no unnecessary complexity — just what's needed to
              test the product with real users.
            </p>
            <p>
              <strong className="text-foreground">Automation Systems</strong> —
              n8n workflows, API integrations, CRM sync, WhatsApp and Instagram
              automation. I connect the tools you already use so data flows
              between them without manual work.
            </p>
            <p>
              <strong className="text-foreground">App Rescue</strong> — I take
              over projects that are stuck or broken. If you've been working with
              an AI code generator and the codebase got away from you, I audit
              what's there, fix what's broken, and restructure so you can
              actually maintain it.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Case Studies</h2>
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <Card key={cs.name} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-accent to-muted flex items-center justify-center border-b border-border">
                    <h3 className="text-xl font-bold">{cs.name}</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Challenge
                        </span>
                        <p className="mt-1">{cs.challenge}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Approach
                        </span>
                        <p className="mt-1">{cs.approach}</p>
                      </div>
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Outcome
                        </span>
                        <p className="mt-1">{cs.outcome}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {cs.stack.map((s) => (
                        <Badge key={s} variant="secondary">
                          {s}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                AI Development
              </span>
              <p className="mt-2">Claude Code, Cursor, OpenAI, Anthropic, Ollama</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Frontend
              </span>
              <p className="mt-2">Next.js, React, TypeScript, Tailwind</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Backend
              </span>
              <p className="mt-2">Supabase, PostgreSQL, Node.js, Prisma</p>
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Automation
              </span>
              <p className="mt-2">n8n, Stripe, Webhooks, WhatsApp, Instagram</p>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="space-y-2">
                <h3 className="text-sm font-semibold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-12 border-t border-border">
          <Card className="border-primary/20 bg-gradient-to-br from-accent/50 to-card">
            <CardContent className="py-8 space-y-4">
              <p className="text-muted-foreground">
                Want to work together?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://www.upwork.com/freelancers/~01aaf78f140ef80cb0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  View My Upwork Profile
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01aaf78f140ef80cb0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  Message Me on Upwork
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </article>
    </>
  );
}
