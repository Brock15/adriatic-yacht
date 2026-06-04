import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--ivory)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-serif text-3xl tracking-[0.18em]">ADRIATA</div>
            <div className="mt-2 text-[0.6rem] tracking-[0.4em] text-[color:var(--brass-soft)]">
              EST. MCMLXXXVII · DALLAS · TEXAS
            </div>
            <p className="mt-8 max-w-md font-serif text-xl italic leading-relaxed text-[color:var(--ivory)]/80">
              “The sea does not reveal herself in haste. We have spent forty
              summers learning her quiet harbours.”
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-[color:var(--brass-soft)]">Maison</div>
            <ul className="mt-6 space-y-3 text-sm text-[color:var(--ivory)]/80">
              <li><Link to="/maison" className="hover:text-[color:var(--brass-soft)]">Our Story</Link></li>
              <li><Link to="/fleet" className="hover:text-[color:var(--brass-soft)]">The Fleet</Link></li>
              <li><Link to="/destinations" className="hover:text-[color:var(--brass-soft)]">Destinations</Link></li>
              <li><Link to="/enquire" className="hover:text-[color:var(--brass-soft)]">Private Enquiries</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="eyebrow text-[color:var(--brass-soft)]">Atelier</div>
            <address className="mt-6 not-italic text-sm leading-relaxed text-[color:var(--ivory)]/80">
              Highland Park Village<br />
              Dallas, Texas 75205<br /><br />
              +1 (469) 842-4165<br />
              concierge@adriata.com
            </address>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--ivory)]/15 pt-8 md:flex-row md:items-center">
          <div className="text-[0.65rem] tracking-[0.3em] text-[color:var(--ivory)]/50">
            © 2026 ADRIATA MAISON · ALL RIGHTS RESERVED
          </div>
          <div className="text-[0.65rem] tracking-[0.3em] text-[color:var(--ivory)]/50">
            A QUIET HOUSE OF THE SEA
          </div>
        </div>
      </div>
    </footer>
  );
}