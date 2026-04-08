import { motion } from "motion/react";
import { useState } from "react";

const BentoCard = ({ title, children, className = "" }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className={`relative p-6 rounded-3xl overflow-hidden
      bg-white/70 dark:bg-white/5 
      backdrop-blur border border-gray-200 dark:border-white/10
      shadow-xl min-h-55 group ${className}`}
    >
      {/* Mouse Glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition"
        style={{
          background: `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(168,85,247,0.2), transparent 40%)`,
        }}
      />

      <h3 className="text-lg font-semibold mb-4 relative z-10">
        {title}
      </h3>

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
};

export default function BentoGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* CARD 1 - Animated Line */}
      <BentoCard title="Consistent design">
        <div className="relative h-32 flex items-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-[2px] bg-purple-400"
          />
        </div>
      </BentoCard>

      {/* CARD 2 - Orbit */}
      <BentoCard title="Icon Packs">
        <div className="relative flex justify-center items-center h-32">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            className="absolute w-28 h-28 border border-white/10 rounded-full"
          />

          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-6 bg-lime-400 rounded-full z-10"
          />
        </div>
      </BentoCard>

      {/* CARD 3 - Pills */}
      <BentoCard title="Find Icons">
        <div className="flex flex-wrap gap-2">
          {["Shapes", "UI", "Media", "Travel"].map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="px-3 py-1 text-sm rounded-full 
              bg-gray-200 dark:bg-white/10 
              hover:bg-lime-400 hover:text-black transition cursor-pointer"
            >
              {item}
            </motion.span>
          ))}
        </div>
      </BentoCard>

      {/* CARD 4 - Wide Gradient */}
      <BentoCard title="Design Faster" className="md:col-span-2">
        <motion.div
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="h-32 rounded-xl bg-linear-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 bg-size-[200%_200%]"
        />
      </BentoCard>

      {/* CARD 5 - Floating Blocks */}
      <BentoCard title="Developer Friendly">
        <div className="flex gap-3 flex-wrap">
          {Array.from({ length: 6 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2 + i * 0.2,
              }}
              className="w-8 h-8 bg-white/20 rounded-md"
            />
          ))}
        </div>
      </BentoCard>

    </section>
  );
}