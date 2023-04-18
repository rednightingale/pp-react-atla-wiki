// -- Mes imports locaux
import "./style.scss";

// -- Mon composant
function Loader() {
  return (
    <div className="Loader">
      <div className="lds-ring"><div /><div /><div /><div /></div>
    </div>
  );
}

// -- Mon export
export default Loader;
