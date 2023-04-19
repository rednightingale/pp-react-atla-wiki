// == Imports externes
import { Routes, Route } from 'react-router-dom';

// Imports internes
import Home from '../../pages/Home';
import CharacterInfo from '../../pages/Character';

import './style.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:name" element={<CharacterInfo />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
