// -- Mes imports extérieurs
import { useState, useEffect } from 'react';

// -- Mes imports locaux
import "./style.scss";

import logo from "./logo.png";
import avatar from "./aang.jpg";

// -- Mon composant
function ResultsItem() {
  return (
    <div className="ResultsItem">
      <article className="ResultsItem-flip-card">
        <div className="ResultsItem-flip-card-inner">
          <div className="ResultsItem-flip-card-front">
            <div className="ResultsItem-flip-card-front-image-container">
              <img
                className="ResultsItem-flip-card-front-image-avatar"
                src={avatar}
                alt="Character of"
              />
              <div className="ResultsItem-flip-card-front-image-logo-color" />
              <img
                className="ResultsItem-flip-card-front-image-logo"
                src={logo}
                alt="Nation logo"
              />
            </div>
            <div className="ResultsItem-flip-card-front-header-container">
              <header className="ResultsItem-flip-card-front-header">
                <h1 className="ResultsItem-flip-card-front-header-name">Aang</h1>
                <h2 className="ResultsItem-flip-card-front-header-nationality">Southern Air Temple</h2>
                <p className="ResultsItem-flip-card-front-header-position">Co-founder of the United Republic of Nations</p>
                <p className="ResultsItem-flip-card-front-header-position">Fully realized Avatar</p>
              </header>
            </div>
          </div>
          <div className="ResultsItem-flip-card-back">
            <div className="ResultsItem-flip-card-back-image-container">
              <img
                className="ResultsItem-flip-card-back-image-avatar"
                src={avatar}
                alt="Avatar"
              />
              <div className="ResultsItem-flip-card-back-image-logo-color" />
              <img
                className="ResultsItem-flip-card-back-image-logo"
                src={logo}
                alt="Logo"
              />
            </div>
            <aside className="ResultsItem-flip-card-back-info">
              <h3 className="ResultsItem-flip-card-back-info-title">Première apparence :</h3>
              <p className="ResultsItem-flip-card-back-info-firstAppearance">The Boy in the Iceberg</p>
              <h3 className="ResultsItem-flip-card-back-info-title">Dernière apparence :</h3>
              <p className="ResultsItem-flip-card-back-info-lastAppearance">Imbalance Part Three (chronological)</p>
              <h3 className="ResultsItem-flip-card-back-info-title">Doublé par :</h3>
              <p className="ResultsItem-flip-card-back-info-voicedBy">Zach Tyler Eisen (in Avatar: The Last Airbender)</p>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}

// -- Mon export
export default ResultsItem;
