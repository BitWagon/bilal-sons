'use client';

import { motion } from 'framer-motion';

export default function BenefitCard({ icon: Icon, title, description }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-100 p-6 rounded-xl shadow-sm flex flex-col items-start gap-4"
    >
      <Icon className="w-6 h-6 text-black" />
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </motion.div>
  );
}
