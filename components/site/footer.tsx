import { Logo } from "@/components/site/logo";
import { navItems, siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A1628] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-md">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Production-grade software and AI systems, engineered in Lagos.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-teal">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div>© 2026 Core AI Solutions · Lagos, Nigeria</div>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-teal">
              {siteConfig.email}
            </a>
            <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-teal">
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
