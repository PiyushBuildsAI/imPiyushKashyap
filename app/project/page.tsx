import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { projectCards, type ProjectCard as ProjectCardType } from "@/components/portfolio/project-data";

export const metadata = {
  title: "Projects",
  description:
    "All production systems, AI products, and automation built by Piyush Kashyap.",
};

function Eyebrow({
  index,
  children,
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-brand">
        /{index}
      </span>
      <span className="h-px w-8 bg-brand/50" aria-hidden="true" />
      <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </span>
    </div>
  );
}

function ProjectCard({ project }: { project: ProjectCardType }) {
  const Icon = project.icon;

  return (
    <article
      className={`group relative overflow-hidden rounded-[2rem] border border-border bg-card p-5 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_28px_80px_-42px_rgba(15,23,42,0.6)] sm:p-7 ${project.layout}`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-48 bg-gradient-to-b ${project.tone}`}
        aria-hidden="true"
      />
      <div className="relative">
        <div className="mb-10 flex items-start justify-between gap-4">
          <span className="grid size-12 place-items-center rounded-2xl border border-border/70 bg-background/80 shadow-sm backdrop-blur-sm">
            <Icon className="size-5" />
          </span>
          <span className="font-mono text-xs font-bold text-muted-foreground">
            {project.number}
          </span>
        </div>

        <div className="mb-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-brand">
            {project.category}
          </p>
          <h3 className="text-3xl font-black tracking-[-0.045em] sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="mb-7 rounded-2xl border border-border/80 bg-background/75 p-3.5">
          <div className="mb-3 flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.15em] text-muted-foreground">
            <span className="status-pulse size-1.5 rounded-full bg-brand" />
            Live system flow
          </div>
          <div className="grid gap-2 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
            {project.flow.map((step, index) => (
              <div key={step} className="contents">
                <div className="rounded-xl border border-border bg-card px-3 py-3 text-center text-[11px] font-bold">
                  {step}
                </div>
                {index < project.flow.length - 1 && (
                  <ArrowRight className="mx-auto size-3.5 rotate-90 text-brand sm:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        <p className="border-l-2 border-brand pl-4 text-sm font-medium leading-6">
          {project.result}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-2.5 py-1 text-[10px] font-bold text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            {project.status}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <section className="px-4 pb-24 pt-36 sm:px-6 sm:pt-44 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-brand">
              /PROJECTS
            </span>
            <span className="h-px w-8 bg-brand/50" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
              All systems
            </span>
          </div>
          <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl">
            Built, shipped,
            <br />
            <span className="text-brand">used.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground">
            Every project here is a live system solving real problems—from AI
            agents and automation to full-stack platforms and cross-channel
            integrations.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          {projectCards.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand transition-colors hover:text-brand/80"
          >
            Back to portfolio
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
