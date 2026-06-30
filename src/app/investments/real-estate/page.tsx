import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MaterialIcon } from "@/components/MaterialIcon";

export const metadata: Metadata = {
  title: "Real Estate - BOTA Holdings",
  description:
    "A curated collection of Grade-A commercial landmarks and trophy assets in premier metropolitan markets globally. BOTA's real estate pillar acquires irreplaceable assets for income and generational appreciation.",
};

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAC76f37OEKhph6WtbzupXsC2Cg1AHdcP9TS_eK8794qVYwTvsgrtPmy2kp8--FwwGZN9pUVHg8Xz1owqVETIgd4-1Mx0k9oAuaaDgssU-2ok_jg_FNnd2CUKLZ_2MTYr2AI7L1EdFFtNk9fxAwqbPpWXOYuRWH_HR2i9lNbcwyYbLGfT0nhC0jvaNYMjQ0tQu_gyrA02mfcpmLwrFO-yNvyUEh5qCq6MhWLKpA1REfxTq9UgZr5U_2NZNwTrwuIX0Z5BIc-XiVLkU";

const MANDATE_CRITERIA = [
  {
    icon: "shield",
    title: "Core & Core-Plus Only",
    body: "We do not speculate on value-add or opportunistic risk. Every acquisition must demonstrate durable income from day one, with an irreplaceable location as its fundamental underpin.",
  },
  {
    icon: "location_city",
    title: "Gateway Cities",
    body: "New York, London, Milan, Lugano - markets where institutional demand is perennial, liquidity is deep, and long-term capital preservation is a structural feature of ownership.",
  },
  {
    icon: "apartment",
    title: "Grade-A or Trophy",
    body: "We exclusively target assets at the top of their submarket's quality hierarchy - modern office towers, landmark mixed-use schemes, and architecturally significant residential blocks.",
  },
  {
    icon: "trending_up",
    title: "Long-Term Income Profile",
    body: "Assets must carry or be repositionable to carry stable, long-dated leases with institutional or high-net-worth tenants. We hold for income and generational capital appreciation.",
  },
];

const ACCESS_CHANNELS = [
  {
    icon: "key",
    title: "Direct Acquisition",
    subtitle: "Principal capital, off-market where possible",
    body: "The majority of our real estate is acquired directly, typically off-market via personal introductions. Ticket sizes range from €600k to £1.2M. We act as a single principal, which gives us speed and discretion that larger buyers cannot match.",
    tags: ["Off-market preference", "€600k–£1.2M tickets", "Principal capital"],
  },
  {
    icon: "handshake",
    title: "Syndicate & Fund Participation",
    subtitle: "Co-investment for diversification",
    body: "For assets or markets where a direct acquisition is not practical, we participate as a minority partner in small syndicates or as an LP in boutique real estate funds. Co-investors are vetted personally; we avoid large commingled vehicles.",
    tags: ["3–5 partner syndicates", "Boutique LP commitments", "Minority positions"],
  },
];

export default function RealEstatePage() {
  return (
    <>
      <SiteHeader active="investments" />
      <main className="pt-24">
        <Hero />
        <StrategySection />
        <MandateCriteria />
        <AccessChannels />
        <BackLink />
      </main>
      <SiteFooter />
    </>
  );
}

