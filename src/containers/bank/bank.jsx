import React from 'react';
import './bank.css';
import {Sub_nav_bank} from '../secondNav/subNav.jsx';

function BankP() {
  return (
    <div className="bank-container">
      <h1>Banque</h1>
      <p>Contenu de la section Banque</p>
    </div>
  );
}

function BankPage() {
  return (
    <>
      <Sub_nav_bank />
      <BankP />
    </>
  );
}

function BankVisualP() {
  return (
    <div className="bank-container">
      <h1>Banque - Vue</h1>
      <p>Contenu de la section Banque - Vue</p>
    </div>
  );
}

function BankVisualPage() {
  return (
    <>
      <Sub_nav_bank />
      <BankVisualP />
    </>
  );
}

function BankDetailP() {
  return (
    <div className="bank-container">
      <h1>Banque - Détails</h1>
      <p>Contenu de la section Banque - Détails</p>
    </div>
  );
}

function BankDetailPage() {
  return (
    <>
      <Sub_nav_bank />
      <BankDetailP />
    </>
  );
}

function BankAttachmentP() {
  return (
    <div className="bank-container">
      <h1>Banque - Pièces jointes</h1>
      <p>Contenu de la section Banque - Pièces jointes</p>
    </div>
  );
}

function BankAttachmentPage() {
  return (
    <>
      <Sub_nav_bank />
      <BankAttachmentP />
    </>
  );
}

function BankSettlementP() {
  return (
    <div className="bank-container">
      <h1>Banque - Règlements</h1>
      <p>Contenu de la section Banque - Règlements</p>
    </div>
  );
}

function BankSettlementPage() {
  return (
    <>
      <Sub_nav_bank />
      <BankSettlementP />
    </>
  );
}

function BankSettingsP() {
  return (
    <div className="bank-container">
      <h1>Banque - Paramètres</h1>
      <p>Contenu de la section Banque - Paramètres</p>
    </div>
  );
}

function BankSettingsPage() {
  return (
    <>
      <Sub_nav_bank />
      <BankSettingsP />
    </>
  );
}

export { BankPage, BankVisualPage, BankDetailPage, BankAttachmentPage, BankSettlementPage, BankSettingsPage };
