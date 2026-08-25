"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { inquiryTypes, siteConfig } from "@/lib/site";

const fieldClass =
  "flex h-9 w-full rounded-md border border-white/10 bg-white/5 px-3 py-1 text-base text-white shadow-sm transition-colors placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal md:text-sm";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const company = String(data.get("company") ?? "");
    const phone = String(data.get("phone") ?? "");
    const intent = String(data.get("intent") ?? "");
    const message = String(data.get("message") ?? "");

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : "",
      phone ? `Phone: ${phone}` : "",
      `Looking for: ${intent}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
      `${intent} — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setStatus("sent");
  }

  return (
    <form className="space-y-5" noValidate={false} onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input name="name" required autoComplete="name" className={fieldClass} />
        </Field>
        <Field label="Email" required>
          <input name="email" type="email" required autoComplete="email" className={fieldClass} />
        </Field>
        <Field label="Company / organisation">
          <input name="company" autoComplete="organization" className={fieldClass} />
        </Field>
        <Field label="Phone">
          <input name="phone" type="tel" autoComplete="tel" className={fieldClass} />
        </Field>
      </div>
      <Field label="What are you looking for?" required>
        <select name="intent" required defaultValue="New project" className={`${fieldClass} h-9`}>
          {inquiryTypes.map((type) => (
            <option key={type} value={type} className="bg-navy text-white">
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" required>
        <textarea name="message" required rows={5} className={`${fieldClass} min-h-[120px] py-2`} />
      </Field>
      <button
        className="inline-flex h-9 items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-navy transition-transform hover:-translate-y-0.5"
        type="submit"
        style={{ backgroundColor: "var(--teal)" }}
      >
        Send enquiry
      </button>
      {status === "sent" ? (
        <p className="text-sm text-teal" role="status">
          Your mail client should open with the enquiry. If it doesn&apos;t, email us at{" "}
          {siteConfig.email}.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="font-mono-brand text-sm font-medium leading-none text-white/80">
        {label}
        {required ? <span className="ml-1 text-teal">*</span> : null}
      </label>
      <div className="mt-2">{children}</div>
    </div>
  );
}
