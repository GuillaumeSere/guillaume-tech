import React from 'react'
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Map from "../Map/Map";
import Service from "../Service/Service";
import Tarif from "../Tarif/Tarif";
import { Link } from 'react-router-dom';
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton"; 
import './page.css'

const Page = () => {
    return (
        <div>
            <Header />
            <Service />
            <Home />
            <Tarif />
            <Contact />
            <Map />
            <Footer />
            <Link className='cvg' to='/CGV'>CGV</Link>
            <ScrollToTopButton />
        </div>
    )
}

export default Page
