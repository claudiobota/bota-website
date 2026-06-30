import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MaterialIcon } from "@/components/MaterialIcon";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIe0WB_ZJjlPhIxwXbP2CXTZj-zpQFi9lSP9pO_EjE2S-a78eQiCTR-ruX3W7mWIW5SaJgyFmSDzhKQV2mct9IMvcwj16mRzcN-y6D_lHbLIUGfzIs47DecZ04DcV1gWL0_OUli_h5ash6sSu1h7h3JB6wnTPSJKhsqOw9KBQ0yfbRJgevcjxk86Cjmo5Sugoyr8upRpPqzvv9JHB-wrRbFxzPjJH_c_GjDkT1r7w3IZjcqbYvDGx8CuMbU6qw_ylBUuNyLXYl5Js";

const ORIGIN_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDlFPWEcpBB7XE78z2DTh4bFwWyeVlIFEm6w0pTqecW8b9lf4YgNn9_hT7hRNKmW4Q440FEldyiZwR_h6rrS9rbN-3sx2MSNWxUa4ehkF6Vi1kd1TMHcmkjChGiyvAUKb6itlbhs5hswa9vQpApF9rk4HT7E3BeuZW_s1RYjgQ0SzkUFw092KCiw5RUFGbzBBpVg5gzE7RDIvaeesiiyMdaKJsFHRiEmbQKfc3EP34B-53NZeRcB8qMsqUmMGthk4pNoTdHrUX0LHQ";

const GLOBAL_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD3ej7Gwvl2mcKnu-9dKZPwNnReBzwW12LO8FDpAcc6kxJhdoOAwfG6SPrlxoxO1OO03pIq0JxLXOcS9kDX2aZsry4EEZfa4A4hQdS43L4cZUbtgvtW-zg1bb7ucpzZC2_RpCoK3vYYb9LSLXXV91Dk0LjHbZHOHN9ljhYN5B0KY973ZQRPlKRFkoqqdiofGAdOniVbvqqfNdmkPQQ_46D4-4P6qMNC7uv_qp_vwfE0yz1HWvJeLMafF3YsPQCnNFxBAI_Kr7bw0SQ";

const PILLARS = [
  {
    icon: "shield",
    title: "Wealth Preservation",
    body: "Protecting capital through disciplined risk management and global diversification - across both established and emerging asset classes.",
    bullets: [
      "Multi-generational Trust Structuring",
      "Asset Protection Strategies",
      "Tax Optimization & Compliance",
    ],
  },
  {
    icon: "insights",
    title: "Strategic Growth",
    body: "Identifying conviction opportunities in private equity, infrastructure, and sustainable technology to compound capital with purpose.",
    bullets: [
      "Direct Private Equity Access",
      "Impact & ESG Investment",
      "Venture Capital Advisory",
    ],
  },
  {
    icon: "account_balance_wallet",
    title: "Liquidity Management",
    body: "Bespoke cash-flow and credit solutions that keep capital agile in a rapidly evolving global environment.",
    bullets: [
      "Global Treasury Services",
      "Lombard Lending & Credit",
      "Currency Risk Management",
    ],
  },
];

const OFFICES = [
  { city: "New York", district: "Madison Avenue - Founding Office" },
  { city: "Lugano", district: "Via Nassa" },
  { city: "Milan", district: "Via Monte Napoleone" },
  { city: "London", district: "Mayfair" },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader active="heritage" />
      <main>
        <HeroSection />
        <OurOriginSection />
        <PillarsSection />
        <GlobalPresenceSection />
        <PhilosophyCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={HERO_IMAGE}
        alt="Architectural focus of a modern estate"
        fill
        priority
        sizes="100vw"
        className="object-cover scale-105"
      />
      <div className="absolute inset-0 bg-primary/20 backdrop-brightness-75" />
      <div className="relative z-10 text-center max-w-4xl px-margin-mobile md:px-margin-desktop">
        <span className="text-label-caps text-on-primary/80 mb-6 block uppercase tracking-[0.3em]">
          Established MMXVI
        </span>
        <h1 className="font-display text-display-lg text-white mb-8">
          A New Standard
          <br />
          for Family Capital
        </h1>
        <p className="text-body-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          Founded in 2016, BOTA is an independent multi-family office built
          for the modern era - pairing institutional rigor with the patience
          and discretion of a private partnership.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            href="/strategy"
            className="bg-white text-primary px-10 py-5 text-label-caps hover:bg-surface-container-low transition-all"
          >
            Explore Heritage
          </Link>
          <Link
            href="/contact"
            className="border border-white text-white px-10 py-5 text-label-caps hover:bg-white/10 transition-all"
          >
            The Private Office
          </Link>
        </div>
      </div>
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <MaterialIcon
          name="keyboard_double_arrow_down"
          className="text-white/50"
        />
      </div>
    </section>
  );
}

