import {
  Compass,
  Cpu,
  Handshake,
  MapPin,
  ShieldCheck,
  Timer,
} from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const values = [
  {
    title: "Engineering rigour",
    body: "Code that holds up in production, with quality you can measure.",
    icon: Cpu,
  },
  {
    title: "Start with the problem",
    body: "The problem leads. The stack follows.",
    icon: Compass,
  },
  {
    title: "Trust and security",
    body: "Auditable, compliant, and defensible by design.",
    icon: ShieldCheck,
  },
  {
    title: "Built for Africa",
    body: "Designed for African infrastructure and regulation.",
    icon: MapPin,
  },
  {
    title: "Speed with substance",
    body: "Fast, but nothing ships that cannot run.",
    icon: Timer,
  },
  {
    title: "We stay",
    body: "We stay in production with our clients.",
    icon: Handshake,
  },
] as const;

export function VisionValues() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card-elevated card-elevated-hover h-full rounded-md border border-border bg-white p-10">
              <div className="font-mono-brand text-blue">Vision</div>
              <p className="font-heading mt-6 text-2xl font-semibold leading-snug text-ink">
                To be Africa&apos;s most trusted engineering house for software and AI that holds up
                in production. We build the digital infrastructure that businesses, governments, and
                citizens rely on every day.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="card-elevated card-elevated-hover h-full rounded-md border border-border bg-white p-10">
              <div className="font-mono-brand text-blue">Mission</div>
              <p className="font-heading mt-6 text-2xl font-semibold leading-snug text-ink">
                We design, build, and operate technology systems that solve real problems. We combine
                engineering rigour, local context, and modern AI to deliver work that runs in
                production, not just in pitch decks.
              </p>
            </div>
          </Reveal>
          <div className="pointer-events-none absolute top-1/2 left-1/2 hidden h-px w-16 -translate-x-1/2 -translate-y-1/2 lg:block circuit-line" />
        </div>
        <div className="mt-24">
          <div className="font-mono-brand text-blue">Core Values</div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 60} className="h-full">
                <div className="card-elevated card-elevated-hover group h-full rounded-md border border-border bg-white p-6">
                  <div
                    className="inline-flex h-10 w-10 items-center justify-center rounded-md"
                    style={{ backgroundColor: "rgba(26,79,160,0.08)" }}
                  >
                    <value.icon className="h-5 w-5 text-blue" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-brand">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
