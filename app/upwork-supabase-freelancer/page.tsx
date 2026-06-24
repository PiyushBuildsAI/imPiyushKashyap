import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Upwork Supabase Freelancer | Hire Piyush Kashyap",
  description:
    "Freelance Supabase developer building SaaS applications with PostgreSQL, authentication, real-time subscriptions, and edge functions on Upwork.",
  keywords: [
    "Upwork Supabase Freelancer",
    "Hire Supabase Developer",
    "Supabase Freelancer",
    "Supabase SaaS Developer",
  ],
  openGraph: {
    title: "Upwork Supabase Freelancer | Piyush Kashyap",
    description:
      "Freelance Supabase developer building SaaS applications with PostgreSQL, authentication, and real-time subscriptions.",
    type: "website",
  },
};

const faqs = [
  {
    q: "Why do you use Supabase instead of building a custom backend?",
    a: "Supabase gives me a PostgreSQL database, authentication, real-time subscriptions, and storage out of the box. I still write custom logic when needed through Edge Functions, but I don't have to build and maintain user auth, session management, or basic CRUD endpoints from scratch. For SaaS products, this saves weeks of work on the backend.",
  },
  {
    q: "How do you handle complex database requirements in Supabase?",
    a: "I design the schema with proper relationships, constraints, and indexes from the start. I use Row Level Security policies to control data access at the database level rather than relying only on application code. For complex queries, I write PostgreSQL functions and use Supabase's RPC calls. When something needs to run in the background, I use Edge Functions or pg_cron.",
  },
  {
    q: "Can you migrate from Firebase to Supabase?",
    a: "Yes. I've migrated projects from Firebase to Supabase. The main differences are that Supabase uses PostgreSQL instead of NoSQL, which means you get proper relational queries, joins, and aggregations. Real-time subscriptions work similarly. I map out the existing data structure, design the PostgreSQL schema, write the migration scripts, and update the API calls.",
  },
  {
    q: "What Supabase features do you use most?",
    a: "Row Level Security for multi-tenant data isolation, real-time subscriptions for live updates, Edge Functions for server-side logic, Auth with social providers for user management, and Storage for file uploads. I also use pg_cron for scheduled tasks and PostgreSQL functions for complex queries that need to run efficiently.",
  },
  {
    q: "How do you handle Supabase in production?",
    a: "I set up proper RLS policies from day one, not as an afterthought. I index the columns that get queried most. I use connection pooling for serverless environments. I set up database backups and monitoring. And I design the schema so it can evolve without breaking existing data.",
  },
];

const caseStudies = [
  {
    name: "RecallSync",
    challenge:
      "GoHighLevel users needed a backend that could store lead data from multiple sources, handle real-time sync updates, and isolate data between different accounts — all without building infrastructure from scratch.",
    approach:
      "I used Supabase as the core backend. PostgreSQL stores the lead data with proper relational modeling so cross-referencing between sources is straightforward. Row Level Security policies ensure each account only sees its own data. Real-time subscriptions power the live sync dashboard so users see updates as they happen. I designed the schema with proper indexing on the columns that get queried most, which keeps lookup times fast even as data grows.",
    outcome:
      "RecallSync runs entirely on Supabase's backend. Data isolation between accounts is handled at the database level through RLS, real-time updates work reliably, and the system scales without infrastructure management.",
    stack: ["Supabase", "PostgreSQL", "LangGraph", "Ollama"],
  },
  {
    name: "FusionSyncAI",
    challenge:
      "FusionSyncAI needed to store conversation history, track lead qualification status across multiple clients, and process incoming DMs in real time — all while keeping each client's data completely separate.",
    approach:
      "I built the entire data layer on Supabase. Conversation history, lead status, and qualification scores all live in PostgreSQL with RLS policies separating each client's data. Edge Functions handle incoming DM webhooks, process the message through the AI qualification flow, and update the database in real time. Real-time subscriptions let the dashboard show live conversation activity without polling.",
    outcome:
      "FusionSyncAI processes hundreds of concurrent DMs through Supabase's backend. Each client sees only their own data, conversations update in real time, and the system handles the load without custom server infrastructure.",
    stack: ["Supabase", "Instagram API", "Edge Functions", "OpenAI"],
  },
  {
    name: "IGThreadly",
    challenge:
      "IGThreadly needed a multi-tenant backend where each user has their own Instagram account connected, their own DM sequences, and their own analytics — all running on the same platform.",
    approach:
      "I designed the entire data architecture around Supabase. User accounts, Instagram connections, DM sequences, comment triggers, and analytics all live in PostgreSQL. RLS ensures users only access their own data. Real-time subscriptions power the live comment monitoring feature — when a new comment matches a trigger, the system responds within seconds. I used database functions for the analytics aggregation so it runs efficiently even with large datasets.",
    outcome:
      "IGThreadly runs as a multi-tenant SaaS on Supabase. Users sign up, connect their Instagram account, configure their sequences, and the system handles everything from comment detection to DM delivery — all with proper data isolation between accounts.",
    stack: ["Supabase", "Next.js", "Instagram API", "n8n"],
  },
];

export default function UpworkSupabaseFreelancerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Piyush Kashyap",
        jobTitle: "Upwork Supabase Freelancer",
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
            Upwork Supabase Freelancer
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            I use Supabase as the backend for most SaaS products I build. It
            gives me a PostgreSQL database, authentication, real-time
            subscriptions, and storage without having to build and maintain all
            of that from scratch. I've used it in production for multi-tenant
            platforms, AI-powered products, and automation systems.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Supabase Expertise</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
            <p>
              Most of the Supabase work I do falls into a few categories.
              Database design — I plan the schema with proper relationships,
              constraints, and indexes before writing any application code. Row
              Level Security — I set up RLS policies so each user or tenant only
              accesses their own data, enforced at the database level rather than
              relying solely on application code.
            </p>
            <p>
              Real-time subscriptions — I use these for live dashboards, activity
              feeds, and collaborative features where users need to see updates
              without refreshing. Edge Functions — for server-side logic that
              doesn't belong in the frontend, like webhook processing, scheduled
              tasks, or API integrations. Auth — I set up social providers, magic
              links, and session management using Supabase Auth.
            </p>
            <p>
              I also handle the production concerns: connection pooling for
              serverless environments, proper indexing for performance, database
              backups, and schema migrations that don't break existing data.
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
