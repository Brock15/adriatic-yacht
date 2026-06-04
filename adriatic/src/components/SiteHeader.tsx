import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/fleet", label: "The Fleet" },
    { to: "/destinations", label: "Destinations" },
    { to: "/maison", label: "The Maison" },
    { to: "/partners", label: "Partners" },
    { to: "/enquire", label: "Enquire" },
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[color:var(--ivory)]/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Link to="/" className="group flex items-baseline gap-2">
          <span
            className={`font-serif font-semibold text-2xl tracking-[0.18em] md:text-[1.65rem] ${
              scrolled ? "text-[color:var(--ink)]" : "text-[color:var(--ivory)]"
            }`}
          >
            ADRIATA
          </span>
          <span
            className={`hidden text-[0.55rem] tracking-[0.4em] md:inline ${
              scrolled ? "text-[color:var(--brass)]" : "text-[color:var(--brass-soft)]"
            }`}
          >
            EST. MCMLXXXVII
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[0.7rem] font-medium uppercase tracking-[0.28em] transition-colors ${
                scrolled
                  ? "text-[color:var(--ink)] hover:text-[color:var(--brass)]"
                  : "text-[color:var(--ivory)] hover:text-[color:var(--brass-soft)]"
              }`}
              activeProps={{
                className: scrolled
                  ? "text-[color:var(--brass)]"
                  : "text-[color:var(--brass-soft)]",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/enquire"
          className={`hidden md:inline-flex items-center gap-3 border px-5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.3em] transition-all ${
            scrolled
              ? "border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--ivory)]"
              : "border-[color:var(--ivory)]/60 text-[color:var(--ivory)] hover:bg-[color:var(--ivory)] hover:text-[color:var(--ink)]"
          }`}
        >
          Reserve a Vessel
        </Link>
      </div>
    </header>
  );
}