// MainPage.jsx
import React, { useState } from "react";
import NameLogo from "../components/MainPage/NameLogo";
import Designation from "../components/MainPage/Designation";
import Time from "../components/MainPage/Time";
import Links from "../components/MainPage/Links";
import About from "../components/MainPage/About";
import Status from "@/components/AboutPage/Status";
import ProjectSlide from "../components/MainPage/ProjectSlide";
import LoadingScreen from "../components/MainPage/LoadingScreen";

const MainPage = () => {
    // 1️⃣ Read sessionStorage once, synchronously, for initial state
    const [hasLoadedOnce] = useState(() => {
        if (typeof window === "undefined") return false;
        try {
            return sessionStorage.getItem("thumbnailsLoaded") === "true";
        } catch {
            return false;
        }
    });

    // 2️⃣ Derive initial values from that
    const [progress, setProgress] = useState(hasLoadedOnce ? 100 : 0);
    const [isReady, setIsReady] = useState(hasLoadedOnce);
    const [showLoader, setShowLoader] = useState(!hasLoadedOnce);

    // Called by ProjectSlide as thumbnails load
    const handleProgress = (value) => {
        // If we've already fully loaded once in this tab, ignore
        if (hasLoadedOnce || isReady) return;

        const clamped = Math.min(Math.max(value, 0), 100);
        setProgress(clamped);
    };

    // Called by LoadingScreen when it has visually reached 100
    const handleLoaderComplete = () => {
        setIsReady(true);
        setShowLoader(false);

        try {
            sessionStorage.setItem("thumbnailsLoaded", "true");
        } catch (e) { }
    };

    return (
        <>
            {/* Loader ONLY before the very first full image load in this tab */}
            {showLoader && (
                <LoadingScreen
                    progress={progress}
                    onComplete={handleLoaderComplete}
                />
            )}

            {/* Main layout is always mounted; just fades in once ready */}
            <main
                className={`
                    grid grid-cols-12 grid-rows-12
                    h-screen w-screen px-10 py-8
                    transition-opacity duration-700
                    ${isReady ? "opacity-100" : "opacity-0"}
                `}
            >
                {/* TOP-LEFT → NameLogo */}
                <div className="col-start-1 col-end-4 row-start-1 row-end-4 flex items-start">
                    <NameLogo isReady={isReady} />
                </div>

                {/* TOP-RIGHT → About */}
                <div className="col-start-10 col-end-13 row-start-1 row-end-3 flex items-start justify-end">
                    <About isReady={isReady} />
                </div>

                {/* CENTER → Projects rail */}
                <div className="col-start-1 col-end-13 row-start-3 row-end-11 flex items-center justify-center">
                    <ProjectSlide onProgress={handleProgress} />
                </div>

                {/* BOTTOM-LEFT → Status + Designation */}
                <div className="col-start-1 col-end-5 row-start-11 row-end-13 flex flex-col items-start justify-end">
                    <Status isReady={isReady} />
                    <Designation show="true" isReady={isReady} />
                </div>

                {/* BOTTOM-CENTER → Time */}
                <div className="col-start-5 col-end-9 row-start-12 row-end-13 flex items-end justify-center">
                    <Time isReady={isReady} />
                </div>

                {/* BOTTOM-RIGHT → Links */}
                <div className="col-start-9 col-end-13 row-start-9 row-end-13 flex items-end justify-end">
                    <Links isReady={isReady} />
                </div>
            </main>
        </>
    );
};

export default MainPage;
