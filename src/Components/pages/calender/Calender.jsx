import React from 'react';
import CalenderLeft from './CalenderLeft';
import CalenderRight from './CalenderRight';

const Calender = () => {
    return (
        <div className=''>
            <div className=' w-[60vw] h-[80vh] mx-auto mt-20 rounded-lg mb-5  shadow-lg border-t-2 grid grid-cols-2 relative'>
            <div className='border-r border-black/50'>
                <CalenderRight></CalenderRight>
            </div>
            <div className=''>
                <CalenderLeft></CalenderLeft>
            </div>
            </div>
        </div>
    );
};

export default Calender;