function Hero() {
  return (
    <section className="relative bg-primary text-on-primary overflow-hidden min-h-[520px] flex items-end">
      {/* Backdrop image - grayscale, low opacity */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale opacity-15"
        />
        {/* Gradient overlay to keep text legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40" />
      </div>

      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d0e9d4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 w-full max-w-page mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <span className="text-label-caps text-on-primary-container mb-4 block uppercase tracking-widest opacity-80">
          Pillar II
        </span>
        <h1 className="font-display text-display-lg mb-6 max-w-xl leading-tight">
          Real Estate
        </h1>
        <p className="text-body-lg text-on-primary-container opacity-90 max-w-2xl leading-relaxed">
          A curated collection of Grade-A commercial landmarks and trophy
          assets in premier metropolitan markets. We acquire irreplaceable
          real estate - buildings that cannot be replicated, in cities that
          never depreciate - and hold them for income and generational
          capital appreciation.
        </p>
      </div>
    </section>
  );
}

function StrategySection() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-page mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-4">
          <span className="text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Investment Thesis
          </span>
          <h2 className="font-display text-headline-lg text-primary leading-tight">
            Strategy
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <p className="text-body-lg text-secondary leading-relaxed">
            We only acquire or co-invest in assets where location is
            truly irreplaceable - what the market calls core or core-plus.
            Our focus spans office towers, mixed-use developments, and
            select residential in gateway cities: New York, London, Milan,
            and Lugano.
          </p>
          <p className="text-body-lg text-secondary leading-relaxed">
            We never speculate on development risk. Construction pipelines,
            planning risk, and lease-up uncertainty are constraints we
            deliberately avoid. Every asset we underwrite must already
            demonstrate - or be immediately repositionable to demonstrate -
            the income profile and tenant quality we require on day one.
          </p>
          <p className="text-body-lg text-secondary leading-relaxed">
            Our holding horizon is indefinite. We acquire for income and
            for generational appreciation, not for near-term disposition.
            This discipline shapes the assets we pursue, the structures we
            accept, and the partners we co-invest alongside.
          </p>
          <p className="text-body-lg text-secondary leading-relaxed">
            Since 2016 we have assembled a small portfolio of properties
            across our four cities — offices, residential, and mixed-use
            — acquired directly or through modest co-investment syndicates.
            We do not publicise individual assets, but our markets of
            activity include Lugano, Milan, London and New York.
          </p>

          {/* Thesis pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter pt-4">
            {[
              { label: "Asset class", value: "Office · Mixed-Use · Select Residential" },
              { label: "Markets", value: "New York · London · Milan · Lugano" },
              { label: "Strategy", value: "Core / Core-Plus" },
              { label: "Horizon", value: "Long-term hold - no forced exit" },
            ].map((item) => (
              <div
                key={item.label}
                className="border-l-2 border-primary/20 pl-4"
              >
                <span className="text-label-caps text-secondary uppercase tracking-widest block mb-1">
                  {item.label}
                </span>
                <span className="text-body-md text-primary font-medium">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MandateCriteria() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12">
          <span className="text-label-caps text-secondary mb-4 block uppercase tracking-widest">
            Acquisition Mandate
          </span>
          <h2 className="font-display text-headline-lg text-primary">
            Mandate Criteria
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {MANDATE_CRITERIA.map((criterion) => (
            <article
              key={criterion.title}
              className="bg-surface-container-lowest border border-outline-variant/30 p-8 group hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-11 h-11 bg-primary-container flex items-center justify-center">
                  <MaterialIcon
                    name={criterion.icon}
                    filled
                    className="text-on-primary-container text-xl"
                  />
                </div>
                <div>
                  <h3 className="font-display text-headline-sm text-primary mb-3">
                    {criterion.title}
                  </h3>
                  <p className="text-body-md text-secondary leading-relaxed">
                    {criterion.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AccessChannels() {
  return (
    <section className="bg-primary text-on-primary py-section-gap relative overflow-hidden">
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d0e9d4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-12">
          <span className="text-label-caps text-on-primary-container mb-4 block uppercase tracking-widest opacity-80">
            How We Invest
          </span>
          <h2 className="font-display text-headline-lg">
            Access Channels
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {ACCESS_CHANNELS.map((channel) => (
            <article
              key={channel.title}
              className="border border-on-primary/10 p-8 hover:border-on-primary/25 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 flex items-center justify-center border border-on-primary/20">
                  <MaterialIcon
                    name={channel.icon}
                    className="text-on-primary-container text-xl"
                  />
                </div>
                <div>
                  <h3 className="font-display text-headline-sm">
                    {channel.title}
                  </h3>
                  <span className="text-label-caps text-on-primary-container opacity-70 uppercase tracking-widest">
                    {channel.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-body-md text-on-primary-container opacity-90 leading-relaxed mb-6">
                {channel.body}
              </p>

              <div className="flex flex-wrap gap-2">
                {channel.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-label-caps text-on-primary-container border border-on-primary/15 px-3 py-1 uppercase tracking-wide opacity-80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
        className="inline-flex items-center gap-3 text-label-caps text-secondary hover:text-primary transition-colors duration-200 uppercase tracking-widest group"
      >
        <MaterialIcon
          name="arrow_back"
          className="text-sm group-hover:-translate-x-1 transition-transform duration-200"
        />
        Back to Our Holdings
      </Link>
    </section>
  );
}
