import React from 'react';
import PrizeCard from '../components/prizes';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';
import phoneZehin from '../../img/phoneZehin.png';
import prizes from '../../img/prizes.png';


const Prizes = () => {
    return (
        <div id='prizes' className='grid grid-cols-2 h-90vh'>
            <div className='flex w-[47vw] h-80vh items-center'>
                <img className='absolute z-1 h-65vh' src={phoneZehin} alt='Phone' />
                <img className='relative z-2 h-[60vh] left-[3vw] bottom-4vh' src={prizes} alt=' prizes' />
            </div>
            <div className='flex flex-col justify-center items-start w-[47vw] h-80vh'>
                <p className='font-[400] font-poppins text-customGrey text-[17px]'>Bäsleşige näme üçin gatnaşmaly?</p>
                <h2 className='font-extrabold font-lato text-5xl text-new-color py-5'>Bäsleşige gatnaşyň we baýraklar gazanyň</h2>
                <PrizeCard icon={icon1} prizeHeader={'Günde baýrakly ýaryş'} prizeDescription={'Her gün gymmatbahaly baýrak gazanmak — size bagly'} />
                <PrizeCard icon={icon2} prizeHeader={'Baş baýrak — telefon'} prizeDescription={'Her gunin her hepdanin, her aýyň ýeňijisi bol'} />
                <PrizeCard icon={icon3} prizeHeader={'Dostuňyz bilen bäsleşiň'} prizeDescription={'Dostlaryňyzy çagyryň we olar bilen ýaryşyň'} />
            </div>
        </div>
    );
}

export default Prizes;