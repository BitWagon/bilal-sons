'use client';

import TailoringHero from '../components/TailoringHero';
import StepCard from '../components/StepCard'; 
import BenefitCard from '../components/BenefitCard';
import { Ruler, Scissors, Smile, Truck } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Book Your Appointment',
    description: 'Schedule a fitting at your convenience — online or in-store.',
  },
  {
    step: 2,
    title: 'Measurement & Fabric Selection',
    description: 'Choose your fabric, cut, and get precise measurements taken.',
  },
  {
    step: 3,
    title: 'Tailoring & Fitting',
    description: 'Our skilled tailors craft your garment and fine-tune the fit.',
  },
  {
    step: 4,
    title: 'Delivery or Pickup',
    description: 'Your custom piece is ready — delivered to your door or picked up.',
  },
];

const benefits = [
  {
    icon: Ruler,
    title: 'Perfect Fit',
    description: 'Every outfit is made to measure with unmatched accuracy.',
  },
  {
    icon: Scissors,
    title: 'Skilled Craftsmanship',
    description: 'Expert tailors bring years of experience to every stitch.',
  },
  {
    icon: Smile,
    title: 'Personal Style',
    description: 'Get outfits that reflect your personality and taste.',
  },
  {
    icon: Truck,
    title: 'Doorstep Delivery',
    description: 'Enjoy fast, secure delivery of your tailored clothes.',
  },
];

export default function CustomTailoringPage() {
  return (
    <main className="bg-gray-50 text-black">
      <TailoringHero />

      {/* Step-by-step process */}
      <section className="px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <StepCard key={idx} {...step} />
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white px-6 md:px-20 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Custom Tailoring?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => (
            <BenefitCard key={idx} {...benefit} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white text-center py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold mb-4">Experience Bespoke Clothing</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Ready to transform your wardrobe with perfectly tailored outfits?
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Schedule Now
        </button>
      </section>
    </main>
  );
}
