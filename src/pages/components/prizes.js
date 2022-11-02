import React from 'react';

const PrizeCard = ({ icon, prizeHeader, prizeDescription }) => {
    return (
        <div className='flex flex-wrap gap-8 py-4'>
            <div className='flex justify-center content-denter px-5 py-5 bg-white w-16 h-16 rounded-xl shadow-icons'>
                <img src={icon} alt='Icon1' />
            </div>
            <div className='flex flex-col justify-center shadow-icons'>
                <h2 className='text-new-color text-bold font-poppins'>{prizeHeader}</h2>
                <p className='text-new-color text-[400]'>{prizeDescription}</p>
            </div>
        </div>
    )
}

export default PrizeCard;