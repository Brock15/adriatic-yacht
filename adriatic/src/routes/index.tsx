import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-yacht.jpg";
import deckImg from "@/assets/deck.jpg";
import hvarImg from "@/assets/hvar.jpg";
import dubrovnikImg from "@/assets/dubrovnik.jpg";
import kornatiImg from "@/assets/kornati.jpg";
import yacht1 from "@/assets/yacht-1.jpg";
import yacht2 from "@/assets/yacht-2.jpg";
import yacht3 from "@/assets/yacht-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adriata — Private Yacht Charters" },
      { name: "description", content: "A discreet maison curating bespoke private yacht charters across the Mediterranean — from the Amalfi Coast to the Greek Isles." },
      { property: "og:title", content: "Adriata — Private Yacht Charters" },
      { property: "og:description", content: "Bespoke private yacht charters across the Mediterranean." },
    ],
  }),
  component: Index,
});

function Index() {
  const destinations = [
    { name: "Hvar & Pakleni", img: hvarImg, note: "Lavender coves, terraced vineyards." },
    { name: "Dubrovnik & Elaphiti", img: dubrovnikImg, note: "Walled city, monastic islands." },
    { name: "Kornati Archipelago", img: kornatiImg, note: "Eighty-nine uninhabited islands." },
  ];

  const fleet = [
    { name: "Serenissima", type: "Motor Yacht · 38m", guests: 10, year: 2021, img: yacht1 },
    { name: "La Marenda", type: "Classic Gulet · 32m", guests: 12, year: 1998, img: yacht2 },
    { name: "Aurelia", type: "Sailing Yacht · 28m", guests: 8, year: 2019, img: yacht3 },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* HERO */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Motor yacht anchored in a Croatian cove at sunset"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink)]/55 via-[color:var(--ink)]/15 to-[color:var(--ink)]/80" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:px-10 md:pb-32">
          <div className="max-w-3xl text-[color:var(--ivory)]">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[color:var(--brass-soft)]" />
              <span className="text-[0.65rem] tracking-[0.4em] text-[color:var(--brass-soft)]">
                MMXXVI · MEDITERRANEAN & BEYOND
              </span>
            </div>
            <h1 className="font-serif font-semibold text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]">
              The sea, kept<br />
              <em className="italic text-[color:var(--brass-soft)]">in confidence.</em>
            </h1>
            <p className="mt-8 max-w-xl font-serif font-semibold text-xl italic leading-relaxed text-[color:var(--ivory)]/85 md:text-2xl">
              Forty summers spent learning the quiet harbours of the Mediterranean.
              A small fleet, a smaller guest list, and a season chartered entirely for you.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link to="/fleet" className="btn-brass hover:btn-brass-hover">
                View the Fleet
              </Link>
              <Link to="/enquire" className="btn-ghost hover:bg-[color:var(--ivory)] hover:text-[color:var(--ink)]">
                Private Enquiry
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.6rem] tracking-[0.5em] text-[color:var(--ivory)]/60">
          ↓ SCROLL
        </div>
      </section>

      {/* MAISON STATEMENT */}
      <section className="border-b border-border py-32 md:py-44">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <div className="eyebrow">— The Maison</div>
            <div className="mt-4 font-serif text-2xl italic text-muted-foreground">
              Dallas, since 1987
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-serif text-4xl leading-[1.15] md:text-6xl">
              A house of the sea,<br />
              <em className="text-[color:var(--brass)]">not of the season.</em>
            </h2>
            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Adriata is a small, family-held maison founded in Dallas four decades
              ago by a former naval architect and his daughter. We do not advertise.
              We do not list. Our guests find us by introduction.
            </p>
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10">
              <Stat n="7" label="Vessels" />
              <Stat n="39" label="Years at Sea" />
              <Stat n="3,100" label="Miles Charted" />
            </div>
          </div>
        </div>
      </section>

      {/* FLEET PREVIEW */}
      <section className="bg-[color:var(--ink)] py-32 text-[color:var(--ivory)] md:py-44">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="flex flex-col items-end justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-xl">
              <div className="eyebrow text-[color:var(--brass-soft)]">— The Fleet</div>
              <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
                Seven vessels.<br />
                <em className="text-[color:var(--brass-soft)]">A lifetime aboard each.</em>
              </h2>
            </div>
            <p className="max-w-md text-[color:var(--ivory)]/70">
              From a 1974 classic ketch to a newly commissioned 38-metre
              motor yacht — every vessel maintained by the same atelier
              since the year she joined us.
            </p>
          </div>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {fleet.map((y, i) => (
              <article key={y.name} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={y.img}
                    alt={y.name}
                    width={1280}
                    height={900}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover grayscale-[15%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute left-4 top-4 border border-[color:var(--ivory)]/40 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-[color:var(--ivory)]">
                    N° 0{i + 1}
                  </div>
                </div>
                <div className="mt-6 flex items-baseline justify-between border-b border-[color:var(--ivory)]/20 pb-3">
                  <h3 className="font-serif text-3xl italic">{y.name}</h3>
                  <span className="text-[0.65rem] tracking-[0.3em] text-[color:var(--brass-soft)]">
                    MMXX{i}
                  </span>
                </div>
                <div className="mt-3 flex justify-between text-sm text-[color:var(--ivory)]/70">
                  <span>{y.type}</span>
                  <span>{y.guests} guests</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link
              to="/fleet"
              className="inline-flex items-center gap-4 border-b border-[color:var(--brass-soft)] pb-2 text-[0.7rem] tracking-[0.3em] text-[color:var(--brass-soft)] hover:text-[color:var(--ivory)]"
            >
              VIEW THE COMPLETE FLEET →
            </Link>
          </div>
        </div>
      </section>

      {/* DECK INTERLUDE */}
      <section className="relative py-32 md:py-44">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-10">
          <div className="relative">
            <img
              src={deckImg}
              alt="Champagne on the teak deck at golden hour"
              width={1080}
              height={1600}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden h-48 w-48 border border-[color:var(--brass)] md:block" />
          </div>
          <div>
            <div className="eyebrow">— Aboard</div>
            <h2 className="mt-6 font-serif text-5xl leading-[1.1] md:text-6xl">
              Crystal, teak,<br />
              <em className="text-[color:var(--brass)]">and unhurried hours.</em>
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              A private chef from Le Bernardin. A sommelier who knows
              every grower in Provence. A tender always ready for the swim cove you
              spotted from the flybridge. Nothing is offered as a package —
              everything is arranged, quietly, for you.
            </p>

            <ul className="mt-10 space-y-4 border-t border-border pt-8">
              {[
                "Private chef & sommelier aboard each vessel",
                "Master captain with twenty Mediterranean seasons",
                "Discreet introductions ashore — restaurants, vintners, dive masters",
                "Bespoke itinerary, drawn for your week alone",
              ].map((line) => (
                <li key={line} className="flex items-start gap-4 text-muted-foreground">
                  <span className="mt-3 inline-block h-px w-6 flex-shrink-0 bg-[color:var(--brass)]" />
                  <span className="font-serif text-lg italic">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="border-t border-border bg-[color:var(--secondary)] py-32 md:py-44">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-20 max-w-2xl">
            <div className="eyebrow">— Cruising Grounds</div>
            <h2 className="mt-6 font-serif text-5xl leading-tight md:text-6xl">
              From the Istrian peninsula<br />
              <em className="text-[color:var(--brass)]">to the gates of Montenegro.</em>
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {destinations.map((d, i) => (
              <article key={d.name} className="group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-[color:var(--ivory)]">
                    <div className="text-[0.6rem] tracking-[0.4em] text-[color:var(--brass-soft)]">
                      CHAPTER 0{i + 1}
                    </div>
                    <h3 className="mt-3 font-serif text-3xl italic">{d.name}</h3>
                    <p className="mt-2 text-sm text-[color:var(--ivory)]/80">{d.note}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 md:py-44">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
          <div className="font-serif text-7xl text-[color:var(--brass)]">“</div>
          <p className="mt-2 font-serif text-3xl italic leading-[1.4] md:text-5xl">
            Three generations of our family have boarded the same yacht
            each August. Adriata does not remember our preferences —
            they have simply become hers.
          </p>
          <div className="mt-12 flex items-center justify-center gap-4">
            <span className="h-px w-8 bg-[color:var(--brass)]" />
            <span className="text-[0.7rem] tracking-[0.3em] text-muted-foreground">
              J. HARRINGTON · DALLAS · GUEST SINCE 1994
            </span>
            <span className="h-px w-8 bg-[color:var(--brass)]" />
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="relative overflow-hidden bg-[color:var(--ink)] py-32 text-[color:var(--ivory)] md:py-40">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <div className="eyebrow text-[color:var(--brass-soft)]">— By Introduction</div>
          <h2 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">
            The 2027 season<br />
            <em className="text-[color:var(--brass-soft)]">opens in October.</em>
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-[color:var(--ivory)]/75">
            We accept a small number of new guests each year. A brief
            correspondence is the first step.
          </p>
          <div className="mt-12">
            <Link to="/enquire" className="btn-brass hover:btn-brass-hover">
              Begin a Correspondence
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="font-serif text-5xl text-[color:var(--brass)]">{n}</div>
      <div className="mt-2 text-[0.65rem] tracking-[0.3em] text-muted-foreground">
        {label.toUpperCase()}
      </div>
    </div>
  );
}
