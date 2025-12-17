// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useOnboarding } from "../OnboardingContext";
// import { Button } from "@/components/ui/button";

// export default function TutorialPage() {
//   const router = useRouter();
//   const { setConfig } = useOnboarding();

//   useEffect(() => {
//     setConfig({
//       skipLabel: "Skip Tour",
//       onSkip: () => {
//         document.cookie = `token=123456; path=/;`;
//         router.replace("/dashboard");
//       },
//     });
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md">
//       <h2 className="text-xl font-bold">Welcome Tutorial</h2>
//       <p className="mt-2 text-neutral-600">Some intro content...</p>

//       <Button
//         onClick={() => {
//           document.cookie = `token=123456; path=/;`;
//           router.replace("/dashboard");
//         }}
//         className="mt-4 w-full"
//       >
//         Continue
//       </Button>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useOnboarding } from "../OnboardingContext";
import type { CarouselApi } from "@/components/ui/carousel";

const slides = [
  {
    title: "Learn Anytime, Anywhere",
    description:
      "Access binge-worthy courses designed by your coach. Track your progress and resume right where you left off",
  },
  {
    title: "Join the Conversation",
    description:
      "Stay connected with your peers. Share wins, ask questions, and support each other inside dedicated channels.",
  },
  {
    title: "Don’t Miss a Session",
    description:
      "Join live group calls and workshops. RSVP in one tap and get reminders so you’re always on time.",
  },
  {
    title: "Stay Motivated, Level Up",
    description:
      "Earn badges and climb the leaderboard as you learn. Celebrate milestones and see how you rank.",
  },
];

export default function TutorialPage() {
  const router = useRouter();
  const { setConfig } = useOnboarding();

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setConfig({
      skipLabel: "Skip",
      onSkip: () => {
        document.cookie = "token=123456; path=/;";
        router.replace("/dashboard");
      },
    });
  }, []);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleNext = () => {
    if (current === slides.length - 1) {
      document.cookie = "token=123456; path=/;";
      router.replace("/dashboard");
    } else {
      api?.scrollNext();
    }
  };

  return (
    <div className="min-h-screen    items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        {/* DOTS */}
        <div className="flex justify-center mb-6 gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 transition-all rounded-full ${
                current === i ? "w-6 bg-[#0F1828]" : "w-1.5 bg-neutral-300"
              }`}
            />
          ))}
        </div>

        {/* CAROUSEL */}
        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {slides.map((slide, i) => (
              <CarouselItem key={i}>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-[#0F1828]">{slide.title}</h2>
                  <p className="mt-3 text-sm text-neutral-600 max-w-md mx-auto">
                    {slide.description}
                  </p>

                  {/* Preview Box */}
                  <div className="mt-10 bg-white rounded-xl shadow-xl h-[530px] flex items-center justify-center">
                    <span className="text-neutral-400">Preview Area</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* BUTTON */}
        <div className="mt-8 flex justify-center">
          <Button
            onClick={handleNext}
            className="w-48 h-11 bg-[#0F1828] text-white hover:bg-[#0F1828]/90"
          >
            {current === slides.length - 1 ? "Lets start" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
