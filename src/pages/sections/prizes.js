import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import PrizeCard from '../components/prizes';
import { LanguageContext } from '../../context/context';
import icon1 from '../../img/icon1.png';
import icon2 from '../../img/icon2.png';
import icon3 from '../../img/icon3.png';
import phoneZehin from '../../img/phoneZehin.png';
import prizes from '../../img/prizes.png';


const Prizes = () => {
    const { currentLanguage } = useContext(LanguageContext);
    const content = {
        firstLine: {
            tm: "Bäsleşige näme üçin gatnaşmaly?",
            ru: "Зачем участвовать в конкурсе?",
            en: "Why enter the competition?",

        },
        secondLine: {
            tm: "Bäsleşige gatnaşyň we baýraklar gazanyň",
            ru: "Участвуйте в розыгрыше и выигрывайте призы",
            en: "Participate in the competition and win prizes"
        },
        cards: [
            {
                header: {
                    tm: "Günde baýrakly ýaryş",
                    ru: "Ежедневный розыгрыш призов",
                    en: "Daily prize draw"
                },
                description: {
                    tm: "Her gün gymmatbahaly baýrak gazanmak — size bagly",
                    ru: 'Выигрывать ценные призы каждый день - это зависит вам',
                    en: "It's up to you to win valuable prizes every day",
                },
                icon: icon2
            },
            {
                header: {
                    tm: "Baş baýrak — telefon",
                    ru: "Главный приз — телефон",
                    en: "The grand prize is a smartphone",
                },
                description: {
                    tm: "Her günüň her hepdäniň, her aýyň ýeňijisi bol",
                    ru: "Будь победителем каждый день, каждую неделю, каждый месяц",
                    en: "Be the winner of every day, every week, every month",
                },
                icon: icon1
            },
            {
                header: {
                    tm: "Dostuňyz bilen bäsleşiň",
                    ru: "Соревнуйтесь с вашим другом",
                    en: "Compete with your friend",
                },
                description: {
                    tm: "Dostlaryňyzy çagyryň we olar bilen ýaryşyň",
                    ru: "Приглашайте друзей и соревнуйтесь с ними",
                    en: "Invite your friends and compete with them",
                },
                icon: icon3
            }
        ]
    }
    return (
        <div id='prizes' className='flex flex-col items-center h-[180vh] sm:h-[175vh] lg:grid lg:grid-cols-2 lg:h-90vh'>
            <motion.div initial={{ x: -200, y: 200, scale: 0.3 }} whileInView={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className='flex h-80vh w-80vw justify-center items-center content center lg:w-[47vw]'>
                <img className='relative w-full z-1 h-[32rem] min-w-[19rem] max-w-[22rem] right-[-4rem] md:h-[36rem] md:min-w-[23.5rem] md:right-[-6rem] lg:right-[-5rem] lg:h-[35rem] lg:min-w-[23rem] lg:bottom-0' src={phoneZehin} alt='Phone' />
                <img className='relative w-full z-2 h-[26rem] min-w-[19rem] right-[8rem] bottom-3 md:h-[29rem] md:min-w-[25rem] md:right-[11rem] lg:h-[28rem] lg:min-w-[25rem] lg:right-[13rem] lg:bottom-[1rem]' src={prizes} alt=' prizes' />
            </motion.div>
            <div className='flex flex-col justify-center items-center mx-auto px-auto items-start w-80vw lg:w-[47vw] h-80vh'>
                <motion.p initial={{ x: 200, y: 200, scale: 0 }} whileInView={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className='font-[400] font-poppins text-customGrey text-[17px]'>
                    {currentLanguage.text == 'TM' ? content.firstLine.tm : (currentLanguage.text == 'EN' ? content.firstLine.en : content.firstLine.ru)}
                </motion.p>
                <motion.h2 initial={{ x: 200, y: 200, scale: 0.3 }} whileInView={{ x: 0, y: 0, scale: 1 }} transition={{ duration: 0.8 }} className='font-extrabold text-center font-lato text-5xl text-new-color py-5'>
                    {currentLanguage.text == 'TM' ? content.secondLine.tm : (currentLanguage.text == 'EN' ? content.secondLine.en : content.secondLine.ru)}
                </motion.h2>
                {
                    content.cards.map((item) => {
                        return (
                            <PrizeCard
                                icon={item.icon}
                                prizeHeader={currentLanguage.text == 'TM' ? item.header.tm : (currentLanguage.text == 'EN' ? item.header.en : item.header.ru)}
                                prizeDescription={currentLanguage.text == 'TM' ? item.description.tm : (currentLanguage.text == 'EN' ? item.description.en : item.description.ru)}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Prizes;