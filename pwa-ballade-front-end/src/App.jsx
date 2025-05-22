import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav/Nav'; // Vérifie que ce fichier existe bien
import HomePage from './pages/Main/Main';
import SongList from './pages/SongList/SongList'; // Vérifie que ce fichier existe bien
import SongDetail from './pages/SongDetail/SongDetail';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      {!isHomePage && <Nav />}  {/* La navbar n'apparaît pas sur la page d'accueil */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/song-list" element={<SongList />} />
        <Route path="/song/:id" element={<SongDetail />} />
      </Routes>
    </div>
  );
}

export default App;
