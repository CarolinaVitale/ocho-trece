import React from 'react';
import { Header } from '../Header';
import pic from '../../images/panceta.jpg'
import AboutForm from '../About';

function About() {
    return (
        <>
            <Header tittle='about' image={pic} />
            <div>
                <AboutForm/>
            </div>
        </>
    );
}

export default About;