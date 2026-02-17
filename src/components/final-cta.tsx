import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Calendar, Shield } from "lucide-react";

const signals = [
  { icon: Lock, text: "No contracts until you're ready" },
  { icon: Calendar, text: "Book same-week" },
  { icon: Shield, text: "100% confidential" },
];

export default function FinalCta({ ctaUrl }: { ctaUrl: string }) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Gradient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-accent-cyan/5 to-transparent" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[400px] rounded-full bg-accent-cyan/5 blur-[100px]" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          Stop guessing what to automate.{" "}
          <span className="gradient-text">Start with clarity.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          No obligation. No technical jargon. We&apos;ll show you exactly
          what to automate and the projected ROI — before you commit to
          anything.
        </p>

        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="glow-cyan h-14 px-10 text-lg font-semibold"
          >
            <a href={ctaUrl}>
              Book Your Free Audit
              <ArrowRight className="ml-2 size-5" />
            </a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {signals.map((s) => (
            <div
              key={s.text}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <s.icon className="size-4 text-accent-cyan" />
              {s.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
