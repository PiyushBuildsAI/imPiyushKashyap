import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Upwork AI Agent Developer | Hire Piyush Kashyap",
  description:
    "Freelance developer building AI agents on Upwork — lead qualification, support automation, sales assistants, and workflow agents using LangGraph, OpenAI, and custom orchestration.",
  keywords: [
    "Upwork AI Agent Developer",
    "Hire AI Agent Developer",
    "AI Agent Freelancer",
    "AI Automation Developer",
  ],
  openGraph: {
    title: "Upwork AI Agent Developer | Piyush Kashyap",
    description:
      "Freelance developer building AI agents for lead qualification, support automation, and workflow automation.",
    type: "website",
  },
};

const faqs = [
  {
    q: "What do AI agents actually do in a business context?",
    a: "AI agents are systems that observe data, make decisions, and take actions — without a human triggering each step. A lead qualification agent might watch your inbox, read incoming messages, determine if the lead is a good fit, and either route them to sales or send a follow-up. A support agent might answer common questions, look up account information, and escalate complex issues to a human. The key difference from a simple automation is that agents can reason about ambiguous situations and decide what to do.",
  },
  {
    q: "How do you build AI agents?",
    a: "I use LangGraph to orchestrate multi-step agent workflows. LangGraph lets me define the agent's decision tree — what it checks first, what actions it takes based on what it finds, and when it needs to escalate. For the AI reasoning, I use OpenAI's API for most cases, Claude for complex reasoning tasks, and Ollama for local inference when data privacy matters. I connect the agent to your existing tools through APIs and webhooks.",
  },
  {
    q: "What's the difference between an AI agent and a chatbot?",
    a: "A chatbot responds to messages. An AI agent takes actions. A chatbot answers your question about order status. An agent checks your order status, finds there's a delay, sends you a proactive update, and adjusts the delivery estimate in the system. Agents have access to tools and APIs, can make decisions, and can take multi-step actions without human intervention.",
  },
  {
    q: "Can AI agents work with my existing tools?",
    a: "Yes. I connect agents to your existing tools through their APIs — CRMs, email, Slack, databases, spreadsheets, or any system with an API. I use n8n for workflow automation when you need to connect multiple tools, and custom API integrations for more complex scenarios. The agent reads from and writes to your existing systems, so you don't have to migrate anything.",
  },
  {
    q: "How do you handle cases where the agent can't figure something out?",
    a: "I build escalation logic into every agent. If the agent's confidence is low, if the situation is outside its training, or if the user explicitly asks for a human, the agent routes the conversation to the right person. I set confidence thresholds and define clear escalation paths so the agent knows when to stop and hand off.",
  },
];

const caseStudies = [
  {
    name: "RecallSync",
    challenge:
      "GoHighLevel users needed a way to automatically recall, qualify, and sync lead data across CRM workflows — but the existing tools required someone to manually look up and update records every time.",
    approach:
      "I built an agentic layer using LangGraph to orchestrate multi-step reasoning. The agent pulls lead data from GoHighLevel, cross-references it with external sources, determines which records need updating, and syncs the data back — all autonomously. I used Ollama for local LLM inference so client data never leaves their infrastructure. The agent runs on a schedule and can also be triggered on-demand through an API.",
    outcome:
      "RecallSync eliminated manual data lookups entirely. The agent handles the research, qualification, and syncing without human intervention. Users can see exactly what the agent did and why through the dashboard.",
    stack: ["LangGraph", "Ollama", "GoHighLevel", "Python"],
  },
  {
    name: "FusionSyncAI",
    challenge:
      "Nightlife venues and real estate firms were losing leads because Instagram DMs went unanswered for hours. They needed something that could respond instantly, qualify the lead, and take the right next step — without someone watching the inbox 24/7.",
    approach:
      "I built an automation system with an AI reasoning layer. When a DM comes in, the system reads the message, determines the intent, qualifies the lead based on the business's criteria, and responds with a context-aware reply. For qualified leads, it books appointments or sends pricing information. For others, it sends a follow-up sequence. The whole flow runs through Instagram's API with Supabase tracking the conversation state.",
    outcome:
      "FusionSyncAI cut response times from hours to seconds. The system handles hundreds of concurrent conversations, qualifies leads based on custom criteria, and routes qualified prospects to the right person — all without human intervention.",
    stack: ["Instagram API", "Next.js", "Supabase", "OpenAI"],
  },
];

export default function UpworkAIAgentFreelancerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        name: "Piyush Kashyap",
        jobTitle: "Upwork AI Agent Developer",
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
            Upwork AI Agent Developer
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            I build AI agents that take actions in business systems — not just
            chatbots that answer questions. I've built agents that qualify leads,
            sync CRM data, automate DM responses, and handle multi-step workflows
            without human intervention. I use LangGraph for orchestration, and I
            connect agents to the tools businesses already use.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">What AI Agents Actually Do</h2>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-4">
            <p>
              An AI agent is a system that observes data, decides what to do, and
              takes action — without someone triggering each step. A lead
              qualification agent might monitor your inbox, read incoming
              messages, determine if the lead fits your criteria, and either
              route them to sales or send a follow-up. A support agent might
              answer common questions, look up account information, and escalate
              complex issues to a human.
            </p>
            <p>
              The difference from basic automation is reasoning. A webhook that
              sends an email when a form is submitted is automation. An agent
              that reads the form, decides whether the lead is qualified, looks
              up similar past leads, and chooses the right follow-up based on
              that context — that's an agent.
            </p>
            <p>
              I build agents for specific business functions: lead qualification,
              DM automation, support routing, and data synchronization. Each
              agent is designed around the actual workflow it needs to handle,
              not a generic template.
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
