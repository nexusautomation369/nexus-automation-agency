export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent-cyan uppercase">
          Pricing Philosophy
        </p>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          We Price on Value, Not Hours
        </h2>

        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            We don&apos;t charge by hours, workflow count, or technical
            complexity. We price based on the measurable value we deliver —
            time saved, costs reduced, and revenue unlocked.
          </p>
          <p>
            Every engagement starts with a clear ROI projection. You&apos;ll
            know exactly what you&apos;re getting and what it&apos;s worth
            before we build anything.
          </p>
        </div>

        {/* Example callout */}
        <div className="mt-10 rounded-xl border-l-4 border-accent-cyan bg-surface-1 p-6 md:p-8">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent-cyan uppercase">
            Real Example
          </p>
          <p className="text-foreground leading-relaxed">
            A client spending{" "}
            <span className="font-semibold text-accent-cyan">
              40 hrs/week on data entry
            </span>{" "}
            at $25/hr = $52,000/year in labor costs. We built a system for
            $8,000 that eliminated 95% of that work.{" "}
            <span className="font-semibold">
              The system paid for itself in 9 weeks.
            </span>
          </p>
        </div>

        <p className="mt-8 text-muted-foreground">
          We&apos;ll never quote you a project without showing you the
          projected ROI first.
        </p>
      </div>
    </section>
  );
}
