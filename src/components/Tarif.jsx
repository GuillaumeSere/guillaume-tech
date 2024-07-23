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
                    <span>60 € de l'heure</span><br />
                    <span>30 € après la réduction d'impôts</span>
                </div>
                <div className="box">
                    <p>Formation et aides au démarches sur internet.</p>
                    <p>Installation d'applications au besoin</p>
                </div>
                <div className="box">
                    <span>50 € de l'heure</span><br />
                    <span>25 € après la réduction d'impôts</span>
                </div>
                <div className="box">
                    <p><strong><u>Introduction au codage</u>:</strong> Premiers pas avec la programmation</p>
                    <p>Dans ce cours d'initiation au codage de <span>2 heures</span>, vous apprendrez les bases de la programmation
                        et acquerrez une expérience pratique du codage.
                        Vous commencerez par configurer votre propre environnement de codage,
                        notamment en installant un éditeur et en configurant votre espace de travail.</p>
                    <p>Langages: HTML, CSS, Javascript</p>
                    <strong><u>Plan de cours</u>:</strong>
                    <p>Introduction au codage <span>(10 minutes) </span>
                        Qu'est-ce que le codage et pourquoi est-il important ?
                        Aperçu du cours et de ce que vous apprendrez.
                        Configurer votre environnement de codage <span>(20 minutes)</span>.
                        Installer un éditeur (par exemple Visual Studio Code, Sublime Text, Atom).
                        Configurer votre espace de travail (par exemple, configurer la coloration syntaxique, les thèmes).
                        Introduction à la ligne de commande et aux commandes de base.
                        Fondamentaux de la programmation <span>(40 minutes)</span>.
                        Introduction aux langages de programmation (par exemple, JavaScript, HTML/CSS).
                        Types de données (par exemple, nombres, chaînes, booléens).
                        Variables et affectation
                        Opérateurs (par exemple arithmétiques, de comparaison, logiques).
                        Structures de contrôle (par exemple instructions if/else, boucles).
                        Les fonctions
                        Exercice pratique de codage <span>(30 minutes)</span>.
                        Écrivez et exécutez votre propre code en utilisant les concepts appris dans le cours.
                        Dépannez et déboguez votre code.
                        Conclusion et prochaines étapes <span>(10 minutes)</span>.
                        Récapitulatif de ce que vous avez appris.
                        Conseils pour continuer à apprendre et à améliorer vos compétences en codage
                        Ressources pour un apprentissage et une pratique plus poussés</p>
                </div>
                <div className="box">
                    <span>150 € la prestation</span><br />
                </div>
            </div>
        </div>
    )
}

export default Tarif
