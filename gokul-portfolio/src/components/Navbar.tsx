// src/components/Navbar.tsx
'use client'; // Client component due to hooks and interactivity

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { navLinks, personalInfo } from '@/data'; // Import navLinks and personalInfo
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'; // For mobile menu icon
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
      className="sticky top-0 z-50 w-full bg-card bg-glassmorphism border-b border-primary/20 backdrop-blur-xl shadow-lg"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center relative">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center space-x-2 group">
          <motion.img
            src={personalInfo.profileImage} // Use profile image from data
            alt={`${personalInfo.name}'s Profile`}
            className="w-10 h-10 rounded-full border-2 border-primary group-hover:border-secondary transition-colors duration-300"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
          />
          <motion.span
            className="text-2xl font-orbitron font-bold text-gradient-primary group-hover:text-gradient-secondary transition-all duration-300"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.4 }}
          >
            {personalInfo.name.split(' ')[0]} {/* Just first name for logo */}
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.path}>
              <motion.span
                className={`relative text-lg font-poppins font-medium ${
                  pathname === link.path ? 'text-primary' : 'text-text hover:text-secondary'
                } transition-colors duration-300 group`}
                whileHover={{ scale: 1.05 }}
              >
                {link.name}
                {pathname === link.path && (
                  <motion.span
                    layoutId="underline" // Unique layoutId for the active indicator
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-primary focus:outline-none">
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation (Overlay) */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'ease-out-expo' }}
            className="absolute top-full left-0 w-full bg-card bg-glassmorphism border-t border-primary/20 shadow-xl py-6 md:hidden z-40"
          >
            <div className="flex flex-col items-center space-y-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path} onClick={toggleMenu}>
                  <motion.span
                    className={`text-2xl font-orbitron font-bold ${
                      pathname === link.path ? 'text-primary' : 'text-text hover:text-secondary'
                    } transition-colors duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {link.name}
                  </motion.span>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;