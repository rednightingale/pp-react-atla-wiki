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
      <header>
        <h1>NOM DU PERSO</h1>
        <figure>
          <img
            className="Character"
            src={id === 8 ? `/img/Characters/Suki.jpg` : id === 11 ? `/img/Characters/Azula.jpg` : `/img/Characters/${name}.jpg`}
            alt={`Character of ${name}`}
          />
          <figcaption>UNE FIGCAPTION</figcaption>
        </figure>
      </header>

      <aside>
        <h2>Nation</h2>
        <figure>
          <img
            className="Character"
            // src={}
            alt={`Flag of ${name}'s nation`}
          />
        </figure>
        <h2>In love with</h2>
        <figure>
          <img
            className="Character"
            // src={}
            alt={`${name}'s love interest`}
          />
        </figure>
      </aside>

      <article>
        <header>Character sheet</header>
        <h3>alternativeNames</h3>
        <p>alternativeNames</p>
        <h3>profession</h3>
        <p>profession</p>
        <h3>nationality</h3>
        <p>nationality</p>
        <h3>ethnicity</h3>
        <p>ethnicity</p>
        <h3>ages</h3>
        <p>ages</p>
        <h3>weaponsOfChoice</h3>
        <p>weaponsOfChoice</p>
        <h3>fightingStyles</h3>
        <p>fightingStyles</p>
      </article>

      <section>
        <h2>allies</h2>
      </section>

      <section>
        <h2>enemies</h2>
      </section>
    </article>
  );
}

// -- Mon export
export default Character;
