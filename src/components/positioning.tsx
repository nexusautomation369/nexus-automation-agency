import { Check, X } from "lucide-react";

const weAre = [
  "A long-term AI automation partner",
  "Focused on measurable business outcomes",
  "Building systems tied to ROI metrics",
  "Committed to simplicity and clarity",
  "Invested in your operational success",
];

const weAreNot = [
  "A chatbot vendor",
  "A no-code automation gig worker",
  "A tool reseller or SaaS middleman",
  "Generic AI consultants selling decks",
  "Building experiments without business cases",
];

export default function Positioning() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent-cyan uppercase">
          Clear Positioning
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          We Are Your Automation Partner. Not Your Vendor.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* What we are */}
          <div className="rounded-xl border border-accent-cyan/30 bg-surface-1 p-6 md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-accent-cyan">
              What We Are
            </h3>
            <ul className="space-y-4">
              {weAre.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent-cyan" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What we are not */}
          <div className="rounded-xl border border-border bg-surface-1 p-6 md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-muted-foreground">
              What We Are Not
            </h3>
            <ul className="space-y-4">
              {weAreNot.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 size-5 shrink-0 text-muted-foreground/50" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
