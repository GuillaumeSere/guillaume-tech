import React from 'react';
import './service.css';
import github from '../assets/github.png';
import langages from '../assets/langages.jpg';
import img1 from '../assets/course-1.svg';
import img2 from '../assets/course-3.svg';
import video from '../assets/Guillaume Tech.mp4';

const Service = () => {
    return (
        <div className='service'>
            <div className="text1">
            <h1 className='title-service'>Sur <span>Beauvais</span> appelez vite !</h1>
            <span className='number'>📱 06.60.40.09.24</span>
            <span className='number'><a className='link' href="mailto:guillaumesere60@gmail.com" target="_blank" rel="noreferrer">📧 guillaumesere60@gmail.com</a></span>
            </div>
            <div className="box-image">
                <img src={img1} className='img-deco1' alt="" />
                <video 
                    className="w-full max-w-md mx-auto my-4 rounded-lg shadow-lg"
                    controls
                    autoPlay
                    muted
                    loop
                >
                    <source src={video} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
                <img src={img2} className='img-deco2' alt="" />
            </div>
            <div className="text2">
                <h2>👍<u className='desc'>Services Proposés</u> : </h2>
                <p> 🖥️ Formation de base en informatique (utilisation des ordinateurs, tablettes et smartphones) 💻<br />
                    📑 Assistance pour les démarches administratives en ligne (création de comptes divers avec sécurisation...) ⌨️<br />
                    👨‍💻 Aide à l'utilisation des outils de communication, réseaux sociaux, logiciels d'accessibilité pour les personnes malvoyantes, ainsi que l'intelligence artificielle 👩‍💻<br />
                    💽 Conseils et assistance technique (installation de logiciels, sécurité informatique...) 📥<br />
                    🗔 Création de site internet sur mesure (Une page web moderne et ergonomique, adaptée à votre identité visuelle et à votre secteur d'activité.) 🗔</p>
                <div className="logo-code">
                    <img className='github' src={github} alt="github" />
                    <p>Premiers pas avec la programmation (Introduction au codage avec les langages de base: HTML, CSS, Javascript)</p>
                    <img className='langages' src={langages} alt="langages html, css, javascript" />
                </div>
            </div>
        </div >
    )
}

export default Service
