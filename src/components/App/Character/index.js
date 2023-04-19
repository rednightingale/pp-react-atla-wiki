// -- Mes imports locaux
import { useParams } from "react-router-dom";
import "./style.scss";

// -- Mon composant
function Character() {
  const { name } = useParams();

  return (
    <div className="Character">Character {name}</div>
  );
}

// -- Mon export
export default Character;
