import React from 'react';
import Prizes from './components/prizes';
import arrowDown from '../img/arrow-down.png';
import appStore from '../img/appStore.png';
import googlePlay from '../img/googlePlay.png';
import barcode from '../img/barcode.png';
import phone from '../img/phone.png';
import prizes from '../img/prizes.png';
import rectangular from '../img/rectangular.png';
import raketa from '../img/raketa.png';
import question from '../img/question.png';
import kubok from '../img/kubok.png';
import phoneZehin from '../img/phoneZehin.png';
import icon1 from '../img/icon1.png';
import icon2 from '../img/icon2.png';
import icon3 from '../img/icon3.png';
import './homepage.css';
import Steps from './components/steps';
import Logo from './components/logo';

const HomePage = () => {
    return (
        <div>
            <nav className='flex flex-wrap justify-between mb-4'>
                <div className='flex flex-wrap items-center'>
                    <Logo />
                    <div>
                        <a className='mx-2  font-poppins font-medium text-new-color' href='#'>Bäsleşik barada</a>
                        <a className='mx-2 font-poppins font-medium text-new-color' href='#'>Artykmaçlyklary</a>
                        <a className='mx-2 font-poppins font-medium text-new-color' href='#'>Ýüklemek</a>
                    </div>
                </div>
                <button className='flex flex-wrap items-center text-new-color'>TM <img className='mx-1' src={arrowDown} alt='arrow down' /></button>
            </nav>

            <div className='container grid grid-cols-2 h-90vh'>
                {/* Left side */}
                <div className='flex flex-col justify-start content-center gap-8'>
                    <h1 className='font-ubuntu font-extrabold text-5xl text-new-color'>Zehinli Bäsleşik</h1>
                    <h2 className='font-extrabold font-ubuntu tracking-wide text-xl text-new-color'>zehiniňi artdyr we baýraklar gazan!</h2>
                    <p className='text-new-color'>Özüňize islendik amatly bolan ýerde bilim başarnyklaryňyzy kämilleşdiriň we islän baýragyňyzy gazanyň!</p>
                    <div className='flex flex-wrap gap-8 justify-center'>
                        <div className='bg-white shadow-new rounded-lg py-4 px-4 w-1/4'>
                            <img src={googlePlay} alt='Google Play' />
                        </div>
                        <div className='bg-white shadow-new rounded-xl py-4 px-4 w-1/4'>
                            <img src={appStore} alt='App Store' />
                        </div>
                    </div>
                    <img className='block h-1/5 w-1/5 ' src={barcode} alt='Barcode' />
                </div>
                {/* Right side */}
                <div className='container'>
                    <img className='absolute w-35vw h-2/3 bottom-0 left-55vw' src={rectangular} alt='reactangular' />
                    <img className='z-1 absolute h-5/6 left-44vw' src={phone} alt='Phone' />
                    <img className='z-2 absolute w-35vw h-2/3 bottom-8 left-55vw ' src={prizes} alt='Prizes' />
                </div>
            </div>

            <div className='h-screen'>
                <div className='flex flex-col text-center my-10'>
                    <p className='font-normal font-poppins text-customGrey text-new-color'>Bäsleşik nähili geçýär?</p>
                    <h2 className='font-extrabold font-lato text-5xl text-new-color'>Oýun 3 basgançakdan durýar</h2>
                </div>
                <div className='flex flex-row justify-around'>
                    <Steps icon={raketa} stepHeader={'Bäsleşigi telefonyňa ýükle'} stepDescription={'Bir bäsleşige gatnaşmak üçin 2 tmt töleg geçmeli'} />
                    <Steps icon={question} stepHeader={'Bäsleşigi telefonyňa ýükle'} stepDescription={'Bir bäsleşige gatnaşmak üçin 2 tmt töleg geçmeli'} />
                    <Steps icon={kubok} stepHeader={'Bäsleşigi telefonyňa ýükle'} stepDescription={'Bir bäsleşige gatnaşmak üçin 2 tmt töleg geçmeli'} />

                </div>
            </div>

            <div className='container grid grid-cols-2'>
                <div>
                    <img className='absolute z-1 h-3/4' src={phoneZehin} alt='Phone' />
                    <img className='relative z-2 h-2/3 top-16 left-32 ' src={prizes} alt='prizes' />
                </div>
                <div>
                    <p className='font-normal font-poppins text-customGrey text-new-color'>Bäsleşige näme üçin gatnaşmaly?</p>
                    <h2 className='font-extrabold font-lato text-5xl text-new-color'>Bäsleşige gatnaşyň we baýraklar gazanyň</h2>
                    <Prizes icon={icon1} prizeHeader={'Günde baýrakly ýaryş'} prizeDescription={'Her gün gymmatbahaly baýrak gazanmak — size bagly'} />
                    <Prizes icon={icon2} prizeHeader={'Baş baýrak — telefon'} prizeDescription={'Her gunin her hepdanin, her aýyň ýeňijisi bol'} />
                    <Prizes icon={icon3} prizeHeader={'Dostuňyz bilen bäsleşiň'} prizeDescription={'Dostlaryňyzy çagyryň we olar bilen ýaryşyň'} />
                </div>
            </div>

            <div className='bg-blue-400 h-35vw'>
                <div className='grid grid-cols-2'>
                    <div>
                        <h2>Taýýarmy?<br />Zehinli Bäsleşigi dessine ýükle</h2>
                    </div>

                    <div className='flex flex-row'>
                        <img className='w-3/4 h-3/4' src={phone} alt='Phone' />
                        <img className='w-3/4 h-3/4' src={phone} alt='Phone' />
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3'>
                <Logo />
                <div>
                    <p>Biz barada</p>
                    <p>Kömek</p>
                    <p>FAQ</p>
                </div>
                <div>
                    <div>@zehinli_turkmenportal</div>
                    <div>zehinliturkmenportal@gmail.com</div>
                    <div>+993 62 23 23 46</div>
                </div>
            </div>

            <div className='flex justify-between'>
                <p>turkmenportal</p>
                <p>zehin-bäsleşigi 2022</p>
                <p>Algap</p>
            </div>
        </div>
    )
}

export default HomePage;