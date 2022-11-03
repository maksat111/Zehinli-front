import { React, useState } from 'react';
import Logo from '../components/logo';
import arrowDown from '../../img/arrow-down.png';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState({
        text: "TM",
        index: 1,
    });

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleChoose = (item) => {
        setCurrentLanguage(item);
        setOpen(false)
    }

    const languageData = [
        {
            text: "TM",
            index: 1,
        },
        {
            text: "RU",
            index: 2,
        },
        {
            text: "EN",
            index: 3,
        },
    ]
    return (
        <>
            <nav className='flex flex-wrap justify-between mb-4 h-10vh w-full mb-0'>
                <div className='flex flex-wrap items-center'>
                    <Logo />
                    <div>
                        <a className='mr-3vw  font-poppins font-medium text-new-color hover:text-customGrey' href='#about'>Bäsleşik barada</a>
                        <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href='#prizes'>Artykmaçlyklary</a>
                        <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href='#download'>Ýüklemek</a>
                    </div>
                </div>
                <button className='inline-flex flex-row items-center text-new-color' onClick={handleOpen} >{currentLanguage.text} <img className='ml-[0.8vw]' src={arrowDown} alt='arrow down' /></button>
            </nav >
            <div className={`flex flex-col absolute bg-white py-3 px-2 rounded-lg z-2 align-center right-4vw top-[10vh] shadow-icons ${open ? '' : 'hidden'}`}>
                {languageData.map(item => {
                    if (item.index !== currentLanguage.index) {
                        return <p key={item.index} className='cursor-pointer py-1 px-5 hover:bg-gray-100 rounded-lg' index={item.index} onClick={() => handleChoose(item)}>{item.text}</p>
                    }
                })}
            </div>
        </>
    );
}

export default Navbar;