/* eslint-disable no-nested-ternary */

// -- Mes imports locaux
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import "./style.scss";

// -- Mon composant
function Character() {
  // Je souhaite savoir l'id du personnage de la fiche
  const { id, name } = useParams();

  // L'adresse racine de mon API
  const api = `https://api.sampleapis.com/avatar/`;

  // Pour récupérer les données du personnage de l'API et les afficher
  const [character, setCharacter] = useState([]);
  console.log(character);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Je récupère les infos du personnage en fonction de l'ID utilisé dans les paramètres
        const response = await axios.get(`${api}characters/${id}`);
        // J'ajoute les infos du personnage dans mon state
        setCharacter(response.data);
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <article className="Character">
      <header className="Character-header">
        <h1 className="Character-header-title">NOM DU PERSO</h1>
        <figure className="Character-header-figure">
          <img
            className="Character-header-figure-picture"
            src={id === 8 ? `/img/Characters/Suki.jpg` : id === 11 ? `/img/Characters/Azula.jpg` : `/img/Characters/${name}.jpg`}
            alt={`Character of ${name}`}
          />
          <figcaption className="Character-header-figure-caption">UNE FIGCAPTION</figcaption>
        </figure>
      </header>

      <aside className="Character-aside">
        <h2 className="Character-aside-title">Nation</h2>
        <figure className="Character-aside-nation">
          <img
            className="Character-aside-nation-picture"
            // src={}
            alt={`Flag of ${name}'s nation`}
          />
        </figure>
        <h2 className="Character-aside-title">In love with</h2>
        <figure className="Character-aside-love">
          <img
            className="Character-aside-love-picture"
            // src={}
            alt={`${name}'s love interest`}
          />
        </figure>
      </aside>

      <article className="Character-info">
        <header className="Character-info-title">Character sheet</header>
        <h3 className="Character-info-subtitle">alternativeNames</h3>
        <p className="Character-info-text">alternativeNames</p>
        <h3 className="Character-info-subtitle">profession</h3>
        <p className="Character-info-text">profession</p>
        <h3 className="Character-info-subtitle">nationality</h3>
        <p className="Character-info-text">nationality</p>
        <h3 className="Character-info-subtitle">ethnicity</h3>
        <p className="Character-info-text">ethnicity</p>
        <h3 className="Character-info-subtitle">ages</h3>
        <p className="Character-info-text">ages</p>
        <h3 className="Character-info-subtitle">weaponsOfChoice</h3>
        <p className="Character-info-text">weaponsOfChoice</p>
        <h3 className="Character-info-subtitle">fightingStyles</h3>
        <p className="Character-info-text">fightingStyles</p>
      </article>

      <section className="Character-allies">
        <h2 className="Character-allies-title">allies</h2>
      </section>

      <section className="Character-ennemies">
        <h2 className="Character-ennemies-title">enemies</h2>
      </section>
    </article>
  );
}

// -- Mon export
export default Character;
