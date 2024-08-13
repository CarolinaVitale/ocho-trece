import React from 'react';
import { Header } from '../Header';
import pic from '../../images/steak-tartare.jpeg'
import '../../App.css'
import menu from '../../images/menu.png'


function Menu() {
    return (
        <>
            <Header tittle='menu' image={pic} />
            {/* <h1 className='menu-coming'>still cooking...</h1> */}
            <img className='menu-813' src={menu} alt='menu' />

        </>
    );
}

export default Menu;