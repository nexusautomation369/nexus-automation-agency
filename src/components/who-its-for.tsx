import { Check, X } from "lucide-react";

const forYou = [
  "SMEs and service-based businesses with growing workloads",
  "Teams spending 20%+ of hours on manual, repeatable tasks",
  "Companies where automation directly impacts revenue or costs",
  "Founders who've tried DIY automation and need a real partner",
];

const notForYou = [
  "Experiment-only projects with no business case",
  "AI curiosity builds without commitment to implement",
  "Businesses unwilling to measure or track ROI",
  "Teams looking for the cheapest option, not the right one",
];

export default function WhoItsFor() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent-cyan uppercase">
          Ideal Clients
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Is This Right for You?
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-accent-cyan/30 bg-surface-1 p-6 md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-accent-cyan">
              This is for you if...
            </h3>
            <ul className="space-y-4">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-accent-cyan" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-surface-1 p-6 md:p-8">
            <h3 className="mb-6 text-lg font-semibold text-muted-foreground">
              This is not for you if...
            </h3>
            <ul className="space-y-4">
              {notForYou.map((item) => (
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
