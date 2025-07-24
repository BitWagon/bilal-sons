'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Search, ChevronDown } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const links = [
    { name: 'Home', href: '/' },
    {
      name: 'Features',
      href: '/features',
      dropdown: [
        { name: 'Analytics', href: '/features/analytics' },
        { name: 'Security', href: '/features/security' },
        { name: 'Performance', href: '/features/performance' },
      ],
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="text-purple-600 dark:text-purple-400">NextBrand</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center relative">
          {links.map((link, i) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <button
                  className={`flex items-center gap-1 text-sm font-medium ${
                    pathname.startsWith(link.href)
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-500'
                  }`}
                >
                  {link.name}
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.ul
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute top-8 left-0 w-48 bg-white dark:bg-gray-800 shadow-md rounded-md py-2 z-50"
                    >
                      {link.dropdown.map((item) => (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.div
                key={link.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={linkVariants}
              >
                <Link
                  href={link.href}
                  className={`text-sm font-medium ${
                    pathname === link.href
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-purple-500'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            )
          )}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Search Icon */}
          <button className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition">
            <Search className="w-5 h-5" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden px-4 pb-4"
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
          >
            <motion.div className="flex flex-col space-y-3 pt-4">
              {links.map((link) =>
                link.dropdown ? (
                  <div key={link.name} className="space-y-1">
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                      {link.name}
                    </span>
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm pl-4 text-gray-700 dark:text-gray-300 hover:text-purple-500"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block text-sm font-medium ${
                      pathname === link.href
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-purple-500'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
