import React from 'react';
import zehinLogo from '../../img/zehinLogo.png';


const Logo = () => {
    return (
        <div className='flex flex-wrap items-center'>
            <img className='h-12' src={zehinLogo} alt="Zehinli logo" />
            <h2 className='uppercase font-ubuntu h-full text-lg font-bold leading-4.5 text-new-color'>Zehinli <br />bäsleşik</h2>
        </div>
    )
}

export default Logo;