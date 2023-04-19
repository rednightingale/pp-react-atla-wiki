// == Imports externes
import { BrowserRouter as Routes, Route } from 'react-router-dom';

// Imports internes
import Home from '../../pages/Home';

import './style.scss';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
