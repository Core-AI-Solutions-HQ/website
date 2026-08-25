export const siteConfig = {
  name: "Core AI Solutions",
  legalName: "CORE AI SOLUTIONS LTD",
  tagline: "we build the future",
  title: "Core AI Solutions — Technology That Works. Intelligence That Delivers.",
  description:
    "Lagos-based engineering house building production-grade software, AI, and payment infrastructure for businesses, governments, and citizens across Africa.",
  url: "https://coreaisolutions.tech",
  email: "coreaisolutionshq@gmail.com",
  phone: "+234 906 341 1093",
  phoneHref: "+2349063411093",
  location: "Lagos, Nigeria",
  founded: "2024",
  locale: "en_NG",
} as const;

export const navItems = [
  { href: "#services", label: "Services" },
  { href: "#products", label: "Products" },
  { href: "#opportunity", label: "Investors" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
] as const;

export const inquiryTypes = [
  "New project",
  "AI integration",
  "Government / enterprise engagement",
  "Investment enquiry",
  "Partnership",
  "Other",
] as const;

export const investorMailto =
  "mailto:coreaisolutionshq@gmail.com?subject=Investor%20Enquiry%20%E2%80%94%20Core%20AI%20Solutions&body=Hi%20Core%20AI%20Solutions%20team%2C%0A%0AI%27d%20like%20to%20request%20your%20investor%20deck%20and%20learn%20more%20about%20the%20opportunity.%0A%0A%E2%80%94%20";

export const teamBiosMailto =
  "mailto:coreaisolutionshq@gmail.com?subject=Team%20bios%20request";

export const stack = [
  { category: "Mobile", items: ["Swift", "Kotlin", "React Native", "Flutter"] },
  { category: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Go", "Python", "FastAPI", "NestJS"] },
  {
    category: "Databases",
    items: ["PostgreSQL", "MySQL", "Redis", "MongoDB", "BigQuery"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    category: "AI / ML",
    items: ["OpenAI", "Anthropic", "Gemini", "LangChain", "pgvector", "Whisper"],
  },
  { category: "Payments", items: ["Paystack", "Flutterwave", "Stripe", "Interswitch"] },
  { category: "Auth & Identity", items: ["OAuth2", "SAML", "Biometric SDKs", "NIN / BVN"] },
  { category: "Monitoring", items: ["Sentry", "Datadog", "Grafana", "Prometheus"] },
  { category: "Security", items: ["Vault", "WAF", "HSM", "End-to-end encryption"] },
] as const;
