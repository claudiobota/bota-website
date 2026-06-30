"use client";

import { useCallback, useState } from "react";
import { MaterialIcon } from "./MaterialIcon";
import { TurnstileWidget } from "./TurnstileWidget";

type Status = "idle" | "submitting" | "success" | "error";

const INTERESTS = [
  "Generational Wealth Strategy",
  "Private Equity Partnerships",
  "Philanthropic Advisory",
  "Global Real Estate Portfolio",
];

const TURNSTILE_ENABLED = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [turnstileResetKey, setTurnstileResetKey] = useState(0);

  const resetTurnstile = useCallback(() => {
    setTurnstileToken(null);
    setTurnstileResetKey((key) => key + 1);
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    if (TURNSTILE_ENABLED && !turnstileToken) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.get("fullName"),
          email: formData.get("email"),
          interest: formData.get("interest"),
          message: formData.get("message"),
          turnstileToken,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        resetTurnstile();
        return;
      }

      setStatus("success");
      form.reset();
      resetTurnstile();
      setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      resetTurnstile();
    }
  }

  const buttonLabel =
    status === "submitting"
      ? "Establishing Secure Connection…"
      : status === "success"
        ? "Brief Transmitted Successfully"
        : "Send Discreet Inquiry";

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      <Field id="full-name" label="Full Name">
        <input
          id="full-name"
          name="fullName"
          type="text"
          required
          placeholder="Johnathan Abernathy"
          className="w-full border-0 border-b border-outline-variant bg-transparent py-4 px-0 text-body-md focus:border-primary focus:outline-none transition-all"
        />
      </Field>

      <Field id="email" label="Private Email Address">
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="client@private.com"
          className="w-full border-0 border-b border-outline-variant bg-transparent py-4 px-0 text-body-md focus:border-primary focus:outline-none transition-all"
        />
      </Field>

      <Field id="interest" label="Nature of Interest">
        <select
          id="interest"
          name="interest"
          defaultValue={INTERESTS[0]}
          className="w-full border-0 border-b border-outline-variant bg-transparent py-4 px-0 text-body-md focus:border-primary focus:outline-none transition-all appearance-none cursor-pointer"
        >
          {INTERESTS.map((interest) => (
            <option key={interest}>{interest}</option>
          ))}
        </select>
      </Field>

      <Field id="message" label="Confidential Message">
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Brief context for your inquiry..."
          className="w-full border-0 border-b border-outline-variant bg-transparent py-4 px-0 text-body-md focus:border-primary focus:outline-none transition-all resize-none"
        />
      </Field>

      <TurnstileWidget
        theme="light"
        onToken={setTurnstileToken}
        onExpire={resetTurnstile}
        onError={resetTurnstile}
        resetKey={turnstileResetKey}
      />

      <button
        type="submit"
        disabled={status === "submitting" || (TURNSTILE_ENABLED && !turnstileToken)}
        className={`w-full py-5 text-label-caps flex items-center justify-center gap-4 transition-all active:scale-[0.98] disabled:opacity-60 ${
          status === "success"
            ? "bg-surface-tint text-on-primary"
            : "bg-primary text-on-primary hover:opacity-90"
        }`}
      >
        {buttonLabel}
        <MaterialIcon name={status === "success" ? "check" : "lock"} />
      </button>

      {status === "error" ? (
        <p role="alert" className="text-body-md text-error">
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative group">
      <label
        htmlFor={id}
        className="text-label-caps text-secondary group-focus-within:text-primary transition-colors block"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
