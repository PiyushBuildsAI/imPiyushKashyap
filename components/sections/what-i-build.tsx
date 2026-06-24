import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Products That Help Businesses Operate More Efficiently",
    description:
      "I work on products that help businesses operate more efficiently, reduce manual work, improve communication with customers, or create new revenue opportunities. The software itself varies from project to project — subscription platforms, internal tools, customer portals, dashboards — but the objective is usually the same: solve a practical problem with a system that is reliable and maintainable.",
  },
  {
    title: "Automation Systems That Remove Repetitive Work",
    description:
      "Many businesses have workflows that are manual, time-consuming, and error-prone. I build automation systems that handle these tasks — lead qualification, data processing, customer follow-up, CRM synchronization. The goal is not to replace human judgment but to remove the parts of the work that do not require it. These systems run continuously and can be managed through a simple dashboard.",
  },
  {
    title: "Working Prototypes for Founders Who Need to Validate Ideas",
    description:
      "Starting a new product is risky. You do not know if the idea will work until you put it in front of users. I help founders move from concept to working prototype quickly — not by cutting corners on architecture, but by focusing on the core functionality that matters for validation. The first version does not need every feature. It needs to solve the core problem well enough to get feedback.",
  },
];

export default function WhatIBuild() {
  return (
    <section className="py-24 px-6 bg-muted/40">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            What I Work On
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            The type of software varies, but the problems are usually similar.
          </p>
        </div>

        <div className="space-y-6">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-8 space-y-3">
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
