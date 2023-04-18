// -- Mes imports extérieurs
import axios from 'axios';
import { useState, useEffect } from 'react';

// -- Mes imports locaux
import ResultsItem from "./ResultsItem";
import Loader from '../Loader';
import "./style.scss";

// -- Mon composant
function Results() {
  // L'adresse racine de mon API
  let api = `https://api.sampleapis.com/avatar/`;

  // Pour récupérer les données de l'API et les afficher
  const [data, setData] = useState([]);
  console.log("AANG", data[0]?.name);

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

  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (!isLoading) {
    return (
      <div className="Results">
        {data.map((item) => (
          <ResultsItem key={item.id} {...item} />
        ))}
      </div>
    );
  }
}

// -- Mon export
export default Results;
