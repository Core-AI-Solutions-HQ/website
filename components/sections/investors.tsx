import { Building2, Handshake, LineChart, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { investorMailto } from "@/lib/site";

const stats = [
  { value: "2", label: "Live product lines in active development", icon: LineChart },
  { value: "3+", label: "Sectors served: fintech, govtech, logistics", icon: Building2 },
  { value: "NRS", label: "Government engagement in progress", icon: Handshake },
  { value: "Africa", label: "Infrastructure focus: Nigeria first, continent next", icon: TrendingUp },
] as const;

export function Investors() {
  return (
    <section id="opportunity" className="relative overflow-hidden bg-paper py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(#1A4FA0 1px,transparent 1px),linear-gradient(90deg,#1A4FA0 1px,transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <div className="font-mono-brand text-blue">For investors</div>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
                Building the infrastructure layer for Africa&apos;s digital economy.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-brand">
                Nigeria&apos;s digital and gig economy is growing fast, but the infrastructure
                underneath it (payments, identity, tax compliance) is still fragmented. Core AI
                Solutions builds the rails other platforms rely on: software that runs in the
                background of the businesses shaping the market.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={investorMailto}
                  className="inline-flex items-center rounded-md bg-blue px-6 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
                >
                  Request our investor deck
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-md border border-blue px-6 py-3 text-sm font-medium text-blue transition-colors hover:bg-blue hover:text-white"
                >
                  Speak with the founder
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 text-sm text-slate-brand">
                Prefer email?{" "}
                <a href={investorMailto} className="text-blue underline underline-offset-4 hover:brightness-110">
                  Send us a note directly
                </a>
                .
              </p>
            </Reveal>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <Reveal key={stat.value} delay={index * 90} className="h-full">
                <div className="card-elevated h-full rounded-lg border border-border bg-white p-6">
                  <stat.icon className="h-5 w-5 text-blue" strokeWidth={1.5} />
                  <div className="mt-6 font-mono text-4xl font-medium leading-none tracking-tight text-blue">
                    {stat.value}
                  </div>
                  <div className="mt-4 text-sm leading-relaxed text-slate-brand">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
