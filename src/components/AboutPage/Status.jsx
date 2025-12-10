import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const STATUS_COLORS = {
    "Ready to Work": "text-green-400",
    Working: "text-blue-500",
    "On Internship": "text-purple-500",
    Unavailable: "text-red-500",
};

const Status = ({ status = "Ready to Work", isReady }) => {
    const containerRef = useRef(null);
    const dotRef = useRef(null);

    const dotColor = STATUS_COLORS[status] || "text-gray-500";

    useEffect(() => {
        if (!isReady) return;

        const ctx = gsap.context(() => {
            gsap.from(containerRef.current, {
                opacity: 0,
                filter: "blur(4px)",
                duration: 0.6,
                ease: "power2.out",
            });

            gsap.from(dotRef.current, {
                scale: 0.4,
                opacity: 0,
                duration: 0.4,
                ease: "back.out(2)",
            });
        });

        return () => ctx.revert();
    }, [isReady, status]);

    return (
        <div
            ref={containerRef}
            className="inline-flex items-center gap-1 text-[0.625rem] md:text-xs font-[font1] uppercase font-medium"
        >
            <span
                ref={dotRef}
                className={`w-1 h-1 rounded-full ${dotColor} bg-current`}
            />
            <span className="font-bold flex items-center gap-1">
                {status}
                <span className="text-md md:text-lg font-black leading-none">i</span>
                India
            </span>
        </div>
    );
};

export default Status;
