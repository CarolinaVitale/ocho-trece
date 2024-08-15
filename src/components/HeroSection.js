import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
// import desktopImage from '../images/prueba.jpg'
import logo from '../images/logo.png'


function HeroSection() {
    return (
        <>
            <div className='hero-container'>

                {/* <img
                    className='home-img'
                    srcSet={`${desktopImage} 4928w`}
                    sizes='100vw'
                    src={desktopImage}
                    style={{ width: '100%', height:'auto'}}
                    alt='home'
                /> */}


                <h1>coming soon...</h1>
                <div className='hero-btns'>
                    {/* <Button
                        where='/about'
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        about us
                    </Button>
                    <Button
                        where='/catering'
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                    >
                        catering quote <i className="fa-solid fa-utensils" />
                    </Button> */}
                </div>
            </div>
            <div>
                <img className='logo-hero' src={logo} alt='logo' />
            </div>
        </>
        
    );
}

export default HeroSection;