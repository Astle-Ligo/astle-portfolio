// src/components/MainPage/ProjectPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { PROJECTS } from "../../data/ProjectData";

function ProjectPage({ isOpen, onClose, projectIndex }) {
    if (!isOpen || projectIndex === null || projectIndex === undefined) return null;

    const project = PROJECTS[projectIndex];
    if (!project) return null;

    const [activeImageIndex, setActiveImageIndex] = useState(0);

    const mainImageRef = useRef(null);

    useEffect(() => {
        setActiveImageIndex(0);
    }, [projectIndex]);

    const hasImages = project.images && project.images.length > 0;
    const activeImageSrc = hasImages ? project.images[activeImageIndex] : null;

    const handleWheelScroll = (e) => {
        const container = e.currentTarget;
        container.scrollLeft += e.deltaY;
    };

    useEffect(() => {
        if (mainImageRef.current) {
            mainImageRef.current.scrollTop = 0;
        }
    }, [activeImageIndex]);


    return (
        <div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-[black/60] backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative h-[90vh] max-h-[95vh] w-[95vw] max-w-7xl overflow-y-auto rounded-2xl bg-[#0E0E0C] p-4 md:p-8 flex items-center justify-center no-scrollbar border border-[#bac4b8]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    className="absolute cursor-pointer right-4 top-4 rounded-full border border-[#bac4b8] px-3 py-1 text-xs md:text-sm uppercase tracking-[0.15em]"
                    onClick={onClose}
                >
                    Close
                </button>

                {/* Main layout */}
                <div className="grid gap-6 md:grid-cols-[1.1fr_1.9fr] md:gap-8 h-[90%] w-full">

                    {/* LEFT COLUMN */}
                    <div className="space-y-8 md:space-y-12 text-sm md:text-base leading-relaxed">

                        {/* Title */}
                        <div>
                            <h2 className="text-3xl font-semibold tracking-tight">
                                {project.title}
                            </h2>
                        </div>

                        {/* Details */}
                        <div className="space-y-4 md:space-y-5">

                            <section className="space-y-1.5">
                                <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
                                    Overview
                                </h3>
                                <p>{project.description}</p>
                            </section>

                            {project.role && (
                                <section className="space-y-1.5">
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
                                        Role
                                    </h3>
                                    <p>{project.role}</p>
                                </section>
                            )}

                            {project.cilent && (
                                <section className="space-y-1.5">
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
                                        Client
                                    </h3>
                                    <p>{project.cilent}</p>
                                </section>
                            )}

                            {project.techStack && project.techStack.length > 0 && (
                                <section className="space-y-1.5">
                                    <h3 className="text-sm font-semibold uppercase tracking-[0.18em]">
                                        Tech Stack
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-[#bac4b8] px-2.5 py-1 text-[0.7rem]"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </section>
                            )}

                        </div>

                        {/* Footer */}
                        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm">

                            {project.time && (
                                <span className="rounded-full border border-[#bac4b8] px-3 py-1 text-sm md:text-xs uppercase">
                                    {project.time}
                                </span>
                            )}

                            {project.gitLink && (
                                <a
                                    href={project.gitLink}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 rounded-full border border-[#bac4b8] px-3 py-1 text-sm md:text-xs uppercase tracking-[0.18em] hover:border-[#bac4b8] hover:bg-[#bac4b8] hover:text-black transition"
                                >
                                    View Code
                                    <span className="text-[0.6rem] md:text-[0.7rem]">↗</span>
                                </a>
                            )}
                        </div>
                    </div>


                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col items-center md:items-stretch justify-start space-y-4 md:space-y-6">

                        <h3 className="text-xs font-semibold uppercase tracking-[0.2em] self-start text-left">
                            Gallery
                        </h3>

                        {/* Big Image */}
                        <div
                            ref={mainImageRef}
                            className="relative aspect-[2.2106] md:h-[50vh] w-full flex items-start justify-center overflow-y-scroll rounded-xl border border-[#bac4b8] bg-[#bac4b8] no-scrollbar"
                        >
                            {activeImageSrc ? (
                                <img
                                    src={activeImageSrc}
                                    alt={`${project.title} screenshot ${activeImageIndex + 1}`}
                                    className="w-full h-auto object-top"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-xs md:text-sm">
                                    Screenshots coming soon
                                </div>
                            )}
                        </div>

                        {/* Thumbnails */}
                        <div className="w-full">
                            {hasImages ? (
                                <div
                                    onWheel={handleWheelScroll}
                                    className="
                                        flex flex-nowrap justify-start items-center gap-4 
                                        overflow-x-auto overflow-y-hidden 
                                        px-4 no-scrollbar scroll-smooth
                                    "
                                >
                                    {project.images.map((src, idx) => {
                                        const isActive = idx === activeImageIndex;
                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveImageIndex(idx)}
                                                className={`
                                                    relative flex-shrink-0 overflow-hidden rounded-lg border transition duration-200 ease-out
                                                    ${isActive
                                                        ? "border-[#bac4b8] ring-2 ring-[#bac4b8] scale-[1.05] shadow-lg shadow-[#bac4b8]"
                                                        : "border-[#bac4b8] opacity-60 hover:opacity-100 hover:border-[#bac4b8] hover:scale-105"
                                                    }
                                                `}
                                            >
                                                <img
                                                    src={src}
                                                    alt=""
                                                    className={`
                                                        h-14 w-20 md:h-20 md:w-32 object-cover object-top
                                                        ${isActive ? "" : "grayscale-[0.3]"}
                                                    `}
                                                />
                                                {isActive && (
                                                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#bac4b8]" />
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-[#bac4b8] p-4 text-center text-xs md:text-sm">
                                    No images available
                                </div>
                            )}
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default ProjectPage;
