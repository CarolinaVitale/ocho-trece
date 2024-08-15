import React from 'react';
import { Header } from '../Header';
import desktopImage from '../../images/steak-tartare.jpeg';
import mobileImage from '../../images/steak-tartare-mobile.jpg'
import '../../App.css'
import menu from '../../images/menu.png'


function Menu() {
    return (
        <>
            <Header tittle='menu' desktopImage={desktopImage} mobileImage={mobileImage} />
            {/* <h1 className='menu-coming'>still cooking...</h1> */}
            <img className='menu-813' src={menu} alt='menu' />

        </>
    );
}

export default Menu;