
import { games } from '../data/games';
import { Link } from 'react-router-dom';

function CategoriesGrid() {
  const categories = [...new Set(games.map(g => g.category))];
  return (
    <section className="container mx-auto px-4 py-16 fade-in">
      <h2 className="text-2xl font-bold mb-6">Game Categories</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map(cat => (
          <Link
            key={cat}
            to="/categories"
            className="relative h-32 bg-gray-800 rounded-xl overflow-hidden flex items-center justify-center shadow-card hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <img src={`https://picsum.photos/seed/${cat}/300/200`} alt={cat} className="absolute inset-0 w-full h-full object-cover opacity-30" />
            <span className="relative z-10 font-semibold">{cat}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoriesGrid;
