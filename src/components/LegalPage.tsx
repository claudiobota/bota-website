import Link from "next/link";
import type { ReactNode } from "react";
import { siteEmail } from "@/lib/site";
import { MaterialIcon } from "./MaterialIcon";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";

const ROMAN = [
  "I",
  "II",
  "III",
  "IV",
  "V",
  "VI",
  "VII",
  "VIII",
  "IX",
  "X",
  "XI",
  "XII",
];

export type LegalSection = {
  id: string;
  title: string;
  summary?: string;
  content: ReactNode;
};

export type RelatedDoc = {
  label: string;
  href: string;
  description: string;
};

export type RegisteredOffice = {
  entity: string;
  lines: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  version: string;
  effectiveDate: string;
  jurisdiction: string;
  registeredOffice?: RegisteredOffice;
  sections: LegalSection[];
  related: RelatedDoc[];
  complianceContact?: {
    email: string;
    note: string;
  };
};

const DEFAULT_REGISTERED_OFFICE: RegisteredOffice = {
  entity: "BOTA Holdings, LLC",
  lines: ["169 Madison Avenue", "New York, NY 10016", "United States"],
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  version,
  effectiveDate,
  jurisdiction,
  registeredOffice = DEFAULT_REGISTERED_OFFICE,
  sections,
  related,
  complianceContact = {
    email: siteEmail("compliance"),
    note: "For questions about this document, our regulatory framework, or to exercise your rights, contact our compliance team. A founding partner reviews every inquiry.",
  },
}: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <LegalHero
          eyebrow={eyebrow}
          title={title}
          intro={intro}
          version={version}
          effectiveDate={effectiveDate}
          jurisdiction={jurisdiction}
          registeredOffice={registeredOffice}
        />
        <LegalBody sections={sections} />
        <LegalCompliance
          related={related}
          complianceContact={complianceContact}
          effectiveDate={effectiveDate}
          version={version}
          registeredOffice={registeredOffice}
        />
      </main>
      <SiteFooter />
    </>
  );
}

function LegalHero({
  eyebrow,
  title,
  intro,
  version,
  effectiveDate,
  jurisdiction,
  registeredOffice,
}: {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  version: string;
  effectiveDate: string;
  jurisdiction: string;
  registeredOffice: RegisteredOffice;
}) {
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
          <span className="text-primary">Governance</span>
          <MaterialIcon name="chevron_right" className="text-sm opacity-60" />
          <span className="text-on-primary-container">{eyebrow}</span>
        </nav>

        <div className="grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-8">
            <span className="text-label-caps text-on-primary-container uppercase">
              {eyebrow}
            </span>
            <h1 className="font-display text-display-lg text-primary mt-6 mb-10 leading-tight">
              {title}
            </h1>
            <div className="text-body-lg text-secondary leading-relaxed max-w-2xl">
              {intro}
            </div>
          </div>

          <aside className="col-span-12 md:col-span-3 md:col-start-10">
            <div className="border border-outline-variant/40 bg-surface-container-low/40 p-8 sticky top-32">
              <p className="text-label-caps uppercase text-secondary mb-6">
                Document
              </p>
              <dl className="space-y-6">
                <div>
                  <dt className="text-label-caps uppercase text-secondary/70 mb-1">
                    Version
                  </dt>
                  <dd className="font-display text-headline-sm text-primary">
                    {version}
                  </dd>
                </div>
                <div>
                  <dt className="text-label-caps uppercase text-secondary/70 mb-1">
                    Effective
                  </dt>
                  <dd className="font-display text-headline-sm text-primary">
                    {effectiveDate}
                  </dd>
                </div>
                <div className="pt-6 border-t border-outline-variant/40">
                  <dt className="text-label-caps uppercase text-secondary/70 mb-2">
                    Jurisdiction
                  </dt>
                  <dd className="text-body-md text-primary leading-snug">
                    {jurisdiction}
                  </dd>
                </div>
                <div className="pt-6 border-t border-outline-variant/40">
                  <dt className="text-label-caps uppercase text-secondary/70 mb-2">
                    Registered Office
                  </dt>
                  <dd className="text-body-md text-primary leading-snug">
                    <span className="font-display block mb-1">
                      {registeredOffice.entity}
                    </span>
                    {registeredOffice.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function LegalBody({ sections }: { sections: LegalSection[] }) {
  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-12 gap-gutter">
          <aside className="col-span-12 md:col-span-3">
            <div className="md:sticky md:top-32">
              <p className="text-label-caps uppercase text-secondary mb-6">
                Contents
              </p>
              <ol className="space-y-3">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-baseline gap-4 text-body-md text-secondary hover:text-primary transition-colors"
                    >
                      <span className="font-display text-label-caps text-on-primary-container/80 w-6 shrink-0">
                        {ROMAN[index]}
                      </span>
                      <span className="border-b border-transparent group-hover:border-primary/40 transition-colors">
                        {section.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

          <article className="col-span-12 md:col-span-8 md:col-start-5">
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-20 last:mb-0 scroll-mt-32"
              >
                <div className="flex items-baseline gap-6 mb-8 pb-6 border-b border-outline-variant/30">
                  <span className="font-display text-headline-sm text-on-primary-container shrink-0">
                    {ROMAN[index]}
                  </span>
                  <h2 className="font-display text-headline-md text-primary leading-tight">
                    {section.title}
                  </h2>
                </div>
                {section.summary ? (
                  <p className="font-display italic text-body-lg text-primary/80 mb-8 leading-relaxed">
                    {section.summary}
                  </p>
                ) : null}
                <div className="space-y-6 text-body-md text-secondary leading-relaxed">
                  {section.content}
                </div>
              </section>
            ))}
          </article>
        </div>
      </div>
    </section>
  );
}

