"use client";

import { useCallback, useState } from "react";
import { MaterialIcon } from "./MaterialIcon";
import { TurnstileWidget } from "./TurnstileWidget";

const TURNSTILE_ENABLED = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "done" | "error"
  >("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const resetTurnstile = useCallback(() => {
    setTurnstileToken(null);
    setTurnstileResetKey((key) => key + 1);
  }, []);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!email) return;

    if (TURNSTILE_ENABLED && !turnstileToken) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, turnstileToken }),
      });

      if (!response.ok) {
        setStatus("error");
        resetTurnstile();
        return;
      }

      setStatus("done");
      setEmail("");
      resetTurnstile();
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      resetTurnstile();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex border-b border-on-primary/20 pb-2">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          aria-label="Email address"
          className="bg-transparent border-none text-on-primary placeholder:text-on-primary/40 focus:ring-0 focus:outline-none w-full text-body-md"
        />
        <button
          type="submit"
          disabled={
            status === "submitting" || (TURNSTILE_ENABLED && !turnstileToken)
          }
          aria-label={status === "done" ? "Subscribed" : "Subscribe"}
          className="text-on-primary disabled:opacity-50"
        >
          <MaterialIcon name={status === "done" ? "check" : "arrow_forward"} />
        </button>
      </div>

      <TurnstileWidget
        theme="dark"
        size="compact"
        onToken={setTurnstileToken}
        onExpire={resetTurnstile}
        onError={resetTurnstile}
        resetKey={turnstileResetKey}
      />

      {status === "error" ? (
        <p role="alert" className="text-body-md text-on-primary/70">
          Subscription failed. Please complete the security check and try again.
        </p>
      ) : null}
    </form>
  );
}
