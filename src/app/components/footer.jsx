'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const socialIcons = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700 dark:text-gray-300">
        {/* Company */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={0}>
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">NextBrand</h3>
          <p className="text-sm">
            Building modern web experiences with creativity, code and design.
          </p>
        </motion.div>

        {/* Links */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={1}>
          <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-white">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-purple-500">About Us</Link></li>
            <li><Link href="/blog" className="hover:text-purple-500">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-purple-500">Contact</Link></li>
            <li><Link href="/privacy" className="hover:text-purple-500">Privacy Policy</Link></li>
          </ul>
        </motion.div>

        {/* Social */}
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={2}>
          <h4 className="text-md font-semibold mb-3 text-gray-900 dark:text-white">Connect</h4>
          <div className="flex space-x-4">
            {socialIcons.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:text-purple-500 transition"
              >
                <item.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {currentYear} NextBrand. All rights reserved.
      </div>
    </footer>
  );
}
