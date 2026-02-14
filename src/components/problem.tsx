import { Clock, AlertTriangle, Users } from "lucide-react";

const painPoints = [
  {
    icon: Clock,
    title: "Drowning in Manual Work",
    description:
      "Your team spends hours on repetitive tasks that should take minutes. Data entry, copy-paste workflows, manual follow-ups — it compounds every week.",
  },
  {
    icon: AlertTriangle,
    title: "Errors, Delays, Inconsistency",
    description:
      "Manual processes break. Leads fall through cracks, reports have mistakes, and quality depends on who's handling the task that day.",
  },
  {
    icon: Users,
    title: "Hiring to Fix Inefficiency",
    description:
      "Instead of eliminating broken workflows, most businesses just hire more people to manage the chaos. That's not scaling — that's stacking costs.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent-cyan uppercase">
          The Real Problem
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Most Businesses Don&apos;t Have an AI Problem — They Have a Process
          Problem
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-xl border border-border bg-surface-1 p-6 transition-colors hover:border-accent-cyan/30"
            >
              <point.icon className="mb-4 size-8 text-accent-cyan" />
              <h3 className="mb-2 text-xl font-semibold">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 max-w-2xl text-lg font-medium text-muted-foreground italic">
          &ldquo;Automation fails when it&apos;s built on broken processes. We
          fix the process first.&rdquo;
        </p>
      </div>
    </section>
  );
}
