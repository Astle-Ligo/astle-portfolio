import React, { useEffect, useState } from "react";

function LoadingScreen({ progress, onComplete }) {
  const [displayed, setDisplayed] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Smoothly animate the displayed number towards `progress`
  useEffect(() => {
    if (progress === displayed) return;

    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (prev === progress) {
          clearInterval(interval);
          return prev;
        }

        const step = prev < progress ? 1 : -1;
        return prev + step;
      });
    }, 15); // smaller = smoother/faster

    return () => clearInterval(interval);
  }, [progress, displayed]);

  // When we *visually* hit 100, fade out and then call onComplete
  useEffect(() => {
    if (progress === 100 && displayed === 100 && !isFading) {
      setIsFading(true);
      const timeout = setTimeout(() => {
        onComplete && onComplete();
      }, 700); // match Tailwind duration

      return () => clearTimeout(timeout);
    }
  }, [progress, displayed, isFading, onComplete]);

  return (
    <div
      className={`
        fixed inset-0 flex items-end justify-end px-8 z-[9999]
        bg-[#3a0822]
        transition-opacity duration-700
        ${isFading ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <p className="font-[font1] text-[8rem] font-bold tracking-3">
        {displayed}
      </p>
    </div>
  );
}

export default LoadingScreen;
