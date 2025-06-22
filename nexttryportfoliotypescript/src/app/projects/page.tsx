// src/app/projects/page.tsx
'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data';
import AnimatedText from '@/components/AnimatedText';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger project cards
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
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
        variants={itemVariants}
      >
        <AnimatedText text="My Projects" staggerDelay={0.08} />
      </motion.h1>

      <motion.p className="text-lg text-text text-center mb-12 max-w-3xl mx-auto" variants={itemVariants}>
        Here are some of the key projects I've worked on, showcasing my skills in web development and design. Each project highlights a unique challenge and solution.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}