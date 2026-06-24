import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Piyush Kashyap - AI SaaS Freelancer

## Services
- AI SaaS MVP Development
- AI Agent Development
- Business Automation Systems
- Internal Platform Development
- AI App Rescue & Refactoring
- Lead Generation Systems

## Case Studies
- RecallSync: AI lead capture and routing system
- ClientFlow CRM: Multi-tenant CRM with invoicing
- AI SaaS Platform: Full-stack AI platform with billing

## Tools
- Claude Code, Cursor, Base44, Lovable, v0
- Next.js, React, TypeScript, Tailwind
- Supabase, PostgreSQL, Node.js, Prisma
- n8n, Stripe, Webhooks, WhatsApp, Instagram
- Vercel, Docker, GitHub, CI/CD

## Expertise
- AI SaaS Architecture
- Database Design & Optimization
- Authentication & Authorization
- Payment Integration (Stripe)
- AI Integration (OpenAI, Anthropic)
- Workflow Automation

## Industries
- SaaS Startups
- Agencies
- Coaches
- Healthcare
- Local Businesses

## Contact
- Upwork: https://www.upwork.com/freelancers/~01aaf78f140ef80cb0
- GitHub: https://github.com/imPiyushkashyap
- LinkedIn: https://linkedin.com/in/yourusername

## Location
Based in India. Working globally through Upwork.
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
