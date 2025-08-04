'use client';

import Link from 'next/link';
import { Sparkles, Shirt, Scissors, Clock, UserCheck, Star, ThumbsUp, ShieldCheck } from 'lucide-react';
import ServiceCard from '../components/ServiceCard'; 
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Custom Tailoring',
    description: 'Get clothes tailored to your perfect fit with our precision craftsmanship.',
    icon: Scissors,
    href: '/services/Custom-Tailoring',
  },
  {
    title: 'Style Consultation',
    description: 'Free personal styling tips tailored to your body, taste, and budget.',
    icon: UserCheck,
    href: '/services/style-consultation',
  },
  {
    title: 'Premium Quality Fabric',
    description: 'Only the finest, sustainably-sourced fabrics make it to your wardrobe.',
    icon: Shirt,
    href: '/services/premium-fabric',
  },
  {
    title: 'Express Delivery',
    description: 'Fast delivery on all orders. Next-day delivery available in major cities.',
    icon: Clock,
    href: '/services/express-delivery',
  },
  {
    title: 'Occasion Wear',
    description: 'Wedding, party, formal – we craft outfits that match the moment.',
    icon: Sparkles,
    href: '/services/occasion-wear',
  },
];

const features = [
  {
    icon: Star,
    title: 'Top Quality',
    desc: 'Our clothes are made to last with meticulous attention to detail.',
  },
  {
    icon: ThumbsUp,
    title: 'Trusted by Thousands',
    desc: 'Thousands of happy customers around the globe trust our brand.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Shopping',
    desc: 'Your data and transactions are fully secured and encrypted.',
  },
];

const testimonials = [
  {
    name: 'Sarah K.',
    review: 'Absolutely love the custom tailoring service! My outfit fit like a dream. Highly recommended!',
  },
  {
    name: 'Daniel M.',
    review: 'Excellent delivery and amazing fabric quality. Will shop again!',
  },
  {
    name: 'Ayesha R.',
    review: 'Customer service is top-notch and their style consultation really helped me decide.',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-black">

      {/* Hero Section */}
      <section className="bg-black text-white py-20 px-6 md:px-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          Style Meets Service
        </motion.h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Elevate your fashion journey with our premium clothing services. From bespoke tailoring to styling advice — we’ve got you covered.
        </p>
        <Link href="/features/kids">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 bg-white text-black px-6 py-3 rounded-full font-semibold shadow-lg"
          >
            Explore Collection
          </motion.button>
        </Link>
      </section>

      {/* Services Grid */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <Link href={service.href} key={idx}>
              <ServiceCard {...service} />
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <item.icon className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
              <p className="text-gray-700 italic mb-4">“{t.review}”</p>
              <p className="text-sm font-semibold text-black">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center bg-black text-white py-16 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-4">Ready to Redefine Your Wardrobe?</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Let us help you express your style through premium fashion services.
        </p>
        <Link href="/contact">
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold shadow-md hover:bg-gray-200 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </main>
  );
}
