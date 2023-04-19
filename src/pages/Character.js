// -- Mes imports locaux
import Header from '../components/App/Header';
import Menu from '../components/App/Menu';
import Searchbar from '../components/App/SearchBar';
import Character from '../components/App/Character';

// -- Mon composant
function CharacterInfo() {
  return (
    <>
      <Header />
      <Menu />
      <Searchbar />
      <Character />
    </>
  );
}

// -- Mon export
export default CharacterInfo;
