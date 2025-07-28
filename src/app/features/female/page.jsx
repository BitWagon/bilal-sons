'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const clothes = [
  {
    id: 1,
    title: 'Floral Summer Dress',
    price: '$49.99',
    image: 'https://images.pexels.com/photos/211265/pexels-photo-211265.jpeg',
  },
  {
    id: 2,
    title: 'Casual Crop Top',
    price: '$25.00',
    image: 'https://images.pexels.com/photos/2060242/pexels-photo-2060242.jpeg',
  },
  {
    id: 3,
    title: 'Elegant Red Gown',
    price: '$89.99',
    image: 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg',
  },
  {
    id: 4,
    title: 'Trendy Denim Jacket',
    price: '$59.99',
    image: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg',
  },
];

const categories = [
  { name: 'Dresses', icon: '👗' },
  { name: 'Tops', icon: '👚' },
  { name: 'Jackets', icon: '🧥' },
  { name: 'Accessories', icon: '👜' },
];

const testimonials = [
  {
    name: 'Fatima Malik',
    text: 'Absolutely love the fabric quality and fit! My new go-to fashion site.',
  },
  {
    name: 'Zara Shah',
    text: 'Their collection is always trendy. I get compliments every time I wear their clothes!',
  },
  {
    name: 'Hina Rauf',
    text: 'Stylish and affordable. The denim jacket I bought is a staple in my wardrobe.',
  },
];

const tips = [
  'Layer your outfits with denim or leather jackets.',
  'Accessorize with minimalist jewelry for an elegant look.',
  'Pair bold colors with neutrals for balance.',
];

export default function FemaleClothesPage() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-pink-600 to-pink-400 text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover Women’s Fashion
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl">
          Elegance, Comfort & Style for Every Moment.
        </p>
      </section>

      {/* Categories Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-pink-600">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl">{cat.icon}</div>
              <p className="mt-2 font-semibold">{cat.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-pink-200 text-center py-8 px-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-pink-700">
          💝 Summer Sale: Flat 20% OFF on all Dresses! Use code: <span className="font-bold">WOMEN20</span>
        </h3>
      </section>

      {/* Product Grid */}
      <section className="p-8 max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clothes.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-pink-300 transition"
            whileHover={{ scale: 1.03 }}
          >
            <Image
              src={item.image}
              alt={item.title}
              width={500}
              height={400}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-pink-700 font-bold mt-1">{item.price}</p>
              <button className="mt-3 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition">
                Shop Now
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Testimonials */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-pink-100 p-4 rounded-lg shadow hover:shadow-md"
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-700">“{t.text}”</p>
              <p className="mt-3 text-sm font-semibold text-pink-700">– {t.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Fashion Tips */}
      <section className="bg-pink-50 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-pink-600 mb-6">💡 Style Tips</h2>
        <ul className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700">
          {tips.map((tip, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-4 rounded shadow"
            >
              {tip}
            </motion.li>
          ))}
        </ul>
      </section>
    </div>
  );
}
