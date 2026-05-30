import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApiLinxo } from '../../api/apiLinxoApp.jsx';
import { AppAuth } from '../../containers/app/AppAuth.js';


//----Restant à imbriquer dans app.jsx---------------------------------------//

//-----Google Auth--------------------------------------------------------//
const googleAuth = document.getElementsByClassName('google-auth')[0]

if (googleAuth) {
  createRoot(googleAuth).render(
    <StrictMode>
      <AppAuth />
    </StrictMode>,
  )
}

//-----Linxo------------------------------------------------------------------------//
const linxoApp = document.getElementById('linxo-app')

if (linxoApp) {
  createRoot(linxoApp).render(
    <StrictMode>
      <ApiLinxo />
    </StrictMode>,
  )
};
