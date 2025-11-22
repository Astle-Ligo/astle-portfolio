import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Story = () => {
    const paragraphRef = useRef(null);
    const headRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    duration: 0.8,
                    ease: "power3.out",
                },
            });

            // Heading first
            tl.from(headRef.current, {
                y: 20,
                opacity: 0,
            });

            // Paragraph with slight overlap
            tl.from(
                paragraphRef.current,
                {
                    y: 12,
                    opacity: 0,
                },
                "-=0.3"
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <h1
                ref={headRef}
                className="font-bold font-[font1] uppercase text-lg"
            >
                journey
            </h1>

            <p
                ref={paragraphRef}
                className="leading-relaxed text-base text-xs font-[font1] font-semibold uppercase"
            >
                I’ve always been drawn to solving problems and creating things. That curiosity led me into software development, where the freedom to think and the thrill of new challenges keep me focused on growing and building what’s next.
            </p>
        </>
    );
};

export default Story;
