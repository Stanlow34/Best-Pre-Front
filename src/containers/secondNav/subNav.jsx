import React from 'react';
import { Link } from 'react-router-dom'
import './subNav.css';


const Sub_nav_sell = () => (
  <nav className="sous_menu gradient-sous-menu">
    <Link to="../ventes/factures" className="class1" id='class1'>Factures</Link>
    <Link to="../ventes/articles" className="class2" id='class2'>Articles</Link>
    <Link to="../ventes/stock" className="class3" id='class3'>Stock</Link>
    <Link to="../ventes/parametres" className="class4" id='class4'>Paramètres</Link>
  </nav>
);

const Sub_nav_crm = () => (
  <nav className="sous_menu gradient-sous-menu">
    <Link to="../crm/clients" className="class1" id='class1'>Clients</Link>
    <Link to="../crm/mailing" className="class2" id='class2'>Mailing</Link>
    <Link to="../crm/statistiques" className="class3" id='class3'>Statistiques</Link>
    <Link to="../crm/parametres" className="class4" id='class4'>Paramètres</Link>
  </nav>
);

const Sub_nav_bank = () => (
  <nav className="sous_menu gradient-sous-menu">
    <Link to="../banque/visuel" className="class1" id='class1'>Banques</Link>
    <Link to="../banque/detail" className="class2" id='class2'>Détail</Link>
    <Link to="../banque/rattachement" className="class3" id='class3'>Rattachement</Link>
    <Link to="../banque/settlement" className="class4" id='class4'>Règlements</Link>
    <Link to="../banque/parametres" className="class5" id='class5'>Paramètres</Link>
  </nav>
);

const Sub_nav_tax = () => (
  <nav className="sous_menu gradient-sous-menu">
    <Link to="../impots/professionnels" className="class1" id='class1'>TVA</Link>
    <Link to="../impots/tva" className="class1" id='class1'>TVA</Link>
    <Link to="../impots/irpp" className="class2" id='class2'>Impôts</Link>
    <Link to="../impots/conseils" className="class3" id='class3'>Conseils</Link>
    <Link to="../impots/autres" className="class4" id='class4'>Autres</Link>
    <Link to="../impots/parametres" className="class5" id='class5'>Paramètres</Link>
  </nav>
);

const Sub_nav_revenue = () => (
  <nav className="sous_menu gradient-sous-menu">
    <Link to="../remuneration/recapitulatif" className="class1" id='class1'>Récapitulatif</Link>
    <Link to="../remuneration/detail" className="class2" id='class2'>Revenus</Link>
    <Link to="../remuneration/conseils" className="class3" id='class3'>Conseils</Link>
    <Link to="../remuneration/autres" className="class4" id='class4'>Autres</Link>
    <Link to="../remuneration/parametres" className="class5" id='class5'>Paramètres</Link>
  </nav>
);

const Sub_nav_building = () => (
  <nav className="sous_menu gradient-sous-menu">
    <Link to="../immobilier/liste" className="class1" id='class1'>Liste</Link>
    <Link to="../immobilier/revenue" className="class2" id='class2'>Revenus</Link>
    <Link to="../immobilier/conseils" className="class3" id='class3'>Conseils</Link>
    <Link to="../immobilier/autres" className="class4" id='class4'>Autres</Link>
    <Link to="../immobilier/parametres" className="class5" id='class5'>Paramètres</Link>
  </nav>
);


export {Sub_nav_sell , Sub_nav_crm, Sub_nav_bank, Sub_nav_tax, Sub_nav_revenue, Sub_nav_building};