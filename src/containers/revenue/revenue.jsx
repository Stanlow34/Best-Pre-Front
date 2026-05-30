import React from 'react';
import './revenue.css';
import { Sub_nav_revenue } from '../secondNav/subNav.jsx';

function RevenueP() {
  return (
    <div className="revenue-container">
      <h1>Revenus</h1>
      <p>Contenu de la section Revenus</p>
    </div>
  );
}

function RevenuePage() {
  return (
    <>
      <Sub_nav_revenue />
      <RevenueP />
    </>
  );
}

function RevenueSummaryP() {
  return (
    <div className="revenue-summary-page">
      <h1>Récapitulatif des Revenus</h1>
      <p>Voici un aperçu de vos revenus pour la période sélectionnée.</p>
      {/* Ajoutez ici les composants ou graphiques pour afficher le récapitulatif des revenus */}
    </div>
  );
}

function RevenueSummaryPage() {
  return (
    <>
      <Sub_nav_revenue /> 
      <RevenueSummaryP />
    </>
  );
}

function RevenueDetailP() {
  return (
    <div className="revenue-detail-page">
      <h1>Détails des Revenus</h1>
      <p>Voici les détails de vos revenus, y compris les sources et les montants.</p>
      {/* Ajoutez ici les composants ou tableaux pour afficher les détails des revenus */}
    </div>
  );
}

function RevenueDetailPage() {
  return (
    <>
      <Sub_nav_revenue />
      <RevenueDetailP />
    </>
  );
}

function RevenueAdviceP() {
  return (
    <div className="revenue-advice-page">
      <h1>Conseils pour Augmenter vos Revenus</h1>
      <p>Voici quelques conseils pour vous aider à augmenter vos revenus.</p>
      {/* Ajoutez ici des conseils ou des ressources pour aider les utilisateurs à augmenter leurs revenus */}
    </div>
  );
}

function RevenueAdvicePage() {
  return (
    <>
      <Sub_nav_revenue />
      <RevenueAdviceP />
    </>
  );
}

function RevenueOtherP() {
  return (
    <div className="revenue-other-page">
      <h1>Autres Informations sur les Revenus</h1>
      <p>Voici d'autres informations pertinentes concernant vos revenus.</p>
      {/* Ajoutez ici d'autres informations ou fonctionnalités liées aux revenus */}
    </div>
  );
}

function RevenueOtherPage() {
  return (
    <>
      <Sub_nav_revenue />
      <RevenueOtherP />
    </>
  );
}

function RevenueSettingsP() {
  return (
    <div className="revenue-settings-page">
      <h1>Paramètres des Revenus</h1>
      <p>Configurez vos préférences et paramètres liés aux revenus ici.</p>
      {/* Ajoutez ici des options de configuration pour les revenus */}
    </div>
  );
}   

function RevenueSettingsPage() {
  return (
    <>
      <Sub_nav_revenue />
      <RevenueSettingsP />
    </>
  );
}

export { RevenuePage, RevenueSummaryPage, RevenueDetailPage, RevenueAdvicePage, RevenueOtherPage, RevenueSettingsPage };