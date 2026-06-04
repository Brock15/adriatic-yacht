import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/enquire")({
  head: () => ({
    meta: [
      { title: "Enquire — Adriata" },
      { name: "description", content: "Begin a private correspondence regarding the 2026 season." },
      { property: "og:title", content: "Enquire — Adriata" },
      { property: "og:description", content: "By introduction. A brief correspondence is the first step." },
    ],
  }),
  component: EnquirePage,
});

function EnquirePage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="bg-[color:var(--secondary)]">
      <section className="pt-40 pb-32 md:pt-48 md:pb-44">
        <div className="mx-auto grid max-w-6xl gap-20 px-6 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <div className="eyebrow">— Enquiries</div>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] md:text-6xl">
              A brief<br />
              <em className="text-[color:var(--brass)]">correspondence.</em>
            </h1>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Catherine and our concierge in Dallas read every enquiry personally.
              A reply, by hand, typically follows within two working days.
            </p>
            <div className="mt-12 space-y-6 border-t border-border pt-10 text-sm">
              <div>
                <div className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">ATELIER</div>
                <div className="mt-2 font-serif text-xl">Highland Park Village, Dallas</div>
              </div>
              <div>
                <div className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">CONCIERGE</div>
                <div className="mt-2 font-serif text-xl">concierge@adriata.com</div>
              </div>
              <div>
                <div className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">DIRECT</div>
                <div className="mt-2 font-serif text-xl">+1 (469) 842-4165</div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            {sent ? (
              <div className="border border-[color:var(--brass)] bg-background p-12 text-center">
                <div className="font-serif text-6xl text-[color:var(--brass)]">✦</div>
                <h2 className="mt-6 font-serif text-3xl italic">Received with thanks.</h2>
                <p className="mt-4 text-muted-foreground">
                  Catherine will be in correspondence shortly.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-8 border border-border bg-background p-8 md:p-12"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Introduced by" name="intro" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Electronic mail" name="email" type="email" required />
                  <Field label="Telephone" name="phone" />
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Preferred week" name="week" placeholder="e.g. 12 — 19 July 2026" />
                  <Field label="Number of guests" name="guests" />
                </div>
                <div>
                  <label className="text-[0.6rem] tracking-[0.3em] text-muted-foreground">
                    A FEW LINES, IF YOU WISH
                  </label>
                  <textarea
                    rows={6}
                    className="mt-3 w-full border-b border-input bg-transparent px-0 py-2 font-serif text-lg italic text-foreground outline-none focus:border-[color:var(--brass)]"
                  />
                </div>

                <div className="border-t border-border pt-8 text-right">
                  <button type="submit" className="btn-brass hover:btn-brass-hover">
                    Send Correspondence
                  </button>
                </div>
              </form>
            )}
          </div>
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