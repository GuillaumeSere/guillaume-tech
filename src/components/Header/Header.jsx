import React from 'react'
import "./header.css"
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import { useTheme } from '../../context/ThemeContext';

const Header = () => {
      const { isDarkMode } = useTheme();

    return (
        <div className='header'>
            <img className='logo' src={isDarkMode ? logo1 : logo2} alt="logo" />
            <div className="description">
                <h1 className="title">Guillaume <span>Tech</span></h1>
                <h2 className="sub-title"><u className='desc'>Assistance Informatique à la Personne</u></h2>
            </div>
        </div>
    )
}

export default Header
