import React from 'react'
import Article from'../../components/article.jsx'
import Articles from '../../constants/articles.jsx'
import Home from '../home/Home.jsx'
import ConnectionTest from '../../components/ConnectionTest.jsx';
import './App.css'

const App = () => (
<>
  <div className='EnCours'>
    <h1>En cours de développement...</h1>
    <p>Merci de votre patience !</p>
    <button className='btn encours-btn prod-btn'><a href="https://declarerfacile.fr/app/ventes/">Accéder à l'application (Prod)</a></button>
    <button className='btn encours-btn staging-btn'><a href="https://preprod.declarerfacile.fr/app/ventes/">Accéder à l'application (Préprod)</a></button>
    <button className='btn encours-btn dev-btn'><a href="../app/ventes/">Accéder à l'application (Dev)</a></button>
  </div>
</>
);

const Testfunction = () => (
  <ConnectionTest />
);



//console.log(Articles);
//
//const App2 = () => (
//  <div className='App'>
//    <Home>
//      {Articles.map((article, index) => (
//        <Article
//          key={index}
//          {...article}
//        />
//      ))}
//    </Home>
//  </div>
//)

export { App, Testfunction };
