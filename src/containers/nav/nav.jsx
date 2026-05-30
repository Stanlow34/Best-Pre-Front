import React from 'react';
import { Link } from 'react-router-dom'

import './nav.css';

const NavApp = () => (
    <>
<div className="burger-container">
    <button className="burger" id="burger">☰</button>
</div>    
<div className="sidebar_left">
    <div className="sidebar-logo">
        <Link to="/home/" className="home-logo-nav"><img id="home-logo-nav" src="../media/logo/logo.svg"></img></Link>
    </div>
    <nav className="sidebar" id="nav_app">
        <div className="nav-link">
            <img id="home-logo" src="../media/nav/001.png"></img><Link to="/ventes/vue" id="sell-menu" className="sell">Ventes</Link>
        </div>
        <div className="nav-link">
            <img id="home-logo" src="../media/nav/002.png"></img><Link to="/crm/vue" id="customer-menu" className="customer">CRM</Link>
        </div>
        <div className="nav-link">
            <img id="home-logo" src="../media/nav/003.png"></img><Link to="/banque/vue" id="bank-menu" className="bank">Banque</Link>
        </div>
        <div className="nav-link">
            <img id="home-logo" src="../media/nav/004.png"></img><Link to="/impots/vue" id="taxes-menu" className="taxes">Fiscalité</Link>
        </div>
        <div className="nav-link">
            <img id="home-logo" src="../media/nav/005.png"></img><Link to="/remuneration/vue" id="revenu-menu" className="revenu">Rémunération</Link>
        </div>
        <div className="nav-link">
            <img id="home-logo" src="../media/nav/006.png"></img><Link to="/immobilier/vue" id="bulding-menu" className="bulding">Immobilier</Link> 
        </div>    
    </nav>
</div>
    </>
);

export default NavApp;

//const menu_app = () => (
//    <nav className="menu gradient-menu">
//        <a href="../home/"><img id="home-logo" src="../media/other/home.svg"></img></a>
//        <a href="../ventes/vue" id="sell-menu" className="sell">Ventes</a>
//        <a href="../clients/vue" id="customer-menu" className="customer">CRM</a>
//        <a href="../banque/vue" id="bank-menu" className="bank">Banque</a>
//        <a href="../impots/vue" id="taxes-menu" className="taxes">Fiscalité</a>
//        <a href="../revenue/vue" id="revenu-menu" className="revenu">Rémunération</a>
//        <a href="../immobilier/vue" id="bulding-menu" className="bulding">Immobilier</a> 
//    </nav>
//);


//                <div class="site-name">
//                    <a href="../" class="lien-logo">
//                        <img id="logo" src="/media/logo/logo.svg">
//                        <h1 class="site-name">Best Project</h1>
//                    </a>
//                </div>
//                <div class="connect">
//                    <button class="btn connected"><a href="#" class="profil">Profil</a></button>
//                    <button class="btn connected"><a href="#" class="setting">Paramètres</a></button>
//                </div>
//            </div>
//            <nav class="menu gradient2" id="nav_app">
//            </nav>
//            <nav id="home-sous-menu">
//            </nav>
//                <div class="banner gradient">