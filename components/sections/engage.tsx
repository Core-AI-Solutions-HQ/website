import { Reveal } from "@/components/site/reveal";

const models = [
  {
    n: "01",
    title: "Project based",
    body: "Fixed scope builds with a defined deliverable and timeline.",
  },
  {
    n: "02",
    title: "Retainer",
    body: "Ongoing engineering and product support at a monthly cadence.",
  },
  {
    n: "03",
    title: "Managed Service",
    body: "We build, run, and operate the whole platform.",
  },
  {
    n: "04",
    title: "CTO-as-a-Service",
    body: "Senior technical leadership without a full time hire.",
  },
  {
    n: "05",
    title: "Consultation",
    body: "Focused advisory: audits, discovery, procurement support.",
  },
] as const;

export function Engage() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-mono-brand text-blue">How we work</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            Five ways to engage.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {models.map((model, index) => (
            <Reveal key={model.n} delay={index * 60} className="h-full">
              <div className="card-elevated card-elevated-hover h-full rounded-md border border-border bg-white p-5">
                <div className="font-mono-brand text-teal">{model.n}</div>
                <h3 className="mt-3 font-semibold text-ink">{model.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-brand">{model.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
