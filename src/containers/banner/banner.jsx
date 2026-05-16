import React, { useState,useEffect,useRef } from "react";
import "./banner.css";

const Banner = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && 
        !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="banner">
      <div className="site-name box-banner">
        <a href="../../" className="lien-logo">
          <img id="logo" src="../../media/logo/logo.svg" alt="Logo" />
          <h1 className="site-name">Best Project</h1>
        </a>
      </div>

      <div className="schema_name box-banner">
        <a href="#" id="schema_name">Nom du dossier</a>
      </div>

      <div className="profile-container">
        <button
          className="btn profil"
          id="profilBtn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          Mon Compte
        </button>

        {menuOpen && (
          <div className="submenu" ref={menuRef}>
            <a href="/profil">Profil</a>
            <a href="/parametres">Paramètres</a>
            <a href="/deconnexion">Déconnexion</a>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Banner