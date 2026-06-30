import { NextResponse } from "next/server";

export const runtime = "nodejs";

type LoginBody = {
  memberId?: unknown;
  password?: unknown;
};

export async function POST(request: Request) {
  let body: LoginBody;
  try {
    body = (await request.json()) as LoginBody;
  } catch {
    return NextResponse.json(
      { error: "invalid_request", message: "Malformed request body." },
      { status: 400 },
    );
  }

  if (typeof body.memberId !== "string" || typeof body.password !== "string") {
    return NextResponse.json(
      {
        error: "invalid_request",
        message: "memberId and password are required.",
      },
      { status: 400 },
    );
  }

  if (!body.memberId.trim() || !body.password) {
    return NextResponse.json(
      {
        error: "invalid_request",
        message: "memberId and password are required.",
      },
      { status: 400 },
    );
  }

  // Simulate auth lookup latency.
  await new Promise((resolve) => setTimeout(resolve, 600));

  return NextResponse.json(
    {
      error: "invalid_credentials",
      message:
        "We could not authenticate that member ID. Please contact your relationship partner to recover access.",
    },
    {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Bearer realm="BOTA Family Portal"',
      },
    },
  );
}
