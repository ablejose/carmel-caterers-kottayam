import { site } from "@/config/site";

/**
 * The business name as a display word. With `brand.wordmark` set it is lettered
 * like the client's logo — uppercase geometric sans (Montserrat 500, loaded in
 * app/layout.tsx), wide tracking, and optionally their stemless three-bar "E" —
 * otherwise it is plain text in whatever font the caller sets. Size and colour
 * always come from the caller.
 */
const TRACK = "0.4em";

/** Stemless "E": three equal bars spanning the cap height (0.7em in Montserrat). */
function BarE() {
  return (
    // An inline-block with only absolutely-placed children sits on the text baseline.
    <span className="relative inline-block h-[0.7em] w-[0.52em]" style={{ marginRight: TRACK }}>
      {["top-0", "top-1/2 -translate-y-1/2", "bottom-0"].map((pos) => (
        <span key={pos} className={`absolute inset-x-0 ${pos} h-[0.085em] bg-current`} />
      ))}
    </span>
  );
}

export default function BrandName() {
  const wm = site.wordmark;
  if (!wm) return <>{site.name}</>;

  return (
    <>
      <span className="sr-only">{site.name}</span>
      <span
        aria-hidden
        className="inline-block whitespace-nowrap uppercase"
        // Trailing tracking is trimmed so the word centres on its letters.
        style={{ fontFamily: "var(--font-wordmark), sans-serif", fontWeight: 500, letterSpacing: TRACK, marginRight: `-${TRACK}` }}
      >
        {Array.from(site.name.toUpperCase()).map((ch, i) => (wm.barE && ch === "E" ? <BarE key={i} /> : ch))}
      </span>
    </>
  );
}
