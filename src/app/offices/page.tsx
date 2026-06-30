import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { OfficesGlobe } from "@/components/OfficesGlobe";
import { MaterialIcon } from "@/components/MaterialIcon";
import { OFFICES } from "@/lib/offices";

export const metadata: Metadata = {
  title: "Global Offices",
  description:
    "Four offices, two continents. Explore the BOTA Holdings footprint - New York, Lugano, Milan and London - and the practice each office is built around.",
};

export default function OfficesPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <OfficesHero />
        <GlobeBand />
        <RosterGrid />
        <ContactBand />
      </main>
      <SiteFooter />
    </>
  );
}

function OfficesHero() {
  return (
    <section className="relative bg-surface-container-lowest border-b border-outline-variant/30 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-24 w-[480px] h-[480px] rounded-full bg-primary/3 pointer-events-none hidden md:block"
      />
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop py-section-gap relative">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-3 text-label-caps uppercase text-secondary/70 mb-12"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            BOTA
          </Link>
          <MaterialIcon name="chevron_right" className="text-sm opacity-60" />
          <span className="text-primary">Global Offices</span>
        </nav>

        <div className="grid grid-cols-12 gap-gutter items-end">
          <div className="col-span-12 md:col-span-8">
            <span className="text-label-caps text-on-primary-container uppercase">
              Global Footprint
            </span>
            <h1 className="font-display text-display-lg text-primary mt-6 mb-10 leading-tight">
              Four Cities,
              <br />
              One Practice
            </h1>
            <p className="text-body-lg text-secondary leading-relaxed max-w-2xl">
              Our offices are not branches. Each is a small, partner-led
              practice with its own jurisdictional expertise - and each
              works as part of a single, deliberately limited group. Hover
              the globe to meet them.
            </p>
          </div>
          <aside className="col-span-12 md:col-span-3 md:col-start-10">
            <div className="border border-outline-variant/40 bg-surface-container-low/40 p-8">
              <p className="text-label-caps uppercase text-secondary mb-6">
                At a glance
              </p>
              <dl className="space-y-6">
                <Stat label="Offices" value="4" />
                <Stat label="Continents" value="2" />
                <Stat label="Founded" value="MMXVI" />
                <Stat label="Time zones" value="UTC −5 to +1" />
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-label-caps uppercase text-secondary/70 mb-1">
        {label}
      </dt>
      <dd className="font-display text-headline-sm text-primary">{value}</dd>
    </div>
  );
}

function GlobeBand() {
  return (
    <section className="relative bg-primary text-on-primary overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d0e9d4 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] rounded-full pointer-events-none hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(180,205,184,0.10) 0%, transparent 65%)",
        }}
      />

      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop py-section-gap relative">
        <div className="mb-16 max-w-2xl">
          <span className="text-label-caps text-on-primary-container uppercase">
            The Map
          </span>
          <h2 className="font-display text-headline-lg text-on-primary mt-4">
            A deliberate footprint
          </h2>
          <p className="text-body-md text-on-primary-container mt-6 leading-relaxed">
            From New York's founding office, BOTA expanded across the
            Atlantic into three European centres - chosen for the families
            and the regulators they serve, not for the brochure.
          </p>
        </div>

        <OfficesGlobe />
      </div>
    </section>
  );
}

function RosterGrid() {
  return (
    <section className="bg-surface py-section-gap">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <span className="text-label-caps text-on-primary-container uppercase">
              The Roster
            </span>
            <h2 className="font-display text-headline-lg text-primary mt-4">
              Every office, in detail
            </h2>
          </div>
          <p className="max-w-md text-body-md text-secondary">
            Each office is led by a founding partner. Reach out to the city
            most aligned with your practice - every inquiry is routed
            directly to a partner within two business days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {OFFICES.map((office) => (
            <article
              key={office.id}
              className="group border border-outline-variant/40 bg-surface-container-lowest p-10 hover:border-primary/40 transition-all duration-500 flex flex-col gap-6"
            >
              <header className="flex items-baseline justify-between">
                <span className="font-display text-label-caps text-on-primary-container tracking-[0.2em]">
                  {office.index}
                </span>
                <span className="text-label-caps uppercase text-secondary/80">
                  {office.opened}
                </span>
              </header>

              <div>
                <h3 className="font-display text-headline-md text-primary leading-tight">
                  {office.city}
                </h3>
                <p className="text-label-caps uppercase text-secondary mt-2">
                  {office.country} · {office.district}
                </p>
              </div>

              <p className="font-display italic text-body-lg text-primary/80 leading-relaxed border-l-2 border-primary-container pl-4">
                {office.expertise}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-body-md text-secondary">
                {office.practice.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 leading-snug"
                  >
                    <span
                      aria-hidden
                      className="mt-2 w-1 h-1 bg-primary-container rounded-full shrink-0"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-outline-variant/30 grid grid-cols-1 sm:grid-cols-2 gap-6 text-body-md text-secondary">
                <div>
                  <p className="text-label-caps uppercase text-secondary/70 mb-1">
                    Address
                  </p>
                  <p className="text-primary leading-snug">
                    {office.street}
                    <br />
                    {office.postal}
                  </p>
                </div>
                <div>
                  <p className="text-label-caps uppercase text-secondary/70 mb-1">
                    Languages
                  </p>
                  <p className="text-primary">{office.languages.join(" · ")}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactBand() {
  return (
    <section className="bg-surface-container-low border-t border-outline-variant/30">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop py-section-gap grid grid-cols-12 gap-gutter items-center">
        <div className="col-span-12 md:col-span-7">
          <span className="text-label-caps uppercase text-on-primary-container">
            Begin a conversation
          </span>
          <h2 className="font-display text-headline-lg text-primary mt-4 mb-6">
            Every inquiry reaches a founding partner
          </h2>
          <p className="text-body-md text-secondary max-w-md leading-relaxed">
            There are no account managers and no relationship layers - only
            direct access to the principals making the decisions for your
            family.
          </p>
        </div>
        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <Link
            href="/contact"
            className="block w-full text-center bg-primary text-on-primary px-10 py-6 text-label-caps uppercase hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            The Private Office
          </Link>
        </div>
      </div>
    </section>
  );
}
