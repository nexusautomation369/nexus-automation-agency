import { Eye, Key, Target, Minimize2, Clock } from "lucide-react";

const principles = [
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "You see everything. No black boxes, no hidden complexity, no lock-in. Full visibility at every step.",
  },
  {
    icon: Key,
    title: "You Own Everything",
    description:
      "Code, credentials, workflows — always yours. We build for your independence, not our dependency.",
  },
  {
    icon: Target,
    title: "Results First",
    description:
      "We don't invoice until milestones are hit. Our incentives are aligned with your outcomes.",
  },
  {
    icon: Minimize2,
    title: "No Bloat",
    description:
      "We build the minimum viable automation, then expand. Complexity is only added when it creates value.",
  },
  {
    icon: Clock,
    title: "Long-Term Thinking",
    description:
      "We'd rather lose a project than set you up to fail. Every decision is made for durability.",
  },
];

export default function Principles() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent-cyan uppercase">
          How We Work
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Operating Principles
        </h2>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-border bg-surface-1 p-6 transition-colors hover:border-accent-cyan/30"
            >
              <p.icon className="mb-4 size-6 text-accent-cyan" />
              <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
