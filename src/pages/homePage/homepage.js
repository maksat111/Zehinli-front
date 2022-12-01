import React from 'react';
import Prizes from './sections/prizes';
import Steps from './sections/steps';
import Welcome from './sections/welcome';
import Download from './sections/download';

const HomePage = () => {
    return (
        <div className='px-3 py-2 sm:px-3vw py-2vh'>
            <Welcome />
            <Steps />
            <Prizes />
            <Download />
        </div>
    )
}

export default HomePage;