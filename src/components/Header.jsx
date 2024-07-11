import React from 'react'
import "./header.css"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="logo" />
            <div className="description">
                <div className="title">Guillaume <span>Tech</span></div>
                <div className="sub-title">Assistance Informatique à la Personne</div>
            </div>
        </div>
    )
}

export default Header
