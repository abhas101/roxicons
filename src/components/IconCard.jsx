import { motion } from "motion/react";
import { Copy } from "lucide-react";

const IconCard = ({ Icon }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(`<${Icon.name} />`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="group relative w-14 h-14 flex items-center justify-center 
      rounded-xl border border-gray-200 dark:border-white/10 
      bg-white/60 dark:bg-white/5 backdrop-blur cursor-pointer"
      onClick={handleCopy}
    >
      {/* Real Icon */}
      <Icon size={20} className="text-black dark:text-white" />

      {/* Hover Copy Icon */}
      <div className="absolute inset-0 flex items-center justify-center 
      opacity-0 group-hover:opacity-100 transition">
        <Copy size={16} />
      </div>
    </motion.div>
  );
};

export default IconCard;