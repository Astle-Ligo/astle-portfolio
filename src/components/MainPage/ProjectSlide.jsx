import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import ProjectPage from "./ProjectPage";


import img0 from "../../assets/Thumbnails/0tejas.png";
import img1 from "../../assets/Thumbnails/1ccp.png";
import img2 from "../../assets/Thumbnails/2dv.png";
import img3 from "../../assets/Thumbnails/3treasure.png";
import img4 from "../../assets/Thumbnails/4football.png";
import img5 from "../../assets/Thumbnails/5portfolio.png";
import img6 from "../../assets/Thumbnails/6tech.png";
import img7 from "../../assets/Thumbnails/7tt.png";

const thumbnailImages = [img0, img1, img2, img3, img4, img5, img6, img7];

function ProjectSlide({ onProgress, isReady }) {
    const containerRef = useRef(null);
    const totalImages = thumbnailImages.length;

    const [loaded, setLoaded] = useState(0);

    useEffect(() => {
        const pct = Math.min(
            Math.floor((loaded / totalImages) * 100),
            100
        );
        if (onProgress) onProgress(pct);
    }, [loaded, totalImages, onProgress]);

    const handleImageLoad = (src, index, type) => {
        console.log(`${type} for image ${index}:`, src);
        setLoaded((prev) => Math.min(prev + 1, totalImages));
    };

    useLayoutEffect(() => {
        if (!isReady || !containerRef.current) return;

        const ctx = gsap.context(() => {
            const panels = containerRef.current.querySelectorAll(".project-panel");
            if (!panels.length) return;

            gsap.from(panels, {
                x: 1000,
                skewY: 20,
                transformOrigin: "center center",
                opacity: 0,
                stagger: 0.15,
                duration: 1.5,
                ease: "power3.out",
            });
        }, containerRef);

        return () => ctx.revert();
    }, [isReady]);

    // Modal state
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
    const [isProjectOpen, setIsProjectOpen] = useState(false);

    const openProject = (index) => {
        setSelectedProjectIndex(index);
        setIsProjectOpen(true);
        document.body.style.overflow = "hidden";
    };

    const closeProject = () => {
        setIsProjectOpen(false);
        setSelectedProjectIndex(null);
        document.body.style.overflow = "";
    };

    // Scroll skew
    const handleWheel = (e) => {
        const container = containerRef.current;
        if (!container) return;

        e.preventDefault();

        const delta = e.deltaY;
        const newScrollLeft = container.scrollLeft + delta;

        const skew = Math.max(-12, Math.min(12, delta * 0.1));
        const panels = container.querySelectorAll(".project-panel");

        if (panels.length) {
            gsap.to(panels, {
                skewX: skew,
                transformOrigin: "center center",
                duration: 0.15,
                ease: "power2.out",
                overwrite: "auto",
                onComplete: () => {
                    gsap.to(panels, {
                        skewX: 0,
                        duration: 1,
                        ease: "power3.out",
                    });
                },
            });
        }

        gsap.to(container, {
            scrollLeft: newScrollLeft,
            duration: 0.1,
            ease: "power2.out",
        });
    };

    return (
        <div className="relative h-full w-full overflow-hidden">
            <div
                ref={containerRef}
                onWheel={handleWheel}
                className="no-scrollbar h-full w-full overflow-x-scroll overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none]"
            >
                <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                <div className="flex h-full w-full items-center gap-4">
                    <div className="w-1/3 md:w-1/2 h-full flex-none z-10" />

                    {thumbnailImages.map((src, index) => (
                        <div
                            key={index}
                            className="project-panel h-[50%] w-[6rem] flex-none cursor-pointer"
                            onClick={() => openProject(index)}
                        >
                            <img
                                src={src}
                                alt=""
                                className="
                w-full h-full object-cover 
                grayscale 
                hover:grayscale-0
                hover:scale-[1.1]
                rounded-lg
                hover:rounded-none
                transition-all duration-300 ease-out 
            "
                                onLoad={() => handleImageLoad(src, index, "load")}
                                onError={() => handleImageLoad(src, index, "error")}
                            />
                        </div>
                    ))}


                    <div className="w-1/3 md:w-1/2 h-full flex-none" />
                </div>
            </div>

            <ProjectPage
                isOpen={isProjectOpen}
                onClose={closeProject}
                projectIndex={selectedProjectIndex}
            />
        </div>
    );
}

export default ProjectSlide;
