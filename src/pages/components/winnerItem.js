import React from 'react';

function WinnerItem({ photo, gamer, place, status }) {
    return (
        <div className='py-4 font-lato font-[600] text-new-color border-b-[3px] border-gray-100'>
            <div className='flex flex-row'>
                <div className='flex flex-row items-center gap-4 w-45vw'>
                    <img className='w-[2.5rem] h-[2.5rem] rounded-full' src={photo} alt='photo' />
                    <p>{gamer}</p>
                </div>
                <div className='flex flex-col align-center justify-center text-center w-[2.5rem] '>
                    <p>{place}</p>
                    <img className='w-[8px] mx-auto' src={status} alt='status' />
                </div>
            </div>
        </div>
    );
}

export default WinnerItem;