import type { Metadata } from "next";
import {
  LegalDefinitions,
  LegalEmphasis,
  LegalKeyPoints,
  LegalPage,
  LegalParagraph,
  LegalSubheading,
  type LegalSection,
} from "@/components/LegalPage";
import { siteEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Regulatory Disclosures",
  description:
    "Authorisations, conflicts policy, best execution, costs, custody and risk warnings governing BOTA Holdings, LLC - a private multi-family office operating under the exemptions available to firms of its size and clientele.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "the-firm",
    title: "The Firm & Status",
    summary:
      "BOTA Holdings, LLC is a private multi-family office. We operate under the exemptions available to firms of our size and clientele, and we hold ourselves to the standards of a fiduciary regardless of the floor those exemptions allow.",
    content: (
      <>
        <LegalParagraph>
          References to &ldquo;BOTA&rdquo;, &ldquo;the firm&rdquo; or
          &ldquo;we&rdquo; in this document mean BOTA Holdings, LLC, a
          limited liability company organised under the laws of the State
          of Delaware with its registered office at 169 Madison Avenue,
          New York, NY 10016, United States.
        </LegalParagraph>
        <LegalDefinitions
          items={[
            {
              term: "Entity",
              description:
                "BOTA Holdings, LLC - a Delaware limited liability company; principal place of business in New York.",
            },
            {
              term: "Status",
              description:
                "BOTA carries on its activities as a private multi-family office serving a small number of qualified clients. The firm's assets under management are below the threshold at which federal registration as an investment adviser would be required, and BOTA relies on the exemptions and exclusions available under U.S. federal and New York State law.",
            },
            {
              term: "Standards",
              description:
                "Notwithstanding the exemptions on which the firm relies, BOTA voluntarily applies the conduct, custody, recordkeeping and conflicts standards customarily expected of a regulated fiduciary. The firm's Disclosure Brochure is available on request.",
            },
            {
              term: "AML Programme",
              description:
                "BOTA maintains an anti-money-laundering and sanctions-compliance programme aligned with the USA PATRIOT Act, the Office of Foreign Assets Control (OFAC) sanctions regime and industry best practice for private investment offices.",
            },
            {
              term: "International Reach",
              description:
                "European family relationships are serviced from BOTA's representative offices in Lugano, Milan and London. All mandates are entered into with BOTA Holdings, LLC.",
            },
          ]}
        />
        <LegalEmphasis icon="verified">
          BOTA does not act as a broker-dealer, does not deal on own
          account against client orders, and does not operate or sponsor
          any proprietary investment vehicle. Client assets are held with
          independent qualified custodians.
        </LegalEmphasis>
      </>
    ),
  },
  {
    id: "services",
    title: "Investment Services & Activities",
    content: (
      <>
        <LegalParagraph>
          BOTA provides discretionary portfolio management, non-discretionary
          investment advice and family-office coordination services to a
          small number of qualified clients and qualified purchasers.
          Ancillary services include reporting, performance attribution and
          the coordination of foreign-exchange execution through third-party
          banks.
        </LegalParagraph>
        <LegalSubheading>Permitted instruments</LegalSubheading>
        <LegalKeyPoints
          items={[
            "Equity, debt and depositary-receipt securities listed on U.S. and recognised foreign markets.",
            "Open-end and closed-end registered investment companies and exchange-traded funds.",
            "Private funds offered under Regulation D Rule 506(b)/(c) and Section 3(c)(1) or 3(c)(7) of the Investment Company Act.",
            "Treasury and money-market instruments held through qualified custodians.",
            "Derivatives used solely for hedging or efficient portfolio management.",
            "Direct private equity, real estate and infrastructure participations through dedicated special-purpose vehicles.",
          ]}
        />
        <LegalParagraph>
          BOTA does not deal in commodity interests or futures contracts
          on a regulated basis and is not registered with the CFTC or NFA.
          The firm relies on private-placement exemptions for any
          participation in unregistered funds.
        </LegalParagraph>
      </>
    ),
  },
  {
    id: "client-classification",
    title: "Client Classification",
    summary:
      "Every relationship is classified at onboarding. Classification determines the products that can be offered and the regulatory protections that apply.",
    content: (
      <>
        <LegalDefinitions
          items={[
            {
              term: "Accredited Investor",
              description:
                "Status defined by reference to Rule 501(a) of Regulation D - generally USD 1 million net worth (excluding primary residence) or USD 200,000 individual / USD 300,000 joint income for the prior two years.",
            },
            {
              term: "Qualified Client",
              description:
                "Status defined by reference to Rule 205-3 under the Investment Advisers Act of 1940 - currently USD 1.1 million in assets entrusted to BOTA, or USD 2.2 million in net worth. BOTA applies this standard before any performance-based compensation is agreed.",
            },
            {
              term: "Qualified Purchaser",
              description:
                "Status defined by reference to Section 2(a)(51) of the Investment Company Act of 1940 - generally USD 5 million in investments for natural persons. Required to participate in Section 3(c)(7) private funds.",
            },
          ]}
        />
        <LegalParagraph>
          BOTA primarily serves qualified clients and qualified
          purchasers. Status is verified at onboarding through third-party
          documentation and reconfirmed at least annually. Status changes
          must be notified to BOTA promptly in writing.
        </LegalParagraph>
      </>
    ),
  },
  {
    id: "conflicts",
    title: "Conflicts of Interest",
    summary:
      "Independence is the founding premise of the firm. Our conflicts framework is designed to identify, prevent and - where prevention is not possible - disclose conflicts before they affect client outcomes.",
    content: (
      <>
        <LegalParagraph>
          BOTA does not manufacture its own funds, does not receive
          monetary inducements from product providers and does not accept
          placement fees on third-party offerings. Investment advice is
          provided on a fee-only basis. BOTA owes a fiduciary duty to each
          client under common law and applicable state law, comprising a
          duty of care and a duty of loyalty.
        </LegalParagraph>
        <LegalSubheading>Identified categories</LegalSubheading>
        <LegalKeyPoints
          items={[
            "Personal-account dealing by partners, employees and access persons - restricted by an internal Code of Ethics with pre-clearance, blackout windows and mandatory holding periods.",
            "Allocation of investment opportunities across mandates - governed by a written allocation policy reviewed by a quarterly compliance committee.",
            "Outside business interests - disclosed on appointment and refreshed annually.",
            "Gifts and entertainment - capped, logged in a central register and reviewed by Compliance.",
            "Cross-trades - permitted only on agreed terms and only where they are demonstrably in the best interests of both clients.",
          ]}
        />
        <LegalEmphasis icon="gpp_good">
          A full description of our conflicts of interest policy is set
          out in the firm's Disclosure Brochure, available on request.
          Where an actual or potential conflict cannot be managed with
          reasonable confidence, the relevant transaction will not be
          undertaken on behalf of the affected client.
        </LegalEmphasis>
      </>
    ),
  },
  {
    id: "best-execution",
    title: "Best Execution & Trade Allocation",
    content: (
      <>
        <LegalParagraph>
          As a fiduciary, BOTA seeks best execution for every transaction
          executed on a client's behalf - taking into account price,
          costs, speed, likelihood of execution, settlement reliability,
          size, nature and any other consideration relevant to the order.
        </LegalParagraph>
        <LegalSubheading>Execution factors</LegalSubheading>
        <LegalKeyPoints
          items={[
            "Total cost - net price after commissions and fees - is the primary factor for liquid instruments.",
            "For illiquid or block transactions, likelihood of execution and minimisation of market impact may take precedence over headline price.",
            "Orders are routed to a panel of broker-dealers reviewed at least annually and selected on quality of execution, financial soundness and settlement reliability.",
            "BOTA does not maintain soft-dollar arrangements outside the safe harbour of Section 28(e) of the Securities Exchange Act.",
            "Orders may be aggregated where doing so is consistent with the duty of best execution; allocations are recorded contemporaneously and apportioned on an objective basis.",
          ]}
        />
      </>
    ),
  },
  {
    id: "costs-and-charges",
    title: "Costs, Charges & Fees",
    content: (
      <>
        <LegalParagraph>
          Mandates are quoted on a transparent management-fee basis. The
          full fee schedule, billing methodology and side-by-side
          comparison of compensation arrangements is set out in the
          firm's Disclosure Brochure and in the schedule attached to
          the Investment Management Agreement.
        </LegalParagraph>
        <LegalDefinitions
          items={[
            {
              term: "Management Fee",
              description:
                "Charged on assets under advice or management, accrued daily and invoiced quarterly in arrears. Tiered scales apply at agreed thresholds.",
            },
            {
              term: "Performance Fee",
              description:
                "Available only to clients who meet the Qualified Client standard and only on ring-fenced private-market and direct co-investment programmes, subject to an agreed hurdle and high-water mark, and only after capital has been returned.",
            },
            {
              term: "Third-Party Costs",
              description:
                "Custody, brokerage, fund management and transaction taxes are charged at cost by the relevant third party and disclosed ex-ante and ex-post.",
            },
            {
              term: "Inducements",
              description:
                "BOTA does not retain monetary inducements. Any 12b-1 fee or revenue-share payment received from a product provider is credited to the client account in full within ten business days.",
            },
          ]}
        />
        <LegalParagraph>
          A personalised cost statement is provided before any mandate
          begins. A consolidated annual statement is delivered within ninety
          days of each calendar year-end.
        </LegalParagraph>
      </>
    ),
  },
  {
    id: "custody",
    title: "Custody & Investor Protection",
    summary:
      "Client assets are held with independent qualified custodians, segregated from the firm's own balance sheet and verified annually by an independent public accountant.",
    content: (
      <>
        <LegalParagraph>
          BOTA does not take physical custody of client securities. Assets
          are held in the client's own account at a qualified
          custodian - typically a U.S. bank or registered broker-dealer -
          following the safeguards customarily applied by professional
          fiduciaries to client funds and securities.
        </LegalParagraph>
        <LegalKeyPoints
          items={[
            "Custody account statements are delivered by the qualified custodian directly to the client at least quarterly.",
            "Where BOTA is deemed to have inadvertent custody (for example through standing letters of authorisation), the position is independently verified each year by a PCAOB-registered public accountant.",
            "Cash balances held at participating U.S. banks are eligible for FDIC insurance up to the statutory limit of USD 250,000 per depositor, per insured bank, per ownership category.",
            "Securities held at SIPC-member broker-dealers are eligible for SIPC protection up to USD 500,000 per customer (including a USD 250,000 limit on cash) in the event of broker-dealer failure.",
          ]}
        />
        <LegalEmphasis icon="account_balance">
          FDIC and SIPC protections apply only in narrowly defined
          circumstances and do not protect against market losses, the
          failure of an issuer or counterparty to a transaction, or losses
          arising from investment risk.
        </LegalEmphasis>
      </>
    ),
  },
  {
    id: "complaints",
    title: "Complaints & Redress",
    content: (
      <>
        <LegalParagraph>
          A client who is dissatisfied with the conduct of a mandate may
          submit a written complaint to{" "}
          <a
            href={`mailto:${siteEmail("complaints")}`}
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            {siteEmail("complaints")}
          </a>
          . Receipt is acknowledged within two business days and a
          substantive response is provided within fifteen business days, or
          the client is informed in writing of the reasons for any delay.
        </LegalParagraph>
        <LegalSubheading>Independent escalation</LegalSubheading>
        <LegalKeyPoints
          items={[
            "New York State Office of the Attorney General - Investor Protection Bureau, which administers the Martin Act (General Business Law Article 23-A).",
            "New York State Department of Financial Services - for matters touching financial services conducted from the State of New York.",
            "Federal Trade Commission and applicable state attorneys general - for matters touching consumer-protection or privacy obligations.",
          ]}
        />
        <LegalParagraph>
          Pre-dispute arbitration arrangements, where included in the
          Investment Management Agreement, do not waive any right of
          action a client may have under U.S. federal or New York State
          securities laws.
        </LegalParagraph>
      </>
    ),
  },
  {
    id: "risk-warnings",
    title: "Risk Warnings",
    summary:
      "Investing carries risk. The value of investments can fall as well as rise, and past performance is not a reliable indicator of future results.",
    content: (
      <>
        <LegalParagraph>
          The following non-exhaustive warnings apply to mandates managed
          or advised by BOTA. They are presented here as a summary; the
          full risk framework is described in the relevant Investment
          Management Agreement and in the firm's Disclosure Brochure.
        </LegalParagraph>
        <LegalKeyPoints
          items={[
            "Market risk - adverse movements in equity, credit, currency, commodity and rate markets can materially reduce portfolio value.",
            "Liquidity risk - private-market and direct holdings may not be realisable at short notice or at their reported fair value.",
            "Concentration risk - high-conviction mandates may exhibit lower diversification than benchmark-aware portfolios.",
            "Counterparty and custody risk - although mitigated by careful selection, ongoing review and statutory segregation, no custodian or counterparty is risk-free.",
            "Operational risk - including the risk of technology, personnel or external-provider failure.",
            "Regulatory and tax risk - changes in U.S. federal, state or foreign law, or in its interpretation, may affect after-tax returns.",
          ]}
        />
        <LegalEmphasis icon="warning">
          Nothing in this document constitutes a personal recommendation,
          an offer to invest or an invitation to enter into any
          transaction. Investment decisions must be based on the offering
          documents and the mandate-specific disclosures provided directly
          to the client.
        </LegalEmphasis>
      </>
    ),
  },
];

const RELATED = [
  {
    label: "Privacy Policy",
    href: "/legal/privacy",
    description: "How personal data is collected, processed and protected.",
  },
  {
    label: "Terms of Engagement",
    href: "/legal/terms",
    description:
      "The contractual framework that governs every mandate we accept.",
  },
];

export default function DisclosuresPage() {
  return (
    <LegalPage
      eyebrow="Regulatory Disclosures"
      title={<>Disclosures & Authorisations</>}
      intro={
        <>
          BOTA Holdings, LLC is a private multi-family office operating
          under the exemptions available to firms of its size and
          clientele. This document sets out the framework under which we
          act, the conflicts policy that protects our independence, and
          the standards we hold ourselves to when you entrust capital to
          the firm.
        </>
      }
      version="2026.01"
      effectiveDate="01 January 2026"
      jurisdiction="State of New York · United States federal securities laws"
      sections={SECTIONS}
      related={RELATED}
    />
  );
}
