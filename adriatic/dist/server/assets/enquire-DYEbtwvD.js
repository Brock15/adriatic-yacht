import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
function EnquirePage() {
  const [sent, setSent] = useState(false);
  return /* @__PURE__ */ jsx("div", { className: "bg-[color:var(--secondary)]", children: /* @__PURE__ */ jsx("section", { className: "pt-40 pb-32 md:pt-48 md:pb-44", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-20 px-6 md:grid-cols-12 md:px-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "— Enquiries" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-serif text-5xl leading-[1.05] md:text-6xl", children: [
        "A brief",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass)]", children: "correspondence." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-8 text-lg leading-relaxed text-muted-foreground", children: "Catherine and our concierge in Dallas read every enquiry personally. A reply, by hand, typically follows within two working days." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 space-y-6 border-t border-border pt-10 text-sm", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[0.6rem] tracking-[0.3em] text-muted-foreground", children: "ATELIER" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 font-serif text-xl", children: "Highland Park Village, Dallas" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[0.6rem] tracking-[0.3em] text-muted-foreground", children: "CONCIERGE" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 font-serif text-xl", children: "concierge@adriata.com" })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "text-[0.6rem] tracking-[0.3em] text-muted-foreground", children: "DIRECT" }),
          /* @__PURE__ */ jsx("div", { className: "mt-2 font-serif text-xl", children: "+1 (469) 842-4165" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "md:col-span-7", children: sent ? /* @__PURE__ */ jsxs("div", { className: "border border-[color:var(--brass)] bg-background p-12 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "font-serif text-6xl text-[color:var(--brass)]", children: "✦" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-6 font-serif text-3xl italic", children: "Received with thanks." }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Catherine will be in correspondence shortly." })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: (e) => {
      e.preventDefault();
      setSent(true);
    }, className: "space-y-8 border border-border bg-background p-8 md:p-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(Field, { label: "Name", name: "name", required: true }),
        /* @__PURE__ */ jsx(Field, { label: "Introduced by", name: "intro" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(Field, { label: "Electronic mail", name: "email", type: "email", required: true }),
        /* @__PURE__ */ jsx(Field, { label: "Telephone", name: "phone" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx(Field, { label: "Preferred week", name: "week", placeholder: "e.g. 12 — 19 July 2026" }),
        /* @__PURE__ */ jsx(Field, { label: "Number of guests", name: "guests" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-[0.6rem] tracking-[0.3em] text-muted-foreground", children: "A FEW LINES, IF YOU WISH" }),
        /* @__PURE__ */ jsx("textarea", { rows: 6, className: "mt-3 w-full border-b border-input bg-transparent px-0 py-2 font-serif text-lg italic text-foreground outline-none focus:border-[color:var(--brass)]" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-t border-border pt-8 text-right", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn-brass hover:btn-brass-hover", children: "Send Correspondence" }) })
    ] }) })
  ] }) }) });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: name, className: "text-[0.6rem] tracking-[0.3em] text-muted-foreground", children: [
      label.toUpperCase(),
      required && /* @__PURE__ */ jsx("span", { className: "text-[color:var(--brass)]", children: " *" })
    ] }),
    /* @__PURE__ */ jsx("input", { id: name, name, type, required, placeholder, className: "mt-3 w-full border-b border-input bg-transparent px-0 py-2 font-serif text-lg text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-[color:var(--brass)]" })
  ] });
}
export {
  EnquirePage as component
};
