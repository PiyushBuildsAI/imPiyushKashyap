"use client";

import { Badge } from "@/components/ui/badge";

const trustBadges = ["AI SaaS", "AI Agents", "Automation", "Startup MVPs"];

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Piyush Kashyap
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
              Full Stack Developer
            </h2>
          </div>

          <div className="max-w-lg space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              I work primarily with founders and small teams who need software
              built quickly without creating long-term technical problems.
            </p>
            <p>
              Many projects start before there is a complete specification.
              Sometimes there is only a rough idea, a spreadsheet, a collection
              of screenshots, or an existing manual workflow that has become
              difficult to manage.
            </p>
            <p>
              My role is to take that initial concept, identify the core
              requirements, design a practical architecture, and build a version
              that can be used and tested by real users.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.upwork.com/freelancers/~01aaf78f140ef80cb0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              View My Upwork Profile
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors"
            >
              View My Work
            </a>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {trustBadges.map((badge) => (
              <Badge key={badge} variant="outline" className="text-xs px-3 py-1">
                {badge}
              </Badge>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-accent to-muted overflow-hidden flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-4xl font-bold text-primary">PK</span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  Your photo here
                </p>
              </div>
            </div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-primary rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
