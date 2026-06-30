import { Resend } from "resend";
import { siteEmail } from "@/lib/site";

const DEFAULT_FROM = `BOTA Holdings <${siteEmail("noreply")}>`;

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new Resend(apiKey);
}

export function getFromEmail() {
  return process.env.FROM_EMAIL ?? DEFAULT_FROM;
}

export function getContactToEmail() {
  return (
    process.env.CONTACT_TO_EMAIL ??
    process.env.TO_EMAIL ??
    siteEmail("contact")
  );
}

export function getNewsletterToEmail() {
  return (
    process.env.NEWSLETTER_TO_EMAIL ??
    process.env.TO_EMAIL ??
    siteEmail("newsletter")
  );
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function formatPlaintextBlock(value: string) {
  return value.trim() || "—";
}
