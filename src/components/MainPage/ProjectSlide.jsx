import React, { useRef } from "react";
import gsap from "gsap";

// Horizontal slider that responds to VERTICAL mouse wheel
// Container size: height 40rem, width 160rem
// JSX + TailwindCSS

function projectSlide() {
    const containerRef = useRef(null);

    const handleWheel = (e) => {
        const container = containerRef.current;
        if (!container) return;

        // Prevent page vertical scroll while hovering the slider
        e.preventDefault();

        const delta = e.deltaY;
        const newScrollLeft = container.scrollLeft + delta;

        // Calculate skew based on scroll intensity (clamped)
        const skew = Math.max(-12, Math.min(12, delta * 0.1));

        const panels = container.querySelectorAll(".project-panel");

        if (panels.length) {
            // Apply a quick skew on scroll, then ease back to 0
            gsap.to(panels, {
                skewX: skew,
                transformOrigin: "center center",
                duration: 0.15,
                ease: "power2.out",
                overwrite: "auto",
                onComplete: () => {
                    gsap.to(panels, {
                        skewX: 0,
                        duration: 1,
                        ease: "power3.out",
                    });
                },
            });
        }

        // Smooth horizontal scroll animation with GSAP
        gsap.to(container, {
            scrollLeft: newScrollLeft,
            duration: 0.1,
            ease: "power2.out",
        });
    };

    return (
        <>
            <div className="relative h-full w-[160rem] overflow-hidden">
                <div
                    ref={containerRef}
                    onWheel={handleWheel}
                    className="no-scrollbar h-full w-full overflow-x-scroll overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none]"
                >
                    {/* Hide scrollbar only for this container */}
                    <style>{`
            .no-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}</style>

                    {/* First rectangle starts roughly from center visually */}
                    <div className="flex h-full w-full items-center gap-2">
                        <div className="w-1/2 h-full flex-none "></div>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className="project-panel h-[90%] w-[7.5rem] flex-none bg-yellow-500">
                                <p>{index}</p>
                            </div>
                        ))}
                        <div className="w-1/2 h-full flex-none "></div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default projectSlide;
