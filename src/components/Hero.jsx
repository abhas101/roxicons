import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold mb-6"
      >
        High Quality Web Icons
      </motion.h1>

      <p className="text-gray-400 mb-8">
        Discover, customize and export icons instantly.
      </p>

      <input
        placeholder="Search icons..."
        className="w-full max-w-xl px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 text-white"
      />
    </section>
  );
}