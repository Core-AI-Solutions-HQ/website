import { NextRequest, NextResponse } from "next/server";
import {
  contactFromAddress,
  contactToAddress,
  createTransport,
  parseContactPayload,
} from "@/lib/mail";

export const runtime = "nodejs";

const hits = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 15 * 60 * 1000;
const MAX_HITS = 5;

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!allow(ip)) {
    return NextResponse.json(
      { error: "Too many enquiries from this network. Try again later." },
      { status: 429 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const parsed = parseContactPayload(body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  if (parsed.website) {
    return NextResponse.json({ ok: true });
  }

  const details = [
    `Name: ${parsed.name}`,
    `Email: ${parsed.email}`,
    parsed.company ? `Company: ${parsed.company}` : null,
    parsed.phone ? `Phone: ${parsed.phone}` : null,
    `Looking for: ${parsed.intent}`,
  ].filter((line): line is string => Boolean(line));

  try {
    const transport = createTransport();
    await transport.sendMail({
      from: contactFromAddress(),
      to: contactToAddress(),
      replyTo: `${parsed.name} <${parsed.email}>`,
      subject: `${parsed.intent}: ${parsed.name}`,
      text: `${details.join("\n")}\n\n${parsed.message}`,
      html: renderHtml(details, parsed.message),
    });
  } catch (error) {
    console.error("Contact mail failed", error);
    return NextResponse.json(
      {
        error: "Could not send the enquiry.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}

function allow(ip: string) {
  const now = Date.now();
  const current = hits.get(ip);

  if (!current || now > current.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (current.count >= MAX_HITS) return false;
  current.count += 1;
  return true;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderHtml(details: string[], message: string) {
  const rows = details.map((line) => `<p style="margin:0 0 8px">${escapeHtml(line)}</p>`).join("");

  return `<div style="font-family:sans-serif;font-size:15px;line-height:1.5;color:#0A1628">
    ${rows}
    <pre style="white-space:pre-wrap;font-family:sans-serif;margin:16px 0 0">${escapeHtml(message)}</pre>
  </div>`;
}
