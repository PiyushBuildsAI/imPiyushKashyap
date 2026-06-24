import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Upwork Cursor Developer | Hire Piyush Kashyap",
  description:
    "Freelance developer using Cursor on Upwork for AI-assisted development — building SaaS products, dashboards, and web applications with faster implementation.",
  keywords: [
    "Upwork Cursor Developer",
    "Hire Cursor Developer",
    "Cursor AI Freelancer",
    "Cursor SaaS Developer",
  ],
  openGraph: {
    title: "Upwork Cursor Developer | Piyush Kashyap",
    description:
      "Freelance developer using Cursor on Upwork for AI-assisted development and building SaaS applications.",
    type: "website",
  },
};

const faqs = [
  {
    q: "How does Cursor fit into your development process?",
    a: "I use Cursor for code generation, refactoring, and understanding existing codebases. It's an IDE with AI built in — I can describe what I need and it generates the code, or highlight a function and ask it to explain what's happening. I use it after the architecture is designed, for the implementation phase. It speeds up writing components, API routes, database queries, and test cases.",
  },
  {
    q: "Is Cursor better than using Claude Code directly?",
    a: "They serve different purposes. Cursor is an IDE — I use it when I'm actively writing and editing code, navigating a codebase, and making changes across multiple files. Claude Code is more of a CLI tool — I use it for generating code from specifications, writing tests, and refactoring. I actually use both depending on what I'm doing. Cursor for day-to-day coding, Claude Code for batch generation tasks.",
  },
  {
    q: "Can Cursor build production applications?",
    a: "Cursor accelerates code writing, but production applications need proper architecture, security, error handling, and testing. Cursor doesn't know your business requirements or make design decisions for you. I use Cursor as a faster way to implement designs I've already worked through. The quality of the output depends on the quality of the input — clear requirements and good architecture lead to good results.",
  },
  {
    q: "What do you do when Cursor generates bad code?",
    a: "I review every line. Cursor sometimes generates code that looks right but has subtle issues — wrong imports, missing error handling, or patterns that don't match the rest of the project. When that happens, I either edit the generated code to fix it or rewrite it myself. The generated code is a starting point, not the final answer.",
  },
  {
    q: "Do your clients care what tools you use?",
    a: "Most clients care about the result — does the product work, is it maintainable, does it meet the requirements. They don't usually care whether I used Cursor, Claude Code, or wrote everything by hand. What matters is that the code is clean, the product works, and I can explain and maintain what I built.",
  },
];

const caseStudies = [
  {
    name: "RecallSync",
    challenge:
      "RecallSync needed a Next.js dashboard for viewing recalled lead data, configuring sync rules, and monitoring agent activity — all connected to a GoHighLevel backend with real-time updates.",
    approach:
      "I used Cursor for the dashboard implementation. Once I designed the component structure and data flow, Cursor helped me generate the individual dashboard widgets, table components, and real-time data views. I described what each component should do, Cursor generated the implementation, and I reviewed and adjusted. For the API routes connecting to GoHighLevel, Cursor handled the boilerplate while I focused on the data transformation logic and error handling.",
    outcome:
      "The RecallSync dashboard was built efficiently with clean, maintainable code. Cursor handled the repetitive parts — form components, table layouts, data fetching hooks — while I focused on the integration logic and real-time update patterns.",
    stack: ["Cursor", "Next.js", "LangGraph", "Supabase"],
  },
  {
    name: "IGThreadly",
    challenge:
      "IGThreadly needed a complete SaaS frontend — user dashboard, comment monitoring configuration, DM sequence builder, and analytics views — all connected to a Supabase backend with Instagram API integration.",
    approach:
      "I designed the SaaS architecture first — the user flow, data models, and API structure. Then I used Cursor to implement the frontend. Cursor was particularly useful for the repetitive parts: form components for configuring triggers, table views for displaying DM sequences, and chart components for analytics. I used Cursor's multi-file editing to maintain consistency across related components. The Instagram API integration required careful error handling that I implemented myself after Cursor generated the initial structure.",
    outcome:
      "IGThreadly launched as a complete SaaS with a clean, functional frontend. Cursor saved significant time on component generation and layout work, letting me focus on the API integration and business logic that made the product actually useful.",
    stack: ["Cursor", "Next.js", "Supabase", "Instagram API"],
  },
];

export default function UpworkCursorDeveloperPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Piyush Kashyap",
        jobTitle: "Upwork Cursor Developer",
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
            Upwork Cursor Developer
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            I use Cursor as my primary IDE for building applications. It has AI
            built in, so I can describe what I need and get code generated
            directly in my editor. I've built SaaS products, dashboards, and web
            applications using Cursor, and it's particularly useful for
            component generation, refactoring, and navigating large codebases.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">How I Work with Cursor</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
            <p>
              Cursor is an IDE with AI capabilities built in. I can describe
              what a component should do and it generates the implementation. I
              can highlight code and ask it to refactor, explain, or optimize. I
              can ask it to write tests for a function. It integrates directly
              into the editing workflow, so I don't have to switch between tools.
            </p>
            <p>
              I use Cursor after the architecture is designed. I figure out the
              database schema, API structure, and component hierarchy first. Then
              Cursor helps me implement faster. It's strongest for well-defined
              patterns — form components, table layouts, CRUD operations, API
              routes, and data fetching hooks. For novel business logic or
              complex integration work, I write the code myself and use Cursor's
              editing features to refine it.
            </p>
            <p>
              Cursor's multi-file editing is useful when I need to make
              consistent changes across a codebase — renaming a data model,
              updating an API interface, or refactoring a pattern that's used in
              multiple places. It handles the mechanical part while I make sure
              the changes are correct.
            </p>
            <p className="text-foreground font-medium">
              I design the system. Cursor helps me implement it.
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
