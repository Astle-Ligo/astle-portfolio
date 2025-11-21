import React from 'react';
import { useNavigate } from 'react-router-dom';
import Shuffle from '@/components/ui/shadcn-io/shuffle';

const NameLogo = ({ about }) => {
    const navigate = useNavigate();

    return (
        <div className='cursor-pointer' onClick={() => navigate('/')}>
            <h1
                className={`font-[font2] tracking-[-0.05rem] leading-[0.8] font-medium ${about ? 'sm:text-4xl md:text-5xl lg:text-[9rem]' : 'text-6xl'}`}
            >

                <Shuffle
                    text="ASTLE"
                    shuffleDirection="right"
                    duration={0.5}
                    animationMode="evenodd"
                    shuffleTimes={2}
                    ease="power3.out"
                    stagger={0.05}
                    threshold={0.1}
                    triggerOnce={false}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    className="inline-block"
                    style={{
                        fontSize: 'inherit',       // ← exact same size as before
                        fontFamily: 'inherit',     // ← keeps your font-[font2]
                        lineHeight: 'inherit'      // ← keeps your leading-[0.8]
                    }}
                />

                <br />

                <Shuffle
                    text="LIGO"
                    shuffleDirection="right"
                    duration={0.5}
                    animationMode="evenodd"
                    shuffleTimes={2}
                    ease="power3.out"
                    stagger={0.05}
                    threshold={0.1}
                    triggerOnce={false}
                    triggerOnHover={true}
                    respectReducedMotion={true}
                    className="inline-block"
                    style={{
                        fontSize: 'inherit',
                        fontFamily: 'inherit',
                        lineHeight: 'inherit'
                    }}
                />

            </h1>
        </div>
    );
};

export default NameLogo;
