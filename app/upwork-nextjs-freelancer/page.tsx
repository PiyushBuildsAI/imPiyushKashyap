import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Upwork Next.js Developer | Hire Piyush Kashyap",
  description:
    "Freelance Next.js developer building SaaS products, AI platforms, and web applications on Upwork. App Router, TypeScript, Supabase, and modern React patterns.",
  keywords: [
    "Upwork Next.js Developer",
    "Hire Next.js Developer",
    "Next.js Freelancer",
    "Next.js SaaS Developer",
  ],
  openGraph: {
    title: "Upwork Next.js Developer | Piyush Kashyap",
    description:
      "Freelance Next.js developer building SaaS products, AI platforms, and web applications.",
    type: "website",
  },
};

const faqs = [
  {
    q: "Why do you use Next.js instead of plain React or other frameworks?",
    a: "Next.js gives me server-side rendering, static generation, API routes, and optimized performance without bolting on a dozen extra packages. The App Router with server components means I can keep most of my data fetching on the server, which makes the app faster and the code simpler. For SaaS products that need good SEO and fast page loads, it's the most practical choice right now.",
  },
  {
    q: "What does a typical Next.js project look like?",
    a: "I start with the database schema and auth flow, then build the frontend with the App Router. I use server components for data-heavy pages and client components only where interactivity is needed. API routes handle server-side logic. I use TypeScript throughout and Tailwind for styling. The result is a fast, maintainable codebase that doesn't rely on client-side rendering for everything.",
  },
  {
    q: "Do you use the App Router or Pages Router?",
    a: "App Router exclusively. It handles layouts, loading states, and error boundaries more naturally. Server components reduce the amount of JavaScript sent to the client, which directly improves performance. I haven't started a new project with Pages Router in over a year.",
  },
  {
    q: "Can you migrate an existing app to Next.js?",
    a: "Yes. I've migrated React SPAs, Vue apps, and even WordPress frontends to Next.js. The main benefits are usually better SEO, faster initial page loads, and a cleaner project structure. I assess what's worth keeping, rewrite what needs changing, and make sure the migration doesn't break existing functionality.",
  },
  {
    q: "What's your approach to performance optimization?",
    a: "I focus on the basics first: server components to reduce client JavaScript, proper image optimization with next/image, font optimization, and streaming where it makes sense. I also make sure the database queries are efficient — a fast framework doesn't help if the queries are slow. I use Supabase's query builder and add indexes based on actual usage patterns.",
  },
];

const caseStudies = [
  {
    name: "RecallSync",
    challenge:
      "GoHighLevel users needed a way to automatically recall and sync lead data across CRM workflows, but the existing tools required manual lookups every time.",
    approach:
      "I built the Next.js frontend for RecallSync — a dashboard where users can view recalled data, configure sync rules, and monitor agent activity. The App Router handles the dashboard layout with server components for data loading, keeping the client bundle small. API routes manage the communication between the frontend and the LangGraph orchestration layer running in Python.",
    outcome:
      "RecallSync eliminated manual data lookups entirely. The dashboard loads fast, syncs update in real time, and users can see exactly what the agent is doing at any point.",
    stack: ["Next.js", "GoHighLevel", "LangGraph", "Ollama"],
  },
  {
    name: "FusionSyncAI",
    challenge:
      "Nightlife venues and real estate firms needed to manage automated Instagram DM conversations at scale, with visibility into what was happening.",
    approach:
      "I built the Next.js dashboard and API routes for FusionSyncAI. The dashboard shows live conversation feeds, lead qualification status, and response analytics. API routes handle message queuing, lead tracking, and webhook processing from Instagram. I used server components for the analytics pages and client components for the real-time conversation view.",
    outcome:
      "FusionSyncAI gave clients full visibility into their automated conversations. The dashboard shows response times, qualification rates, and conversion metrics — all updating in real time.",
    stack: ["Next.js", "Instagram API", "Supabase", "OpenAI"],
  },
  {
    name: "IGThreadly",
    challenge:
      "Creators wanted a simple SaaS product to turn Instagram comments into DM conversations, but building and hosting it themselves was out of scope.",
    approach:
      "I built the entire IGThreadly application in Next.js — the user dashboard, comment monitoring configuration, DM sequence builder, and analytics views. The App Router made it easy to structure the SaaS with separate layouts for marketing pages and the authenticated dashboard. Server actions handle the Instagram API calls and sequence triggers.",
    outcome:
      "IGThreadly launched as a fully functional SaaS. Creators sign up, connect their Instagram account, configure their triggers, and the system handles comment-to-DM conversion automatically.",
    stack: ["Next.js", "Supabase", "Instagram API", "n8n"],
  },
];

export default function UpworkNextjsFreelancerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Piyush Kashyap",
        jobTitle: "Upwork Next.js Developer",
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
            Upwork Next.js Developer
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            I use Next.js for most of the projects I build. It handles the
            server-side rendering, API routes, and performance optimization
            without requiring a bunch of extra setup. I work with the App Router,
            server components, TypeScript, and Tailwind — and I use these tools
            because they make the products I build faster and easier to maintain.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Why Next.js</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
            <p>
              Next.js solves the problems that come up in almost every web
              application. Server-side rendering means your pages load fast and
              are visible to search engines. Static generation lets me pre-build
              pages that don't change often. API routes mean I can handle
              server-side logic without spinning up a separate backend service.
            </p>
            <p>
              With the App Router and server components, I can keep most of the
              data fetching on the server. This means less JavaScript shipped to
              the browser, faster page loads, and a simpler mental model for how
              data flows through the application. I use TypeScript because it
              catches errors before they reach production, and Tailwind because
              it keeps styling consistent without writing custom CSS for every
              component.
            </p>
            <p>
              The practical benefit is that I can build a full-stack SaaS with
              authentication, payments, dashboards, and AI integrations using one
              framework instead of stitching together three or four separate
              tools.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">What I Build with Next.js</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {[
              "AI SaaS Platforms",
              "Startup MVPs",
              "Internal Dashboards",
              "E-commerce Applications",
              "AI-Powered Web Apps",
              "Multi-Tenant Systems",
            ].map((item) => (
              <Card key={item}>
                <CardContent className="flex items-center gap-3 p-4">
                  <span className="text-primary">✔</span>
                  <span>{item}</span>
                </CardContent>
              </Card>
            ))}
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
