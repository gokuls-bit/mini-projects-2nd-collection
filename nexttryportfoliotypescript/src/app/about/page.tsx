// src/app/page.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { personalInfo } from '@/data';
import CTAButton from '@/components/CTAButton';
import AnimatedText from '@/components/AnimatedText';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] text-center md:text-left"
    >
      {/* Left Section: Text Content */}
      <div className="flex-1 max-w-2xl md:mr-12 mb-12 md:mb-0">
        <motion.h1
          className="text-4xl md:text-6xl font-orbitron font-bold mb-4 leading-tight"
          variants={itemVariants}
        >
          {/* Using text-gradient for the name */}
          <AnimatedText text={personalInfo.name} staggerDelay={0.08} className="text-gradient-primary" />
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl mb-6 text-muted"
          variants={itemVariants}
        >
          {/* Using text-gradient for the title */}
          <AnimatedText text={personalInfo.title} staggerDelay={0.06} className="text-gradient-secondary" />
        </motion.p>

        <motion.p
          className="text-lg md:text-xl text-text leading-relaxed mb-8"
          variants={itemVariants}
        >
          {personalInfo.about}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start"
          variants={itemVariants}
        >
          <CTAButton href="/projects" ariaLabel="View My Projects">
            View My Projects
          </CTAButton>
          <CTAButton href="/contact" ariaLabel="Contact Me" className="bg-transparent border-2 border-primary hover:border-secondary">
            Contact Me
          </CTAButton>
        </motion.div>
      </div>

      {/* Right Section: Profile Image */}
      <motion.div
        className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-primary shadow-glow-primary bg-background"
        variants={itemVariants}
        initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.5 }}
      >
        <Image
          src={personalInfo.profileImage}
          alt={personalInfo.name}
          layout="fill"
          objectFit="cover"
          className="z-10"
        />
        {/* Optional: Add a subtle animated background behind the image for extra futuristic feel */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full z-0"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </motion.section>
  );
}