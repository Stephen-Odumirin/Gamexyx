
import { motion } from 'framer-motion';

function PromoBlock({ imageFirst = true }) {
  return (
    <section className="container mx-auto px-4 py-16 fade-in">
      <div className={`grid md:grid-cols-2 gap-8 items-center ${imageFirst ? '' : 'md:flex-row-reverse'}`}>
        <motion.img
          src="https://picsum.photos/seed/promo/600/400"
          alt="Promo"
          className="w-full rounded-xl shadow-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        />
        <div>
          <h3 className="text-3xl font-bold mb-4">Play &amp; Earn Crypto</h3>
          <p className="text-gray-300 mb-4">
            Every match and tournament you join adds XP to your profile. Top performers unlock weekly ETH rewards,
            exclusive NFT badges, and early access to new games.
          </p>
          <a href="/tournaments" className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 rounded-full font-semibold">
            Join Tournaments
          </a>
        </div>
      </div>
    </section>
  );
}

export default PromoBlock;
