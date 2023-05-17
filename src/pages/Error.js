// -- Mes imports locaux
import Header from '../components/App/Header';
import Menu from '../components/App/Menu';
import Searchbar from '../components/App/SearchBar';
import NotFound from '../components/App/404';

// -- Mon composant
function Error() {
  return (
    <>
      <Header />
      <Menu />
      <Searchbar />
      <NotFound />
    </>
  );
}

// -- Mon export
export default Error;
