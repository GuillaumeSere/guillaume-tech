import React from 'react';
import './footer.css';
import { SiNpm } from "react-icons/si";
import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../assets/99312-developer-skills.json';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>
                <Player
                    autoplay
                    loop
                    src={animation}
                    style={{ height: '300px', width: '300px' }}
                >
                </Player>
            </a>
            <div className="triangle4"></div>
            <div className="carre3"></div>

            <div className="footer__socials">
                <a href="https://www.npmjs.com/~guillaumesere" target="_blank" rel="noreferrer" title="Visitez mon profil NPM"><SiNpm /></a>
                <a href="https://www.linkedin.com/in/guillaume-séré/" target="_blank" rel="noreferrer" title="Connectez-vous avec moi sur LinkedIn"><ImLinkedin /></a>
                <a href="https://github.com/GuillaumeSere" target="_blank" rel="noreferrer" title="Explorez mes projets sur GitHub"><ImGithub /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Guillaume SERE</small>
            </div>
        </footer>
    )
}

export default Footer;