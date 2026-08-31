import { Reveal } from "@/components/site/reveal";
import { TeamIllustration } from "@/components/site/illustrations";

const glance = [
  ["Founded", "2024"],
  ["Headquartered", "Lagos, Nigeria"],
  ["Sectors", "Fintech · GovTech · AI"],
  ["Operating model", "Product + Services"],
] as const;

export function About() {
  return (
    <section id="about" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-mono-brand text-blue">Who we are</div>
        </Reveal>
        <div className="mt-10 grid gap-16 lg:grid-cols-[1.4fr,1fr]">
          <div>
            <Reveal delay={80}>
              <h2 className="text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
                Serious technology against problems that actually matter.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-slate-brand">
                <p>
                  Core AI Solutions is a technology company in Lagos. We bring together engineers,
                  designers, and AI specialists who have shipped production systems for fintech, labour
                  markets, government, logistics, retail, and professional services.
                </p>
                <p>
                  We don&apos;t build demos. We build the infrastructure that runs the business the day
                  after launch: the payment engine that doesn&apos;t double-charge, the KYC flow that
                  clears fraud, the remittance rail that reconciles to the kobo.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200} className="h-full">
            <div className="card-elevated h-full rounded-md border border-border bg-white p-8">
              <TeamIllustration />
              <div className="font-mono-brand mb-6 text-blue">At a glance</div>
              <dl className="space-y-6">
                {glance.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="font-mono-brand text-slate-brand">{label}</dt>
                    <dd className="font-mono-brand text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
