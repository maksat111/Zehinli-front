import React from 'react';
import phone from '../../img/phone.png';
import DownloadButton from '../components/button';
import googlePlay from '../../img/googlePlay.png';
import appStore from '../../img/appStore.png';

const Download = () => {
    return (
        <div id='download' className='flex items-center h-80vh'>
            <div className='grid grid-cols-2 bg-gradient-to-r from-[#4F9AEB] to-[#007BFF] rounded-[20px] h-[50vh]'>
                <div className='flex flex-col items-center justify-center h-50vh w-[47vw]'>
                    <h2 className='text-[#F3F8FF] text-[45px] font-[800] font-lato'>Taýýarmy?<br />Zehinli Bäsleşigi <br /> dessine ýükle</h2>
                    <div className='flex flex-wrap gap-8 justify-start p-7'>
                        <DownloadButton icon={googlePlay} alt={'Google Play'} />
                        <DownloadButton icon={appStore} alt={'App Store'} />
                    </div>
                </div>
                <div className='flex flex-row h-50vh w-[47vw]'>
                    <img className='relative h-[81vh] bottom-[22vh]' src={phone} alt='Phone' />
                    <img className='relative h-[81vh] bottom-[14vh] right-9vw' src={phone} alt='Phone' />
                </div>
            </div>
        </div>
    );
}

export default Download;