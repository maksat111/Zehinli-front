import React from 'react';

const Prizes = ({ icon, prizeHeader, prizeDescription }) => {
    return (
        <div className='flex flex-wrap gap-8'>
            <div className='flex justify-center content-denter px-5 py-5 bg-white w-16 h-16 rounded-xl shadow-icons'>
                <img src={icon} alt='Icon1' />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-new-color text-bold'>{prizeHeader}</h2>
                <p className=''>{prizeDescription}</p>
            </div>
        </div>
    )
}

export default Prizes;