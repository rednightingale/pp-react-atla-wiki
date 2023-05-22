/* eslint-disable no-nested-ternary */

// -- Mes imports extérieurs
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from 'react';

// -- Mes imports locaux
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

  // J'aimerais aussi ajouter des liens vers les fiches personnages sur les images "love interest"
  // MAIS pour ça, j'ai absolument besoin de l'ID des "love interest" en plus de leur nom
  // puisque ma route fonctionne comme ceci : character/:id/:name
  // J'ai besoin pour ça d'avoir aussi accès à toutes mes datas
  const [loversName, setLoversName] = useState([]);
  const [alliesName, setAlliesName] = useState([]);
  const [enemiesName, setEnemiesName] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Je récupère les infos du personnage en fonction de l'ID utilisé dans les paramètres
        const response = await axios.get(`${api}characters/${id}`);
        const myCharacter = response.data;

        // Je récupère toutes les infos de mes personnages
        const response2 = await axios.get(`${api}characters`);
        const allCharacters = response2.data;

        // Je souhaite afficher l'image du "love interest" sur les fiches personnages
        // character.personalInformation?.loveInterest
        // C'est égale à une string avec les différents noms + statut de la relation
        // J'aimerais sortir les noms de la string et arriver à afficher leur photo
        // en associant leur nom au dossier publique d'images
        const regExp = /Aang|Appa|Azula|Iroh|Katara|Long Feng|Momo|Ozai|Sokka|Suki|Toph Beifong|Zhao|Zuko/gi;
        const loversArr = myCharacter.personalInformation?.loveInterest?.match(regExp);
        console.log(loversArr);

        // Je reprends le même schéma pour afficher les alliées et les enemies
        // Ici, je suis obligée de passer par un filter car l'information est sous forme
        // de tableau et non de string
        // eslint-disable-next-line max-len
        const alliesArr = myCharacter.personalInformation?.allies?.filter((allies) => allies.match(regExp));
        const alliesArrFilter = alliesArr?.map((allies) => allies.replace(` (formerly)`, "").replace(`General `, ""));

        // eslint-disable-next-line max-len
        const enemiesArr = myCharacter.personalInformation?.enemies?.filter((enemies) => enemies.match(regExp));
        const enemiesArrFilter = enemiesArr?.map((enemies) => enemies.replace(` (formerly)`, "").replace(`General `, ""));

        console.log("ALLIES ARRAY", alliesArrFilter);
        console.log("ENEMIES ARRAY", enemiesArrFilter);

        // J'ajoute les différentes infos du personnage dans mes différents states
        setCharacter(myCharacter);
        setData(allCharacters);
        setLoversName(loversArr);
        setAlliesName(alliesArrFilter);
        setEnemiesName(enemiesArrFilter);
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [name, id]);

  // La récupération de l'ID directement dans mon map plus bas ne fonctionne pas, j'ai "undefined" :
  // ${lovers?.filter((item) => item.name === `${element}`)?.id}
  // Je crée donc une fonction en dehors
  // pour pouvoir récupérer les IDs de chaque noms mappés (enfin !!!!)
  function getId(item) {
    const findName = data?.find((element) => element.name === item);
    const findId = findName?.id;
    return findId;
  }

  // J'aimerais utiliser "ethnicity" pour afficher le drapeau des personnages dans le ASIDE
  // Si j'utilise "ethnicity", j'ai un %20 à la place d'un espace qui empêche le logo de s'afficher
  // J'essaye de l'enlever avec :
  // const encodedEthnicity = decodeURI(ethnicity);
  // const encodedEthnicity = ethnicity?.replace(/%20/g, " ");
  // SAUF QUE : avec useState, j'ai d'abord un undefined et ensuite l'"ethnicity"
  // Du coup, je vais créer un composant dynamique à part,
  // mais je pense qu'il y a une autre façon de faire

  // Je n'arrive pas à déconstruire mon state "character" => pourquoi ?????
  // ATTENTION !!!!!!
  // Je dois toujours vérifier si mes objets sont dans des tableaux ou des strings
  // Si se sont des tableaux, je peux mapper dessus et je les joints avec une virgule
  // Si se sont des strings, je prend la string telle quelle
  const alternativeNames = Array.isArray(character.bio?.alternativeNames) ? character.bio?.alternativeNames.join(", ") : character.bio?.alternativeNames;
  const position = Array.isArray(character.politicalInformation?.position) ? character.politicalInformation?.position.join(", ").replace(`[9]`, "") : character.politicalInformation?.position;
  const nationality = Array.isArray(character.bio?.nationality) ? character.bio?.nationality.join(", ") : character.bio?.nationality;
  const ethnicity = character.bio?.ethnicity;
  const ages = character.bio?.ages;
  const weapons = character.personalInformation?.weaponsOfChoice;
  const fightingStyles = character.personalInformation?.fightingStyles;

  return (
    <article className="Character">
      <div className="Character-header-container">
        <header className="Character-header">

          <h1 className="Character-header-title">{name === "蘇科 [3]" ? "Zuko" : name}</h1>

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
            {Array.isArray(ages)
              ? ages.map((age) => (
                <p className="Character-header-info-text" key={age}>{age
                  .replace(`[3]`, "")
                  .replace(`[4]`, "")
                  .replace(`[5]`, "")
                  .replace(`[6]`, "")
                  .replace(`[7]`, "")}
                </p>
              )) : <p className="Character-header-info-text">{ages}</p>}
            <h3 className="Character-header-info-subtitle">Weapons of choice</h3>
            {Array.isArray(weapons)
              ? weapons.map((weapon) => (
                <p className="Character-header-info-text" key={weapon}>{weapon}</p>
              ))
              : <p className="Character-header-info-text">{weapons}</p>}
            <h3 className="Character-header-info-subtitle">Fighting styles</h3>
            {Array.isArray(fightingStyles)
              ? fightingStyles.map((item) => (
                <p className="Character-header-info-text" key={item}>{item}</p>
              ))
              : <p className="Character-header-info-text">{fightingStyles}</p>}
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
            {loversName?.map((element) => (
              <Link
                to={element === "Zuko" ? `/character/7/${element}` : element === "Suki" ? `/character/8/${element}` : element === "Azula" ? `/character/11/${element}` : `/character/${getId(element)}/${element}`}
                key={element}
              >
                <img
                  className="Character-header-aside-love-image"
                  src={`/img/Characters/${element}.jpg`}
                  alt={element}
                />
              </Link>
            ))}
          </figure>
          <h2 className="Character-header-aside-title">Allies</h2>
          <figure className="Character-header-aside-allies">
            {alliesName?.map((element) => (
              <Link
                to={element === "Zuko" ? `/character/7/${element}` : element === "Suki" ? `/character/8/${element}` : element === "Azula" ? `/character/11/${element}` : `/character/${getId(element)}/${element}`}
                key={element}
              >
                <img
                  className="Character-header-aside-love-image"
                  src={`/img/Characters/${element}.jpg`}
                  alt={element}
                />
              </Link>
            ))}
          </figure>
          <h2 className="Character-header-aside-title">Enemies</h2>
          <figure className="Character-header-aside-enemies">
            {enemiesName?.map((element) => (
              <Link
                to={element === "Zuko" ? `/character/7/${element}` : element === "Suki" ? `/character/8/${element}` : element === "Azula" ? `/character/11/${element}` : `/character/${getId(element)}/${element}`}
                key={element}
              >
                <img
                  className="Character-header-aside-love-image"
                  src={`/img/Characters/${element}.jpg`}
                  alt={element}
                />
              </Link>
            ))}
          </figure>
        </aside>
      </div>
    </article>
  );
}

// -- Mon export
export default Character;
