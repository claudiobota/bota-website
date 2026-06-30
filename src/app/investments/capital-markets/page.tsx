import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MaterialIcon } from "@/components/MaterialIcon";

export const metadata: Metadata = {
  title: "Capital Markets - BOTA Holdings",
  description:
    "Systematic deployment of capital across global liquid markets, utilizing proprietary risk-parity models and hedging strategies across macro, equities, trend, and volatility.",
};

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuChvrHnGZbyjKiEBqZGMy71NprDKmD-T6oD7QD_Z5ECB1ZG2VgBzshonExcItzxax0vguphu9sYRZkWOhawGJCt1NSR9qcui5htkj61xVlhlb-_mblJih5R4rNlunxwnZaFs9zgAhTnW5WaW51BOfvhbOAdBPIH4EKTed0fgssSyoaqb7xGYaiIkYv_8Ze_As7rGXENky2ab_-lxkQ6LIzaVAFYL13Ywwe3RpvI3kO_ZRUHtTbVVq-h2RsO8lF6WDkRx3wdyj9zfcs";

const STRATEGIES = [
  {
    icon: "public",
    title: "Global Macro",
    body: "Discretionary and systematic macro positioning across G10 FX, rates and commodities; thematic views held for 6–18 months.",
  },
  {
    icon: "show_chart",
    title: "Long / Short Equity",
    body: "Fundamental long/short across global equities; concentrated 20–30 name book with hard 15% single-name cap; bias toward industrials, energy, and financials.",
  },
  {
    icon: "trending_up",
    title: "Systematic Trend",
    body: "Rules-based CTA-style strategy across 40+ liquid futures markets; designed to perform in crisis and trending regimes.",
  },
  {
    icon: "equalizer",
    title: "Volatility & Relative Value",
    body: "Volatility arbitrage and cross-asset relative value; functions as a carry engine in stable environments and a hedge during dislocations.",
  },
];

const PLATFORMS = [
  {
    icon: "account_balance",
    title: "Internal Discretionary Accounts",
    body: "The liquid book is managed directly by the founding partners through personal and family discretionary accounts. There is no external fund structure; all capital is proprietary.",
  },
  {
    icon: "hub",
    title: "Execution via Interactive Brokers",
    body: "Equities, bonds, ETFs, and FX are executed through Interactive Brokers, chosen for its multi-currency, multi-market capabilities at a cost structure appropriate for a boutique office of our scale.",
  },
];

export default function CapitalMarketsPage() {
  return (
    <>
      <SiteHeader active="investments" />
      <main className="pt-24">
        <Hero />
        <StrategyThesis />
        <StrategyPillars />
        <ExecutionInfrastructure />
        <BackLink />
      </main>
      <SiteFooter />
    </>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative bg-primary overflow-hidden min-h-140 flex items-center">
      {/* Background image - grayscale, low opacity backdrop */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale opacity-15"
        />
        <div className="absolute inset-0 bg-primary/70" />
      </div>

      {/* Dot-grid texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d0e9d4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-page mx-auto px-margin-mobile md:px-margin-desktop py-section-gap w-full">
        <div className="max-w-3xl">
          <span className="text-label-caps text-on-primary-container uppercase tracking-widest mb-6 block opacity-80">
            Pillar III
          </span>
          <h1 className="font-display text-display-lg text-on-primary mb-8 leading-tight">
            Capital Markets
          </h1>
          <p className="text-body-lg text-on-primary-container opacity-90 leading-relaxed max-w-2xl">
            Systematic deployment of capital across global liquid markets,
            utilising proprietary risk-parity models and multi-strategy
            frameworks to generate uncorrelated return streams and preserve
            portfolio-wide resilience.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Strategy Thesis ───────────────────────────────────────────────────────── */

function StrategyThesis() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-page mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        <div className="lg:col-span-4">
          <span className="text-label-caps text-secondary uppercase tracking-widest mb-4 block">
            Investment Thesis
          </span>
          <h2 className="font-display text-headline-lg text-primary leading-snug">
            The Firm's Shock Absorber & Opportunity Fund
          </h2>
        </div>
        <div className="lg:col-span-8 space-y-6">
          <p className="text-body-lg text-secondary leading-relaxed">
            We run liquid books alongside the illiquid pillars. The Capital
            Markets pillar provides daily liquidity, hedging capacity, and
            uncorrelated return streams - it is the mechanism by which
            BOTA can act swiftly when dislocations arise elsewhere in the
            portfolio.
          </p>
          <p className="text-body-lg text-secondary leading-relaxed">
            All strategies are systematic and rules-based with human oversight
            at the portfolio level. This discipline prevents drift during
            volatile regimes while preserving the flexibility to overlay
            discretionary thematic views at the macro book level.
          </p>
          <p className="text-body-lg text-secondary leading-relaxed">
            Since 2016 we have navigated several significant market events
            — including the February 2018 vol spike, the March 2020
            COVID dislocation, and the 2022 rate-shock cycle — each of
            which has sharpened our risk protocols. The book remains small
            and proprietary; all capital is the founding partners’ own.
          </p>
          <div className="flex items-start gap-4 border-l-2 border-primary pl-6 py-2">
            <p className="text-body-md text-primary leading-relaxed italic">
              &ldquo;Liquidity is not just a feature - it is an asset class
              in its own right. The capital markets book turns daily marks into
              a strategic resource for the entire firm.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Strategy Pillars ──────────────────────────────────────────────────────── */

function StrategyPillars() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-14">
          <span className="text-label-caps text-secondary uppercase tracking-widest mb-4 block">
            Strategies
          </span>
          <h2 className="font-display text-headline-lg text-primary">
            Four-Pillar Strategy Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {STRATEGIES.map((s) => (
            <article
              key={s.title}
              className="bg-surface-container-lowest border border-outline-variant/30 p-10 flex flex-col gap-6 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="w-12 h-12 bg-primary-container flex items-center justify-center">
                <MaterialIcon
                  name={s.icon}
                  filled
                  className="text-on-primary-container text-2xl"
                />
              </div>
              <div>
                <h3 className="font-display text-headline-sm text-primary mb-3">
                  {s.title}
                </h3>
                <p className="text-body-md text-secondary leading-relaxed">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Execution Infrastructure ──────────────────────────────────────────────── */

function ExecutionInfrastructure() {
  return (
    <section className="bg-primary py-section-gap relative overflow-hidden">
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d0e9d4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-14">
          <span className="text-label-caps text-on-primary-container uppercase tracking-widest mb-4 block opacity-80">
            Infrastructure
          </span>
          <h2 className="font-display text-headline-lg text-on-primary">
            Execution Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {PLATFORMS.map((p) => (
            <article
              key={p.title}
              className="border border-on-primary/15 bg-on-primary/5 p-10 flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-on-primary/10 flex items-center justify-center">
                <MaterialIcon
                  name={p.icon}
                  filled
                  className="text-on-primary-container text-2xl"
                />
              </div>
              <div>
                <h3 className="font-display text-headline-sm text-on-primary mb-3">
                  {p.title}
                </h3>
                <p className="text-body-md text-on-primary-container opacity-90 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Back Link ─────────────────────────────────────────────────────────────── */

function BackLink() {
  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-page mx-auto">
      <Link
        href="/investments"
        className="inline-flex items-center gap-2 text-label-caps text-secondary uppercase tracking-widest hover:text-primary transition-colors duration-200 group"
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
