import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiFillClockCircle } from 'react-icons/ai';

const CalenderRight = () => {
    return (
        <div className='p-6 flex flex-col'>
            <div className=' w-10 h-10 rounded-full border flex justify-center items-center text-2xl text-blue-500 cursor-pointer hover:bg-blue-200'>
                <AiOutlineArrowLeft className=' font-bold' />
            </div>
            <p className='mt-10 font-medium text-gray-400 text-center lg:text-left '>Bitbytesoft Oy</p>
            <h3 className='mt-3 text-2xl font-medium text-center lg:text-left '>30 Minute Meeting</h3>
            <div className='mt-8 flex items-center justify-center lg:flex-1 text-gray-400'>
                <AiFillClockCircle />
                <p className=' ml-2 font-medium'>30 min</p>
            </div>
            <div className='cursor-pointer absolute sm:bottom-4 sm:left-5 left-[35%] bottom-[-15px] text-center right-50'>
                <p className=' text-blue-500'>Cookie settings</p>
            </div>
        </div>
    );
};

export default CalenderRight;