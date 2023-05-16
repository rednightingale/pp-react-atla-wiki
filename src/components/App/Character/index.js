/* eslint-disable no-nested-ternary */

// -- Mes imports locaux
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Logo from './logo';
import "./style.scss";

// -- Mon composant
function Character() {
  // Je souhaite savoir l'id du personnage de la fiche
  const { id, name } = useParams();

  // L'adresse racine de mon API
  const api = `https://api.sampleapis.com/avatar/`;

  // Pour récupérer les données du personnage de l'API et les afficher
  const [character, setCharacter] = useState([]);
  console.log("1 x CHARACTER", character);

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

  // Je n'arrive pas à déconstruire mon state "character" => pourquoi ?????
  // ATTENTION !!!!!!
  // Je dois toujours vérifier si mes objets sont dans des tableaux ou des strings
  // Si se sont des tableaux, je peux mapper dessus et je les joints avec une virgule
  // Si se sont des strings, je prend la string telle quelle
  const alternativeNames = Array.isArray(character.bio?.alternativeNames) ? character.bio?.alternativeNames.join(", ") : character.bio?.alternativeNames;
  const position = Array.isArray(character.politicalInformation?.position) ? character.politicalInformation?.position.join(", ").replace(`[9]`, "") : character.politicalInformation?.position;
  const nationality = Array.isArray(character.bio?.nationality) ? character.bio?.nationality.join(", ") : character.bio?.nationality;
  const ethnicity = character.bio?.ethnicity;

  // J'aimerais utiliser "ethnicity" pour afficher le drapeau des personnages dans le ASIDE
  // Si j'utilise "ethnicity", j'ai un %20 à la place d'un espace qui empêche le logo de s'afficher
  // J'essaye de l'enlever avec :
  // const encodedEthnicity = decodeURI(ethnicity);
  // const encodedEthnicity = ethnicity?.replace(/%20/g, " ");
  // SAUF QUE : avec useState, j'ai d'abord un undefined et ensuite l'"ethnicity"
  // Du coup, je vais créer un composant dynamique à part,
  // mais je pense qu'il y a une autre façon de faire

  // Je souhaite afficher l'image du "love interest" sur les fiches personnages
  // character.personalInformation?.loveInterest
  // C'est égale à une string avec les différents noms + statut de la relation
  // J'aimerais sortir les noms de la string et arriver à afficher leur photo
  // en associant leur nom au dossier publique d'images
  const regExp = /Aang|Appa|Azula|Iroh|Katara|Long Feng|Momo|Ozai|Sokka|Suki|Toph Beifong|Zhao|Zuko/gi;
  const lovers = character.personalInformation?.loveInterest?.match(regExp);
  console.log("NOMS TROUVES", lovers);

  return (
    <article className="Character">
      <div className="Character-header-container">
        <header className="Character-header">

          <h1 className="Character-header-title">{name}</h1>

          <article className="Character-header-info">
            {/* <header className="Character-header-info-title">Character sheet</header> */}
            <h3 className="Character-header-info-subtitle">Alternative names</h3>
            <p className="Character-header-info-text">{alternativeNames}</p>
            <h3 className="Character-header-info-subtitle">Position</h3>
            <p className="Character-header-info-text">{position}</p>
            <h3 className="Character-header-info-subtitle">Nationality</h3>
            <p className="Character-header-info-text">{nationality}</p>
            <h3 className="Character-header-info-subtitle">Ethnicity</h3>
            <p className="Character-header-info-text">{ethnicity}</p>
            <h3 className="Character-header-info-subtitle">Age</h3>
            {Array.isArray(character.bio?.ages)
              ? character.bio?.ages.map((age) => (
                <p className="Character-header-info-text" key={age}>{age
                  .replace(`[3]`, "")
                  .replace(`[4]`, "")
                  .replace(`[5]`, "")
                  .replace(`[6]`, "")
                  .replace(`[7]`, "")}
                </p>
              )) : <p className="Character-header-info-text">{character.bio?.ages}</p>}
            <h3 className="Character-header-info-subtitle">Weapons of choice</h3>
            {Array.isArray(character.personalInformation?.weaponsOfChoice)
              ? character.personalInformation?.weaponsOfChoice.map((weapon) => (
                <p className="Character-header-info-text" key={weapon}>{weapon}</p>
              ))
              : <p className="Character-header-info-text">{character.personalInformation?.weaponsOfChoice}</p>}
            <h3 className="Character-header-info-subtitle">Fighting styles</h3>
            {Array.isArray(character.personalInformation?.fightingStyles)
              ? character.personalInformation?.fightingStyles.map((item) => (
                <p className="Character-header-info-text" key={item}>{item}</p>
              ))
              : <p className="Character-header-info-text">{character.personalInformation?.fightingStyles}</p>}
          </article>

        </header>

        <aside className="Character-header-aside">
          <figure className="Character-header-aside-figure">
            <img
              className="Character-header-aside-figure-image"
              src={id === 8 ? `/img/Characters/Suki.jpg` : id === 11 ? `/img/Characters/Azula.jpg` : `/img/Characters/${name}.jpg`}
              alt={`Character of ${name}`}
            />
            {/* <figcaption className="Character-figure-caption"></figcaption> */}
          </figure>
          <h2 className="Character-header-aside-title">Nation</h2>
          <figure className="Character-header-aside-nation">
            <Logo {...character} />
          </figure>
          <h2 className="Character-header-aside-title">In love with</h2>
          <figure className="Character-header-aside-love">
            {lovers?.length > 1
              ? lovers.map((lover) => (
                <img
                  className="Character-header-aside-love-image"
                  src={`/img/Characters/${lover}.jpg`}
                  alt={`${name}'s lover`}
                  key={lover}
                />
              ))
              : (
                <img
                  className="Character-header-aside-love-image"
                  src={`/img/Characters/${lovers}.jpg`}
                  alt={`${name}'s lover`}
                />
              )}
          </figure>
        </aside>
      </div>

      <div className="Character-carousel-container">
        <section className="Character-carousel-allies">
          <h2 className="Character-carousel-allies-title">allies</h2>
        </section>

        <section className="Character-carousel-ennemies">
          <h2 className="Character-carousel-ennemies-title">enemies</h2>
        </section>
      </div>
    </article>
  );
}

// -- Mon export
export default Character;
