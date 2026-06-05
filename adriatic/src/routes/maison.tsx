import { createFileRoute } from "@tanstack/react-router";
import deckImg from "@/assets/deck.jpg";

export const Route = createFileRoute("/maison")({
  head: () => ({
    meta: [
      { title: "The Maison — Adriata" },
      { name: "description", content: "Founded in Dallas in 1987 by a former naval architect. A small, family-held maison curating private yacht charters worldwide, now run by his three sons." },
      { property: "og:title", content: "The Adriata Maison" },
      { property: "og:description", content: "A family-held house of the sea, since 1987." },
    ],
  }),
  component: MaisonPage,
});

function MaisonPage() {
  return (
    <div>
      <section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <img
              src={deckImg}
              alt="Yacht deck at golden hour"
              width={1080}
              height={1600}
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="md:col-span-7">
            <div className="eyebrow">— The Maison</div>
            <h1 className="mt-6 font-serif text-6xl leading-[1.05] md:text-7xl">
              A small house,<br />
              <em className="text-[color:var(--brass)]">at a slow pace.</em>
            </h1>
            <div className="mt-12 space-y-8 text-lg leading-relaxed text-muted-foreground">
              <p>
                Adriata was founded in 1987 by James Whitfield, a naval architect
                who had spent two decades designing racing yachts in Newport.
                He stepped away from design and switched to the charter business,
                quietly assembling a fleet of privately-owned boats that
                American families could experience as their own.
              </p>
              <p>
                Forty summers later, the house is still in the family. James's
                eldest son Mark now leads the maison from Dallas, while his two
                brothers manage fleet operations and captain relations. Three captains
                and a single concierge in Fort Lauderdale round out a team that
                has never published a brochure. Our guests find us by introduction,
                and we accept a small number of new families each year.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-border pt-10">
              <div>
                <div className="font-serif text-5xl text-[color:var(--brass)]">1987</div>
                <div className="mt-2 text-[0.6rem] tracking-[0.3em] text-muted-foreground">FOUNDED · DALLAS</div>
              </div>
              <div>
                <div className="font-serif text-5xl text-[color:var(--brass)]">7</div>
                <div className="mt-2 text-[0.6rem] tracking-[0.3em] text-muted-foreground">VESSELS</div>
              </div>
              <div>
                <div className="font-serif text-5xl text-[color:var(--brass)]">34</div>
                <div className="mt-2 text-[0.6rem] tracking-[0.3em] text-muted-foreground">GUEST FAMILIES</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}