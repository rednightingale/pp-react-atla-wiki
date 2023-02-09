// -- Mes imports locaux
import "./style.scss";
import Icon from '../../../ui/Icon';

// -- Mon composant
function Searchbar() {
  return (
    <div className="Searchbar">
      <form className="Searchbar-form">
        <input
          className="Searchbar-form-input"
          type="search"
          name="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="Searchbar-form-button" type="submit">
          <Icon icon="search" size="2rem" />
        </button>
      </form>
    </div>
  );
}

// -- Mon export
export default Searchbar;
