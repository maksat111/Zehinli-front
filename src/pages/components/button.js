import React from 'react';

const DownloadButton = ({ icon, alt }) => {
    return (
        <div className='flex bg-white cursor-pointer active:opacity-50 transition-100 shadow-new align-center rounded-xl w-[100%] w-[6.5rem] h-[3.5rem] px-3 py-4 sm:w-[10rem] sm:h-[4rem] sm:px-4 lg:py-4 lg:px-4 md:px-6 lg:w-[11vw] '>
            <img src={icon} alt={alt} />
        </div>
    );
}

export default DownloadButton;