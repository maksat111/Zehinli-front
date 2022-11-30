import React from 'react';
import { motion } from 'framer-motion';
import phone from '../../img/phone.png';
import leaderboard from '../../img/leaderboard.png';
import DownloadButton from '../components/button';
import googlePlay from '../../img/googlePlay.png';
import appStore from '../../img/appStore.png';

const Download = () => {
    return (
        <div id='download' className='flex items-center pt-[3rem] w-90vw lg:h-80vh'>
            <motion.div initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} className='bg-gradient-to-r pt-20 pb-0 px-7 from-[#4F9AEB] to-[#007BFF] rounded-[20px] flex flex-row-reverse justify-center w-[90vw] lg:pt-5 lg:grid lg:grid-cols-2 lg:h-[50vh]'>
                <motion.div initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration: 0.7 }} className='z-1 flex flex-col items-center justify-center lg:h-50vh w-90vw lg:w-[47vw]'>
                    <h2 className='text-[#F3F8FF] w-70vw pt-[7rem] text-center text-[40px] font-[800] sm:pt-[12rem] lg:pt-0 lg:text-[45px] lg:w-40vw lg:font-[800] font-lato'>Taýýarmy? Zehinli Bäsleşigi dessine ýükle</h2>
                    <div className='flex flex-row justify-around w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[30rem] lx:[35rem] p-7'>
                        <DownloadButton icon={googlePlay} alt={'Google Play'} />
                        <DownloadButton icon={appStore} alt={'App Store'} />
                    </div>
                </motion.div>
                <div className='z-2 absolute right-[0vh] flex lg:gap-[-100px] justify-center h-50vh w-90vw lg:w-[47vw]'>
                    <motion.img initial={{ rotate: 45, scale: 1.6, y: 200, x: -200, display: 'hidden' }} whileInView={{ rotate: 0, y: 0, x: 0, scale: 1, display: 'flex' }} transition={{ duration: 0.8 }} className='relative min-w-[15rem] h-[23rem] bottom-[16rem] sm:min-w-[18rem] sm:h-[27rem] md:min-w-[20rem] md:h-[30rem] md:bottom-[18rem] lg:bottom-[9rem] lg:h-[32rem] lg:min-w-[21rem]' src={phone} alt='Phone' />
                    <motion.img initial={{ rotate: -45, scale: 1.6, y: 200, x: 200, display: 'hidden' }} whileInView={{ rotate: 0, y: 0, x: 0, scale: 1, display: 'flex' }} transition={{ duration: 0.8 }} className='relative z-2 min-w-[15rem] right-[5rem] bottom-[12.5rem] h-[23rem] sm:min-w-[18rem] sm:h-[27rem] md:min-w-[20rem] md:h-[30rem] md:bottom-[14.5rem] lg:h-[32rem] lg:bottom-[1rem] lg:min-w-[21rem]' src={leaderboard} alt='Phone' />
                </div>
            </motion.div>
        </div>
    );
}

export default Download;