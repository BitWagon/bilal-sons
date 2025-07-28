'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const clothes = [
  {
    id: 1,
    title: 'Slim Fit Denim Jacket',
    price: '$59.99',
    image: 'https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg',
  },
  {
    id: 2,
    title: 'Casual White T-Shirt',
    price: '$19.99',
    image: 'https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg',
  },
  {
    id: 3,
    title: 'Classic Black Hoodie',
    price: '$39.99',
    image: 'https://images.pexels.com/photos/1005415/pexels-photo-1005415.jpeg',
  },
  {
    id: 4,
    title: 'Formal Blue Shirt',
    price: '$29.99',
    image: 'https://images.pexels.com/photos/220419/pexels-photo-220419.jpeg',
  },
];

export default function MaleClothesPage() {
  const [cartMsg, setCartMsg] = useState('');

  const addToCart = async (item) => {
    const res = await fetch('/api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    const result = await res.json();
    setCartMsg(result.message);
    setTimeout(() => setCartMsg(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-900 to-blue-500 text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Men’s Fashion
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl">
          Stylish, modern, and timeless clothing for every occasion.
        </p>
        {cartMsg && <p className="mt-2 text-yellow-200">{cartMsg}</p>}
      </section>

      {/* Clothes Grid */}
      <section className="p-8 max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clothes.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
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
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-blue-700 font-bold mt-1">{item.price}</p>
              <button
                className="mt-3 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}