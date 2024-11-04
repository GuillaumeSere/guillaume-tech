import React from 'react';
import './cvg.css';
import Header from './Header';
import { IoMdArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import useScrollToTop from './hook/useScrollToTop';
import ScrollToTopButton from './ScrollToTopButton';

const CGV = () => {

    useScrollToTop();
    
    return (
        <>
        <Header />
        <div className='containers'>
        <Link  to='/' className='back'><IoMdArrowBack/></Link>
            <div className="titles">
                <h1> Conditions Générales de Vente</h1>
                <h2> Guillaume <span>Tech</span> - Services Informatiques à la Personne</h2>
            </div>

            <p className='text-1'>
               <span>1. Présentation de l’entreprise</span> <br />
                Guillaume Tech est une entreprise de services informatiques à la personne,
                dont l’activité principale concerne l’assistance aux démarches administratives en ligne,
                l’initiation à la programmation, ainsi que la mise à jour des logiciels et systèmes d'exploitation (OS).
            </p><br />

            <p className='text-2'>
               <span>2. Objet</span> <br />
                Les présentes Conditions Générales de Vente (CGV) définissent les termes et conditions dans lesquels Guillaume Tech fournit ses prestations informatiques à ses clients particuliers.
            </p><br />

            <p className='text-3'>
               <span> 3. Services proposés</span><br />
                Guillaume Tech propose les services suivants :<br/>

                Assistance administrative : Aide pour les démarches administratives en ligne (création de comptes, soumission de documents, gestion des démarches sur les sites publics, etc.).
                Initiation à la programmation : Formation de base aux langages de programmation, outils de développement, et méthodologies de programmation.
                Mise à jour logicielle et OS : Assistance pour la mise à jour des logiciels, des systèmes d’exploitation, et des drivers informatiques.
            </p><br />

            <p className='text-4'>
              <span>4. Tarifs et conditions de paiement</span><br />
                Les tarifs des prestations sont fixés et communiqués avant chaque intervention. Toute prestation sera précédée d’un devis gratuit accepté par le client. Les prix sont exprimés en euros, toutes taxes comprises (TTC).
                Le paiement peut s'effectuer par virement bancaire, chèque ou espèces, à la fin de la prestation. Guillaume Tech se réserve le droit de facturer des frais de déplacement selon la localisation du client.
            </p><br />

            <p className='text-5'>
               <span> 5. Prise de rendez-vous et délai d'intervention</span><br />
                Les rendez-vous sont pris par téléphone, email, ou via le site web de Guillaume Tech. Les délais d'intervention sont indiqués lors de la prise de contact et peuvent varier en fonction de la disponibilité du client et des techniciens. Guillaume Tech s'efforce de répondre aux demandes dans un délai raisonnable.
            </p><br />

            <p className='text-6'>
              <span> 6. Responsabilités</span><br />
                Guillaume Tech s’engage à fournir ses services avec compétence et diligence. Toutefois, elle ne pourra être tenue responsable en cas de :

                Mauvaise utilisation des outils et logiciels par le client après l’intervention ;
                Perte de données liée à la mise à jour des logiciels ou OS si le client n'a pas pris de mesures de sauvegarde adéquates ;
                Dysfonctionnements résultant d’une incompatibilité matérielle ou logicielle non signalée avant l’intervention.
            </p><br />

            <p className='text-7'>
              <span>  7. Rétractation</span><br />
                Le client dispose d'un délai de rétractation de 14 jours à compter de la signature du devis, conformément à l’article L.221-18 du Code de la consommation. Cependant, si le client demande une intervention immédiate, il renonce à ce droit de rétractation une fois la prestation commencée.
            </p><br />

            <p className="text-8">
              <span> 8. Confidentialité</span><br />
                Guillaume Tech s'engage à respecter la confidentialité des informations fournies par le client dans le cadre des prestations, et à ne pas divulguer ces informations à des tiers sans l’accord du client.
            </p><br />

            <p className="text-9">
             <span> 9. Résolution des litiges</span><br />
                En cas de litige, les parties s’engagent à rechercher une solution amiable avant toute action en justice. Si aucun accord n'est trouvé, le litige sera porté devant les tribunaux compétents.
            </p><br />

            <p className="text-10">
              <span>  10. Modification des CGV</span><br />
                Guillaume Tech se réserve le droit de modifier à tout moment les présentes CGV. Toute modification sera notifiée au client et s'appliquera à toutes nouvelles prestations.
            </p>

        </div>
        <ScrollToTopButton />
        </>
    )
}

export default CGV
