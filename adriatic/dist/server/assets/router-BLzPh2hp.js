import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, createRootRouteWithContext, useRouter, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
const appCss = "/assets/styles-C-T5EVMm.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function SiteHeader() {
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
    { to: "/enquire", label: "Enquire" }
  ];
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-[color:var(--ivory)]/95 backdrop-blur-md border-b border-border" : "bg-transparent"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 md:py-6", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "group flex items-baseline gap-2", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `font-serif font-semibold text-2xl tracking-[0.18em] md:text-[1.65rem] ${scrolled ? "text-[color:var(--ink)]" : "text-[color:var(--ivory)]"}`,
              children: "ADRIATA"
            }
          ),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: `hidden text-[0.55rem] tracking-[0.4em] md:inline ${scrolled ? "text-[color:var(--brass)]" : "text-[color:var(--brass-soft)]"}`,
              children: "EST. MCMLXXXVII"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "hidden items-center gap-10 md:flex", children: links.map((l) => /* @__PURE__ */ jsx(
          Link,
          {
            to: l.to,
            className: `text-[0.7rem] font-medium uppercase tracking-[0.28em] transition-colors ${scrolled ? "text-[color:var(--ink)] hover:text-[color:var(--brass)]" : "text-[color:var(--ivory)] hover:text-[color:var(--brass-soft)]"}`,
            activeProps: {
              className: scrolled ? "text-[color:var(--brass)]" : "text-[color:var(--brass-soft)]"
            },
            children: l.label
          },
          l.to
        )) }),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/enquire",
            className: `hidden md:inline-flex items-center gap-3 border px-5 py-2.5 text-[0.65rem] font-medium uppercase tracking-[0.3em] transition-all ${scrolled ? "border-[color:var(--ink)] text-[color:var(--ink)] hover:bg-[color:var(--ink)] hover:text-[color:var(--ivory)]" : "border-[color:var(--ivory)]/60 text-[color:var(--ivory)] hover:bg-[color:var(--ivory)] hover:text-[color:var(--ink)]"}`,
            children: "Reserve a Vessel"
          }
        )
      ] })
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[color:var(--ink)] text-[color:var(--ivory)]", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-16 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-3xl tracking-[0.18em]", children: "ADRIATA" }),
        /* @__PURE__ */ jsx("div", { className: "mt-2 text-[0.6rem] tracking-[0.4em] text-[color:var(--brass-soft)]", children: "EST. MCMLXXXVII · DALLAS · TEXAS" }),
        /* @__PURE__ */ jsx("p", { className: "mt-8 max-w-md font-serif text-xl italic leading-relaxed text-[color:var(--ivory)]/80", children: "“The sea does not reveal herself in haste. We have spent forty summers learning her quiet harbours.”" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-[color:var(--brass-soft)]", children: "Maison" }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-3 text-sm text-[color:var(--ivory)]/80", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/maison", className: "hover:text-[color:var(--brass-soft)]", children: "Our Story" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/fleet", className: "hover:text-[color:var(--brass-soft)]", children: "The Fleet" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/destinations", className: "hover:text-[color:var(--brass-soft)]", children: "Destinations" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/partners", className: "hover:text-[color:var(--brass-soft)]", children: "Vessel Partners" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/enquire", className: "hover:text-[color:var(--brass-soft)]", children: "Private Enquiries" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-4", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow text-[color:var(--brass-soft)]", children: "Atelier" }),
        /* @__PURE__ */ jsxs("address", { className: "mt-6 not-italic text-sm leading-relaxed text-[color:var(--ivory)]/80", children: [
          "Highland Park Village",
          /* @__PURE__ */ jsx("br", {}),
          "Dallas, Texas 75205",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("br", {}),
          "+1 (469) 842-4165",
          /* @__PURE__ */ jsx("br", {}),
          "concierge@adriata.com"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-20 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--ivory)]/15 pt-8 md:flex-row md:items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[0.65rem] tracking-[0.3em] text-[color:var(--ivory)]/50", children: "© 2026 ADRIATA MAISON · ALL RIGHTS RESERVED" }),
      /* @__PURE__ */ jsx("div", { className: "text-[0.65rem] tracking-[0.3em] text-[color:var(--ivory)]/50", children: "A QUIET HOUSE OF THE SEA" })
    ] })
  ] }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adriata — Private Yacht Charters" },
      { name: "description", content: "Bespoke private yacht charters across the Mediterranean and beyond. A discreet maison curating sail, motor and classic vessels for the discerning few." },
      { name: "author", content: "Adriata Maison" },
      { property: "og:title", content: "Adriata — Private Yacht Charters" },
      { property: "og:description", content: "Bespoke private yacht charters across the Mediterranean and beyond. A discreet maison curating sail, motor and classic vessels for the discerning few." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Adriata — Private Yacht Charters" },
      { name: "twitter:description", content: "Bespoke private yacht charters across the Mediterranean and beyond. A discreet maison curating sail, motor and classic vessels for the discerning few." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14c8868b-2100-4b9a-a2ec-f57b2e864039/id-preview-faa1bd76--0574ae31-aa88-44df-b9dc-e693dbe0985e.lovable.app-1780527994029.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/14c8868b-2100-4b9a-a2ec-f57b2e864039/id-preview-faa1bd76--0574ae31-aa88-44df-b9dc-e693dbe0985e.lovable.app-1780527994029.png" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(SiteHeader, {}),
    /* @__PURE__ */ jsx("main", { className: "min-h-screen", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(SiteFooter, {})
  ] });
}
const $$splitComponentImporter$5 = () => import("./partners-C0Q4DLTB.js");
const Route$5 = createFileRoute("/partners")({
  head: () => ({
    meta: [{
      title: "Vessel Partners — Adriata"
    }, {
      name: "description",
      content: "Adriata maintains a working fleet of seven vessels. We add one, perhaps two, each season — and only after a formal assessment."
    }, {
      property: "og:title",
      content: "Vessel Partners — Adriata"
    }, {
      property: "og:description",
      content: "We are selective by design. A formal assessment process for owners whose vessels meet our standard."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./maison-nAi-JoYa.js");
const Route$4 = createFileRoute("/maison")({
  head: () => ({
    meta: [{
      title: "The Maison — Adriata"
    }, {
      name: "description",
      content: "Founded in Dallas in 1987 by a former naval architect. A small, family-held maison curating private yacht charters worldwide, now run by his three children."
    }, {
      property: "og:title",
      content: "The Adriata Maison"
    }, {
      property: "og:description",
      content: "A family-held house of the sea, since 1987."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./fleet-C5CoQN7S.js");
const Route$3 = createFileRoute("/fleet")({
  head: () => ({
    meta: [{
      title: "The Fleet — Adriata"
    }, {
      name: "description",
      content: "Seven privately-held vessels, from a 1974 classic ketch to contemporary motor yachts, maintained by a single family atelier."
    }, {
      property: "og:title",
      content: "The Adriata Fleet"
    }, {
      property: "og:description",
      content: "Sail, motor, and classic vessels for the discerning few."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./enquire-DYEbtwvD.js");
const Route$2 = createFileRoute("/enquire")({
  head: () => ({
    meta: [{
      title: "Enquire — Adriata"
    }, {
      name: "description",
      content: "Begin a private correspondence regarding the 2026 season."
    }, {
      property: "og:title",
      content: "Enquire — Adriata"
    }, {
      property: "og:description",
      content: "By introduction. A brief correspondence is the first step."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./destinations-DmgIUGFU.js");
const Route$1 = createFileRoute("/destinations")({
  head: () => ({
    meta: [{
      title: "Destinations — Adriata"
    }, {
      name: "description",
      content: "From the Croatian Adriatic to the Amalfi Coast, the Côte d'Azur and the Cyclades — the Mediterranean, charted across forty summers."
    }, {
      property: "og:title",
      content: "Adriata Destinations"
    }, {
      property: "og:description",
      content: "The Adriatic & wider Mediterranean, by introduction."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-Bw_YRRqA.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Adriata — Private Yacht Charters"
    }, {
      name: "description",
      content: "A discreet maison curating bespoke private yacht charters across the Mediterranean — from the Amalfi Coast to the Greek Isles."
    }, {
      property: "og:title",
      content: "Adriata — Private Yacht Charters"
    }, {
      property: "og:description",
      content: "Bespoke private yacht charters across the Mediterranean."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const PartnersRoute = Route$5.update({
  id: "/partners",
  path: "/partners",
  getParentRoute: () => Route$6
});
const MaisonRoute = Route$4.update({
  id: "/maison",
  path: "/maison",
  getParentRoute: () => Route$6
});
const FleetRoute = Route$3.update({
  id: "/fleet",
  path: "/fleet",
  getParentRoute: () => Route$6
});
const EnquireRoute = Route$2.update({
  id: "/enquire",
  path: "/enquire",
  getParentRoute: () => Route$6
});
const DestinationsRoute = Route$1.update({
  id: "/destinations",
  path: "/destinations",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  DestinationsRoute,
  EnquireRoute,
  FleetRoute,
  MaisonRoute,
  PartnersRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
