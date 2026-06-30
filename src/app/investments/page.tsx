import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MaterialIcon } from "@/components/MaterialIcon";

export const metadata: Metadata = {
  title: "Our Holdings",
  description:
    "BOTA Holdings manages a globally diversified portfolio focused on long-term value creation across private equity, real estate and capital markets.",
};

const PILLARS = [
  {
    pillar: "Pillar I",
    title: "Private Equity",
    slug: "private-equity",
    body: "Investments in industrial technology and precision manufacturing that define the next generation of global infrastructure.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDus6_GnT-RqYOhOnMvb4BaepthM9BfIsrbrdGglWi0ujbZ3-0SYltJZzbgpVEBj24Abu2OkujouJGOUdgbSa5pWyZ2my6Cxmj3z6bdhuiVjBT8alaVid63gMUs8HlZoVj_rnVnybVckbRhHceJSY9iBIq3wE9SSdjPpGy-yRojb5afN-jhyt8cyaB3g_NKqW73vMQ6yCiNliPdOpKPBpKEEtdoRC0t649ZUU4AI3YntnC1B5hAaBHgTyIrqZ-ElctpXZ0QqMVWQJE",
  },
  {
    pillar: "Pillar II",
    title: "Real Estate",
    slug: "real-estate",
    body: "A curated collection of Grade-A commercial landmarks and trophy assets in premier metropolitan markets globally.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAC76f37OEKhph6WtbzupXsC2Cg1AHdcP9TS_eK8794qVYwTvsgrtPmy2kp8--FwwGZN9pUVHg8Xz1owqVETIgd4-1Mx0k9oAuaaDgssU-2ok_jg_FNnd2CUKLZ_2MTYr2AI7L1EdFFtNk9fxAwqbPpWXOYuRWH_HR2i9lNbcwyYbLGfT0nhC0jvaNYMjQ0tQu_gyrA02mfcpmLwrFO-yNvyUEh5qCq6MhWLKpA1REfxTq9UgZr5U_2NZNwTrwuIX0Z5BIc-XiVLkU",
  },
  {
    pillar: "Pillar III",
    title: "Capital Markets",
    slug: "capital-markets",
    body: "Systematic deployment of capital across global liquid markets, utilizing proprietary risk-parity models and hedging.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuChvrHnGZbyjKiEBqZGMy71NprDKmD-T6oD7QD_Z5ECB1ZG2VgBzshonExcItzxax0vguphu9sYRZkWOhawGJCt1NSR9qcui5htkj61xVlhlb-_mblJih5R4rNlunxwnZaFs9zgAhTnW5WaW51BOfvhbOAdBPIH4EKTed0fgssSyoaqb7xGYaiIkYv_8Ze_As7rGXENky2ab_-lxkQ6LIzaVAFYL13Ywwe3RpvI3kO_ZRUHtTbVVq-h2RsO8lF6WDkRx3wdyj9zfcs",
  },
];

const REGIONS = [
  { region: "United States", cities: "New York - founding office" },
  { region: "Switzerland", cities: "Lugano" },
  { region: "Italy", cities: "Milan" },
  { region: "United Kingdom", cities: "London" },
];

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCbZ3jWfJ1AkL3FMH8H9QxVTrXB8AmH31jUSf2AXHS68snBavwbDf0nxKB5IeecTCBJgS7L6NZib3L4dLO2gaPJBShxmA6UetAWHEQQ1JzBaz8z1_9iS8gAcPul20hadzBUt9pnjX6wWuwtxcPoVF2nILOzgtVQR2xQJJlRqX-TaSL_ycWvUbqU3sIyLystfNOXOrIwY__997C7iehjjf-xaLcUWp4QPZijJjP2kuJmlgLQUO5oDDfMMInPSPlN-AjamQKqlrXjUHU";

export default function InvestmentsPage() {
  return (
    <>
      <SiteHeader active="investments" />
      <main className="pt-24">
        <PortfolioHero />
        <GlobalFootprint />
        <ScaleStats />
        <GeographicFocus />
      </main>
      <SiteFooter />
    </>
  );
}

