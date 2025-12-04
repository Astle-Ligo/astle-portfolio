// MainPage.jsx
import React from 'react';
import NameLogo from '../components/MainPage/NameLogo';
import Designation from '../components/MainPage/Designation';
import Time from '../components/MainPage/Time';
import Links from '../components/MainPage/Links';
import About from '../components/MainPage/About';
import Status from '@/components/AboutPage/Status';
import ProjectSlide from '../components/MainPage/ProjectSlide'; // ✅ added

const MainPage = () => {
    return (
        <main
            className="
                grid
                grid-cols-12
                grid-rows-12
                h-screen
                w-screen
                px-10
                py-8
            "
        >
            {/* TOP-LEFT → NameLogo */}
            <div className="col-start-1 col-end-4 row-start-1 row-end-4 flex items-start">
                <NameLogo />
            </div>

            {/* TOP-RIGHT → About */}
            <div className="col-start-10 col-end-13 row-start-1 row-end-3 flex items-start justify-end">
                <About />
            </div>

            {/* ⭐ NEW: Projects rail – center to right, can overflow page */}
            <div className="col-start-1 col-end-13 row-start-3 row-end-11 flex items-center justify-center ">
                <ProjectSlide />
            </div>

            {/* BOTTOM-LEFT → Designation */}
            <div className="col-start-1 col-end-5 row-start-11 row-end-13 flex flex-col items-start justify-end">
                <Status />
                <Designation show="true" />
            </div>

            {/* BOTTOM-CENTER → Time */}
            <div className="col-start-5 col-end-9 row-start-12 row-end-13 flex items-end justify-center">
                <Time />
            </div>

            {/* BOTTOM-RIGHT → Links */}
            <div className="col-start-9 col-end-13 row-start-9 row-end-13 flex items-end justify-end">
                <Links />
            </div>
        </main>
    );
};

export default MainPage;
