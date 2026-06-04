import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
const __vite_import_meta_env__ = {};
const FORMSPREE_URL = __vite_import_meta_env__?.VITE_PARTNERS_FORM_URL ?? "https://formspree.io/f/xyzabcde";
const criteria = ["Vessel age under 15 years, or a documented restoration by a recognised atelier", "Captain with a minimum of 10 Mediterranean seasons and valid STCW certification", "Crew-to-guest ratio of no less than 1:3", "Interior presented to a four-star hotel standard, independently verified during assessment", "Owner committed to a minimum of 8 charter weeks per season within our cruising grounds"];
const steps = [{
  num: "01",
  title: "Initial Contact",
  body: "Adriata reaches out directly to owners whose vessels meet our preliminary criteria. We do not accept unsolicited applications."
}, {
  num: "02",
  title: "Documentation Review",
  body: "We request captain credentials, vessel certification, and recent survey. This takes approximately one week."
}, {
  num: "03",
  title: "On-Water Assessment",
  body: "A member of our team joins for an overnight aboard. We evaluate the full guest experience — arrival, anchoring, evening hospitality, and morning departure. Professional photography is conducted during this visit and delivered to the owner regardless of outcome."
}, {
  num: "04",
  title: "Fleet Approval",
  body: "Approved vessels are listed in the current season's portfolio and introduced to our guest families by name."
}];
function PartnersPage() {
  const [status, setStatus] = useState("idle");
  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: {
          Accept: "application/json"
        }
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("section", { className: "bg-[color:var(--ink)] pt-40 pb-24 text-[color:var(--ivory)] md:pt-48 md:pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow text-[color:var(--brass-soft)]", children: "— Vessel Partners" }),
      /* @__PURE__ */ jsxs("h1", { className: "mt-6 font-serif text-6xl leading-[1.05] md:text-8xl", children: [
        "We are selective",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass-soft)]", children: "by design." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-10 max-w-2xl text-lg text-[color:var(--ivory)]/75", children: "Adriata maintains a working fleet of seven vessels. We add one, perhaps two, each season — and only after a formal assessment." })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-16 md:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-5", children: [
        /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "— Our Standards" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-serif text-5xl leading-[1.05] md:text-6xl", children: [
          "Not every yacht.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass)]", children: "The right yacht." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-6 md:col-start-7", children: /* @__PURE__ */ jsx("ul", { className: "space-y-4 border-t border-border pt-8 md:mt-2", children: criteria.map((line) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-4 text-muted-foreground", children: [
        /* @__PURE__ */ jsx("span", { className: "mt-3 inline-block h-px w-6 flex-shrink-0 bg-[color:var(--brass)]" }),
        /* @__PURE__ */ jsx("span", { className: "font-serif text-lg italic", children: line })
      ] }, line)) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-[color:var(--secondary)] py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "— How It Works" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-6 font-serif text-5xl leading-[1.05] md:text-6xl", children: [
        "A process,",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass)]", children: "not a pitch." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 grid gap-0 md:grid-cols-4", children: steps.map((step) => /* @__PURE__ */ jsxs("div", { className: "border-t border-border py-8 md:border-l md:border-t-0 md:px-8 md:py-0 md:first:border-l-0 md:first:pl-0", children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-5xl text-[color:var(--brass)]", children: step.num }),
        /* @__PURE__ */ jsxs("div", { className: "mt-1 text-[0.6rem] tracking-[0.3em] text-muted-foreground", children: [
          "· ",
          step.title.toUpperCase()
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 font-serif text-lg italic leading-relaxed text-muted-foreground", children: step.body })
      ] }, step.num)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-6 md:px-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl border border-[color:var(--brass)] p-10 text-center md:p-14", children: [
      /* @__PURE__ */ jsx("div", { className: "font-serif text-4xl text-[color:var(--brass)]", children: "✦" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 font-serif text-xl italic leading-relaxed", children: "Adriata contacts vessel owners directly and by referral only. If you believe your yacht may be a candidate, you are welcome to register your vessel details for consideration." })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border bg-[color:var(--secondary)] py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-6 md:px-10", children: [
      /* @__PURE__ */ jsx("div", { className: "eyebrow", children: "— Register Your Vessel" }),
      /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-muted-foreground", children: "This is not an application. It is an expression of interest. Our fleet director reviews registered vessels periodically and will make contact if there is a mutual fit." }),
      /* @__PURE__ */ jsx("div", { className: "mt-16", children: status === "success" ? /* @__PURE__ */ jsxs("div", { className: "border border-[color:var(--brass)] bg-background p-12 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "font-serif text-6xl text-[color:var(--brass)]", children: "✦" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 font-serif text-3xl italic", children: "Noted with care." }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Your vessel details have been noted. Should there be a mutual fit, our fleet director will be in touch." })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-8 border border-border bg-background p-8 md:p-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Owner Name", name: "ownerName", required: true }),
          /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", type: "email", required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Telephone", name: "telephone" }),
          /* @__PURE__ */ jsx(Field, { label: "Vessel Name", name: "vesselName", required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx(SelectField, { label: "Vessel Type", name: "vesselType" }),
          /* @__PURE__ */ jsx(Field, { label: "Length (metres)", name: "length" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
          /* @__PURE__ */ jsx(Field, { label: "Year Built", name: "yearBuilt" }),
          /* @__PURE__ */ jsx(Field, { label: "Home Port", name: "homePort" })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Field, { label: "Available Weeks Per Season", name: "availableWeeks" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "text-[0.6rem] tracking-[0.3em] text-muted-foreground", children: "A FEW LINES ABOUT YOUR VESSEL" }),
          /* @__PURE__ */ jsx("textarea", { rows: 6, name: "vesselDescription", className: "mt-3 w-full border-b border-input bg-transparent px-0 py-2 font-serif text-lg italic text-foreground outline-none focus:border-[color:var(--brass)]" })
        ] }),
        status === "error" && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Something went wrong. Please try again or write to us directly at concierge@adriata.com." }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-border pt-8 text-right", children: /* @__PURE__ */ jsx("button", { type: "submit", disabled: status === "submitting", className: "btn-brass hover:btn-brass-hover disabled:opacity-50", children: status === "submitting" ? "Sending…" : "Register Vessel" }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-[color:var(--ink)] py-20 text-center text-[color:var(--ivory)] md:py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-3xl px-6 md:px-10", children: /* @__PURE__ */ jsxs("p", { className: "font-serif text-2xl italic leading-relaxed md:text-3xl", children: [
      '"Adriata is not a listing platform. We are a maison.',
      " ",
      /* @__PURE__ */ jsx("em", { className: "text-[color:var(--brass-soft)]", children: "The distinction matters." }),
      '"'
    ] }) }) })
  ] });
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
function SelectField({
  label,
  name
}) {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("label", { htmlFor: name, className: "text-[0.6rem] tracking-[0.3em] text-muted-foreground", children: label.toUpperCase() }),
    /* @__PURE__ */ jsxs("select", { id: name, name, className: "mt-3 w-full border-b border-input bg-transparent px-0 py-2 font-serif text-lg text-foreground outline-none focus:border-[color:var(--brass)]", children: [
      /* @__PURE__ */ jsx("option", { value: "", children: "—" }),
      /* @__PURE__ */ jsx("option", { value: "motor-yacht", children: "Motor Yacht" }),
      /* @__PURE__ */ jsx("option", { value: "sailing-yacht", children: "Sailing Yacht" }),
      /* @__PURE__ */ jsx("option", { value: "catamaran", children: "Catamaran" }),
      /* @__PURE__ */ jsx("option", { value: "gulet", children: "Gulet" }),
      /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
    ] })
  ] });
}
export {
  PartnersPage as component
};
