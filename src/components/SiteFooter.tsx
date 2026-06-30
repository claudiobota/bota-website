import Link from "next/link";
import { FOOTER_LEGAL, NAV_ITEMS } from "@/lib/nav";
import { MaterialIcon } from "./MaterialIcon";
import { NewsletterForm } from "./NewsletterForm";

export function SiteFooter() {
  return (
    <footer className="bg-primary border-t border-primary-container">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-1 md:grid-cols-4 gap-gutter">
        <div>
          <div className="font-display text-headline-sm text-on-primary mb-6">
            BOTA
          </div>
          <p className="text-body-md text-on-primary/60 mb-8">
            An independent multi-family office, founded in 2016. Built for
            families with a multi-decade horizon.
          </p>
          <div className="flex gap-4 text-on-primary/60">
            <MaterialIcon name="public" />
            <MaterialIcon name="shield" />
            <MaterialIcon name="lock" />
          </div>
        </div>

        <div>
          <h4 className="text-label-caps text-on-primary mb-6 uppercase">
            Explore
          </h4>
          <nav className="flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-on-primary-container hover:text-on-primary transition-colors text-body-md"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-on-primary-container hover:text-on-primary transition-colors text-body-md"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="text-label-caps text-on-primary mb-6 uppercase">
            Governance
          </h4>
          <nav className="flex flex-col gap-4">
            {FOOTER_LEGAL.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-on-primary-container hover:text-on-primary transition-colors text-body-md"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/offices"
              className="text-on-primary-container hover:text-on-primary transition-colors text-body-md"
            >
              Global Offices
            </Link>
          </nav>
        </div>

        <div>
          <h4 className="text-label-caps text-on-primary mb-6 uppercase">
            Newsletter
          </h4>
          <p className="text-body-md text-on-primary/60 mb-4">
            Receive our quarterly perspective on global markets.
          </p>
          <NewsletterForm />
        </div>
      </div>

      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-on-primary/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs leading-relaxed text-on-primary/40">
        <p>
          © {new Date().getFullYear()} BOTA Holdings, LLC.
          <br />
          All rights reserved.
        </p>
        <p>
          Registered office
          <br />
          169 Madison Avenue, New York, NY 10016, United States
        </p>
        <p>
          A private multi-family office. The firm's disclosure
          brochure and governance documents are available to clients and
          prospective clients on request.
        </p>
      </div>
    </footer>
  );
}
