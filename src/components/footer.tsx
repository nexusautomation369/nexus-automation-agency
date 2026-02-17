export default function Footer({ ctaUrl }: { ctaUrl: string }) {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <a href="#" className="text-lg font-bold">
              <span className="text-foreground">Nexus</span>{" "}
              <span className="text-accent-cyan">Automation</span>
            </a>
            <p className="mt-1 text-sm text-muted-foreground">
              AI Automation for Growing Businesses
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={ctaUrl}
              className="text-sm text-muted-foreground transition-colors hover:text-accent-cyan"
            >
              Book an Audit
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-muted-foreground transition-colors hover:text-accent-cyan"
            >
              How It Works
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Nexus Automation. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
