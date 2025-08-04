'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-start gap-4 transition-all duration-300 border hover:border-black"
    >
      <div className="bg-gray-100 p-3 rounded-full">
        <Icon className="w-6 h-6 text-black" />
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <ArrowRight className="w-4 h-4 text-black mt-2" />
    </motion.div>
  );
}
