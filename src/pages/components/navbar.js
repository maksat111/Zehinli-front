import { React, useContext, useState } from 'react';
import Logo from './logo';
import arrowDown from '../../img/arrow-down.png';
import { GoThreeBars, GoX } from "react-icons/go";
import { LanguageContext } from '../../context/context';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleChoose = (e) => {
        const text = e.target.getAttribute('name');
        const index = parseInt(e.target.getAttribute('index'));
        setCurrentLanguage({ text, index });
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

    const navbarData = [
        {
            tm: 'Ýeňijiler',
            ru: 'Победители',
            en: 'Winners',
            href: '/winners'
        },
        {
            tm: 'Bäsleşik barada',
            ru: 'О конкурсе',
            en: 'About the competition',
            href: '/#about'
        },
        {
            tm: 'Artykmaçlyklary',
            ru: 'Эксцессы',
            en: 'Excesses',
            href: '/#prizes'
        },
        {
            tm: 'Ýüklemek',
            ru: 'Загрузить',
            en: 'Download',
            href: '/#download'
        },
    ];

    const handleHamburger = () => {
        setHamburger(!hamburger);
    }

    return (
        <>
            <nav className='flex flex-wrap justify-between items-center px-4 py-4 sm:px-6 sm:py-6 md:px-8 lg:px-10 h-10vh w-full'>
                <div className='flex flex-wrap items-center'>
                    <Logo />
                    <div className='hidden md:flex'>
                        {/* <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href='/winners'>Ýeňijiler</a>
                        <a className='mr-3vw  font-poppins font-medium text-new-color hover:text-customGrey' href='/#about'>Bäsleşik barada</a>
                        <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href='/#prizes'>Artykmaçlyklary</a> */}

                        {navbarData.map((item) => {
                            return <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href={item.href}>{currentLanguage.text == 'TM' ? item.tm : (currentLanguage.text == 'EN' ? item.en : item.ru)}</a>
                        })}

                    </div>
                </div>
                <div className='flex flex-row gap-8'>
                    <div className='flex flex-col'>
                        <button className='flex inline-flex flex-row ml-8 items-center text-new-color' onClick={handleOpen} >{currentLanguage.text} <img className='ml-[0.8vw]' src={arrowDown} alt='arrow down' /></button>
                        <div className={`flex flex-col absolute bg-white py-3 px-2 mt-7 mr-5 rounded-lg z-2 align-center shadow-icons ${open ? '' : 'hidden'}`}>
                            {languageData.map(item => {
                                if (item.index !== currentLanguage.index) {
                                    return <p key={item.index} className='cursor-pointer py-1 px-5 hover:bg-gray-100 rounded-lg' index={item.index} name={item.text} onClick={handleChoose}>{item.text}</p>
                                }
                            })}
                        </div>
                    </div>

                    {!hamburger ? <GoThreeBars className={'md:hidden text-new-color'} size={'30px'} color={'#200E32'} onClick={handleHamburger} /> : <GoX className='md:hidden' size={'30px'} color='#200E32' onClick={handleHamburger} />}
                </div>
            </nav >
            <div className={`flex flex-col transition-opacity absolute w-[25rem] bg-white text-center right-0 py-6 gap-2 md:hidden ${hamburger ? '' : 'hidden'}`}>
                <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href='/#about'>Bäsleşik barada</a>
                <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href='#prizes'>Artykmaçlyklary</a>
                <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href='#download'>Ýüklemek</a>
            </div>

        </>
    );
}

export default Navbar;