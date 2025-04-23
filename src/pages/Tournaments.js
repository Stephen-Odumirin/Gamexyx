
import Layout from '../components/Layout';
import { tournaments } from '../data/tournaments';
import TournamentCard from '../components/TournamentCard';

function Tournaments() {
  return (
    <Layout>
      <section className="container mx-auto px-4 py-12 fade-in">
        <h2 className="text-3xl font-bold mb-6">Tournaments</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map(t => <TournamentCard key={t.id} tournament={t} />)}
        </div>
      </section>
    </Layout>
  );
}

export default Tournaments;
