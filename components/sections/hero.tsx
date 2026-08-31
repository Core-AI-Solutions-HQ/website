import { SystemsMap } from "@/components/site/systems-map";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0A1628] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#0ABFBC 1px,transparent 1px),linear-gradient(90deg,#0ABFBC 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 pt-20 pb-16 lg:grid-cols-2 lg:items-center lg:pt-28 lg:pb-24">
        <div>
          <div className="font-mono-brand mb-6 text-teal">Nigerian technology, built to last</div>
          <h1 className="text-5xl font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-7xl">
            Technology that works.
            <br />
            <span className="text-teal">Intelligence that delivers.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
            Core AI Solutions designs, builds, and operates software and AI systems for businesses,
            governments, and individuals across mobile, web, API, and data infrastructure.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#products"
              className="inline-flex items-center rounded-md border border-white/40 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-teal hover:text-teal"
            >
              See our work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md px-5 py-3 text-sm font-medium text-navy transition-transform hover:-translate-y-0.5"
              style={{ backgroundColor: "var(--teal)" }}
            >
              Start a project
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 border-t border-white/10 pt-6">
            <div className="font-mono-brand flex items-center gap-2 text-white/75">
              <span>HQ:</span>
              <span className="text-white/90">Lagos, Nigeria</span>
            </div>
            <div className="font-mono-brand flex items-center gap-2 text-white/75">
              <span>Founded:</span>
              <span className="text-white/90">2024</span>
            </div>
            <div className="font-mono-brand flex items-center gap-2 text-white/75">
              <span>Status:</span>
              <span className="text-white/90">Active</span>
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <SystemsMap />
        </div>
      </div>
    </section>
  );
}
