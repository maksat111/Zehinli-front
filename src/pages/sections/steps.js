import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { LanguageContext } from '../../context/context';
import StepCard from '../components/steps';
import raketa from '../../img/raketa.png';
import question from '../../img/question.png';
import kubok from '../../img/kubok.png';
import icon1 from '../../img/1.png';
import icon2 from '../../img/2.png';

const Steps = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const content = {
        firstLine: {
            tm: 'Bäsleşik nähili geçýär?',
            ru: 'Как проходит конкурс?',
            en: 'How is the competition going?',
        },
        secondLine: {
            tm: 'Oýun 3 basgançakdan durýar',
            ru: 'Игра состоит из 3 этапов',
            en: 'The game consists of 3 stages',
        },
        cards: [
            {
                icon: raketa,
                afterIcon: icon1,
                header: {
                    tm: 'Bäsleşigi telefonyňa ýükle',
                    ru: 'Скачайте игру на свой телефон',
                    en: 'Download the game to your phone',
                },
                description: {
                    tm: 'Bir bäsleşige gatnaşmak üçin 2 tmt töleg geçmeli',
                    ru: 'Для участия в конкурсе требуется 2 комиссии тмт',
                    en: '2 tmt fees are required to enter a contest',
                }
            },
            {
                icon: question,
                afterIcon: icon2,
                header: {
                    tm: 'Soraglara jogap ber',
                    ru: 'Ответь на вопросы',
                    en: 'Answer the questions',
                },
                description: {
                    tm: 'Soraglara dogry we tiz jogap bermäge çalyşyň',
                    ru: 'Старайтесь правильно и быстро отвечать на вопросы',
                    en: 'Try to answer the questions correctly and quickly',
                }
            },
            {
                icon: kubok,
                afterIcon: false,
                header: {
                    tm: 'Baýrakly orunlara mynasyp bol',
                    ru: 'Выиграй призы',
                    en: 'Win prizes',
                },
                description: {
                    tm: 'Her gün gymmat bahaly baýrak gazanmak — size bagly',
                    ru: 'Выигрывать ценные призы каждый день - это зависит вам',
                    en: "It's up to you to win valuable prizes every day",
                }
            }
        ]


    }
    return (
        <div id='about' className='h-50rem lg:h-90vh'>
            <div className='flex flex-col text-center pt-[100px] pb-[140px]'>
                <motion.p initial={{ x: -200 }} whileInView={{ x: 0 }} transition={{ duration: 0.7 }} className='font-normal font-poppins text-customGrey text-new-color py-[10px]'>
                    {currentLanguage.text == 'TM' ? content.firstLine.tm : (currentLanguage.text == 'EN' ? content.firstLine.en : content.firstLine.ru)}
                </motion.p>
                <motion.h2 initial={{ x: -200 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='font-extrabold font-lato text-5xl text-new-color px-4'>
                    {currentLanguage.text == 'TM' ? content.secondLine.tm : (currentLanguage.text == 'EN' ? content.secondLine.en : content.secondLine.ru)}
                </motion.h2>
            </div>
            <div className='flex flex-col inline-block gap-20 lg:gap-4 items-center lg:flex-row lg:justify-around lg:items-center'>
                {content.cards.map((item) => {
                    let i = 0.2;
                    i += 0.2;
                    return (
                        <>
                            <StepCard
                                icon={item.icon}
                                rocket={item.icon == raketa}
                                duration={i}
                                stepHeader={currentLanguage.text == 'TM' ? item.header.tm : (currentLanguage.text == 'EN' ? item.header.en : item.header.ru)}
                                stepDescription={currentLanguage.text == 'TM' ? item.description.tm : (currentLanguage.text == 'EN' ? item.description.en : item.description.ru)}
                            />
                            {item.afterIcon !== false ? <img className='hidden h-5 w-5vw lg:flex' src={item.afterIcon} alt='icon' /> : <></>}
                        </>
                    )
                })}
            </div>
        </div>
    );
}

export default Steps;