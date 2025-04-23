
import { motion } from 'framer-motion';

function HeroSection() {
  return (
    <section className="relative bg-topo bg-cover bg-fixed">
      {/* decorative */}
      <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Play Games. <span className="text-primary-400">Earn Rewards.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-gray-300 mb-6"
        >
          Join weekly tournaments, climb the leaderboards, and cash out your winnings in crypto.
        </motion.p>
        <motion.a
          href="#featured"
          className="inline-block px-8 py-3 bg-primary-600 hover:bg-primary-700 rounded-full font-semibold transition-colors"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Get Started
        </motion.a>
      </div>
    </section>
  );
}

export default HeroSection;
