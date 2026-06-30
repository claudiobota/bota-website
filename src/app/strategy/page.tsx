import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MaterialIcon } from "@/components/MaterialIcon";

export const metadata: Metadata = {
  title: "Investment Philosophy",
  description:
    "BOTA Holdings views capital as a multi-generational instrument, combining quantitative precision with the patience of heritage asset management.",
};

const HORIZON_ITEMS = [
  {
    icon: "all_inclusive",
    title: "Built for Generations",
    body: "Structures designed today to serve the second and third generation of our founding families.",
  },
  {
    icon: "account_balance",
    title: "Institutional Rigor",
    body: "The research depth of a global bank delivered with the agility of a boutique partnership.",
  },
];

const SUSTAINABILITY_TAGS = [
  "Infrastructure",
  "Renewables",
  "Deep Tech",
  "Agriculture",
];

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDTjXggCcf6VqqKt-6q1mTSrOhPNj1Icxu8zKrCYL4UxzB-4XEiTm5HXIMAayfcpOV9D3B1GIb1eNSn4HmPcrf0ertcdZzcjorkPujfeK3vR6fA9tvBfkQsa2_OnEXoyiZjMXjzYTZOoDMe7hG2133nXOrLyUDwScbHIJIWxXukSlzqoUNP22b06RULJwImtG2JZ4wAw7fhw9jdH6dn81SeU-eyc3JCx8F-3845v85Ygbi9rem70jR62j6IwE-a_MT-xbrGkCeD3A0";

const HORIZON_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCd5v_kYCsH5QpvVa9uWRmecyK-X4iUXZaXwuU1dN9bhuEdX58clxeif2usu0h1SUUWf2YNIgbqXioHjE4FehBC0iCKvL2armgYQB5LTzsN7YsEMSHv-LMtpJpIZqmWYv2qxyjx7l2H2AI4URDOA6EIpB8qfstVbQRyLKRi6_YfPVGjEnU6UpDTeV-fFxe2D5OtcPIKoW083TKpXoFtHjr0MYAYf8TLs8MhSG6UHvv1I8Lo9Hl54y2yHcjhXzhN1_U2YYIVi1pXeZk";

const SUSTAINABILITY_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyLRyxOo4XxgWURncNt6tk9yymr65QSUBhW0bT_1KX-kjtxr53JZiTpOdlnjQ0VRh_XW-Waj4n0L4TsRs-FFl77OyP4hoeo0udScwvAdQqpKnk-2pHaAM1dMPGIRxPtj9ZjV69lI66sso3r1ZOd0r7i7V0KLNrgYqkTI35nHtKVhu6kyY1-sb5RzNsCQe5e37RQq-4TJ08hcaLgZrOKvcJhreQI5hwZCwvhG-iczskzXdLCdAuBUGqZaVAhNNtK2-Bq8F0kc6t24g";

export default function StrategyPage() {
  return (
    <>
      <SiteHeader active="strategy" />
      <main className="pt-24">
        <StewardshipHero />
        <DirectorsQuote />
        <LongTermHorizon />
        <RiskAndResilience />
        <SustainableGrowth />
      </main>
      <SiteFooter />
    </>
  );
}

function StewardshipHero() {
  return (
    <section className="relative min-h-[819px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Architectural skyscraper rising to a clear sky"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale opacity-20"
        />
      </div>
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop relative z-10 w-full grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-8">
          <h1 className="font-display text-display-lg text-primary mb-8">
            Strategic
            <br />
            Stewardship
          </h1>
          <p className="text-body-lg text-secondary max-w-xl">
            BOTA was founded in 2016 on a simple conviction: that capital
            deserves to be treated as a multi-decade instrument. Our
            approach combines modern quantitative discipline with the
            patience of an owner's mindset.
          </p>
        </div>
      </div>
    </section>
  );
}

