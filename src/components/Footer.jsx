import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gray-200 dark:border-white/10">

      {/* Glow Background */}
      <div className="absolute inset-0 -z-10 opacity-20 blur-3xl 
      bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500"></div>

      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Roxicons</h2>
            <p className="text-gray-500 dark:text-gray-400">
              High quality icons for developers and designers.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold mb-2">Product</h3>
            <a href="#" className="hover:text-purple-400 transition">Icons</a>
            <a href="#" className="hover:text-purple-400 transition">Pricing</a>
            <a href="#" className="hover:text-purple-400 transition">Docs</a>
          </div>

          {/* Coming Soon */}
          <div>
            <h3 className="font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              App launching soon 🚀
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-5 py-2 rounded-xl 
              bg-black text-white dark:bg-white dark:text-black"
            >
              Notify Me
            </motion.button>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200 dark:border-white/10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-400">

          <p>© {new Date().getFullYear()} Roxicons. All rights reserved.</p>

          <p>
            Lead Developer{" "}
            <span className="text-black dark:text-white font-medium">
              @abhas101
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}