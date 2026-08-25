import { Reveal } from "@/components/site/reveal";
import { teamBiosMailto } from "@/lib/site";

const roles = [
  {
    title: "Founder & CEO",
    body: "Sets vision and product strategy; owns client and government relationships.",
  },
  {
    title: "Lead Engineer",
    body: "Owns architecture and delivery across backend, mobile, and infrastructure.",
  },
  {
    title: "Frontend Engineer",
    body: "Ships the interfaces — from admin consoles to consumer apps.",
  },
  {
    title: "AI & Data Specialist",
    body: "Builds LLM features, data pipelines, and model-in-the-loop workflows.",
  },
  {
    title: "Product Designer",
    body: "Turns hard problems into interfaces users trust on the first click.",
  },
] as const;

export function Team() {
  return (
    <section id="team" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-mono-brand text-blue">Who builds it</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            A lean, senior-heavy team.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-brand">
            We prioritise depth over breadth — every team member operates at production level.
          </p>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, index) => (
            <Reveal key={role.title} delay={index * 60} className="h-full">
              <div className="card-elevated card-elevated-hover h-full rounded-md border border-border bg-white p-6">
                <div className="font-mono-brand text-blue">Role</div>
                <h3 className="mt-3 text-lg font-semibold text-ink">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-brand">{role.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 rounded-lg border border-border bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
          <div>
            <div className="font-mono-brand text-blue">For investors & partners</div>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/85">
              Extended team bios and LinkedIn profiles are available on request. We keep them off the
              public site by preference — reach out and we&apos;ll share them directly.
            </p>
          </div>
          <a
            href={teamBiosMailto}
            className="mt-4 inline-flex shrink-0 items-center rounded-md border border-blue px-5 py-2.5 text-sm font-medium text-blue transition-colors hover:bg-blue hover:text-white sm:mt-0"
          >
            Request team bios
          </a>
        </div>
        <p className="mt-8 max-w-3xl text-sm text-slate-brand">
          We also work with a network of specialist contractors and advisors in law, finance,
          cybersecurity, and regulatory compliance.
        </p>
      </div>
    </section>
  );
}
