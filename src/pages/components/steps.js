import React from 'react';

const StepCard = ({ icon, stepHeader, stepDescription, rocket }) => {
    return (
        <div className='bg-white w-[20vw] h-[30vh] shadow-new2 rounded-[20px] px-6'>
            <img className={`relative h-[19vh] mt-[-7vh] ${rocket ? 'left-9vw' : 'left-7vw'}`} src={icon} alt='Rocket' />
            <div className='flex flex-wrap justify-items-end pt-[20px]'>
                <h2 className='font-lato text-new-color font-[600] pb-[10px]'>{stepHeader}</h2>
                <p>{stepDescription}</p>
            </div>
        </div>
    )
}

export default StepCard;