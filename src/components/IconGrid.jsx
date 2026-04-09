import { useState } from "react";
import IconCard from "./IconCard";
import { icons } from "../data/icons";

const categories = [
  "all",
  "ui",
  "social",
  "media",
  "communication",
  "files",
  "security",
  "network",
  "actions",
];

const IconGrid = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  // 🔍 Filter Logic
  const filteredIcons = icons.filter((icon) => {
    const matchesSearch =
      icon.name.toLowerCase().includes(search.toLowerCase()) ||
      icon.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCategory =
      activeCategory === "all" || icon.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto mt-20 p-6 rounded-3xl 
    bg-white/70 dark:bg-white/5 backdrop-blur border border-gray-200 dark:border-white/10">

      {/* 🔍 Search */}
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search icons..."
        className="w-full px-4 py-3 mb-6 rounded-xl 
        bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10"
      />

      {/* 🏷️ Category Filters */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm capitalize transition
            ${
              activeCategory === cat
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "bg-gray-200 dark:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 📊 Result Count */}
      <p className="text-sm text-gray-500 mb-4 text-center">
        {filteredIcons.length} icons found
      </p>

      {/* 🎯 Icons Grid */}
      <div className="grid grid-cols-5 md:grid-cols-8 gap-4 justify-items-center">
        {filteredIcons.length > 0 ? (
          filteredIcons.map((icon, i) => {
            const Icon = icon.component;
            return (
              <IconCard key={i} Icon={Icon} name={icon.name} />
            );
          })
        ) : (
          <p className="col-span-full text-gray-500">
            No icons found 😢
          </p>
        )}
      </div>
    </div>
  );
};

export default IconGrid;