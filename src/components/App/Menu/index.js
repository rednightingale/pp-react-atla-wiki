// -- Mes imports locaux
import "./style.scss";

// -- Mon composant
function Menu() {
  return (
    <div className="Menu">
      <nav className="Menu-navigation">
        <ul className="Menu-list">
          <li className="Menu-link"><a href="#">Characters</a></li>
          <li className="Menu-link"><a href="#">Nations</a></li>
          <li className="Menu-link"><a href="#">Episodes</a></li>
          <li className="Menu-link"><a href="#">Quiz</a></li>
        </ul>
      </nav>
    </div>
  );
}

// -- Mon export
export default Menu;
