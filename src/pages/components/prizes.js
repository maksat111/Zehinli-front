import React from 'react';
import { motion } from 'framer-motion';

const PrizeCard = ({ icon, prizeHeader, prizeDescription }) => {
    return (
        <motion.div initial={{ opacity: 0.1 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='flex flex-wrap gap-8 py-4'>
            <div className='flex justify-center content-denter shadow-icons px-5 py-5 bg-white w-16 h-16 rounded-xl shadow-icons'>
                <img src={icon} alt='Icon1' />
            </div>
            <div className='flex flex-col justify-center'>
                <h2 className='text-new-color text-bold font-poppins'>{prizeHeader}</h2>
                <p className='text-new-color text-[400]'>{prizeDescription}</p>
            </div>
        </motion.div>
    )
}

export default PrizeCard;