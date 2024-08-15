import React from 'react';
import { Header } from '../Header';
import desktopImage from '../../images/panceta.jpg';
import mobileImage from '../../images/panceta-mobile.jpg'
import AboutForm from '../About';

function About() {
    return (
        <>
            <Header tittle='about' desktopImage={desktopImage} mobileImage={mobileImage} />
            <div>
                <AboutForm/>
            </div>
        </>
    );
}

export default About;