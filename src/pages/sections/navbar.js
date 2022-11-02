import React from 'react';
import Logo from '../components/logo';
import arrowDown from '../../img/arrow-down.png';

const Navbar = () => {
    return (
        <nav className='flex flex-wrap justify-between mb-4 h-10vh w-full mb-0'>
            <div className='flex flex-wrap items-center'>
                <Logo />
                <div>
                    <a className='mr-3vw  font-poppins font-medium text-new-color hover:text-customGrey' href='#about'>Bäsleşik barada</a>
                    <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href='#prizes'>Artykmaçlyklary</a>
                    <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href='#download'>Ýüklemek</a>
                </div>
            </div>
            <button className='flex flex-wrap items-center text-new-color'>TM <img className='mx-[0.8vw]' src={arrowDown} alt='arrow down' /></button>
        </nav>
    );
}

export default Navbar;