// -- Mes imports locaux
import logo from '../../../assets/images/avatar-logo.svg';
import "./style.scss";

// -- Mon composant
function Header() {
  return (
    <div className="Header">
      <img
        className="Header-logo"
        src={logo}
        alt="Avatar the Last Airbender logo"
      />
    </div>
  );
}

// -- Mon export
export default Header;
