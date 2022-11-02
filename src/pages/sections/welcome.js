import React from 'react';
import { motion } from 'framer-motion';
import appStore from '../../img/appStore.png';
import googlePlay from '../../img/googlePlay.png';
import barcode from '../../img/barcode.png';
import phone from '../../img/phone.png';
import prizes from '../../img/prizes.png';
import DownloadButton from '../components/button';

const Welcome = () => {
    return (
        <div className='container flex flex-row w-full h-[87vh]'>
            {/* Left side  */}
            <div className='flex flex-col w-[48vw]'>
                <div className='flex flex-col justify-center h-70vh mt-[80px]'>
                    <motion.h1 initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className='uppercase font-ubuntu font-extrabold text-[55px] text-new-color mb-[-10px]'>Zehinli Bäsleşik</motion.h1>
                    <motion.h2 initial={{ x: -400 }} animate={{ x: 0 }} transition={{ duration: 0.7 }} className='font-extrabold font-ubuntu tracking-wide text-[27px] text-new-color mb-[50px]'>zehiniňi artdyr we baýraklar gazan!</motion.h2>
                    <motion.p initial={{ x: -500 }} animate={{ x: 0 }} transition={{ duration: 0.9 }} className='text-new-color text-[15px] w-30vw mb-[50px]'>Özüňize islendik amatly bolan ýerde bilim başarnyklaryňyzy kämilleşdiriň we islän baýragyňyzy gazanyň!</motion.p>
                    <motion.div initial={{ x: -1000 }} animate={{ x: 0 }} transition={{ duration: 1.1 }} className='flex flex-wrap gap-8 justify-start '>
                        <DownloadButton icon={googlePlay} alt={'Google Play'} />
                        <DownloadButton icon={appStore} alt={'App Store'} />
                    </motion.div>
                </div>
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='relative h-10vh w-10vh mb-[50px]' src={barcode} alt='Barcode' />
            </div>
            {/* Right side*/}
            <div className='container flex content-center justify-center items-end w-[48vw]'>
                <div className='flex rounded-[40px] bg-gradient-to-r from-[#4F9AEB] to-[#007BFF] h-[68vh] w-[33vw]'>
                    <motion.img initial={{ x: -250, y: -500, scale: 0.3 }} animate={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className='z-1 relative bottom-[19vh] right-[12vw] h-[85vh]' src={phone} alt='Phone' />
                    <motion.img initial={{ x: -300, y: -500, scale: 0.3 }} animate={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className='z-2 relative h-[60vh] right-[27vw] top-1vh' src={prizes} alt='Prizes' />
                </div>
            </div>
        </div >
    );
}

export default Welcome;