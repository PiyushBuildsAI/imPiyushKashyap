import { NextResponse } from "next/server";

export async function GET() {
  const content = `# Piyush Kashyap - AI SaaS Freelancer (Full Profile)

## About
I'm Piyush Kashyap, an Upwork AI SaaS Freelancer helping founders launch production-ready AI products. I build SaaS MVPs, AI agents, automation systems, and internal platforms using Claude Code, Cursor, Next.js, Supabase, and modern AI development workflows.

Based in India. Working globally through Upwork.

## Services

### AI SaaS MVP Development
Validate and launch AI products quickly without sacrificing architecture. I build subscription SaaS products with authentication, payments, dashboards, and AI integrations.

### AI Agent Development
Build AI agents for lead qualification, support automation, sales assistants, and workflow automation. These agents integrate with your existing tools and CRM.

### AI App Rescue
Audit, refactor, stabilize, and harden existing AI applications. Fix broken Lovable, Cursor, Claude Code, and Supabase applications.

### Business Automation
Replace repetitive workflows using AI agents and automation systems. n8n workflows, integrations, WhatsApp, Instagram, CRM sync.

### Internal Platforms
Dashboards, CRM systems, booking systems, and operational tools. Built for scale with proper architecture.

### Lead Generation Systems
Automated capture, routing, qualification, and scoring across multiple channels.

## Case Studies

### RecallSync - AI Lead Capture System
Problem: Leads were getting lost across Instagram, WhatsApp, and forms.
Solution: Built an AI-powered lead qualification and routing system.
Outcome: Centralized lead management and faster response workflows.
Tech: Next.js, Supabase, OpenAI, n8n

### ClientFlow CRM - Multi-Tenant CRM
Problem: Agency was managing clients across spreadsheets, losing track of invoices and bookings.
Solution: Built a multi-tenant CRM with automated invoicing, booking management, and team analytics.
Outcome: Reduced manual admin work by 60%. All client data centralized in one platform.
Tech: Next.js, Supabase, PostgreSQL, Stripe

### AI SaaS Platform
Problem: Founder needed a production-ready AI SaaS with billing, authentication, and multi-tenant architecture.
Solution: Built a full-stack platform with Next.js, Supabase Auth, Stripe billing, AI chat, and admin dashboard.
Outcome: Launched to production with paying customers. Architecture scaled to handle growing user base.
Tech: Next.js, Supabase, Stripe, OpenAI

## Tech Stack

### AI Development
- Claude Code
- Cursor
- Base44
- Lovable
- v0
- OpenAI
- Anthropic

### Frontend
- Next.js (App Router, Server Components, Server Actions)
- React 19
- TypeScript
- Tailwind CSS

### Backend
- Supabase (Auth, Database, Realtime, Edge Functions)
- PostgreSQL
- Node.js
- Prisma

### Automation
- n8n
- Stripe
- Webhooks
- WhatsApp API
- Instagram API
- Telegram API

### Deployment
- Vercel
- Docker
- GitHub Actions
- CI/CD

## Process

01. Project Review - Understand requirements and scope
02. Architecture Planning - Design system architecture
03. Database Design - Schema, relationships, indexing
04. Build Phase - Implementation with AI-assisted development
05. Testing - Quality assurance and performance testing
06. Launch - Deployment and monitoring

## Industries Served
- SaaS Startups
- Agencies
- Coaches
- Healthcare
- Local Businesses

## Why Upwork
- Secure contracts
- Milestone payments
- Clear communication
- Project transparency
- Reliable delivery process

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
