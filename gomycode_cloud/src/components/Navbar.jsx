import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import image_1 from '../assets/images/mockup.png';
import image_2 from '../assets/images/nav.png';
export default function Navbar() {
    return (
    <div className='landing'>
        <div className="navbar container d-flex justify-content-between">
            <div className="flex-start ">
                <span className="logo"style={{color: 'blue'}} >Sen Map</span>
            </div>
            <div className="flex-end d-flex">
                <a href="/" className="nav-link " style={{color: 'green'}}>Accueil</a>
                <a href="/contact" className="nav-link" style={{color: 'green'}}>Contact</a>
                <a href="/login" className="nav-link mx-2" style={{color: 'green'}}>Connexion</a>
                <a href="/register" className="nav-link"style={{color: 'grey'}}>Inscription</a>
            </div>
        </div>
        <div className="textSection text-center">
            <h3 style={{color: 'blue'}}>Bienvenue !</h3>
            <p className='container intro col-6 lh-lg'  style={{color: 'blue'}}>Que vous soyez un voyageur passionné, un explorateur urbain ou simplement à la recherche de nouvelles aventures, notre application est conçue pour vous guider à travers les méandres du monde avec facilité et précision.</p>
            <img src={image_2} alt="Mockup" className='imgMockup'/>
        </div>
    </div>
    )
}
