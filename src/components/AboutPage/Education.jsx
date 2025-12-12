import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Education = () => {
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

            // Heading animation
            tl.from(headRef.current, {
                y: 20,
                opacity: 0,
            });

            // List items animation (stagger)
            tl.from(
                paragraphRef.current.children,
                {
                    y: 12,
                    opacity: 0,
                    stagger: 0.1,
                },
                "-=0.3" // slight overlap for smoothness
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <>
            <h1
                ref={headRef}
                className="font-black font-[font1] uppercase text-xl"
            >
                Education
            </h1>

            <ul
                ref={paragraphRef}
                className="list-square leading-relaxed text-xs font-[font1] font-semibold uppercase space-y-2"
            >
                <li className='font-bold text-sm'>Bachelor of Computer Applications (BCA)</li>
                <li>St. Joseph’s University</li>
                <li>Graduation Year: 2025</li>
                <li>Graduated with Distinction</li>
            </ul>
        </>
    );
};

export default Education;
