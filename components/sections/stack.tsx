import { Reveal } from "@/components/site/reveal";
import { stack } from "@/lib/site";

export function Stack() {
  return (
    <section className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="font-mono-brand text-blue">The stack</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            A modern, boring toolbox for un-boring problems.
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((group) => (
            <div key={group.category}>
              <h3 className="text-base font-semibold text-ink">{group.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono-brand rounded border border-border bg-paper px-2.5 py-1 text-slate-brand"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
