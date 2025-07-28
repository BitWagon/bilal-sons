'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 text-center">
        <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Style
        </motion.h1>
        <p className="mt-4 text-xl max-w-xl mx-auto">
          Discover fashion that fits your lifestyle — for men, women, and kids.
        </p>
      </section>

      {/* Men's Collection */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Men's Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Casual Streetwear',
                image: 'https://images.pexels.com/photos/10026491/pexels-photo-10026491.jpeg',
              },
              {
                title: 'Formal Suits',
                image: 'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
              },
              {
                title: 'Summer Vibes',
                image: 'https://images.pexels.com/photos/977396/pexels-photo-977396.jpeg',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white shadow rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="h-80 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Women's Collection */}
      <section className="bg-gray-50 py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Women's Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Elegant Dresses',
                image: 'https://images.pexels.com/photos/1844628/pexels-photo-1844628.jpeg',
              },
              {
                title: 'Modern Casual',
                image: 'https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg',
              },
              {
                title: 'Ethnic Styles',
                image: 'https://images.pexels.com/photos/1406382/pexels-photo-1406382.jpeg',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white shadow rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="h-80 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Kids' Collection */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Kids' Collection</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Playwear',
                image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg',
              },
              {
                title: 'Party Outfits',
                image: 'https://images.pexels.com/photos/1509355/pexels-photo-1509355.jpeg',
              },
              {
                title: 'Winter Warmers',
                image: 'https://images.pexels.com/photos/35666/pexels-photo.jpg',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white shadow rounded overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="h-80 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Sustainability Section */}
      <section className="bg-green-100 py-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">We Care About the Planet</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our collections are designed with sustainability in mind. From eco-friendly fabrics to responsible sourcing — we’re committed to making fashion better for everyone.
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 text-white py-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Start Shopping Today</h2>
          <p className="text-lg mb-6">Style your life with premium fashion for every family member.</p>
          <button className="px-6 py-3 bg-white text-gray-900 font-bold rounded hover:bg-gray-200 transition">
            Browse Collections
          </button>
        </motion.div>
      </section>
    </div>
  );
}
