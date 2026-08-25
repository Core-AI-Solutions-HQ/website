"use client";

import { useState } from "react";
import {
  BrainCircuit,
  Compass,
  CreditCard,
  Globe,
  Landmark,
  Smartphone,
  X,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const services: {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
}[] = [
  {
    title: "Mobile App Development",
    description: "Native and cross-platform apps engineered for production, not proof-of-concept.",
    icon: Smartphone,
    bullets: [
      "iOS & Android — Swift, Kotlin",
      "React Native and Flutter",
      "UI/UX design and prototyping",
      "App Store & Play Store deployment",
      "Marketplaces, fintech, wallets, logistics, on-demand platforms",
    ],
  },
  {
    title: "Web Development",
    description: "Customer apps, operator consoles, and public sites that stay fast after launch.",
    icon: Globe,
    bullets: [
      "React, Next.js, Vue, TypeScript",
      "Design systems and accessible interfaces",
      "Admin consoles, dashboards, and marketplaces",
      "Performance, SEO, and observability",
      "CI/CD from commit to production",
    ],
  },
  {
    title: "AI & Machine Learning",
    description: "AI features that run in the workflow — evaluated, monitored, and defensible.",
    icon: BrainCircuit,
    bullets: [
      "LLM applications with evaluation and guardrails",
      "RAG, agents, and model-in-the-loop systems",
      "OpenAI, Anthropic, Gemini, LangChain",
      "Speech, document intelligence, and vector search",
      "Data pipelines and production monitoring",
    ],
  },
  {
    title: "Fintech & Payment Infrastructure",
    description: "Payment and identity rails that reconcile to the kobo.",
    icon: CreditCard,
    bullets: [
      "Wallets, escrow, and remittance engines",
      "Paystack, Flutterwave, Stripe, Interswitch",
      "Idempotent transactions and double-charge protection",
      "KYC, NIN, BVN, and PSP integrations",
      "Reconciliation, settlements, and audit trails",
    ],
  },
  {
    title: "Government & Enterprise Technology",
    description: "Systems governments and enterprises can defend under review.",
    icon: Landmark,
    bullets: [
      "Tax remittance and TIN-attributed flows",
      "NDPA, CBN, and Nigeria Tax Act 2025 alignment",
      "Immutable audit vaults and operator consoles",
      "API-first integrations with government rails",
      "Procurement-ready documentation and sandboxes",
    ],
  },
  {
    title: "Business Technology Consulting",
    description: "Senior technical leadership without the full-time hire.",
    icon: Compass,
    bullets: [
      "Discovery, architecture, and delivery operating models",
      "Stack selection and vendor evaluation",
      "Security, compliance, and production audits",
      "CTO-as-a-Service retainers",
      "Procurement and RFP technical support",
    ],
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const current = services[active];
  const Icon = current.icon;

  return (
    <section id="services" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-mono-brand text-blue">What we build</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            End-to-end technology, one team.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-8 md:grid-cols-[minmax(0,280px)_1fr]">
          <div className="flex flex-col gap-1" role="tablist" aria-label="Services" aria-orientation="vertical">
            {services.map((service, index) => {
              const TabIcon = service.icon;
              const selected = index === active;
              return (
                <button
                  key={service.title}
                  id={`service-tab-${index}`}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  aria-controls={`service-panel-${index}`}
                  tabIndex={selected ? 0 : -1}
                  className={`flex w-full items-center gap-3 rounded-md border px-4 py-3 text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-teal ${
                    selected
                      ? "border-blue bg-white shadow-sm"
                      : "border-transparent hover:border-border hover:bg-white/60"
                  }`}
                  onClick={() => setActive(index)}
                >
                  <TabIcon
                    className="h-4 w-4 shrink-0"
                    strokeWidth={1.5}
                    style={{ color: selected ? "var(--teal)" : "var(--slate-brand)" }}
                  />
                  <span className={`text-sm font-medium ${selected ? "text-ink" : "text-slate-brand"}`}>
                    {service.title}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="hidden md:block">
            <div
              id={`service-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${active}`}
              tabIndex={0}
              className="card-elevated relative rounded-md border border-border bg-white p-6 sm:p-8 lg:p-10 animate-fade-in"
            >
              <button
                type="button"
                aria-label="Close details"
                className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-brand transition-colors hover:bg-black/5 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                onClick={() => setActive(0)}
              >
                <X className="h-4 w-4" />
              </button>
              <div className="flex items-start gap-4 pr-10">
                <div
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-md"
                  style={{ backgroundColor: "rgba(10,191,188,0.1)" }}
                >
                  <Icon className="h-6 w-6 text-blue" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{current.title}</h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-slate-brand">{current.description}</p>
                </div>
              </div>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {current.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:hidden">
            <div className="card-elevated rounded-md border border-border bg-white p-6">
              <h3 className="text-2xl font-bold tracking-tight text-ink">{current.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-brand">{current.description}</p>
              <ul className="mt-6 grid gap-3">
                {current.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3 text-sm text-ink">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
