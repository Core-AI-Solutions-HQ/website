"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { navItems } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0A1628]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-2.5">
        <a href="#top" className="shrink-0" aria-label="Core AI Solutions home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base font-extrabold tracking-wide text-white transition-colors hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-md bg-teal px-4 py-2 text-sm font-bold text-navy transition-colors hover:brightness-110 lg:inline-flex"
          >
            Start a Project
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Toggle menu"}
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-teal lg:hidden"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} strokeWidth={2.25} /> : <Menu size={22} strokeWidth={2.25} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-navy px-6 py-5 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-3 text-base font-extrabold tracking-wide text-white hover:text-teal"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-3 inline-flex items-center justify-center rounded-md bg-teal px-4 py-3 text-sm font-bold text-navy"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
