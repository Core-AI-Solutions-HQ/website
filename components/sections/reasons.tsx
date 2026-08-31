import { BrainCircuit, Layers, MapPin, Maximize2, Rocket, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const reasons = [
  {
    n: "01",
    title: "Ship production code",
    body: "Code that runs the business on day one, not a prototype.",
    icon: Rocket,
  },
  {
    n: "02",
    title: "Nigerian context",
    body: "Built for local rails: NIN, BVN, CBN, NDPA, PSPs.",
    icon: MapPin,
  },
  {
    n: "03",
    title: "AI in the product",
    body: "AI is part of the system, not something we add later.",
    icon: BrainCircuit,
  },
  {
    n: "04",
    title: "One stack, one team",
    body: "One team from schema to store listing.",
    icon: Layers,
  },
  {
    n: "05",
    title: "Security from day one",
    body: "Auditable by design, defensible under review.",
    icon: ShieldCheck,
  },
  {
    n: "06",
    title: "Built to scale",
    body: "Idempotent, observable, and ready to grow.",
    icon: Maximize2,
  },
] as const;

export function Reasons() {
  return (
    <section className="bg-paper py-24 text-ink md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-mono-brand text-blue">Why Core AI Solutions</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Six reasons teams choose us.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Reveal key={reason.n} delay={index * 60} className="h-full">
              <div className="card-elevated card-elevated-hover h-full rounded-md border border-border bg-white p-6">
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md"
                  style={{ backgroundColor: "rgba(26,79,160,0.08)" }}
                >
                  <reason.icon className="h-5 w-5 text-blue" strokeWidth={1.5} />
                </div>
                <div className="font-mono-brand mt-5 text-slate-brand">{reason.n}</div>
                <h3 className="mt-1 text-lg font-semibold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{reason.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
