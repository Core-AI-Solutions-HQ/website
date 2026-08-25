import { siteConfig } from "@/lib/site";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "light", className = "" }: LogoProps) {
  const wordmark = variant === "light" ? "text-white" : "text-ink";
  const tagline = variant === "light" ? "text-white/70" : "text-slate-brand";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Mark />
      <div className="leading-tight">
        <div className={`text-[13px] font-extrabold tracking-[0.04em] ${wordmark}`}>
          {siteConfig.legalName}
        </div>
        <div className={`font-mono-brand mt-0.5 ${tagline}`}>{siteConfig.tagline}</div>
      </div>
    </div>
  );
}

export function Mark({ className = "h-14 w-14 lg:h-16 lg:w-16" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`shrink-0 ${className}`}
      role="img"
      aria-label="Core AI Solutions"
    >
      <rect width="64" height="64" rx="14" fill="#0A1628" />
      <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="13.25" fill="none" stroke="#1A4FA0" strokeOpacity="0.55" />
      <path
        d="M46 20.5c-3.2-3.6-8-5.8-13.4-5.8C23.2 14.7 16 22.1 16 32s7.2 17.3 16.6 17.3c5.4 0 10.2-2.2 13.4-5.8"
        fill="none"
        stroke="#0ABFBC"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <circle cx="46" cy="20.5" r="2.4" fill="#0ABFBC" />
      <circle cx="46" cy="43.5" r="2.4" fill="#1A4FA0" />
      <circle cx="22" cy="24" r="1.8" fill="#1A4FA0" />
      <circle cx="20.5" cy="40" r="1.6" fill="#0ABFBC" />
      <circle cx="32" cy="32" r="3.2" fill="#0ABFBC" />
      <circle cx="32" cy="32" r="1.3" fill="#F7F9FC" />
      <path d="M22 24l10 8M20.5 40l11.5-8" stroke="#0ABFBC" strokeWidth="1" opacity="0.55" />
    </svg>
  );
}
