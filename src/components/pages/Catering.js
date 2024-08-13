import React from 'react';
import { Header } from '../Header';
import pic from '../../images/carpaccio.JPG'
// import MenuForm from '../Menu'
import CateringForm from '../CateringForm'


function Catering() {
    return (
        <>
            <Header tittle='catering' image={pic} />
            <div>
                {/* <MenuForm /> */}
                <CateringForm />
            </div>
        </>
    );
}

export default Catering;