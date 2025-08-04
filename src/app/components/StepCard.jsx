'use client';

import { motion } from 'framer-motion';

export default function StepCard({ step, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-md border hover:border-black"
    >
      <div className="text-2xl font-bold text-black mb-2">Step {step}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{description}</p>
    </motion.div>
  );
}
