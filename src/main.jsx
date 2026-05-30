import { StrictMode, React } from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import './styles/styles.css'
import './containers/app/App.css'
import './containers/secondNav/subNav.css'
import './containers/sell/invoice/invoice.css'
import './containers/crm/customer/customer.css'
import './containers/sell/items/items.css'
import './containers/tax/tax.css'
import './containers/revenue/revenue.css'
import './containers/building/building.css'
import { App } from './containers/app/App.jsx'

const API_URL = import.meta.env.VITE_API_URL;
fetch(`${API_URL}/users`);

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);