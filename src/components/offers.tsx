import { Button } from "@/components/ui/button";
import { Scan, Cpu, Settings, ArrowRight } from "lucide-react";

const offers = [
  {
    icon: Scan,
    title: "AI Process Audit",
    subtitle: "Entry Point",
    description:
      "Strategic diagnosis before any build. End-to-end process breakdown, ROI logic, and clear automation priorities.",
    idealFor: "Businesses unsure what to automate first",
    cta: "Start with an Audit",
    highlighted: false,
  },
  {
    icon: Cpu,
    title: "Full Implementation",
    subtitle: "Core Offer",
    description:
      "We build production-ready automation systems — AI customer support agents, lead qualification, operations automation, and more.",
    idealFor: "Businesses ready to transform operations",
    cta: "Build My System",
    highlighted: true,
  },
  {
    icon: Settings,
    title: "Optimization Retainer",
    subtitle: "Long-Term Partner",
    description:
      "Continuous monitoring, prompt and logic optimization, incremental improvements, and adjustments as your business evolves.",
    idealFor: "Businesses wanting automation as a competitive moat",
    cta: "Learn More",
    highlighted: false,
  },
];

export default function Offers({ ctaUrl }: { ctaUrl: string }) {
  return (
    <section id="offers" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent-cyan uppercase">
          Core Offers
        </p>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
          Choose Your Entry Point
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`flex flex-col rounded-xl border p-6 transition-colors md:p-8 ${
                offer.highlighted
                  ? "border-accent-cyan/50 bg-surface-1 glow-cyan"
                  : "border-border bg-surface-1 hover:border-accent-cyan/30"
              }`}
            >
              <offer.icon
                className={`mb-4 size-8 ${
                  offer.highlighted
                    ? "text-accent-cyan"
                    : "text-muted-foreground"
                }`}
              />
              <p className="mb-1 text-xs font-medium tracking-widest text-accent-cyan uppercase">
                {offer.subtitle}
              </p>
              <h3 className="mb-3 text-xl font-semibold">{offer.title}</h3>
              <p className="mb-4 flex-1 text-muted-foreground leading-relaxed">
                {offer.description}
              </p>
              <p className="mb-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Ideal for: </span>
                {offer.idealFor}
              </p>
              <Button
                asChild
                variant={offer.highlighted ? "default" : "outline"}
                className={offer.highlighted ? "glow-cyan" : ""}
              >
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  {offer.cta}
                  <ArrowRight className="ml-1 size-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          No audit or ROI case = No implementation. Every project starts with
          validated numbers.
        </p>
      </div>
    </section>
  );
}
