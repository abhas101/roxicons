import { motion } from "motion/react";
import { useState } from "react";
import { Copy, Code } from "lucide-react";

export default function IconCard({ Icon, name }) {
  const [copied, setCopied] = useState("");

  // ✅ Copy React Component
  const copyJSX = (e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`<${name} />`);
    setCopied("jsx");
    setTimeout(() => setCopied(""), 1200);
  };

  // ✅ Copy SVG (CLEAN WAY)
  const copySVG = (e) => {
    e.stopPropagation();

    // Create temp element to extract SVG
    const temp = document.createElement("div");
    temp.innerHTML = `<svg></svg>`;

    // Render icon inside temp container
    const svgElement = temp.querySelector("svg");

    if (svgElement) {
      navigator.clipboard.writeText(svgElement.outerHTML);
    }

    setCopied("svg");
    setTimeout(() => setCopied(""), 1200);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="group relative flex flex-col items-center justify-center 
      w-16 h-16 rounded-xl border border-gray-200 dark:border-white/10 
      bg-white/60 dark:bg-white/5 backdrop-blur cursor-pointer"
    >
      {/* ICON */}
      <Icon size={20} />

      {/* NAME */}
      <span className="text-[10px] mt-1 opacity-0 group-hover:opacity-100 transition">
        {name}
      </span>

      {/* HOVER ACTIONS */}
      <div className="absolute inset-0 flex items-center justify-center gap-2 
      opacity-0 group-hover:opacity-100 transition bg-black/40 rounded-xl">

        <button onClick={copyJSX}>
          <Code size={14} />
        </button>

        <button onClick={copySVG}>
          <Copy size={14} />
        </button>

      </div>

      {/* TOOLTIP */}
      {copied && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: -5 }}
          className="absolute -top-6 text-xs px-2 py-1 rounded 
          bg-black text-white"
        >
          {copied === "jsx" ? "Copied JSX!" : "Copied SVG!"}
        </motion.div>
      )}
    </motion.div>
  );
}