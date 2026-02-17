import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const trustSignals = [
  "ROI-first methodology",
  "Outcome-driven systems",
  "Built for real operations",
];

export default function Hero({ ctaUrl }: { ctaUrl: string }) {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(oklch(0.75 0.18 210) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.75 0.18 210) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full bg-accent-cyan/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-medium tracking-widest text-accent-cyan uppercase">
            AI Automation Agency
          </p>

          <h1 className="text-5xl font-bold leading-[1.05] tracking-tighter md:text-7xl">
            Eliminate Wasted Hours.{" "}
            <span className="gradient-text">
              Unlock Measurable ROI
            </span>{" "}
            with AI.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Nexus Automation designs, implements, and continuously optimizes
            AI-powered business systems that replace broken processes — only
            when ROI is provable.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="glow-cyan h-12 px-8 text-base font-semibold"
            >
              <a href={ctaUrl}>
                Get an AI Process Audit
                <ArrowRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="h-12 text-base">
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <CheckCircle className="size-4 text-accent-cyan" />
                {signal}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
