import { ContactForm } from "@/components/sections/contact-form";
import { ContactNetwork } from "@/components/site/illustrations";
import { siteConfig } from "@/lib/site";

const ways = ["Project-Based", "Retainer", "Managed Service", "CTO-as-a-Service", "Consultation"];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0A1628] py-24 text-white md:py-32">
      <ContactNetwork />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(10,22,40,0.96) 0%,rgba(10,22,40,0.85) 50%,rgba(10,22,40,0.75) 100%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <div className="font-mono-brand text-teal">Contact</div>
            <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Let&apos;s build something that works.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
              Whether you need a custom build, an AI integration, or want to discuss a partnership —
              we want to hear from you.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>
          <aside className="space-y-8 lg:border-l lg:border-white/10 lg:pl-8">
            <div>
              <div className="font-mono-brand text-white/75">Direct</div>
              <div className="mt-3 space-y-2 text-white">
                <a href={`mailto:${siteConfig.email}`} className="block hover:text-teal">
                  {siteConfig.email}
                </a>
                <a href={`tel:${siteConfig.phoneHref}`} className="block hover:text-teal">
                  {siteConfig.phone}
                </a>
                <a
                  href={siteConfig.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block hover:text-teal"
                >
                  coreaisolutions.tech
                </a>
              </div>
            </div>
            <div>
              <div className="font-mono-brand text-white/75">Ways to engage</div>
              <ul className="mt-3 space-y-1.5 text-sm text-white/70">
                {ways.map((way) => (
                  <li key={way} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-teal" />
                    {way}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono-brand text-white/75">Location</div>
              <p className="mt-3 text-white">Lagos, Nigeria</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