function OurOriginSection() {
  return (
    <section className="py-section-gap bg-surface">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-12 gap-gutter items-center">
        <div className="col-span-12 md:col-span-5">
          <span className="text-label-caps text-on-primary-container mb-4 block uppercase">
            Our Founding
          </span>
          <h2 className="font-display text-headline-lg text-primary mb-8">
            A Deliberate Alternative
          </h2>
          <p className="text-body-lg text-secondary mb-6 leading-relaxed">
            In 2016, a group of operating principals and senior advisors founded BOTA as an independent,
            conflict-free alternative to traditional wealth management - designed for the realities of modern capital deployment.
            <br /><br />We began as a private holding vehicle, pooling capital among a close circle of founding families.
            Over time, we selectively opened to outside partners who share our conviction in long-horizon thinking.
            Together, we back innovative ideas built to compound over decades, not quarters.
          </p>
          <p className="text-body-md text-secondary mb-10">
            We work with a small group of families whose ambitions reach
            beyond a single generation. Our approach is unhurried and
            analytical, built for the next thirty years rather than the next
            thirty days.
          </p>
          <Link
            href="/strategy"
            className="inline-flex items-center gap-2 text-label-caps text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all uppercase"
          >
            Our story
            <MaterialIcon name="arrow_forward" className="text-sm" />
          </Link>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 relative">
          <div className="aspect-[4/5] overflow-hidden border border-outline-variant/30 relative">
            <Image
              src={ORIGIN_IMAGE}
              alt="Interior of a luxury heritage office"
              fill
              priority
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -left-10 bg-primary p-12 hidden md:block">
            <p className="font-display text-headline-lg text-on-primary">
              MMXVI
            </p>
            <p className="text-label-caps text-on-primary/60 uppercase">
              Founded · Independent
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PillarsSection() {
  return (
    <section className="py-section-gap bg-surface-container-low">
      <div className="max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-20">
          <span className="text-label-caps text-on-primary-container mb-4 block uppercase">
            Strategic Architecture
          </span>
          <h2 className="font-display text-headline-lg text-primary">
            The Three Pillars
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="bg-surface p-12 border border-outline-variant/30 hover:border-primary-container transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary-container/10 text-primary-container mb-8 group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
                <MaterialIcon name={pillar.icon} />
              </div>
              <h3 className="font-display text-headline-sm text-primary mb-4">
                {pillar.title}
              </h3>
              <p className="text-body-md text-secondary mb-8">{pillar.body}</p>
              <ul className="space-y-4 mb-2">
                {pillar.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-3 text-body-md text-secondary"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-container rounded-full" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalPresenceSection() {
  return (
    <section className="relative py-[160px] overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={GLOBAL_IMAGE}
          alt="Dark cityscape at night"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.2]"
        />
      </div>
      <div className="relative z-10 max-w-page mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-12 gap-gutter items-center">
        <div className="col-span-12 md:col-span-6">
          <span className="text-label-caps text-on-primary-container mb-4 block uppercase">
            Global Presence
          </span>
          <h2 className="font-display text-headline-lg mb-8">
            A Local Connection to Global Markets
          </h2>
          <p className="text-body-lg text-white/70 mb-12">
            From our founding office in New York, BOTA has expanded across
            the Atlantic to Lugano, Milan and London - four offices,
            chosen deliberately to cover the financial centers that matter
            to our families.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {OFFICES.map((office) => (
              <div key={office.city}>
                <p className="font-display text-headline-sm mb-2">
                  {office.city}
                </p>
                <p className="text-body-md text-white/50">{office.district}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8">
          <div className="p-10 border border-white/10 backdrop-blur-md bg-white/5">
            <h3 className="font-display text-headline-sm mb-6">
              Direct Partnership
            </h3>
            <p className="text-body-md text-white/70 mb-8">
              Every relationship is led by a founding partner. There are no
              account managers, no relationship layers - only direct access
              to the principals making the decisions.
            </p>
            <Link
              href="/contact"
              className="block text-center w-full py-4 border border-white text-white text-label-caps hover:bg-white hover:text-primary transition-all uppercase"
            >
              Connect with an office
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhilosophyCtaSection() {
  return (
    <section className="py-section-gap bg-surface flex items-center justify-center">
      <div className="max-w-4xl text-center px-margin-mobile md:px-margin-desktop">
        <h2 className="font-display text-display-lg text-primary mb-10">
          Stewardship for the Next Generation
        </h2>
        <p className="text-body-lg text-secondary mb-12">
          Our philosophy is simple: we manage capital with the same
          conviction our principals apply to their own - patient,
          independent, and unburdened by the noise of the quarterly cycle.
          We invite you to explore the principles that shape BOTA.
        </p>
        <div className="inline-block relative">
          <Link
            href="/strategy"
            className="bg-primary text-on-primary px-16 py-6 text-label-caps inline-block hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            Explore Our Philosophy
          </Link>
          <div className="absolute -inset-4 border border-primary/10 -z-10 translate-x-2 translate-y-2" />
        </div>
      </div>
    </section>
  );
}