function DirectorsQuote() {
  return (
    <section className="py-section-gap bg-surface-container-lowest">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center">
          <MaterialIcon
            name="format_quote"
            className="text-primary-container text-6xl mb-8"
          />
          <blockquote className="font-display text-headline-lg italic text-primary leading-tight mb-12">
            &ldquo;We started BOTA because we wanted a firm that would manage
            our families' capital the way we'd manage our own -
            without the conflicts, the layers, or the short-term thinking of
            the institutions we came from.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}

function LongTermHorizon() {
  return (
    <section className="py-section-gap">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-12 gap-gutter items-center">
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-display text-headline-lg text-primary mb-8">
            Long-term Horizon
          </h2>
          <p className="text-body-lg text-secondary mb-6 leading-relaxed">
            In an era of high-frequency fluctuations, we maintain a deliberate
            focus on twenty and fifty-year cycles. This patience allows us to
            capture value that institutional structures often overlook.
          </p>
          <ul className="space-y-6">
            {HORIZON_ITEMS.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <MaterialIcon
                  name={item.icon}
                  className="text-primary mt-1"
                />
                <div>
                  <h4 className="font-display text-headline-sm text-primary mb-1">
                    {item.title}
                  </h4>
                  <p className="text-body-md text-secondary">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 md:col-start-8">
          <div className="aspect-[4/5] relative border border-outline-variant p-12 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-surface-container-low opacity-50" />
            <Image
              src={HORIZON_IMAGE}
              alt="Patient, enduring landscape with a stone monument"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="relative z-10 object-cover grayscale brightness-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RiskAndResilience() {
  return (
    <section className="py-section-gap bg-surface-container-low">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-gutter">
          <div className="max-w-2xl">
            <p className="text-label-caps text-on-primary-container mb-4 uppercase">
              Protection of Capital
            </p>
            <h2 className="font-display text-headline-lg text-primary">
              Risk & Resilience
            </h2>
          </div>
          <p className="text-body-md text-secondary max-w-sm">
            Our defensive posture is as critical as our pursuit of growth. We
            utilize asymmetric hedging and proprietary stress-testing to
            ensure systemic endurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <article className="group bg-surface-container-lowest border border-outline-variant/30 p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="flex justify-between items-start mb-12">
              <MaterialIcon
                name="waves"
                className="text-primary text-4xl"
              />
              <span className="text-label-caps text-outline-variant group-hover:text-primary transition-colors uppercase">
                Since 2016
              </span>
            </div>
            <h3 className="font-display text-headline-md text-primary mb-6">
              Dynamic Liquidity
            </h3>
            <p className="text-body-md text-secondary mb-8 leading-relaxed">
              Maintaining the capability to pivot capital rapidly into
              distressed or emerging opportunities without compromising the
              core portfolio stability.
            </p>
            <div className="h-px w-full bg-outline-variant mb-8 opacity-30" />
            <Link
              href="/investments"
              className="inline-flex items-center gap-2 text-label-caps text-primary hover:gap-4 transition-all uppercase"
            >
              Explore Mechanisms
              <MaterialIcon name="arrow_forward" />
            </Link>
          </article>

          <article className="group bg-primary text-on-primary p-12 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="flex justify-between items-start mb-12">
              <MaterialIcon
                name="security"
                className="text-on-primary-container text-4xl"
              />
              <span className="text-label-caps text-on-primary-container uppercase">
                Core Protocol
              </span>
            </div>
            <h3 className="font-display text-headline-md text-on-primary mb-6">
              Systemic Defense
            </h3>
            <p className="text-body-md text-on-primary-container mb-8 leading-relaxed">
              Cross-asset class diversification combined with tail-risk
              protection protocols designed to shield capital during extreme
              market volatility and geopolitical shifts.
            </p>
            <div className="h-px w-full bg-on-primary-container mb-8 opacity-30" />
            <Link
              href="/investments"
              className="inline-flex items-center gap-2 text-label-caps text-on-primary hover:gap-4 transition-all uppercase"
            >
              View Stratagems
              <MaterialIcon name="arrow_forward" />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

function SustainableGrowth() {
  return (
    <section className="py-section-gap bg-primary-container text-on-primary relative overflow-hidden">
      <div
        aria-hidden
        className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none hidden md:block"
      >
        <div className="w-full h-full border-l border-on-primary-container flex items-center justify-center">
          <span
            className="font-display text-9xl text-on-primary-container"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            BOTA
          </span>
        </div>
      </div>

      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-12 gap-gutter items-center">
          <div className="col-span-12 md:col-span-7">
            <h2 className="font-display text-headline-lg text-on-primary mb-8">
              Sustainable Growth
            </h2>
            <p className="text-body-lg text-on-primary-container mb-12 max-w-xl">
              We invest in the foundational assets that power the future. Our
              conviction lies in tangible value creation through infrastructure
              and environmental transformation.
            </p>
            <div className="flex flex-wrap gap-4">
              {SUSTAINABILITY_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-6 py-2 border border-on-primary-container text-on-primary text-label-caps rounded-full hover:bg-on-primary hover:text-primary transition-all cursor-default uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="col-span-12 md:col-span-5 mt-12 md:mt-0">
            <div className="relative group">
              <div className="aspect-square relative overflow-hidden">
                <Image
                  src={SUSTAINABILITY_IMAGE}
                  alt="Wind turbines silhouetted against a twilight sky"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-surface p-8 text-primary shadow-xl">
                <p className="font-display text-headline-md mb-2">12.4%</p>
                <p className="text-label-caps text-secondary uppercase">
                  Annualized Impact Return
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
