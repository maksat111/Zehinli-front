import React from 'react';
import { motion } from 'framer-motion';

const StepCard = ({ icon, stepHeader, stepDescription, rocket, duration }) => {
    return (
        <motion.div initial={{ y: 200 }} whileInView={{ y: 0 }} transition={{ duration }} className='bg-white w-[18rem] h-[13rem] shadow-new2 rounded-[20px] px-6 sm:w-[22rem] sm:h-[16rem] sm:px-8 lg:w-[23rem]'>
            <img className={`relative h-[8.5rem] mt-[-3rem] ${rocket ? 'left-[7rem]' : 'left-[5.5rem]'} sm:h-[10rem]`} src={icon} alt='Rocket' />
            <div className='flex flex-wrap justify-items-end pt-[20px]'>
                <h2 className='font-lato text-[16px] text-new-color font-[600] pb-[10px] sm:text-[18px]'>{stepHeader}</h2>
                <p className='font-lato text-[16px] text-new-color font-[500] sm:text-[18px]'>{stepDescription}</p>
            </div>
        </motion.div>
    )
}

export default StepCard;