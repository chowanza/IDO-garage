import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-headings",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SOS Garage Door Group | Chicago IL Garage Door Repair 24/7",
  description: "Expert garage door repair, broken spring replacement & smart opener installations in Chicagoland. Fast 45-min emergency dispatch. Call (773) 839-2852!",
  keywords: [
    "garage door repair chicago",
    "garage door spring replacement chicago",
    "emergency garage door service",
    "commercial overhead doors chicago",
    "liftmaster repair chicago",
  ],
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://sosgaragesolutions.com/#business",
      "name": "SOS Garage Door Group",
      "url": "https://sosgaragesolutions.com",
      "telephone": "+1-773-839-2852",
      "priceRange": "$$",
      "image": "https://sosgaragesolutions.com/public/hero-bg.jpg",
      "logo": "https://sosgaragesolutions.com/public/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6200 N Francisco Ave",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "postalCode": "60659",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 42.008469,
        "longitude": -87.693725
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Chicago",
          "sameAs": "https://en.wikipedia.org/wiki/Chicago"
        },
        {
          "@type": "City",
          "name": "Evanston",
          "sameAs": "https://en.wikipedia.org/wiki/Evanston,_Illinois"
        },
        {
          "@type": "City",
          "name": "Skokie",
          "sameAs": "https://en.wikipedia.org/wiki/Skokie,_Illinois"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Garage Door Services Catalog",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Broken Spring Replacement",
              "description": "Premium quality high-cycle spring replacement with dynamic balancing."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Opener Repair & Smart Installation",
              "description": "Heavy-duty chain or belt-driven opener repair and installation."
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "184"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://sosgaragesolutions.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does it cost to replace a garage door spring in Chicago?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The cost to replace a garage door spring in Chicagoland typically ranges from $150 to $350. This estimate covers high-cycle springs, professional balance calibration, and a parts warranty."
          }
        },
        {
          "@type": "Question",
          "name": "Do you provide emergency garage door services on weekends?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SOS Garage Door Group provides 24/7 emergency service in Chicago and suburbs, including late nights, weekends, and holidays, with no emergency premium rates for same-day service."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
