import React, { useState } from 'react';

const Designation = () => {
    const [hover, setHover] = useState(false);

    return (
        <div className='absolute bottom-0 left-0 p-12'>
            <h1
                className='font-[font1] text-sm sm:text-sm md:text-md uppercase font-black cursor-default'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {hover ? "Sorry :( , I can't hack your instagram !!" : "full stack developer"}
            </h1>
        </div>
    );
};

export default Designation;
