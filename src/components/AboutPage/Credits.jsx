import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Credits = () => {
    const lineRef = useRef([]);

    useEffect(() => {
        gsap.from(lineRef.current, {
            opacity: 0,
            filter: "blur(4px)",
            y: 6,
            stagger: 0.2,
            duration: 0.6,
            ease: "power2.out",
        });
    }, []);

    return (
        <>
            <p
                ref={(el) => (lineRef.current[0] = el)}
                className="uppercase font-[font1] text-[0.5rem] font-medium"
            >
                © 2025 ASTLE Ligo. All rights reserved.
            </p>

            <p
                ref={(el) => (lineRef.current[1] = el)}
                className="uppercase font-[font1] text-[0.5rem] font-medium"
            >
                Inspired by{" "}
                <a
                    href="https://aristidebenoist.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    aristide
                </a>
            </p>
        </>
    );
};

export default Credits;
