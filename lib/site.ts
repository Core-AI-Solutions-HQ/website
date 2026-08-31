export const siteConfig = {
  name: "Core AI Solutions",
  legalName: "CORE AI SOLUTIONS LTD",
  tagline: "we build the future",
  title: "Core AI Solutions: Technology That Works. Intelligence That Delivers.",
  description:
    "Engineering house in Lagos building software, AI, and payment infrastructure for businesses, governments, and citizens across Africa.",
  url: "https://coreaisolutions.tech",
  email: "info@coreaisolutions.tech",
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

function mailtoLink(subject: string, body?: string) {
  const query = `subject=${encodeURIComponent(subject)}${
    body ? `&body=${encodeURIComponent(body)}` : ""
  }`;
  return `mailto:${siteConfig.email}?${query}`;
}

export const investorMailto = mailtoLink(
  "Investor enquiry: Core AI Solutions",
  "Hi Core AI Solutions team,\n\nI'd like to request your investor deck and learn more about the opportunity.\n\n",
);

export const teamBiosMailto = mailtoLink("Team bios request");

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
