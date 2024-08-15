import React from 'react';
import '../components/Header.css';

export const Header = ({
    tittle,
    mobileImage,
    desktopImage
}) => {
    
    return (
        <>
            <div className='header-container'>
                <h1>{tittle}</h1>
                <img
                    className='header-img'

                    srcSet={`

                    ${mobileImage} 768w,

                    ${desktopImage} 1200w

                `}

                    sizes='(max-width: 768px) 100vw, (min-width: 769px) 50vw'

                    alt='header'

                />
            </div>
        </>
    );
};