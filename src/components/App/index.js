// == Import
import Header from './Header';
import Searchbar from './SearchBar';
import Results from './Results';

import './style.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />

      <Searchbar />

      <Results />
    </div>
  );
}

// == Export
export default App;
