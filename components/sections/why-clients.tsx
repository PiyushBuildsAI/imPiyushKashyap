import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    title: "Direct Communication",
    description:
      "You work directly with the person writing the code. There is no project manager filtering messages, no account manager translating requirements, and no delay between asking a question and getting an answer. When you message me, you are talking to the person who understands both the business context and the technical implementation. That usually means faster decisions and fewer misunderstandings.",
  },
  {
    title: "Practical Problem Solving",
    description:
      "I focus on solving the problem at hand rather than building the most technically impressive solution. That means choosing the simplest architecture that works, using tools that are appropriate for the scale of the project, and avoiding unnecessary complexity. Over-engineering is a real problem in software projects — it slows development, increases maintenance costs, and makes future changes harder. I try to avoid that.",
  },
  {
    title: "Transparent Progress",
    description:
      "I work in short cycles and share working code regularly. You do not have to wait two months to see something. Within the first week, you will have a working version of the core functionality. That makes it easier to give feedback, catch misunderstandings early, and adjust the direction if needed. I also document technical decisions as I make them, so you understand why things are built the way they are.",
  },
  {
    title: "Long-Term Maintainability",
    description:
      "The code I write is meant to be maintained. That means clear naming, logical structure, and documentation where it matters. If you decide to bring another developer on later, they should be able to understand the codebase without needing me to explain everything. If you want to add features six months from now, the architecture should support that without requiring a rewrite.",
  },
];

export default function WhyClients() {
  return (
    <section className="py-24 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Clients Choose to Work With Me
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            These are the things clients typically mention after working
            together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((reason) => (
            <Card key={reason.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-8 space-y-3">
                <h3 className="text-lg font-semibold">{reason.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
