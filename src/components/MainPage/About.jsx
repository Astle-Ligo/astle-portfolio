import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import gsap from "gsap";

const About = ({ isReady }) => {
    const location = useLocation();
    const isAboutPage = location.pathname === "/about";

    useEffect(() => {
        if (!isReady) return;

        gsap.fromTo(
            ".about-title",
            { x: 40, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
            }
        );
    }, [isAboutPage, isReady]);

    const handleHoverIn = (e) => {
        gsap.to(e.currentTarget, {
            opacity: 0.7,
            duration: 0.25,
            ease: "power2.out",
        });
    };

    const handleHoverOut = (e) => {
        gsap.to(e.currentTarget, {
            opacity: 1,
            duration: 0.25,
            ease: "power2.out",
        });
    };

    return (
        <Link to={isAboutPage ? "/" : "/about"} className="p-0 cursor-pointer">
            <h1
                className="about-title font-[font1] text-xs sm:text-xs md:text-base uppercase underline decoration-2 underline-offset-4"
                onMouseEnter={handleHoverIn}
                onMouseLeave={handleHoverOut}
            >
                {isAboutPage ? "close" : "about"}
            </h1>
        </Link>
    );
};

export default About;
