import { Search, Wrench, TrendingUp } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "AI Process Audit",
    items: [
      "Deep analysis of workflows",
      "Bottleneck identification",
      "ROI calculations",
      "Prioritized automation roadmap",
    ],
  },
  {
    num: "02",
    icon: Wrench,
    title: "Automation Implementation",
    items: [
      "Build only validated systems",
      "Use proven templates",
      "No overengineering",
      "Fast deployment",
    ],
  },
  {
    num: "03",
    icon: TrendingUp,
    title: "Optimization & Support",
    items: [
      "Continuous tuning",
      "Process evolution support",
      "Reliability monitoring",
      "Performance tracking",
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent-cyan uppercase">
          The Process
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          3 Steps From Chaos to Clarity
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.num} className="relative">
              {/* Connecting line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="absolute top-12 right-0 hidden h-px w-6 translate-x-full bg-accent-cyan/30 md:block" />
              )}

              <div className="rounded-xl border border-border bg-surface-1 p-6 transition-colors hover:border-accent-cyan/30">
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-sm font-bold text-accent-cyan">
                    {step.num}
                  </span>
                  <step.icon className="size-6 text-accent-cyan" />
                </div>
                <h3 className="mb-4 text-xl font-semibold">{step.title}</h3>
                <ul className="space-y-2">
                  {step.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 block size-1.5 shrink-0 rounded-full bg-accent-cyan/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
