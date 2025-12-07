import React, { useRef, useState } from "react";
import gsap from "gsap";
import LoadingScreen from "./LoadingScreen";

import img0 from "../../assets/Thumbnails/0tejas.png";
import img1 from "../../assets/Thumbnails/1ccp.png";
import img2 from "../../assets/Thumbnails/2dv.png";
import img3 from "../../assets/Thumbnails/3treasure.png";
import img4 from "../../assets/Thumbnails/4football.png";
import img5 from "../../assets/Thumbnails/5portfolio.png";
import img6 from "../../assets/Thumbnails/6tech.png";
import img7 from "../../assets/Thumbnails/7tt.png";

const thumbnailImages = [img0, img1, img2, img3, img4, img5, img6, img7];

function ProjectSlide() {
    const containerRef = useRef(null);
    const totalImages = thumbnailImages.length;

    // Has this user already loaded all thumbnails in this session?
    const [hasLoadedOnce] = useState(() => {
        if (typeof window === "undefined") return false;
        return sessionStorage.getItem("thumbnailsLoaded") === "true";
    });

    // If already loaded once, start as fully loaded
    const [loaded, setLoaded] = useState(() =>
        hasLoadedOnce ? totalImages : 0
    );

    // If already loaded once, don't even render the loader
    const [showLoader, setShowLoader] = useState(() => !hasLoadedOnce);

    const progress = Math.min(
        Math.floor((loaded / totalImages) * 100),
        100
    );

    const handleImageLoad = () => {
        setLoaded((prev) => {
            const next = prev + 1;

            // When all images are loaded for the first time,
            // remember that for this session
            if (next >= totalImages) {
                try {
                    sessionStorage.setItem("thumbnailsLoaded", "true");
                } catch (e) {
                    // ignore if sessionStorage not available
                }
            }

            return next;
        });
    };

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
            {showLoader && (
                <LoadingScreen
                    progress={progress}
                    onComplete={() => setShowLoader(false)}
                />
            )}

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
                    <div className="w-1/2 h-full flex-none z-10"></div>

                    {thumbnailImages.map((src, index) => (
                        <div
                            key={index}
                            className="project-panel h-[50%] w-[6rem] flex-none"
                        >
                            <img
                                src={src}
                                alt=""
                                className="
                  w-full h-full object-cover 
                  grayscale 
                  hover:grayscale-0
                  transition-all duration-300 ease-out 
                "
                                onLoad={handleImageLoad}
                                onError={handleImageLoad} // still count failures
                            />
                        </div>
                    ))}

                    <div className="w-1/2 h-full flex-none "></div>
                </div>
            </div>
        </div>
    );
}

export default ProjectSlide;
