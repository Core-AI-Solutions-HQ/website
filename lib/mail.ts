import nodemailer from "nodemailer";

import { inquiryTypes } from "@/lib/site";

const inquirySet = new Set<string>(inquiryTypes);

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  phone: string;
  intent: string;
  message: string;
  website: string;
};

export function parseContactPayload(input: unknown): ContactPayload | { error: string } {
  if (!input || typeof input !== "object") {
    return { error: "Invalid request." };
  }

  const data = input as Record<string, unknown>;
  const website = trim(data.website, 200);
  const name = trim(data.name, 120);
  const email = trim(data.email, 254);
  const company = trim(data.company, 160);
  const phone = trim(data.phone, 40);
  const intent = trim(data.intent, 80);
  const message = trim(data.message, 5000);

  if (!name) return { error: "Name is required." };
  if (!isValidEmail(email)) return { error: "Enter a valid email address." };
  if (!inquirySet.has(intent)) return { error: "Choose what you are looking for." };
  if (message.length < 10) return { error: "Message is too short." };

  return { name, email, company, phone, intent, message, website };
}

export function createTransport() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT ?? 465);

  if (!host || !user || !pass) {
    throw new Error("SMTP is not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 10_000,
    socketTimeout: 20_000,
  });
}

export function contactToAddress() {
  return process.env.CONTACT_TO_EMAIL ?? process.env.SMTP_USER ?? "info@coreaisolutions.tech";
}

export function contactFromAddress() {
  const from = process.env.SMTP_USER ?? "info@coreaisolutions.tech";
  return `Core AI Solutions <${from}>`;
}

function trim(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
