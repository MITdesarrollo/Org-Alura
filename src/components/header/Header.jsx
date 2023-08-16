import React from 'react';
//  import Banner from 'public/img/header.png';
import "./Header.css"
import Banner from "../../assets/Header.png"

export const Header = () => {
    return (
        <header className='header'> 
            <img src={ Banner }alt="logo"/>
        </header>       
    )
}

