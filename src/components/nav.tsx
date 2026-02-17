"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Nav({ ctaUrl }: { ctaUrl: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-surface-1/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-1 text-lg font-bold">
          <span className="text-foreground">Nexus</span>
          <span className="text-accent-cyan">Automation</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <a
            href="#how-it-works"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            How It Works
          </a>
          <a
            href="#offers"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </a>
          <Button asChild className="glow-cyan">
            <a href={ctaUrl}>Book an Audit</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-b border-border bg-surface-1/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-4 px-4 py-6">
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#offers"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-sm text-muted-foreground hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </a>
            <Button asChild className="glow-cyan w-full">
              <a href={ctaUrl}>Book an Audit</a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
