import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Skiils = () => {
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
        <>
            <h1
                ref={headRef}
                className="font-bold font-[font1] uppercase text-lg"
            >
                skills
            </h1>

            <ul
                ref={paragraphRef}
                className="list-square leading-relaxed text-xs font-[font1] font-semibold uppercase space-y-1"
            >
                <li>html, css, javascript, react, tailwind, gsap</li>
                <li>node.js, express.js, rest apis</li>
                <li>data structures & algorithms</li>
                <li>c, c++, python</li>
                <li>git, github, postman, aws</li>
            </ul>
        </>
    );
};

export default Skiils;
