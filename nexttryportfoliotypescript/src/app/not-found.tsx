// src/app/not-found.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BiErrorCircle } from 'react-icons/bi';

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-[calc(100vh-128px)] text-center px-4 py-16"
    >
      <motion.div
        initial={{ scale: 0.5, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.2 }}
        className="text-primary text-9xl mb-8"
      >
        <BiErrorCircle />
      </motion.div>
      <h1 className="text-6xl md:text-8xl font-orbitron font-bold text-secondary mb-4">
        404
      </h1>
      <p className="text-xl md:text-3xl text-text mb-6">Page Not Found</p>
      <p className="text-lg text-muted mb-8">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link href="/" passHref>
        <motion.button
          className="bg-gradient-to-r from-primary to-secondary text-background font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-primary/50 text-lg md:text-xl"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          aria-label="Go to Home Page"
        >
          Go to Homepage
        </motion.button>
      </Link>
    </motion.div>
  );
}