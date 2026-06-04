import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { d as deckImg } from "./deck-Cf8AgCm4.js";
import { h as hvarImg, d as dubrovnikImg, k as kornatiImg } from "./kornati-gRkczuu6.js";
import { y as yacht1, a as yacht2, b as yacht3 } from "./yacht-3-Diutbtnx.js";
const heroImg = "/assets/hero-yacht-8umFhDSZ.jpg";
function Index() {
  const destinations = [{
    name: "Hvar & Pakleni",
    img: hvarImg,
    note: "Lavender coves, terraced vineyards."
  }, {
    name: "Dubrovnik & Elaphiti",
    img: dubrovnikImg,
    note: "Walled city, monastic islands."
  }, {
    name: "Kornati Archipelago",
    img: kornatiImg,
    note: "Eighty-nine uninhabited islands."
  }];
  const fleet = [{
    name: "Serenissima",
    type: "Motor Yacht · 38m",
    guests: 10,
    year: 2021,
    img: yacht1
  }, {
    name: "La Marenda",
    type: "Classic Gulet · 32m",
    guests: 12,
    year: 1998,
    img: yacht2
  }, {
    name: "Aurelia",
    type: "Sailing Yacht · 28m",
    guests: 8,
    year: 2019,
    img: yacht3
  }];
  return /* @__PURE__ */ jsxs("div", { className: "bg-background text-foreground", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative h-screen min-h-[720px] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Motor yacht anchored in a Croatian cove at sunset", width: 1920, height: 1280, className: "absolute inset-0 h-full w-full object-cover" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-[color:var(--ink)]/55 via-[color:var(--ink)]/15 to-[color:var(--ink)]/80" }),
      /* @__PURE__ */ jsx("div", { className: "relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 md:px-10 md:pb-32", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl text-[color:var(--ivory)]", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-8 flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "h-px w-12 bg-[color:var(--brass-soft)]" }),
          /* @__PURE__ */ jsx("span", { className: "text-[0.65rem] tracking-[0.4em] text-[color:var(--brass-soft)]", children: "MMXXVI · MEDITERRANEAN & BEYOND" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "font-serif font-semibold text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]", children: [
          "The sea, kept",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "italic text-[color:var(--brass-soft)]", children: "in confidence." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-xl font-serif font-semibold text-xl italic leading-relaxed text-[color:var(--ivory)]/85 md:text-2xl", children: "Forty summers spent learning the quiet harbours of the Mediterranean. A small fleet, a smaller guest list, and a season chartered entirely for you." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 flex flex-wrap gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/fleet", className: "btn-brass hover:btn-brass-hover", children: "View the Fleet" }),
          /* @__PURE__ */ jsx(Link, { to: "/enquire", className: "btn-ghost hover:bg-[color:var(--ivory)] hover:text-[color:var(--ink)]", children: "Private Enquiry" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-[0.6rem] tracking-[0.5em] text-[color:var(--ivory)]/60", children: "↓ SCROLL" })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-b border-border py-32 md:py-44", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-12 md:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "— The Maison" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4 font-serif text-2xl italic text-muted-foreground", children: "Dallas, since 1987" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-8", children: [
        /* @__PURE__ */ jsxs("h2", { className: "font-serif text-4xl leading-[1.15] md:text-6xl", children: [
          "A house of the sea,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass)]", children: "not of the season." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground", children: "Adriata is a small, family-held maison founded in Dallas four decades ago by a former naval architect and his daughter. We do not advertise. We do not list. Our guests find us by introduction." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10", children: [
          /* @__PURE__ */ jsx(Stat, { n: "7", label: "Vessels" }),
          /* @__PURE__ */ jsx(Stat, { n: "39", label: "Years at Sea" }),
          /* @__PURE__ */ jsx(Stat, { n: "3,100", label: "Miles Charted" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[color:var(--ink)] py-32 text-[color:var(--ivory)] md:py-44", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-end justify-between gap-8 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-xl", children: [
          /* @__PURE__ */ jsx("div", { className: "eyebrow text-[color:var(--brass-soft)]", children: "— The Fleet" }),
          /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-serif text-5xl leading-tight md:text-6xl", children: [
            "Seven vessels.",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass-soft)]", children: "A lifetime aboard each." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "max-w-md text-[color:var(--ivory)]/70", children: "From a 1974 classic ketch to a newly commissioned 38-metre motor yacht — every vessel maintained by the same atelier since the year she joined us." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-20 grid gap-10 md:grid-cols-3", children: fleet.map((y, i) => /* @__PURE__ */ jsxs("article", { className: "group", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: y.img, alt: y.name, width: 1280, height: 900, loading: "lazy", className: "aspect-[4/3] w-full object-cover grayscale-[15%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute left-4 top-4 border border-[color:var(--ivory)]/40 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-[color:var(--ivory)]", children: [
            "N° 0",
            i + 1
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-baseline justify-between border-b border-[color:var(--ivory)]/20 pb-3", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-serif text-3xl italic", children: y.name }),
          /* @__PURE__ */ jsxs("span", { className: "text-[0.65rem] tracking-[0.3em] text-[color:var(--brass-soft)]", children: [
            "MMXX",
            i
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex justify-between text-sm text-[color:var(--ivory)]/70", children: [
          /* @__PURE__ */ jsx("span", { children: y.type }),
          /* @__PURE__ */ jsxs("span", { children: [
            y.guests,
            " guests"
          ] })
        ] })
      ] }, y.name)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-20 text-center", children: /* @__PURE__ */ jsx(Link, { to: "/fleet", className: "inline-flex items-center gap-4 border-b border-[color:var(--brass-soft)] pb-2 text-[0.7rem] tracking-[0.3em] text-[color:var(--brass-soft)] hover:text-[color:var(--ivory)]", children: "VIEW THE COMPLETE FLEET →" }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-32 md:py-44", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2 md:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: deckImg, alt: "Champagne on the teak deck at golden hour", width: 1080, height: 1600, loading: "lazy", className: "aspect-[3/4] w-full object-cover" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -bottom-6 -right-6 hidden h-48 w-48 border border-[color:var(--brass)] md:block" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "— Aboard" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-serif text-5xl leading-[1.1] md:text-6xl", children: [
          "Crystal, teak,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass)]", children: "and unhurried hours." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg leading-relaxed text-muted-foreground", children: "A private chef from Le Bernardin. A sommelier who knows every grower in Provence. A tender always ready for the swim cove you spotted from the flybridge. Nothing is offered as a package — everything is arranged, quietly, for you." }),
        /* @__PURE__ */ jsx("ul", { className: "mt-10 space-y-4 border-t border-border pt-8", children: ["Private chef & sommelier aboard each vessel", "Master captain with twenty Mediterranean seasons", "Discreet introductions ashore — restaurants, vintners, dive masters", "Bespoke itinerary, drawn for your week alone"].map((line) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-3 inline-block h-px w-6 flex-shrink-0 bg-[color:var(--brass)]" }),
          /* @__PURE__ */ jsx("span", { className: "font-serif text-lg italic", children: line })
        ] }, line)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-[color:var(--secondary)] py-32 md:py-44", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-20 max-w-2xl", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "— Cruising Grounds" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-serif text-5xl leading-tight md:text-6xl", children: [
          "From the Istrian peninsula",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass)]", children: "to the gates of Montenegro." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-8 md:grid-cols-3", children: destinations.map((d, i) => /* @__PURE__ */ jsx("article", { className: "group cursor-pointer", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("img", { src: d.img, alt: d.name, width: 1024, height: 1280, loading: "lazy", className: "aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/70 to-transparent" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8 text-[color:var(--ivory)]", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-[0.6rem] tracking-[0.4em] text-[color:var(--brass-soft)]", children: [
            "CHAPTER 0",
            i + 1
          ] }),
          /* @__PURE__ */ jsx("h3", { className: "mt-3 font-serif text-3xl italic", children: d.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-[color:var(--ivory)]/80", children: d.note })
        ] })
      ] }) }, d.name)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-32 md:py-44", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-6 text-center md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "font-serif text-7xl text-[color:var(--brass)]", children: "“" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 font-serif text-3xl italic leading-[1.4] md:text-5xl", children: "Three generations of our family have boarded the same yacht each August. Adriata does not remember our preferences — they have simply become hers." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-[color:var(--brass)]" }),
        /* @__PURE__ */ jsx("span", { className: "text-[0.7rem] tracking-[0.3em] text-muted-foreground", children: "J. HARRINGTON · DALLAS · GUEST SINCE 1994" }),
        /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-[color:var(--brass)]" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden bg-[color:var(--ink)] py-32 text-[color:var(--ivory)] md:py-40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-[color:var(--brass-soft)]", children: "— By Introduction" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-serif text-5xl leading-tight md:text-7xl", children: [
        "The 2027 season",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass-soft)]", children: "opens in October." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-8 max-w-xl text-[color:var(--ivory)]/75", children: "We accept a small number of new guests each year. A brief correspondence is the first step." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsx(Link, { to: "/enquire", className: "btn-brass hover:btn-brass-hover", children: "Begin a Correspondence" }) })
    ] }) })
  ] });
}
function Stat({
  n,
  label
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("div", { className: "font-serif text-5xl text-[color:var(--brass)]", children: n }),
    /* @__PURE__ */ jsx("div", { className: "mt-2 text-[0.65rem] tracking-[0.3em] text-muted-foreground", children: label.toUpperCase() })
  ] });
}
export {
  Index as component
};
