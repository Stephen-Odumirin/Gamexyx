
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function GameCard({ game }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-card hover:shadow-2xl transition hover:-translate-y-1 min-w-[180px]"
      whileHover={{ scale: 1.03 }}
    >
      <Link to={`/game/${game.id}`}>
        <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
        <div className="p-3">
          <h3 className="text-sm font-semibold">{game.title}</h3>
          <p className="text-xs text-gray-400">⭐ {game.rating}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default GameCard;
