import React from 'react';

const Steps = ({ icon, stepHeader, stepDescription }) => {
    return (
        <div className='bg-white w-1/4 h-1/3 shadow-new2 rounded-xl px-8'>
            <img className='mb-1/2 h-2/3' src={icon} alt='Rocket' />
            <div className='flex flex-wrap justify-items-end'>
                <h2 className='text-new-color text-base'>{stepHeader}</h2>
                <p>{stepDescription}</p>
            </div>
        </div>
    )
}

export default Steps;