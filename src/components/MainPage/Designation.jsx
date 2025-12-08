import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const Designation = ({ show, isReady }) => {
    const [hover, setHover] = useState(false);
    const [animated, setAnimated] = useState(false);
    const charsRef = useRef([]);

    const DEFAULT_TEXT = "full stack developer";
    const HOVER_TEXT = "Sorry!!! I can't hack your instagram.";

    const targetText = show && hover ? HOVER_TEXT : DEFAULT_TEXT;

    useEffect(() => {
        if (!isReady || animated) return;

        const tl = gsap.from(charsRef.current, {
            opacity: 0,
            stagger: 0.04,
            duration: 0.6,
            ease: "power2.out",
            onComplete: () => {
                setAnimated(true);
            },
        });

        return () => {
            tl.kill();
        };
    }, [isReady, animated]);

    return (
        <div className="p-0">
            <h1
                className="
                    font-[font1]
                    text-sm
                    sm:text-sm
                    md:text-md
                    lg:text-lg
                    uppercase
                    font-bold
                    cursor-default
                "
                onMouseEnter={show ? () => setHover(true) : undefined}
                onMouseLeave={show ? () => setHover(false) : undefined}
            >
                {animated
                    ? targetText
                    : DEFAULT_TEXT.split("").map((c, i) => (
                        <span
                            key={i}
                            ref={(el) => (charsRef.current[i] = el)}
                            className="inline-block"
                        >
                            {c === " " ? "\u00A0" : c}
                        </span>
                    ))}
            </h1>
        </div>
    );
};

export default Designation;
