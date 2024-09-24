import React from 'react'
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Map from "./Map";
import Service from "./Service";
import Tarif from "./Tarif";
import { Link } from 'react-router-dom';
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
        </div>
    )
}

export default Page
