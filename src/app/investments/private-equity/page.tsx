import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MaterialIcon } from "@/components/MaterialIcon";

export const metadata: Metadata = {
  title: "Private Equity - BOTA Holdings",
  description:
    "BOTA Holdings' private equity pillar targets industrial technology and precision manufacturing - long-hold, founder-led companies building the infrastructure of the next century.",
};

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDus6_GnT-RqYOhOnMvb4BaepthM9BfIsrbrdGglWi0ujbZ3-0SYltJZzbgpVEBj24Abu2OkujouJGOUdgbSa5pWyZ2my6Cxmj3z6bdhuiVjBT8alaVid63gMUs8HlZoVj_rnVnybVckbRhHceJSY9iBIq3wE9SSdjPpGy-yRojb5afN-jhyt8cyaB3g_NKqW73vMQ6yCiNliPdOpKPBpKEEtdoRC0t649ZUU4AI3YntnC1B5hAaBHgTyIrqZ-ElctpXZ0QqMVWQJE";

const MANDATE_CRITERIA = [
  {
    icon: "shield",
    title: "Defensible Moat",
    body: "Durable competitive advantages - proprietary technology, switching costs or regulatory barriers - that compound over a decade-plus horizon.",
  },
  {
    icon: "savings",
    title: "Capital-Efficient Model",
    body: "Businesses that generate sustainable unit economics without requiring perpetual dilutive financing rounds to survive.",
  },
  {
    icon: "public",
    title: "10+ Year Relevance Horizon",
    body: "We ask one question first: will this company matter more in 2040 than it does today? Only durable secular tailwinds pass the filter.",
  },
  {
    icon: "person",
    title: "Founder-Led Management",
    body: "Skin in the game is non-negotiable. We back operators whose identity is inseparable from the mission of the company they are building.",
  },
]

const PLATFORMS = [
  {
    icon: "handshake",
    title: "Direct & Co-investment",
    subtitle: "Partner-network sourced",
    body: "Where we have direct relationships with founders or existing shareholders, we participate as a minority co-investor — typically at ticket sizes of €300k–€800k. These positions are sourced through our founding partners' personal and professional networks, and often include information rights.",
    tags: ["Minority stakes", "Co-investment", "Information rights"],
  },
  {
    icon: "hub",
    title: "Third-Party Platforms & Feeder Funds",
    subtitle: "Curated access for assets beyond our network",
    body: "For assets where we lack direct access, we invest via regulated third-party platforms (Stablecoin) or LP commitments in small funds and co-investment vehicles. Ticket sizes are deliberately modest — typically $200k–$600k — to reflect the platform fees, lock-up periods and limited secondary liquidity of these vehicles.",
    tags: ["Stablecoin", "LP commitments", "Co-investment vehicles"],
    disclaimer:
      "Investments via third-party platforms involve additional fees charged by the platform operator and may carry extended lock-up periods and reduced secondary liquidity relative to direct holdings.",
  },
];

export default function PrivateEquityPage() {
  return (
    <>
      <SiteHeader active="investments" />
      <main className="pt-24">
        <Hero />
        <Strategy />
        <MandateCriteria />
        <AccessPlatforms />
        <BackLink />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden min-h-120 flex items-end">
      {/* Background image - grayscale, low opacity */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale opacity-15"
        />
        {/* Gradient veil over image */}
        <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-primary/40" />
      </div>

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d0e9d4 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      <div className="relative z-10 max-w-page mx-auto px-margin-mobile md:px-margin-desktop py-20 w-full">
        <span className="text-label-caps text-on-primary-container uppercase tracking-widest mb-5 block">
          Pillar I
        </span>
        <h1 className="font-display text-display-lg text-on-primary mb-6 max-w-2xl leading-tight">
          Private Equity
        </h1>
        <p className="text-body-lg text-on-primary-container opacity-90 max-w-xl leading-relaxed">
          We hold a concentrated conviction in industrial technology and
          precision manufacturing - the companies building the physical and
          digital infrastructure of the next century. Long-hold. Founder-led.
          Irreplaceable.
        </p>
      </div>
    </section>
  );
}

function Strategy() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-page mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-4">
          <span className="text-label-caps text-secondary uppercase tracking-widest mb-4 block">
            Investment Thesis
          </span>
          <h2 className="font-display text-headline-lg text-primary leading-tight">
            We Back Founders
            <br />
            Building Hard Things
          </h2>
        </div>
        <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-body-lg text-secondary leading-relaxed">
          <p>
            BOTA's private equity pillar is built on a single, clear belief:
            the most durable wealth is created by companies that solve
            structurally hard industrial problems - not by chasing liquidity
            cycles.
          </p>
          <p>
            Our thesis spans four verticals: <strong className="text-primary font-medium">industrials</strong>,{" "}
            <strong className="text-primary font-medium">deep technology</strong>,{" "}
            <strong className="text-primary font-medium">next-generation infrastructure</strong>, and{" "}
            <strong className="text-primary font-medium">defence & energy transition</strong>. Within
            each vertical we maintain strict sector discipline - we do not
            follow hype, we follow engineering.
          </p>
          <p>
            Our hold horizon is a minimum of seven years, with an explicit bias
            toward permanent capital positions where exit is optionality rather
            than necessity. This long-duration perspective allows us to partner
            with management teams operating on the timescales that genuinely
            transformative technology demands.
          </p>
          <p>
            Since 2016 our portfolio has included minority participations in
            companies across precision manufacturing, sensing and defence
            technology, and the commercial space sector &mdash; including
            secondary exposure to names such as SpaceX. Most positions are
            held through co-investments or third-party platforms; we do not
            lead rounds.
          </p>
        </div>
      </div>
    </section>
  );
}

