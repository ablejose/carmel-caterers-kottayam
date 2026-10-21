import { site } from "@/config/site";

/**
 * The business name as a display word. With `brand.wordmark` set it is lettered
 * like the client's logo — uppercase geometric sans (Montserrat 500, loaded in
 * app/layout.tsx), wide tracking, and optionally their stemless three-bar "E" —
 * otherwise it is plain text in whatever font the caller sets. Size and colour
 * always come from the caller. The text content stays the real name (the drawn
 * "E" keeps its letter, visually hidden), so headings read correctly to search
 * engines and screen readers.
 */
const TRACK = "0.4em";

/** Stemless "E": three equal bars spanning the cap height (0.7em in Montserrat). */
function BarE({ letter }: { letter: string }) {
  return (
    // An inline-block with only absolutely-placed children sits on the text baseline.
    <span className="relative inline-block h-[0.7em] w-[0.52em]" style={{ marginRight: TRACK }}>
      <span className="sr-only">{letter}</span>
      {["top-0", "top-1/2 -translate-y-1/2", "bottom-0"].map((pos) => (
        <span key={pos} aria-hidden className={`absolute inset-x-0 ${pos} h-[0.085em] bg-current`} />
      ))}
    </span>
  );
}

export default function BrandName() {
  const wm = site.wordmark;
  if (!wm) return <>{site.name}</>;

  return (
    <span
      className="inline-block whitespace-nowrap uppercase"
      // Trailing tracking is trimmed so the word centres on its letters.
      style={{ fontFamily: "var(--font-wordmark), sans-serif", fontWeight: 500, letterSpacing: TRACK, marginRight: `-${TRACK}` }}
    >
      {Array.from(site.name).map((ch, i) => (wm.barE && ch.toUpperCase() === "E" ? <BarE key={i} letter={ch} /> : ch))}
    </span>
  );
}
