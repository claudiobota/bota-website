import Image from "next/image";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";

type Office = {
  city: string;
  country: string;
  opened: string;
  address: string;
};

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Initiate a private consultation with the BOTA Holdings Estate Office. Discretion is our cornerstone.",
};

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA-JxxGt5tGcLfpCtRibdm2vtxpf736HtY0CkrifBgoRVnotb3OgGDikY0yvFHP7_pW48SSm3rQZSRU3IuSaNpD8UrgRNUZLh8sNBf48A3LeUc1UHptE1DemZyueXDxGs6pK_m3M1gQFnaWY7uuiLvjDG-hFLqmr4QzvzBGYcVJyHNkFFWq_BYdmpdipvKJ7yCzKSZ1PRkZZVQsiocIkhsvlpF1X7R3-wQxJuYvENdJnpN0R07pq9cOQzHjFJtc3G9r2H8D7fmQtEw";

const OFFICES: Office[] = [
  {
    city: "New York",
    country: "United States",
    opened: "Founding office · 2016",
    address: "169 Madison Avenue\nNew York, NY 10016, United States",
  },
  {
    city: "Lugano",
    country: "Switzerland",
    opened: "Opened 2018",
    address: "Via Nassa 21\n6900 Lugano, Switzerland",
  },
  {
    city: "Milan",
    country: "Italy",
    opened: "Opened 2020",
    address: "Via Monte Napoleone 8\n20121 Milano, Italy",
  },
  {
    city: "London",
    country: "United Kingdom",
    opened: "Opened 2022",
    address: "Mayfair Square, W1J 7BR\nLondon, United Kingdom",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-24">
        <InquirySection />
        <OfficesSection />
      </main>
      <SiteFooter />
    </>
  );
}

function InquirySection() {
  return (
    <section className="min-h-[870px] flex flex-col md:flex-row items-stretch overflow-hidden">
      <div className="w-full md:w-1/2 relative min-h-[400px]">
        <Image
          src={HERO_IMAGE}
          alt="Boardroom with dark wood table overlooking a city skyline"
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center p-12 lg:p-24 bg-surface-container-lowest">
        <div className="max-w-md w-full">
          <span className="text-label-caps text-primary/60 mb-4 block uppercase">
            Private Client Access
          </span>
          <h1 className="font-display text-display-lg text-primary mb-8">
            Inquiry Brief
          </h1>
          <p className="text-body-lg text-secondary mb-12">
            Every inquiry reaches a founding partner directly. Complete this
            brief to begin a confidential conversation with the BOTA Estate
            Office.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function OfficesSection() {
  return (
    <section className="py-section-gap max-w-page mx-auto px-margin-mobile md:px-margin-desktop">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-label-caps text-primary/60 mb-2 block uppercase">
            Our Footprint
          </span>
          <h2 className="font-display text-headline-lg text-primary">
            Global Offices
          </h2>
        </div>
        <p className="max-w-md text-body-md text-secondary">
          Four offices opened with intent - New York (2016), Lugano (2018),
          Milan (2020) and London (2022) - to serve our clients'
          multi-jurisdictional needs across the Americas and Europe.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
        {OFFICES.map((office) => (
          <OfficeCard key={office.city} office={office} />
        ))}
      </div>
    </section>
  );
}

function OfficeCard({ office }: { office: Office }) {
  return (
    <article className="group border border-outline-variant/30 hover:border-primary/30 transition-all duration-500 overflow-hidden flex flex-col">
      <div className="relative h-48 bg-primary text-on-primary overflow-hidden flex items-end p-8">
        <span
          aria-hidden
          className="absolute -top-4 -right-2 font-display text-[140px] leading-none text-on-primary/10 select-none transition-transform duration-700 group-hover:scale-105"
        >
          {office.city.charAt(0)}
        </span>
        <span className="relative text-label-caps text-on-primary/70 uppercase">
          {office.opened}
        </span>
      </div>
      <div className="p-8 space-y-6 bg-surface-container-lowest flex-1 flex flex-col">
        <div>
          <h3 className="font-display text-headline-sm text-primary">
            {office.city}
          </h3>
          <p className="text-label-caps text-secondary uppercase mt-1">
            {office.country}
          </p>
        </div>
        <div className="space-y-4 text-body-md text-secondary flex-1">
          <p style={{ whiteSpace: "pre-line" }}>{office.address}</p>
        </div>
      </div>
    </article>
  );
}
