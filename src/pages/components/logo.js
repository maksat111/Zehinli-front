import React from 'react';
import zehinLogo from '../../img/zehinLogo.png';


const Logo = () => {
    return (
        <div className='flex flex-wrap items-center mr-6vw'>
            <img className='h-7vh mr-[1.5vw]' src={zehinLogo} alt="Zehinli logo" />
            <h2 className='uppercase font-ubuntu h-full text-xl font-bold leading-4.5 text-new-color flex items-center'>Zehinli <br />bäsleşik</h2>
        </div>
    )
}

export default Logo;