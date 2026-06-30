import { NextResponse } from "next/server";
import {
  escapeHtml,
  formatPlaintextBlock,
  getContactToEmail,
  getFromEmail,
  getResendClient,
  isValidEmail,
} from "@/lib/email";
import { requireTurnstileVerification } from "@/lib/turnstile";

export const runtime = "nodejs";

type ContactBody = {
  fullName?: unknown;
  email?: unknown;
  interest?: unknown;
  message?: unknown;
  turnstileToken?: unknown;
};

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json(
      { error: "invalid_request", message: "Malformed request body." },
      { status: 400 },
    );
  }

  const fullName =
    typeof body.fullName === "string" ? body.fullName.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const interest =
    typeof body.interest === "string" ? body.interest.trim() : "";
  const message =
    typeof body.message === "string" ? body.message.trim() : "";

  if (!fullName || !email || !interest) {
    return NextResponse.json(
      {
        error: "invalid_request",
        message: "Full name, email, and nature of interest are required.",
      },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "invalid_request", message: "Invalid email address." },
      { status: 400 },
    );
  }

  const turnstileError = await requireTurnstileVerification(
    body.turnstileToken,
    request,
  );
  if (turnstileError) {
    return turnstileError;
  }

  const resend = getResendClient();
  if (!resend) {
    console.error("Contact form: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      {
        error: "service_unavailable",
        message: "Unable to send your inquiry right now. Please try again later.",
      },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(fullName);
  const safeEmail = escapeHtml(email);
  const safeInterest = escapeHtml(interest);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  const { error } = await resend.emails.send({
    from: getFromEmail(),
    to: getContactToEmail(),
    replyTo: email,
    subject: `Contact inquiry from ${fullName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #1b3d2f; border-bottom: 2px solid #1b3d2f; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        <div style="margin-top: 20px; line-height: 1.6;">
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
          <p><strong>Nature of interest:</strong> ${safeInterest}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${safeMessage || "—"}
          </div>
        </div>
        <p style="margin-top: 20px; color: #666; font-size: 12px;">
          Sent from the BOTA Holdings contact form at bota.swiss.
        </p>
      </div>
    `,
    text: `
New Contact Form Submission

Name: ${fullName}
Email: ${email}
Nature of interest: ${interest}

Message:
${formatPlaintextBlock(message)}
    `.trim(),
  });

  if (error) {
    console.error("Contact form Resend error:", error);
    return NextResponse.json(
      {
        error: "delivery_failed",
        message: "Failed to send your inquiry. Please try again later.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: "Inquiry sent successfully." });
}
