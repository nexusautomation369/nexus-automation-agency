import type { NextConfig } from "next";

const onboardingAgentUrl =
  process.env.ONBOARDING_AGENT_URL || "https://onboarding-agent-gamma.vercel.app";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/onboarding",
        destination: `${onboardingAgentUrl}/`,
      },
      {
        source: "/onboarding/:path*",
        destination: `${onboardingAgentUrl}/:path*`,
      },
    ];
  },
};

export default nextConfig;
