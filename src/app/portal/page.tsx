import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MaterialIcon } from "@/components/MaterialIcon";
import { PortalLoginForm } from "@/components/PortalLoginForm";

export const metadata: Metadata = {
  title: "Family Portal",
  description:
    "Secure access for BOTA Holdings clients. Authentication required.",
  robots: { index: false, follow: false },
};

export default function PortalPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-header bg-surface-container-low min-h-screen flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="max-w-md w-full">
          <div className="bg-surface-container-lowest border border-outline-variant/30 p-10 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <MaterialIcon name="shield" className="text-primary" />
              <span className="text-label-caps text-primary/70 uppercase">
                Family Portal
              </span>
            </div>

            <h1 className="font-display text-headline-lg text-primary mb-4">
              Restricted Access
            </h1>
            <p className="text-body-md text-secondary mb-10">
              This area is reserved for active BOTA family clients. Sign in
              with the credentials issued by your founding partner.
            </p>

            <PortalLoginForm />
          </div>

          <p className="text-body-md text-secondary text-center mt-8">
            Not a BOTA client?{" "}
            <Link
              href="/contact"
              className="text-primary border-b border-primary/30 hover:border-primary transition-all"
            >
              Begin a confidential conversation
            </Link>
            .
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
