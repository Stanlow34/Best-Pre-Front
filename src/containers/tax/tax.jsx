import React from 'react';
import './tax.css';
import {Sub_nav_tax} from '../secondNav/subNav.jsx';

function TaxP() {
  return (
    <div className="tax-container">
      <h1>Tax</h1>
      <p>Contenu de la section Tax</p>
    </div>
  );
}

function TaxPage() {
  return (
    <>
      <Sub_nav_tax />
      <TaxP />
    </>
  );
}

function TaxProfessionalP() {
  return (
    <div className="tax-professional-container">
      <h1>Tax - Professional</h1>
      <p>Contenu de la section Tax - Professional</p>
    </div>
  );
}

function TaxProfessionalPage() {
  return (
    <>
      <Sub_nav_tax />
      <TaxProfessionalP />
    </>
  );
}

function TaxTVAP() {
  return (
    <div className="tax-tva-container">
      <h1>Tax - TVA</h1>
      <p>Contenu de la section Tax - TVA</p>
    </div>
  );
}

function TaxTVAPage() {
  return (
    <>
      <Sub_nav_tax />
      <TaxTVAP />
    </>
  );
}

function TaxIRPPP() {
  return (
    <div className="tax-irpp-container">
      <h1>Tax - IRPP</h1>
      <p>Contenu de la section Tax - IRPP</p>
    </div>
  );
}

function TaxIRPPPage() {
  return (
    <>
      <Sub_nav_tax />
      <TaxIRPPP />
    </>
  );
}

function TaxAdviceP() {
  return (
    <div className="tax-advice-container">
      <h1>Tax - Advice</h1>
      <p>Contenu de la section Tax - Advice</p>
    </div>
  );
}

function TaxAdvicePage() {
  return (
    <>
      <Sub_nav_tax />
      <TaxAdviceP />
    </>
  );
}

function TaxOtherP() {
  return (
    <div className="tax-other-container">
      <h1>Tax - Other</h1>
      <p>Contenu de la section Tax - Other</p>
    </div>
  );
}

function TaxOtherPage() {
  return (
    <>
      <Sub_nav_tax />
      <TaxOtherP />
    </>
  );
}

function TaxSettingsP() {
  return (
    <div className="tax-settings-container">
      <h1>Tax - Settings</h1>
      <p>Contenu de la section Tax - Settings</p>
    </div>
  );
}

function TaxSettingsPage() {
  return (
    <>
      <Sub_nav_tax />
      <TaxSettingsP />
    </>
  );
}

export { TaxPage, TaxProfessionalPage, TaxTVAPage, TaxIRPPPage, TaxAdvicePage, TaxOtherPage, TaxSettingsPage };