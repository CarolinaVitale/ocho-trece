import React from 'react';
import { Header } from '../Header';
import pic from '../../images/steak-tartare.jpeg'
import '../../App.css'

function Menu() {
    return (
        <>
            <Header tittle='menu' image={pic} />
            <div className='letters-menu'>
                <h1 className='menu-coming'>still cooking...</h1>
            </div>
        </>
    );
}

export default Menu;