import React, { useState } from 'react';
import WinnerItem from '../components/winnerItem';
import winners from '../../img/winners.png';
import photo from '../../img/3x4.jpg';
import gyzyl from '../../img/gyzyl.png';
import yasyl from '../../img/yasyl.png';


function Winners() {
    const [liga, setLiga] = useState('week');
    const [level, setLevel] = useState('beginner');
    const handleLiga = (e) => {
        const selected = e.target.getAttribute('name');
        setLiga(selected);
    }
    const handleLevel = (e) => {
        const selected = e.target.getAttribute('name');
        setLevel(selected);
    }
    return (
        <div className='px-3vw'>
            <h2 className='w-90vw text-center text-new-color text-5xl font-extrabold mt-5 mb-8'>Ýeňijiler sanawy</h2>
            <div className='flex flex-row'>
                {/* stage */}
                <div className='w-[22vw] bg-white pb-5 rounded-t-[30px] rounded-b-[15px] h-[40rem]'>
                    <div className='flex justify-center w-full h-[17rem] bg-gradient-to-r from-[#4F9AEB] to-[#007BFF] rounded-[30px]'>
                        <img className='rounded-[30px] w-22vw' src={winners} alt='winners' />
                        {/* <img className='relative z-10 w-[3rem] h-[3rem]' src={photo} alt='second' /> */}
                        {/* <img src={photo} alt='first' />
                        <img src={photo} alt='third' /> */}
                    </div>
                    <div className='flex justify-between font-poppins py-5 px-4 text-[15px] font-normal'>
                        <p className={`font-poppins cursor-pointer font-medium text-new-color text-[16px] px-[1rem] py-[7px] ${liga == 'today' ? 'bg-[#d9eafe] rounded-[8px] text-[#4e88d1]' : 'hover:text-[#4e88d1]'}`} onClick={handleLiga} name='today'>Şugün</p>
                        <p className={`font-poppins cursor-pointer font-medium text-new-color text-[16px] px-[1rem] py-[7px] ${liga == 'week' ? 'bg-[#d9eafe] rounded-[8px] text-[#4e88d1]' : 'hover:text-[#4e88d1]'}`} onClick={handleLiga} name='week'>Hepdelik</p>
                        <p className={`font-poppins cursor-pointer font-medium text-new-color text-[16px] px-[1rem] py-[7px] ${liga == 'month' ? 'bg-[#d9eafe] rounded-[8px] text-[#4e88d1]' : 'hover:text-[#4e88d1]'}`} onClick={handleLiga} name='month'>Aýlyk</p>
                    </div>
                    <div className='text-center px-4'>
                        <p className={`font-poppins cursor-pointer font-medium text-new-color text-[16px] py-[0.9rem] ${level == 'beginner' ? 'bg-[#d9eafe] rounded-[12px] text-[#4e88d1]' : 'hover:text-[#4e88d1]'}`} name='beginner' onClick={handleLevel}>Başlangyç</p>
                        <p className={`font-poppins cursor-pointer font-medium text-new-color mb-2 mt-2 text-[16px] py-[0.9rem] ${level == 'elementary' ? 'bg-[#d9eafe] rounded-[12px] text-[#4e88d1]' : 'hover:text-[#4e88d1]'}`} name='elementary' onClick={handleLevel}>Höwesjeň</p>
                        <p className={`font-poppins cursor-pointer font-medium text-new-color text-[16px] py-[0.9rem] ${level == 'professional' ? 'bg-[#d9eafe] rounded-[12px] text-[#4e88d1]' : 'hover:text-[#4e88d1]'}`} name='professional' onClick={handleLevel}>Ussat</p>
                    </div>
                    <button className='bg-gradient-to-r from-[#4F9AEB] mx-4 to-[#007BFF] text-white w-[90%] h-[3.2rem] rounded-[10px] font-normal font-poppins mt-7 hover:bg-gradient-to-r hover:from-[#70acec] hover:to-[#2b91ff]'>Meni görkez</button>
                </div>
                {/* table */}
                <div className='w-70vw h-[40rem] bg-white ml-5 rounded-[20px] py-5 px-12'>
                    <div className='flex flex-row'>
                        <p className='text-[#bfc0c5] w-[45vw] pl-2 font-poppins font-normal text-[1rem]'>Oýunçy</p>
                        <p className='text-[#bfc0c5] w-[2.5rem] font-poppins font-normal text-[1rem]'>Orun</p>
                    </div>

                    <WinnerItem gamer={'Jennet Babayewa'} photo={photo} place={2} status={yasyl} />
                    <WinnerItem gamer={'Maksat Akmyradow'} photo={photo} place={2} status={yasyl} />
                    <WinnerItem gamer={'Maksat Akmyradow'} photo={photo} place={2} status={yasyl} />
                    <WinnerItem gamer={'Maksat Akmyradow'} photo={photo} place={2} status={yasyl} />
                    <WinnerItem gamer={'Maksat Akmyradow'} photo={photo} place={2} status={yasyl} />
                    <WinnerItem gamer={'Maksat Akmyradow'} photo={photo} place={2} status={yasyl} />
                    <WinnerItem gamer={'Maksat Akmyradow'} photo={photo} place={2} status={yasyl} />
                    <WinnerItem gamer={'Maksat Akmyradow'} photo={photo} place={2} status={yasyl} />
                </div>
            </div>
        </div>
    );
}

export default Winners;