function MandateCriteria() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-14">
          <span className="text-label-caps text-secondary uppercase tracking-widest mb-4 block">
            Mandate
          </span>
          <h2 className="font-display text-headline-lg text-primary">
            What We Look For
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {MANDATE_CRITERIA.map((criterion) => (
            <article
              key={criterion.title}
              className="bg-surface-container-lowest border border-outline-variant/30 p-8 flex flex-col gap-5 hover:border-primary/25 transition-colors duration-300"
            >
              <div className="w-11 h-11 rounded-full bg-primary-container flex items-center justify-center shrink-0">
                <MaterialIcon
                  name={criterion.icon}
                  filled
                  className="text-on-primary-container text-xl"
                />
              </div>
              <h3 className="font-display text-headline-sm text-primary">
                {criterion.title}
              </h3>
              <p className="text-body-md text-secondary leading-relaxed flex-1">
                {criterion.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccessPlatforms() {
  return (
    <section className="bg-primary py-section-gap relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d0e9d4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-14">
          <span className="text-label-caps text-on-primary-container uppercase tracking-widest mb-4 block opacity-80">
            Access Channels
          </span>
          <h2 className="font-display text-headline-lg text-on-primary">
            How We Access Opportunities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {PLATFORMS.map((platform) => (
            <article
              key={platform.title}
              className="bg-on-primary/5 border border-on-primary/10 p-10 flex flex-col gap-6 hover:bg-on-primary/10 transition-colors duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-on-primary/10 flex items-center justify-center shrink-0">
                  <MaterialIcon
                    name={platform.icon}
                    filled
                    className="text-on-primary text-2xl"
                  />
                </div>
                <div>
                  <span className="text-label-caps text-on-primary-container uppercase tracking-widest text-xs block mb-1 opacity-75">
                    {platform.subtitle}
                  </span>
                  <h3 className="font-display text-headline-md text-on-primary">
                    {platform.title}
                  </h3>
                </div>
              </div>

              <p className="text-body-md text-on-primary-container opacity-90 leading-relaxed">
                {platform.body}
              </p>

              <div className="flex flex-wrap gap-2">
                {platform.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-label-caps text-on-primary-container border border-on-primary/20 px-3 py-1 text-xs uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {platform.disclaimer && (
                <p className="text-body-md text-on-primary-container opacity-60 leading-relaxed text-xs border-t border-on-primary/10 pt-5 mt-auto">
                  <MaterialIcon
                    name="info"
                    className="text-sm align-middle mr-1.5 opacity-70"
                  />
                  {platform.disclaimer}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BackLink() {
  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-page mx-auto">
      <Link
        href="/investments"
        className="inline-flex items-center gap-3 text-label-caps text-primary uppercase tracking-widest hover:gap-4 transition-all duration-200 group"
      >
        <MaterialIcon
          name="arrow_back"
          className="text-sm group-hover:-translate-x-0.5 transition-transform duration-200"
        />
        Back to Our Holdings
      </Link>
    </section>
  );
}
