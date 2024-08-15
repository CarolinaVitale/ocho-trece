import React from 'react';
import { Header } from '../Header';
import desktopImage from '../../images/cordero.jpeg';
import mobileImage from '../../images/cordero-mobile.jpeg'
import { Direction } from '../Direction';
import ContactForm from '../ContactForm';
import ContactInfo from '../ContactInfo';

function Contact() {
    return (
        <>
            <Header tittle='contact' desktopImage={desktopImage} mobileImage={mobileImage} />
            <ContactInfo />
            <ContactForm />
            <Direction />
        </>
    );
}

export default Contact;