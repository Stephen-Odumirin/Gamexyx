
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function TournamentCard({ tournament }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} className="bg-gray-800 rounded-xl overflow-hidden shadow-card hover:shadow-2xl transition">
      <Link to={`/tournament/${tournament.id}`}>
        <img src={tournament.image} alt={tournament.title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{tournament.title}</h3>
          <p className="text-xs text-gray-400 mt-1">{tournament.status}</p>
        </div>
      </Link>
    </motion.div>
  );
}

export default TournamentCard;
