import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const move = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPos(newPos);

      // add trail particle
      setTrail((prev) => [...prev.slice(-10), newPos]);
    };

    const down = () => {
      setClick(true);
      setTimeout(() => setClick(false), 150);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);

    // Hover detection
    const add = () => setHover(true);
    const remove = () => setHover(false);

    const elements = document.querySelectorAll("button, a, .cursor-pointer");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", add);
      el.addEventListener("mouseleave", remove);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
    };
  }, []);

  return (
    <>
      {/* TRAIL PARTICLES */}
      {trail.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: 0, scale: 0.2 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-lime-400 pointer-events-none z-[9998]"
          style={{
            transform: `translate(${t.x}px, ${t.y}px)`,
          }}
        />
      ))}

      {/* MAIN CURSOR */}
      <motion.div
        animate={{
          x: pos.x - 4,
          y: pos.y - 4,
          scale: click ? 0.8 : hover ? 1.4 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
      >
        {/* Arrow */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          className="drop-shadow-[0_0_8px_rgba(0,0,0,0.6)]"
        >
          <path d="M4 3L20 12L13 13L15 21L12.5 22L10.5 14.5L4 18V3Z" />
        </svg>
      </motion.div>

      {/* CLICK RIPPLE */}
      {click && (
        <motion.div
          initial={{ scale: 0, opacity: 0.5 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed top-0 left-0 w-10 h-10 rounded-full border border-white pointer-events-none z-[9997]"
          style={{
            transform: `translate(${pos.x - 20}px, ${pos.y - 20}px)`,
          }}
        />
      )}
    </>
  );
}