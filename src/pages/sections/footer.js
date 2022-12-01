import { React, useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../../context/context';
import Logo from '../components/logo';
import FooterItem from '../components/footerItem';
import instagram from '../../img/instagram.png';
import call from '../../img/call.png';
import sms from '../../img/sms.png';
import tp from '../../img/tp.png';
import algap from '../../img/algap.png';

const Footer = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const content = {
        items: [
            {
                tm: 'Biz barada',
                en: 'About us',
                ru: 'О нас',
            },
            {
                tm: 'Kömek',
                en: 'Help',
                ru: 'Помощь',
            },
            {
                tm: 'Köp soralýan soraglar',
                en: 'FAQ',
                ru: 'Часто задаваемые вопросы',
            }
        ]
    }
    return (
        <motion.footer initial={{ y: 100, opacity: 0.3 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className='px-4 sm:px-6 md:px-8 lg:px-10'>
            <div className='flex flex-col gap-6 md:grid md:grid-cols-3 my-7 sm:px-6 sm:py-6 md:px-8 lg:px-10 lg:my-8vh w-80vw'>
                <Logo />
                <div>
                    {content.items.map((item) => {
                        return <FooterItem content={currentLanguage.text == 'EN' ? item.en : (currentLanguage.text == 'TM' ? item.tm : item.ru)} />
                    })}
                </div>
                <div>
                    <FooterItem icon={instagram} content={'@zehinli_turkmenportal'} />
                    <FooterItem icon={sms} content={'zehinliturkmenportal@gmail.com'} />
                    <FooterItem icon={call} content={'+993 62 23 23 46'} />
                </div>
            </div>

            <div className='flex justify-between items-center border-t-2 border-[#EBEBEB] pt-4'>
                <img className='h-12 w-12' src={tp} alt='TP' />
                <FooterItem content={'Zehin-bäsleşigi 2022'} />
                <img className='h-12 w-20' src={algap} alt='algap' />
            </div>
        </motion.footer>
    );
}

export default Footer;