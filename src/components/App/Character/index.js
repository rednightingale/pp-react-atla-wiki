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
    <div className="Character">
      Character {name} {character.bio?.nationality}
    </div>
  );
}

// -- Mon export
export default Character;
