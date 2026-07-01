"use client";

import { useState } from "react";
import { siteEmail } from "@/lib/site";
import { MaterialIcon } from "./MaterialIcon";

type Status = "idle" | "submitting" | "error";

type LoginErrorResponse = {
  error?: string;
  message?: string;
};

export function PortalLoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  function resetErrorIfNeeded() {
    if (status === "error") {
      setStatus("idle");
      setErrorMessage(null);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!identifier || !password || status === "submitting") return;

    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ memberId: identifier, password }),
      });

      let body: LoginErrorResponse = {};
      try {
        body = (await response.json()) as LoginErrorResponse;
      } catch {
        // Non-JSON response - fall through to generic messaging below.
      }

      if (response.ok) {
        // Auth always fails for now; treat unexpected success defensively.
        setStatus("error");
        setErrorMessage("Unexpected response. Please try again.");
        return;
      }

      setStatus("error");
      setErrorMessage(
        body.message ??
          (response.status === 401
            ? "We could not authenticate that member ID. Please contact your founding partner to recover access."
            : "Sign-in is temporarily unavailable. Please try again later."),
      );
    } catch {
      setStatus("error");
      setErrorMessage(
        "Could not reach the authentication service. Please check your connection and try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <Field id="member-id" label="Member ID or Email">
        <input
          id="member-id"
          name="memberId"
          type="text"
          required
          autoComplete="username"
          value={identifier}
          onChange={(e) => {
            setIdentifier(e.target.value);
            resetErrorIfNeeded();
          }}
          placeholder={siteEmail("member")}
          className="w-full border-0 border-b border-outline-variant bg-transparent py-4 px-0 text-body-md focus:border-primary focus:outline-none transition-all"
        />
      </Field>

      <Field id="password" label="Password">
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            resetErrorIfNeeded();
          }}
          placeholder="••••••••"
          className="w-full border-0 border-b border-outline-variant bg-transparent py-4 px-0 text-body-md focus:border-primary focus:outline-none transition-all tracking-widest"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-primary text-on-primary py-5 text-label-caps hover:opacity-90 transition-all active:scale-[0.98] disabled:opacity-60 flex items-center justify-center gap-4"
      >
        {status === "submitting" ? "Authenticating…" : "Sign In"}
        <MaterialIcon name="lock" />
      </button>

      <div role="alert" aria-live="polite" className="min-h-px">
        {status === "error" && errorMessage ? (
          <div className="flex items-start gap-3 p-4 border border-error/30 bg-error-container/40">
            <MaterialIcon name="error" filled className="text-error mt-0.5" />
            <div className="space-y-1">
              <p className="text-body-md font-medium text-on-error-container">
                Invalid credentials
              </p>
              <p className="text-body-md text-on-error-container/80">
                {errorMessage}
              </p>
            </div>
          </div>
        ) : null}
      </div>
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
        className="text-label-caps text-secondary group-focus-within:text-primary transition-colors block uppercase"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
