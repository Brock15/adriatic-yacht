import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import yacht1 from "@/assets/yacht-1.jpg";
import yacht2 from "@/assets/yacht-2.jpg";
import yacht3 from "@/assets/yacht-3.jpg";

export const Route = createFileRoute("/fleet")({
  head: () => ({
    meta: [
      { title: "The Fleet — Adriata" },
      { name: "description", content: "Fourteen privately-held vessels, from classic Sangermani schooners to contemporary motor yachts, maintained by a single family atelier." },
      { property: "og:title", content: "The Adriata Fleet" },
      { property: "og:description", content: "Sail, motor, and classic vessels for the discerning few." },
    ],
  }),
  component: FleetPage,
});

const fleet = [
  {
    name: "Serenissima",
    type: "Motor Yacht",
    length: "38m",
    year: 2021,
    guests: 10,
    crew: 6,
    builder: "Benetti, Viareggio",
    img: yacht1,
    note: "Newly commissioned. Glass-walled main saloon, beach club aft.",
    favorite: false,
  },
  {
    name: "La Marenda",
    type: "Classic Gulet",
    length: "32m",
    year: 1998,
    guests: 12,
    crew: 5,
    builder: "Bodrum atelier, restored 2019",
    img: yacht2,
    note: "Hand-finished mahogany. The vessel our oldest guests return for.",
    favorite: true,
  },
  {
    name: "Aurelia",
    type: "Sailing Yacht",
    length: "28m",
    year: 2019,
    guests: 8,
    crew: 4,
    builder: "Nautor's Swan",
    img: yacht3,
    note: "For those who prefer the wind. Master cabin amidships.",
    favorite: false,
  },
];

function FleetPage() {
  return (
    <div>
      <section className="bg-[color:var(--ink)] pt-40 pb-24 text-[color:var(--ivory)] md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="eyebrow text-[color:var(--brass-soft)]">— The Fleet</div>
          <h1 className="mt-6 font-serif text-6xl leading-[1.05] md:text-8xl">
            Fourteen vessels,<br />
            <em className="text-[color:var(--brass-soft)]">one atelier.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-[color:var(--ivory)]/75">
            Each yacht in our care is maintained year-round by the same family-run
            atelier — the same hands that restored her, the same hands
            that prepare her each May.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl space-y-32 px-6 md:px-10">
          {fleet.map((y, i) => (
            <article
              key={y.name}
              className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <img
                  src={y.img}
                  alt={y.name}
                  width={1280}
                  height={900}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="absolute left-4 top-4 border border-[color:var(--ivory)]/70 bg-[color:var(--ink)]/30 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-[color:var(--ivory)] backdrop-blur">
                  N° 0{i + 1}
                </div>
              </div>
              <div>
                <div className="text-[0.65rem] tracking-[0.4em] text-[color:var(--brass)]">
                  {y.type.toUpperCase()} · {y.year}
                </div>
                {y.favorite && (
                  <div className="mt-3 inline-flex items-center gap-2 border-b border-[color:var(--brass)]/40 pb-1 text-[0.6rem] tracking-[0.25em] text-[color:var(--brass)]">
                    <span className="text-[0.5rem]">★</span>
                    GUEST FAVOURITE
                  </div>
                )}
                <h2 className="mt-4 font-serif text-6xl italic">{y.name}</h2>
                <p className="mt-6 font-serif text-xl italic text-muted-foreground">
                  {y.note}
                </p>
                <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm">
                  <Spec label="Length" value={y.length} />
                  <Spec label="Builder" value={y.builder} />
                  <Spec label="Guests" value={`${y.guests}`} />
                  <Spec label="Crew" value={`${y.crew}`} />
                </dl>
                <Link to="/enquire" className="btn-brass mt-10 hover:btn-brass-hover">
                  Enquire — {y.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">
        {label.toUpperCase()}
      </dt>
      <dd className="mt-2 font-serif text-xl">{value}</dd>
    </div>
  );
}