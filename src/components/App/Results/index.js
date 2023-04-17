// -- Mes imports extérieurs
import axios from 'axios';
import { useState, useEffect } from 'react';

// -- Mes imports locaux
import ResultsItem from "./ResultsItem";
import "./style.scss";

// -- Mon composant
function Results() {
  // L'adresse racine de mon API
  let api = `https://api.sampleapis.com/avatar/`;

  // Pour récupérer les données de l'API et les afficher
  const [data, setData] = useState(null);
  console.log("DATA", data);

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

  return (
    <div className="Results">
      <ResultsItem />
      <ResultsItem />
      <ResultsItem />
      <ResultsItem />
      <ResultsItem />
    </div>
  );
}

// -- Mon export
export default Results;
