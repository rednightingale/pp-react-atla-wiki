/* eslint-disable react/require-default-props */
/* eslint-disable no-nested-ternary */

// -- Mes imports extérieurs
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FaPlusCircle } from "react-icons/fa";

// -- Mes imports locaux
import "../style.scss";

// -- Mon composant
function ResultsItem({
  id, name, bio, chronologicalInformation, politicalInformation,
}) {
  // Je récupère les différentes "position" des personnages à travers "politicalInformation"
  // Je ne garde que deux "positions" pour les cartes de présentation de personnage
  const [positions, getPosition] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      try {
        // Je déconstruis politicalInformation pour plus de facilité
        const { position } = politicalInformation;
        // Je récupère tous les titres des positions dans le tableau de chaque personnage
        const response = position.map((job) => job);

        // Je ne garde que les deux premières positions de chaque personnage
        // Cette solution ne me garde que les deux dernières positions
        // eslint-disable-next-line max-len
        // const filteredResponse = response.filter((item, index, array) => index >= array.length - 2);
        // Je souhaite les deux premières "position"
        const slicedResponse = response.slice(0, 2);

        // J'enlève tous les caractères [2] et [3] présents par erreur dans les titres de position
        // de tout mes personnages
        const filteredResponse = slicedResponse?.map((string) => string.replace(`[3]`, "").replace(`[2]`, ""));
        getPosition(filteredResponse);
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // Je déconstruis bio et chronologicalInformation pour plus de facilité
  const { nationality, ethnicity } = bio;
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
              <div className={
                ethnicity === "Fire Nation" || nationality === "Fire Nation"
                  ? "ResultsItem-flip-card-front-image-logo-color ResultsItem-flip-card-front-image-logo-color--fire"
                  : ethnicity === "Air Nomad" || nationality === "Air Nomad"
                    ? "ResultsItem-flip-card-front-image-logo-color ResultsItem-flip-card-front-image-logo-color--air"
                    : ethnicity === "Earth Kingdom" || nationality === "Earth Kingdom"
                      ? "ResultsItem-flip-card-front-image-logo-color ResultsItem-flip-card-front-image-logo-color--earth"
                      : "ResultsItem-flip-card-front-image-logo-color ResultsItem-flip-card-front-image-logo-color--water"
              }
              />
              <img
                className="ResultsItem-flip-card-front-image-logo"
                src={nationality === "Fire Nation" ? `img/Logo/logo-${nationality}.png` : nationality === "Air Nomad" ? `img/Logo/logo-${nationality}.png` : nationality === "Earth Kingdom" ? `img/Logo/logo-${nationality}.png` : `img/Logo/logo-${ethnicity}.png`}
                alt="Nation logo"
              />
            </div>
            <div className="ResultsItem-flip-card-front-header-container">
              <header className="ResultsItem-flip-card-front-header">
                <hr className="ResultsItem-flip-card-front-header-breakline" />
                <h1 className="ResultsItem-flip-card-front-header-name">
                  {id === 7 ? "Zuko" : id === 8 ? "Suki" : id === 11 ? "Azula" : name}
                </h1>
                <h2 className="ResultsItem-flip-card-front-header-nationality">
                  {nationality?.length > 33 ? nationality?.slice(0, 33) : nationality}
                </h2>
                {positions.map((job) => (
                  <p className="ResultsItem-flip-card-front-header-position" key={job}>
                    {job}
                  </p>
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
              <div className={
                ethnicity === "Fire Nation" || nationality === "Fire Nation"
                  ? "ResultsItem-flip-card-back-image-logo-color ResultsItem-flip-card-back-image-logo-color--fire"
                  : ethnicity === "Air Nomad" || nationality === "Air Nomad"
                    ? "ResultsItem-flip-card-back-image-logo-color ResultsItem-flip-card-back-image-logo-color--air"
                    : ethnicity === "Earth Kingdom" || nationality === "Earth Kingdom"
                      ? "ResultsItem-flip-card-back-image-logo-color ResultsItem-flip-card-back-image-logo-color--earth"
                      : "ResultsItem-flip-card-back-image-logo-color ResultsItem-flip-card-back-image-logo-color--water"
              }
              />
              <img
                className="ResultsItem-flip-card-back-image-logo"
                src={nationality === "Fire Nation" ? `img/Logo/logo-${nationality}.png` : nationality === "Air Nomad" ? `img/Logo/logo-${nationality}.png` : nationality === "Earth Kingdom" ? `img/Logo/logo-${nationality}.png` : `img/Logo/logo-${ethnicity}.png`}
                alt="Nation logo"
              />
            </div>
            <aside className="ResultsItem-flip-card-back-info">
              <hr className="ResultsItem-flip-card-back-info-breakline" />
              <h3 className="ResultsItem-flip-card-back-info-title-first">First apparence:</h3>
              <p className="ResultsItem-flip-card-back-info-firstAppearance">
                {/* eslint-disable-next-line max-len */}
                {firstAppearance?.length === 46 ? firstAppearance?.slice(0, 20) : firstAppearance?.length < 26 ? firstAppearance : firstAppearance?.slice(0, 51)}
              </p>
              <h3 className="ResultsItem-flip-card-back-info-title">Last apparence:</h3>
              <p className="ResultsItem-flip-card-back-info-lastAppearance">
                {lastAppearance === "NA" ? "Unknown" : Array.isArray(lastAppearance) ? lastAppearance[0] : lastAppearance}
              </p>
              <h3 className="ResultsItem-flip-card-back-info-title">Voiced by:</h3>
              <p className="ResultsItem-flip-card-back-info-voicedBy">
                {voicedBy === "NA" ? "Unknown" : Array.isArray(voicedBy) ? voicedBy[0] : voicedBy}
              </p>
            </aside>
            <Link to={id === 8 ? `/character/8/Suki` : id === 11 ? `/character/11/Azula` : `/character/${id}/${name}`} className="ResultsItem-flip-card-back-link">
              <FaPlusCircle
                className={
                  ethnicity === "Fire Nation" || nationality === "Fire Nation"
                    ? "ResultsItem-flip-card-back-link-plus ResultsItem-flip-card-back-link-plus--fire"
                    : ethnicity === "Air Nomad" || nationality === "Air Nomad"
                      ? "ResultsItem-flip-card-back-link-plus ResultsItem-flip-card-back-link-plus--air"
                      : ethnicity === "Earth Kingdom" || nationality === "Earth Kingdom"
                        ? "ResultsItem-flip-card-back-link-plus ResultsItem-flip-card-back-link-plus--earth"
                        : "ResultsItem-flip-card-back-link-plus ResultsItem-flip-card-back-link-plus--water"
                }
                size="1.5rem"
              />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

// -- Mes validations de types avec PropTypes
ResultsItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  bio: PropTypes.object,
  chronologicalInformation: PropTypes.object,
  politicalInformation: PropTypes.object,
};

// -- Mon export
export default ResultsItem;
