import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav/Nav'; // Vérifie que ce fichier existe bien
import HomePage from './pages/Main/Main';
import SongList from './pages/SongList/SongList'; // Vérifie que ce fichier existe bien
import Footer from './components/Footer/Footer';

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
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/song-list" element={<SongList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
