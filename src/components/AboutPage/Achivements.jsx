import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Achivements = () => {
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

            // Heading fade + slide
            tl.from(headRef.current, {
                y: 20,
                opacity: 0,
            });

            // List with stagger for a smooth reveal
            tl.from(
                paragraphRef.current.children,
                {
                    y: 12,
                    opacity: 0,
                    stagger: 0.1,
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
                Key Highlights
            </h1>

            <ul
                ref={paragraphRef}
                className="list-square leading-relaxed text-xs font-[font1] font-semibold uppercase space-y-1"
            >
                <li>350+ LeetCode problems solved</li>
                <li>25+ national-level awards</li>
                <li>Hosted 7+ technical events</li>
                <li>Represented SJU at IITs, NITs & VIT</li>
                <li>General Secretary, Cybernetics Association 2023-24</li>
            </ul>
        </>
    );
};

export default Achivements;
