// src/components/AnimatedText.tsx
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string | string[];
  className?: string;
  staggerDelay?: number;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className, staggerDelay = 0.05 }) => {
  const textArray = Array.isArray(text) ? text : text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: staggerDelay, delayChildren: i * 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {textArray.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
          className="inline-block" // Allows individual word animation
        >
          {word === ' ' ? '\u00A0' : word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;