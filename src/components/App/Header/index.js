// -- Mes imports extérieurs
import { Link } from 'react-router-dom';

// -- Mes imports locaux
import logo from '../../../assets/images/avatar-logo.svg';
import "./style.scss";

// -- Mon composant
function Header() {
  return (
    <div className="Header">
      <Link to="/">
        <img
          className="Header-logo"
          src={logo}
          alt="Avatar the Last Airbender logo"
        />
      </Link>
    </div>
  );
}

// -- Mon export
export default Header;
