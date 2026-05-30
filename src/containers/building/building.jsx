import React from 'react';
import './building.css';
import {Sub_nav_building} from '../secondNav/subNav.jsx';

function BuildingP() {
  return (
    <div className="building-page">
      <h1>Immobilier</h1>
      <p>Contenu de la section Immobilier</p>
    </div>
  );
}

function BuildingPage() {
  return (
    <>
      <Sub_nav_building />
      <BuildingP />
    </>
  );
}

function BuildingListP() {
  return (
    <div className="building-list-page">
      <h1>Liste des bâtiments</h1>
      {/* Contenu de la liste des bâtiments */}
    </div>
  );
}

function BuildingListPage() {
  return (
    <>
      <Sub_nav_building />
      <BuildingListP />
    </>
  );
}

function BuildingRevenueP() {
  return (
    <div className="building-revenue-page">
      <h1>Revenus des bâtiments</h1>
      {/* Contenu des revenus des bâtiments */}
    </div>
  );
}

function BuildingRevenuePage() {
  return (
    <>
      <Sub_nav_building />
      <BuildingRevenueP />
    </>
  );
}

function BuildingAdviceP() {
  return (
    <div className="building-advice-page">
      <h1>Conseils pour les bâtiments</h1>
      {/* Contenu des conseils pour les bâtiments */}
    </div>
  );
}

function BuildingAdvicePage() {
  return (
    <>
      <Sub_nav_building />
      <BuildingAdviceP />
    </>
  );
}

function BuildingOtherP() {
  return (
    <div className="building-other-page">
      <h1>Autres informations sur les bâtiments</h1>
      {/* Contenu des autres informations sur les bâtiments */}
    </div>
  );
}

function BuildingOtherPage() {
  return (
    <>
      <Sub_nav_building />
      <BuildingOtherP />
    </>
  );
}

function BuildingSettingsP() {
  return (
    <div className="building-settings-page">
      <h1>Paramètres des bâtiments</h1>
      {/* Contenu des paramètres des bâtiments */}
    </div>
  );
}

function BuildingSettingsPage() {
  return (
    <>
      <Sub_nav_building />
      <BuildingSettingsP />
    </>
  );
}

export { BuildingPage, BuildingListPage, BuildingRevenuePage, BuildingAdvicePage, BuildingOtherPage, BuildingSettingsPage };