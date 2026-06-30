import { NextResponse } from "next/server";
import {
  escapeHtml,
  getFromEmail,
  getNewsletterToEmail,
  getResendClient,
  isValidEmail,
} from "@/lib/email";
import { requireTurnstileVerification } from "@/lib/turnstile";

export const runtime = "nodejs";

type NewsletterBody = {
  email?: unknown;
  turnstileToken?: unknown;
};

export async function POST(request: Request) {
  let body: NewsletterBody;
  try {
    body = (await request.json()) as NewsletterBody;
  } catch {
    return NextResponse.json(
      { error: "invalid_request", message: "Malformed request body." },
      { status: 400 },
    );
  }

  const email = typeof body.email === "string" ? body.email.trim() : "";

  if (!email) {
    return NextResponse.json(
      { error: "invalid_request", message: "Email address is required." },
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
    console.error("Newsletter form: RESEND_API_KEY is not configured.");
    return NextResponse.json(
      {
        error: "service_unavailable",
        message: "Unable to subscribe right now. Please try again later.",
      },
      { status: 503 },
    );
  }

  const safeEmail = escapeHtml(email);
  const from = getFromEmail();

  const [teamResult, subscriberResult] = await Promise.all([
    resend.emails.send({
      from,
      to: getNewsletterToEmail(),
      replyTo: email,
      subject: `Newsletter subscription: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1b3d2f; border-bottom: 2px solid #1b3d2f; padding-bottom: 10px;">
            New Newsletter Subscription
          </h2>
          <p style="margin-top: 20px; line-height: 1.6;">
            <strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a>
          </p>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            Sent from the BOTA Holdings website footer at bota.swiss.
          </p>
        </div>
      `,
      text: `New newsletter subscription\n\nEmail: ${email}`,
    }),
    resend.emails.send({
      from,
      to: email,
      subject: "You are subscribed to BOTA perspectives",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #1b3d2f; border-bottom: 2px solid #1b3d2f; padding-bottom: 10px;">
            Thank you for subscribing
          </h2>
          <p style="margin-top: 20px; line-height: 1.6;">
            You will receive BOTA's quarterly perspective on global markets at this address.
          </p>
          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            BOTA Holdings, LLC · bota.swiss
          </p>
        </div>
      `,
      text:
        "Thank you for subscribing to BOTA perspectives. You will receive our quarterly market perspective at this address.",
    }),
  ]);

  if (teamResult.error || subscriberResult.error) {
    console.error("Newsletter Resend error:", {
      team: teamResult.error,
      subscriber: subscriberResult.error,
    });
    return NextResponse.json(
      {
        error: "delivery_failed",
        message: "Failed to complete your subscription. Please try again later.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ message: "Subscription confirmed." });
}
