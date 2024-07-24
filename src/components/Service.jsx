import React from 'react';
import './service.css';
import github from '../assets/github.png';
import langages from '../assets/langages.jpg';

const Service = () => {
    return (
        <div className='service'>
            <h1>Sur <span>Beauvais</span> appelez vite !</h1>
            <div className="text">
            <span className='number'>📱 06.60.40.09.24</span>
            <span className='number'><a className='link' href="mailto:guillaumesere60@gmail.com" target="_blank" rel="noreferrer">📧 guillaumesere60@gmail.com</a></span>
            <h3>👍 <u>Services Proposés</u> :<br/>
           <p> 🖥️ Formation de base en informatique (utilisation des ordinateurs, tablettes et smartphones) 💻<br/>
            📑 Assistance pour les démarches administratives en ligne (impôts, sécurité sociale, démarches
                bancaires, etc.) ⌨️<br/>
                👨‍💻 Aide à l'utilisation des logiciels de bureautique (Word, Excel,Chat-GPT etc.) 👩‍💻<br/>
                💽 Conseils et assistance technique (installation de logiciels, sécurité informatique, etc.) 📥</p><br/>
               <img className='github' src={github} alt="github" /> Premiers pas avec la programmation (Introduction au codage avec les langages de base: HTML, CSS, Javascript) <img className='langages' src={langages} alt="langages html, css, javascript" />
                </h3>
            </div>
        </div>
    )
}

export default Service
