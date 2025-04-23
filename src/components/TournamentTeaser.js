
import { tournaments } from '../data/tournaments';
import { Link } from 'react-router-dom';

function TournamentTeaser() {
  const next = tournaments.find(t => t.status === 'Upcoming') || tournaments[0];
  return (
    <section className="container mx-auto px-4 py-16 fade-in">
      <div className="bg-gray-800 rounded-xl shadow-card overflow-hidden grid md:grid-cols-2">
        <img src={next.image} alt={next.title} className="w-full h-56 md:h-auto object-cover" />
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-2">{next.title}</h3>
          <p className="text-gray-300 mb-4">Starting {next.start}. Entry fee {next.entryFee}. Prize pool {next.prize}.</p>
          <Link to="/tournaments" className="self-start px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-full font-semibold">
            View Details
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TournamentTeaser;
