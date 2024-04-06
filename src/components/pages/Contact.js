import React from 'react';
import { Header } from '../Header';
import pic from '../../images/cordero.jpeg'
import { Direction } from '../Direction';
import ContactForm from '../ContactForm';
import ContactInfo from '../ContactInfo';

function Contact() {
    return (
        <>
            <Header tittle='contact' image={pic} />
            <ContactInfo />

            <ContactForm />
            <Direction />
        </>
    );
}

export default Contact;