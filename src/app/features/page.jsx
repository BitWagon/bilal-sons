'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const clothes = [
  {
    title: 'Urban Hoodie',
    desc: 'Soft, stylish, and made for streetwear lovers.',
    img: 'https://images.unsplash.com/photo-1618354691213-29b6ba4fba25?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Classic Denim',
    desc: 'Vintage denim with a modern twist.',
    img: 'https://images.unsplash.com/photo-1555529669-e69cfd619e5d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Minimalist Tee',
    desc: 'Comfy cotton t-shirt for everyday wear.',
    img: 'https://images.unsplash.com/photo-1618354691210-0101c4b27de5?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Street Cargo',
    desc: 'Utility cargos with sleek fit and function.',
    img: 'https://images.unsplash.com/photo-1620138546430-357dbd2f69d0?auto=format&fit=crop&w=600&q=80',
  },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white px-4 py-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Explore Our Fashion Features</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Discover a curated collection that defines comfort, style, and innovation.
        </p>
      </motion.div>

      {/* Clothing Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clothes.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <Image
              src={item.img}
              alt={item.title}
              width={600}
              height={400}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{item.title}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
