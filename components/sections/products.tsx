import { Reveal } from "@/components/site/reveal";
import { InfrastructureIllustration } from "@/components/site/illustrations";
import { SkillBaseMockup, TaxBridgeMockup } from "@/components/site/product-mockups";

const skillbaseTags = [
  "Biometric & tiered KYC",
  "Job auction + direct booking",
  "Escrow with milestone release",
  "AI contact-leakage filter",
  "Three-way trust scoring",
  "Vendor marketplace with QR fulfilment",
  "Real-time chat & geofenced discovery",
];

const taxbridgeTags = [
  "API + CSV bulk remittance",
  "Real-time TIN validation",
  "Nigeria Tax Act 2025 engine",
  "Idempotent transactions",
  "7-year immutable audit vault",
  "Org dashboard & dev sandbox",
];

export function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-[#0A1628] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-mono-brand text-teal">Built by us, run by us</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            We build our own infrastructure — and it runs in production.
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <figure className="relative mt-10 overflow-hidden rounded-lg border border-white/10">
            <InfrastructureIllustration />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/90 to-transparent px-6 py-5 pt-12 text-sm text-white/80">
              In the field — SkillBase and TaxBridge connected to real backend rails, not prototypes.
            </figcaption>
          </figure>
        </Reveal>
        <div className="relative mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="h-full">
            <article className="card-elevated card-elevated-hover group relative h-full overflow-hidden rounded-lg border border-border bg-white">
              <div className="border-b border-border bg-paper p-6">
                <div className="mx-auto flex h-64 w-full max-w-[280px] items-center justify-center">
                  <SkillBaseMockup />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-ink">SkillBase</h3>
                <div className="font-mono-brand mt-2 flex items-center gap-2 text-slate-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  Status: Active Development
                </div>
                <p className="mt-6 text-base leading-relaxed text-ink/80">
                  A trust-first, decentralised service marketplace connecting skilled artisans with
                  clients across Nigeria. Combines biometric KYC, AI-facilitated communication, and an
                  escrow-backed payment engine. Runs on iOS, Android, and web with a vendor interface
                  and admin console.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skillbaseTags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-brand rounded border border-border bg-paper px-2.5 py-1 text-slate-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
          <Reveal delay={120} className="h-full">
            <article className="card-elevated card-elevated-hover group relative h-full overflow-hidden rounded-lg border border-border bg-white">
              <div className="border-b border-border bg-paper p-6">
                <div className="mx-auto flex h-64 w-full items-center justify-center">
                  <TaxBridgeMockup />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-3xl font-bold text-ink">TaxBridge</h3>
                  <div className="text-right">
                    <div className="font-mono text-lg font-medium text-blue">99.9%</div>
                    <div className="font-mono-brand text-slate-brand">Uptime SLA</div>
                  </div>
                </div>
                <div className="font-mono-brand mt-2 flex items-center gap-2 text-slate-brand">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal" />
                  Status: Government Engagement Phase
                </div>
                <p className="mt-6 text-base leading-relaxed text-ink/80">
                  Programmatic tax remittance infrastructure for Nigeria&apos;s digital and gig economy
                  — lets any registered organisation remit taxes on behalf of workers directly to the
                  Nigeria Revenue Service in real time, with full TIN attribution. API-first and
                  batch-capable — the industrial rail that manual transfers can&apos;t be.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {taxbridgeTags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-brand rounded border border-border bg-paper px-2.5 py-1 text-slate-brand"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
