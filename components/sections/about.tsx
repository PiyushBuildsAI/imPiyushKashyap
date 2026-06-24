export default function About() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          About
        </h2>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            I started building software because I was curious about how things
            work. That curiosity turned into a career. Over the past few years,
            I have worked on a range of projects — from internal tools for small
            businesses to multi-tenant SaaS platforms used by hundreds of users.
          </p>

          <p>
            Most of the work I do involves taking an idea that exists as a
            rough concept — sometimes a spreadsheet, sometimes a series of
            conversations, sometimes just a problem someone describes over a
            call — and turning it into software that people can actually use.
            That process involves understanding the problem deeply before
            writing any code, designing an architecture that makes sense for
            the specific constraints of the project, and then building it in
            a way that is maintainable over time.
          </p>

          <p>
            I work primarily with founders and small teams. These are people
            who have a clear understanding of the problem they are trying to
            solve but need someone who can handle the technical side. They
            usually have tight timelines and limited budgets, which means the
            work needs to be practical rather than over-engineered.
          </p>

          <p>
            I enjoy projects where the technical challenge is matched by a real
            business need. The most interesting work happens when you are not
            just building features but solving operational problems —
            automating a workflow that currently takes hours, connecting systems
            that do not talk to each other, or creating a dashboard that gives
            a team visibility into something they have been tracking
            manually.
          </p>

          <p>
            I work independently through Upwork. There is no agency layer, no
            account manager, and no outsourced development. When you hire me,
            you are working directly with the person writing the code. That
            means faster communication, fewer misunderstandings, and a
            relationship built on direct trust.
          </p>

          <p>
            My technical stack centers on Next.js, TypeScript, Supabase, and
            PostgreSQL for most projects. For automation work, I use n8n and
            custom API integrations. For AI features, I work with OpenAI and
            Anthropic APIs. But the stack is always chosen based on what the
            project actually needs, not based on what is popular at the moment.
          </p>
        </div>
      </div>
    </section>
  );
}
