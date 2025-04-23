
import { useParams, Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { tournaments } from '../data/tournaments';
import { motion } from 'framer-motion';

function TournamentDetail() {
  const { id } = useParams();
  const t = tournaments.find(x => x.id === Number(id));
  if (!t) return <Layout><div className="p-8">Tournament not found</div></Layout>;
  return (
    <Layout>
      <motion.section className="container mx-auto px-4 py-12 fade-in"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <Link to="/tournaments" className="text-primary-400 hover:text-primary-300">&larr; Back</Link>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <img src={t.image} alt={t.title} className="w-full rounded-xl shadow-card" />
          <div>
            <h2 className="text-3xl font-bold mb-2">{t.title}</h2>
            <p className="text-gray-400 mb-4">{t.status} &middot; Prize {t.prize}</p>
            <p className="text-gray-300 mb-4">{t.description}</p>
            <ul className="text-gray-400 text-sm space-y-1 mb-4">
              <li><strong>Start:</strong> {t.start}</li>
              <li><strong>End:</strong> {t.end}</li>
              <li><strong>Entry Fee:</strong> {t.entryFee}</li>
            </ul>
            <button disabled className="px-6 py-3 bg-primary-600 rounded-full font-semibold opacity-60 cursor-not-allowed">
              Register (coming soon)
            </button>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
}

export default TournamentDetail;
