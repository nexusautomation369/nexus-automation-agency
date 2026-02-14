import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Positioning from "@/components/positioning";
import ValueProp from "@/components/value-prop";
import HowItWorks from "@/components/how-it-works";
import Offers from "@/components/offers";
import WhoItsFor from "@/components/who-its-for";
import Pricing from "@/components/pricing";
import Principles from "@/components/principles";
import FinalCta from "@/components/final-cta";
import Footer from "@/components/footer";

const ONBOARDING_URL =
  process.env.NEXT_PUBLIC_ONBOARDING_URL || "https://onboarding-agent.vercel.app";

export default function Home() {
  return (
    <>
      <Nav ctaUrl={ONBOARDING_URL} />
      <main>
        <Hero ctaUrl={ONBOARDING_URL} />
        <Problem />
        <Positioning />
        <ValueProp />
        <HowItWorks />
        <Offers ctaUrl={ONBOARDING_URL} />
        <WhoItsFor />
        <Pricing />
        <Principles />
        <FinalCta ctaUrl={ONBOARDING_URL} />
      </main>
      <Footer ctaUrl={ONBOARDING_URL} />
    </>
  );
}
