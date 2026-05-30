import React from 'react'
import { createPortal } from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Article from'../../components/article.jsx'
import Articles from '../../constants/articles.jsx'
import Home from '../home/Home.jsx'
//import ConnectionTest from '../../components/ConnectionTest.js';
import './App.css'

import LoginGoogle from '../../auth/Login.google';
import Login from '../../auth/login';
import AuthCallback from '../../auth/AuthCallback';
import Dashboard from '../login/Dashboard';
import Register from '../../auth/Register';
import { SellPage, InvoicePage, ItemsPage, StockPage, SellSettingsPage } from '../sell/sell.jsx';
import { CRMPage, CustomerPage,MailingPage, StatisticsPage, CRMSettingsPage } from '../crm/crm.jsx';
import { BankPage, BankVisualPage, BankDetailPage, BankAttachmentPage, BankSettlementPage, BankSettingsPage } from '../bank/bank.jsx';
import { TaxPage, TaxProfessionalPage, TaxTVAPage, TaxIRPPPage, TaxAdvicePage, TaxOtherPage, TaxSettingsPage } from '../tax/tax.jsx';
import { RevenuePage, RevenueSummaryPage, RevenueDetailPage, RevenueAdvicePage, RevenueOtherPage, RevenueSettingsPage } from '../revenue/revenue.jsx';
import { BuildingPage, BuildingListPage, BuildingRevenuePage, BuildingAdvicePage, BuildingOtherPage, BuildingSettingsPage } from '../building/building.jsx';
import BannerApp from '../bannerApp/bannerApp.jsx';
import FooterApp from '../footerApp/footerApp.jsx';
import NavApp from '../nav/nav.jsx';


//const App = () => (
//<>
//  <div className='EnCours'>
//    <h1>En cours de développement...</h1>
//    <p>Merci de votre patience !</p>
//    <button className='btn encours-btn prod-btn'><a href="https://declarerfacile.fr/app/ventes/">Accéder à l'application (Prod)</a></button>
//    <button className='btn encours-btn staging-btn'><a href="https://preprod.declarerfacile.fr/app/ventes/">Accéder à l'application (Préprod)</a></button>
//    <button className='btn encours-btn dev-btn'><a href="../app/ventes/">Accéder à l'application (Dev)</a></button>
//  </div>
//</>
//);
//
//const Testfunction = () => (
//  <ConnectionTest />
//);



export function App() {
  return (
    <BrowserRouter>
      {createPortal(
        <BannerApp />,
        document.getElementById('banner')
      )}
      <NavApp />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="/ventes/vue" element={<SellPage />} />
        <Route path="/ventes/factures" element={<InvoicePage />} />
        <Route path="/ventes/articles" element={<ItemsPage />} />
        <Route path="/ventes/stock" element={<StockPage />} />
        <Route path="/ventes/parametres" element={<SellSettingsPage />} />

        <Route path="/crm/vue" element={<CRMPage />} />
        <Route path="/crm/clients" element={<CustomerPage />} />
        <Route path="/crm/mailing" element={<MailingPage />} />
        <Route path="/crm/statistiques" element={<StatisticsPage />} />
        <Route path="/crm/parametres" element={<CRMSettingsPage />} />

        <Route path="/banque/vue" element={<BankPage />} />
        <Route path="/banque/visuel" element={<BankVisualPage />} />
        <Route path="/banque/detail" element={<BankDetailPage />} />
        <Route path="/banque/rattachement" element={<BankAttachmentPage />} />
        <Route path="/banque/settlement" element={<BankSettlementPage />} />
        <Route path="/banque/parametres" element={<BankSettingsPage />} />

        <Route path="/impots/vue" element={<TaxPage />} />
        <Route path="/impots/professionnels" element={<TaxProfessionalPage />} />
        <Route path="/impots/tva" element={<TaxTVAPage />} />
        <Route path="/impots/irpp" element={<TaxIRPPPage />} />
        <Route path="/impots/conseils" element={<TaxAdvicePage />} />
        <Route path="/impots/autres" element={<TaxOtherPage />} />
        <Route path="/impots/parametres" element={<TaxSettingsPage />} />

        <Route path="/remuneration/vue" element={<RevenuePage />} />
        <Route path="/remuneration/recapitulatif" element={<RevenueSummaryPage />} />
        <Route path="/remuneration/detail" element={<RevenueDetailPage />} />
        <Route path="/remuneration/conseils" element={<RevenueAdvicePage />} />
        <Route path="/remuneration/autres" element={<RevenueOtherPage />} />
        <Route path="/remuneration/parametres" element={<RevenueSettingsPage />} />

        <Route path="/immobilier/vue" element={<BuildingPage />} />
        <Route path="/immobilier/liste" element={<BuildingListPage />} />
        <Route path="/immobilier/revenus" element={<BuildingRevenuePage />} />
        <Route path="/immobilier/conseils" element={<BuildingAdvicePage />} />
        <Route path="/immobilier/autres" element={<BuildingOtherPage />} />
        <Route path="/immobilier/parametres" element={<BuildingSettingsPage />} />
      </Routes>
      {createPortal(
        <FooterApp />,
        document.getElementById('footer-app')
      )}
    </BrowserRouter>
  );
}

//<Route path="/app/ventes/?view=invoice-settings" element={<LoginGoogle />} />
//        <Route path="/app/ventes/?view=items" element={<AuthCallback />} />
//        <Route path="/parametres" element={<Dashboard />} />
//        <Route path="/app/ventes/?view=invoice" element={<Login />} />
//        <Route path="/register" element={<Register />} />
//        <Route path="/auth/callback" element={<AuthCallback />} />
//        <Route path="/dashboard" element={<Dashboard />} />

