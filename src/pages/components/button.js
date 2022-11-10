import React from 'react';

const DownloadButton = ({ icon, alt }) => {
    return (
        <div className='flex bg-white shadow-new align-center rounded-xl w-[8rem] h-[3.5rem] px-3 py-4 md:py-4 md:px-6 md:w-[11vw]'>
            <img src={icon} alt={alt} />
        </div>
    );
}

export default DownloadButton;