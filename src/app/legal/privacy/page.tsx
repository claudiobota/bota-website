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
  title: "Privacy Policy",
  description:
    "How BOTA Holdings, LLC collects, uses and safeguards personal data under U.S. federal and state privacy laws, with continued protection for European clients under GDPR and UK GDPR.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "the-firm",
    title: "The Firm & Privacy Officer",
    summary:
      "BOTA Holdings, LLC processes personal data with the care of a private bank. Every relationship is anchored to an accountable senior officer responsible for privacy.",
    content: (
      <>
        <LegalParagraph>
          This policy is issued by BOTA Holdings, LLC, a Delaware limited
          liability company with its registered office at 169 Madison
          Avenue, New York, NY 10016, United States. It applies to all
          personal data the firm collects and processes in connection with
          its investment advisory and family-office services, wherever the
          data subject is located.
        </LegalParagraph>
        <LegalDefinitions
          items={[
            {
              term: "The Firm",
              description:
                "BOTA Holdings, LLC, acting through its New York principal office and its representative offices in Lugano, Milan and London.",
            },
            {
              term: "Chief Privacy Officer",
              description: (
                <>
                  Reachable at{" "}
                  <a
                    href={`mailto:${siteEmail("privacy")}`}
                    className="text-primary underline underline-offset-4 hover:no-underline"
                  >
                    {siteEmail("privacy")}
                  </a>
                  . The CPO operates independently of business lines and
                  reports directly to the Group Audit & Risk Committee.
                </>
              ),
            },
            {
              term: "EU Representative",
              description:
                "For data subjects located in the European Economic Area, our representative under Article 27 GDPR is appointed in Milan. Contact details are available on request.",
            },
            {
              term: "UK Representative",
              description:
                "For data subjects located in the United Kingdom, our representative under Article 27 UK GDPR is appointed in London. Contact details are available on request.",
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "legal-framework",
    title: "Legal Framework",
    content: (
      <>
        <LegalParagraph>
          BOTA's privacy programme is built on overlapping U.S.
          federal, state and international rules. The policy below explains
          which framework applies to your information and, where multiple
          frameworks overlap, we apply the most protective standard
          available.
        </LegalParagraph>
        <LegalKeyPoints
          items={[
            "Gramm-Leach-Bliley Act (GLBA) - federal financial-privacy framework for non-public personal information.",
            "FTC Safeguards Rule (16 C.F.R. Part 314) - implementing GLBA for non-bank financial institutions; sets the baseline standard for information-security programmes at firms of our type.",
            "FTC Privacy Rule (16 C.F.R. Part 313) - initial and annual privacy notices and limitations on sharing non-public personal information with non-affiliated third parties.",
            "New York SHIELD Act and 23 NYCRR Part 500 - reasonable safeguards and cybersecurity requirements for financial services conducted from New York.",
            "California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA) - for California residents.",
            "Other comparable state laws - including Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA) and others as they enter into force.",
            "EU General Data Protection Regulation and UK GDPR - for data subjects located in the EEA or the United Kingdom, even where BOTA is the sole controller.",
          ]}
        />
      </>
    ),
  },
  {
    id: "data-collected",
    title: "Personal Data We Collect",
    content: (
      <>
        <LegalParagraph>
          We collect only what is necessary to operate a regulated mandate
          and to discharge our duties to you. Wherever possible, we collect
          information directly from you, with your knowledge.
        </LegalParagraph>
        <LegalDefinitions
          items={[
            {
              term: "Identity",
              description:
                "Full legal name, date of birth, citizenship, government-issued identifiers (passport, driving licence, SSN or ITIN for U.S. persons), and the documentation required by our internal Customer Identification Programme, modelled on the standards of the USA PATRIOT Act.",
            },
            {
              term: "Contact",
              description:
                "Residential and correspondence addresses, telephone numbers, email addresses and authorised channels of communication.",
            },
            {
              term: "Financial",
              description:
                "Source of wealth and source of funds, banking and custody references, transaction history, asset and liability position, and tax-status declarations (Form W-9 for U.S. persons, Form W-8BEN / W-8BEN-E for non-U.S. persons).",
            },
            {
              term: "Family & Structure",
              description:
                "Information regarding beneficial owners, controlling persons, trustees, protectors, settlors and named beneficiaries - collected only where necessary to onboard a structure.",
            },
            {
              term: "Suitability",
              description:
                "Investment objectives, risk tolerance, time horizon and capacity to bear loss, used to apply the federal fiduciary suitability standard.",
            },
            {
              term: "Special Category",
              description:
                "Limited categories of sensitive data - for example, biometric identifiers used during enhanced identity verification - only where unavoidable and only with explicit consent or another lawful basis.",
            },
          ]}
        />
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: (
      <>
        <LegalKeyPoints
          items={[
            "To assess suitability before any advisory service is provided, in line with our federal fiduciary duty.",
            "To execute, transmit and settle transactions on your behalf and to maintain consolidated reporting.",
            "To carry out customer-identification and ongoing-monitoring procedures aligned with the USA PATRIOT Act, OFAC sanctions screening and industry best practice.",
            "To provide U.S. tax reporting (1099 series, K-1 series) and, where applicable, FATCA / CRS reporting to non-U.S. tax authorities.",
            "To manage credit, operational, cyber and reputational risk across the firm.",
            "To provide secure access to the Family Portal, including authentication and session integrity.",
            "To improve the quality of our services through internal analysis on a strictly need-to-know basis.",
          ]}
        />
        <LegalParagraph>
          We do not engage in automated decision-making that produces legal
          or similarly significant effects on data subjects without
          meaningful human involvement.
        </LegalParagraph>
      </>
    ),
  },
  {
    id: "sharing",
    title: "When We Share Information",
    summary:
      "Under GLBA we are permitted to share non-public personal information only in narrowly defined circumstances. We never sell personal information.",
    content: (
      <>
        <LegalSubheading>Categories of recipient</LegalSubheading>
        <LegalKeyPoints
          items={[
            "Qualified custodians, prime brokers and counterparties - to execute and settle transactions on your behalf.",
            "Auditors, legal advisers, tax preparers and other professional advisers - bound by duties of confidentiality.",
            "Service providers and cloud-infrastructure vendors - operating under written agreements that restrict use of personal data to the services contracted.",
            "Regulators, self-regulatory organisations, tax authorities, law-enforcement agencies and courts - where required by law or by a binding order.",
            "Affiliates within the BOTA group - only to the extent necessary to provide consolidated reporting and group-wide risk management.",
          ]}
        />
        <LegalSubheading>International transfers</LegalSubheading>
        <LegalParagraph>
          Personal data transferred from the European Economic Area or the
          United Kingdom to the United States is protected by the European
          Commission's Standard Contractual Clauses (with the UK
          Addendum where applicable), supplemented by a transfer-risk
          assessment and, where necessary, additional technical measures
          such as encryption in transit and at rest. Where available, we
          may also rely on the EU-U.S. Data Privacy Framework adequacy
          decision for transfers between participating organisations.
        </LegalParagraph>
      </>
    ),
  },
  {
    id: "retention",
    title: "Retention Periods",
    summary:
      "We keep personal data only for as long as we need it, and never longer than the law allows.",
    content: (
      <LegalDefinitions
        items={[
          {
            term: "Active Mandate",
            description:
              "For the duration of the relationship, plus the retention periods required by the Investment Advisers Act.",
          },
          {
            term: "Mandate Records",
            description:
              "Books and records relating to advice given, transactions executed and communications with the client are retained for at least five years from the end of the fiscal year in which the entry was made, in line with the standard applied by professional fiduciaries.",
          },
          {
            term: "AML Records",
            description:
              "Customer identification and due-diligence records are retained for at least five years after the end of the relationship, consistent with the USA PATRIOT Act standard.",
          },
          {
            term: "Tax Records",
            description:
              "Generally retained for at least seven years after the relevant tax year, consistent with IRS and state limitation periods.",
          },
          {
            term: "Prospective Clients",
            description:
              "Information about prospective clients who do not proceed is deleted within twelve months unless they ask us to keep them informed.",
          },
        ]}
      />
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: (
      <>
        <LegalParagraph>
          Your rights depend on where you live and on the data we hold.
          Where multiple frameworks overlap, we apply the most protective
          standard available. To exercise any of the rights below, write to{" "}
          <a
            href={`mailto:${siteEmail("privacy")}`}
            className="text-primary underline underline-offset-4 hover:no-underline"
          >
            {siteEmail("privacy")}
          </a>
          . We respond within thirty days for U.S. requests and within one
          calendar month for GDPR / UK GDPR requests.
        </LegalParagraph>
        <LegalSubheading>Across all jurisdictions</LegalSubheading>
        <LegalKeyPoints
          items={[
            "Annual GLBA privacy notice - provided automatically to every client of the firm.",
            "Right to opt out of sharing non-public personal information with non-affiliated third parties beyond the GLBA Section 502(e) exceptions.",
          ]}
        />
        <LegalSubheading>U.S. state residents</LegalSubheading>
        <LegalKeyPoints
          items={[
            "Right to know what categories of personal information are collected and for what purposes (CCPA/CPRA and comparable state laws).",
            "Right to access, correct and delete personal information, subject to the exceptions provided for financial institutions.",
            "Right to opt out of the sale or sharing of personal information for cross-context behavioural advertising - BOTA does not engage in such sale or sharing.",
            "Right to limit the use of sensitive personal information.",
            "Right to non-discrimination for exercising any of the rights above.",
          ]}
        />
        <LegalSubheading>EEA and United Kingdom residents</LegalSubheading>
        <LegalKeyPoints
          items={[
            "Right of access, rectification, erasure, restriction, portability and objection under GDPR / UK GDPR.",
            "Right to withdraw consent at any time, without prejudice to processing already carried out.",
            "Right to lodge a complaint with the Garante (Italy), the FDPIC (Switzerland), the ICO (United Kingdom) or any other competent supervisory authority in the data subject's place of residence.",
          ]}
        />
      </>
    ),
  },
  {
    id: "security",
    title: "Security & Confidentiality",
    content: (
      <>
        <LegalParagraph>
          We treat client information with the same discretion we apply
          to investment decisions. Our information-security programme is
          designed to meet the FTC Safeguards Rule under GLBA, the New
          York SHIELD Act and the cybersecurity requirements of 23 NYCRR
          Part 500.
        </LegalParagraph>
        <LegalKeyPoints
          items={[
            "Encryption in transit (TLS 1.2 or higher) and at rest for all client records.",
            "Multi-factor authentication for all staff and for Family Portal access.",
            "Annual independent penetration testing and continuous monitoring of production systems.",
            "Segregation of duties between front-office, operations, risk and compliance functions.",
            "A written incident-response plan with notification timelines aligned to the FTC Safeguards Rule, applicable state breach-notification laws (including New York SHIELD), and Article 33 GDPR for affected EEA / UK data subjects.",
          ]}
        />
        <LegalEmphasis icon="lock">
          Partners and employees are bound by a duty of confidentiality that
          continues after they leave the firm. Breach of that duty is a
          dismissible matter and can carry personal regulatory sanction.
        </LegalEmphasis>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies & Site Analytics",
    content: (
      <>
        <LegalParagraph>
          Our public website uses a minimal set of strictly necessary
          cookies to support session continuity and security. We do not
          deploy advertising, retargeting or cross-site tracking
          technologies and we do not sell or share personal information for
          cross-context behavioural advertising within the meaning of the
          CPRA.
        </LegalParagraph>
        <LegalKeyPoints
          items={[
            "Strictly necessary - session and security cookies. No consent required.",
            "Preferences - language and accessibility settings, only when set by you. Removed on logout or after twelve months.",
            "Analytics - privacy-preserving, aggregated server-side measurement; no individual user profiles are built.",
          ]}
        />
        <LegalParagraph>
          The Family Portal uses additional authentication cookies and
          security tokens, all of which are documented in the Portal Terms
          of Use available within the portal itself.
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
    label: "Terms of Engagement",
    href: "/legal/terms",
    description:
      "The contractual framework that governs every mandate we accept.",
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title={<>The Privacy of Family Capital</>}
      intro={
        <>
          Discretion is the foundation of our practice. This policy
          explains how BOTA Holdings, LLC handles personal data - what we
          collect, why we collect it, who we share it with, how long we
          keep it and the rights you can exercise at any time. It is
          written to be read, not to be filed.
        </>
      }
      version="2026.01"
      effectiveDate="01 January 2026"
      jurisdiction="GLBA · FTC Safeguards Rule · NY SHIELD · CCPA/CPRA · GDPR · UK GDPR"
      sections={SECTIONS}
      related={RELATED}
      complianceContact={{
        email: siteEmail("privacy"),
        note: "The Chief Privacy Officer is the dedicated point of contact for all privacy matters. Every request is acknowledged within two business days.",
      }}
    />
  );
}
