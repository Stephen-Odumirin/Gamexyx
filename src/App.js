
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameDetail from './pages/GameDetail';
import Tournaments from './pages/Tournaments';
import TournamentDetail from './pages/TournamentDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/:id" element={<GameDetail />} />
      <Route path="/tournaments" element={<Tournaments />} />
      <Route path="/tournament/:id" element={<TournamentDetail />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
