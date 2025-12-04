import React from "react";
import About from "../components/MainPage/About";
import Links from "../components/MainPage/Links";
import Time from "../components/MainPage/Time";
import Story from "../components/AboutPage/Story";
import NameLogo from "@/components/MainPage/NameLogo";
import Status from "@/components/AboutPage/Status";
import Achivements from "@/components/AboutPage/Achivements";
import Designation from "@/components/MainPage/Designation";
import Skiils from "@/components/AboutPage/Skiils";
import Education from "@/components/AboutPage/Education";
import Showcase from "@/components/AboutPage/Showcase";
import Credits from "@/components/AboutPage/Credits";

const AboutPage = () => {
    return (
        <div className="w-screen h-screen">
            {/* ========== MOBILE / TABLET LAYOUT ========== */}
            <div className="lg:hidden min-h-screen w-full px-4 py-6 flex flex-col gap-8 overflow-y-auto">
                {/* Top row: Logo | Designation+Status | About(CLOSE) */}
                <div className="flex items-center justify-between">
                    <div className="shrink-0">
                        <NameLogo about={true} />
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <Designation />
                        <Status />
                    </div>
                    <div className="shrink-0 self-start">
                        <About />
                    </div>
                </div>
                {/* Showcase row */}
                <div>
                    <Showcase />
                </div>
                {/* Journey / Highlights / Skills / Education */}
                <div className="px-8 flex flex-col gap-8">
                    <div>
                        <Story />
                    </div>
                    <div>
                        <Skiils />
                    </div>
                    <div>
                        <Achivements />
                    </div>
                    <div>
                        <Education />
                    </div>
                </div>
                {/* Bottom row: Credits | Time | Links */}
                <div className="flex items-stretch justify-center gap-4">
                    <div className="flex-1 flex flex-col justify-between">
                        <Time />
                        <Credits />
                    </div>
                    <div className="flex-1 flex items-end justify-end">
                        <Links />
                    </div>
                </div>
            </div>

            {/* ========== LAPTOP / DESKTOP LAYOUT (original grid) ========== */}
            <div
                className="
                    hidden
                    lg:grid
                    grid-cols-12
                    grid-rows-12
                    h-full
                    w-full
                    px-10
                    py-8
                    gap-2
                "
            >
                {/* TOP-LEFT → NameLogo */}
                <div className="col-start-1 col-end-2 row-start-1 row-end-4">
                    <NameLogo about={true} />
                </div>

                {/* Designation + Status */}
                <div className="col-start-1 col-end-3 row-start-7 row-end-8 flex flex-col justify-between">
                    <Designation />
                    <Status />
                </div>

                {/* Showcase */}
                <div className="col-start-1 col-end-3 row-start-9 row-end-11 flex flex-col justify-center">
                    <Showcase />
                </div>

                {/* TOP-RIGHT → About */}
                <div className="col-start-10 col-end-13 row-start-1 row-end-3 flex justify-end items-start">
                    <About />
                </div>

                {/* CENTER → Story */}
                <div className="col-start-5 col-end-8 row-start-3 row-end-6 gap-3 flex flex-col">
                    <Story />
                </div>

                {/* Key Highlights */}
                <div className="col-start-5 col-end-8 row-start-7 row-end-11 gap-3 flex flex-col">
                    <Achivements />
                </div>

                {/* Skills */}
                <div className="col-start-9 col-end-12 row-start-3 row-end-6 gap-3 flex flex-col">
                    <Skiils />
                </div>

                {/* Education */}
                <div className="col-start-9 col-end-12 row-start-7 row-end-11 gap-3 flex flex-col">
                    <Education />
                </div>

                {/* BOTTOM-RIGHT → Links */}
                <div className="col-start-9 col-end-13 row-start-9 row-end-13 flex items-end justify-end">
                    <Links />
                </div>

                {/* BOTTOM-LEFT → Credits */}
                <div className="col-start-1 col-end-5 row-start-12 row-end-13 flex flex-col items-start justify-center">
                    <Credits />
                </div>

                {/* BOTTOM-CENTER → Time */}
                <div className="col-start-5 col-end-9 row-start-11 row-end-13 flex items-end justify-center">
                    <Time />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
