import React from 'react';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import mobileImage from '../images/pic-test.jpg'
import desktopImage from '../images/home.jpg'
import logo from '../images/logo.png'


function HeroSection() {
    return (
        <>
            <div className='hero-container'>

                <img
                    className='home-img'

                    srcSet={`

                    ${mobileImage} 768w,

                    ${desktopImage} 1200w

                `}

                    sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'

                    alt='home'

                />


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