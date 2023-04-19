// -- Mes imports locaux
import Header from '../components/App/Header';
import Menu from '../components/App/Menu';
import Searchbar from '../components/App/SearchBar';
import Results from '../components/App/Results';

// -- Mon composant
function Home() {
  return (
    <div className="Home">
      <Header />

      <Menu />

      <Searchbar />

      <Results />
    </div>
  );
}

// -- Mon export
export default Home;
