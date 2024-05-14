import React from 'react';
import { Header } from '../Header';
import pic from '../../images/steak-tartare.jpeg'
import '../../App.css'
import MenuForm from '../Menu'

function Menu() {
    return (
        <>
            <Header tittle='menu' image={pic} />
            <div>
                <MenuForm />
            </div>
        </>
    );
}

export default Menu;