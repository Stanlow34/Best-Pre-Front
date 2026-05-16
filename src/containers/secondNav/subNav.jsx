import React from 'react';
import './subNav.css';

const Sous_menu_invoice = () => (
  <nav className="sous_menu gradient-sous-menu">
    <a href="../ventes/?view=invoice" className="class1" id='class1'>Factures</a>
    <a href="../ventes/?view=items#items_main" className="class2" id='class2'>Articles</a>
    <a href="../ventes/?view=stock" className="class3" id='class3'>Stock</a>
    <a href="../ventes/?view=invoice-settings" className="class4" id='class4'>Paramètres</a>
  </nav>
);

const Sous_menu_crm = () => (
  <nav className="sous_menu gradient-sous-menu">
    <a href="../clients/?view=crm" className="class1" id='class1'>Clients</a>
    <a href="../clients/?view=mailing" className="class2" id='class2'>Mailing</a>
    <a href="../clients/?view=crm-statistics" className="class3" id='class3'>Statistiques</a>
    <a href="../clients/?view=crm-settings" className="class4" id='class4'>Paramètres</a>
  </nav>
);

const Sous_menu_bank = () => (
  <nav className="sous_menu gradient-sous-menu">
    <a href="../banque/?view=bank" className="class1" id='class1'>Banques</a>
    <a href="../banque/?view=bank-detail" className="class2" id='class2'>Détail</a>
    <a href="../banque/?view=bank-attached" className="class3" id='class3'>Rattachement</a>
    <a href="../banque/?view=bank-settlement" className="class4" id='class4'>Règlements</a>
    <a href="../banque/?view=bank-settings" className="class5" id='class5'>Paramètres</a>
  </nav>
);

const Sous_menu_tax = () => (
  <nav className="sous_menu gradient-sous-menu">
    <a href="../impots/?view=tax-business" className="class1" id='class1'>TVA</a>
    <a href="../impots/?view=tax-personal" className="class2" id='class2'>Impôts</a>
    <a href="../impots/?view=tax-advice" className="class3" id='class3'>Conseils</a>
    <a href="../impots/?view=tax-other" className="class4" id='class4'>Autres</a>
    <a href="../impots/?view=tax-settings" className="class5" id='class5'>Paramètres</a>
  </nav>
);

const Sous_menu_revenue = () => (
  <nav className="sous_menu gradient-sous-menu">
    <a href="../revenue/?view=revenue-summary" className="class1" id='class1'>Récapitulatif</a>
    <a href="../revenue/?view=revenue" className="class2" id='class2'>Revenus</a>
    <a href="../revenue/?view=revenue-advice" className="class3" id='class3'>Conseils</a>
    <a href="../revenue/?view=revenue-other" className="class4" id='class4'>Autres</a>
    <a href="../revenue/?view=revenue-settings" className="class5" id='class5'>Paramètres</a>
  </nav>
);

const Sous_menu_building = () => (
  <nav className="sous_menu gradient-sous-menu">
    <a href="../building/?view=building-list" className="class1" id='class1'>Liste</a>
    <a href="../building/?view=building-revenue" className="class2" id='class2'>Revenus</a>
    <a href="../building/?view=building-advice" className="class3" id='class3'>Conseils</a>
    <a href="../building/?view=building-other" className="class4" id='class4'>Autres</a>
    <a href="../building/?view=building-settings" className="class5" id='class5'>Paramètres</a>
  </nav>
);


export {Sous_menu_invoice , Sous_menu_crm, Sous_menu_bank, Sous_menu_tax, Sous_menu_revenue, Sous_menu_building};