import React from 'react';
import './service.css';
import github from '../assets/github.png';
import langages from '../assets/langages.jpg';

const Service = () => {
    return (
        <div className='service'>
            <h1 className='title-service'>Sur <span>Beauvais</span> appelez vite !</h1>
            <div className="text">
                <span className='number'>📱 06.60.40.09.24</span>
                <span className='number'><a className='link' href="mailto:guillaumesere60@gmail.com" target="_blank" rel="noreferrer">📧 guillaumesere60@gmail.com</a></span>
                <h3>👍<u className='desc'>Services Proposés</u> : </h3>
                <p> 🖥️ Formation de base en informatique (utilisation des ordinateurs, tablettes et smartphones) 💻<br />
                    📑 Assistance pour les démarches administratives en ligne (création de comptes divers avec sécurisation...) ⌨️<br />
                    👨‍💻 Aide à l'utilisation des outils de communication, réseaux sociaux, logiciels d'accessibilité pour les personnes malvoyantes, ainsi que l'intelligence artificielle 👩‍💻<br />
                    💽 Conseils et assistance technique (installation de logiciels, sécurité informatique...) 📥</p><br />
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
