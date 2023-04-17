// -- Mes imports locaux
import "./style.scss";
import { FaSearch } from "react-icons/fa";

// -- Mon composant
function Searchbar() {
  return (
    <div className="Searchbar">
      <form className="Searchbar-form">
        <input
          className="Searchbar-form-input"
          type="search"
          name="search"
          placeholder="search"
          aria-label="search"
        />
        <span className="Searchbar-form-input-focus-border" />
        <span className="Searchbar-form-input-focus-border" />
        <span className="Searchbar-form-input-focus-border" />
        <span className="Searchbar-form-input-focus-border" />
        <button className="Searchbar-form-button" type="submit">
          <FaSearch className="Searchbar-form-button-icon" size="2rem" />
        </button>
      </form>
    </div>
  );
}

// -- Mon export
export default Searchbar;
