import React from 'react';
import { motion } from 'framer-motion';
import appStore from '../../img/appStore.png';
import googlePlay from '../../img/googlePlay.png';
import barcode from '../../img/barcode.png';
import phone from '../../img/phone.png';
import prizes from '../../img/prizes.png';
import DownloadButton from '../components/button';
import { widthResizer } from '../utils/sizeTracker';

const Welcome = () => {
    widthResizer()
    return (
        <div className='container sm:flex sm:flex-col lg:flex-row h-fit-content w-[94vw] lg:h-[87vh]'>
            {/* Left side  */}
            <div className='flex flex-col lg:w-[48vw]'>
                <div className='flex flex-col text-center align-center justify-center h-50vh lg:h-70vh lg:mt-[80px]'>
                    <motion.h1 initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className='uppercase font-ubuntu h-auto font-extrabold text-[35px] sm:text-[45px] sm:w-[92vw] lg:w-50vw text-new-color mb-[-10px]'>Zehinli Bäsleşik</motion.h1>
                    <motion.h2 initial={{ x: -150 }} animate={{ x: 0 }} transition={{ duration: 0.7 }} className='font-extrabold font-ubuntu h-auto tracking-wide sm:w-90vw text-[18px] sm:text-[23px] lg:w-50vw md:text-[27px] text-new-color mb-[50px]'>zehiniňi artdyr we baýraklar gazan!</motion.h2>
                    <motion.p initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 0.9 }} className='text-new-color px-4 text-[16px] h-auto w-90vw sm:text-[20px] lg:w-30vw mb-[50px]'>Özüňize islendik amatly bolan ýerde bilim başarnyklaryňyzy kämilleşdiriň we islän baýragyňyzy gazanyň!</motion.p>
                    <motion.div initial={{ x: -200 }} animate={{ x: 0 }} transition={{ duration: 1.1 }} className='flex flex-row w-90vw justify-around h-auto content-center lg:gap-8 lg:justify-start '>
                        <DownloadButton icon={googlePlay} alt={'Google Play'} />
                        <DownloadButton icon={appStore} alt={'App Store'} />
                        <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='relative lg:hidden h-[3.5rem] w-[3rem] sm:h-[4rem] sm:w-[4rem] w-10vh' src={barcode} alt='Barcode' />
                    </motion.div>
                </div>
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='hidden lg:flex lg:relative h-10vh w-10vh mb-[50px]' src={barcode} alt='Barcode' />
            </div>
            {/* Right side*/}
            <div className='container flex content-center mx-auto justify-center pl-16 w-[90vw] sm:pl-16 items-end lg:w-[48vw] lg:pl-0 lg:h-[80vh]'>
                <div className='flex rounded-[40px] mt-20 w-[60%] min-w-[13rem] max-w-[17rem] h-[21rem] bg-gradient-to-r from-[#4F9AEB] to-[#007BFF] h-[19rem] sm:w-[65%] md:h-[22rem] md:max-w-[22rem] lg:h-[28rem] lg:min-w-[25rem]'>
                    <motion.img
                        initial={{ x: -200, y: -500, scale: 0.3 }} animate={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.5 }}
                        className='z-1 inline-block relative w-[100%] h-[25rem] min-w-[15rem] max-w-[23rem] sm:min-w-[16rem] right-[7.5rem] bottom-[5rem] md:min-w-[18rem] md:h-[28rem] md:bottom-[6rem] lg:bottom-[18vh] lg:right-[10rem] lg:min-w-[22rem] lg:h-[35rem]'
                        src={phone}
                        alt='Phone'
                    />
                    <motion.img
                        initial={{ x: -200, y: -100, scale: 0 }} animate={{ x: 0, y: 0, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }}
                        className='z-2 inline-block relative right-[16rem] w-[100%] min-w-[14rem] max-w-[20rem] h-[19rem] sm:min-w-[15rem] sm:h-[20rem] md:min-w-[20rem] md:right-[18rem] lg:h-[25rem] lg:right-[20rem] lg:top-1vh'
                        src={prizes}
                        alt='Prizes'
                    />
                </div>
            </div>
        </div >
    );
}

export default Welcome;