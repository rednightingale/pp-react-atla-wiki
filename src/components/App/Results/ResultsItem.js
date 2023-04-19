/* eslint-disable no-nested-ternary */

// -- Mes imports extérieurs
import { useState, useEffect } from 'react';

// -- Mes imports locaux
import "./style.scss";

// -- Mon composant
function ResultsItem({ id, name, bio, chronologicalInformation, politicalInformation }) {
  // Je récupère les différentes "position" des personnages à travers "politicalInformation"
  // Je ne garde que deux "positions" pour les cartes de présentation de personnage
  const [position, getPosition] = useState([]);

  // const string = `Blabla [3]`;
  // const stringFiltered = string.replace(`[3]`, "");
  // console.log(stringFiltered);

  useEffect(() => {
    const fetchData = () => {
      try {
        const { position } = politicalInformation;
        const response = position.map((job) => job);
        // eslint-disable-next-line max-len
        // const filteredResponse = response.filter((item, index, array) => index >= array.length - 2);
        const slicedResponse = response.slice(0, 2);

        const filteredResponse = slicedResponse?.map((string) => string.replace(`[3]`, "").replace(`[2]`, ""));
        getPosition(filteredResponse);
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Je déconstruis chronologicalInformation pour plus de facilité
  const { firstAppearance, lastAppearance, voicedBy } = chronologicalInformation;

  return (
    <div className="ResultsItem">
      <article className="ResultsItem-flip-card">
        <div className="ResultsItem-flip-card-inner">
          <div className="ResultsItem-flip-card-front">
            <div className="ResultsItem-flip-card-front-image-container">
              <img
                className="ResultsItem-flip-card-front-image-avatar"
                src={id === 8 ? `/img/Characters/Suki.jpg` : id === 11 ? `/img/Characters/Azula.jpg` : `/img/Characters/${name}.jpg`}
                alt={`Character of ${name}`}
              />
              <div className="ResultsItem-flip-card-front-image-logo-color" />
              <img
                className="ResultsItem-flip-card-front-image-logo"
                src={bio.nationality === "Fire Nation" ? `img/Logo/logo-${bio?.nationality}.png` : bio.nationality === "Air Nomad" ? `img/Logo/logo-${bio?.nationality}.png` : bio.nationality === "Earth Kingdom" ? `img/Logo/logo-${bio?.nationality}.png` : `img/Logo/logo-${bio?.ethnicity}.png`}
                alt={`Nation logo`}
              />
            </div>
            <div className="ResultsItem-flip-card-front-header-container">
              <header className="ResultsItem-flip-card-front-header">
                <hr className="ResultsItem-flip-card-front-header-breakline" />
                <h1 className="ResultsItem-flip-card-front-header-name">{id === 7 ? "Zuko" : id === 8 ? "Suki" : id === 11 ? "Azula" : name}</h1>
                <h2 className="ResultsItem-flip-card-front-header-nationality">{bio.nationality.length > 33 ? bio.nationality.slice(0, 33) : bio.nationality}</h2>
                {position.map((job) => (
                  <p className="ResultsItem-flip-card-front-header-position" key={job}>{job}</p>
                ))}
              </header>
            </div>
          </div>
          <div className="ResultsItem-flip-card-back">
            <div className="ResultsItem-flip-card-back-image-container">
              <img
                className="ResultsItem-flip-card-back-image-avatar"
                src={id === 8 ? `/img/Characters/Suki.jpg` : id === 11 ? `/img/Characters/Azula.jpg` : `/img/Characters/${name}.jpg`}
                alt={`Character of ${name}`}
              />
              <div className="ResultsItem-flip-card-back-image-logo-color" />
              <img
                className="ResultsItem-flip-card-back-image-logo"
                src={bio.nationality === "Fire Nation" ? `img/Logo/logo-${bio?.nationality}.png` : bio.nationality === "Air Nomad" ? `img/Logo/logo-${bio?.nationality}.png` : bio.nationality === "Earth Kingdom" ? `img/Logo/logo-${bio?.nationality}.png` : `img/Logo/logo-${bio?.ethnicity}.png`}
                alt={`Nation logo`}
              />
            </div>
            <aside className="ResultsItem-flip-card-back-info">
              <hr className="ResultsItem-flip-card-back-info-breakline" />
              <h3 className="ResultsItem-flip-card-back-info-title-first">First apparence:</h3>
              <p className="ResultsItem-flip-card-back-info-firstAppearance">{firstAppearance.length === 46 ? firstAppearance.slice(0, 20) : firstAppearance.length < 26 ? firstAppearance : firstAppearance.slice(0, 51)}</p>
              <h3 className="ResultsItem-flip-card-back-info-title">Last apparence:</h3>
              <p className="ResultsItem-flip-card-back-info-lastAppearance">{lastAppearance === "NA" ? "Unknown" : lastAppearance[0]}</p>
              <h3 className="ResultsItem-flip-card-back-info-title">Voiced by:</h3>
              <p className="ResultsItem-flip-card-back-info-voicedBy">{voicedBy === "NA" ? "Unknown" : voicedBy[0]}</p>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
}

// -- Mon export
export default ResultsItem;
