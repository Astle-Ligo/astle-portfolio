import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const About = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAboutPage = location.pathname === '/about';

    useEffect(() => {
        gsap.fromTo(
            '.about-title',
            { x: 40, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power3.out'
            }
        );
    }, [isAboutPage]); // Depend on page change for animation

    return (
        <div
            className='absolute top-0 right-0 p-12 cursor-pointer'
            onClick={() => navigate(isAboutPage ? '/' : '/about')}
        >
            <h1 className='about-title font-[font1] text-xs sm:text-xs md:text-md uppercase underline decoration-2 underline-offset-4'>
                {isAboutPage ? 'close' : 'about'}
            </h1>
        </div>
    );
};

export default About;
