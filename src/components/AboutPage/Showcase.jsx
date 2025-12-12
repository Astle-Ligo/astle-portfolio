import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Resume from '@/assets/resume/Astle-fullstack-public.pdf';

const Showcase = () => {
    const linksRef = useRef([]);

    const items = [
        { label: 'Resume', href: Resume, external: true },
        { label: 'GitHub', href: "https://github.com/astleligo", external: true },
        { label: 'LeetCode', href: "https://leetcode.com/u/Astle-Ligo/", external: true }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(linksRef.current, {
                opacity: 0,
                x: -20,
                stagger: 0.12,
                duration: 0.8,
                ease: "power3.out",
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div className="leading-relaxed text-sm font-[font1] font-bold uppercase gap-2 flex lg:flex-col justify-evenly">
            {items.map((item, index) => (
                <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    ref={el => (linksRef.current[index] = el)}
                    className="flex items-center gap-1 cursor-pointer group"
                >
                    <span>{item.label}</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        ↗
                    </span>
                </a>
            ))}
        </div>
    );
};

export default Showcase;
