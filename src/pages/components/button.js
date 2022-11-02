import React from 'react';

const DownloadButton = ({ icon, alt }) => {
    return (
        <div className='bg-white shadow-new rounded-xl py-4 px-6 w-[11vw]'>
            <img src={icon} alt={alt} />
        </div>
    );
}

export default DownloadButton;