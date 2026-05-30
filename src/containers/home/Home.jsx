import React from 'react';
import ConnectionTest from '../../components/ConnectionTest.js';
import './Home.css';

function Access () {
    return (
      <div className="access-container">
        <h1>En cours de développement...</h1>
        <p>Merci de votre patience !</p>
        <button className='btn encours-btn prod-btn'><a href="https://declarerfacile.fr/app/ventes/">Accéder à l'application (Prod)</a></button>
        <button className='btn encours-btn staging-btn'><a href="https://preprod.declarerfacile.fr/app/ventes/">Accéder à l'application (Préprod)</a></button>
        <button className='btn encours-btn dev-btn'><a href="../home/">Accéder à l'application (Dev)</a></button>
      </div>
    );
}

function Home() {
  return (
    <>
      <Access />
      <ConnectionTest />
    </>
  );
}

export default Home;