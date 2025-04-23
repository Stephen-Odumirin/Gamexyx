
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { games } from '../data/games';
import { motion } from 'framer-motion';

function GameDetail() {
  const { id } = useParams();
  const game = games.find(g => g.id === Number(id));
  if (!game) return <Layout><div className="p-8">Game not found</div></Layout>;

  return (
    <Layout>
      <motion.section className="container mx-auto px-4 py-12 fade-in"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/" className="text-primary-400 hover:text-primary-300">&larr; Back</Link>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <img src={game.image} alt={game.title} className="w-full rounded-xl shadow-card" />
          <div>
            <h2 className="text-3xl font-bold mb-2">{game.title}</h2>
            <p className="text-gray-400 mb-4">⭐ {game.rating}</p>
            <p className="text-gray-300 mb-4">{game.description}</p>
            <div className="relative w-full h-0 pb-[56.25%] mb-4">
              <iframe src={game.trailer} title="Trailer" allowFullScreen className="absolute top-0 left-0 w-full h-full rounded-xl shadow-card" />
            </div>
            <a href={game.playUrl} className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-full font-semibold">Start Game</a>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}

export default GameDetail;
