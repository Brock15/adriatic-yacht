import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Vessel Partners — Adriata" },
      { name: "description", content: "Adriata maintains a working fleet of seven vessels. We add one, perhaps two, each season — and only after a formal assessment." },
      { property: "og:title", content: "Vessel Partners — Adriata" },
      { property: "og:description", content: "We are selective by design. A formal assessment process for owners whose vessels meet our standard." },
    ],
  }),
  component: PartnersPage,
});

const FORMSPREE_URL = "https://formspree.io/f/xwvjkwpg";

const criteria = [
  "Vessel age under 15 years, or a documented restoration by a recognised atelier",
  "Captain with a minimum of 10 Mediterranean seasons and valid STCW certification",
  "Crew-to-guest ratio of no less than 1:3",
  "Interior presented to a four-star hotel standard, independently verified during assessment",
  "Owner committed to a minimum of 8 charter weeks per season within our cruising grounds",
];

const steps = [
  {
    num: "01",
    title: "Initial Contact",
    body: "Adriata reaches out directly to owners whose vessels meet our preliminary criteria. We do not accept unsolicited applications.",
  },
  {
    num: "02",
    title: "Documentation Review",
    body: "We request captain credentials, vessel certification, and recent survey. This takes approximately one week.",
  },
  {
    num: "03",
    title: "On-Water Assessment",
    body: "A member of our team joins for an overnight aboard. We evaluate the full guest experience — arrival, anchoring, evening hospitality, and morning departure. Professional photography is conducted during this visit and delivered to the owner regardless of outcome.",
  },
  {
    num: "04",
    title: "Fleet Approval",
    body: "Approved vessels are listed in the current season's portfolio and introduced to our guest families by name.",
  },
];

type FormStatus = "idle" | "submitting" | "success" | "error";

function PartnersPage() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        body: new FormData(e.currentTarget),
        headers: { Accept: "application/json" },
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      {/* HERO */}
      <section className="bg-[color:var(--ink)] pt-40 pb-24 text-[color:var(--ivory)] md:pt-48 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="eyebrow text-[color:var(--brass-soft)]">— Vessel Partners</div>
          <h1 className="mt-6 font-serif text-6xl leading-[1.05] md:text-8xl">
            We are selective<br />
            <em className="text-[color:var(--brass-soft)]">by design.</em>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-[color:var(--ivory)]/75">
            Adriata maintains a working fleet of seven vessels. We add one, perhaps
            two, each season — and only after a formal assessment.
          </p>
        </div>
      </section>

      {/* WHAT WE LOOK FOR */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="eyebrow">— Our Standards</div>
              <h2 className="mt-6 font-serif text-5xl leading-[1.05] md:text-6xl">
                Not every yacht.<br />
                <em className="text-[color:var(--brass)]">The right yacht.</em>
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <ul className="space-y-4 border-t border-border pt-8 md:mt-2">
                {criteria.map((line) => (
                  <li key={line} className="flex items-start gap-4 text-muted-foreground">
                    <span className="mt-3 inline-block h-px w-6 flex-shrink-0 bg-[color:var(--brass)]" />
                    <span className="font-serif text-lg italic">{line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ASSESSMENT PROCESS */}
      <section className="border-t border-border bg-[color:var(--secondary)] py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="eyebrow">— How It Works</div>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] md:text-6xl">
            A process,<br />
            <em className="text-[color:var(--brass)]">not a pitch.</em>
          </h2>
          <div className="mt-16 grid gap-0 md:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="border-t border-border py-8 md:border-l md:border-t-0 md:px-8 md:py-0 md:first:border-l-0 md:first:pl-0">
                <div className="font-serif text-5xl text-[color:var(--brass)]">{step.num}</div>
                <div className="mt-1 text-[0.6rem] tracking-[0.3em] text-muted-foreground">
                  · {step.title.toUpperCase()}
                </div>
                <p className="mt-6 font-serif text-lg italic leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAITLIST NOTICE */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mx-auto max-w-2xl border border-[color:var(--brass)] p-10 text-center md:p-14">
            <div className="font-serif text-4xl text-[color:var(--brass)]">✦</div>
            <p className="mt-6 font-serif text-xl italic leading-relaxed">
              Adriata contacts vessel owners directly and by referral only. If you
              believe your yacht may be a candidate, you are welcome to register
              your vessel details for consideration.
            </p>
          </div>
        </div>
      </section>

      {/* REGISTRATION FORM */}
      <section className="border-t border-border bg-[color:var(--secondary)] py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="eyebrow">— Register Your Vessel</div>
          <p className="mt-6 max-w-2xl font-serif text-lg italic leading-relaxed text-muted-foreground">
            This is not an application. It is an expression of interest. Our fleet
            director reviews registered vessels periodically and will make contact
            if there is a mutual fit.
          </p>
          <div className="mt-16">
            {status === "success" ? (
              <div className="border border-[color:var(--brass)] bg-background p-12 text-center">
                <div className="font-serif text-6xl text-[color:var(--brass)]">✦</div>
                <h2 className="mt-6 font-serif text-3xl italic">Noted with care.</h2>
                <p className="mt-4 text-muted-foreground">
                  Your vessel details have been noted. Should there be a mutual fit,
                  our fleet director will be in touch.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8 border border-border bg-background p-8 md:p-12"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Owner Name" name="ownerName" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Telephone" name="telephone" />
                  <Field label="Vessel Name" name="vesselName" required />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <SelectField label="Vessel Type" name="vesselType" />
                  <Field label="Length (metres)" name="length" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Year Built" name="yearBuilt" />
                  <Field label="Home Port" name="homePort" />
                </div>
                <div>
                  <Field label="Available Weeks Per Season" name="availableWeeks" />
                </div>
                <div>
                  <label className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">
                    A FEW LINES ABOUT YOUR VESSEL
                  </label>
                  <textarea
                    rows={6}
                    name="vesselDescription"
                    className="mt-3 w-full border-b border-input bg-transparent px-0 py-2 font-serif text-lg italic text-foreground outline-none focus:border-[color:var(--brass)]"
                  />
                </div>
                {status === "error" && (
                  <p className="text-sm text-muted-foreground">
                    Something went wrong. Please try again or write to us directly at concierge@adriata.com.
                  </p>
                )}
                <div className="border-t border-border pt-8 text-right">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-brass hover:btn-brass-hover disabled:opacity-50"
                  >
                    {status === "submitting" ? "Sending…" : "Register Vessel"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER CALLOUT */}
      <section className="bg-[color:var(--ink)] py-20 text-center text-[color:var(--ivory)] md:py-24">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <p className="font-serif text-2xl italic leading-relaxed md:text-3xl">
            "Adriata is not a listing platform. We are a maison.{" "}
            <em className="text-[color:var(--brass-soft)]">The distinction matters.</em>"
          </p>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">
        {label.toUpperCase()}
        {required && <span className="text-[color:var(--brass)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full border-b border-input bg-transparent px-0 py-2 font-serif text-lg text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-[color:var(--brass)]"
      />
    </div>
  );
}

function SelectField({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">
        {label.toUpperCase()}
      </label>
      <select
        id={name}
        name={name}
        className="mt-3 w-full border-b border-input bg-transparent px-0 py-2 font-serif text-lg text-foreground outline-none focus:border-[color:var(--brass)]"
      >
        <option value="">—</option>
        <option value="motor-yacht">Motor Yacht</option>
        <option value="sailing-yacht">Sailing Yacht</option>
        <option value="catamaran">Catamaran</option>
        <option value="gulet">Gulet</option>
        <option value="other">Other</option>
      </select>
    </div>
  );
}
