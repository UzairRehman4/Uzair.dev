import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  message?: string;
};

function clean(value: unknown) {
  return String(value || "").trim().slice(0, 2000);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = clean(body.name);
    const email = clean(body.email);
    const company = clean(body.company);
    const budget = clean(body.budget);
    const message = clean(body.message);

    if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Please provide a valid name, email, and message." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO || "rehmanuzair43@gmail.com";
    const from = process.env.CONTACT_FROM || "Uzair Portfolio <onboarding@resend.dev>";

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
        <h2>New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company / Project:</strong> ${escapeHtml(company) || "Not provided"}</p>
        <p><strong>Budget:</strong> ${escapeHtml(budget) || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      </div>
    `;

    if (apiKey) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to, reply_to: email, subject: `Portfolio inquiry from ${name}`, html })
      });
      if (!res.ok) {
        const detail = await res.text();
        return NextResponse.json({ error: "Email provider failed", detail }, { status: 502 });
      }
    } else {
      console.log("Portfolio contact form submission", { name, email, company, budget, message });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
