import React from 'react';
import { motion } from 'framer-motion';
import StepCard from '../components/steps';
import raketa from '../../img/raketa.png';
import question from '../../img/question.png';
import kubok from '../../img/kubok.png';
import icon1 from '../../img/1.png';
import icon2 from '../../img/2.png';

const Steps = () => {
    return (
        <div id='about' className='h-100vh'>
            <div className='flex flex-col text-center pt-[120px] pb-[140px]'>
                <motion.p initial={{ x: -500 }} whileInView={{ x: 0 }} transition={{ duration: 0.7 }} className='font-normal font-poppins text-customGrey text-new-color py-[10px]'>Bäsleşik nähili geçýär?</motion.p>
                <motion.h2 initial={{ x: -700 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='font-extrabold font-lato text-5xl text-new-color'>Oýun 3 basgançakdan durýar</motion.h2>
            </div>
            <div className='flex flex-row justify-around'>
                <StepCard icon={raketa} rocket={true} duration={0.4} stepHeader={'Bäsleşigi telefonyňa ýükle'} stepDescription={'Bir bäsleşige gatnaşmak üçin 2 tmt töleg geçmeli'} />
                {/* <img className='h-5 w-5vw' src={icon1} alt='icon1' /> */}
                <StepCard icon={question} duration={0.6} stepHeader={'Soraglara jogap ber'} stepDescription={'Soraglara dogry we tiz jogap bermäge çalyşyň'} />
                {/* <img className='h-5 w-5vw' src={icon2} alt='icon2' /> */}
                <StepCard icon={kubok} duration={0.8} stepHeader={'Baýrakly orunlara mynasyp bol'} stepDescription={'Her gün gymmatbahaly baýrak gazanmak — size bagly'} />
            </div>
        </div>
    );
}

export default Steps;