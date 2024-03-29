// -- Mes imports extérieurs
import axios from 'axios';
import { useState, useEffect } from 'react';

// -- Mes imports locaux
import ResultsItem from "./ResultsItem/index";
import Loader from '../Loader';
import "./style.scss";

// -- Mon composant
function Results() {
  // L'adresse racine de mon API
  const MY_API = process.env.REACT_APP_ROOT_API;
  const api = `${MY_API}`;

  // Pour récupérer les données des personnages de l'API et les afficher
  const [data, setData] = useState([]);

  // Pour instaurer un loading lorsqu'on fait appel à l'API pour le chargement des données
  const [isLoading, toggleIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api}characters`);
        setData(response.data);
        toggleIsLoading(false);
        console.log("DATA", response.data);
      }
      catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!isLoading) {
    return (
      <div className="Results">
        {data.flatMap((item) => (
          item.name === "Any_Cath"
            ? []
            : <ResultsItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
  return <Loader />;
}

// -- Mon export
export default Results;
