import { React, useContext, useState } from 'react';
import Logo from './logo';
import arrowDown from '../../img/arrow-down.png';
import { GoThreeBars, GoX } from "react-icons/go";
import { LanguageContext } from '../../context/context';
// import Modal from './Modal';
import { Modal } from 'antd';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    const [modal, setModal] = useState(false);
    const { currentLanguage, ChangeLanguage } = useContext(LanguageContext);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleChoose = (e) => {
        const text = e.target.getAttribute('name');
        const index = parseInt(e.target.getAttribute('index'));
        ChangeLanguage({ text, index });
        setOpen(false)
    }

    const handleOpen = () => {
        setOpen(!open);
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

    const navbarData = {
        navbarItem: [
            {
                id: 1,
                tm: 'Ýeňijiler',
                ru: 'Победители',
                en: 'Winners',
                href: '/winners'
            },
            {
                id: 2,
                tm: 'Bäsleşik barada',
                ru: 'О конкурсе',
                en: 'About the competition',
                href: '/#about'
            },
            {
                id: 3,
                tm: 'Artykmaçlyklary',
                ru: 'Эксцессы',
                en: 'Excesses',
                href: '/#prizes'
            },
            {
                id: 4,
                tm: 'Ýüklemek',
                ru: 'Загрузить',
                en: 'Download',
                href: '/#download'
            },
        ],
        signIn: {
            tm: 'Ulgama gir',
            en: 'Sign In',
            ru: 'Войти'
        },
        register: {
            tm: 'Hasap al',
            en: 'Register',
            ru: 'Зарегистрироваться'
        }
    };

    const handleHamburger = () => {
        setHamburger(!hamburger);
    }

    const handleModal = (state) => {
        setModal(state);
    }

    return (
        <>
            <nav className='flex flex-wrap justify-between items-center px-4 py-4 sm:px-6 sm:py-6 md:px-8 lg:px-10 h-10vh w-full'>
                <div className='flex flex-wrap items-center'>
                    <Logo />
                    <div className='hidden md:flex'>
                        {
                            navbarData.navbarItem.map((item) => {
                                return <a className='mr-3vw font-poppins font-medium text-new-color hover:text-customGrey' href={item.href} key={item.id}>
                                    {currentLanguage.text == 'TM' ? item.tm : (currentLanguage.text == 'EN' ? item.en : item.ru)}
                                </a>
                            })
                        }

                    </div>
                </div>
                <div className='flex flex-row gap-3 items-center'>
                    <div className='flex flex-col'>
                        <button className='flex inline-flex flex-row ml-8 font-poppins font-medium items-center text-new-color' onClick={handleOpen} >{currentLanguage.text} <img className='ml-[0.8vw]' src={arrowDown} alt='arrow down' /></button>
                        <div className={`flex flex-col absolute bg-white py-3 px-2 mt-7 mr-5 rounded-lg z-2 align-center shadow-icons ${open ? '' : 'hidden'}`}>
                            {languageData.map(item => {
                                if (item.index !== currentLanguage.index) {
                                    return <p key={item.index} className='cursor-pointer py-1 px-5 hover:bg-gray-100 rounded-lg' index={item.index} name={item.text} onClick={handleChoose}>{item.text}</p>
                                }
                            })}
                        </div>
                    </div>
                    {/* sign in */}
                    <button className='font-poppins cursor-pointer font-medium text-new-color'>
                        {currentLanguage.text == 'TM' ? navbarData.signIn.tm : (currentLanguage.text == 'EN' ? navbarData.signIn.en : navbarData.signIn.ru)}
                    </button>

                    {/* sign up */}
                    <button
                        className='font-poppins cursor-pointer font-medium text-white rounded-[10px] py-1 px-3 bg-gradient-to-r from-[#4F9AEB] to-[#007BFF]' onClick={showModal}>
                        {currentLanguage.text == 'TM' ? navbarData.register.tm : (currentLanguage.text == 'EN' ? navbarData.register.en : navbarData.register.ru)}
                    </button>

                    <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>

                    </Modal>

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