import React from 'react';
import { Header } from '../Header';
import desktopImage from '../../images/carpaccio.JPG';
import mobileImage from '../../images/carpaccio-mobile.JPG'
// import MenuForm from '../Menu';
import CateringForm from '../CateringForm';


function Catering() {
    return (
        <>
            <Header tittle='catering' desktopImage={desktopImage} mobileImage={mobileImage} />
            <div>
                {/* <MenuForm /> */}
                <CateringForm />
            </div>
        </>
    );
}

export default Catering;