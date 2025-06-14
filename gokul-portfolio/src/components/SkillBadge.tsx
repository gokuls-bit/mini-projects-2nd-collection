// src/components/SkillBadge.tsx
'use client';

import { motion } from 'framer-motion';

interface SkillBadgeProps {
  name: string;
  level: string; // e.g., 'Advanced', 'Intermediate', 'Basic'
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level }) => {
  return (
    <motion.div
      className="bg-card bg-glassmorphism rounded-lg px-5 py-3 border border-primary/20 shadow-md group animated-border" // Added 'animated-border'
      whileHover={{ scale: 1.05, boxShadow: 'var(--tw-shadow-glow-primary)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, ease: 'ease-out-expo' }}
    >
      <h4 className="text-lg font-poppins font-medium text-primary text-center">
        {name}
      </h4>
      <p className="text-sm text-muted text-center mt-1">{level}</p>
    </motion.div>
  );
};

export default SkillBadge;