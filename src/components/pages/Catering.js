import React from 'react';
import { Header } from '../Header';
import pic from '../../images/carpaccio.JPG'
import MenuForm from '../Menu'


function Catering() {
    return (
        <>
            <Header tittle='catering' image={pic} />
            <div>
                <MenuForm />
            </div>
        </>
    );
}

export default Catering;