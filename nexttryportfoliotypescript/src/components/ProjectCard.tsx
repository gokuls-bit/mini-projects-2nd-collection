// src/components/ProjectCard.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'; // For external link icon
import { FaGithub } from 'react-icons/fa'; // For GitHub icon

interface ProjectCardProps {
  project: {
    id: number;
    name: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    live: string; 
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      className="bg-card bg-glassmorphism rounded-2xl p-6 flex flex-col h-full border border-primary/20 overflow-hidden relative shadow-lg group animated-border" // Added 'animated-border'
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, ease: 'ease-out-expo' }}
      whileHover={{ scale: 1.02, boxShadow: 'var(--tw-shadow-glow-secondary)' }}
    >
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4 border border-muted/20">
        <Image
          src={project.image}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="text-2xl font-orbitron font-bold text-primary mb-2">
        {project.name}
      </h3>
      <p className="text-text text-md mb-4 flex-grow">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm bg-background/50 text-muted px-3 py-1 rounded-full border border-muted/20"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex justify-between items-center mt-auto pt-4 border-t border-muted/10">
        <Link href={project.github} target="_blank" rel="noopener noreferrer">
          <motion.button
            className="flex items-center space-x-2 text-text hover:text-primary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub className="w-6 h-6" />
            <span className="font-poppins">Code</span>
          </motion.button>
        </Link>

        <Link href={project.live} target="_blank" rel="noopener noreferrer">
          <motion.button
            className="flex items-center space-x-2 text-text hover:text-secondary transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowTopRightOnSquareIcon className="w-6 h-6" />
            <span className="font-poppins">Live Demo</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
