import React from 'react';
import './sell.css';
import {Sub_nav_sell} from '../secondNav/subNav.jsx';
import Invoice from './invoice/invoice.jsx';
import { Items } from './items/items.jsx';

function SellP() {
    return (
        <div className="sell-container">
          <h1>Ventes</h1>
          <p>Contenu de la section Ventes</p>
        </div>
    );
}

function SellPage() {
    return (
      <>    
        <Sub_nav_sell />
        <SellP />
      </>
    );
}

function InvoicePage() {
    return (
      <>
        <Sub_nav_sell />
        <Invoice />
      </>
    );  
}

function ItemsPage() {
    return (
      <>
        <Sub_nav_sell />
        <Items />
      </>
    );
}

function StockP() {
    return (
        <div className="stock-container">
          <h1>Stock</h1>
          <p>Contenu de la section Stock</p>
        </div>
    );
}

function StockPage() {
    return (
      <>
        <Sub_nav_sell />
        <StockP />
      </>
    );
}

function SellSettingsP() {
    return (
        <div className="sell-settings-container">
          <h1>Paramètres de Ventes</h1>
          <p>Contenu de la section Paramètres de Ventes</p>
        </div>
    );
}

function SellSettingsPage() {
    return (
      <>
        <Sub_nav_sell />
        <SellSettingsP />
      </>
    );
}

export { SellPage, InvoicePage, ItemsPage, StockPage, SellSettingsPage };
