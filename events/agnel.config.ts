import type { EventConfig } from "@/config/event-schema";

/**
 * AGNEL CATERS & EVENTS — Nalukody, Changanassery, Kerala.
 * Personal data only. Name, address, phone, pin, rating and reviews come from
 * the business's Google Business Profile (maps cid 6233605642846363635); the
 * second phone, email, Instagram, tagline and service list come from their own
 * poster on that profile. Photos in public/events/agnel/gallery are theirs,
 * from the same profile. The two hero images were supplied by the client.
 */
export const agnel: EventConfig = {
  slug: "agnel",
  variant: "catering",

  brand: {
    name: "Agnel",
    fullName: "Agnel Caters & Events",
    descriptor: "Caterers & Events",
    kicker: "Caters & Events",
    tagline: "Turning your special moments into unforgettable experiences.",
    headline: "Unforgettable feasts. Flawless celebrations.",
  },

  contact: {
    phone: "+91 62380 51337",
    phoneAlt: "+91 79028 34067",
    whatsapp: "916238051337",
    email: "agnelcatersandevents@gmail.com",
  },

  location: {
    city: "Changanassery",
    district: "Kottayam",
    region: "Kerala",
    area: "Nalukody",
    address: "Nalukody PO, Changanassery, Kerala 686548",
    street: "Nalukody PO",
    postalCode: "686548",
    country: "IN",
    serviceAreas: ["Changanassery", "Nalukody", "Kottayam", "Thiruvalla", "Kuttanad"],
    geo: { lat: 9.4258702, lng: 76.563639 },
    mapsLink: "https://maps.google.com/?cid=6233605642846363635",
    mapEmbed: "https://www.google.com/maps?q=9.4258702,76.563639&z=15&output=embed",
    hours: "Open until 9 pm",
    closes: "21:00",
    delivery: false,
  },

  web: {
    url: "https://agnelevents-two.vercel.app",
    instagram: "https://www.instagram.com/agnelcatersandevents/",
  },

  reputation: { rating: 5.0, reviews: 31 },

  media: {
    base: "/events/agnel",
    heroPoster: "hero-poster.webp",
    heroSlides: [
      { src: "hero/01.webp", alt: "Banquet hall dressed in white and gold under crystal chandeliers" },
      { src: "hero/02.webp", alt: "Floral wedding mandap with marigold garlands and gold chairs" },
    ],
    logoMark: "brand/logo-mark.png",
    ogImage: "og-image.jpg",
    brandDir: "brand",
    // Template stock art (public/template) — styled demo shots, not Agnel's own events.
    about: [
      { src: "/template/placeholders/02.webp", alt: "Wedding buffet spread with gold chafing dishes and florals" },
      { src: "/template/about-fallback.webp", alt: "Bride under fairy lights at an evening celebration" },
    ],
    gallery: [
      { src: "gallery/01.webp", alt: "Rustic wooden dining setup with hanging florals and Edison bulbs", caption: "Rustic wedding dining" },
      { src: "gallery/02.webp", alt: "Welcome drinks served by an Agnel team member", caption: "Welcome drinks" },
      { src: "gallery/03.webp", alt: "Floral ring stage with hanging lights under a draped canopy", caption: "Floral ring stage" },
      { src: "gallery/04.webp", alt: "Outdoor seating with lavender chair covers and a floral arch", caption: "Garden ceremony seating" },
      { src: "gallery/05.webp", alt: "Chefs serving hot food from the buffet counter", caption: "Served hot, on the day" },
      { src: "gallery/06.webp", alt: "Teddy bear and balloon theme décor for a little one's celebration", caption: "Themed celebration décor" },
      { src: "gallery/07.webp", alt: "Custom welcome board for a mehandi night", caption: "Mehandi night welcome board" },
      { src: "gallery/08.webp", alt: "Hall set with lavender-draped chairs and dining tables", caption: "Banquet hall setup" },
      { src: "gallery/09.webp", alt: "Evening outdoor seating lit with fairy lights", caption: "Evening function lighting" },
      { src: "gallery/10.webp", alt: "Themed stage with balloon arch inside a function hall", caption: "Themed stage" },
      { src: "gallery/11.webp", alt: "Guests being served at a house function", caption: "House function service" },
      { src: "gallery/12.webp", alt: "Illuminated floral light sculptures at night", caption: "Light installations" },
      { src: "gallery/13.webp", alt: "Fresh floral pillar with lavender and white blooms", caption: "Fresh florals" },
    ],
  },

  // REAL Google reviews (5.0 from 31), quoted as written. Never invent testimonials.
  reviews: [
    {
      name: "Natasha Francis",
      rating: 5,
      quote:
        "Agnel Caters and Events did an outstanding job organizing the event! The team was professional, attentive, and made sure every detail was perfect. The catering was exceptional — delicious food with great presentation and generous portions.",
    },
    {
      name: "Ron Roy",
      rating: 5,
      quote:
        "Very impressive work in reasonable price. High professionalism, excellent guest satisfaction and high attention to detail. They are full of creativity, respect your budget and provide the best of their services.",
    },
    {
      name: "Adithya P Kumar",
      rating: 5,
      quote:
        "This team is simply superb! They were incredibly professional, organized, and attentive to every single detail. They kept everything perfectly on schedule from start to finish.",
    },
    {
      name: "Anu P Raju",
      rating: 5,
      quote:
        "The team is super creative, well-coordinated, and really pays attention to every detail. If you're looking for someone to make your special moments unforgettable, I highly recommend them!",
    },
    {
      name: "Akhil T A",
      rating: 5,
      quote: "The food was absolutely delicious and the service was exceptional. All our guests loved the presentation and punctuality.",
    },
    { name: "Josily Joseph", rating: 5, quote: "Great experience! Everything was well organized and perfectly managed." },
  ],

  seo: {
    keywords: [
      "Agnel Caters",
      "Agnel Caters & Events",
      "catering Changanassery",
      "wedding catering Kottayam",
      "Kerala Christian wedding catering",
      "baptism catering Changanassery",
    ],
  },

  overrides: {
    // Their own service list (from their poster), shown with template stock art.
    services: [
      {
        id: "weddings",
        title: "Weddings & Engagements",
        blurb: "Wedding feasts, betrothals and receptions — the menu, the service crew and the setting, handled as one.",
        bullets: ["Kerala & multi-cuisine menus", "Stage & floral décor", "Trained serving crew"],
        image: "/template/hero/04.webp",
      },
      {
        id: "family",
        title: "Baptisms & House Functions",
        blurb: "Baptisms, birthdays and house functions, catered warmly at home or in a hall.",
        bullets: ["Home & hall catering", "Themed décor", "Sit-down or buffet"],
        image: "/template/placeholders/05.webp",
      },
      {
        id: "corporate",
        title: "Corporate Events",
        blurb: "Office celebrations, conferences and launches — on time, neatly set and served.",
        bullets: ["Hall setup & seating", "Buffets & tea service", "On-day coordination"],
        image: "/template/service-1.webp",
      },
      {
        id: "light-sound",
        title: "Décor, Light & Sound",
        blurb: "Stages, florals, lighting and sound — so the evening looks and feels the way you pictured it.",
        bullets: ["Stage & entrance décor", "Fairy lights & installations", "Sound system"],
        image: "/template/service-2.webp",
      },
    ],
    aboutBody:
      "{fullName} is based in {area}, {city}. We cater and style weddings, engagements, baptisms, house functions and corporate events — one team for the food, the stage, the florals and the light and sound. Every dish is cooked fresh for the day, served hot by our own crew, and every detail is checked so you can simply enjoy the occasion.",
  },
};
