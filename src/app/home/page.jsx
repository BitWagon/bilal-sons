'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Example clothing data
const products = [
  {
    title: 'Street Hoodie',
    desc: 'Perfect for casual streetwear with premium comfort.',
    price: '$59.99',
    img: 'https://images.unsplash.com/photo-1618354691213-29b6ba4fba25?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Denim Jacket',
    desc: 'Classic denim jacket with a vintage feel.',
    price: '$89.99',
    img: 'https://images.unsplash.com/photo-1555529669-e69cfd619e5d?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Basic Tee',
    desc: 'Minimalist cotton tee for everyday wear.',
    price: '$19.99',
    img: 'https://images.unsplash.com/photo-1618354691210-0101c4b27de5?auto=format&fit=crop&w=600&q=80',
  },
  {
    title: 'Utility Cargo',
    desc: 'Functional cargo pants with a sleek urban fit.',
    price: '$74.99',
    img: 'https://images.unsplash.com/photo-1620138546430-357dbd2f69d0?auto=format&fit=crop&w=600&q=80',
  },
];

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4"
          >
            Discover Your Style
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto mb-6"
          >
            Elevate your wardrobe with our premium clothing collection — designed for comfort and style.
          </motion.p>
          <Link
            href="/features"
            className="bg-white text-purple-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-10 text-center"
        >
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                <div className="mt-3 font-bold text-purple-600">{item.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto"
          >
            We combine premium fabrics, modern design, and affordable pricing to bring you a clothing line that’s perfect for every occasion. Experience the perfect mix of comfort and fashion.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
