const questions = [
  {
    num: "01",
    question: "What process is broken?",
    detail:
      "We identify the exact workflows costing you time, money, and consistency.",
  },
  {
    num: "02",
    question: "What does it cost you today?",
    detail:
      "We quantify the real business cost — in hours, dollars, and missed opportunities.",
  },
  {
    num: "03",
    question: "What measurable improvement happens after automation?",
    detail:
      "We project the ROI before we build. No guesswork. No vanity metrics.",
  },
];

export default function ValueProp() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent-cyan uppercase">
          The Nexus Standard
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Every System Must Answer 3 Questions
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {questions.map((q) => (
            <div
              key={q.num}
              className="rounded-xl border border-border bg-surface-1 p-6 transition-colors hover:border-accent-cyan/30"
            >
              <span className="font-mono text-3xl font-bold text-accent-cyan">
                {q.num}
              </span>
              <h3 className="mt-4 mb-2 text-xl font-semibold">{q.question}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {q.detail}
              </p>
            </div>
          ))}
        </div>

        {/* ROI Rule */}
        <div className="mt-12 rounded-xl border border-accent-cyan/20 bg-accent-cyan/5 p-6 md:p-8">
          <p className="text-lg font-semibold text-foreground">
            Our Rule:{" "}
            <span className="text-accent-cyan">
              If ROI can&apos;t be quantified, we don&apos;t build it.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
