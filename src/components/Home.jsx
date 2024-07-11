import React from 'react';
import './home.css';
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../assets/Animation - 1720700705025.json';

const Home = () => {
    return (
        <div className="home">
            <div className='animation'>
                <Player
                    autoplay
                    loop
                    src={animation}
                    style={{ height: '300px', width: '300px' }}
                >
                </Player>
            </div>
            <div className="info">
                Dans une société de plus en plus <span>digitalisée</span>, de nombreuses personnes éprouvent des difficultés à
                utiliser les outils <span>informatiques</span> et à réaliser des démarches en ligne. Ces difficultés peuvent
                concerner aussi bien des jeunes que des personnes âgées. L'objectif est de répondre à ce
                besoin croissant d'<span>assistance</span> et d'<span>accompagnement</span> dans le domaine informatique.
            </div>
        </div>
    )
}

export default Home
