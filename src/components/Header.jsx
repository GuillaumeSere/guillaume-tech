import React from 'react'
import "./header.css"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="logo" />
            <div className="description">
                <h1 className="title">Guillaume <span>Tech</span></h1>
                <h2 className="sub-title"><u className='desc'>Assistance Informatique à la Personne</u></h2>
            </div>
        </div>
    )
}

export default Header
