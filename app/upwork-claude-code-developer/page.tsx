import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Upwork Claude Code Developer | Hire Piyush Kashyap",
  description:
    "Freelance developer using Claude Code on Upwork for AI-assisted development — building SaaS products, refactoring codebases, and implementing complex features.",
  keywords: [
    "Upwork Claude Code Developer",
    "Hire Claude Code Developer",
    "Claude Code Freelancer",
    "Claude AI Developer",
  ],
  openGraph: {
    title: "Upwork Claude Code Developer | Piyush Kashyap",
    description:
      "Freelance developer using Claude Code on Upwork for AI-assisted development and building SaaS products.",
    type: "website",
  },
};

const faqs = [
  {
    q: "How does Claude Code fit into your development workflow?",
    a: "I use Claude Code after the architecture is designed. I figure out the database schema, auth flow, and system design first — Claude Code helps me implement faster. It's useful for generating boilerplate, writing tests, implementing CRUD endpoints, and refactoring existing code. But the design decisions — what to build and how the pieces connect — those come before Claude Code touches anything.",
  },
  {
    q: "Can Claude Code build a production application on its own?",
    a: "Not reliably. Claude Code generates code, but production applications need proper architecture, database design, security patterns, error handling, and testing strategy. Without those foundations, you end up with code that looks right but breaks in unexpected ways. I use Claude Code as an implementation accelerator within a structured development process — I set the direction, it helps me get there faster.",
  },
  {
    q: "What kinds of tasks do you use Claude Code for?",
    a: "Boilerplate generation, CRUD endpoints, test writing, code refactoring, and implementing well-defined features. Claude Code is strongest when the requirements are clear and the pattern is established. For novel architecture decisions, complex business logic, or system design, I work through those myself.",
  },
  {
    q: "Do you ever use Claude Code for debugging?",
    a: "Yes. When I'm stuck on a tricky bug, Claude Code can sometimes spot patterns I'm missing. I describe the symptoms, paste the relevant code, and it often suggests things I hadn't considered. It's not always right, but it's a useful second perspective — especially for edge cases in third-party libraries or unfamiliar error messages.",
  },
  {
    q: "What's the risk of using AI-generated code?",
    a: "The main risk is code that compiles and runs but has subtle issues — incorrect error handling, missing edge cases, or architectural decisions that make the codebase harder to maintain. I review every line Claude Code generates, test the behavior, and make sure it fits the overall architecture. The code is a starting point, not the final answer.",
  },
];

const caseStudies = [
  {
    name: "RecallSync",
    challenge:
      "RecallSync needed a LangGraph orchestration layer to manage multi-step agent workflows — pulling lead data, cross-referencing sources, and syncing records back into GoHighLevel. The Python code needed to be clean, testable, and maintainable.",
    approach:
      "I designed the agent architecture first — the decision tree, data flow, and tool integrations. Then I used Claude Code to implement the LangGraph nodes, Ollama integration, and GoHighLevel API client. Claude Code handled the boilerplate and well-defined patterns while I focused on the orchestration logic and error handling. For the GoHighLevel API integration specifically, Claude Code generated the initial client code, which I then refined with proper rate limiting and retry logic.",
    outcome:
      "RecallSync's agent layer was built in a fraction of the time it would have taken writing everything by hand. The code is clean, well-tested, and handles edge cases I specifically reviewed for. Claude Code saved time on implementation without sacrificing quality on the architecture.",
    stack: ["Claude Code", "LangGraph", "Ollama", "GoHighLevel"],
  },
  {
    name: "FusionSyncAI",
    challenge:
      "FusionSyncAI needed Next.js API routes for message queuing, lead qualification logic, and real-time conversation management — all wired up to Instagram's API and a Supabase backend. The implementation needed to handle hundreds of concurrent conversations reliably.",
    approach:
      "I designed the API architecture — routes for incoming webhooks, message queuing, lead scoring, and conversation state management. Then I used Claude Code to implement the API routes, queue logic, and Supabase queries. Claude Code was particularly useful for the repetitive parts — CRUD operations, webhook handlers, and data validation schemas. I spent my time on the qualification logic, rate limiting strategy, and error recovery patterns.",
    outcome:
      "FusionSyncAI's API layer was implemented quickly and handles the concurrent load reliably. Claude Code handled the boilerplate, I handled the business logic, and the result is a clean separation between routine code and the parts that required careful thought.",
    stack: ["Claude Code", "Next.js", "Supabase", "Instagram API"],
  },
];

export default function UpworkClaudeCodeDeveloperPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Piyush Kashyap",
        jobTitle: "Upwork Claude Code Developer",
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
            Upwork Claude Code Developer
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            I use Claude Code as a development tool — it helps me implement
            faster, but I don't let it make the design decisions. I've built SaaS
            products, AI agents, and automation systems using Claude Code as part
            of my workflow, and I've learned where it's strong, where it's weak,
            and how to use it without creating problems downstream.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">How I Work with Claude Code</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
            <p>
              Claude Code fits into my workflow after the architecture is
              designed. I start every project by figuring out the database schema,
              authentication flow, API structure, and how the pieces connect.
              These decisions require understanding the business requirements and
              making trade-offs that Claude Code can't make for me.
            </p>
            <p>
              Once the design is locked in, Claude Code helps me implement faster.
              It's good at generating boilerplate, writing CRUD endpoints,
              creating test cases, and implementing patterns that are already
              established in the project. I can describe what a component should
              do and it generates the implementation, which I then review and
              adjust.
            </p>
            <p>
              Claude Code is also useful for refactoring. When I need to
              restructure existing code, Claude Code can suggest the changes and
              I evaluate whether they make sense. For debugging, it sometimes
              spots patterns I'm missing — especially for edge cases or
              unfamiliar error messages.
            </p>
            <p className="text-foreground font-medium">
              I design the system. Claude Code helps me build it.
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
