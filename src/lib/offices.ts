export type Office = {
  id: string;
  index: string;
  city: string;
  country: string;
  countryCode: string;
  lat: number;
  lng: number;
  opened: string;
  founding?: boolean;
  district: string;
  street: string;
  postal: string;
  expertise: string;
  practice: string[];
  languages: string[];
};

export const OFFICES: Office[] = [
  {
    id: "new-york",
    index: "01",
    city: "New York",
    country: "United States",
    countryCode: "US",
    lat: 40.7128,
    lng: -74.006,
    opened: "Founding office · 2016",
    founding: true,
    district: "Madison Avenue, Midtown Manhattan",
    street: "169 Madison Avenue",
    postal: "New York, NY 10016",
    expertise: "Capital Markets & Cross-Border Structuring",
    practice: [
      "Direct private equity",
      "Cross-border holding structures",
      "Public-market portfolio construction",
      "Family governance",
    ],
    languages: ["English", "Spanish", "Portuguese"],
  },
  {
    id: "lugano",
    index: "02",
    city: "Lugano",
    country: "Switzerland",
    countryCode: "CH",
    lat: 46.0037,
    lng: 8.9511,
    opened: "Opened 2018",
    district: "Via Nassa, Old Town",
    street: "Via Nassa 21",
    postal: "6900 Lugano",
    expertise: "Discretionary Wealth & Tax Coordination",
    practice: [
      "Discretionary mandates",
      "Multi-jurisdictional tax coordination",
      "Lombard lending",
      "Foreign-exchange treasury",
    ],
    languages: ["Italian", "German", "French", "English"],
  },
  {
    id: "milan",
    index: "03",
    city: "Milan",
    country: "Italy",
    countryCode: "IT",
    lat: 45.4642,
    lng: 9.19,
    opened: "Opened 2020",
    district: "Quadrilatero della Moda",
    street: "Via Monte Napoleone 8",
    postal: "20121 Milano",
    expertise: "Real Estate & Italian Industrial Capital",
    practice: [
      "Trophy real estate",
      "Industrial families & patrimonial holdings",
      "Private credit",
      "Heritage asset stewardship",
    ],
    languages: ["Italian", "English", "French"],
  },
  {
    id: "london",
    index: "04",
    city: "London",
    country: "United Kingdom",
    countryCode: "GB",
    lat: 51.5074,
    lng: -0.1278,
    opened: "Opened 2022",
    district: "Mayfair, Westminster",
    street: "Mayfair Square",
    postal: "London W1J 7BR",
    expertise: "Trust Structuring & Heritage Wealth",
    practice: [
      "Trust & foundation structuring",
      "Private equity co-investment",
      "Heritage and collectible assets",
      "Multi-generational governance",
    ],
    languages: ["English", "Arabic", "French", "Russian"],
  },
];
