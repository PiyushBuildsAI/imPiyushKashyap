import { Card, CardContent } from "@/components/ui/card";

export default function FinalCTA() {
  return (
    <section className="py-24 px-6 bg-muted/40">
      <div className="max-w-3xl mx-auto">
        <Card className="border-primary/20 bg-gradient-to-br from-accent/50 to-card">
          <CardContent className="p-8 md:p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Let&apos;s Talk About Your Project
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                If you have a project in mind, a workflow that needs
                automating, or a problem that needs a technical solution, I
                would be happy to discuss it.
              </p>
              <p>
                The best way to start is through Upwork. That gives us a clear
                scope, protected payments, and a structured way to work
                together. If you prefer to start with a conversation first, you
                can message me there as well.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://www.upwork.com/freelancers/~01aaf78f140ef80cb0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View My Upwork Profile
              </a>
              <a
                href="https://www.upwork.com/freelancers/~01aaf78f140ef80cb0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium border border-border rounded-lg hover:bg-muted transition-colors"
              >
                Message Me on Upwork
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
