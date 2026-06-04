import { jsxs, jsx } from "react/jsx-runtime";
import { h as hvarImg, d as dubrovnikImg, k as kornatiImg } from "./kornati-gRkczuu6.js";
const veniceImg = "/assets/venice-DsmMxpE2.jpg";
const amalfiImg = "/assets/amalfi-zjMz2YJN.jpg";
const pugliaImg = "/assets/puglia-BrTeC49f.jpg";
const rivieraImg = "/assets/riviera-DtbZCDIw.jpg";
const cycladesImg = "/assets/cyclades-E94pYCsI.jpg";
const kotorImg = "/assets/kotor-DnDza711.jpg";
const regions = [{
  region: "The Croatian Adriatic",
  subtitle: "Our signature waters since 1987.",
  places: [{
    name: "Hvar & the Pakleni Islands",
    img: hvarImg,
    lat: "43°10′ N",
    lon: "16°26′ E",
    text: "Lavender terraces, Venetian piazzas, midnight passages to deserted swim coves."
  }, {
    name: "Dubrovnik & the Elaphiti",
    img: dubrovnikImg,
    lat: "42°38′ N",
    lon: "18°06′ E",
    text: "Arriving by sea remains the only proper way. Monastic islands lie an hour north."
  }, {
    name: "Kornati Archipelago",
    img: kornatiImg,
    lat: "43°48′ N",
    lon: "15°20′ E",
    text: "Eighty-nine uninhabited islands, a national park of stone and silence."
  }, {
    name: "Bay of Kotor, Montenegro",
    img: kotorImg,
    lat: "42°25′ N",
    lon: "18°46′ E",
    text: "Europe's southernmost fjord — Venetian campaniles beneath two-thousand-metre walls of karst."
  }]
}, {
  region: "The Italian Coast",
  subtitle: "A short crossing west, into older waters still.",
  places: [{
    name: "Venice & the Lagoon",
    img: veniceImg,
    lat: "45°26′ N",
    lon: "12°20′ E",
    text: "Approached at dawn through the Lido, when the campaniles are still pale with mist."
  }, {
    name: "Puglia & the Heel",
    img: pugliaImg,
    lat: "40°08′ N",
    lon: "18°30′ E",
    text: "Limestone grottoes, masseria suppers ashore, the unhurried Salento at anchor."
  }, {
    name: "Amalfi & the Sorrentine Coast",
    img: amalfiImg,
    lat: "40°37′ N",
    lon: "14°36′ E",
    text: "Positano at golden hour, Capri's Faraglioni at first light, lunch in a Praiano cove."
  }]
}, {
  region: "The Wider Mediterranean",
  subtitle: "Chartered by invitation, for guests who wish to wander further.",
  places: [{
    name: "Côte d'Azur & Cap Ferrat",
    img: rivieraImg,
    lat: "43°41′ N",
    lon: "7°20′ E",
    text: "Belle Époque villas, pine-shaded anchorages, dinner ashore at La Voile d'Or."
  }, {
    name: "The Greek Cyclades",
    img: cycladesImg,
    lat: "37°26′ N",
    lon: "25°20′ E",
    text: "Folegandros, Sifnos, the lesser-known calderas — meltemi winds and whitewash."
  }]
}];
function DestinationsPage() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "pt-40 pb-16 md:pt-48 md:pb-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-6 text-center md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "— Cruising Grounds" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-serif text-6xl leading-[1.05] md:text-8xl", children: [
        "The Adriatic & beyond,",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass)]", children: "charted slowly." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-10 max-w-2xl text-lg text-muted-foreground", children: "From our home waters in Dalmatia to the Amalfi Coast, the Côte d'Azur and the Aegean — three thousand miles of coast, charted at the pace of a long lunch." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl space-y-32 px-6 md:px-10", children: regions.map((r, rIdx) => {
      const offset = regions.slice(0, rIdx).reduce((n, x) => n + x.places.length, 0);
      return /* @__PURE__ */ jsxs("div", { className: "space-y-20", children: [
        /* @__PURE__ */ jsxs("header", { className: "grid items-end gap-6 border-b border-border pb-10 md:grid-cols-12", children: [
          /* @__PURE__ */ jsx("div", { className: "md:col-span-3", children: /* @__PURE__ */ jsxs("div", { className: "text-[0.6rem] tracking-[0.4em] text-[color:var(--brass)]", children: [
            "PART ",
            ["I", "II", "III"][rIdx]
          ] }) }),
          /* @__PURE__ */ jsxs("div", { className: "md:col-span-9", children: [
            /* @__PURE__ */ jsx("h2", { className: "font-serif text-4xl leading-tight md:text-5xl", children: r.region }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 font-serif text-lg italic text-muted-foreground", children: r.subtitle })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-24", children: r.places.map((p, i) => {
          const chapter = offset + i + 1;
          const reverse = chapter % 2 === 0;
          return /* @__PURE__ */ jsxs("article", { className: "grid items-end gap-10 md:grid-cols-12", children: [
            /* @__PURE__ */ jsx("div", { className: `md:col-span-7 ${reverse ? "md:order-2" : ""}`, children: /* @__PURE__ */ jsx("img", { src: p.img, alt: p.name, width: 1024, height: 1280, loading: "lazy", className: "aspect-[4/5] w-full object-cover" }) }),
            /* @__PURE__ */ jsxs("div", { className: `md:col-span-5 md:pb-8 ${reverse ? "md:order-1" : ""}`, children: [
              /* @__PURE__ */ jsxs("div", { className: "text-[0.65rem] tracking-[0.4em] text-[color:var(--brass)]", children: [
                "CHAPTER ",
                chapter.toString().padStart(2, "0")
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "mt-4 font-serif text-5xl italic leading-tight", children: p.name }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 font-mono text-xs tracking-widest text-muted-foreground", children: [
                p.lat,
                " · ",
                p.lon
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg leading-relaxed text-muted-foreground", children: p.text })
            ] })
          ] }, p.name);
        }) })
      ] }, r.region);
    }) }) })
  ] });
}
export {
  DestinationsPage as component
};
