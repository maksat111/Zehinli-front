import React from 'react';
import Prizes from './sections/prizes';
import Steps from './sections/steps';
import Navbar from './sections/navbar';
import Welcome from './sections/welcome';
import Download from './sections/download';
import Footer from './sections/footer';

const HomePage = () => {
    return (
        <div className='px-4vw py-3vh'>
            <Navbar />
            <Welcome />
            <Steps />
            <Prizes />
            <Download />
            <Footer />
        </div>
    )
}

export default HomePage;