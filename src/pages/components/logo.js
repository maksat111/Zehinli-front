import React from 'react';
import zehinLogo from '../../img/logo.png';


const Logo = () => {
    return (
        <div className='flex flex-wrap items-center mr-6vw'>
            <img className='h-[2.8rem] lg:h-[4rem] mr-[1.5vw] sm:h-[3rem] md:h-[3.5rem] lg:h-[3rem] xl:h-[3rem] 2xl:h-[3.5rem]' src={zehinLogo} alt="Zehinli logo" />
            {/* <h2 className='uppercase font-ubuntu h-full text-xl font-bold leading-4.5 text-new-color flex items-center'>Zehinli <br />bäsleşik</h2> */}
        </div>
    )
}

export default Logo;