import React from 'react';
import { motion } from 'framer-motion';
import PrizeCard from '../components/prizes';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';
import phoneZehin from '../../img/phoneZehin.png';
import prizes from '../../img/prizes.png';


const Prizes = () => {
    return (
        <div id='prizes' className='flex flex-col items-center h-190vh lg:grid lg:grid-cols-2 lg:h-90vh'>
            <motion.div initial={{ x: -200, y: 200, scale: 0.3 }} whileInView={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className='flex h-80vh w-80vw justify-center items-center content center lg:w-[47vw]'>
                <img className='relative w-full z-1 h-[30rem] min-w-[18rem] right-[-3rem] lg:h-65vh lg:bottom-[10rem]' src={phoneZehin} alt='Phone' />
                <img className='relative w-full z-2 h-[26rem] min-w-[19rem] right-[8rem] lg:h-[60vh] lg:min-w-[20rem] lg:right-[9.5rem] lg:bottom-[1rem]' src={prizes} alt=' prizes' />
            </motion.div>
            <div className='flex flex-col justify-center items-center mx-auto px-auto items-start w-80vw lg:w-[47vw] h-80vh'>
                <motion.p initial={{ x: 200, y: 200, scale: 0 }} whileInView={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className='font-[400] font-poppins text-customGrey text-[17px]'>Bäsleşige näme üçin gatnaşmaly?</motion.p>
                <motion.h2 initial={{ x: 200, y: 200, scale: 0.3 }} whileInView={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className='font-extrabold text-center font-lato text-5xl text-new-color py-5'>Bäsleşige gatnaşyň we baýraklar gazanyň</motion.h2>
                <PrizeCard icon={icon1} prizeHeader={'Günde baýrakly ýaryş'} prizeDescription={'Her gün gymmatbahaly baýrak gazanmak — size bagly'} />
                <PrizeCard icon={icon2} prizeHeader={'Baş baýrak — telefon'} prizeDescription={'Her gunin her hepdanin, her aýyň ýeňijisi bol'} />
                <PrizeCard icon={icon3} prizeHeader={'Dostuňyz bilen bäsleşiň'} prizeDescription={'Dostlaryňyzy çagyryň we olar bilen ýaryşyň'} />
            </div>
        </div>
    );
}

export default Prizes;