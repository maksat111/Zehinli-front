import React from 'react';
import { AiOutlineRight } from 'react-icons/ai'

function WinnerItem({ photo, gamer, place, status }) {
    return (
        // <div className='py-4 font-lato font-[600] text-new-color border-b-[3px] border-gray-100'>
        <div className='flex flex-row justify-between  py-4 font-lato font-[600] text-new-color border-b-[3px] border-gray-100 '>
            <div className='flex flex-row items-center gap-4 w-[42vw]'>
                <img className='w-[2.5rem] h-[2.5rem] rounded-full' src={photo} alt='photo' />
                <p>{gamer}</p>
            </div>
            <div className='flex flex-col align-center gap-1 justify-center text-center w-[2.5rem] '>
                <p>{place}</p>
                <img className='w-[8px] mx-auto' src={status} alt='status' />
            </div>
            <div className='flex content-center my-auto'>
                <AiOutlineRight className='text-customGrey' />
            </div>
        </div>
        // </div>
    );
}

export default WinnerItem;