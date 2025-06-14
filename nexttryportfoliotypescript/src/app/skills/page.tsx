// src/app/skills/page.tsx
'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data';
import AnimatedText from '@/components/AnimatedText';
import SkillBadge from '@/components/SkillBadge';

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150, damping: 12 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="container mx-auto px-4 py-16"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-orbitron font-bold text-primary text-center mb-12"
        variants={categoryVariants}
      >
        <AnimatedText text="My Skills" staggerDelay={0.08} />
      </motion.h1>

      <motion.p className="text-lg text-text text-center mb-12 max-w-3xl mx-auto" variants={categoryVariants}>
        A comprehensive overview of my technical expertise and the tools I leverage to build robust and engaging web applications.
      </motion.p>

      <div className="space-y-12">
        {skills.map((category) => (
          <motion.div
            key={category.category}
            className="bg-card bg-glassmorphism rounded-2xl p-8 md:p-10 border border-primary/20 shadow-2xl"
            variants={categoryVariants}
          >
            <h2 className="text-3xl font-orbitron text-secondary text-center mb-8">
              {category.category}
            </h2>
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              variants={containerVariants} // Stagger skills within category
            >
              {category.items.map((skill) => (
                <motion.div key={skill.name} variants={skillItemVariants}>
                  <SkillBadge name={skill.name} level={skill.level} />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}