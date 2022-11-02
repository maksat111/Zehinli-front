import React from 'react';
import { motion } from 'framer-motion';
import phone from '../../img/phone.png';
import DownloadButton from '../components/button';
import googlePlay from '../../img/googlePlay.png';
import appStore from '../../img/appStore.png';

const Download = () => {
    return (
        <div id='download' className='flex items-center h-80vh'>
            <motion.div initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration: 0.5 }} className='grid grid-cols-2 bg-gradient-to-r from-[#4F9AEB] to-[#007BFF] rounded-[20px] h-[50vh]'>
                <motion.div initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration: 0.7 }} className='flex flex-col items-center justify-center h-50vh w-[47vw]'>
                    <h2 className='text-[#F3F8FF] text-[45px] font-[800] font-lato'>Taýýarmy?<br />Zehinli Bäsleşigi <br /> dessine ýükle</h2>
                    <div className='flex flex-wrap gap-8 justify-start p-7'>
                        <DownloadButton icon={googlePlay} alt={'Google Play'} />
                        <DownloadButton icon={appStore} alt={'App Store'} />
                    </div>
                </motion.div>
                <div className='flex flex-row h-50vh w-[47vw]'>
                    <motion.img initial={{ rotate: 45, scale: 1.6, y: 200, x: -200 }} whileInView={{ rotate: 0, y: 0, x: 0, scale: 1 }} transition={{ duration: 0.8 }} className='relative h-[81vh] bottom-[22vh]' src={phone} alt='Phone' />
                    <motion.img initial={{ rotate: -45, scale: 1.6, y: 200, x: 200 }} whileInView={{ rotate: 0, y: 0, x: 0, scale: 1 }} transition={{ duration: 0.8 }} className='relative h-[81vh] bottom-[14vh] right-9vw' src={phone} alt='Phone' />
                </div>
            </motion.div>
        </div>
    );
}

export default Download;