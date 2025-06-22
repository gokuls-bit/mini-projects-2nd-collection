// src/app/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks } from '@/data';
import CTAButton from '@/components/CTAButton';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-128px)] flex items-center justify-center py-12 md:py-20 overflow-hidden">
      {/* Background Gradient Effect */}
      <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at top left, #FFD700 0%, transparent 40%), radial-gradient(circle at bottom right, #00BFFF 0%, transparent 40%)',
        }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Hero Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-primary mb-4 leading-tight">
            <AnimatedText text={personalInfo.name} staggerDelay={0.08} />
          </h1>
          <p className="text-2xl md:text-3xl text-secondary mb-4">
            <AnimatedText text={personalInfo.title} staggerDelay={0.06} />
          </p>
          <p className="text-lg md:text-xl text-muted italic mb-6">
            <AnimatedText text={personalInfo.motto} staggerDelay={0.02} />
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mb-8">
            <CTAButton href="/projects">View Projects</CTAButton>
            <CTAButton href={personalInfo.resumeLink} primary={false}>
              Download Resume
            </CTAButton>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 mt-6">
            {socialLinks.slice(0, 3).map((link) => ( // Display first 3 social links
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text hover:text-primary transition-colors duration-300 text-3xl"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Visit my ${link.name}`}
              >
                <link.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 10 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
          className="relative w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-glass-dark"
        >
          <Image
            src="/images/gokul_profile.webp" // Ensure you have your image here (e.g., gokul_profile.webp)
            alt={personalInfo.name}
            layout="fill"
            objectFit="cover"
            priority // Preload image
            className="grayscale hover:grayscale-0 transition-all duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 opacity-20 hover:opacity-0 transition-opacity duration-500"></div>
        </motion.div>
      </div>
    </div>
  );
}