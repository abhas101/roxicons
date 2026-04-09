import { motion } from "framer-motion";
import { Button } from "./ui/button";

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
      <Button className="mt-6">Get Started</Button>
    </section>
  );
}