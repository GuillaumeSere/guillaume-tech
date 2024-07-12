import React from 'react';
import './tarif.css';

const Tarif = () => {
    return (
        <div className='container'>
            <h1>Tarifs</h1>
            <div className="box-container">
                <div className="box">
                    <p>Le déplacement du technicien à domicile.</p>
                    <p>Le déballage et l'installation de votre PC et de vos périphériques.</p>
                    <p>La configuration de votre connexion internet.</p>
                    <p>Le contrôle du fonctionnement optimal de votre système, après installation.</p>
                </div>
                <div className="box">
                    <span>60 €</span><br />
                    <span>30 € après la réduction d'impôts</span>
                </div>
                <div className="box">
                    <p>Formation et aides au démarches sur internet.</p>
                    <p>Installation d'applications au besoin</p>
                </div>
                <div className="box">
                    <span>50 €</span><br />
                    <span>25 € après la réduction d'impôts</span>
                </div>
            </div>
        </div>
    )
}

export default Tarif
