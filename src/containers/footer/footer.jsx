import React from 'react';

import './footer.css';

const FooterApp = () => (
    <>
            <div className="up-btn">
                <a href="#"><i></i><img src="/media/other/up.svg" className="up-logo"></img></a>
            </div>
            <div className="footer">
                <div className="footer-left">
                    <a href="legal.html">Mentions légales</a>
                    <a href="cgv.html">Conditions générales de ventes</a>
                    <a href="cgu.html">Conditions générales d'utilisation</a>
                </div>
                <div className="footer-right">
                    <a href="plan.html">Plan du site</a>
                    <a href="fees.html">Tarifs</a>
                    <a href="contact.html">Nous contacter</a>
                </div>
            </div>
        </>
)

export default FooterApp;