import React, { useState } from 'react';
import dayjs from 'dayjs';
import { generateDate, months } from './calender_genaret/UseCalender';
import { AiFillCaretDown, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import {BiWorld} from 'react-icons/bi'

const CalenderLeft = () => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    function cn(...classes) {
        return classes.filter(Boolean).join(" ");
    }
    const currentDate = dayjs();
    const [today, setToday] = useState(currentDate);
    

    return (
        <div className='p-6'>
            <h2 className='font-medium text-xl mb-7'>Select a Date & Time</h2>
            <div className='flex items-center justify-between'>
                <h2 className='mb-4'>{months[today.month()]}</h2>
                <div className='flex mb-4'>
                <p className=' cursor-pointer' onClick={()=> {
                    setToday(today.month(today.month()-1))
                }}><AiOutlineLeft></AiOutlineLeft></p>
                <p className=' cursor-pointer ml-5 text-blue-500' onClick={()=> {
                    setToday(today.month(today.month()+1))
                }}><AiOutlineRight></AiOutlineRight></p>
                </div>
            </div>
            <div className='grid grid-cols-7'>
                {days.map((day, index) => {
                    return (
                        <h1 className=' text-sm text-center h-10 w-10 gird place-content-center text-gray-500 select-none'>{day}</h1>
                    )
                })}
            </div>
            <div className='grid grid-cols-7'>
                {generateDate(today.month(), today.year()).map(({ date, currentMonth, today }, index) => {
                    return (
                        <div className='h-10 w-10 text-center grid place-content-center border-t'>
                            <h1 className={cn(
                                currentMonth ? "cursor-pointer hover:bg-black/70 hover:text-white transition-all" : "text-gray-400 select-none",
                                today
                                    ? "bg-red-600 text-white"
                                    : "",
                                    " w-8 h-8 rounded-full grid place-content-center "
                            )}>{date.date()}</h1>
                        </div>
                    )
                })}
            </div>
            <div>
                <p className='font-medium'>Time zone</p>
                <div className='w-[80%] h-7 flex items-center rounded-xl pl-2 hover:bg-gray-200'>
                    <p className='pr-3'><BiWorld/></p>
                    <p className=' cursor-pointer'>Asia/Dhaka (6:34pm)</p>
                   <span className='text-sm'><AiFillCaretDown/></span>
                </div>
            </div>
        </div>
    );
};

export default CalenderLeft;