
import { games } from '../data/games';
import GameCard from './GameCard';

function TrendingSection() {
  const trending = games.slice(20, 28); // arbitrary slice
  return (
    <section className="container mx-auto px-4 py-12 fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Currently Trending</h2>
        <a href="/trending" className="text-accent hover:underline">See all</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {trending.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default TrendingSection;