function PortfolioHero() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-page mx-auto">
      <div className="max-w-3xl">
        <span className="text-label-caps text-secondary mb-4 block uppercase">
          Portfolio Overview
        </span>
        <h1 className="font-display text-display-lg text-primary mb-8">
          Legacy & Liquidity
        </h1>
        <p className="text-body-lg text-secondary leading-relaxed">
          Since 2016, BOTA Holdings has built a focused, globally
          diversified portfolio designed for long-term value creation. Our
          mandate is intentionally selective - capital is deployed across
          three primary pillars where we have genuine operating conviction.
        </p>
      </div>
    </section>
  );
}

function GlobalFootprint() {
  return (
    <section className="pb-section-gap px-margin-mobile md:px-margin-desktop max-w-page mx-auto">
      <h2 className="font-display text-headline-lg text-primary mb-12">
        Our Global Footprint
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {PILLARS.map((pillar) => (
          <article
            key={pillar.title}
            className="group relative overflow-hidden bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/20 transition-all duration-500"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <Image
                src={pillar.image}
                alt={pillar.title}
                fill
                priority
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.2]"
              />
            </div>
            <div className="p-8">
              <span className="text-label-caps text-on-primary-container bg-primary-fixed px-3 py-1 mb-4 inline-block uppercase">
                {pillar.pillar}
              </span>
              <h3 className="font-display text-headline-sm text-primary mb-4">
                {pillar.title}
              </h3>
              <p className="text-body-md text-secondary mb-6">{pillar.body}</p>
              <Link
                href={`/investments/${pillar.slug}`}
                className="inline-flex items-center text-primary text-label-caps gap-2 group-hover:gap-3 transition-all uppercase"
              >
                View strategy
                <MaterialIcon name="arrow_forward" className="text-sm" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ScaleStats() {
  return (
    <section className="bg-primary text-on-primary py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#d0e9d4 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-gutter relative z-10">
        <div className="md:col-span-2">
          <h2 className="font-display text-headline-lg mb-6">
            Boutique Scale.
            <br />
            Founder-Led Conviction.
          </h2>
          <p className="text-body-lg text-on-primary-container opacity-90 max-w-md">
            We have built a deliberately concentrated practice. Every
            mandate is led by a founding partner, with the focus and agility
            only a young, independent firm can offer.
          </p>
        </div>
        <Stat value="2016" label="Year Founded" />
        <Stat value="4" label="Global Offices" />
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col justify-center items-start border-l border-on-primary/10 pl-12">
      <span className="font-display text-display-lg leading-none mb-2">
        {value}
      </span>
      <span className="text-label-caps text-on-primary-container tracking-widest uppercase">
        {label}
      </span>
    </div>
  );
}

function GeographicFocus() {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-page mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
        <div className="lg:col-span-4">
          <h3 className="font-display text-headline-md text-primary mb-6">
            Four Offices, Two Continents
          </h3>
          <p className="text-body-md text-secondary mb-8">
            From our founding office in New York to Lugano, Milan and
            London, BOTA spans the Atlantic from desks that work together
            - not a sprawl of branches, but a deliberate footprint built
            around our clients' needs.
          </p>
          <ul className="space-y-4">
            {REGIONS.map((region) => (
              <li
                key={region.region}
                className="flex items-center gap-4 text-body-md text-primary"
              >
                <MaterialIcon
                  name="location_on"
                  filled
                  className="text-primary text-sm"
                />
                {region.region} ({region.cities})
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-8 h-[500px] bg-surface-container-low relative overflow-hidden rounded-lg group">
          <Image
            src={MAP_IMAGE}
            alt="Global footprint map"
            fill
            priority
            sizes="(min-width: 1024px) 66vw, 100vw"
            className="object-cover opacity-80 mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(248, 249, 250, 0.95), rgba(248, 249, 250, 0))",
            }}
          />
        </div>
      </div>
    </section>
  );
}
