import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    name: "RecallSync",
    description: "Agentic CRM automation layer for GoHighLevel",
    background:
      "The client ran a CRM-heavy operation using GoHighLevel. GoHighLevel is a powerful platform, but it has rigid automation rules. The client needed custom logic that went beyond what GoHighLevel's native workflow builder could handle — things like dynamic lead scoring based on conversation context, conditional routing that adapted in real time, and multi-step automations that responded to signals from external systems.",
    challenge:
      "The core challenge was building a layer of custom intelligence on top of an existing platform without breaking the things that already worked. GoHighLevel handles the CRM, the messaging, and the basic workflows. The client needed something that could sit on top of that and make decisions — something that could understand context, adapt to different scenarios, and act without constant human oversight.",
    constraints:
      "The system needed to be multi-tenant because the client managed multiple accounts. It had to process data in real time because delays in lead routing directly impact conversion. And it needed to be cost-effective — running a large language model for every interaction would have been prohibitively expensive.",
    approach:
      "I built an agentic layer using LangGraph for orchestration and local inference through Ollama for the parts of the system that did not need the full power of a large model. The architecture separates the decision-making logic from the CRM integration, which means the system can be extended to work with other platforms beyond GoHighLevel if needed. The multi-tenant design uses row-level security in Supabase to keep account data isolated.",
    technicalDecisions:
      "The main technical decision was which parts of the system should use a large language model and which parts should use simpler rule-based logic. Not every decision needs AI. Some automations are straightforward — if a lead meets criteria X, route them to team Y. But other decisions require understanding nuance in conversation text, and that is where the language model adds value. The system uses a hybrid approach: fast rules for simple cases, AI for complex ones.",
    outcome:
      "The client now has a system that handles CRM automation at a level that was not possible with GoHighLevel alone. Clients using the platform can automate complex workflows without writing custom code. The multi-tenant architecture means the system scales as the client adds more accounts.",
    lessons:
      "The biggest lesson was about cost management. Running AI models for every interaction does not scale. The hybrid approach — using AI only where it adds real value — is more practical and more sustainable.",
    stack: ["Node.js", "LangGraph", "Ollama", "GoHighLevel API", "Supabase"],
  },
  {
    name: "FusionSyncAI",
    description: "Instagram DM automation for nightlife and real estate",
    background:
      "The client operated in the Chandigarh nightlife and real estate market. Both industries rely heavily on Instagram for lead generation. Businesses post content, people respond in DMs, and someone on the team follows up manually. The problem is that manual follow-up is slow, inconsistent, and does not scale. By the time someone responds to a DM, the lead has often moved on.",
    challenge:
      "Instagram does not offer a public API for sending DMs at scale. The automation had to work within Instagram's constraints while still being effective. The system needed to handle initial outreach, follow-up sequences, and qualification — all while looking like a real person was behind the conversation.",
    constraints:
      "Instagram's rate limits and detection systems meant the automation could not behave like a bot. Messages needed to feel natural. The timing needed to be realistic. The content needed to be contextual. And the system needed to handle the fact that Instagram changes its rules frequently.",
    approach:
      "I built a system that started with manual outreach patterns and gradually templated them. The initial version used real people sending targeted messages based on defined criteria. As the patterns became clear, I automated the sequencing while keeping the content flexible. The system integrates directly with Instagram's interface and uses n8n for workflow orchestration. Supabase tracks conversation state and lead information.",
    technicalDecisions:
      "The decision to start manual and template gradually was deliberate. Automating Instagram DMs from day one would have been risky — the system needed to learn what actually works before scaling. The n8n workflows handle the sequencing, and Supabase stores the conversation data, which means the system can be extended to other platforms without rebuilding the core logic.",
    outcome:
      "The system was deployed across multiple nightlife venues and real estate agents in Chandigarh. Each business got consistent lead capture without adding headcount. The follow-up sequences run automatically, and the team can monitor everything through a dashboard.",
    lessons:
      "The most important lesson was that automation works best when it augments human behavior rather than replacing it entirely. The system works because it was designed around how people actually communicate, not around how a robot would communicate.",
    stack: ["Instagram API", "Node.js", "n8n", "Supabase", "Claude"],
  },
  {
    name: "IGThreadly",
    description: "Instagram comment-to-DM automation SaaS",
    background:
      "Instagram comments are one of the highest-intent signals on the platform. When someone comments on your post, they are expressing interest. But most businesses never follow up on comments. The leads sit there, unanswered, while the business spends money on ads to generate new leads. The opportunity cost is significant.",
    challenge:
      "The client wanted a product that could detect new comments on Instagram posts and automatically send a direct message to the person who commented. The system needed to work across multiple Instagram accounts, handle different conversation flows based on the post content, and be simple enough that non-technical users could set it up without writing code.",
    constraints:
      "Instagram's API limitations meant the system needed to be careful about rate limits. The product needed a free tier to attract users, which meant the architecture had to be cost-effective at scale. And the conversation flows needed to be flexible enough to handle different use cases — real estate, e-commerce, coaching, local businesses.",
    approach:
      "I built a SaaS product using Next.js and Supabase. The core loop is straightforward: detect new comments via Instagram's webhook, match the comment to a post, look up the conversation flow configured for that post, and send a DM. The conversation flows are defined using JSON, which means users can create and modify them without writing code. Prisma handles the database schema, and the whole system is deployed on Vercel.",
    technicalDecisions:
      "The JSON-based conversation flow system was a key decision. It allows non-technical users to define complex multi-step conversations while keeping the underlying system simple. Each flow is a JSON document that specifies the messages, the triggers, and the conditions. The system interprets this at runtime, which means changes take effect immediately without redeployment.",
    outcome:
      "The product launched with a free tier and is currently being used by businesses to capture leads from their Instagram comment sections. Users set up their conversation flows, connect their Instagram account, and the system handles the rest. The feedback has been positive — businesses are converting commenters into leads at a rate they were not achieving with manual follow-up.",
    lessons:
      "Building a SaaS product is different from building a custom solution for a single client. With a SaaS product, you need to think about onboarding, pricing, scaling, and support from day one. The hardest part was not the technical implementation — it was making the product simple enough that users could set it up without help.",
    stack: ["Next.js", "TypeScript", "Supabase", "Instagram API", "Prisma"],
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Selected Projects
          </h2>
          <p className="text-muted-foreground">
            A few projects that show how I approach problems and make technical
            decisions.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project) => (
            <Card key={project.name} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="h-48 md:h-64 bg-gradient-to-br from-accent via-muted to-accent/50 flex items-center justify-center border-b border-border">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Background
                      </span>
                      <p className="text-sm leading-relaxed">
                        {project.background}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Challenge
                      </span>
                      <p className="text-sm leading-relaxed">
                        {project.challenge}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Constraints
                      </span>
                      <p className="text-sm leading-relaxed">
                        {project.constraints}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Approach
                      </span>
                      <p className="text-sm leading-relaxed">
                        {project.approach}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Technical Decisions
                      </span>
                      <p className="text-sm leading-relaxed">
                        {project.technicalDecisions}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Outcome
                      </span>
                      <p className="text-sm font-medium leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Lessons Learned
                      </span>
                      <p className="text-sm leading-relaxed italic">
                        {project.lessons}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {project.stack.map((s) => (
                      <Badge key={s} variant="secondary" className="text-xs">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
