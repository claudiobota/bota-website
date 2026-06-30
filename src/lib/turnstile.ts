import { NextResponse } from "next/server";

type TurnstileVerifyResponse = {
  success: boolean;
  "error-codes"?: string[];
};

export function isTurnstileEnabled() {
  return Boolean(
    process.env.TURNSTILE_SECRET_KEY &&
      process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
  );
}

export function getRequestIp(request: Request) {
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    undefined
  );
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return false;
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);
  if (remoteIp) {
    formData.append("remoteip", remoteIp);
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    },
  );

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as TurnstileVerifyResponse;
  return result.success;
}

export async function requireTurnstileVerification(
  token: unknown,
  request: Request,
): Promise<NextResponse | null> {
  if (!isTurnstileEnabled()) {
    return null;
  }

  if (typeof token !== "string" || !token.trim()) {
    return NextResponse.json(
      {
        error: "verification_required",
        message: "Please complete the security check and try again.",
      },
      { status: 400 },
    );
  }

  const verified = await verifyTurnstileToken(
    token.trim(),
    getRequestIp(request),
  );

  if (!verified) {
    return NextResponse.json(
      {
        error: "verification_failed",
        message: "Security verification failed. Please try again.",
      },
      { status: 403 },
    );
  }

  return null;
}
