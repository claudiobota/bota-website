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
  title: "Terms of Engagement",
  description:
    "The contractual framework that governs every mandate accepted by BOTA Holdings, LLC - onboarding, scope of services, fees, confidentiality, termination and governing law under New York State and applicable U.S. federal laws.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "preamble",
    title: "Preamble",
    summary:
      "These Terms describe the relationship between BOTA and its clients. They are written as a working document - to be referenced often, not stored away.",
    content: (
      <>
        <LegalParagraph>
          These Terms of Engagement (the &ldquo;Terms&rdquo;) apply to
          every mandate accepted by BOTA Holdings, LLC
          (&ldquo;BOTA&rdquo;, &ldquo;the firm&rdquo;,
          &ldquo;we&rdquo;, &ldquo;our&rdquo;, &ldquo;us&rdquo;), a
          Delaware limited liability company with its registered office
          at 169 Madison Avenue, New York, NY 10016, United States. They
          are read together with the executed Investment Management
          Agreement, the firm's Disclosure Brochure and the schedule
          of fees specific to your mandate.
        </LegalParagraph>
        <LegalParagraph>
          Where there is a conflict between these Terms and a
          mandate-specific document, the mandate-specific document prevails
          on the point of conflict. Capitalised terms used but not defined
          here have the meaning given in the Investment Management
          Agreement.
        </LegalParagraph>
      </>
    ),
  },
  {
    id: "onboarding",
    title: "Onboarding & Client Classification",
    content: (
      <>
        <LegalParagraph>
          BOTA is a private partnership. We accept new relationships
          deliberately and only after a partner-led onboarding process. No
          obligation arises on either side until the Investment Management
          Agreement has been signed by a duly authorised officer of the
          firm.
        </LegalParagraph>
        <LegalSubheading>What we require</LegalSubheading>
        <LegalKeyPoints
          items={[
            "Customer-identification documentation for the client and any beneficial owners under our internal Customer Identification Programme, modelled on the standards of the USA PATRIOT Act and applicable best practice.",
            "Source-of-wealth and source-of-funds evidence proportionate to the size and complexity of the mandate.",
            "Tax-status documentation - Form W-9 for U.S. persons, Form W-8BEN / W-8BEN-E for non-U.S. persons - together with any required CRS self-certification.",
            "Verification of status as an Accredited Investor, Qualified Client and/or Qualified Purchaser, as applicable to the proposed mandate.",
            "Authorised-signatory and power-of-attorney evidence for trusts, foundations, holding companies and similar structures.",
          ]}
        />
        <LegalEmphasis icon="how_to_reg">
          We may decline a relationship at any point during onboarding and
          we are not required to provide reasons. Where we are permitted to
          do so, we will explain our decision in writing.
        </LegalEmphasis>
      </>
    ),
  },
  {
    id: "scope",
    title: "Scope of Services",
    summary:
      "Each mandate sets out precisely what we are engaged to do. We do not provide services that fall outside that scope.",
    content: (
      <>
        <LegalDefinitions
          items={[
            {
              term: "Discretionary",
              description:
                "BOTA manages your portfolio on a fully discretionary basis within the parameters of the agreed Investment Policy Statement, including asset allocation, manager selection and tactical positioning.",
            },
            {
              term: "Advisory",
              description:
                "BOTA provides personal recommendations on which you decide whether to act. Each recommendation is subject to BOTA's fiduciary duty under common law and applicable state law.",
            },
            {
              term: "Execution Only",
              description:
                "Used only on an exceptional basis and only for non-complex instruments. Suitability obligations are limited accordingly.",
            },
            {
              term: "Family Office",
              description:
                "Consolidated reporting, governance support, structuring coordination and the orchestration of third-party advisers under your direction.",
            },
          ]}
        />
        <LegalParagraph>
          BOTA does not provide tax advice, legal advice or accounting
          services. Where such advice is required we will, on request,
          coordinate the engagement of independent specialists on agreed
          terms.
        </LegalParagraph>
      </>
    ),
  },
  {
    id: "fiduciary-duty",
    title: "Fiduciary Duty & Conflicts",
    content: (
      <>
        <LegalParagraph>
          BOTA owes each client an undivided fiduciary duty under common
          law and applicable state law, supplemented by contract. That
          duty comprises a duty of care and a duty of loyalty, and cannot
          be waived by these Terms or by the Investment Management
          Agreement. The duty applies regardless of how a mandate is
          described or how fees are calculated.
        </LegalParagraph>
        <LegalKeyPoints
          items={[
            "Duty of care - to provide advice and to monitor positions in your best interest, with the diligence reasonably expected of a professional fiduciary.",
            "Duty of loyalty - to eliminate or, at minimum, make full and fair disclosure of all material conflicts of interest before they arise.",
            "Code of Ethics - internally adopted and applicable to every partner, employee and access person of the firm.",
            "Cross-trades and principal transactions - undertaken only on agreed terms, only where demonstrably in the best interests of both clients, and only with written client consent where required.",
          ]}
        />
      </>
    ),
  },
  {
    id: "fees",
    title: "Fees, Costs & Reporting",
    content: (
      <>
        <LegalParagraph>
          Fees are quoted in the schedule attached to the Investment
          Management Agreement and described in full in the firm's
          Disclosure Brochure. They are typically expressed as a
          percentage of assets under management or advice, on a tiered
          scale. Fees accrue daily and are invoiced quarterly in arrears.
        </LegalParagraph>
        <LegalSubheading>Cost transparency</LegalSubheading>
        <LegalKeyPoints
          items={[
            "A personalised cost statement is delivered before the mandate begins.",
            "An annual statement summarising all costs and charges for the prior calendar year is delivered by 31 March.",
            "Performance-based compensation, where applicable, is available only to clients meeting the Qualified Client standard and is subject to an agreed hurdle and high-water mark.",
            "Third-party costs (custody, brokerage, fund-level fees, transaction taxes) are charged at cost and disclosed in the periodic statement.",
            "BOTA does not retain monetary inducements. Any 12b-1 fee or revenue-share payment received from a product provider is credited to the client account.",
          ]}
        />
        <LegalSubheading>Periodic reporting</LegalSubheading>
        <LegalParagraph>
          Clients receive monthly position statements through the Family
          Portal, a quarterly performance and attribution report, and an
          annual review meeting with the founding partner responsible for
          the mandate. The qualified custodian delivers account statements
          directly to the client at least quarterly.
        </LegalParagraph>
      </>
    ),
  },
  {
    id: "instructions",
    title: "Communications & Instructions",
    content: (
      <>
        <LegalParagraph>
          Instructions are accepted only from named, authorised persons
          identified during onboarding. We may, but are not required to,
          accept instructions transmitted by email, secure messaging or
          telephone and may decline any instruction we cannot reasonably
          verify.
        </LegalParagraph>
        <LegalKeyPoints
          items={[
            "Investment instructions outside the agreed mandate parameters require written confirmation from the authorised signatory before execution.",
            "Books-and-records are retained under our internal recordkeeping policy, which mirrors the standard applied by professional fiduciaries - including copies of relevant communications and contemporaneous records of advice given.",
            "Standing instructions remain in force until revoked in writing or replaced by superseding instructions.",
            "BOTA is not obliged to act on an instruction that would, in its reasonable opinion, breach applicable law, regulation or these Terms.",
          ]}
        />
      </>
    ),
  },
  {
    id: "confidentiality",
    title: "Confidentiality & Privacy",
    summary:
      "Discretion is the foundation of our practice. The duty applies to partners, employees and contractors and survives the termination of the relationship.",
    content: (
      <>
        <LegalParagraph>
          BOTA treats all client information as strictly confidential and
          protects it in line with the Gramm-Leach-Bliley Act, the FTC
          Safeguards Rule and applicable state privacy laws. Information
          will not be disclosed to any third party except: with your
          prior written consent; where reasonably necessary to operate
          the mandate (for example, to qualified custodians and
          counterparties); where required by law, regulation or a binding
          order; or to our professional advisers under equivalent duties
          of confidentiality.
        </LegalParagraph>
        <LegalEmphasis icon="shield">
          Breach of confidentiality is treated as gross misconduct and is
          grounds for immediate dismissal. Partners and employees remain
          bound after they leave the firm.
        </LegalEmphasis>
      </>
    ),
  },
  {
    id: "risk",
    title: "Investment Risk Acknowledgement",
    content: (
      <>
        <LegalParagraph>
          You acknowledge that investment in financial instruments and
          private-market participations carries risk and that the value of
          investments can fall as well as rise. BOTA does not guarantee
          investment outcomes. Past performance is not a reliable indicator
          of future results.
        </LegalParagraph>
        <LegalKeyPoints
          items={[
            "Market, liquidity, credit, currency, concentration, counterparty and operational risks may, alone or in combination, result in significant losses.",
            "Private-market positions are typically illiquid, may be subject to capital calls and may not be realisable at their reported fair value.",
            "Tax outcomes depend on your individual circumstances and may change. You are responsible for obtaining your own tax advice.",
            "Where leverage or derivatives are used within an agreed strategy, losses may exceed amounts originally committed.",
          ]}
        />
        <LegalEmphasis icon="warning">
          Nothing in these Terms or in any communication from BOTA
          constitutes a guarantee of return, a guarantee of capital
          preservation or a personal recommendation outside the scope of
          your mandate.
        </LegalEmphasis>
      </>
    ),
  },
  {
    id: "liability",
    title: "Liability",
    content: (
      <>
        <LegalParagraph>
          BOTA acts honestly, fairly and in the best interests of its
          clients. Nothing in these Terms operates as a waiver of any
          right, remedy or cause of action available under U.S. federal
          or New York State securities laws, or under common-law fiduciary
          principles. Any provision that would have such effect is
          severable to the extent necessary to give effect to those
          rights.
        </LegalParagraph>
        <LegalParagraph>
          Subject to the paragraph above, BOTA is not liable for losses
          that result from market movements, the failure of a qualified
          custodian or counterparty selected with reasonable care, force
          majeure events, or the consequences of acting on accurate
          information that subsequently became out of date.
        </LegalParagraph>
      </>
    ),
  },
  {
    id: "termination",
    title: "Termination",
    content: (
      <>
        <LegalParagraph>
          Either party may terminate the Investment Management Agreement
          by giving thirty calendar days' written notice. BOTA may
          terminate with immediate effect if continued provision of
          services would breach applicable law or regulation, or if the
          relationship has been materially damaged by a breach that has
          not been remedied within a reasonable period.
        </LegalParagraph>
        <LegalKeyPoints
          items={[
            "On termination, open positions are realised or transferred on a reasonable timetable agreed with the client.",
            "Fees accrued up to the effective date of termination remain payable.",
            "Sections relating to confidentiality, liability, data protection, record-keeping and governing law survive termination.",
            "Final reporting and a closing balance statement are delivered within forty-five days of termination.",
          ]}
        />
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Dispute Resolution",
    summary:
      "Every mandate is anchored in a single governing law. We strongly favour resolution by direct dialogue with a founding partner before any escalation.",
    content: (
      <>
        <LegalDefinitions
          items={[
            {
              term: "Governing Law",
              description:
                "These Terms and the Investment Management Agreement are governed by the laws of the State of New York and the applicable federal laws of the United States, without regard to conflict-of-laws principles.",
            },
            {
              term: "Jurisdiction",
              description:
                "Disputes are submitted to the exclusive jurisdiction of the state and federal courts located in the County of New York, save that we retain the right to bring proceedings in any jurisdiction where the client has assets.",
            },
            {
              term: "Mediation",
              description:
                "The parties undertake to attempt resolution by good-faith mediation before issuing court proceedings, except where urgent injunctive relief is required.",
            },
            {
              term: "Arbitration",
              description:
                "Where a mandate provides for arbitration, proceedings are administered by JAMS or the American Arbitration Association under their respective Comprehensive Arbitration Rules. Any such arrangement is without prejudice to rights of action available under U.S. federal or New York State securities laws.",
            },
            {
              term: "Independent Recourse",
              description:
                "Independent escalation paths - including the New York State Office of the Attorney General (Investor Protection Bureau) and the New York State Department of Financial Services - are listed in the Regulatory Disclosures document.",
            },
          ]}
        />
        <LegalEmphasis icon="gavel">
          We invite any client who is dissatisfied with the conduct of a
          mandate to raise it directly with the founding partner
          responsible. A formal complaints procedure exists, but it is
          rarely the first step we take with the families we serve.
        </LegalEmphasis>
      </>
    ),
  },
  {
    id: "amendments",
    title: "Amendments",
    content: (
      <>
        <LegalParagraph>
          These Terms may be updated to reflect changes in law,
          regulation or our business. Material amendments are notified to
          clients in writing at least thirty days before they take
          effect, together with a summary of material changes.
          Non-material amendments, including clarifications and
          typographical corrections, take effect on publication.
        </LegalParagraph>
        <LegalParagraph>
          The version history of these Terms is maintained on request. The
          version and effective date are shown on every published copy and
          in the footer of this page.
        </LegalParagraph>
      </>
    ),
  },
];

const RELATED = [
  {
    label: "Regulatory Disclosures",
    href: "/legal/disclosures",
    description:
      "Authorisations, conflicts framework and execution standards.",
  },
  {
    label: "Privacy Policy",
    href: "/legal/privacy",
    description: "How personal data is collected, processed and protected.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Terms of Engagement"
      title={<>The Terms of Our Relationship</>}
      intro={
        <>
          A mandate with BOTA is, above all, a partnership. These Terms set
          out the contractual framework that supports it: how we begin, how
          we operate, how we communicate, how we charge and - if it ever
          becomes necessary - how we resolve disagreement. They are written
          plainly because plain writing protects both sides.
        </>
      }
      version="2026.01"
      effectiveDate="01 January 2026"
      jurisdiction="State of New York · U.S. federal securities laws"
      sections={SECTIONS}
      related={RELATED}
      complianceContact={{
        email: siteEmail("partners"),
        note: "Every mandate is led by a founding partner. To discuss these Terms - or to begin a confidential conversation about a new relationship - write to us directly.",
      }}
    />
  );
}
