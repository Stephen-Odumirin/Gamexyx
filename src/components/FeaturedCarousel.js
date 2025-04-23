
import { games } from '../data/games';
import GameCard from './GameCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

function FeaturedCarousel() {
  const featured = games.slice(0, 10); // first 10 as featured
  const containerRef = useRef(null);

  const scroll = (dir) => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollBy({ left: dir * width * 0.8, behavior: 'smooth' });
  };

  return (
    <section id="featured" className="container mx-auto px-4 py-12 fade-in">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Featured Games</h2>
        <div className="space-x-2 hidden md:block">
          <button onClick={() => scroll(-1)} className="p-2 bg-gray-800 rounded hover:bg-gray-700">
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => scroll(1)} className="p-2 bg-gray-800 rounded hover:bg-gray-700">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div ref={containerRef} className="flex gap-4 overflow-x-auto scrollbar-hide">
        {featured.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedCarousel;
