import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { y as yacht1, a as yacht2, b as yacht3 } from "./yacht-3-Diutbtnx.js";
const yacht4 = "/assets/yacht-4-BAz3XO0-.jpg";
const yacht5 = "/assets/yacht-5-k816uorY.jpg";
const yacht6 = "/assets/yacht-6-QR9xB42Y.jpg";
const yacht7 = "/assets/yacht-7-tEMn5bky.jpg";
const fleet = [{
  name: "Serenissima",
  type: "Motor Yacht",
  length: "38m",
  year: 2021,
  guests: 10,
  crew: 6,
  builder: "Benetti, Viareggio",
  homePort: "Split, Croatia",
  cruisingGrounds: "Central Dalmatia · Montenegro",
  img: yacht1,
  note: "Newly commissioned. Glass-walled main saloon, beach club aft.",
  favorite: false
}, {
  name: "La Marenda",
  type: "Classic Gulet",
  length: "32m",
  year: 1998,
  guests: 12,
  crew: 5,
  builder: "Bodrum atelier, restored 2019",
  homePort: "Bodrum, Turkey",
  cruisingGrounds: "Aegean · Greek Islands",
  img: yacht2,
  note: "Hand-finished mahogany. The vessel our oldest guests return for.",
  favorite: true
}, {
  name: "Aurelia",
  type: "Sailing Yacht",
  length: "28m",
  year: 2019,
  guests: 8,
  crew: 4,
  builder: "Nautor's Swan",
  homePort: "Palma, Mallorca",
  cruisingGrounds: "Balearics · French Riviera",
  img: yacht3,
  note: "For those who prefer the wind. Master cabin amidships.",
  favorite: false
}];
fleet.push({
  name: "Calypso Blanche",
  type: "Sailing Yacht",
  length: "31m",
  year: 2017,
  guests: 8,
  crew: 4,
  builder: "Baltic Yachts, Finland",
  homePort: "Dubrovnik, Croatia",
  cruisingGrounds: "South Dalmatia · Kotor Bay",
  img: yacht4,
  note: "Her owner races her in May. From June she is entirely yours.",
  favorite: false
}, {
  name: "Dogaressa",
  type: "Motor Yacht",
  length: "24m",
  year: 2014,
  guests: 6,
  crew: 3,
  builder: "Ferretti, Forlì — restored 2022",
  homePort: "Hvar, Croatia",
  cruisingGrounds: "Central Dalmatia · Kornati",
  img: yacht5,
  note: "Compact, quick, and utterly private. Preferred for two-couple charters.",
  favorite: false
}, {
  name: "Maestrale",
  type: "Classic Ketch",
  length: "22m",
  year: 1974,
  guests: 6,
  crew: 2,
  builder: "Cantieri di Pisa — restored 2018",
  homePort: "Split, Croatia",
  cruisingGrounds: "Central Dalmatia · Adriatic Coast",
  img: yacht6,
  note: "The oldest vessel in our care. She has outlasted three generations of guests.",
  favorite: false
}, {
  name: "Isola Bianca",
  type: "Catamaran",
  length: "18m",
  year: 2022,
  guests: 8,
  crew: 2,
  builder: "Fountaine Pajot, Cognac",
  homePort: "Trogir, Croatia",
  cruisingGrounds: "Central Dalmatia · Kornati",
  img: yacht7,
  note: "For families. The widest deck in the fleet, the shallowest draft.",
  favorite: false
});
function FleetPage() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-[color:var(--ink)] pt-40 pb-24 text-[color:var(--ivory)] md:pt-48 md:pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-[color:var(--brass-soft)]", children: "— The Fleet" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-serif text-6xl leading-[1.05] md:text-8xl", children: [
        "Seven vessels,",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass-soft)]", children: "one atelier." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 max-w-2xl text-lg text-[color:var(--ivory)]/75", children: "Each yacht in our care is maintained year-round by the same family-run atelier — the same hands that restored her, the same hands that prepare her each May." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl space-y-32 px-6 md:px-10", children: fleet.map((y, i) => /* @__PURE__ */ jsxs("article", { className: `grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("img", { src: y.img, alt: y.name, width: 1280, height: 900, loading: "lazy", className: "aspect-[4/3] w-full object-cover" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute left-4 top-4 border border-[color:var(--ivory)]/70 bg-[color:var(--ink)]/30 px-3 py-1 text-[0.6rem] tracking-[0.3em] text-[color:var(--ivory)] backdrop-blur", children: [
          "N° 0",
          i + 1
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsxs("div", { className: "text-[0.65rem] tracking-[0.4em] text-[color:var(--brass)]", children: [
          y.type.toUpperCase(),
          " · ",
          y.year
        ] }),
        y.favorite && /* @__PURE__ */ jsxs("div", { className: "mt-3 inline-flex items-center gap-2 border-b border-[color:var(--brass)]/40 pb-1 text-[0.6rem] tracking-[0.25em] text-[color:var(--brass)]", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[0.5rem]", children: "★" }),
          "GUEST FAVOURITE"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-serif text-6xl italic", children: y.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 font-serif text-xl italic text-muted-foreground", children: y.note }),
        /* @__PURE__ */ jsxs("dl", { className: "mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-sm", children: [
          /* @__PURE__ */ jsx(Spec, { label: "Length", value: y.length }),
          /* @__PURE__ */ jsx(Spec, { label: "Builder", value: y.builder }),
          /* @__PURE__ */ jsx(Spec, { label: "Guests", value: `${y.guests}` }),
          /* @__PURE__ */ jsx(Spec, { label: "Crew", value: `${y.crew}` }),
          /* @__PURE__ */ jsx(Spec, { label: "Home Port", value: y.homePort }),
          /* @__PURE__ */ jsx(Spec, { label: "Cruising Grounds", value: y.cruisingGrounds })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/enquire", className: "btn-brass mt-10 hover:btn-brass-hover", children: [
          "Enquire — ",
          y.name
        ] })
      ] })
    ] }, y.name)) }) })
  ] });
}
function Spec({
  label,
  value
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("dt", { className: "text-[0.6rem] tracking-[0.3em] text-muted-foreground", children: label.toUpperCase() }),
    /* @__PURE__ */ jsx("dd", { className: "mt-2 font-serif text-xl", children: value })
  ] });
}
export {
  FleetPage as component
};
