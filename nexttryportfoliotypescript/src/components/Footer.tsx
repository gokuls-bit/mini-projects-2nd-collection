// src/components/Footer.tsx
'use client'; // Client component if using current year or interactive elements

import Link from 'next/link';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="bg-card bg-glassmorphism border-t border-primary/20 text-text py-8 px-4 text-center"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright */}
        <p className="text-sm md:text-base">
          &copy; {currentYear}{' '}
          <Link href="/" className="text-primary hover:text-secondary transition-colors duration-300">
            {personalInfo.name}
          </Link>
          . All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text hover:text-primary transition-colors duration-300 text-2xl"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Connect via ${link.name}`}
            >
              <link.icon />
            </motion.a>
          ))}
        </div>

        {/* Optional: Design credit or quick links */}
        <div className="text-sm md:text-base">
          Built with <span className="text-primary">&hearts;</span> & Next.js
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;