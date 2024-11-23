"use client";

import React from 'react';
import ImagePlacer from '../atoms/ImagePlacer';
import Navigation from '../molecules/Navigation';
import Button from '../atoms/Button';
import logoheader from '../../../public/images/hyperhire.png'

const Header: React.FC = () => {
    const handleClick = () => {
        console.log("Button clicked!");
    };
    return (
        <header className="w-8/12 m-auto flex justify-between items-center">
            <ImagePlacer source={logoheader.src} alt='Hyper Hire Header Logo'/>
            <Navigation />
            <Button label="문의하기" onClick={handleClick} />
        </header>
    );
};

export default Header;
