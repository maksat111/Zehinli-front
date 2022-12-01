import React, { useContext, useState } from 'react';
import WinnerItem from '../components/winnerItem';
import { AiOutlineRight } from 'react-icons/ai';
import { LanguageContext } from '../../context/context';
import winners from '../../img/winners.png';
import photo from '../../img/3x4.jpg';
import gyzyl from '../../img/gyzyl.png';
import yasyl from '../../img/yasyl.png';


function Winners() {
    const { currentLanguage } = useContext(LanguageContext);
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

    const content = {
        header: {
            tm: 'Ýeňijiler sanawy',
            ru: 'Список победителей',
            en: 'List of winners'
        },
        card: {
            time: [
                {
                    tm: 'Şugün',
                    en: 'Today',
                    ru: 'Сегодня',
                    name: 'today'
                },
                {
                    tm: 'Hepdelik',
                    ru: 'Еженедельно',
                    en: 'Weekly',
                    name: 'week'
                },
                {
                    tm: 'Aýlyk',
                    ru: 'Ежемесячно',
                    en: 'Monthly',
                    name: 'month'
                }
            ],
            level: [
                {
                    tm: 'Başlangyç',
                    ru: 'Новичок',
                    en: 'Beginner',
                    name: 'beginner'
                },
                {
                    tm: 'Höwesjeň',
                    ru: 'Страстный',
                    en: 'Passionated',
                    name: 'elementary'
                },
                {
                    tm: 'Ussat',
                    ru: 'Мастер',
                    en: 'Master',
                    name: 'professional'
                },
            ],
            button: {
                tm: 'Meni görkez',
                ru: 'Покажи  меня',
                en: 'Show me'
            }
        },
        right: {
            player: {
                tm: 'Oýunçy',
                en: 'Player',
                ru: 'Игрок'
            },
            place: {
                tm: 'Orun',
                en: 'Place',
                ru: 'Место'
            }
        }
    }
    return (
        <div className='px-3vw'>
            <h2 className='w-90vw text-center text-new-color text-5xl font-extrabold mt-5 mb-8'>
                {currentLanguage.text == 'TM' ? content.header.tm : (currentLanguage.text == 'EN' ? content.header.en : content.header.ru)}
            </h2>
            <div className='flex flex-col lg:flex-row'>
                {/* stage */}
                <div className='lg:w-[22vw] lg:min-w-[20rem] bg-white pb-5 rounded-t-[30px] rounded-b-[15px] h-[40rem]'>
                    <div className='flex justify-center w-full h-[17rem] bg-gradient-to-r from-[#4F9AEB] to-[#007BFF] rounded-[30px]'>
                        <img className='rounded-[30px] w-22vw' src={winners} alt='winners' />
                        {/* <img className='relative z-10 w-[3rem] h-[3rem]' src={photo} alt='second' /> */}
                        {/* <img src={photo} alt='first' />
                        <img src={photo} alt='third' /> */}
                    </div>
                    <div className='flex justify-between font-poppins py-5 px-4 text-[15px] font-normal'>
                        {
                            content.card.time.map((item, index) => {
                                return <p key={index} className={`font-poppins cursor-pointer font-medium text-new-color text-[16px] px-[1rem] py-[7px] ${liga == item.name ? 'bg-[#d9eafe] rounded-[8px] text-[#4e88d1]' : 'hover:text-[#4e88d1]'}`} onClick={handleLiga} name={item.name}>
                                    {currentLanguage.text == 'TM' ? item.tm : (currentLanguage.text == 'EN' ? item.en : item.ru)}
                                </p>

                            })
                        }
                    </div>
                    <div className='text-center px-4'>
                        {
                            content.card.level.map((item, index) => {
                                return <p key={index} className={`font-poppins cursor-pointer font-medium text-new-color text-[16px] py-[0.9rem] mb-2 ${level == item.name ? 'bg-[#d9eafe] rounded-[12px] text-[#4e88d1]' : 'hover:text-[#4e88d1]'}`} name={item.name} onClick={handleLevel}>
                                    {currentLanguage.text == 'TM' ? item.tm : (currentLanguage.text == 'EN' ? item.en : item.ru)}
                                </p>
                            })
                        }
                    </div>
                    <button className='bg-gradient-to-r from-[#4F9AEB] mx-4 to-[#007BFF] text-white w-[90%] h-[3.2rem] rounded-[10px] font-normal font-poppins mt-7 hover:bg-gradient-to-r hover:from-[#70acec] hover:to-[#2b91ff]'>
                        {currentLanguage.text == 'TM' ? content.card.button.tm : (currentLanguage.text == 'EN' ? content.card.button.en : content.card.button.ru)}
                    </button>
                </div>
                {/* table */}
                <div className='w-70vw h-[40rem] bg-white ml-5 rounded-[20px] py-5 px-12'>
                    <div className='flex flex-row justify-between'>
                        <p className='text-[#bfc0c5] w-[42vw] pl-2 font-poppins font-normal text-[1rem]'>
                            {currentLanguage.text == 'TM' ? content.right.player.tm : (currentLanguage.text == 'EN' ? content.right.player.en : content.right.player.ru)}
                        </p>
                        <p className='text-[#bfc0c5] w-[2.5rem] font-poppins font-normal text-[1rem]'>
                            {currentLanguage.text == 'TM' ? content.right.place.tm : (currentLanguage.text == 'EN' ? content.right.place.en : content.right.place.ru)}
                        </p>
                        <AiOutlineRight className='text-white' />
                    </div>

                    <WinnerItem gamer={'Jennet Babayewa'} photo={photo} place={2} status={yasyl} />
                    <WinnerItem gamer={'Maksat Akmyradow'} photo={photo} place={2} status={gyzyl} />
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