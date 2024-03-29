// -- Mes imports locaux
import Header from '../components/App/Header';
import Menu from '../components/App/Menu';
import Searchbar from '../components/App/SearchBar';
import Results from '../components/App/Results';

// -- Mon composant
function Home() {
  return (
    <>
      <Header />
      <Menu />
      <Searchbar />
      <Results />
    </>
  );
}

// -- Mon export
export default Home;
