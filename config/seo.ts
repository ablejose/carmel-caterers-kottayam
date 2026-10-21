/** DERIVED — all SEO / schema.org values, generated from the event config. */
import { event } from "@/event.config";
import { templateCopy } from "@/config/template";
import { t } from "@/lib/copy";
import { brandAssets, heroSlides, site } from "@/config/site";
import { services } from "@/config/services";
import { menu } from "@/config/menu";
import { reviews } from "@/config/reviews";

const s = templateCopy.seo;

export const seo = {
  title: t(event.seo?.title ?? s.title),
  titleTemplate: t(s.titleTemplate),
  description: t(event.seo?.description ?? s.description),
  ogDescription: t(event.seo?.ogDescription ?? s.ogDescription),
  // Event's own keywords first (they're the searches it targets), then the generated patterns.
  keywords: Array.from(new Set([...(event.seo?.keywords ?? []), ...s.keywords.map(t)])),
  category: s.category,
  locale: s.locale,
  lang: s.lang,
  /** Env vars win so a code can be set on the host without a commit. */
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || event.seo?.googleSiteVerification,
  bingVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || event.seo?.bingSiteVerification,
};

const pageUrl = `${site.url}/`;
const abs = (path: string) => (/^https?:\/\//.test(path) ? path : `${site.url}${path}`);
const uniq = (xs: (string | undefined)[]) => Array.from(new Set(xs.filter((x): x is string => !!x)));

/** Town -> City, district -> AdministrativeArea, state -> State (schema.org areaServed). */
const placeType = (a: string) =>
  a === event.location.region ? "State" : a === event.location.district && a !== event.location.city ? "AdministrativeArea" : "City";

const business = {
  // schema.org has no Caterer / EventPlanner type: a FoodEstablishment that also plans events.
  "@type": ["LocalBusiness", "FoodEstablishment"],
  "@id": `${site.url}/#business`,
  name: site.fullName,
  alternateName: uniq([`${site.name} ${site.descriptor}`, site.name]).filter((n) => n !== site.fullName),
  description: seo.description,
  slogan: site.tagline,
  image: uniq([brandAssets.ogImage, ...heroSlides.map((h) => h.src)]).map(abs),
  logo: abs(`${brandAssets.dir}/android-chrome-512x512.png`),
  url: pageUrl,
  telephone: site.phone,
  email: site.email,
  currenciesAccepted: s.currency,
  servesCuisine: [...s.cuisines],
  address: {
    "@type": "PostalAddress",
    streetAddress: event.location.street,
    addressLocality: event.location.city,
    addressRegion: event.location.region,
    postalCode: event.location.postalCode || undefined,
    addressCountry: event.location.country,
  },
  geo: event.location.geo
    ? { "@type": "GeoCoordinates", latitude: event.location.geo.lat, longitude: event.location.geo.lng }
    : undefined,
  hasMap: site.mapsLink,
  areaServed: site.serviceAreas.map((a) => ({ "@type": placeType(a), name: a })),
  sameAs: [event.web.instagram, event.web.facebook, event.web.youtube].filter(Boolean),
  // Only the hours the business gave — never a guessed default.
  openingHoursSpecification:
    event.location.opens && event.location.closes
      ? {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: event.location.opens,
          closes: event.location.closes,
        }
      : undefined,
  aggregateRating: site.reviews
    ? {
        "@type": "AggregateRating",
        ratingValue: site.rating.toFixed(1),
        bestRating: "5",
        worstRating: "1",
        reviewCount: String(site.reviews),
      }
    : undefined,
  // The real Google reviews shown on the page, word for word.
  review: reviews.length
    ? reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.name },
        reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5", worstRating: "1" },
        reviewBody: r.quote,
      }))
    : undefined,
  makesOffer: services.map((sv) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: sv.title, description: sv.blurb, areaServed: event.location.region },
  })),
  // The quote-builder menu, course by course.
  hasMenu: menu.length
    ? {
        "@type": "Menu",
        name: `${site.fullName} menu`,
        url: `${pageUrl}#menu`,
        inLanguage: s.lang,
        hasMenuSection: menu.map((c) => ({
          "@type": "MenuSection",
          name: c.title,
          hasMenuItem: c.items.map((i) => ({
            "@type": "MenuItem",
            name: i.name,
            description: i.note,
            suitableForDiet: i.veg ? "https://schema.org/VegetarianDiet" : undefined,
          })),
        })),
      }
    : undefined,
};

/** schema.org graph for the active event: the business, the website and the home page. */
export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    business,
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: pageUrl,
      name: site.fullName,
      alternateName: business.alternateName,
      inLanguage: s.lang,
      publisher: { "@id": business["@id"] },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: pageUrl,
      name: seo.title,
      description: seo.description,
      inLanguage: s.lang,
      isPartOf: { "@id": `${site.url}/#website` },
      about: { "@id": business["@id"] },
      primaryImageOfPage: { "@type": "ImageObject", url: abs(brandAssets.ogImage), width: 1200, height: 630 },
    },
  ],
};
