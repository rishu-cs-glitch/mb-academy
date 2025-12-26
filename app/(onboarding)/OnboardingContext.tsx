"use client";

import { createContext, useContext, useState } from "react";

type OnboardingConfig = {
  skipLabel: string;
  onSkip: () => void;
};

type OnboardingContextType = {
  config: OnboardingConfig;
  setConfig: React.Dispatch<React.SetStateAction<OnboardingConfig>>;
};

const OnboardingContext = createContext<OnboardingContextType | null>(null);

// const OnboardingContext = createContext(null);

export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<OnboardingConfig>({
    skipLabel: "Skip",
    onSkip: () => {},
  });

  return (
    <OnboardingContext.Provider value={{ config, setConfig }}>
      {children}
    </OnboardingContext.Provider>
  );
}
export function useOnboarding() {
  const ctx = useContext(OnboardingContext);
  if (!ctx) {
    throw new Error("useOnboarding must be used inside OnboardingProvider");
  }
  return ctx;
}
