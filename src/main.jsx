import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import {App , Testfunction} from './containers/app/App.jsx'
import {Sous_menu_invoice , Sous_menu_crm, Sous_menu_bank, Sous_menu_tax, Sous_menu_revenue, Sous_menu_building} from './containers/secondNav/subNav'
import Nav_app from './containers/nav/nav'
import Banner from './containers/banner/banner'
import FooterApp from './containers/footer/footer'
import Invoice from './containers/invoice/invoice'
import { CreateCustomer, CustomersTable } from './containers/crm/customer'
import { ItemsPage } from './containers/items/items'

const currentView = new URLSearchParams(window.location.search).get('view')
const showItemsView = currentView === 'items'

const API_URL = import.meta.env.VITE_API_URL;

fetch(`${API_URL}/users`);

//-----ConnectionTest--------------------------------------------------------//
const connectionTest = document.getElementById('connection-test')

if (connectionTest) {
  createRoot(connectionTest).render(
    <StrictMode>
      <Testfunction />
    </StrictMode>,
  )
};
//-----Bannière--------------------------------------------------------//
const banner = document.getElementById('banner')

if (banner) {
  createRoot(banner).render(
    <StrictMode>
      <Banner />
    </StrictMode>,
  )
};

//-----Menu--------------------------------------------------------//
const nav = document.getElementById('nav_app')

if (nav) {
  createRoot(nav).render(
    <StrictMode>
      <Nav_app />
    </StrictMode>,
  )
};

//-----Sous-menu--------------------------------------------------------//
const sousMenuInvoice = document.getElementById('sous-menu-invoice')

if (sousMenuInvoice) {
  createRoot(sousMenuInvoice).render(
    <StrictMode>
      <Sous_menu_invoice />
    </StrictMode>,
  )
};


const sousMenuCrm = document.getElementById('sous-menu-crm')

if (sousMenuCrm) {
  createRoot(sousMenuCrm).render(
    <StrictMode>
      <Sous_menu_crm />
    </StrictMode>,
  )
};


const sousMenuBank = document.getElementById('sous-menu-bank')

if (sousMenuBank) {
  createRoot(sousMenuBank).render(
    <StrictMode>
      <Sous_menu_bank />
    </StrictMode>,
  )
};


const sousMenuTax = document.getElementById('sous-menu-tax')

if (sousMenuTax) {
  createRoot(sousMenuTax).render(
    <StrictMode>
      <Sous_menu_tax />
    </StrictMode>,
  )
};


const sousMenuRevenue = document.getElementById('sous-menu-revenue')

if (sousMenuRevenue) {
  createRoot(sousMenuRevenue).render(
    <StrictMode>
      <Sous_menu_revenue />
    </StrictMode>,
  )
};


const sousMenuBuilding = document.getElementById('sous-menu-building')

if (sousMenuBuilding) {
  createRoot(sousMenuBuilding).render(
    <StrictMode>
      <Sous_menu_building />
    </StrictMode>,
  )
};

//-----Factures--------------------------------------------------------//
const invoice = document.getElementsByClassName('invoice-main')[0];

if (invoice && !showItemsView) {
  createRoot(invoice).render(
    <StrictMode>
      <Invoice />
    </StrictMode>,
  )
};

//-----Articles--------------------------------------------------------//
const items = document.getElementsByClassName('items-main')[0];

if (items && showItemsView) {
  createRoot(items).render(
    <StrictMode>
      <ItemsPage />
    </StrictMode>,
  )
};

//-----Clients--------------------------------------------------------//
const customer = document.getElementsByClassName('customer_main')[0];

if (customer) {
  createRoot(customer).render(
    <StrictMode>
      <CreateCustomer />
      <CustomersTable />
    </StrictMode>,
  )
};

//-----Application principale--------------------------------------------------------//
const root = document.getElementById('root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
};

//-----Footer--------------------------------------------------------//
const footer = document.getElementById('footer')

if (footer) {
  createRoot(footer).render(
    <StrictMode>
      <FooterApp />
    </StrictMode>,
  )
};




//pdf-------------------------------------------------------------//


// const el1 = document.querySelector('#sell-menu')
// 
// if (el1) {
//   el1.classList.add('active')
// }
