"use client";

import { FormEvent, useState, type ReactNode } from "react";
import { inquiryTypes, siteConfig } from "@/lib/site";

const fieldClass =
  "flex h-9 w-full rounded-md border border-white/10 bg-white/5 px-3 py-1 text-base text-white shadow-sm transition-colors placeholder:text-white/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-teal md:text-sm disabled:opacity-60";

type Status = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          company: String(data.get("company") ?? ""),
          phone: String(data.get("phone") ?? ""),
          intent: String(data.get("intent") ?? ""),
          message: String(data.get("message") ?? ""),
          website: String(data.get("website") ?? ""),
        }),
      });

      const payload = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(payload.error || "Could not send the enquiry.");
      }

      form.reset();
      setStatus("sent");
    } catch (caught) {
      setStatus("error");
      setError(caught instanceof Error ? caught.message : "Could not send the enquiry.");
    }
  }

  const busy = status === "submitting";

  return (
    <form className="space-y-5" noValidate={false} onSubmit={onSubmit}>
      <div className="sr-only" aria-hidden>
        <label>
          Website
          <input name="website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required>
          <input name="name" required autoComplete="name" disabled={busy} className={fieldClass} />
        </Field>
        <Field label="Email" required>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            disabled={busy}
            className={fieldClass}
          />
        </Field>
        <Field label="Company / organisation">
          <input name="company" autoComplete="organization" disabled={busy} className={fieldClass} />
        </Field>
        <Field label="Phone">
          <input name="phone" type="tel" autoComplete="tel" disabled={busy} className={fieldClass} />
        </Field>
      </div>
      <Field label="What are you looking for?" required>
        <select
          name="intent"
          required
          defaultValue="New project"
          disabled={busy}
          className={`${fieldClass} h-9`}
        >
          {inquiryTypes.map((type) => (
            <option key={type} value={type} className="bg-navy text-white">
              {type}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Message" required>
        <textarea
          name="message"
          required
          minLength={10}
          rows={5}
          disabled={busy}
          className={`${fieldClass} min-h-[120px] py-2`}
        />
      </Field>
      <button
        className="inline-flex h-9 items-center justify-center rounded-md px-6 py-3 text-sm font-medium text-navy transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        type="submit"
        disabled={busy}
        style={{ backgroundColor: "var(--teal)" }}
      >
        {busy ? "Sending..." : "Send enquiry"}
      </button>
      {status === "sent" ? (
        <p className="text-sm text-teal" role="status">
          Received. We will reply from {siteConfig.email}.
        </p>
      ) : null}
      {status === "error" && error ? (
        <p className="text-sm text-red-300" role="alert">
          {error} Email us at{" "}
          <a href={`mailto:${siteConfig.email}`} className="underline underline-offset-4 hover:text-teal">
            {siteConfig.email}
          </a>
          .
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
