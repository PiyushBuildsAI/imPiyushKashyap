const steps = [
  {
    number: "01",
    title: "Project Discussion",
    description:
      "Most projects begin with a conversation about the existing workflow, current bottlenecks, and desired outcome. I ask questions about how things work today, what has been tried before, and what success looks like. This is not a formal discovery process — it is a conversation that helps both of us understand whether this is a good fit and what the real problem is.",
  },
  {
    number: "02",
    title: "Architecture Planning",
    description:
      "Before development begins, I spend time understanding how information should move through the system and what the long-term maintenance requirements will be. This includes database design, API structure, authentication approach, and integration points. I share a written plan before writing any code. We agree on scope, milestones, and pricing through Upwork.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Features are implemented incrementally with regular review points. You see working code every few days, not after weeks of silent development. Communication happens through Upwork messages or Slack, depending on your preference. If something needs to change direction, we discuss it early rather than discovering problems at the end.",
  },
  {
    number: "04",
    title: "Testing and Refinement",
    description:
      "The goal is not simply to verify that a feature works but to identify edge cases and operational risks before launch. I test with realistic data, check error handling, and verify that the system behaves correctly under conditions that are not perfect. This is also when we refine the user experience based on how the software actually works in practice.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "Deployment is straightforward. Code goes live, you have documentation for how things work, and you know who to contact if something comes up. I do not disappear after launch. If there are issues in the first few weeks, I address them.",
  },
  {
    number: "06",
    title: "Ongoing Support",
    description:
      "Most projects need some level of support after launch — bug fixes, small feature additions, adjustments based on user feedback. I remain available for that work. The relationship does not end when the initial project is deployed.",
  },
];

export default function WorkingTogether() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Working Together
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Here is what actually happens when we work together.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-0">
            {steps.map((step) => (
              <div key={step.number} className="relative flex items-start gap-6 py-6">
                <div className="relative z-10 w-12 h-12 rounded-full bg-card border-2 border-primary flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary">
                    {step.number}
                  </span>
                </div>

                <div className="pt-1">
                  <h3 className="font-semibold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
