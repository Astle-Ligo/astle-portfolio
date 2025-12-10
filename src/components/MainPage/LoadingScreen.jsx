import React, { useEffect, useState } from "react";

function LoadingScreen({ progress, onComplete }) {
  const [displayed, setDisplayed] = useState(0);
  const [done, setDone] = useState(false);

  // Smoothly animate displayed → progress
  useEffect(() => {
    if (done) return;

    const target = Math.max(0, Math.min(100, progress));
    if (target === displayed) return;

    const interval = setInterval(() => {
      setDisplayed((prev) => {
        if (prev === target) {
          clearInterval(interval);
          return prev;
        }
        const step = prev < target ? 1 : -1;
        return prev + step;
      });
    }, 15);

    return () => clearInterval(interval);
  }, [progress, displayed, done]);

  // When BOTH have reached 100 → tell parent to hide loader
  useEffect(() => {
    if (!done && progress >= 100 && displayed >= 100) {
      setDone(true);
      onComplete && onComplete();
    }
  }, [progress, displayed, done, onComplete]);

  return (
    <div
      className="
        fixed inset-0 flex items-end justify-end px-8 z-[9999]
        bg-[#0E0E0C]
        transition-opacity duration-700
      "
    >
      <p className="font-[font1] text-[8rem] font-bold tracking-3">
        {displayed}
      </p>
    </div>
  );
}

export default LoadingScreen;
