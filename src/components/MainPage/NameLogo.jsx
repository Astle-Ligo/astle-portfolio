import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Shuffle from "@/components/ui/shadcn-io/shuffle";

const NameLogo = ({ about, isReady }) => {
    const navigate = useNavigate();
    const rootRef = useRef(null);

    useLayoutEffect(() => {
        if (!isReady || !rootRef.current) return;

        const ctx = gsap.context(() => {
            gsap.from(rootRef.current, {
                y: 40,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });
        }, rootRef);

        return () => ctx.revert();
    }, [isReady]);

    return (
        <div
            ref={rootRef}
            className="cursor-pointer"
            onClick={() => navigate("/")}
            tabIndex={0}
        >
            <h1
                className={`font-[font2] tracking-[0.01rem] leading-[0.8] font-medium text-5xl ${about ? "sm:text-5xl md:text-5xl lg:text-[9rem]" : "text-5xl"
                    }`}
            >
                <Shuffle
                    text="ASTLE"
                    shuffleDirection="right"
                    duration={0.5}
                    animationMode="evenodd"
                    shuffleTimes={2}
                    ease="power3.out"
                    stagger={0.05}
                    threshold={0.1}
                    triggerOnce={false}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    className="inline-block"
                    style={{
                        fontSize: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                    }}
                />
                <br />
                <Shuffle
                    text="LIGO"
                    shuffleDirection="right"
                    duration={0.5}
                    animationMode="evenodd"
                    shuffleTimes={2}
                    ease="power3.out"
                    stagger={0.05}
                    threshold={0.1}
                    triggerOnce={false}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    className="inline-block"
                    style={{
                        fontSize: "inherit",
                        fontFamily: "inherit",
                        lineHeight: "inherit",
                    }}
                />
            </h1>
        </div>
    );
};

export default NameLogo;
