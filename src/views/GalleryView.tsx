import { useState } from "react";
import { motion } from "framer-motion";

const images = [
  {
    title: "The Forgotten Realms",
    url: "/images/game1.jpg",
    category: "RPG",
  },
  {
    title: "Speed Legends",
    url: "/images/game2.jpg",
    category: "Racing",
  },
  {
    title: "Battlefront Echoes",
    url: "/images/game3.jpg",
    category: "Shooter",
  },
  {
    title: "Fantasy Kingdom",
    url: "/images/game4.jpg",
    category: "RPG",
  },
  {
    title: "Turbo Drift",
    url: "/images/game5.jpg",
    category: "Racing",
  },
  {
    title: "Sniper Zone",
    url: "/images/game6.jpg",
    category: "Shooter",
  },
];

const categories = ["All", "RPG", "Racing", "Shooter"];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredImages =
    selectedCategory === "All"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <div className="w-full px-4 md:px-8 py-10 bg-gray-950 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Game Gallery</h2>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition duration-300 ${
              selectedCategory === cat
                ? "bg-indigo-600"
                : "bg-gray-800 hover:bg-indigo-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-gray-900"
          >
            <img
              src={img.url}
              alt={img.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{img.title}</h3>
              <p className="text-sm text-gray-400">{img.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
