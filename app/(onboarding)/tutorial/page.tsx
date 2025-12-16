"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useOnboarding } from "../OnboardingContext";
import { Button } from "@/components/ui/button";

export default function TutorialPage() {
  const router = useRouter();
  const { setConfig } = useOnboarding();

  useEffect(() => {
    setConfig({
      skipLabel: "Skip Tour",
      onSkip: () => {
        document.cookie = `token=123456; path=/;`;
        router.replace("/dashboard");
      },
    });
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-bold">Welcome Tutorial</h2>
      <p className="mt-2 text-neutral-600">Some intro content...</p>

      <Button
        onClick={() => {
          document.cookie = `token=123456; path=/;`;
          router.replace("/dashboard");
        }}
        className="mt-4 w-full"
      >
        Continue
      </Button>
    </div>
  );
}
