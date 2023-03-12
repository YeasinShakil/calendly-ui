import React from 'react';
import { AiFillCaretRight } from "react-icons/ai"
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    return (
        <div className='w-[100vw] h-[100vh] sm:py-[10vh] py-8 px-5 '>
            <div className=' w-[100vw] lg:max-w-[70vw] lg:min-h-[80vh] md:max-w-[80vw] md:min-h-[50vh] sm:mx-auto sm:rounded-xl sm:shadow-lg sm:border-2 relative'>
                <div className='flex flex-col justify-center items-center px-10 text-center max-w-[400px] mx-auto'>
                    <h1 className='text-2xl font-medium text-gray-500 mb-10 mt-4'>Bitbytesoft oy</h1>
                    <p className='text-gray-400 text-sm'>Welcome to my scheduling page. Please follow the instructions to add an event to my calender</p>
                </div>
                <Link to='/calender'>
                    <div className='sm:w-[350px] sm:h-[200px] sm:ml-[100px] mt-[40px] p-6 flex relative border-t-2 hover:bg-slate-200 cursor-pointer'>
                        <div className=' h-6 w-6 mr-4 bg-violet-600 rounded-full'></div>
                        <div className='flex items-center h-6'>
                            <h2 className='text-xl font-medium'>30 Minute Meeting</h2>
                            <AiFillCaretRight className=' text-xl absolute right-4' />
                        </div>
                    </div>
                </Link>
                <div className=' text-center pt-9 sm:absolute sm:bottom-5 sm:left-4 cursor-pointer'>
                    <p className=' text-blue-500'>Cookie settings</p>
                </div>
            </div>
        </div>
       
    );
};

export default Home;