"use client";

import WEB_IMAGES from "@/public";
import { OnboardingProvider, useOnboarding } from "./OnboardingContext";

function Header() {
  const { config } = useOnboarding();
  const { skipLabel, onSkip } = config;

  return (
    <div className="flex justify-between items-center px-8 py-4">
      <img src={WEB_IMAGES.APP_LOGO} className="h-8" />

      {onSkip ? (
        <button onClick={onSkip} className="text-sm border px-4 py-1 rounded-lg hover:bg-gray-100">
          {skipLabel}
        </button>
      ) : (
        <button disabled className="opacity-40 text-sm border px-4 py-1 rounded-lg">
          {skipLabel}
        </button>
      )}
    </div>
  );
}

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <OnboardingProvider>
      <div className="min-h-screen bg-[#F7F4EC] flex flex-col">
        <Header />
        <div className="flex justify-center mt-4 px-4">{children}</div>
      </div>
    </OnboardingProvider>
  );
}
