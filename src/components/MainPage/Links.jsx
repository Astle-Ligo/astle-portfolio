import React, { useLayoutEffect, useRef, useState, memo } from "react";
import gsap from "gsap";
import { RollingText } from "@/components/ui/shadcn-io/rolling-text";

const LINKS = [
    { label: "Email", href: "mailto:astleligo@gmail.com", external: false },
    { label: "GitHub", href: "https://github.com/astleligo", external: true },
    { label: "LinkedIn", href: "https://linkedin.com/in/astle-ligo", external: true },
    { label: "Instagram", href: "https://instagram.com/astle.dev", external: true },
];

const prefersReducedMotion = () =>
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Links = ({ position = "right", className = "", isReady }) => {
    const containerRef = useRef(null);
    const [hovered, setHovered] = useState(null);
    const [playKeys, setPlayKeys] = useState({});

    useLayoutEffect(() => {
        if (!isReady || !containerRef.current) return;

        if (prefersReducedMotion()) {
            gsap.set(
                containerRef.current.querySelectorAll("[data-anim-target]"),
                { opacity: 1, y: 0 }
            );
            return;
        }

        const items = gsap.utils.toArray(
            containerRef.current.querySelectorAll("[data-anim-target]")
        );

        gsap.fromTo(
            items,
            { y: 12, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.12,
                ease: "power3.out",
            }
        );
    }, [position, isReady]);

    const handleEnter = (i) => {
        setPlayKeys((p) => ({ ...p, [i]: Date.now() }));
        setHovered(i);
    };

    const handleLeave = () => setHovered(null);

    const itemsAlignment =
        position === "left" ? "items-start left-0" : "items-end right-0";

    return (
        <nav
            ref={containerRef}
            aria-label="social links"
            className={`p-0 flex flex-col gap-2 ${itemsAlignment} ${className} font-[font1] text-xs sm:text-xs md:text-sm uppercase`}
        >
            {LINKS.map((link, i) => {
                const key = playKeys[i] ? `txt-${i}-${playKeys[i]}` : `txt-${i}`;
                const playNow = hovered === i && Boolean(playKeys[i]);

                return (
                    <a
                        key={link.label}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        data-anim-target
                        className="tracking-wider"
                        style={{ display: "flex", alignItems: "center" }}
                        onMouseEnter={() => handleEnter(i)}
                        onMouseLeave={handleLeave}
                        onFocus={() => handleEnter(i)}
                        onBlur={handleLeave}
                    >
                        <RollingText
                            key={key}
                            text={link.label}
                            inView={false}
                            play={playNow}
                            transition={{
                                duration: 0.35,
                                delay: 0.1,
                                ease: "easeOut",
                            }}
                        />
                    </a>
                );
            })}
        </nav>
    );
};

export default memo(Links);
