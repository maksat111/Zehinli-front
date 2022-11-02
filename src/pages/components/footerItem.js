import React from 'react';

const FooterItem = ({ icon, content }) => {
    return (
        <div className='flex flex-row gap-4 items-center my-3'>
            {icon ? <img className='h-5' src={icon} alt={content} /> : <></>}
            <p className='font-poppins font-[400] text-new-color text-[14px]'>{content}</p>
        </div >
    );
}

export default FooterItem;