import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../components/logo';
import FooterItem from '../components/footerItem';
import instagram from '../../img/instagram.png';
import call from '../../img/call.png';
import sms from '../../img/sms.png';
import tp from '../../img/tp.png';
import algap from '../../img/algap.png';

const Footer = () => {
    return (
        <motion.footer initial={{ x: -1000 }}
            animate={{ x: [20, 50, 0, -70, 40] }}>
            <div className='grid grid-cols-3 my-8vh w-80vw'>
                <Logo />
                <div>
                    <FooterItem content={'Biz barada'} />
                    <FooterItem content={'Kömek'} />
                    <FooterItem content={'FAQ'} />
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