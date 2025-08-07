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
    img: '', // Add real image URLs here
  },
  {
    title: 'Denim Jacket',
    desc: 'Classic denim jacket with a vintage feel.',
    price: '$89.99',
    img: '',
  },
  {
    title: 'Basic Tee',
    desc: 'Minimalist cotton tee for everyday wear.',
    price: '$19.99',
    img: '',
  },
  {
    title: 'Utility Cargo',
    desc: 'Functional cargo pants with a sleek urban fit.',
    price: '$74.99',
    img: '',
  },
];

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r bg-[#202F52] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center ">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4 text-[#D2B589] font-sans"
          >
            Discover Your Style
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-xl mx-auto mb-6 font-sans"
          >
            Elevate your wardrobe with our premium clothing collection — designed for comfort and style.
          </motion.p>
          <Link
            href="/features/males"
            className="bg-white text-[#D2B589] font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
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
          className="text-3xl font-bold mb-10 text-center font-sans"
        >
          Featured Products
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {products.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <div className="relative group">
                <Image
                  src={item.img || '/placeholder.jpg'} // Fallback image
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105 font-sans"
                />
                <div className="absolute inset-0 bg-[#D2B589] opacity-0 group-hover:opacity-20 transition duration-300"></div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 font-sans">{item.title}</h3>
                <p className="text-sm text-gray-600 font-sans">{item.desc}</p>
                <div className="mt-3 font-bold text-[#D2B589]">{item.price}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 font-sans"
          >
            Why Choose Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 max-w-xl mx-auto font-sans"
          >
            We combine premium fabrics, modern design, and affordable pricing to bring you a clothing line that’s perfect for every occasion. Experience the perfect mix of comfort and fashion.
          </motion.p>
        </div>
      </section>
    </div>
  );
}
