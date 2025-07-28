'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const kidsClothes = [
  {
    id: 1,
    title: 'Rainbow Hoodie',
    price: '$29.99',
    image: 'https://images.pexels.com/photos/3662828/pexels-photo-3662828.jpeg',
  },
  {
    id: 2,
    title: 'Cute Dino T-Shirt',
    price: '$15.00',
    image: 'https://images.pexels.com/photos/3662830/pexels-photo-3662830.jpeg',
  },
  {
    id: 3,
    title: 'Striped Overalls',
    price: '$34.99',
    image: 'https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg',
  },
  {
    id: 4,
    title: 'Yellow Summer Dress',
    price: '$22.50',
    image: 'https://images.pexels.com/photos/1157535/pexels-photo-1157535.jpeg',
  },
];

const categories = [
  { name: 'Tops', icon: '🧥' },
  { name: 'Bottoms', icon: '👖' },
  { name: 'Shoes', icon: '👟' },
  { name: 'Accessories', icon: '🧢' },
];

const testimonials = [
  {
    name: 'Sara Ali',
    text: 'The quality is amazing! My daughter loves the colorful hoodie. Will buy again!',
  },
  {
    name: 'Ahmad Raza',
    text: 'Affordable, cute, and fast delivery. Perfect for kids.',
  },
  {
    name: 'Amina Sheikh',
    text: 'Great variety and the material feels premium. Highly recommend!',
  },
];

export default function KidsClothesPage() {
  return (
    <div className="min-h-screen bg-yellow-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-yellow-400 to-pink-300 text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Adorable Clothes for Kids
        </motion.h1>
        <p className="mt-4 text-lg md:text-xl">
          Bright, fun, and comfy — perfect for your little ones!
        </p>
      </section>

      {/* Featured Categories */}
      <section className="py-12 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-yellow-600">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl">{cat.icon}</div>
              <p className="mt-2 font-semibold">{cat.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Limited Offer Banner */}
      <section className="bg-pink-100 text-center py-8 px-4">
        <h3 className="text-xl sm:text-2xl font-semibold text-pink-700">
          🎉 Limited Time Offer: 15% OFF all summer wear! Use code: <span className="font-bold">KIDS15</span>
        </h3>
      </section>

      {/* Kids Clothes Grid */}
      <section className="p-8 max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {kidsClothes.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-yellow-300 transition"
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
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-yellow-700 font-semibold mt-1">{item.price}</p>
              <button className="mt-3 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Customer Testimonials */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-8">What Parents Say</h2>
        <div className="max-w-4xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-yellow-100 p-4 rounded-lg shadow hover:shadow-md"
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-700">“{testimonial.text}”</p>
              <p className="mt-3 text-sm font-semibold text-yellow-700">– {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
