import IconCard from "./IconCard";
import { icons } from "../data/icons";

const IconGrid = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20 p-6 rounded-3xl 
    bg-white/70 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">

      {/* Filter Pills */}
      <div className="flex gap-3 justify-center mb-6">
        {["Basic", "Filled", "Duotone"].map((item, i) => (
          <button
            key={i}
            className="px-4 py-2 rounded-full text-sm 
            bg-black text-white dark:bg-white dark:text-black"
          >
            {item}
          </button>
        ))}
      </div>

      {/* Icons Grid */}
      <div className="grid grid-cols-5 md:grid-cols-8 gap-4 justify-items-center">
        {icons.map((Icon, i) => (
          <IconCard key={i} Icon={Icon} />
        ))}
      </div>

      {/* Search */}
      <div className="mt-6">
        <input
          placeholder="Search icons..."
          className="w-full px-4 py-3 rounded-xl 
          bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10"
        />
      </div>

    </div>
  );
};

export default IconGrid;