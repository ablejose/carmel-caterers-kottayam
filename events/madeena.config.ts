import type { EventConfig } from "@/config/event-schema";

/**
 * MADEENA CATERING & EVENT MANAGEMENT — Perintalmanna, Kerala.
 * Personal data only. Verified from the business's Google Business Profile.
 * Their own photos/videos live in public/events/madeena/.
 */
export const madeena: EventConfig = {
  slug: "madeena",

  brand: {
    name: "Madeena",
    fullName: "Madeena Catering & Event Management",
    descriptor: "Catering & Event Management",
    kicker: "Catering & Events",
    tagline: "Weddings & events, catered with care.",
  },

  contact: {
    phone: "+91 94951 63651",
    whatsapp: "919495163651",
  },

  location: {
    city: "Perintalmanna",
    district: "Malappuram",
    region: "Kerala",
    area: "Thelakkad",
    address: "Opposite Panchayath Office, Thelakkad, Perintalmanna, Malappuram, Kerala 679325",
    street: "Opposite Panchayath Office, Thelakkad",
    postalCode: "679325",
    country: "IN",
    serviceAreas: ["Perintalmanna", "Mankada", "Melattur", "Angadipuram", "Malappuram"],
    geo: { lat: 11.019036, lng: 76.279299 },
    mapsLink: "https://share.google/kQWrsDqbfc63ntrxw",
    mapEmbed: "https://www.google.com/maps?q=11.019036,76.279299&z=15&output=embed",
    hours: "Open 24 hours · all days",
    opens: "00:00",
    closes: "23:59",
    delivery: true,
  },

  web: {
    url: "https://www.madeenaevents.in",
    instagram: "https://www.instagram.com/madeena_catering/",
  },

  reputation: { rating: 5.0, reviews: 20 },

  media: {
    base: "/events/madeena",
    heroPoster: "hero-poster.webp",
    ogImage: "og-image.jpg",
    brandDir: "brand",
    about: [
      { src: "about-1.webp", alt: "Grand indoor banquet set with gold chairs and chandelier" },
      { src: "about-2.webp", alt: "Outdoor evening banquet with floral table styling" },
    ],
    gallery: [
      { src: "gallery/07.webp", alt: "Floral wedding stage and mandap" },
      { src: "gallery/05.webp", alt: "Banquet hall set with dressed long tables and candlelight" },
      { src: "gallery/13.webp", alt: "Buffet spread with gold chafing dishes at a function" },
      { src: "gallery/10.webp", alt: "Floral décor and hanging lanterns over a buffet counter" },
      { src: "gallery/08.webp", alt: "Floral pillars and monogram backdrop at a reception" },
      { src: "gallery/02.webp", alt: "Golden table settings laid out for a wedding feast" },
      { src: "gallery/11.webp", alt: "Floral arch and lanterns above a served buffet" },
      { src: "gallery/04.webp", alt: "Rose candelabra centrepiece on a banquet table" },
      { src: "gallery/01.webp", alt: "Large banquet hall set for a catered reception" },
      { src: "gallery/12.webp", alt: "Spacious hall set with long tables for a big function" },
      { src: "gallery/03.webp", alt: "Floral wedding welcome signboard at the entrance" },
    ],
  },

  // REAL Google reviews, tidied for punctuation only. Never invent testimonials.
  reviews: [
    {
      name: "Shahul Hameed",
      rating: 5,
      quote:
        "Thank you for making our special day even more special! The menu was exactly what we wanted, and the service team made everyone feel taken care of. Our family and friends are still talking about how delicious the food was.",
    },
    { name: "Shoukkathali MA", rating: 5, quote: "Quality services, affordable pricing. Highly recommended." },
    {
      name: "Sajeer Saju",
      rating: 5,
      quote: "Good service, excellent work. The greatest dishes are served with simplicity — really, I like it.",
    },
  ],

  seo: {
    keywords: ["Madeena Catering", "catering Perintalmanna", "wedding catering Malappuram"],
  },
};