function LegalCompliance({
  related,
  complianceContact,
  effectiveDate,
  version,
  registeredOffice,
}: {
  related: RelatedDoc[];
  complianceContact: { email: string; note: string };
  effectiveDate: string;
  version: string;
  registeredOffice: RegisteredOffice;
}) {
  return (
    <>
      <section className="bg-primary text-on-primary py-section-gap relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(#d0e9d4 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop relative z-10 grid grid-cols-12 gap-gutter">
          <div className="col-span-12 md:col-span-5">
            <span className="text-label-caps uppercase text-on-primary-container">
              Direct Access
            </span>
            <h2 className="font-display text-headline-lg mt-4 mb-8">
              Compliance & Regulatory
            </h2>
            <p className="text-body-md text-on-primary-container mb-10 max-w-md leading-relaxed">
              {complianceContact.note}
            </p>
            <a
              href={`mailto:${complianceContact.email}`}
              className="inline-flex items-center gap-4 border border-on-primary/40 px-8 py-5 text-label-caps uppercase hover:bg-on-primary hover:text-primary transition-all"
            >
              <MaterialIcon name="mail" />
              {complianceContact.email}
            </a>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-label-caps uppercase text-on-primary-container mb-6">
              Related Documents
            </p>
            <ul className="divide-y divide-on-primary/10 border-t border-b border-on-primary/10">
              {related.map((doc) => (
                <li key={doc.href}>
                  <Link
                    href={doc.href}
                    className="group flex items-center justify-between gap-6 py-6"
                  >
                    <div>
                      <p className="font-display text-headline-sm mb-1">
                        {doc.label}
                      </p>
                      <p className="text-body-md text-on-primary-container">
                        {doc.description}
                      </p>
                    </div>
                    <MaterialIcon
                      name="arrow_forward"
                      className="text-on-primary-container group-hover:text-on-primary transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low border-t border-outline-variant/30">
        <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-label-caps uppercase text-secondary">
          <span>
            Document version {version} · Effective {effectiveDate}
          </span>
          <span>
            {registeredOffice.entity} · {registeredOffice.lines.join(", ")}
          </span>
        </div>
      </section>
    </>
  );
}

export function LegalParagraph({ children }: { children: ReactNode }) {
  return <p className="text-body-md text-secondary leading-relaxed">{children}</p>;
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-display text-headline-sm text-primary mt-10 mb-4">
      {children}
    </h3>
  );
}

export function LegalKeyPoints({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-4 text-body-md text-secondary leading-relaxed"
        >
          <span
            aria-hidden
            className="mt-[10px] w-1.5 h-1.5 bg-primary-container rounded-full shrink-0"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function LegalDefinitions({
  items,
}: {
  items: { term: string; description: ReactNode }[];
}) {
  return (
    <dl className="border border-outline-variant/40 divide-y divide-outline-variant/40">
      {items.map((item) => (
        <div
          key={item.term}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-6"
        >
          <dt className="text-label-caps uppercase text-primary md:col-span-1">
            {item.term}
          </dt>
          <dd className="md:col-span-3 text-body-md text-secondary leading-relaxed">
            {item.description}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function LegalEmphasis({
  icon = "info",
  children,
}: {
  icon?: string;
  children: ReactNode;
}) {
  return (
    <aside className="border-l-2 border-primary-container bg-surface-container-low/70 px-6 py-5 flex gap-4 items-start">
      <MaterialIcon name={icon} className="text-primary-container mt-1 shrink-0" />
      <div className="text-body-md text-on-surface leading-relaxed">
        {children}
      </div>
    </aside>
  );
}

export function LegalAuthorityGrid({
  items,
}: {
  items: {
    city: string;
    entity: string;
    authority: string;
    reference: string;
  }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {items.map((item) => (
        <div
          key={item.city}
          className="border border-outline-variant/40 bg-surface-container-lowest p-6"
        >
          <div className="flex items-baseline justify-between mb-4">
            <p className="font-display text-headline-sm text-primary">
              {item.city}
            </p>
            <span className="text-label-caps uppercase text-on-primary-container">
              {item.authority}
            </span>
          </div>
          <p className="text-body-md text-secondary mb-4 leading-snug">
            {item.entity}
          </p>
          <p className="text-label-caps uppercase text-secondary/80">
            Ref. {item.reference}
          </p>
        </div>
      ))}
    </div>
  );
}
