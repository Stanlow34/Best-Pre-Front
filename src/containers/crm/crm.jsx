import React from 'react';
import './crm.css';
import {Sub_nav_crm} from '../secondNav/subNav.jsx';
import { CustomersTable, CreateCustomer } from './customer/customer.jsx';

function CRMP() {
  return (
    <div className="crm-container">
      <h1>CRM</h1>
      <p>Contenu de la section CRM</p>
    </div>
  );
}

function CRMPage() {
  return (
    <>
      <Sub_nav_crm />
      <CRMP />
    </>
  );
}

function CustomerPage() {
  return (
    <>
      <Sub_nav_crm />
      <CustomersTable />
      <CreateCustomer />
    </>
  );
}


function MailingP() {
  return (
    <div className="crm-container">
      <h1>CRM - Mailing</h1>
      <p>Contenu de la section CRM - Mailing</p>
    </div>
  );
}

function MailingPage() {
  return (
    <>
      <Sub_nav_crm />
      <MailingP />
    </>
  );
}

function StatisticsP() {
  return (
    <div className="crm-container">
      <h1>CRM - Statistiques</h1>
      <p>Contenu de la section CRM - Statistiques</p>
    </div>
  );
}

function StatisticsPage() {
  return (
    <>
      <Sub_nav_crm />
      <StatisticsP />
    </>
  );
}

function CRMSettingsP() {
  return (
    <div className="crm-container">
      <h1>CRM - Paramètres</h1>
      <p>Contenu de la section CRM - Paramètres</p>
    </div>
  );
}

function CRMSettingsPage() {
  return (
    <>
      <Sub_nav_crm />
      <CRMSettingsP />
    </>
  );
}

export { CRMPage, CustomerPage, MailingPage, StatisticsPage, CRMSettingsPage };
