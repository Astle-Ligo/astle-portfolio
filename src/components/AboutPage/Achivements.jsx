import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Achivements = () => {
    const containerRef = useRef(null);
    const paragraphRef = useRef(null);
    const headRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {
                    duration: 0.8,
                    ease: 'power3.out',
                },
            });

            // Heading comes in first
            tl.from(headRef.current, {
                y: 20,
                opacity: 0,
            });

            // Then each list item, staggered
            tl.from(
                paragraphRef.current.children,
                {
                    y: 12,
                    opacity: 0,
                    stagger: 0.1,
                },
                '-=0.3' // slight overlap with the heading
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef}>
            <h1
                ref={headRef}
                className="font-black font-[font1] uppercase text-xl"
            >
                Key Highlights
            </h1>

            <ul
                ref={paragraphRef}
                className="list-square leading-relaxed text-xs font-[font1] font-semibold uppercase space-y-2"
            >
                <li>350+ LeetCode problems solved</li>
                <li>25+ national-level awards</li>
                <li>Hosted 7+ technical events</li>
                <li>Represented SJU at IITs, NITs & VIT</li>
                <li>General Secretary, Cybernetics Association 2023-24</li>
            </ul>
        </div>
    );
};

export default Achivements;
